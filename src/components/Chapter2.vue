<script setup>
import Chapter21 from './Chapter2-1.vue';
</script>

<template>
    <div class="section bg2">
        <div class="slide flex">
            <h1>Integrated Circuit 101</h1>
        </div>
        <div class="slide">
            <Chapter21></Chapter21>
        </div>
        <div class="slide flex">
            <h2>The Scaling of Transistors</h2>
        </div>
        <div class="slide flex">
            <h2>From Transistor to Logic</h2>
        </div>
        <div class="slide flex">
            <h2>The Moore's Law</h2>
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