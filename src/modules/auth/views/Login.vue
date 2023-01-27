<template>
  <form class="login" action="#">
    <h2 class="title login__title">Login to VueBlogs</h2>

    <div class="container login__container">
      <div class="block email__block">
        <input
          class="input login__input login__input--email"
          type="text"
          v-model="sEmail"
          placeholder="Email"
          name="email"
        />
      </div>
      <div class="block password__block">
        <input
          class="input login__input login__input--password"
          type="password"
          v-model="sPassword"
          placeholder="Password"
          name="password"
        />

        <img
          @click="toggleViewPassword"
          :class="{'icon-hide--active': !isPasswordHide}"
          class="icon-hide"
          src="@/assets/icons/password--hide.svg"
          alt="password--hide"
        />
      </div>
    </div>

    <p v-if="sErrorMessageLogin" class="error login__error">
      {{ sErrorMessageLogin }}
    </p>

    <p class="text login__text">
      <router-link to="/auth/recover" class="link login__text--link">
        Forgot your password?
      </router-link>
    </p>
    <p class="text login__text">
      Don't have an account?
      <router-link to="/auth/register" class="link login__text--link">
        Register
      </router-link>
    </p>

    <button
      @click.prevent="login"
      :disabled="isLoginButtonLoading"
      class="button login__button"
      type="submit"
    >
      Sign In
    </button>
  </form>
</template>

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

    function toggleViewPassword() {
      const passwordField: Ref<Element | null> = ref(
        document.querySelector('.login__input--password')
      );

      if (!passwordField.value) return;

      if (passwordField.value.getAttribute('type') === 'password') {
        passwordField.value.setAttribute('type', 'text');
        isPasswordHide.value = false;
      } else {
        passwordField.value.setAttribute('type', 'password');
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
    };
  },
});
</script>
