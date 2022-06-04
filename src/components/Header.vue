<template>
<ul class="nav nav-tabs">
  <li class="nav-item">
   <router-link class="nav-link active" to="/home">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/sign-in">Sign In</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/sign-up">Sign Up</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/sign-out">Sign Out</router-link>
  </li>
</ul>
</template>
<script>
export default {
  name:"Header-head",
     methods:{
        logout(){
            // console.log("Logout")
            localStorage.clear();
            this.$router.push({name:'SignIn'});
        }
    }
}
</script>


<style scoped>
body{
    margin:0;
    padding:0;
}
</style>