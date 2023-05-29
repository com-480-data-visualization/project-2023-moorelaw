<script setup>

import NotGate from './SvgFigure/NotGate.vue';
import AndGate from "./SvgFigure/AndGate.vue";
import OrGate from "./SvgFigure/OrGate.vue";

</script>

<template>
    <h1>From Transistor to Logic</h1>
    <div class="flex my-20">
        <div class="flex-col mx-15">
            <NotGate class="h-100"></NotGate>
            <p>NOT</p>
        </div>
        <div class="flex-col mx-15">
            <AndGate class="h-100"></AndGate>
            <p>AND</p>
        </div>
        <div class="flex-col mx-15">
            <OrGate class="h-100"></OrGate>
            <p>OR</p>
        </div>
    </div>
</template>