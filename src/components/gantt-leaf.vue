<template>
  <div class="gantt-leaf" @mousedown.stop="$emit('drag-start', $event)" @click.stop="$emit('focus-start')"
    @mouseover.stop="$emit('hover-start')" @mouseout.stop="$emit('hover-end')">
    <el-tooltip content="任务名称" placement="top" effect="light" :show-after="1000">
      <template #content><span v-html="data.tip.content"></span></template>
      <gantt-progress :progress="data.progress" :colors="data.colors" :tip="data.tip" />
    </el-tooltip>
    <div class="drag-handle" @mousedown.stop="$emit('resize-start', $event)">
      <span class="icon"></span>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue'
import { GanttLayoutLeaf } from '../utils/types.ts'
import GanttProgress from './gantt-progress.vue'

export default {
  name: 'GanttLeaf',
  components: { GanttProgress },
  props: {
    data: {
      type: Object as PropType<GanttLayoutLeaf>,
      required: true,
    },
  },
}
</script>
<style lang="less" scoped>
.gantt-leaf {
  display: flex;
  align-items: center;
  cursor: grab;

  .el-progress {
    flex: 1 0 0;
  }

  &:hover,
  &.moving {
    .drag-handle {
      opacity: 1;
    }
  }

  .drag-handle {
    opacity: 0;
    display: flex;
    position: absolute;
    right: 0;
    @size: 16px;

    top: calc(50% - (@size / 2));
    width: @size;
    height: @size;
    cursor: col-resize;
    align-items: center;
    justify-content: center;

    &:hover {
      .icon {
        opacity: 1;
      }
    }

    .icon {
      opacity: 0.7;
      width: 9px;
      height: 8px;
      background: linear-gradient(to right, black 1px, transparent 1px);
      background-size: 33.3%;
    }
  }
}
</style>
