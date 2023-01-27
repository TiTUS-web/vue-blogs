<template>
  <form class="recover" action="#">
    <h2 class="title recover__title">Recover password</h2>

    <p class="text recover__text recover__text--center recover__text--bottom">
      Forgot your password ? Enter your email to recover your password
    </p>

    <div class="container recover__container">
      <div class="block email__block">
        <input
          class="input recover__input recover__input--email"
          type="text"
          v-model="sEmail"
          placeholder="Email"
          name="email"
        />
      </div>
    </div>

    <p v-if="sErrorMessageRecover" class="error recover__error">
      {{ sErrorMessageRecover }}
    </p>
    <p
      v-show="sSuccessMessageRecover"
      class="text recover__text recover__text--success"
    >
      {{ sSuccessMessageRecover }}
    </p>

    <button
      @click.prevent="recover"
      :disabled="isRecoverButtonLoading"
      class="button recover__button"
    >
      Recover
    </button>
  </form>
</template>

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
