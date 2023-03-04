<script>
export default {
  name: 'Posts'
};
</script>

<template>
  <section class="posts">
    <div class="post">
      <header class="post-header post__header">
        <router-link class="category post-header__category" to="/categories/1">
          Категория 1
        </router-link>

        <p class="date post-header__date post-header__date--header">
          13 декабря 2022
        </p>
      </header>

      <div class="post-content post__content">
        <router-link class="title post-content__title" to="/posts/1">
          Управление ИТ-активами – скучная рутина или
          творческая задача?
        </router-link>
        <p class="text post-content__text">
          Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной
          компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив
          проверить, нужен ли он вообще.
        </p>
      </div>

      <footer class="post-footer post__footer">
        <p class="date post-header__date">
          13 декабря 2022
        </p>
      </footer>
    </div>

    <div class="post">
      <header class="post-header post__header">
        <div class="category post-header__category">
          Категория 1
        </div>

        <p class="date post-header__date post-header__date--header">
          13 декабря 2022
        </p>
      </header>

      <div class="post-content post__content">
        <p class="title post-content__title">
          Управление ИТ-активами – скучная рутина или творческая задача?
        </p>
        <p class="text post-content__text">
          Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной
          компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив
          проверить, нужен ли он вообще.
        </p>
      </div>

      <footer class="post-footer post__footer">
        <p class="date post-header__date">
          13 декабря 2022
        </p>
      </footer>
    </div>

    <div class="post">
      <header class="post-header post__header">
        <div class="category post-header__category">
          Категория 1
        </div>

        <p class="date post-header__date post-header__date--header">
          13 декабря 2022
        </p>
      </header>

      <div class="post-content post__content">
        <p class="title post-content__title">
          Управление ИТ-активами – скучная рутина или творческая задача?
        </p>
        <p class="text post-content__text">
          Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной
          компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив
          проверить, нужен ли он вообще.
        </p>
      </div>

      <footer class="post-footer post__footer">
        <p class="date post-header__date">
          13 декабря 2022
        </p>
      </footer>
    </div>
  </section>
</template>

