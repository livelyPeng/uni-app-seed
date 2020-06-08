import router from './routerConfig'
import homeModule from './store'
export default {
	install (Vue, {store, routerConfig}) {
	  store.commit('SETROUTERCONFIG', {routerConfig, router})
	  store.registerModule('homeModule', homeModule)
	}
}