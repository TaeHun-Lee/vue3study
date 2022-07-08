<script setup>
import store from '../store'
const prop = defineProps({
  propObj: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <h1>This is Prop </h1>
  {{ prop.propObj.count }}<br/>
  <button @click="prop.propObj.increment">Prop Increase</button><br/>
  <h1>This is stored</h1>
  {{ store.count }}<br/>
  <button @click="store.increment">Store Increase</button><br/>
</template>

<style scoped>
</style>
