<template>
  <Header />

  <main class="content app__content">
    <router-view />
  </main>

  <Footer />
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import {useStore} from 'vuex';
import {defineComponent} from 'vue';
import {ActionTypes} from '@/types/auth';

export default defineComponent({
  name: 'TiTUS_Blog',
  components: {
    Header,
    Footer,
  },
  setup() {
    const store = useStore();

    store.dispatch(ActionTypes.getUser);
  },
});
</script>
