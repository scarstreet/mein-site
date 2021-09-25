<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="navBarOpened"
      height="100%"
      app
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="navBarOpened"
        >
          <v-list-item
            v-for="item in routes"
            :key="item.title"
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{item.title}}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      dense
      app
      flat
      color="primary"
      shrink-on-scroll
      fade-img-on-scroll
      elevate-on-scroll
      fixed
      height="300"
      src="https://wallpaperaccess.com/full/1251841.jpg"
      dark
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(255,0,0,.2), rgba(0,0,72,.5)"
          scroll-target="#app"
        ></v-img>
      </template>
      <v-app-bar-nav-icon class="middleOfAppbar"
        @click="navBarOpened = !navBarOpened">
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <h1 class="middleOfAppbar"> Mein Site OwO </h1>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-slide-x-reverse-transition>
        <router-view />
      </v-slide-x-reverse-transition>
      <!-- <Home id="home" /> -->
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: {
  },
  data: () => ({
    routes: [
      { title: 'Home', icon: 'mdi-home-outline', path: '/' },
      { title: 'Music Sheet', icon: 'mdi-music-clef-treble', path: '/music-sheets' },
    ],
    navBarOpened: false,
  }),
});
</script>

<style scoped>
h1 {
  font-size: 3.6vh;
  font-family: 'Roboto';
  color: rgb(255, 255, 255);
  font-weight: lighter;
}
.middleOfAppbar {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
