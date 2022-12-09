<template>
    <div class="post">
        <div class="content post__content">
            <p class="text post__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            </p>
            <div class="container post__container">
                <p class="date post__date">
                    21.06.2020
                </p>
            </div>
        </div>
    </div>
    <div class="post">
        <img 
            class="img post__img" 
            src="@/assets/posts/post_img_1.jpg" 
            alt="post_img" 
        />

        <div class="content post__content">
            <p class="title post__title">
                Как писать код быстро и безболезненно?
            </p>

            <p class="text post__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            </p>

            <div class="container post__container">
                <div class="block post__block">
                    <p class="date post__date">
                        21.06.2020
                    </p>

                    <img 
                        class="separator post__separator" 
                        src="@/assets/icons/post_separator.svg" 
                        alt="post_separator"
                    />

                    <p class="category post__category">
                        создание сайтов
                    </p>
                </div>
                <div class="block post__block">
                    <a class="link post__link" href="#">читать</a>
                </div>
            </div>
        </div>
    </div>
    <div class="post">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            </p>

            <div class="container post__container">
                <div class="block post__block">
                    <p class="date post__date">
                        21.06.2020
                    </p>

                    <img 
                        class="separator post__separator" 
                        src="@/assets/icons/post_separator.svg" 
                        alt="post_separator"
                    />

                    <p class="category post__category">
                        создание сайтов
                    </p>
                </div>
                <div class="block post__block">
                    <a class="link post__link" href="#">читать</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
            
    };
  },
});
</script>
