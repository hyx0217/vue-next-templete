import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators'
export interface CountState {
  count: number
}

@Module({ namespaced: true })
class Count extends VuexModule implements CountState {
  public count = 0
  @Mutation
  private increment() {
    this.count++
  }
  @Mutation
  private decrement() {
    this.count--
  }
  @Action
  public Increment() {
    this.context.commit('increment')
  }
  @Action
  public Decrement() {
    this.context.commit('decrement')
  }
}
export const CountModule = Count
