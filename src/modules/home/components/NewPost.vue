<template>
    <div class="new-post">
        <textarea 
          class="input new-post__input" 
          type="text" 
          placeholder="Напишите что-нибудь" 
          maxlength="400" 
        />
        <button class="button new-post__button">
            <img class="icon" src="@/assets/icons/new-post__button.svg" alt="button">
        </button>
    </div>
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