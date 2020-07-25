<template>
  <div class="home">
    <h1>MyTimestamps - Logging for your life!</h1>
    <Timestamps />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Timestamps from "@/components/Timestamps.vue";

export default {
  name: "Home",
  components: { Timestamps }
};
</script>

