<template>
  <div>
    <app-header />
    <app-contents :userIds="this.userIds"/>
    <app-footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import header from '@/components/modules/index/header'
import contents from '@/components/modules/index/contents'
import footer from '@/components/modules/index/footer'

export default {
  name: 'index',
  components: {
    'appHeader': header,
    'appContents': contents,
    'appFooter': footer
  },
  computed: {
    ...mapGetters(['userIds'])
  },
  methods: {
    ...mapActions(['addUsers'])
  },
  mounted () {
    this.addUsers()
  }
}
</script>

<style scoped>

</style>
