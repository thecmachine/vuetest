<script>
export default {
  data() {
    return {
      message: 'Count Example',
      // count: 5,
      count: this.$attrs.counter,
      countColor: { color:"green" }
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    },
    notify() {
      alert('navigation was prevented.')
    },
    evaluateCount() {
      this.count -= 1;
      if(this.count < 0) {
        this.countColor = {color: "red"};
      }
    }
  }
}
</script>

<template>
  <div class="item">
    <div class="details">
      <h3>
        <slot name="counter">
          <br/>
          <h1>{{ message }}</h1> 

          <button @click="evaluateCount">{{ count }}</button>
          <div id="counter" :style="countColor" v-on:click="evaluateCount">{{ count }}</div>
        </slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
