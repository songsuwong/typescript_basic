import { createI18n } from 'vue-i18n'
import axios from 'axios'

let messages = {}
let loadedLocale: any[] = []

export const getInitLocale = () :string => {
    return ( navigator.language || 'en-us').toLowerCase()
}

  const i18nInstance = createI18n({
    locale: getInitLocale(),
    messages,
    allowComposition: true, //兼容 composition api
    silentTranslationWarn: true,
    silentFallbackWarn: true,
    legacy: false,
    warnHtmlMessage: false
  })
  let i18n = i18nInstance.global

export const loadLocale = async (locale :string) => {
    let userLocale = locale
  
    if (!loadedLocale.includes(userLocale)) {
      let message = ''
      try {
        message = (await import(`@/language/${locale}.json`)).default as any
      } catch(error) {
        message = (await import('@/language/en-us.json')).default as any
        userLocale = 'en-us'
      }
      loadedLocale.push(userLocale)
      i18n.setLocaleMessage(userLocale, message)
    }
  
    i18n.locale.value = userLocale
    axios.defaults.headers.common['Accept-Language'] = userLocale
}



  export { i18n, i18nInstance}