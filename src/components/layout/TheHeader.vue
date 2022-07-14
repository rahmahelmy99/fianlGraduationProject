لسه مفروض تتحول لراوتر لينك
<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="wrapper">
        <!---->
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul class="navbar-nav">
          <label for="close-btn" class="closeBtn"><i class="fas fa-times fa-1x"></i></label>
          <div>
            <li>
              <router-link to="/">الرئيسيه <i class="fa fa-home fa-fw"></i></router-link>
            </li>

            <li @mouseover="open" @mouseleave="hide">
              <router-link to="/volunteer-form" class="desktop-item">
                <i class="fa fa-caret-down fa-fw"></i> {{ Symbol }}
              </router-link>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" class="mobile-item">
                <i class="fa fa-caret-down fa-fw"> </i> {{ Symbol }}</label>
              <ul class="services drop-menus" v-show="displayserviceslist">
                <li>
                  <router-link to="/volunteer-form">تطوع</router-link>
                </li>
                <li>
                  <router-link to="/donate-form">تبرع</router-link>
                </li>
                <li>
                  <router-link to="/askforhelp">طلب المساعده</router-link>
                </li>

                <li>
                  <router-link to="/vagrants">بلاغ عن مشردين</router-link>
                </li>
                <li>
                  <router-link to="/homelesschildren">بلاغ عن اطفال الشوارع</router-link>
                </li>
                <li>
                  <router-link to="/zakat">احسب زكاة مالك</router-link>
                </li>
                <li>
                  <router-link to="/awarenesslectures">محاضرات توعويه</router-link>
                </li>
                <li>
                  <router-link to="/jobs">فرص العمل</router-link>
                </li>
                <li>
                  <router-link to="/supportedservices">خدمات مدعومة</router-link>
                </li>
              </ul>
            </li>

            <li>
              <router-link to="/connectus">تواصل معنا <i class="fas fa-phone-volume fa-fw"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/whoweare">
                من نحن <i class="fas fa-question-circle fa-fw"></i></router-link>
            </li>
          </div>

          <div>
            <li>
              <router-link to="/myaccount">حسابي <i class="fa fa-user fa-fw"></i></router-link>
            </li>
            <li>
              <router-link to="/login">تسجيل الدخول <i class="fa fa-sign-in-alt fa-fw"></i></router-link>
            </li>
            <li>
              <a>تسجيل الخروج <i class="fas fa-sign-out-alt fa-fw"></i></a>
            </li>
          </div>
        </ul>
        <label for="menu-btn" class="menu-btn"><i class="fas fa-bars"></i></label>

        <div class="logo">
          <router-link to="/">
            <img src="../.././assets/logo1.png" alt="" width="20" height="15" />
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      Symbol: "خدماتنا",
      displayserviceslist: false,
    };
  },
  methods: {
    open() {
      this.displayserviceslist = true;
    },

    hide() {
      this.displayserviceslist = false;
    },
  },
};
</script>

<style scoped>

/* 
nav {
  position: fixed !important;
    height: 70px;
    width: 100vw;
    background-color: #25252c;
    display: flex;
    justify-content: start;
    align-items: center;
    z-index: 1;
  }
  
  */
nav > .wrapper {
  position: relative;
  width: 100vw;
  height: 70px;
  max-width: 1300px;
  padding: 0px 30px;
  margin: auto;
  display: flex;
  justify-content: start;
  align-items: center;
}

nav > .wrapper > ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row-reverse !important;
  width: 88vw;
}

nav > .wrapper > ul > div {
  display: flex;
  flex-direction: row-reverse;
  margin: auto;
}

li,
li > a {
  color: white;
  padding: 0px 10px;
  text-decoration: none;
}

li:hover,
li > a:hover,
img:hover {
  cursor: pointer;
  color: #bbbbbb;
}
.navbar-nav > div > li > .mobile-item {
  display: none;
}

.services {
  margin-top: 5px;
  width: 185px;
  background-color: #ebf1f2;
  height: auto;
  position: fixed;
  list-style: none;
  padding: 0px;
    border: #9a9a9f solid;
    border-radius: 5px;
}

.services > li {
  width: 100%;
  padding: 5px;
  margin: 0px;
}

.services > li:hover {
  background-color: #bbbbbb;
}

.services > li > a {
  color: #25252c;
}
img {
  width: 50px;
  height: 40px;
  /* width: 3.5vw;
  height: 2.5vw; */
  margin-top: 3px;
}
input {
  display: none !important;
}
.wrapper > .menu-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: none;
}
.wrapper > .navbar-nav > .closeBtn {
  color: #fff !important;
  font-size: 20px !important;
  cursor: pointer;
  display: none;
  position: absolute;
  right: 30px;
  top: 20px;
}

@media screen and (max-width: 900px) {
  nav {
    z-index: 99 !important;
  }
  .logo {
    display: block;
  }
  .wrapper > .menu-btn,
  .wrapper > .navbar-nav > .closeBtn {
    display: block;
  }
  .wrapper > .navbar-nav {
    position: fixed;
    height: 100%;
    width: 100%;
    max-width: 400px;
    top: 0;
    right: -100%;
    background: #242526;
    display: block !important;
    padding: 50px 10px;
    line-height: 50px;
    overflow-y: auto;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease;
  }
  nav > .wrapper > ul {
    display: flex;
    align-items: center;
  }

  nav > .wrapper > ul > div {
    display: flex;
    flex-direction: column;
    margin: auto;
    height: auto;
  }

  #menu-btn:checked ~ .navbar-nav {
    right: 0%;
  }
  #menu-btn:checked ~ .menu-btn {
    display: none !important  ;
  }

  #close-btn:checked ~ .menu-btn {
    display: block;
  }
  .navbar-nav > li {
    margin: 15px 10px;
  }

  li > a {
    display: block !important;
    font-size: 20px !important;
    padding: 9px 15px;
  }

  .services {
    display: block;
    margin-top: 3px;
    width: 200px !important;
    background-color: #ebf1f2;
    height: auto;
    position: fixed;
    list-style: none;
    padding: 0px;
    right: 200px;
    border: #9a9a9f solid;
    border-radius: 5px;
    top: 150px !important;
  }

  .services > li {
    width: 100%;
    padding: 1.5px;
    margin: 0px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  }

  .services > li:hover {
    background-color: #bbbbbb;
  }

  .services > li > a {
    padding: 0px 5px;
    font-size: 15px !important;
    color: #25252c;
  }

  img {
    width: 50px;
    height: 40px;
    /* width: 5.5vw !important;
    height: 3.5vw !important; */
    margin-top: 3px;
  }
  #showDrop:checked ~ ul {
    max-height: 100%;
    transition: all ease 0.5ms;
  }

  .navbar-nav > div > li > .desktop-item {
    display: none !important;
  }

  .navbar-nav > div > li > .mobile-item {
    display: block;
    color: #f2f2f2;
    font-size: 20px;
    font-weight: 500;
    padding-left: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .navbar-nav > div > li > .mobile-item > a:hover {
    background: #a7adb3;
  }
  .wrapper > .drop-menu > li {
    margin: 0;
  }

  .wrapper > .drop-menu > li > a {
    border-radius: 5px;
    font-size: 16px !important;
  }
}

@media (min-width: 960px) and (max-width: 1170) {
  li,
  li > a {
    font-size: 12px !important;
    padding: 0 5px;
  }
}
</style>