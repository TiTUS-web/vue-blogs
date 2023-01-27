<template>
  <section class="settings">
    <h2 class="title settings__title">Account Settings</h2>

    <div class="initials settings__initials">
      {{ sInitials }}
    </div>

    <div class="info settings__info">
      <div class="container info__container">
        <div class="block info__block">
          <label class="label info__label" for="email"> Email </label>

          <p v-if="sErrorMessageEmail" class="error info__error">
            {{ sErrorMessageEmail }}
          </p>

          <input
            id="email"
            class="input info__input info__input--email"
            type="text"
            v-model="sEmail"
            placeholder="Email"
            disabled
            name="email"
          />
        </div>
        <div class="block info__block">
          <label class="label info__label" for="firstName"> First name </label>

          <p v-if="sErrorMessageFirstName" class="error info__error">
            {{ sErrorMessageFirstName }}
          </p>

          <input
            id="firstName"
            class="input info__input info__input--firstname"
            type="text"
            v-model="sFirstName"
            placeholder="First Name"
            name="firstname"
            required
          />
        </div>
        <div class="block info__block">
          <label class="label info__label" for="lastName"> Last name </label>

          <p v-if="sErrorMessageLastName" class="error info__error">
            {{ sErrorMessageLastName }}
          </p>

          <input
            id="lastName"
            class="input info__input info__input--lastname"
            type="text"
            v-model="sLastName"
            placeholder="Last Name"
            name="lastname"
          />
        </div>
        <div class="block info__block">
          <label class="label info__label" for="username"> Username </label>

          <p v-if="sErrorMessageUsername" class="error info__error">
            {{ sErrorMessageUsername }}
          </p>

          <input
            id="username"
            class="input info__input info__input--username"
            type="text"
            v-model="sUsername"
            placeholder="Username"
            name="username"
          />
        </div>
      </div>

      <button
        @click.prevent="saveChanges"
        :disabled="isSaveChangesButtonLoading"
        class="button settings__button"
      >
        Save Changes
      </button>

      <p v-show="sSuccessMessageSaveChanges" class="success info__success">
        {{ sSuccessMessageSaveChanges }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import CreateAccount from '@/classes/CreateAccount';
import {ActionTypes, MutationTypes} from '@/types/auth';
import {
  defineComponent,
  Ref,
  ref,
  computed,
  WritableComputedRef,
  ComputedRef,
} from 'vue';
import {useStore} from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const verification: CreateAccount = new CreateAccount();

    let sId: ComputedRef<string> = computed(() => store.state.auth.oProfile.id);

    let sFirstName: WritableComputedRef<string> = computed({
      get() {
        return store.state.auth.oProfile.firstName;
      },
      set(sNewFirstName: string) {
        store.commit(MutationTypes.changeFirstName, sNewFirstName);
      },
    });

    let sLastName: WritableComputedRef<string> = computed({
      get() {
        return store.state.auth.oProfile.lastName;
      },
      set(sNewLastName: string) {
        store.commit(MutationTypes.changeLastName, sNewLastName);
      },
    });

    let sUsername: WritableComputedRef<string> = computed({
      get() {
        return store.state.auth.oProfile.username;
      },
      set(sNewUsername: string) {
        store.commit(MutationTypes.changeUsername, sNewUsername);
      },
    });

    let sErrorMessageFirstName: Ref<string> = ref('');
    let sErrorMessageLastName: Ref<string> = ref('');
    let sErrorMessageUsername: Ref<string> = ref('');
    let sErrorMessageEmail: Ref<string> = ref('');
    let sErrorMessagePassword: Ref<string> = ref('');
    let sErrorMessageRepeatPassword: Ref<string> = ref('');

    function saveChangesValidation(): boolean {
      let bCheckError = false;
      sErrorMessageFirstName.value = '';
      sErrorMessageLastName.value = '';
      sErrorMessageUsername.value = '';
      sErrorMessageEmail.value = '';
      sErrorMessagePassword.value = '';
      sErrorMessageRepeatPassword.value = '';

      if (!verification.checkFirstNameValue(sFirstName.value)) {
        sErrorMessageFirstName.value =
          'The first name must consist of the letters';
        bCheckError = true;
      }

      if (!verification.checkLastNameValue(sLastName.value)) {
        sErrorMessageLastName.value =
          'The last name must consist of at least 3 letters';
        bCheckError = true;
      }

      if (!verification.checkUsernameValue(sUsername.value)) {
        sErrorMessageUsername.value =
          'The username must consist of at least 5 letters';
        bCheckError = true;
      }

      if (bCheckError) return false;

      return true;
    }

    function saveChanges() {
      if (!saveChangesValidation()) {
        return;
      }

      const oCredentials = {
        id: sId.value,
        sFirstName: sFirstName.value,
        sLastName: sLastName.value,
        sUsername: sUsername.value,
      };

      store.dispatch(ActionTypes.updateProfile, oCredentials);
    }

    return {
      sEmail: computed(() => store.state.auth.oProfile.email),
      sInitials: computed(() => store.state.auth.oProfile.initials),
      isSaveChangesButtonLoading: computed(
        () => store.state.auth.isSaveChangesButtonLoading
      ),
      sSuccessMessageSaveChanges: computed(
        () => store.state.auth.sSuccessMessageSaveChanges
      ),

      sErrorMessageFirstName,
      sErrorMessageLastName,
      sErrorMessageUsername,
      sErrorMessageEmail,
      sErrorMessagePassword,
      sErrorMessageRepeatPassword,

      sFirstName,
      sLastName,
      sUsername,

      saveChanges,
    };
  },
});
</script>
