<template>
  <div class="welcome">
    <div v-if="$vuetify.breakpoint.smAndDown" class="ma-5">
      <h1 align="center" class="display-2">{{welcome.title}}</h1>
      <br/>
      <p align="center" class="subtitle-1">{{welcome.text}}</p>
    </div>
    <div v-else>
      <v-row justify-center align="center" class="ma-5">
        <v-col>
          <h1 align="left" class="display-2">{{welcome.title}}</h1>
        </v-col>
        <v-col>
          <p class="subtitle-1">{{welcome.text}}</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Welcome',
  data: () => ({
    welcome: {
      title: 'Welcome to My Page',
      text: "Hey there, Welcome to my website! I'm Scarstreet and life is meaningless, just like this website. Jk, I made this website to potentially showcase my abilities in webdesign or, uhm, webbuilding(??). well, whatever it may be, I'll be using this website to create tools for myself. Maybe these tools would proof to be useful to you as well, if we have the same hobbies, that is.",
    },
  }),
});
</script>

<style>
</style>
