<script setup>
import Transistor from './SvgFigure/Transistor.vue';
</script>

<template>
    <h2 class="mb-10">Transistors</h2>
    <div class="text-justify mx-50">
        <p class="my-4">
            Transistors are electrically controlled switches: When the voltage of its <code class="font-bold">gate</code>
            meets some
            requirements
            (e.g., larger than a threshold), the switches is on, which means the <code class="font-bold">channel</code>
            between its
            <code class="font-bold">source</code> and
            <code class="font-bold">drain</code> is connected.
            Because modern transistors are usually made with metal (for the gate), oxide (for isolating the gate and the
            channel), and the semiconductor substrate where the channel is formed due to the electrical force, they are also
            called <code class="font-bold">MOSEFT</code> (Metal-Oxide-Semiconductor Field-Effect Transistor).
        </p>
        <p class="my-4">
            The following figure displays a function model of a N-type transistor, which means the transistor's channel is
            formed when the gate voltage is high.
        </p>

        <div class="flex flex-items-center flex-justify-initial">
            <div class="i-mdi-information-slab-circle mx-2"></div>
            <p class="my-4"> You can raise the voltage by clicking the gate and the source, and observe its effect.</p>

        </div>

    </div>

    <div class="flex flex-justify-center">
        <Transistor></Transistor>
    </div>
</template>

<style scoped>
.i-mdi-information-slab-circle {
    @apply w-6 h-6;
}
</style>