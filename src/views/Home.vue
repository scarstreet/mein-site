<template>
  <div class="home">
    <!-- TODO = Buttons to navigate travel :DD -->
    <v-container fluid class="ma-0 pa-0">
      <v-col justify-center>
        <Welcome class="welcome"/>
        <v-divider></v-divider>
        <AboutMe/>
        <v-divider></v-divider>
          <p v-for="i in 100" :key="i" @click="showScroll()">another hello</p>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';

import Welcome from '@/components/Home/Welcome';
import AboutMe from '@/components/Home/AboutMe';

export default Vue.extend({
  name: 'Home',
  components: {
    Welcome,
    AboutMe,
  },
  data: () => ({
  }),
  computed: {
  },
  created() {
  },
  methods: {
  },
});
</script>

<style scoped>
.welcome {
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
