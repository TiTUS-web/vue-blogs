<script lang="ts">
import {useStore} from 'vuex';
import {computed, defineComponent, ref, Ref} from 'vue';
import {ActionTypes} from '@/types/auth';

export default defineComponent({
  name: 'Recover',
  setup() {
    const store = useStore();
    const sEmail: Ref<string | null> = ref(null);

    function recover() {
      const oCredentials = {
        sEmail: sEmail.value,
      };

      store.dispatch(ActionTypes.recover, oCredentials);
    }

    return {
      sErrorMessageRecover: computed(
        () => store.state.auth.sErrorMessageRecover
      ),
      sSuccessMessageRecover: computed(
        () => store.state.auth.sSuccessMessageRecover
      ),
      isRecoverButtonLoading: computed(
        () => store.state.auth.isRecoverButtonLoading
      ),

      sEmail,
      recover,
    };
  },
});
</script>

<template>
  <section class="recover">
        <form class="recover-form">

          <h2 class="title recover-form__title">Восстановление пароля</h2>
          <p class="text recover-form__subtitle">
              Забыли пароль? Введите свой email для восстановления пароля
          </p>

          <div class="container recover-form__container">
              <div class="block email__block">
                  <input 
                    class="input recover-form__input recover-form__input--email" 
                    type="text" 
                    v-model="sEmail" 
                    placeholder="Email" 
                    name="email" 
                  />
              </div>
          </div>

          <p v-if="sErrorMessageRecover" class="error recover-form__error">{{ sErrorMessageRecover }}</p>
          <p v-show="sSuccessMessageRecover" class="text recover-form__text recover__text--success">{{ sSuccessMessageRecover }}</p>
          
          <button @click.prevent="recover" :disabled="isRecoverButtonLoading" class="button recover-form__button">Восстановить</button>

          <p class="text login-form__text">
              <router-link to="/auth/login" class="link login-form__text--link">
                Вернуться назад 
              </router-link>
            </p>
      </form>
  </section>
</template>