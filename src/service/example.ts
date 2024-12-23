import api from '@/api'
import { useAuthStore } from '@/stores/auth'

const getHealthcheck = async () => {
  try {
    return await api.example
      .getHealthcheck()
      .then((data) => {
        let text :string = JSON.stringify(data.data.data)
        return text
      })
      .catch((error) => {
        throw error
      })
  } catch(error) {
    throw error
  }
}

const login = async () => {
  try {
    return await api.example
      .postLogin()
      .then((data) => {
          let text :string = JSON.stringify(data.data.data)
          const authStore = useAuthStore()
          authStore.setClientId(data.data.data.clientId)
          authStore.setToken(data.data.data.accessToken, data.data.data.refreshToken)
          return text
      })
      .catch((error) => {
          throw error
      })
  } catch(error) {
    throw error
  }
}

const testToken = async () => {
  try {
    return await api.example
      .postTestToken()
      .then((data) => {
          let text :string = JSON.stringify(data.data.data)
          return text
      })
      .catch((error) => {
          throw error
      })
  } catch(error) {
    throw error
  }
}

const testTokenExpired = async () => {
  try {
    return await api.example
      .postTestTokenExpired()
      .then((data) => {
          let text :string = JSON.stringify(data.data.data)
          const authStore = useAuthStore()
          authStore.setClientId(data.data.data.clientId)
          authStore.setToken(data.data.data.accessToken, data.data.data.refreshToken)
          return text
      })
      .catch((error) => {
          throw error
      })
  } catch(error) {
    throw error
  }
}

const refreshToken = async (form: object) => {
  try {
    return await api.example
      .postRefreshToken(form)
      .then((data) => {
          let text :string = JSON.stringify(data.data.data)
          const authStore = useAuthStore()
          authStore.setClientId(data.data.data.clientId)
          authStore.setToken(data.data.data.accessToken, data.data.data.refreshToken)
          return text
      })
      .catch((error) => {
          throw error
      })
  } catch(error) {
    throw error
  }
}
export default {
    getHealthcheck,
    login,
    refreshToken,
    testTokenExpired,
    testToken
}