<template>
  <div class="home">
    <!-- TODO = Buttons to navigate travel :DD -->
    <v-container fluid class="ma-0 pa-0">
      <v-col justify-center>
        <!-- <v-sheet :height="filler" width="100" class="filler"></v-sheet> -->
        <Welcome class="bordr"/>
        <v-divider></v-divider>
        <AboutMe/>
        <v-divider></v-divider>
        <p v-for="i in 5" :key="i" @click="showScroll()">another hello</p>
        <v-divider></v-divider>
        <p>TODO - Features</p>
        <v-divider></v-divider>
        <p>TODO - News</p>
        <v-divider></v-divider>
        <ContactMe class="my-5"/>
        <v-divider></v-divider>
        <SayHi />
      </v-col>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';

import Welcome from '@/components/Home/Welcome';
import AboutMe from '@/components/Home/AboutMe';
import ContactMe from '@/components/Home/ContactMe';
import SayHi from '@/components/Home/SayHi';

export default Vue.extend({
  name: 'Home',
  components: {
    Welcome,
    AboutMe,
    ContactMe,
    SayHi,
  },
  data: () => ({
    filler: 0,
  }),
  computed: {
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset < 300) this.filler = window.pageYOffset * 0.8;
      else this.filler = 240;
    },
  },
});
</script>

<style scoped>
.bordr {
  margin-top: 60px;
  margin-bottom: 60px;
}
.filler {
  color: red;
}
</style>
