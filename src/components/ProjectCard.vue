<template>
  <a
      :href="url"
      target="_blank"
      class="wrapper"
  >
    <slot />
    <div class="description">
      <h2 class="header">
        {{ header }}
      </h2>
      <div class="text">
        {{ text }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    header: {
      type: String,
      required: true,
    },
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
    width: 100%;
    height: 100%;
    border-radius: 16px;
    text-decoration: none;
    overflow: hidden;
    box-shadow: 1px 8px 12px #3a3c4c14, 1px 1px 2px #3a3c4c0a;
    transition: all 0.5s linear;
  }

  .wrapper:hover {
    transform: scale(1.02);
  }

  .description {
    padding: 16px;
    text-align: start;
    background-color: #fafafa;
    height: 100%;
  }
  .header {
    font-size: 20px;
    line-height: 32px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #000;
  }

  .text {
    font-size: 20px;
    line-height: 32px;
    color: #000;
  }
</style>