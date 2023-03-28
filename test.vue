<script setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const query = reactive({ versionName: '' })
const state = reactive({ data: [] })

const queryEvent = () => {
  console.log(
    'you click query btn. the value of query field value =',
    query.versionName
  )
}

const addEvent = () => {
  console.log('you click add btn.')
  router.push({
    name: 'version-create',
    params: { isAdd: true, isRead: false }
  })
}
const detailEvent = (val) => {
  console.log('you click detail btn.', val)
  router.push({
    name: 'version-create',
    params: { isAdd: false, isRead: true }
  })
}
const editEvent = (val) => {
  console.log('you click edit btn.', val)
  router.push({
    name: 'version-create',
    params: { isAdd: false, isRead: false }
  })
}
const init = () => {
  let tempDic = {
    name: '提审2.1',
    buildName: '2.3',
    materialName: '圣诞特别版',
    reviewStatusDisplay: '审核不通过',
    reviewStatus: 'reject',
    reviewTime: '2022-08-23',
    publishStatusDisplay: '待发布',
    publishStatus: 'wait',
    publishTime: '2022-03-03'
  }
  const arr = []
  for (let i = 0; i < 10; i++) {
    const j = i % 4
    if (j === 0) {
      tempDic = {
        ...tempDic,
        reviewStatus: 'reject',
        reviewStatusDisplay: '审核不通过',
        publishStatus: 'wait',
        publishStatusDisplay: '待发布'
      }
    } else if (j === 1) {
      tempDic = {
        ...tempDic,
        reviewStatus: 'ing',
        reviewStatusDisplay: '审核中',
        publishStatus: 'publish',
        publishStatusDisplay: '已发布'
      }
    } else if (j === 2) {
      tempDic = {
        ...tempDic,
        reviewStatus: 'pass',
        reviewStatusDisplay: '审核通过',
        publishStatus: 'offline',
        publishStatusDisplay: '已下线'
      }
    } else if (j === 3) {
      tempDic = {
        ...tempDic,
        reviewStatus: 'pass',
        reviewStatusDisplay: '审核通过',
        publishStatus: 'draft',
        publishStatusDisplay: '草稿'
      }
    }
    arr.push(tempDic)
  }
  state.data = arr
}
onMounted(() => {
  init()
})
const code = '<span></span>'
</script>
<template>
  <div class="app-container">
    <div v-html="code" />
    <p>
      <span>hahah</span>
    </p>
    <div>
      <qy-radio v-mode="form.a" />
      <div />
    </div>
    <div class="qy-card version">
      <span class="title">{{ $tm('appDetail.version.title') }}</span>
      <div class="top-view">
        <div class="search-view">
          <span class="text">{{ $tm('appDetail.version.searchLabel') }}:</span>
          <qy-input
            v-model="query.versionName"
            :placeholder="$tm('appDetail.version.searchPlaceholder')"
            clearable
            style="width: 240px"
          />
        </div>
        <div class="btns">
          <qy-button type="info" @click="queryEvent()">{{
            $tm('page.queryBtn')
          }}</qy-button>
          <qy-button type="primary" @click="addEvent()">{{
            $tm('page.addBtn')
          }}</qy-button>
        </div>
      </div>
      <div class="content-view">
        <qy-table :data="state.data">
          <qy-table-column
            :label="$tm('appDetail.version.nameLabel')"
            prop="name"
          />
          <qy-table-column
            :label="$tm('appDetail.version.buildLabel')"
            prop="buildName"
          />
          <qy-table-column
            :label="$tm('appDetail.version.assetLabel')"
            prop="materialName"
          />

          <qy-table-column :label="$tm('appDetail.version.reviewStatusLabel')">
            <template #default="{ row }">
              <span
                class="qy-dot"
                :class="{
                  error: row.reviewStatus === 'reject',
                  warning: row.reviewStatus === 'ing',
                  success: !['reject', 'ing'].includes(row.reviewStatus)
                }"
              />
              <span>{{ row.reviewStatusDisplay }}</span>
            </template>
          </qy-table-column>

          <qy-table-column :label="$tm('appDetail.version.publishStatusLabel')">
            <template #default="{ row }">
              <span
                class="qy-dot"
                :class="{
                  info: row.publishStatus === 'offline',
                  warning: row.publishStatus === 'wait',
                  success: !['offline', 'wait'].includes(row.reviewStatus)
                }"
              />
              <span>{{ row.publishStatusDisplay }}</span>
            </template>
          </qy-table-column>

          <qy-table-column
            :label="$tm('appDetail.version.reviewTimeLabel')"
            prop="reviewTime"
          />
          <qy-table-column
            :label="$tm('appDetail.version.publishTimeLabel')"
            prop="publishTime"
          />
          <qy-table-column :label="$tm('page.actionLabel')">
            <template #default="{ row }">
              <qy-button type="primary" text @click="detailEvent(row)">{{
                $tm('page.detailBtn')
              }}</qy-button>
              <qy-button type="primary" text @click="editEvent(row)">{{
                $tm('page.editBtn')
              }}</qy-button>
            </template>
          </qy-table-column>
        </qy-table>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.version {
  .title {
    font-size: var(--qy-font-medium);
    font-weight: var(--qy-fontWeight-medium);
    font-family: var(--qy-family-medium);
    color: var(--qy-text-main);
    line-height: 24px;
  }

  .top-view {
    margin-top: calc(2 * var(--qy-margin-gap-smaller));
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .search-view {
      display: flex;
      flex-direction: row;
      align-items: center;

      .text {
        font-size: var(--qy-font-normal);
        color: var(--qy-text-main);
        margin-right: var(--qy-margin-gap-mini);
      }

      .btns {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }

  .content-view {
    margin-top: var(--qy-margin-gap);

    .qy-dot {
      margin-right: var(--qy-margin-gap-mini);
    }
  }
}
</style>
