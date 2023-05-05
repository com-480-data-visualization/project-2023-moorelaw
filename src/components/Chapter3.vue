<script setup>
    import Chapter31 from './Chapter3-1.vue';
    import Chapter32 from './Chapter3-2.vue';
    import Chapter33 from './Chapter3-3.vue';
    import Skylake from './SvgFigure/Skylake.vue';
</script>
<template>
    <div class="section flex text-center">
        <div class="slide"><Chapter31></Chapter31></div>
        <div class="slide"><Chapter32></Chapter32></div>
        <div class="slide"><Chapter33></Chapter33></div>
        <div class="slide bg-dark-900 w-full">
            <Skylake class="w-full h-79/80"></Skylake>
        </div>
    </div>
</template>
