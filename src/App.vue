<script setup>
import Child from './components/HelloWorld.vue'
import { ref } from 'vue'
import store from './store'
const count = ref(0)
const increment = () => {
  count.value++
}
const counterObj = {
  count, increment
}
</script>

<template>
  <div>
    <div class="wrapper">
      <h1>This is local</h1>
      {{ count }}<br/>
      <button @click="increment">Local Increase</button><br/>
      <h1>This is stored</h1>
      {{ store.count }}<br/>
      <button @click="store.increment">Store Increase</button><br/>
      <child :propObj="counterObj" />
    </div>
  </div>
</template>

<style>
</style>
