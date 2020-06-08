import router from './routerConfig'
import accountModule from './store'
export default {
	install (Vue, {store, routerConfig}) {
	  store.commit('SETROUTERCONFIG', {routerConfig, router})
	  store.registerModule('accountModule', accountModule)
	}
}