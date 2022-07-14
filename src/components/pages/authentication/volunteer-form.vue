available only for whom signed in
ابعت id ال userالي هيكون موجود فال url للباك
<template>
  <base-wrapper>
    <div style="margin-top: 40px">
      <h1>طلب الانضمام للجمعية</h1>
      <div class="card">
        <h6>برجاء ملء الاستماره التاليه</h6>
        <form @submit.prevent="volunteer">
          <div>
            <label> اسم الجمعيه</label>
            <input
              v-if="charitynamefromstart"
              type="text"
              v-model="charityname"
              :placeholder="charityname"
              disabled
            />
            <select v-model="charityname" v-else>
              <option :value="null" disabled>
                اختار الجمعيه التي تود التطوع فيها
              </option>
              <option value="1">One</option>
              <option value="2">two</option>
            </select>
            <small class="form-text text-muted" v-show="nameerror">{{
              nameerror
            }}</small>
          </div>

          <div>
            <label> عدد الساعات</label>
            <input
              type="number"
              v-model="numofhours"
              placeholder="كم ساعة يمكن ان تقدمها للجمعيه فالاسبوع"
            />
            <small class="form-text text-muted" v-show="numofhourserror">{{
              numofhourserror
            }}</small>
          </div>

          <div>
            <label> اختار الفرع</label>
            <select v-model="branchname">
              <option :value="null" disabled>
                اختر الفرع الذي تود التطوع فيه
              </option>
              <option value="1">One</option>
              <option value="2">two</option>
            </select>
            <small class="form-text text-muted" v-show="branchnameerror">{{
              branchnameerror
            }}</small>
          </div>

          <div>
            <label> اختار النشاط</label>
            <select v-model="typeofactivity">
              <option :value="null" disabled>
                اختر النشاط الذي تود التطوع فيه
              </option>
              <option value="1">One</option>
              <option value="1">two</option>
            </select>
            <small class="form-text text-muted" v-show="typeofactivityerror">{{
              typeofactivityerror
            }}</small>
          </div>
          <div class="volunteerbtn">
            <base-button>تطوع</base-button>
          </div>
        </form>
      </div>
    </div>
  </base-wrapper>
</template>


<script>
import basebutton from "@/components/UI/basebutton.vue";
export default {
  components: { basebutton },
  data() {
    return {
      charitynamefromstart: null,
      charityname: null,
      numofhours: null,
      branchname: null,
      typeofactivity: null,
      nameerror: null,
      branchnameerror: null,
      numofhourserror: null,
      typeofactivityerror: null,
    };
  },
  mounted() {
    if (this.$route.params.charityid != "") {
      //مفروض دي تيجي من فلتر بال اي دي من الباك
      this.charitynamefromstart = true;
      this.charityname = "جمعيه رساله";
    }
  },
  methods: {
    volunteer() {
      this.nameerror = null;
      this.numofhourserror = null;
      this.branchnameerror = null;
      this.typeofactivityerror = null;

      if (this.charityname == null) {
        this.nameerror = "مطلوب";
      }
      if (this.numofhours <= 0) this.numofhourserror = "غير مسموح";
      if (this.numofhours == null) {
        this.numofhourserror = "مطلوب";
      }
      if (this.branchname == null) {
        this.branchnameerror = "مطلوب";
      }
      if (this.typeofactivity == null) {
        this.typeofactivityerror = "مطلوب";
      } else {
        //الاوبجيكت الي هيتبعت للباك
        var volunteer = {
          charityname: this.charityname,
          numofhours: this.numofhours,
          typeofactivity: this.typeofactivity,
          //ال اي دي بتاع اليوزر الي هيكون موجود فالurl
        };
        this.$router.replace("/");
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
  width: 66vw;
  padding: 15px;
  border-radius: 10px;
}

h6 {
  align-self: end;
  margin: 5px 10px;
}

form > div {
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 5px;
  align-items: center;
  justify-content: space-between;
}

form > div > label {
  margin-left: 5px;
}

form > div > input,
form > div > select {
  width: 50vw;
  border: none;
  text-align: end;
  border: 1px solid #ced4da;
  padding: 5px 10px;
}

select {
  color: #777777;
}

.volunteerbtn {
  display: flex;
  justify-content: center;
}

small {
  color: #f84949 !important;
  margin-right: 2px;
}

@media (max-width: 345px) {
  form > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .card {
    width: 95vw;
  }
  form > div > input,
  form > div > select {
    width: 85vw;
    font-size: 12px;
  }
  .volunteerbtn {
    align-items: center;
  }
  button {
    width: 40vw;
  }
  h1 {
    font-size: 25px;
  }
}
@media (min-width: 345px) and (max-width: 590px) {
  form > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
  .card {
    width: 90vw;
  }
  form > div > input,
  form > div > select {
    width: 80vw;
    font-size: 14px;
  }
  .volunteerbtn {
    align-items: center;
  }
  button {
    width: 40vw;
  }
  h1 {
    font-size: 32px;
  }
}
@media (min-width: 580px) and (max-width: 900px) {
  .card {
    width: 85vw;
  }
  form > div > input,
  form > div > select {
    width: 60vw;
  }
}
</style>


<!--must be signed in first
redirect to sign in
gard


      <form>
          <div>
            <label>الفرع</label>
          </div>
      </form>
      
مفروض ميقدرش يدخل غير وهو عامل اكونت ف هتريديركت الاول علي الsignin-->