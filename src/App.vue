<template>
    <div class="portfolio">
      <div class="aboutMe">
        <MyAvatar/>
        <MyDescription/>
      </div>
      <div class="projectCardsContainer">
        <ProjectCard
            v-for="projectCard in projectsCards"
            :key="projectCard.id"
            :text="projectCard.projectName"
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
</template>

<script>
import { projectsCards } from "@/data/projectsData";
import MyAvatar from "@/components/MyAvatar.vue";
import ImgWrapper from "@/components/ImgWrapper.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import MyDescription from "@/components/MyDescription.vue";

export default {
  name: 'App',
  components: {
    MyAvatar,
    ImgWrapper,
    ProjectCard,
    MyDescription,
  },
  data()  {
    return {
      projectsCards,
    }
  },
}
</script>

<style>
.html {
  min-height: 100%;
}
.body {
  margin: 0;
  background: linear-gradient(338deg, rgb(44, 150, 232), rgb(255, 255, 255) 50%);
  background-repeat: no-repeat;
  font-family: Montserrat,serif;
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
