<template>
  <div class="contact-me">
    <h1 align="center">Contact Me</h1>
    <p align="center"> no, please don't </p>
    <v-sheet height="20"></v-sheet>
    <v-row fluid align="center" justify="center">
      <div v-if="$vuetify.breakpoint.smAndDown">
        <v-col align="center" >
          <v-row
            fluid
            v-for="(item) in contact"
            :key="item.icon" align="center"
            justify="center"
          >
            <a :href="item.ref">
              <v-icon color="primary">{{item.icon}}</v-icon>
              <u>{{item.link}}</u>
            </a>
            <!-- <b v-if="index !== contact.length-1"> | </b> -->
          </v-row>
        </v-col>
      </div>
      <v-row v-else>
        <v-col class="col-1"></v-col>
        <v-col fluid v-for="(item) in contact" :key="item.icon">
          <a :href="item.ref">
            <v-icon color="primary">{{item.icon}}</v-icon>
            <u>{{item.link}}</u>
          </a>
        </v-col>
        <v-col class="col-1"></v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactMe',
  data: () => ({
    contact: [
      { link: 'scarstreet', icon: 'mdi-github', ref: 'https://github.com/scarstreet' }, // github
      { link: 'scarlettstrid@gmail.com', icon: 'mdi-email-outline', ref: 'mailto:scarlettstrid@gmail.com' }, // email
      { link: '@scarstreet', icon: 'mdi-instagram', ref: 'https://www.instagram.com/scarstreet/' }, // instagram
    ],
  }),
});

</script>

<style>
a {
  text-decoration: none;
  color: primary;
}
.middl {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
