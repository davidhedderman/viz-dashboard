<template>
  <b-container class="bv-example-row" fluid="md">
    <b-row>
      <b-col offset-md="3">{{ header }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    header: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
