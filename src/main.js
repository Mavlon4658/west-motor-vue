import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import clickOutside from './directives/click-outside.js'
import '@/assets/scss/style.scss'
import components from './components/UI'

const app = createApp(App);

app.directive('click-outside', clickOutside);

app.config.globalProperties.$getImage = (imageName) => {
    return require(`@/assets/images/${imageName}`);
}

for (const [key, value] of Object.entries(components)) {
    app.component(key, value);
}

app.mount('#app');