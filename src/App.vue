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
        <div class="change-photo">
          <img
              :src="projectCard.imgStart"
              :alt="projectCard.projectName"
              class="imgStart"
          >
        </div>
        <div class="change-photo">
          <img
              :src="projectCard.imgEnd"
              :alt="projectCard.projectName"
              class="imgEnd"
          >
        </div>
      </ProjectCard>
    </div>
  </div>
</template>

<script>
import { projectsCards } from "@/data/projectsData";
import MyAvatar from "@/components/MyAvatar.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import MyDescription from "@/components/MyDescription.vue";

export default {
  name: 'App',
  components: {
    MyAvatar,
    ProjectCard,
    MyDescription,
  },
  data()  {
    return {
      projectsCards,
      isHover: false,
    }
  },
}
</script>

<style>

.projectCardsContainer .change-photo:nth-of-type(2) {
  display: none;
}

.projectCardsContainer:hover .change-photo:nth-of-type(1) {
  display: none;
}

.projectCardsContainer:hover .change-photo:nth-of-type(2) {
  display: block;
}


.html {
  height: 100%;
}
.body {
  height: 100%;
  background: linear-gradient(0deg, rgb(0, 63, 106), rgb(255 255 255) 70%);
}
#app {
  width: 100%;
  height: 100%;
}
.portfolio {
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
  align-items: center;
  margin: 20px 80px;
}

.projectCardsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.imgStart,
.imgEnd {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.aboutMe {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}



@media screen and (max-width: 900px) {
  .projectCardsContainer {
    gap: 40px;
  }
  .portfolio {
    margin: 20px 40px;
  }
}

@media screen and (max-width: 600px) {
  .projectCardsContainer {
    gap: 20px;
  }

  .aboutMe {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 40px;
  }

  .portfolio {
    margin: 20px;
  }
}
</style>


//.img {
//  width: 100%;
//  height: 100%;
//  object-fit: cover;
//}
//
//.imgHover {
//  width: 100%;
//  height: 100%;
//  object-fit: cover;
//  display: none;
//}
//
//.imgHover:hover {
//  width: 100%;
//  height: 100%;
//  object-fit: cover;
//}