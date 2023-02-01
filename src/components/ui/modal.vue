<template>
  <div class="modal" v-if="isShowModalComponent" @click="handleClick">
    <div class="modal__content">
      <div class="post list-posts__post modal__post">
        <img
          class="img post__img"
          src="@/assets/posts/post_img_2.jpg"
          alt="post_img"
        />

        <div class="content post__content">
          <p class="title post__title">
            Как писать код быстро и безболезненно?
          </p>

          <p class="text post__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
            sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
            Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
            volutpat massa. Egestas ornare vel volutpat.
          </p>

          <div class="container post__container">
            <div class="block post__block">
              <p class="date post__date">21.06.2020</p>

              <img
                class="separator post__separator"
                src="@/assets/icons/post_separator.svg"
                alt="post_separator"
              />

              <p class="category post__category">создание сайтов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {useStore} from 'vuex';
import {defineComponent, computed} from 'vue';
import {MutationTypes} from '@/types/createPost';

export default defineComponent({
  name: 'modal',
  setup() {
    const store = useStore();

    function handleClick(event: Event) {
      if (!(event.target !== document.querySelector('.modal'))) {
        store.commit(MutationTypes.previewPost, false);
      }
    }

    return {
      isShowModalComponent: computed(
        () => store.state.createPost.isShowModalComponent
      ),

      handleClick,
    };
  },
});
</script>
