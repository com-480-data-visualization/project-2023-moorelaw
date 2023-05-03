<script setup>
import Cover from "./components/Cover.vue";
import Chapter2 from "./components/Chapter2.vue";
import MooresLaw from "./components/MooresLaw.vue";
import Chapter3 from "./components/Chapter3.vue";
import Chapter4 from "./components/Chapter4.vue";
import Chapter5 from "./components/Chapter5.vue";
import Chapter6 from "./components/Chapter6.vue";
import Acknowledgement from "./components/Acknowledgement.vue";
</script>

<template>
  <full-page :options="options">
    <Cover></Cover>
    <Chapter2></Chapter2>
    <MooresLaw></MooresLaw>
    <Chapter3></Chapter3>
    <Chapter4></Chapter4>
    <Chapter5></Chapter5>
    <Chapter6></Chapter6>
    <Acknowledgement></Acknowledgement>
  </full-page>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<script>

export default {
  data() {
    return {
      options: {
        scrollOverflow: true,
        navigation: true,
        slidesNavigation: true
      }
    }
  }
}

</script>
