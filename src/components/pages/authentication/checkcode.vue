<template>
  <base-wrapper>
    <div class="checkcodewrapper">
      <img
        src="../../../assets/sendcode.png"
        alt="send code"
        width="350"
        height="250"
      />
    </div>
    <div class="signincontainer">
      <h2>نسيت كلمه المرور</h2>
      <p>
        قم بادخال كود مكون من 4 ارقام تم ارساله الي رقم موبايلك حتي يتم التاكيد
        علي تغير كلمه المرور
      </p>
      <form @submit.prevent="sendcode">
        <input type="number" max="9" Min="0" v-model="codebit0" />
        <input type="number" max="9" Min="0" v-model="codebit1" />
        <input type="number" max="9" Min="0" v-model="codebit2" />
        <div>
          <small id="emailHelp" class="form-text text-muted" v-if="error">{{
            error
          }}</small>
        </div>
        <base-button type="submit">ارسال</base-button>
      </form>
      <div class="resendcode">
        <p>لم يتم ارسال الكود ؟</p>
        <button :disabled="!resendcode" @click="sendcode">
          اعاده ارسال بعد</button
        ><span> {{ min + ":" + sec }} </span>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      codebit0: null,
      codebit1: null,
      condebit2: null,
      timer: 120,
      min: 2,
      sec: 0,
      msg: null,
      resendcode: false,
    };
  },
  methods: {
    sendcode() {
      this.error = null;
      this.timer = 120;
      this.min = 2;
      this.sec = 0;
      this.resendcode = false;
      if (
        this.codebit0 == null ||
        this.codebit1 == null ||
        this.codebit2 == null
      ) {
        this.error = "ادخل الكود كامل";
      } else this.countdown();
      //لسه الربط بالباك وتعديل الايرور الجاي من الباك
      //redirect لما يبعت للباك ويطلع صح
      if ((this.msg = "accept")) {
        console.log;
        this.$router.replace(`/resetpass/${this.$route.params.email}`);
      }
    },
    countdown() {
      if (this.timer == 120 || this.timer == 60) {
        this.min--;
        this.timer--;
        this.sec = 59;
      }
      if (this.timer > 0) {
        setTimeout(() => {
          this.timer--;
          this.sec--;
          this.countdown();
        }, 1000);
      } else this.resendcode = true;
    },
  },
};
</script>

<style scoped>
.checkcodewrapper {
  margin-bottom: 150px;
}
input[type="number"] {
  margin: 0px 5px;
}

small {
  color: #f84949 !important;
}

.resendcode {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-top: 12px;
  align-items: baseline;
}

button {
  border: none;
}
/*
button:not(:disabled) {
  color: #cdcbcb !important;
}*/
@media all {
  form > input {
    margin: 2.5px 2.5px 2.5px 2.5px !important;
  }
}
@media (max-width: 500px) {
  .checkcodewrapper {
    margin-bottom: 60px !important;
  }

  p {
    font-size: 12px;
  }
  img {
    width: 60vw;
    height: 50vw;
  }
  form > button {
    width: 50vw;
  }
}
@media (min-width: 500px) and (max-width: 1000px) {
  .checkcodewrapper {
    margin-bottom: 90px !important;
  }

  p {
    font-size: 14px;
  }
  form > button {
    width: 40vw;
  }
}
</style>
