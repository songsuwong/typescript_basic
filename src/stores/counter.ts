import { toRefs, reactive } from 'vue'
import { defineStore } from 'pinia'

interface defaultState {
  account: string,
  count: number
}

const defaultState: defaultState = {
  account:'',
  count: 0
}

export const useCounterStore = defineStore('counter', () => {
  const state = reactive({ ...defaultState })

  const getters = {
  }

  interface actions {
    increment: Function,
    reset: Function,
    doubleCount: Function
  }
  const actions: actions = {
    increment():void {
      state.count++
    },
    reset():void {
      state.count = 0
    },
    doubleCount():void {
      state.count = state.count * 2
    }
  }

  return {
    ...toRefs(state),
    ...getters,
    ...actions
  }
})
