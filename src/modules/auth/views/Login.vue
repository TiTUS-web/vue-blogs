<script lang="ts">
import {computed, defineComponent, ref, Ref} from 'vue';
import {useStore} from 'vuex';
import {ActionTypes} from '@/types/auth';

export default defineComponent({
  name: 'Login',
  setup() {
    const store = useStore();
    const sEmail: Ref<string | null> = ref(null);
    const sPassword: Ref<string | null> = ref(null);

    let isPasswordHide: Ref<boolean> = ref(true);

    const inputPassword = ref(null);

    function toggleViewPassword() {
      if (!inputPassword.value) return;

      const passwordField: HTMLInputElement = inputPassword.value;

      if (passwordField.getAttribute('type') === 'password') {
        passwordField.setAttribute('type', 'text');
        isPasswordHide.value = false;
      } else {
        passwordField.setAttribute('type', 'password');
        isPasswordHide.value = true;
      }
    }

    function login() {
      const oCredentials = {
        sEmail: sEmail.value,
        sPassword: sPassword.value,
      };

      store.dispatch(ActionTypes.signIn, oCredentials);
    }

    return {
      sErrorMessageLogin: computed(() => store.state.auth.sErrorMessageLogin),
      isLoginButtonLoading: computed(
        () => store.state.auth.isLoginButtonLoading
      ),

      sEmail,
      sPassword,

      isPasswordHide,

      login,
      toggleViewPassword,

      inputPassword
    };
  },
});
</script>

<template>
  <section class="login">
      <form class="login-form">

          <h2 class="title login-form__title">Добро пожаловать !</h2>
          <p class="subtitle login-form__subtitle">Пожалуйста, введите свой e-mail и пароль для входа в систему</p>

          <div class="container login-form__container">
              <div class="block email__block">
                  <input 
                    class="input login-form__input login-form__input--email" 
                    type="text" 
                    v-model="sEmail" 
                    placeholder="Email" 
                    name="email" 
                  />
              </div>
              <div class="block password__block">
                  <input 
                    class="input login-form__input login-form__input--password"
                    ref="inputPassword"
                    type="password" 
                    v-model="sPassword" 
                    placeholder="Пароль" 
                    name="password" 
                  />

                  <img
                    @click="toggleViewPassword" 
                    :class="{'icon-hide--active': !isPasswordHide}"
                    class="icon-hide" 
                    src="@/assets/icons/password--hide.svg" 
                    alt="password--hide"
                  >
              </div>
          </div>

          <p v-if="sErrorMessageLogin" class="error login-form__error">{{ sErrorMessageLogin }}</p>


          <button @click.prevent="login" :disabled="isLoginButtonLoading" class="button login-form__button" type="submit">Войти</button>

          <p class="text login-form__text">
            <router-link to="/auth/recover" class="link login-form__text--link">
              Забыли пароль ?
            </router-link>
          </p>

          <p class="text login-form__text">У вас нет аккаунта ?
            <router-link to="/auth/register" class="link login-form__text--link">
              Регистрация
            </router-link>
          </p>
      </form>
  </section>
</template>