<script setup>

import M2SoC from './SvgFigure/M2SoC.vue';

</script>

<template>
    <h1>Specialized Circuits Are Widely Used!</h1>
    <div class="flex mt-10 mb-10">
        <div class="flex flex-col w-60 mx-40 items-start">
            <div class="flex mt-10 justify-start " v-for="work in workloads">
                <div :class="`${work.icon} w-20 h-20`"></div>
                <p class="ml-5 text-left"> {{ work.name }} </p>
            </div>
        </div>
        <M2SoC></M2SoC>
    </div>
    <p>TODO: Use d3.js to repaint this figure to show the component usage when each task is running. </p>
</template>


<script>

export default {
    data(){
        return {
            workloads: [
                {
                    name: "Texting",
                    icon: "i-mdi-file-document-edit",
                    active_region: [
                        "eCPU", "IO"
                    ]
                },
                {
                    name: "Gaming",
                    icon: "i-mdi-gamepad-square",
                    active_region: [
                        "pCPU", "GPU", "IO"
                    ]
                },
                {
                    name: "Face Recognition",
                    icon: 'i-mdi-face-recognition',
                    active_region: [
                        "eCPU", "NPU", "SEC"
                    ]
                },
                {
                    name: "Video",
                    icon: "i-mdi-film",
                    active_region: [
                        "eCPU", "MPU", "GPU", "IO"
                    ]
                },
                {
                    name: "Password",
                    icon: "i-mdi-form-textbox-password",
                    active_region: [
                        "eCPU", "SEC"
                    ]
                }
            ]
        }
    }
}

</script>