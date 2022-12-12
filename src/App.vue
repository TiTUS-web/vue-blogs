<template>
  <header-navigation />
  <div class="content app__content">
    <!-- <home /> -->
    <auth />
  </div>
  <footer-navigation />
</template>

<script lang="ts">
import HeaderNavigation from '@/ui/HeaderNavigation.vue';
import FooterNavigation from '@/ui/FooterNavigation.vue';
// import Home from '@/modules/home/index.vue';
import Auth from '@/modules/auth/index.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VueBlogs',
  components: {
    HeaderNavigation,
    FooterNavigation,
    // Home,
    Auth,
  },
});
</script>
