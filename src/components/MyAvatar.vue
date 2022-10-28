<template>
 <div class="avatarWrapper">
   <img class="img" src="@/assets/avatar.jpg" alt="avatar">
 </div>
</template>

<script>

export default {
  name: "MyAvatar",
}
</script>

<style scoped>
  .avatarWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 1px 8px 12px #3a3c4c14, 1px 1px 2px #3a3c4c0a;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    .avatarWrapper {
      width: 120px;
      height: 120px;
      border-radius: 100%;
      margin: 0;
    }
  }
</style>