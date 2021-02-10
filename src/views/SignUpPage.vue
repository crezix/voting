<template>
    <AdminPanel/>
    <SignUp/>
</template>

<script>
import AdminPanel from  '@/components/AdminPanel.vue'
import SignUp from  '@/components/SignUp.vue'
export default {
  name: 'SignUpPage',
  components: {
    SignUp,
    AdminPanel
  }
}
</script>