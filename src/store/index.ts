import { createStore } from "vuex";
import { UserState } from './modules/user'
import { CountModule } from './modules/count'

export default createStore({
  modules: {
    count: CountModule
  }
});
