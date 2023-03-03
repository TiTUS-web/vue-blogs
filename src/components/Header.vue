<script lang="ts">
import isEmpty from '@/utils/isEmpty';
import {computed, defineComponent, ref, Ref} from 'vue';
import {useStore} from 'vuex';

export default defineComponent({
  name: 'Header',

  setup() {
    const store = useStore();

    let bMobileMode: Ref<boolean | null> = ref(null);
    let bMobileToggle: Ref<boolean | null> = ref(null);
    let iWindowWidth: Ref<number | null> = ref(null);

    window.addEventListener('resize', checkScreen);
    checkScreen();

    function checkScreen() {
      iWindowWidth.value = window.innerWidth;

      if (iWindowWidth.value <= 750) {
        bMobileMode.value = true;
        return;
      }

      bMobileMode.value = false;
      bMobileToggle.value = false;
      return;
    }

    function toggleMobileNavigation() {
      bMobileToggle.value = !bMobileToggle.value;
    }

    return {
      oProfile: computed(() => store.state.auth.oProfile),

      bMobileMode,
      bMobileToggle,

      checkScreen,
      toggleMobileNavigation,
      isEmpty
    };
  }
});
</script>

<template>
  <header class="header">
    <nav class="nav header__nav">
      <div v-show="!bMobileMode" class="list nav__list">
        <router-link class="link list__link" to="/">Главная</router-link>
        <router-link class="link list__link" to="/search">Поиск</router-link>
        <router-link class="link list__link" to="/create-post">Создать пост</router-link>
        <router-link class="link list__link" to="/auth/login">Войти / Регистрация</router-link>
      </div>
    </nav>

    <img
      v-show="bMobileMode"
      alt="menu"
      class="icon menu--icon"
      src="@/assets/icons/menu.svg"
      @click="toggleMobileNavigation"
    >

    <transition name="list-mobile">
      <div v-show="bMobileToggle" class="list-mobile links__list-mobile">
        <router-link class="link list__link list__link--mobile" to="/" @click="toggleMobileNavigation">
          Главная
        </router-link>
        <router-link class="link list__link list__link--mobile" to="/search" @click="toggleMobileNavigation">
          Поиск
        </router-link>
        <router-link class="link list__link list__link--mobile" to="/create-post" @click="toggleMobileNavigation">
          Создать пост
        </router-link>
        <router-link class="link list__link list__link--mobile" to="/auth/login" @click="toggleMobileNavigation">
          Войти / Регистрация
        </router-link>
      </div>
    </transition>
  </header>
</template>