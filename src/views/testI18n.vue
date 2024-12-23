<script setup lang="ts">
import { i18n } from '@/plugins/i18n'
import { loadLocale } from '@/plugins/i18n'

const { t } = i18n

function changeLanguage(): void{
  if (i18n.locale.value == 'zh-tw'){
    loadLocale('en-us')
  } else {
    loadLocale('zh-tw')
  }
  alert(t('l-change') + ' ' + t('l-success'))
}
</script>

<template>
  <div>
     <h1>{{ $t('l-test') }}</h1>
    <button @click='changeLanguage'>{{ $t('l-change') }}</button>   
  </div>
</template>
