let textarea: HTMLTextAreaElement | undefined = undefined

const HIDE_STYLE = `
height:0 !important;
visibility:hidden !important;
position:absolute !important;
z-index:-1000 !important;
top:0 !important;
right:0 !important;
`
const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
]
type NodeStyle = {
  contextStyle: string
  paddingSize: number
  borderSize?: number
  boxSizing?: string
}
type TextAreaHeight = {
  height: string
  minHeight?: string
}

const calculateNodeStyle = (target: Element): NodeStyle => {
  const style = window.getComputedStyle(target)
  const contextStyle = CONTEXT_STYLE.map(name => `${name}:${style.getPropertyValue(name)}`).join(';')
  const paddingSize =
    Number.parseFloat(style.getPropertyValue('padding-bottom')) +
    Number.parseFloat(style.getPropertyValue('padding-top'))

  return { contextStyle, paddingSize }
}
export const calcTextareaHeight = (target: HTMLTextAreaElement, minRows = 1, maxRows?: number): TextAreaHeight => {
  if (!textarea) {
    textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
  }
  const { contextStyle, paddingSize } = calculateNodeStyle(target)
  textarea.setAttribute('style', `${contextStyle};${HIDE_STYLE};`)
  textarea.value = target.value

  let height = textarea.scrollHeight
  textarea.value = ''
  const singleRowHeight = textarea.scrollHeight - paddingSize
  const result = {} as TextAreaHeight

  if (minRows) {
    const minHeight = singleRowHeight * minRows + paddingSize
    height = Math.max(minHeight, height)
    result.minHeight = `${minHeight}px`
  }
  if (maxRows) {
    const maxHeight = singleRowHeight * maxRows + paddingSize
    height = Math.min(maxHeight, height)
  }
  result.height = `${height}px`
  textarea.parentNode?.removeChild(textarea)
  textarea = undefined

  console.log('height=', height)
  return result
}
