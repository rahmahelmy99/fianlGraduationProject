import { createApp } from 'vue'

import App from '@/App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.headers.post['Content-Type'] = 'application/json';

import basebutton from '@/components/UI/basebutton.vue'
import basewrapper from '@/components/UI/basewrapper.vue'

import router from '@/router';

const app = createApp(App)

app.config.globalProperties.auth = false;
app.config.globalProperties.api = 'http://localhost:8000/api';

import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()
import { createPinia } from 'pinia'
app.use(createPinia())

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faLocationDot, faSearch, faPhoneVolume, faQuestion, faSignOutAlt, faBars, faCaretDown, faTimes, faHome, faSignInAlt, faUser, faQuestionCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons'


library.add(faPhone, faEnvelope, faLocationDot, faSearch, faPhoneVolume, faQuestion, faSignOutAlt, faBars, faCaretDown, faTimes, faHome, faSignInAlt, faUser, faQuestionCircle, faUserPlus)

app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(VueAxios, axios)

app.component('base-button', basebutton)
app.component('base-wrapper', basewrapper)

app.mount('#app')