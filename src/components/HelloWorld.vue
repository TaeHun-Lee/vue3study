<script setup>
import store from '../store'
const prop = defineProps({
  propObj: {
    type: Object,
    required: true
  }
})
console.log('propObj -- ', prop.propObj.count.value)
</script>

<template>
  <h1>This is Prop </h1>
  {{ prop.propObj.count }}<br/>
  <button @click="prop.propObj.increment"></button><br/>
  <h1>This is stored</h1>
  {{ store.count }}<br/>
  <button @click="store.increment"></button><br/>
</template>

<style scoped>
</style>
