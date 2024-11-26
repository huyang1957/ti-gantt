import TiGantt from './src/index.vue'
import GanttLayout from './src/components/gantt-layout.vue'

export default {
	install:(app,options)=>{
		app.component('TiGantt',TiGantt)
		app.component('GanttLayout',GanttLayout)
	}
}