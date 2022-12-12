<template>
    <form class="login" action="#">

        <h2 class="title login__title">Login to VueBlogs</h2>

        <div class="container login__container">
            <div class="block email__block">
                <input 
                  class="input login__input login__input--email" 
                  type="text" 
                  placeholder="Email" 
                  name="email" 
                />
            </div>
            <div class="block password__block">
                <input 
                  class="input login__input login__input--password" 
                  type="password" 
                  placeholder="Password" 
                  name="password" 
                />

                <img 
                  class="icon-hide" 
                  src="@/assets/icons/password--hide.svg" 
                  alt="password--hide"
                >
            </div>
        </div>
        
        <p class="text login__text">Forgot your password?</p>
        <p class="text login__text">Don't have an account? Register</p>

        <button class="button login__button" type="submit">Sign In</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
});
</script>