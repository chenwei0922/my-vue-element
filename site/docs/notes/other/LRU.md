
# LRU & TTL

LRU & TTL 管理缓存行为。

## 示例代码
```ts
//LRU.ts
interface ConstOptions {
  /**
   * 缓存的时间
   */
  ttl?: number
  /**
   * 定期清除缓存的时间
   */
  ttlInterval?: number
  /**
   * 缓存的最大条目数
   */
  max?: number
  /**
   * 缓存的最大字节数
   */
  maxBytes?: number
}

//链表中的节点结构
interface NodeChain {
  /** Previous element */
  _prev?: NodeChain,
  /** Next element */
  _next?: NodeChain
}

interface node<K, V> extends NodeChain {
  value: V
  key: K
  /** effect maxBytes */
  bytes: number
  createdAt: number
  /** effect ttl  */
  lastAccess: number
}
type NodeReadOnly<K, V> = Readonly<node<K, V>>

//双向链表管理缓存
class LRU<K, V> implements NodeChain {
  private _map: Map<K, node<K, V>> = new Map()
  //缓存时间
  private _ttl: number
  //定期清除缓存时间
  private _ttlInterval: number
  //定时器
  private _ttlP?: NodeJS.Timeout = undefined;


  //最大条目数
  private _max: number
  //最大字节数
  private _maxBytes: number
  //缓存数据字节数
  private _tmpBytes: number = 0
  //缓存数据条数
  private _tmpSize: number = 0

  //最近使用的元素
  _next: NodeChain = this
  //最少使用的元素
  _prev: NodeChain = this

  constructor(options?: ConstOptions) {
    const { ttl, ttlInterval, max, maxBytes } = options || {}
    this._ttl = ttl ?? Infinity
    this._ttlInterval = ttlInterval ?? Infinity
    this._max = max ?? Infinity
    this._maxBytes = maxBytes ?? Infinity
    if (this._ttlInterval > this._ttl) {
      this._ttlInterval = this._ttl
    }

    this._prev = this._next = this
  }

  private _set(key: K, value: V, bytes: number = 0) {
    let now = Date.now()
    let ele: node<K, V> = {
      key,
      value,
      bytes,
      createdAt: now,
      lastAccess: now,
      _prev: undefined,
      _next: undefined
    }

    // 将新的键值对和元数据添加到缓存中
    this._map.set(key, ele)

    //将新元素插入链表头
    let p = this._next
    p._prev = ele
    ele._next = p
    ele._prev = this
    this._next = ele

    this._tmpSize++
    this._tmpBytes += bytes

    if (this._tmpSize > this._max) {
      //数量超了，删除最近最少使用元素(LRU)
      this._delete(this._prev as node<K, V>)
    }
    while (this._tmpBytes > this._maxBytes && this._prev != this) {
      //内存超了，删除最近最少使用元素(LRU)
      this._delete(this._prev as node<K, V>)
    }
    if (!this._ttlP) {
      //定时器，ttl 定期清除过期缓存
      this._ttlP = setInterval(this._ttlClean.bind(this), this._ttlInterval)
    }
    return ele
  }
  private _delete(ele: node<K, V>) {
    //map中删除
    this._map.delete(ele.key)

    //改变已缓存大小
    const bytes = ele.bytes
    this._tmpBytes -= bytes
    this._tmpSize--

    //链表中删除
    let p = ele._next!
    let p2 = ele._prev!
    p._prev = p2
    p2._next = p
  }
  private _ttlClean() {
    let expires = Date.now() - this._ttl
    let p = this._prev as node<K, V>
    let bytes = 0
    let map = this._map
    while ((p as NodeChain) !== this && p.lastAccess < expires) {
      bytes += p.bytes
      map.delete(p.key)
      p = p._prev as node<K, V>
    }
    if ((p as NodeChain) === this) {
      //删除所有节点
      this._prev = this._next = this
      this._tmpBytes = 0
      this._tmpSize = 0
      clearInterval(this._ttlP)
      this._ttlP = undefined
    } else {
      this._prev = p
      p._next = this
    }
  }

  has(key: K) {
    return this._map.has(key)
  }

  set(key: K, value: V, bytes: number = 0) {
    const item = this._map.get(key)
    if (item) {
      if (item.value === value && item.bytes === bytes) {
        item.lastAccess = Date.now()
        //保留：这里是否要调整链中顺序
        return this
      }
      this._delete(item)
    }
    this._set(key, value, bytes)
    return this
  }
  delete(key: K) {
    const item = this._map.get(key)
    if (item) {
      this._delete(item)
    }
    return this
  }
  get(key: K) {
    const item = this._map.get(key)
    if (item) {
      item.lastAccess = Date.now()
      //ttl timeout变了，调整链中顺序(若当前元素非头指针时)
      if (item._prev !== this) {
        //remove from chain
        let p = item._next!
        let p2 = item._prev!
        p2._next = p
        p._prev = p2
        //bring forward
        p = this._next
        p._prev = item
        item._next = p
        item._prev = this
        this._next = item
      }
      return item.value
    }
    return undefined
  }
  peek(key: K) {
    return this._map.get(key)?.value
  }
  getMetadata(key: K): NodeReadOnly<K, V> | undefined {
    const item = this._map.get(key)
    return item ? { ...item } : item
  }
  clearAll() {
    this._next = this._prev = this
    this._map.clear()
    this._tmpBytes = 0
    this._tmpSize = 0

  }
}

//example.ts
const a = new LRU({ ttl: 5 * 1000, ttlInterval: 5 * 1000, max: 20, maxBytes: 1024 })
a.set('a', { num: 1 })
```
