<script setup>
import { RouterLink, RouterView } from 'vue-router'

const logoUrl = '/src/assets/Olaf.webp'
</script>

<template>
  <header>
    <div>
      <nav class="nav1">
        <div class="nav2">
          <RouterLink to="/">
            <img alt="logo" class="logo" v-lazy="logoUrl" />
          </RouterLink>
          <div class="menu">
            <RouterLink to="/">홈</RouterLink>
            <RouterLink to="/account?accountType=login">로그인</RouterLink>
            <RouterLink to="/account?accountType=signup">회원가입</RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <body>
    <RouterView />
  </body>
</template>

<style scoped>
@import './assets/app.css';
</style>
