<template>
  <a
      :href="url"
      class="wrapper"
  >
    <slot />
    <div class="text">
      {{ text }}
    </div>
  </a>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    text-decoration: none;
    background-color: #fafafa;
    overflow: hidden;
    box-shadow: 1px 8px 12px #3a3c4c14, 1px 1px 2px #3a3c4c0a;
  }

  .wrapper:hover {
    transform: scale(1.05);
  }

  .text {
    padding: 16px;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    color: #000;
  }



</style>