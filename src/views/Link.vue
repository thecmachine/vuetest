<script>
export default {
  el:"#custom_link",
  data() {
    return {
      link: "https://www.testdome.com/",
      color: { color:"blue" },
      rawContent: '<abbr title="More Tests">TestDome.com</abbr>'
    }
  },
}
</script>

<template>
<br/>
  <h1>Link Example</h1>
  <a id="custom_link" target="_blank" :href="link" :style="color">
    <div v-html="rawContent" ></div>
  </a>
</template>

<style>

</style>