import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueLazyload from 'vue-lazyload'

const app = createApp(App)

app.use(router)
app.use(VueLazyload, {
  preLoad: 1, // 미리 로드할 이미지의 비율 설정
  error: '@/assets/error.png', // 이미지 로드 실패 시 표시할 이미지
  loading: '@/assets/loading.png', // 이미지 로딩 중 표시할 이미지
  attempt: 1, // 이미지 로딩 시도 횟수
})

app.mount('#app')
