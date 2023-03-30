<template>
  <div class="portfolio">
        <div class="aboutMe">
          <MyAvatar/>
          <div>
            <MyDescription :is-english="isEnglish"/>
            <div class="buttons">
              <ChangeLanguageBtn
                  :is-english="isEnglish"
                  @changeLanguage="onChangeLanguage"
              />
              <ChangeBackgroundBtn
                  :is-english="isEnglish"
                  :is-dark="isDark"
                  @changeBackground="onChangeBackground"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 class="header">
            {{ headerText }}
          </h2>
          <div class="projectCardsContainer">
            <ProjectCard
                v-for="projectCard in projectsCards"
                :key="projectCard.id"
                :header="projectCard.projectName"
                :text="isEnglish ? projectCard.descriptionEnglish: projectCard.description"
                :textEnglish="projectCard.descriptionEnglish"
                :url="projectCard.url"
            >
              <ImgWrapper
                  :srcStart="projectCard.imgStart"
                  :srcEnd="projectCard.imgEnd"
                  :alt="projectCard.projectName"
              />
            </ProjectCard>
          </div>
        </div>
      </div>
</template>

<script>
import { projectsCards } from "@/data/projectsData";
import MyAvatar from "@/components/MyAvatar.vue";
import ImgWrapper from "@/components/ImgWrapper.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import MyDescription from "@/components/MyDescription.vue";
import ChangeLanguageBtn from "@/components/ChangeLanguageBtn.vue";
import ChangeBackgroundBtn from "@/components/ChangeBackgroundBtn.vue";

export default {
  name: 'App',
  components: {
    MyAvatar,
    ImgWrapper,
    ProjectCard,
    MyDescription,
    ChangeLanguageBtn,
    ChangeBackgroundBtn,
  },
  data()  {
    return {
      projectsCards,
      isEnglish: false,
      isDark: false,
    }
  },
  methods: {
    onChangeLanguage() {
      this.$data.isEnglish = !this.$data.isEnglish;
    },
    onChangeBackground() {
      this.$data.isDark = !this.$data.isDark;
      const bodyElement = document.querySelector("body");
      bodyElement.style = this.$data.isDark ? "background:#19202d;color:floralwhite" : "background:whitesmoke";
    }
  },
  computed: {
    headerText() {
      return this.$data.isEnglish ? 'Examples of my works on GitHub pages.' : 'Примеры моих работ на GitHub pages.';
    },
  }
}
</script>

<style>
.html {
  min-height: 100%;
}
.body {
  margin: 0;
  font-family: 'Open Sans',serif;
  background-color: whitesmoke;
}

h2 {
  margin: 0;
}
.portfolio {
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
  align-items: center;
  margin: 60px 80px;
}

.projectCardsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 40px;
}

.aboutMe {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 20px;
}

.buttons {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.header {
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 20px;
}


@media screen and (max-width: 900px) {
  .portfolio {
    gap: 60px;
    margin: 60px 40px;
  }
  .aboutMe {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 20px;
  }
}

@media screen and (max-width: 600px) {
  .projectCardsContainer {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;

  }
  .portfolio {
    margin: 40px 20px;
  }
}
</style>
