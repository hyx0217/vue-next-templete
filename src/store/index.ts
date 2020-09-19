import { createStore } from 'vuex';
import { CountModule } from './modules/count';
import { UserModule } from './modules/user';


export default createStore({
  modules: {
    user: UserModule,
    count: CountModule,
  }
});
