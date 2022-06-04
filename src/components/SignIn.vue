<template>
  <img class="logo" src="../assets/restor.png" />
  <h1>Sign-In</h1>
  <div class="Sign-In">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button class="button1" v-on:click="login">Sign-In</button>
    
    <slot class="slots"> <router-link to="/sign-up">Sign-Up </router-link> </slot>
  </div>
   <router-link to="/"></router-link>
  <Header />
</template>

<script>
  export default {
  name: "SignIn-Page",

}
</script>
<style scoped>

</style>