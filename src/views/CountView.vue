<script setup>
import CountItem from '../components/CountItem.vue'
</script>

<template>
  <div>
    <CountItem v-bind:counter="5"></CountItem>
    <CountItem v-bind:counter="10"></CountItem>
    <CountItem v-bind:counter="-5"></CountItem>
  </div>
</template>

<style></style>