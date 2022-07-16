<template>
  <base-wrapper>
    <div class="signincontainer">
      <h2>انشاء حساب جديد</h2>
      <form @submit.prevent="handleSignup">
        <div class="form-group">
          <input type="text" name='name' class="form-control" placeholder="الاسم بالكامل" v-model="name" />
          <small class="form-text text-muted" v-show="nameError">{{
              nameError
          }}</small>
        </div>

        <div class="form-group">
          <input type="email" name='email' class="form-control" placeholder="البريد الالكتروني" v-model="email" />
          <small class="form-text text-muted" v-show="emailError">{{
              emailError
          }}</small>
        </div>
        <div class="form-group">
          <input type="password" name='password' class="form-control" placeholder="كلمه المرور" v-model="password" />
          <small class="form-text text-muted" v-show="passwordError">{{
              passwordError
          }}</small>
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="رقم الجوال" v-model="phone" />
          <small class="form-text text-muted" v-show="phoneError">{{
              phoneError
          }}</small>
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="عنوانك" v-model="address" />
          <small class="form-text text-muted" v-show="addressError">{{
              addressError
          }}</small>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="عمرك" v-model="age" />
          <small class="form-text text-muted" v-show="ageError">{{
              ageError
          }}</small>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="الرقم القومي" v-model="natID" />
          <small class="form-text text-muted" v-show="natIDError">{{
              natIDError
          }}</small>
        </div>
        <div class="form-group">
          <select v-model="bloodType" class="form-select">
            <option dir="auto" disabled>اختر فصيلة دمك</option>
            <option>O-</option>
            <option>O+</option>
            <option>A-</option>
            <option>A+</option>
            <option>B-</option>
            <option>B+</option>
            <option>AB-</option>
            <option>AB+</option>
          </select>
          <small class="form-text text-muted" v-show="bloodTypeError">{{
              bloodTypeError
          }}</small>
        </div>
        <div>
          <label>الموافقه علي الشروط والاحكام</label>
          <input type="checkbox" v-model="acceptTerms" />
          <div>
            <small class="form-text text-muted" v-show="!acceptTerms">{{
                acceptTermsError
            }}</small>
          </div>
        </div>
        <base-button type="submit">انشاء حساب</base-button>
      </form>
      <div class="createnewaccount">
        <p>لديك حساب ؟</p>
        <router-link to="/login">تسجيل الدخول</router-link>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
import { useAuthStore } from '@/stores/AuthStore';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const AuthStore = useAuthStore();
    return {
      // you can return the whole store instance to use it in the template
      AuthStore,
    }
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
      phone: null,
      address: null,
      age: null,
      natID: null,
      bloodType: 'اختر فصيلة دمك',
      acceptTerms: false,

      nameError: null,
      emailError: null,
      passwordError: null,
      phoneError: null,
      addressError: null,
      ageError: null,
      natIDError: null,
      bloodTypeError: null,
      acceptTermsError: null,

    };
  },
  methods: {
    async handleSignup() {
      //if (this.isValidateInput()) {
      if (this.bloodType == 'اختر فصيلة دمك') { this.bloodType = null; }

      this.AuthStore.signup(
        {
          name: this.name,
          email: this.email,
          password: this.password,
          age: this.age,
          phone: this.phone,
          address: this.address,
          nat_ID: this.natID,
          blood: this.bloodType,
        }
      )
      router.push('/myaccount');
      //}
      // const reg = await this.axios.post('/users/create/',
      //   {
      //     name: this.name,
      //     email: this.email,
      //     password: this.password,
      //     age: this.age,
      //     phone: this.phone,
      //     address: this.address,
      //     nat_ID: this.natID,
      //     blood: this.bloodType,
      //   });
      // const response = await this.axios.post('/auth/token/',
      //   {
      //     email: this.email,
      //     password: this.password
      //   });
      // localStorage.setItem('token', response.data);
      // this.$router.replace("/");


    },
    isValidateInput() {
      this.restErrors()
      let isValid = true;

      if (!this.name) {
        this.nameError = "ادخل الاسم بالكامل";
        isValid = false
      }
      if (!this.email) {
        this.emailError = "ادخل بريدك الالكتروني";
        isValid = false
      }
      //  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!this.password) {
        this.passwordError = "ادخل كلمه المرور";
        isValid = false
      }
      //  else if (!pattern.test(this.password)) {
      //   this.passwordError = "ادخل كلمه المرور مكونه من ثماني حروف و تحتوي رقم و حرف علي الاقل";
      //   isValid = false
      // }

      if (this.phone) {
        if (this.phone.length != 12) {
          this.phoneError = "ادخل رقمك المكون من 12 رقم";
          isValid = false
        } else if (isNaN(this.phone)) {
          this.phoneError = "ادخل ارقام فقط من فضلك";
          isValid = false
        }
      }

      /*       if (!this.address) {
              this.addressError = "ادخل عنوانك";
              isValid = false
            }
            if (!this.age) {
              this.ageError = "ادخل عمرك";
              isValid = false
            }
            if (!this.natID) {
              this.natIDError = "ادخل الرقم القومي";
              isValid = false
            }
            if (!this.acceptTerms) {
              this.acceptTermsError = "يجب الموافقه علي شروط الموقع";
              isValid = false
            } 
            */

      return isValid

    },
    restErrors() {
      this.nameError = null;
      this.emailError = null;
      this.passwordError = null;
      this.phoneError = null;
      this.addressError = null;
      this.ageError = null;
      this.natIDError = null;
      this.bloodTypeError = null;
      this.acceptTermsError = null;
    }
  },
};
</script>

<style scoped>



.signincontainer {
  width: 30vw;
}

h2 {
  margin-bottom: 20px;
}

form {
  text-align: end;
}

form>div {
  margin: 5px 0px;
  cursor: context-menu !important;
}

form>div>input {
  text-align: end;
}

form>div>label {
  margin-right: 10px;
}

label {
  color: #7c7e80;
}

input[type="checkbox"] {
  transform: scale(1.2);
}

button {
  margin-top: 25px !important;
}

small {
  color: #f84949 !important;
}

.createnewaccount {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-top: 5px;
}

div>a {
  text-decoration: none;
}

@media (max-width: 365px) {

  .signincontainer,
  button {
    width: 70vw !important;
  }

  .createnewaccount {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5px;
  }

  .createnewaccount>p {
    margin: 0px !important;
    display: flex;
    justify-content: end;
  }

  label {
    font-size: 14px;
  }
}

@media (max-width: 585px) {
  .signincontainer,
  button {
    width: 60vw;
  }

  h2 {
    font-size: 25px !important;
  }
}
@media (min-width: 585px) and (max-width: 1000px) {
  .signincontainer,
  button {
    width: 40vw;
  }
}

@media (min-height: 1000px) {
  .signincontainer {
    width: 400px;
    margin-top: 130px;
  }
  button {
    width: 400px;
  }
}
</style>