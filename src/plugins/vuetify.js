import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    // default: 'light',
    // dark: window.matchMedia('(prefers-color-scheme: dark)').matches,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#ac5c51',
        secondary: '#424242', // TODO - decide
        accent: '#82B1FF', // TODO - decide
        error: '#FF5252', // TODO - decide
        info: '#2196F3', // TODO - decide
        success: '#4CAF50', // TODO - decide
        warning: '#FB8C00', // TODO - decide
      },
      dark: {
        primary: '#2196F3', // TODO - decide
        secondary: '#424242', // TODO - decide
        accent: '#FF4081', // TODO - decide
        error: '#FF5252', // TODO - decide
        info: '#2196F3', // TODO - decide
        success: '#4CAF50', // TODO - decide
        warning: '#FB8C00', // TODO - decide
      },
    },
  },
});
