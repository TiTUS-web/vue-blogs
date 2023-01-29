<template>
  <section class="create-post">
    <input
      class="title create-post__title"
      type="text"
      placeholder="Enter the post title"
      maxlength="70"
      v-model="sPostTitle"
    />
    <div class="container create-post__container">
      <label
        class="button create-post__button create-post__button--upload"
        for="photo"
      >
        Upload Cover Photo
      </label>
      <input
        class="button create-post__button create-post__button--change"
        type="file"
        ref="oFile"
        id="photo"
        @change="handleFile"
        accept=".png, .jpg, ,jpeg"
      />
      <p v-show="sPostPhotoName" class="chosen create-post__chosen">
        File Chosen: {{ sPostPhotoName }}
      </p>
    </div>
    <div
      class="editor create-post__editor"
      :style="{
        background: '#202020',
        color: '#d2d2d2',
        'font-weight': '400',
        'font-size': '14px',
        'line-height': '21px',
      }"
    >
      <quill-editor id="editor" @ready="createInstance" toolbar="full" />
    </div>
    <div class="container create-post__container create-post__actions">
      <router-link
        class="button create-post__button create-post__button--post"
        to="/login"
      >
        Post Preview
      </router-link>
      <button
        class="button create-post__button create-post__button--publish"
        @click="uploadBlog"
      >
        Publish Blog
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import {QuillEditor} from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import {computed, defineComponent, Ref, ref} from 'vue';
import {useStore} from 'vuex';
import {ActionTypes} from '@/types/createPost';

export default defineComponent({
  components: {
    QuillEditor,
  },
  setup() {
    const store = useStore();
    const oFile: Ref<any> = ref(null);

    function handleFile() {
      const oFileUpload = oFile.value.files[0];
      const sFileName = oFileUpload.name;

      store.dispatch(ActionTypes.changeFile, {
        name: sFileName,
        url: URL.createObjectURL(oFileUpload),
      });
    }

    return {
      sPostPhotoName: computed(() => store.state.createPost.sPostPhotoName),
      sPostPhotoFileURL: computed(
        () => store.state.createPost.sPostPhotoFileURL
      ),

      oFile,
      handleFile,
    };
  },
});
</script>
