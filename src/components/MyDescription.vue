<template>
  <div class="wrapper">
    <h2 class="header">
      {{ headerText }}
    </h2>
    <span class="text">
       {{ StackText }}
    </span>

    <div class="contacts">
      <a class="contactLink" href="https://github.com/stupinaki">
        GitHub
      </a>
      <a class="contactLink" href="https://spb.hh.ru/resume/2e689aa2ff0378204c0039ed1f327559793445">
        HH
      </a>
      <a class="contactLink" href="mailto:k.i.stupina9@gmail.com">
        Gmail
      </a>
      <a class="contactLink" href="https://www.codewars.com/users/Stupina_ki/completed_solutions">
        Codewars
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDescription",
  props: {
    isEnglish: Boolean,
  },
  computed: {
    headerText() {
      return this.$props.isEnglish ? 'Hi 👋🏼, My name is Ksenia and I`m a Front-end developer.' : 'Привет 👋🏼 Меня зовут Ксения, и я Front-end developer.';
    },
    StackText() {
      return this.$props.isEnglish ? 'Main stack: JS, HTML, CSS, Vue, Vuex, Vue-Router' : 'Основной стек: JS, HTML, CSS, Vue, Vuex, Vue-Router.';
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 20px;
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

.header {
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 0;
}

.text {
  font-size: 28px;
  line-height: 32px;
}

@media screen and (max-width: 600px) {
  .header {
    font-size: 28px;
    line-height: 32px;
  }

  .text {
    font-size: 24px;
    line-height: 28px;
  }
}
</style>


