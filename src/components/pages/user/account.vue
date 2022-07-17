
<script>
export default {
  setup() {

    return 0
  },
  data() {
    return {
      name: 'name',
      email: 'mail',
      phone: '010',
      blood: 'o+',
      address: 'home'
    };
  },
  methods: {

  },
};
</script>
<template>
  <div dir="rtl" class="col-lg-8 m-auto">
    <div class="card mb-4">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">الاسم</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">{{ name }}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">الايمل</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">{{ email }}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">رقم الموبيل</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">{{ phone }}</p>
          </div>
        </div>

        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">العنوان</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">{{ address }}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">فصيلة الدم</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">{{ blood }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
section {
  width: auto;
  margin: auto;
  padding-top: 70px;
}
</style>