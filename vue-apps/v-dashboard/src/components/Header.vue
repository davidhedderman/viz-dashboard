<template>
  <b-row>
    <b-col cols="5" @click="changePage('homepage')">
      {{ site_title }}
    </b-col>
    <b-col cols="1">
      <b-button @click="changePage('dash_1')">
        Dashboard 1
      </b-button>
    </b-col>
    <b-col cols="1">
      <b-button @click="changePage('dash_2')">
        Dashboard 2
      </b-button>
    </b-col>
    <b-col cols="1">
      <b-button @click="changePage('dash_3')">
        Dashboard 3
      </b-button>
    </b-col>
    <b-col cols="4">User info</b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  props: {
    site_title: String,
  },
  methods: {
    ...mapActions('pageNavigation', ['changePage']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
