<template>
  <div class="description">
    <div class="text">
      Привет 👋🏼 Меня зовут Ксения, и я Front-end developer.
      <br>
      <b>Основной стек:</b>
      JS, HTML, CSS.
      Пишу на Vue, немного знакома с React.
      <br>
      Собрала здесь для удобства несколько своих работ на GitHub pages.
    </div>
    <div class="contacts">
      <a class="contactLink" href="https://github.com/stupinaki">
        GitHub
      </a>
      <a class="contactLink"  href="https://spb.hh.ru/resume/2e689aa2ff0378204c0039ed1f327559793445">
        HH
      </a>
      <a class="contactLink"  href="mailto:k.i.stupina9@gmail.com">
        Почта
      </a>
      <a class="contactLink"  href="https://www.codewars.com/users/Stupina_ki/completed_solutions">
        Codewars
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDescription"
}
</script>

<style scoped>
  .description {
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 20px;
  }
  .text {
    font-size: 24px;
    line-height: 40px;
  }
  .contacts {
    display: flex;
    gap: 20px;
  }
    .contactLink {
    text-decoration: none;
    font-size: 20px;
    color: #2c96e8;
  }
  .contactLink:hover {
    transform: scale(1.02);
    color: #022f52;
  }

  @media screen and (max-width: 900px) {
    .text {
      font-size: 20px;
      line-height: 30px;
    }
  }
</style>


