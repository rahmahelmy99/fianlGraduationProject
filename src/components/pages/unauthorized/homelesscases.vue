<template>
  <h6>الحالات</h6>

  <div class="card">
    <form>
      <img src="../../../assets/homeless1.jpg" alt="homeless" />
      <div>
        <label>المنطقه : {{ vagranarea }}</label>
      </div>
      <div>
        <p>التفاصيل : {{ details }}</p>
      </div>

      <div class="volunteerbtn">
        <base-button class="volunteerbtn">
          <router-link to="/helphomeless">ساعد</router-link>
        </base-button>
      </div>
    </form>
  </div>
  <div class="card">
    <form>
      <img src="../../../assets/homeless.jpg" alt="homeless" />
      <div>
        <label>المنطقه : {{ vagranarea }}</label>
      </div>
      <div>
        <p>التفاصيل : {{ details }}</p>
      </div>

      <div class="volunteerbtn">
        <base-button class="volunteerbtn">
          <router-link to="/helphomeless">ساعد</router-link>
        </base-button>
      </div>
    </form>
  </div>
  <div class="card">
    <form>
      <img src="../../../assets/homeless2.jpg" alt="homeless" />
      <div>
        <label>المنطقه : {{ vagranarea }}</label>
      </div>
      <div>
        <p>التفاصيل : {{ details }}</p>
      </div>

      <div class="volunteerbtn">
        <base-button class="volunteerbtn">
          <router-link to="/helphomeless">ساعد</router-link>
        </base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vagranarea: "القاهره",
      details:
        "من امام محطه مصر يوجد مسن فى ال٨٠ من عمره يدعى محمد مشرد بالشوارع منذ ٧ سنوات",
    };
  },
};
</script>

<style scoped>
img {
  width: 30vw;
  height: 30vh;
}
.card {
  margin-top: 20px;
  width: 44vw;
  height: 58vh;
  padding: 15px;
  border-radius: 10px;
}

h6 {
  align-self: end;
  margin: 5px auto;
  margin-top: 20px;
  font-size: 20px;
}
form {
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
  align-items: center;
  justify-content: space-between;
}
form > div {
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 5px;
  align-items: center;
  justify-content: space-between;
}

input,
textarea {
  width: 42.5vw;
  padding: 5px 10px 5px 0px;
  border-radius: 4px;
  border: 1px solid #aaaaaa;
  text-align: end;
}

textarea {
  resize: none;
}

.volunteerbtn {
  width: 25vw;
  margin: 0px auto;
}

a {
  color: white;
}

a:hover {
  text-decoration: none;
}
@media (max-width: 380px) {
  .card {
    width: 90vw;
    height: 60vh;
  }
  img {
    width: 75vw;
    height: 28vh;
  }
  .volunteerbtn {
    width: 60vw;
  }
}
@media (min-width: 380px) and (max-width: 650px) {
  .card {
    width: 75vw;
    height: 58vh;
  }
  img {
    width: 55vw;
    height: 30vh;
  }
  .volunteerbtn {
    width: 50vw;
  }
}
@media (min-width: 650px) and (max-width: 1000px) {
  .card {
    width: 60vw;
    height: 63vh;
  }
  img {
    width: 45vw;
    height: 35vh;
  }
  .volunteerbtn {
    width: 40vw;
  }
}
</style>
