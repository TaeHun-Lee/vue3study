<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
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
  <header>
    <div class="wrapper">
      <h1>This is local</h1>
      {{ count }}<br/>
      <button @click="increment"></button><br/>
      <h1>This is stored</h1>
      {{ store.count }}<br/>
      <button @click="store.increment"></button><br/>
      <HelloWorld :propObj="counterObj" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style>
</style>
