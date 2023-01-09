<template>
  <button
      class="btn"
      @click="onClick"
  >
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "ChangeLanguageBtn",
  emits: ['changeLanguage'],
  props: {
    isEnglish: Boolean,
  },
  computed: {
    btnText() {
      return this.$props.isEnglish ? "Русский" : "English";
    }
  },
  methods: {
    onClick() {
      this.$emit('changeLanguage');
    }
  }
}
</script>

<style scoped>
  .btn {
    padding: 8px;
    border-radius: 1.5rem;
    text-decoration: none;
    background-color: #fafafa;
    overflow: hidden;
    box-shadow: 1px 8px 12px #3a3c4c14, 1px 1px 2px #3a3c4c0a;
    border: 1px solid #d8d8d8;
  }
  .btn:hover {
    border: 1px solid #2c96e8;
  }
</style>