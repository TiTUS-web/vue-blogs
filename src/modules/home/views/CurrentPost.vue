<link href="../../../scss/modules/home/components/_popular.scss" rel="stylesheet">
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'CurrentPost',
  setup() {
    return {};
  }
});
</script>

<template>
  <section class="post post--current">
    <header class="post-header post__header">
      <p class="date post-header__date">
        13 декабря 2022
      </p>

      <router-link class="category post-header__category" to="/categories/1">
        Категория 1
      </router-link>
    </header>

    <div class="post-content post__content">
      <p class="title post-content__title">
        Управление ИТ-активами – скучная рутина или
        творческая задача?
      </p>
      <p class="text post-content__text">
        Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной
        компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив
        проверить, нужен ли он вообще.
        Управление ИТ-активами, как и управление конфигурациями, является базовым процессом для других. В первом случае
        более важным является финансовый аспект, во втором – эксплуатационные задачи. Оба процесса можно перегрузить
        деталями и превратить во что-то рутинное. Как же найти баланс и сделать процесс по-настоящему «живым»?
      </p>
    </div>
  </section>
</template>