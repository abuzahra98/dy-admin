<!-- src/components/Sidebar.vue -->
<template>
  <v-navigation-drawer app>
    <v-list dense>
      <router-link :to="item.to" v-for="item in items" :key="item.text">
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title style="    align-items: center;
    justify-content: center;
    display: flex;">
              <v-icon class="mr-2">{{ item.icon }}</v-icon>
              {{ item.text }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "Home", icon: "mdi-home", to: "/" },
        { text: "Header", icon: "mdi-view-dashboard", to: "/header" },
        { text: "Footer", icon: "mdi-account-group", to: "/footer" },
      ],
    };
  },
};
</script>
