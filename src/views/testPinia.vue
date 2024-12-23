<script setup lang="ts">
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
function increment(): void{
  counter.increment()
}
function doubleCount(): void{
  counter.doubleCount()
}
function reset(): void{
  counter.reset()
}

</script>
<template>
  <div class="about">
    <h1>count is {{ counter.count }}</h1>
    <button
      @click = 'increment'
    > 
      increment 
    </button>
    <button
      @click = 'doubleCount'
    > 
      doubleCount 
    </button>
    <button
      @click = 'reset'
    > 
      reset 
    </button>
  </div>
</template>

<style>
</style>
