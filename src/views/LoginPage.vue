<template>
  <div class="home">
    <NavBar/>
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Login from  '@/components/Login.vue'
export default {
  name: 'LoginPage',
  components: {
    NavBar,
    Login
  }
}
</script>

