<template>
  <login></login>
</template>

<script lang="ts">
import Login from '@/modules/auth/views/Login.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Auth',
  components: {
    Login,
  },
});
</script>