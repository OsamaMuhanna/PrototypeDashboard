<!DOCTYPE html>
<html>
<head>

  <style>
    #app {
      display: inline-block;
      padding: 10px;
      font-size: x-large;
      text-align: center; 
    }
    .message-container {
      margin-bottom: 20px;
      padding: 10px;
      border-radius: 5px;
      color: white;
      font-weight: bold;
    }
    .green {
      background-color: lightgreen;
    }
    .blue {
      background-color: lightblue;
    }
    .pink {
      background-color: lightpink;
    }
  </style>
</head>
<body>

<div id="app">
  <router-link to="/Calendar1">
    <div class="message-container green">{{ message }}</div>
  </router-link>
  <router-link to="/Calendar2">
    <div class="message-container blue">{{ message1 }}</div>
  </router-link>
  <router-link to="/Calendar3">
    <div class="message-container pink">{{ message2 }}</div>
  </router-link>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://unpkg.com/vue-router@4.0.0-beta.15/dist/vue-router.global.js"></script>
<script src="./router.js"></script>

<script>
  const app = Vue.createApp({
    data() {
      return {
        message: "HCM Fusion Project Timeline",
        message1: "OneStream Project Timeline",
        message2: "MullenLowe Project Timeline"
      }
    }
  })
  
  app.mount('#app')
</script>

</body>
</html>
