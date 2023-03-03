<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<template>
  <div class="search">
    <input class="input search__input" placeholder="Введите что-нибудь..." type="text">

    <button class="button search__button">
      Найти
      <img alt="search" class="icon search__icon" src="@/assets/icons/search.svg">
    </button>

    <button class="button search__button--mobile">
      <img alt="search" class="icon search__icon" src="@/assets/icons/search.svg">
    </button>
  </div>
</template>

