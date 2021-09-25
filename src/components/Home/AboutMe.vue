<template >
  <div class="about-me">
    <v-col align="center">
      <div v-if="$vuetify.breakpoint.smAndDown">
        <!-- SMOL VERSION -->
        <v-avatar size="200" class="avatarSm">
          <v-img :src="imageSrc">
          </v-img>
        </v-avatar>
        <h1 align="center" class="display-1">{{info.title}}</h1>
        <p align="center" class="overline">{{info.other}}</p>
        <p align="center" class="subtitle-1">{{info.text}}</p>
      </div>
      <div v-else>
        <!-- BIGG VERSION -->
        <v-row justify-center align="center" class="ml-2">
          <v-col class="col-md-7">
            <h1 align="left" class="display-1">{{info.title}}</h1>
            <p align="left" class="overline">{{info.other}}</p>
            <p align="justify" class="subtitle-1">{{info.text}}</p>
          </v-col>
          <v-col class="col-md-5">
            <v-avatar size="300" class="avatarMd">
              <v-img :src="imageSrc">
              </v-img>
            </v-avatar>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutMe',
  data: () => ({
    imageSrc: 'https://i.ibb.co/9VV8byy/186250756-2931159863787948-4444674507056701581-n.jpg',
    info: {
      title: 'AboutMe',
      other: '20 y.o. | INTP | Dead Inside',
      text: "My name is Astrid, but on the internet I go by scarstreet. I'm currently in university studying computer science. Originally joined the major to learn how to make games but now I'm very confused on what to do since the future is hopeless. But I still enjoy coding so this is what I'm doing now. I do other things too tho, like digital art, listening to psychology videos and playing the ukulele.",
    },
  }),
});
</script>

<style>
/* margin is top left bottom right */
.avatarSm {
  margin: 20px 70px 10px 70px
}
.avatarMd {
  margin: 20px 20px 20px 20px
}
.overline {
  font-weight: lighter;
  color: rgb(184, 184, 184);
}
</style>
