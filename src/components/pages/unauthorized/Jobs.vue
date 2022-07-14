<template>
  <base-wrapper>
    <div>
      <div>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('availablejobs')"
        >
          الوظائف
        </base-button>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('jobannouncing')"
        >
          اعلن عن وظيفه متاحه
        </base-button>
      </div>
      <component :is="activetab"></component>
    </div>
  </base-wrapper>
</template>

<script>
import availablejobs from "../unauthorized/availablejobs.vue";
import jobannouncing from "../unauthorized/jobannouncing.vue";

export default {
  components: {
    availablejobs,
    jobannouncing,
  },
  data() {
    return {
      activetab: "jobannouncing",
    };
  },
  methods: {
    selectedtab(currentval) {
      this.activetab = currentval;
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div > div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
}
.toogletabs {
  width: 15vw;
  margin: 10px;
}

@media (max-width: 500px) {
  .toogletabs {
    width: 55vw;
  }
  div > div {
    display: flex;
    flex-direction: column;
  }
}
@media (min-width: 500px) and (max-width: 705px) {
  .toogletabs {
    width: 35vw;
  }
}

@media (min-width: 705px) and (max-width: 1170px) {
  .toogletabs {
    width: 25vw;
  }
}
</style>