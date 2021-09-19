<template>
  <v-app id="app">
    <!-- <<v-navigation-drawer>
    </v-navigation-drawer> -->
    <v-app-bar
      dense
      app
      color="rgb(172,92,81)"
      shrink-on-scroll
      elevate-on-scroll
      fade-img-on-scroll
      height="300"
      src="https://wallpaperaccess.com/full/1251841.jpg"
      prominent
      dark
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(255,0,0,.2), rgba(0,0,72,.5)"
          scroll-target="#app"
        ></v-img>
      </template>
      <v-spacer></v-spacer>
      <h1> Mein Site OwO </h1>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <Home id="home"/>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';

import Home from '@/views/Home';

export default Vue.extend({
  name: 'App',
  components: {
    Home,
  },
  data: () => {
    //
  },
});
</script>

<style scoped>
h1 {
  font-size: 3.6vh;
  font-family: 'Roboto';
  color: rgb(255, 255, 255);
  font-weight: lighter;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
