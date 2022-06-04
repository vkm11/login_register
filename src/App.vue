<template>

  <router-view></router-view>
</template>

<script>
export default {
    name: "App", 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  padding: 0;
  margin: 0;
}
.logo{ 
    width:160px;
}
.register input, .Sign-In input{ 
    width: 300px;
    height:40px;
    font-size: 18px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border:1px solid skyblue;
}
.register button, .Sign-In button {
    width: 100px;
    border-radius: 1rem;
    height:40px;
    border-style: outset;
    font-size: 20px;
    /* border:1px solid skyblue; */
    color: #fff;
    /* background-color: skyblue; */
    cursor:pointer;
}
.button1:hover,
.button1:focus {
  opacity: 0.9;
  outline: 0;
}
.button1:active {
  box-shadow: none;
  margin-top: 4px;
}
.register button.button1, .Sign-In button.button1{
  background-color: white; 
  color: black; 
  /* border: 2px solid #4CAF50; */
}
.register button.button1:hover, .Sign-In button.button1:hover {
  background-color: #4CAF50;
  color: white;
}
</style>
