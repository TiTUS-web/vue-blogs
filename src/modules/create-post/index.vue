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
        @change="changeFile"
        accept=".png, .jpg, ,jpeg"
      />
      <p v-show="sPostPhotoName" class="chosen create-post__chosen">
        File Chosen: {{ sPostPhotoName }}
      </p>
    </div>
    <div class="editor create-post__editor" :style="{color: '#fff'}">
      <quill-editor
        ref="oQuillEditor"
        :options="{placeholder: '', theme: 'snow'}"
      />
    </div>
    <div class="container create-post__container create-post__actions">
      <button
        class="button create-post__button create-post__button--post"
        @click="previewPost"
      >
        Post Preview
      </button>
      <button
        class="button create-post__button create-post__button--publish"
        @click="publishPost"
      >
        Publish to Blog
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import 'quill/dist/quill.snow.css';
import {quillEditor} from 'vue3-quill';
import {useStorage} from 'vue3-storage';
import {computed, defineComponent, Ref, ref, onMounted} from 'vue';
import {useStore} from 'vuex';
import {ActionTypes} from '@/types/createPost';

export default defineComponent({
  components: {
    quillEditor,
  },
  setup() {
    const storage = useStorage();

    const sPostTitle: Ref<object | string> = ref(
      storage.getStorageSync('sPostTitle') || ''
    );
    const sPostContent: Ref<string> = ref('');

    onMounted(() => {
      sPostContent.value =
        oQuillEditor.value.editor.firstElementChild.innerHTML =
          storage.getStorageSync('sPostContent') || '';
    });

    const oQuillEditor: any = ref(null);

    setInterval(() => {
      storage.setStorageSync('sPostTitle', sPostTitle.value);
      storage.setStorageSync(
        'sPostContent',
        oQuillEditor.value.editor.firstElementChild.innerHTML
      );
    }, 7000);

    function previewPost() {
      // previewPost logic
    }

    function publishPost() {
      // previewPost logic
    }

    const store = useStore();
    const oFile: Ref<any> = ref(null);

    function changeFile() {
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
      changeFile,

      previewPost,
      publishPost,

      oQuillEditor,
      sPostTitle,
    };
  },
});
</script>
