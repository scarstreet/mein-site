<template>
  <div class="say-hi">
    <div v-if="$vuetify.breakpoint.smAndDown">
      <v-col align="center">
        <v-btn
          color="primary"
          fab
          dark
          width="100px"
          height="100px"
          class="ma-3"
          @click="waveMeHi()"
        >
          <v-icon large>mdi-hand-wave-outline</v-icon>
        </v-btn>
        <h1 class="display-1 my-2">{{title}}</h1>
        <p class="caption mx-custom">{{text}}</p>
      </v-col>
    </div>
    <div v-else>
      <v-row class="ma-5" align="center">
        <v-col class="col-8">
          <h1 class="display-2 my-3">{{title}}</h1>
          <p class="caption">{{text}}</p>
        </v-col>
        <v-col align="right" class="col-4">
          <v-btn
            color="primary"
            fab
            dark
            height="120px"
            width="120px"
            class="mr-3"
            @click="waveMeHi()"
          >
            <v-icon large>mdi-hand-wave-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'SayHi',
  data: () => ({
    title: 'Say Hi?',
    text: "Yes! Please don't contact me. I'm really shy and I don't want to deal with feeling bad. Therefore, press the hand waving button to let me know you said hi! (Also, I'm testing out a feature, heheh. Thank you for reaching the end of this page though, I really appreciate it ^^).",
    hiPressed: false,
  }),
  methods: {
    waveMeHi() {
      this.hiPressed = true;
      this.title = 'Thanks for saying hi ;;w;;)//';
    },
  },
});
</script>

<style scoped>
.mx-custom {
  margin-right: 40px;
  margin-left: 40px;
}
</style>
