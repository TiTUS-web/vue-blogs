<template>
  <footer class="footer">
    <nav class="nav footer__nav">
      <div class="branding nav__branding">
        <router-link class="link branding__link" to="/"> TiTUS_Blog </router-link>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Footer',
  setup() {
    return {};
  },
});
</script>
