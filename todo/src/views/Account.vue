<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// URL에서 쿼리값(accountType) 가져오기
const accountType = computed(() => route.query.accountType || 'login')

const title = computed(() => (accountType.value === 'signup' ? '회원가입' : '로그인'))

const isSignup = computed(() => accountType.value === 'signup')
</script>

<template>
  <body>
    <div class="container">
      <h1>{{ title }}</h1>
      <form action="submit">
        <input type="email" placeholder="사용할 아이디를 입력하세요" />
        <input type="password" name="password" placeholder="사용할 비밀번호를 입력하세요" />
        <input
          v-if="isSignup"
          type="password"
          name="password_check"
          placeholder="비밀번호를 다시 입력하세요"
        />
        <input type="submit" class="submit" value="회원가입" />
      </form>
    </div>
  </body>
</template>

<style scoped>
@import '@/assets/account.css';
</style>
