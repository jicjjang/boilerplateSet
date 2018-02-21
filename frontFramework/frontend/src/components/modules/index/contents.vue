<template>
  <ul>
    <li v-for="(v, k) in userIds" :key="k">{{ v }}</li>
  </ul>
</template>

<script>
export default {
  name: 'index__contents',
  props: ['userIds']
}
</script>

<style scoped>

</style>
