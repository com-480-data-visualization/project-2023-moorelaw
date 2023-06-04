<script setup>

import NotGate from './SvgFigure/NotGate.vue';
import AndGate from "./SvgFigure/AndGate.vue";
import OrGate from "./SvgFigure/OrGate.vue";

</script>

<template>
    <h2 class="mb-10">From Transistors to Logic</h2>

    <div class="text-justify mx-50">
        <p class="my-4">Transistors, combining with the binary encoding (high voltage means 1, zero voltage means 0), can
            represent logic calculations, which can be furthered used to build more complex circuit (e.g., mux, adder, and
            memory) and eventually forms the digital hardware we used today. </p>

        <p class="my-4">The CMOS implementation of the basic logic gates (<code class="font-bold">NOT</code>, <code
                class="font-bold">AND</code>, <code class="font-bold">OR</code>) is shown in the following figure.</p>
    </div>

    <div class="flex flex-justify-center my-10">
        <div class="flex-col mx-15">
            <NotGate class="h-85"></NotGate>
            <p>NOT</p>
        </div>
        <div class="flex-col mx-15">
            <AndGate class="h-85"></AndGate>
            <p>AND</p>
        </div>
        <div class="flex-col mx-15">
            <OrGate class="h-85"></OrGate>
            <p>OR</p>
        </div>
    </div>

    <div class="flex flex-justify flex-items-center mx-50">
        <div class="i-mdi-information-slab-circle mx-2"></div>
        <p class="my-4"> You can change gates' input voltage and observe each transistor state (dashed - off,
            solid - on) and the output.</p>
    </div>
</template>

<style scoped>
.i-mdi-information-slab-circle {
    @apply w-6 h-6;
}
</style>