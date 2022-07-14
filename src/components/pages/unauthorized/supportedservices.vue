<template>
  <base-wrapper>
    <div>
      <div>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('services')"
        >
          الخدمات المدعومة
        </base-button>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('supportedservicesannouncing')"
        >
          أعلن عن خدمة مدعومة
        </base-button>
      </div>
      <component :is="activetab"></component>
    </div>
  </base-wrapper>
</template>

<script>
import services from "../unauthorized/services.vue";
import supportedservicesannouncing from "../unauthorized/supportedservicesannouncing.vue";

export default {
  components: {
    services,
    supportedservicesannouncing,
  },
  data() {
    return {
      activetab: "supportedservicesannouncing",
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
  width: 20vw;
  margin: 10px;
}
@media (max-width: 560px) {
  .toogletabs {
    width: 50vw;
  }
  div > div {
    display: flex;
    flex-direction: column;
  }
}
@media (min-width: 560px) and (max-width: 950px) {
  .toogletabs {
    width: 33vw;
  }
}
</style>