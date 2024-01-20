// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
 
// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
 
// Composables
export default createVuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#2196F3',
        secondary: '#FFC107',
        accent: '#FF4081',
      },
    },
 
    
  },
});


