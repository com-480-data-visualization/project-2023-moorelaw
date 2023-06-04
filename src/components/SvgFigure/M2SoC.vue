<template>
    <div ref="root">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="642px"
            height="581px" viewBox="-0.5 -0.5 642 581" style="background-color: rgb(255, 255, 255);">
            <defs />
            <g>
                <rect x="17" y="102" width="265" height="222" fill="#d5e8d4" stroke="none" pointer-events="all"
                    ref="hCPU" />
                <rect x="17" y="324" width="266" height="103" fill="#ffe6cc" stroke="none" pointer-events="all"
                    ref="eCPU" />
                <rect x="282" y="17" width="344" height="249" fill="#dae8fc" stroke="none" pointer-events="all" ref="GPU" />
                <rect x="282" y="266" width="262" height="115" fill="#f8cecc" stroke="none" pointer-events="all"
                    ref="MPU" />
                <rect x="544" y="266" width="82" height="115" fill="#fff2cc" stroke="none" pointer-events="all" ref="SEC" />
                <rect x="283" y="381" width="261" height="184" fill="#e1d5e7" stroke="none" pointer-events="all"
                    ref="NPU" />
                <rect x="17" y="427" width="266" height="138" fill="#b1ddf0" stroke="none" pointer-events="all" ref="IO" />
                <rect x="544" y="381" width="82" height="184" fill="#b1ddf0" stroke="none" pointer-events="all" ref="IOAux">
                </rect>
                <image x="-0.5" y="-0.5" width="640" height="579.62" href="/figure/m2.svg" />
                <rect x="17" y="102" width="265" height="222" fill-opacity="0" fill="#ffffff" stroke="none"
                    pointer-events="all" ref="hCPUMask" />
                <rect x="17" y="324" width="266" height="103" fill-opacity="0" fill="#ffffff" stroke="none"
                    pointer-events="all" ref="eCPUMask" />
                <rect x="282" y="17" width="344" height="249" fill-opacity="0" fill="#ffffff" stroke="none"
                    pointer-events="all" ref="GPUMask" />
                <rect x="282" y="266" width="262" height="115" fill-opacity="0" fill="#ffffff" stroke="none"
                    pointer-events="all" ref="MPUMask" />
                <rect x="544" y="266" width="82" height="115" fill-opacity="0" fill="#ffffff" stroke="none"
                    pointer-events="all" ref="SECMask" />
                <rect x="283" y="381" width="261" height="184" fill-opacity="0" fill="#ffffff" stroke="none"
                    pointer-events="all" ref="NPUMask" />
                <rect x="17" y="427" width="266" height="138" fill-opacity="0" fill="#ffffff" stroke="none"
                    pointer-events="all" ref="IOMask" />
                <rect x="544" y="381" width="82" height="184" fill-opacity="0" fill="#ffffff" stroke="none"
                    pointer-events="all" ref="IOAuxMask"></rect>
            </g>
        </svg>
        <SoCTooltip ref="tooltip" name="" description="" :computation="0" :memory="0" :control="0" :power="0"></SoCTooltip>
    </div>
</template>

<script setup lang="ts">
import * as d3 from 'd3';
import { onMounted, ref } from 'vue';

import SoCTooltip from "./SocTooltip.vue";

interface HardwareInfo {
    name: string,
    description: string,
    computation_area: number,
    memory_area: number,
    control_area: number,
    power: number
};

const hardware_info = {
    hCPU: {
        name: "High-performance CPUs",
        description: "General-purpose processors for logic and control tasks.",
        computation_area: 0.2,
        memory_area: 0.4,
        control_area: 0.4,
        power: 20,
    },
    eCPU: {
        name: "Energy-efficient CPUs",
        description: "General-purpose processors, less powerful, but consuming less power to finish the same task.",
        computation_area: 0.3,
        memory_area: 0.35,
        control_area: 0.35,
        power: 5
    },
    GPU: {
        name: "Graphics Processing Units",
        description: "Specialized hardware for graphics rendering.",
        computation_area: 0.8,
        memory_area: 0.1,
        control_area: 0.1,
        power: 60
    },
    MPU: {
        name: "Media Engine",
        description: "Specialized hardware for video encoding and decoding.",
        computation_area: 0.6,
        memory_area: 0.3,
        control_area: 0.1,
        power: 10
    },
    NPU: {
        name: "Neural Engine",
        description: "Specialized hardware for neural network inference. ",
        computation_area: 0.5,
        memory_area: 0.45,
        control_area: 0.05,
        power: 5
    },
    SEC: {
        name: "Security Engine",
        description: "Specialized hardware for security and privacy functionality, e.g., password storage, encryption and decryption.",
        computation_area: 0.4,
        memory_area: 0.2,
        control_area: 0.4,
        power: 1
    },
    IO: {
        name: "I/O Interface and System Cache",
        description: "Global cache, memory controller and external device adaptor (e.g., monitor, network).",
        computation_area: 0.1,
        memory_area: 0.4,
        control_area: 0.2,
        power: 1
    },
    IOAux: {
        name: "I/O Interface and System Cache",
        description: "Global cache, memory controller and external device adaptor (e.g., monitor, network).",
        computation_area: 0.1,
        memory_area: 0.4,
        control_area: 0.2,
        power: 1
    }
};

const root = ref<HTMLDivElement | null>(null);

const hCPU = ref(null);
const eCPU = ref(null);
const GPU = ref(null);
const MPU = ref(null);
const NPU = ref(null);
const SEC = ref(null);
const IO = ref(null);
const IOAux = ref(null);

const hCPUMask = ref(null);
const eCPUMask = ref(null);
const GPUMask = ref(null);
const MPUMask = ref(null);
const NPUMask = ref(null);
const SECMask = ref(null);
const IOMask = ref(null);
const IOAuxMask = ref(null);

const tooltip = ref<typeof SoCTooltip | null>(null);

const string_mapping = {
    "hCPU": [hCPU, hCPUMask],
    "eCPU": [eCPU, eCPUMask],
    "GPU": [GPU, GPUMask],
    "MPU": [MPU, MPUMask],
    "NPU": [NPU, NPUMask],
    "SEC": [SEC, SECMask],
    "IO": [IO, IOMask, IOAuxMask],
    "IOAux": [IOAux, IOAuxMask, IOMask]
};

const activate_region = (regions: string[]) => {
    // first, close all regions.
    // Object.values(string_mapping).forEach((region) => {
    //     // d3.select(region[0].value).style("opacity", 0);
    //     if ()
    // });

    // second, highlight the region here
    // for (const region of regions) {
    //     if (Object.keys(string_mapping).includes(region)) {
    //         d3.select(string_mapping[region][0].value).transition().duration(100).style("opacity", 1);
    //     } else {
    //         console.log("Unsupported region:", region);
    //     }
    // }

    Object.entries(string_mapping).forEach(([name, region]) => {
        if (regions.includes(name)) {
            d3.select(region[0].value).transition().duration(200).style("opacity", 1);
        } else {
            d3.select(region[0].value).transition().duration(200).style("opacity", 0);
        }
    });
};



// When selecting all the mask, rendering the tooltip

onMounted(() => {
    activate_region([]);
    // adding event listener to each stuff.
    Object.entries(string_mapping).forEach(([names, value]) => {
        const info: HardwareInfo = hardware_info[names];

        d3.select(value[1].value)
            .on("mouseover", () => {
                tooltip.value!.updateInfo(info);
                tooltip.value!.show();
                if(names == "IO" || names == "IOAux"){
                    d3.select(value[2].value).transition().duration(200).attr("fill-opacity", 0.6);
                }
                d3.select(value[1].value).transition().duration(200).attr("fill-opacity", 0.6);
            })
            .on("mousemove", (event: MouseEvent) => {
                const parent_pos = root.value?.getBoundingClientRect();
                const get_direction = () => {

                    const should_be_right = event.clientX < parent_pos!.left + parent_pos!.width / 2;
                    const should_be_top = event.clientY > parent_pos!.top + parent_pos!.height / 2;

                    if (should_be_right && should_be_top) {
                        // top right: point is on the bottom left
                        return ["tr", event.clientX - parent_pos!.left, parent_pos!.bottom - event.clientY];
                    } else if (!should_be_right && should_be_top) {
                        return ["tl", parent_pos!.right - event.clientX, parent_pos!.bottom - event.clientY];
                    } else if (!should_be_top && !should_be_right) {
                        return ["bl", parent_pos!.right - event.clientX, event.clientY - parent_pos!.top];
                    } else {
                        return ["br", event.clientX - parent_pos!.left, event.clientY - parent_pos!.top];
                    }
                };
                tooltip.value!.move(
                    ...get_direction()
                );
            })
            .on("mouseout", () => {
                d3.select(value[1].value).transition().duration(200).attr("fill-opacity", 0);
                if(names == "IO" || names == "IOAux"){
                    d3.select(value[2].value).transition().duration(200).attr("fill-opacity", 0);
                }
                tooltip.value!.disappear();
            })
    });
});

defineExpose({
    activate_region
});


</script>