<template>
    <section class="new-post">
        <textarea 
          class="textarea new-post__textarea" 
          type="text" 
          placeholder="Напишите что-нибудь" 
          maxlength="400" 
        />
        <button class="button new-post__button">
            <img class="icon" src="@/assets/icons/new-post__button.svg" alt="button">
        </button>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
            
    };
  },
});
</script>