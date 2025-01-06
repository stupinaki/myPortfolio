<template>
  <button
      class="btn"
      @click="$emit('changeBackground')"
  >
    {{ btnText }}
  </button>

</template>

<script>
export default {
  name: "ChangeBackgroundBtn",
  emits: ['changeBackground'],
  props: {
    isEnglish: Boolean,
    isDark: Boolean,
  },
  computed: {
    btnText() {
      if(this.$props.isDark) {
        return this.$props.isEnglish ? "Light theme" : "Светлая тема";
      }
      return this.$props.isEnglish ? "Dark theme" : "Темная тема";
    }
  },

}
</script>

<style scoped>
.btn {
  padding: 8px 12px;
  border-radius: 12px;
  text-decoration: none;
  background-color: #fafafa;
  overflow: hidden;
  box-shadow: 1px 8px 12px #3a3c4c14, 1px 1px 2px #3a3c4c0a;
  border: 1px solid #d8d8d8;
  cursor: pointer;
  transition: all 0.5s linear;
}
.btn:hover {
  border: 1px solid #2c96e8;
}
</style>