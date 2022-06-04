<template>
<img class="logo" src="../assets/restor.png">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button class="button1" v-on:click="signUp">Sign Up</button>
            <router-link to="/sign-in">Sign-In</router-link> <br />
    </div>
</template>
<script>
export default {
  name: "Sign-up"
}
</script>