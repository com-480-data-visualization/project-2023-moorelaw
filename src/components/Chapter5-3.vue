<template>
    <h2>Example: Apple M2 (2022) SoC</h2>
    <div class="flex flex-items-center flex-justify-center mx-50">
        <div class="i-mdi-information-slab-circle mx-2"></div>
        <p class="my-4"> You can select workloads (by clicking its logo) and see which part of the SoC is activated.</p>
    </div>
    <div class="flex flex-justify-center mt-10 mb-10">
        <div class="flex  flex-col w-60 mx-40 items-start">
            <div class="flex mt-10 flex-items-center justify-start " v-for="work in workloads" ref="buttons">
                <div :class="`${work.icon} w-20 h-20`"></div>
                <p class="ml-5 text-left"> {{ work.name }} </p>
            </div>
        </div>
        <M2SoC ref="m2_diagram"></M2SoC>
    </div>
</template>

<style scoped>

.i-mdi-information-slab-circle {
    @apply w-6 h-6;
}
</style>



<script setup lang="ts">

import M2SoC from './SvgFigure/M2SoC.vue';
import { onMounted, ref } from 'vue';
import * as d3 from "d3";

const buttons = ref<HTMLDivElement[]>([]);
const m2_diagram = ref<typeof M2SoC | null>(null);

const workloads = [
    {
        name: "Texting",
        icon: "i-mdi-file-document-edit",
        active_region: [
            "eCPU", "IO", "IOAux"
        ],
    },
    {
        name: "Gaming",
        icon: "i-mdi-gamepad-square",
        active_region: [
            "hCPU", "GPU", "IO", "IOAux"
        ],
    },
    {
        name: "Face Recognition",
        icon: 'i-mdi-face-recognition',
        active_region: [
            "eCPU", "NPU", "SEC", "IO", "IOAux"
        ]
    },
    {
        name: "Video Encoding",
        icon: "i-mdi-film",
        active_region: [
            "MPU", "IO", "IOAux"
        ]
    },
    {
        name: "Password",
        icon: "i-mdi-form-textbox-password",
        active_region: [
            "eCPU", "SEC", "IO", "IOAux"
        ]
    }
];


const updateUsage = () => {
    let collected: string[] = [];
    buttons.value.forEach((el, index) => {
        if (d3.select(el).selectChild("div").attr("clicked") == "true") {
            for (const region of workloads[index].active_region) {
                if (!collected.includes(region))
                    collected.push(region);
            }
        }
    });
    m2_diagram.value!.activate_region(collected);
};

onMounted(() => {
    // bind click event to all these stuff.
    buttons.value.forEach((el, index) => {
        const icon = d3.select(el).selectChild("div");
        icon.attr("clicked", "false");
        icon.on("click", async () => {
            if (icon.attr("clicked") == "false") {
                // turn it into true
                await icon.transition().duration(200).style("color", "salmon").end();
                icon.attr("clicked", "true");

            } else {
                await icon.transition().duration(200).style("color", null).end();
                icon.attr("clicked", "false");
            }
            updateUsage();
        });
    });
});



</script>
