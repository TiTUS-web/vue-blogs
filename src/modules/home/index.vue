<template>
    <section class="home">
      <new-post v-if="!isEmpty(oProfile)" />
      <list-posts />
    </section>
</template>

<script lang="ts">
import NewPost from '@/modules/home/components/NewPost.vue';
import ListPosts from '@/modules/home/components/ListPosts.vue';
import isEmpty from '@/utils/isEmpty';

import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    NewPost,
    ListPosts
  },
  setup() {
    const store = useStore();

    return {
      oProfile: computed(() => store.state.auth.oProfile), 
      isEmpty,
    };
  },
});
</script>
