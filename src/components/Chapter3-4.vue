<script setup>

import Skylake from './SvgFigure/Skylake.vue';

</script>

<template>
    <h2>Example: Intel Skylake (2015)</h2>
    <div class="flex mt-5 h-auto">
        <img src="/figure/skylake.webp" class="w-3/7 ml-20">
        <Skylake class="rotate-90 w-4/10 h-2/5"></Skylake>
    </div>
</template>


<script>
    export default {
        mounted() {
            console.log("xxx:", document.getElementById("path18245"));
        }
    }
</script>