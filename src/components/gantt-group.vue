<template>
  <div class="gantt-group">
    <div class="self-content" :style="contentStyle" @mousedown.stop="$emit('drag-start', $event)"
      @click.stop="$emit('focus-start')" @mouseover.stop="$emit('hover-start')" @mouseout.stop="$emit('hover-end')">
      <gantt-progress :progress="data.progress" type="group" :colors="[{ 'color': data.gpcolor, 'percentage': 100 }]"
        :tip="data.tip" />
    </div>
    <transition>
      <div v-show="showChildren">
        <gantt-layout :data="data.children" :bus="bus" />
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue'
import { GanttLayoutGroup, Bus } from '@/utils/types'
import GanttProgress from './gantt-progress.vue'
import GanttLeaf from './gantt-leaf.vue'

export default {
  name: 'GanttGroup',
  components: {
    GanttProgress,
    GanttLeaf,
  },
  data: () => ({
    dragData: {
      dragging: false,
      offsetX: 0,
    },
    resizeData: {
      resizing: false,
      offsetX: 0,
    },
    focusing: false,
    hovering: false,
    otherWorking: false,
  }),
  props: {
    data: {
      type: Object as PropType<GanttLayoutGroup>,
      required: true,
    },
    bus: {
      type: Object as PropType<Bus>,
      required: true,
    },
  },
  computed: {
    showChildren(): boolean {
      return !this.bus.collapsedMap[this.data.id]
    },
    contentStyle(): { height: string } {
      return {
        height: this.bus.rowH + 'px',
      }
    },
    borderStyle(): { top: string; bottom: string } {
      const half = this.bus.rowH / 2 + 'px'
      return {
        top: half,
        bottom: half,
      }
    },
  },
}
</script>
<style lang="less" scoped>
.gantt-group {
  display: flex;
  flex-direction: column;
  @borderColor: rgb(25, 104, 206);

  .self-content {
    display: flex;
    align-items: center;
    cursor: grab;

    .gantt-progress {
      flex: 1 0 0;
    }
  }

  .gantt-layout {
    flex: 1 0 0;
  }

  .v-enter,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s;
  }
}
</style>
