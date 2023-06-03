<template>
    <div class="prompt" ref="prompt">
        <p style="font-weight:bold"> {{ name }} </p>
        <p> {{ description }} </p>
        <p style="font-weight:bold">Silicon area distribution:</p>
        <ul>
            <li>Compute: {{ computation * 100 }}%</li>
            <li>Memory: {{ memory * 100 }}%</li>
            <li>Control logic: {{ control * 100 }}%</li>
        </ul>
        <p style="font-weight:bold"> Maximum power: {{ power }}w </p>
    </div>
</template>

<style scoped>
    .prompt {
        @apply absolute px-2 py-2 bg-gray-100 border-2 rounded w-2/3;
        opacity: 0;
        pointer-events: none;
        text-align: left;
    }

    .prompt p {
        font-size: 1em;
    }

    .prompt li {
        font-size: 1em;
    }
</style>


<script setup lang="ts">
import { ref } from 'vue';
import * as d3 from "d3";


const prompt = ref<HTMLDivElement | null>(null);

const name = ref("");
const description = ref("");
const computation = ref(0);
const memory = ref(0);
const control = ref(0);
const power = ref(0);

const show = () => {
    d3.select(prompt.value).transition().duration(200).style("opacity", 1);
};

const disappear = () => {
    d3.select(prompt.value).transition().duration(200).style("opacity", 0);
};

const move = (position: string, x: number, y: number) => {
    const ele = d3.select(prompt.value);
    ele.style("left", null).style("right", null).style("top", null).style("bottom", null);
    if (position == "br") {
        d3.select(prompt.value).style("left", `${x}px`).style("top", `${y}px`);
    } else if (position == "bl") {
        d3.select(prompt.value).style("right", `${x}px`).style("top", `${y}px`);
    } else if (position == "tr") {
        d3.select(prompt.value).style("left", `${x}px`).style("bottom", `${y}px`);
    } else {
        d3.select(prompt.value).style("right", `${x}px`).style("bottom", `${y}px`);

    }
};

interface HardwareInfo {
    name: string,
    description: string,
    computation_area: number,
    memory_area: number,
    control_area: number,
    power: number
};

const updateInfo = (info: HardwareInfo) => {
    name.value = info.name;
    description.value = info.description;
    computation.value = info.computation_area;
    memory.value = info.memory_area;
    control.value = info.control_area;
    power.value = info.power;
}

defineExpose({
    show,
    disappear,
    move,
    updateInfo
});

</script>