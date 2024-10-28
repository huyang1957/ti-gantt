import TiGantt from './src/index.vue'

export default {
	install:(app,options)=>{
		app.component('TiGantt',TiGantt)
	}
}