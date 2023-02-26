<script lang="ts">
import isEmpty from '@/utils/isEmpty';
import { computed, defineComponent, ref, Ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'HeaderNavigation',
 
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
      isEmpty,
    };
  },
});
</script>

<template>
    <header class="header">
        <nav class="nav header__nav">
            <div class="list nav__list" v-show="!bMobileMode">
                <router-link class="link list__link" to="/">Главная</router-link>
                <router-link class="link list__link" to="/search">Поиск</router-link>
                <router-link class="link list__link" to="/create-post">Создать пост</router-link>
                <router-link class="link list__link" to="/auth/login">Войти / Регистрация</router-link>
            </div>
        </nav>

        <svg class="icon menu--icon" v-show="bMobileMode" @click="toggleMobileNavigation"  aria-hidden="true" focusable="false" data-prefix="far" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="#000" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627  0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12  12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z">
          </path>
        </svg>

        <transition name="list-mobile">
            <div v-show="bMobileToggle" class="list-mobile links__list-mobile">
                <router-link class="link list__link list__link--mobile" to="/">Главная</router-link>
                <router-link class="link list__link list__link--mobile" to="/search">Поиск</router-link>
                <router-link class="link list__link list__link--mobile" to="/create-post">Создать пост</router-link>
                <router-link class="link list__link list__link--mobile" to="/auth/login">Войти / Регистрация</router-link>
            </div>
        </transition>
    </header>
</template>