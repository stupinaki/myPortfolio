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
    margin: 0 auto;
    overflow: hidden;
    box-shadow: 1px 4px 12px 2px #828080;
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