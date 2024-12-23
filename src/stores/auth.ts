import { toRefs, reactive } from 'vue'
import { defineStore } from 'pinia'

interface defaultState {
    accessToken: string,
    refreshToken: string,
    clientId: number
}

const defaultState: defaultState = {
    accessToken: '',
    refreshToken: '',
    clientId: 0
}

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({ ...defaultState })

  const getters = {
  }

  interface actions {
    setToken: Function,
    setClientId: Function
  }
  const actions: actions = {
    setToken(accessToken: string, refreshToken: string):void {
        state.accessToken = accessToken
        state.refreshToken = refreshToken
    },
    setClientId(clientId: number):void {
        state.clientId = clientId
    }
  }

  return {
    ...toRefs(state),
    ...getters,
    ...actions
  }
})
