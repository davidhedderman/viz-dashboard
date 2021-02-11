<template>
  <b-container class="bv-example-row" fluid="md">
    <b-row>
      <b-col offset-md="3">{{ currentPage }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MainDashboard',
  computed: {
    ...mapState('pageNavigation', ['currentPage']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
