<template>
    <div class="wrapper">
      <img
          :src="srcStart"
          :alt="srcStart"
          class="imgStart"
      >
      <img
          :src="srcEnd"
          :alt="alt"
          class="imgEnd"
      >
    </div>
</template>

<script>
export default {
  name: "ImgWrapper",
  props: {
    srcStart: String,
    alt: String,
    srcEnd: String,
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 200px;
}
.imgStart,
.imgEnd {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.imgEnd {
  opacity: 0;
  transition: all 0.5s linear;
}

.imgStart {
  opacity: 1;
}

.imgStart:hover {
  opacity: 0;
}

.imgEnd:hover {
  transition: all 0.5s linear;
  opacity: 1;
}

</style>