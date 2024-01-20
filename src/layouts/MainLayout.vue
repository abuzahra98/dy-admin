<!-- src/layouts/MainLayout.vue -->
<template>
    <v-app>
        <Sidebar />
        <v-app-bar app>
      <!-- App bar content goes here -->
      <v-btn @click="toggleLanguage">Toggle Language</v-btn>
    </v-app-bar>

  
      <v-main>
 
         <slot></slot>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Sidebar from '../components/Sidebar.vue';

  export default {
    components: {
    Sidebar,
  },
   };
  </script>
  
  <style scoped>
   </style>
  