<script setup>
import Chapter21 from './Chapter2-1.vue';
import Chapter22 from './Chapter2-2.vue';
import Chapter23 from './Chapter2-3.vue';
import Chapter24 from './Chapter2-4.vue';
</script>

<template>
    <div class="section bg2">
        <div class="slide flex">
            <Chapter21></Chapter21>
        </div>
        <div class="slide flex">
            <Chapter22></Chapter22>
        </div>
        <div class="slide flex">
            <Chapter23></Chapter23>
        </div>
        <div class="slide flex">
            <Chapter24></Chapter24>
        </div>
    </div>
</template>

<style>
.flex {
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 30pt;
}
</style>

<script>
export default {

}
</script>

<!--
    - Show how transistors work (requires interactive)
    - Show the scaling, thus smaller size, maybe the power, speed, and Density.
    - Show transistors can be used to implement logic (Some circuit image)
    - Show the Moor's law (50-year trend)
-->