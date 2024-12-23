<script setup lang="ts">
import example from '@/service/example';
import { ref } from 'vue'
import { removePinia } from '@/stores'
import { AxiosError } from 'axios';

const returnMsg = ref<string>('')

async function healthcheck() {
  try{
    const callback = await example.getHealthcheck()
    returnMsg.value = callback
  } catch(error){
    console.log(error)
  }
}

async function login() {
  try{
    const callback = await example.login()
    returnMsg.value = callback
  } catch(error){
    console.log(error)
  }
}

async function logout() {
  removePinia()
  returnMsg.value = 'logout'
}

async function token() {
  try{
    const callback = await example.testToken()
    returnMsg.value = callback
  } catch(error: unknown){
    let errorMsg :string = ''
    let errorStatus :number|undefined = 0
    let errorResponse :string = ''

    if (error instanceof AxiosError) {
      errorMsg = error.message
      errorStatus = error.status
      errorResponse = JSON.stringify(error.response?.data.data)
    } 
    returnMsg.value = 'errorMsg: ' +  errorMsg + '\n' + 'errorStatus: ' +  errorStatus + '\n' + 'errorResponse: ' +  errorResponse + '\n'
  }
}

async function tokenExpired() {
  try{
    const callback = await example.testTokenExpired()
    returnMsg.value = callback
  } catch(error){
    let errorMsg :string = ''
    let errorStatus :number|undefined = 0
    let errorResponse :string = ''

    if (error instanceof AxiosError) {
      errorMsg = error.message
      errorStatus = error.status
      errorResponse = JSON.stringify(error.response?.data.data)
    } 
    returnMsg.value = 'errorMsg: ' +  errorMsg + '\n' + 'errorStatus: ' +  errorStatus + '\n' + 'errorResponse: ' +  errorResponse + '\n'
  }
}
</script>
<template>
  <div>
    <h3>test api</h3>
    <br>
    <button @click = 'healthcheck'>healthcheck</button>
    <br>
    <button @click = 'login'>login</button>
    <br>
    <button @click = 'logout'>logout</button>
    <br>
    <button @click = 'token'>need token api</button>
    <br>
    <button @click = 'tokenExpired'>token expired</button>
  </div>
  <textarea style = "height: 300px">
{{ returnMsg }}
  </textarea>
</template>

<style>
</style>
