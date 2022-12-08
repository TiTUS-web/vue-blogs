<template>
  <header-navigation />
  <router-view/>
  <footer-navigation />
</template>

<script lang="ts">
import HeaderNavigation from '@/ui/HeaderNavigation.vue';
import FooterNavigation from '@/ui/FooterNavigation.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VueBlogs',
  components: {
    HeaderNavigation,
    FooterNavigation,
  },
});
</script>
