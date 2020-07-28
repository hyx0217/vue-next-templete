import { createStore } from 'vuex'
import { CountModule } from './modules/count'

export default createStore({
  modules: {
    count: CountModule
  }
})
