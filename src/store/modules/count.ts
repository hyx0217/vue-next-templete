import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators';
export interface CountState {
  count: number
}

@Module({ namespaced:true})
class Count extends VuexModule implements CountState {
  public count = 0;
  @Mutation
  private SET_COUNT(count: number) {
    this.count = count
  }
  @Action
  public Increment(count:number) {
    this.context.commit('SET_COUNT',count)
  }
  @Action Decrement(count:number) {
    this.context.commit('SET_COUNT',count)
  }
}
export const CountModule = Count;