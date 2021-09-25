<template>
  <div class="say-hi">
    <div v-if="$vuetify.breakpoint.smAndDown">
      <v-col align="center">
        <v-btn
          :loading="hiLoad"
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
        <h1 class="display-1 ma-2">{{title}}</h1>
        <p v-if="hiPressed" class="overline">{{hiCount}}</p>
        <p class="caption mx-custom">{{text}}</p>
      </v-col>
    </div>
    <div v-else>
      <v-row class="ma-5">
        <v-col class="col-8" align="left">
          <h1 class="display-2 my-3">{{title}}</h1>
          <p v-if="hiPressed" class="overline">{{hiCount}}</p>
          <p class="caption">{{text}}</p>
        </v-col>
        <v-col align="right" class="col-4">
          <v-btn
            :loading="hiLoad"
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
import {
  updateDoc, doc, increment, getDoc,
} from 'firebase/firestore';
import db from '@/firebase';

export default Vue.extend({
  name: 'SayHi',
  data: () => ({
    title: 'Say Hi?',
    text: "Yes! Please don't contact me. I'm really shy and I don't want to deal with feeling bad. Therefore, press the hand waving button to let me know you said hi! (Also, I'm testing out a feature, heheh. Thank you for reaching the end of this page though, I really appreciate it ^^).",
    hiLoad: false,
    hiPressed: false,
    hiCounted: 0,
  }),
  methods: {
    async waveMeHi() {
      this.hiLoad = true;
      // const querySnapshot = await getDocs(collection(db, 'sayHiCounter'));
      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data().counter}`);
      //   this.hiCounted = doc.data().counter;
      // });
      const hiCounterRef = doc(db, 'sayHiCounter', 'hiCounter');
      await updateDoc(hiCounterRef, {
        counter: increment(1),
      });
      const docSnap = await getDoc(hiCounterRef);
      this.hiCounted = docSnap.data().counter;
      console.log('Document data:', docSnap.data().counter);
      this.title = 'Thanks for saying hi ;;w;;)//';
      this.hiLoad = false;
      this.hiPressed = true;
    },
  },
  computed: {
    hiCount() {
      const string = `people has said hi ${this.hiCounted} times`;
      return string;
    },
  },
});
</script>

<style scoped>
.mx-custom {
  margin-right: 20px;
  margin-left: 20px;
}
</style>
