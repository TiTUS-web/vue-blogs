<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'NotFound',
  setup() {
    return {};
  }
});
</script>

<template>
  <div class="not_found">
    <img alt="not_found" class="picture not_found__picture" src="@/assets/not_found.png">
    <p class="title not_found__title">Что-то пошло не так...</p>

    <router-link class="button not_found__button" to="/">
      <img alt="arrow" class="icon not_found__icon" src="@/assets/icons/arrow.svg">
      Вернуться назад
    </router-link>
  </div>
</template>