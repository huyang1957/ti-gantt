<script setup>
import vGantt from "./index.vue"

const y = new Date().getFullYear()
const m = `${new Date().getMonth() + 1}`.padStart(2, 0)
const d = (date) => `${y}-${m}-${date}`

const data = [
  {
    id: 'group-1',
    name: 'GN20241015001A001',
    gpcolor: '#5cb87a',
    children: [
      {
        id: 'item-1',
        name: '下料',
        progress: 70,
        startDate: d('06'),
        endDate: d('07'),
        colors: [
          { color: '#f56c6c', percentage: 20 },
          { color: '#e6a23c', percentage: 40 },
          { color: '#5cb87a', percentage: 60 },
          { color: '#1989fa', percentage: 80 },
          { color: '#6f7ad3', percentage: 100 }
        ],
        tip: {
          show: true,
          content: '<span style="color:red">重要专案</span><br>-1-',
          placement: 'bottom-start'
        }
      },
      {
        id: 'item-1-1',
        name: '折弯',
        progress: 50,
        startDate: d('08'),
        endDate: d('09'),
        colors: [
          { color: '#f56c6c', percentage: 20 },
          { color: '#e6a23c', percentage: 40 },
          { color: '#5cb87a', percentage: 60 },
          { color: '#1989fa', percentage: 80 },
          { color: '#6f7ad3', percentage: 100 }
        ],
        tip: {
          show: true,
          content: '<span style="color:red">叶节点</span><br>-1---',
          placement: 'bottom-start'
        }
      },
      {
        id: 'item-1-3',
        name: '焊接',
        progress: 30,
        startDate: d('10'),
        endDate: d('10'),
        colors: [
          { color: '#f56c6c', percentage: 20 },
          { color: '#e6a23c', percentage: 40 },
          { color: '#5cb87a', percentage: 60 },
          { color: '#1989fa', percentage: 80 },
          { color: '#6f7ad3', percentage: 100 }
        ],
        tip: {
          show: true,
          content: '<span style="color:red">叶节点</span><br>-1---',
          placement: 'bottom-start'
        }
      },
    ],
  },
];

const treeAttrs = {
  draggable: true,
}


const view = 'day'
const option = {
  delay: 500,
  size: 5
}
</script>

<template>
  <div id="app">
    <v-gantt style="height: 400px;" :tree-attrs="treeAttrs" :data.sync="data" :view.sync="view" :option="option">
      <div slot="tree-header">
        <h5 style="margin: 0">生产计划图</h5>
      </div>
    </v-gantt>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Microsoft YaHei";
  padding: -10px;
  background-color: var(--el-bg-color);
}
</style>
