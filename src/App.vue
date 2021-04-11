<template>
  <div class="main">
    <router-view>
      <router-link to="/login">Login</router-link>
      <router-link to="/cadastro">Cadastro</router-link>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    list-style-type: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
:root{
  --blue: #272D4D;
  --orange: #FF6A5A;
  --purple: #B83564;
}
html, body, .main{
    width: 100%;
    height: 100%;
}
.main{
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
}
a{
    text-decoration: none;
}
input[type=submit], input[type=button], button{
    cursor: pointer;
}
.row{
  flex-direction: row !important;
}
.column{
  flex-direction: column !important;
}
.align-center{
  align-items: center !important;
}
.align-start{
  align-items: flex-start !important;
}
.align-end{
  align-items: flex-end !important;
}
.justify-center{
  justify-content: center !important;
}
.justify-between{
  justify-content: space-between !important;
}
.justify-around{
  justify-content: space-around !important;
}
.justify-evenly{
  justify-content: space-evenly !important;
}
</style>
