<script setup>

import Skylake from './SvgFigure/Skylake.vue';
import SkylakeWorkflow from "./SvgFigure/SkylakeWorkflow.vue";
import * as d3 from "d3";

</script>

<template>
    <div class="flex-col h-9/10 mt-1/30">
        <h2 class="h-1/10 mb-1/80">A Real Processor: Intel Skylake (2015)</h2>
        <div id="whole_panel" class="flex w-7/8 mx-auto h-8/10">
            <SkylakeWorkflow class="h-full flex-shrink-0"></SkylakeWorkflow>
            <Skylake class="h-full ml-10 flex-shrink"></Skylake>
            <div id="text_tooltip"></div>
        </div>
    </div>
</template>

<style scoped>

#text_tooltip {
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    opacity: 0;
    border: solid;
    border-width: 2px;
    border-radius: 5px;
    padding: 5px;
    color: black;
    background-color: white;
    pointer-events: none;

    width: 450px;

    text-align: justify;
}

</style>

<script>
export default {
    mounted() {
        let hover_info = [
            {
                highlight_region: [
                    "wf_branch_predictor",
                    "wf_font_1",
                    "path308",  // BTB Tags and States?
                    "path308-2-92", // History Storage
                    "path308-2-92-2", // History Storage
                    "path308-9", // BTB?
                    "path308-2", // TAGE Component Tages?
                    "path11394", // Branch Predictor
                    "path308-9-7", // BTB?
                    "path308-9-7-1", // Op cach Related Banch Prediction?
                ],
                name: "Branch Predictor",
                description: "This module predicts branches ahead of time. It has a table recording the recent branches' results. ",
                metadata_plot: "/figure/metadata_figure/btb.svg",
                color: [
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_l1tlb",
                    "wf_font_2",
                    "path308-1", // ITLB?
                ],
                name: "L1 ITLB",
                description: "This buffer keeps several recent address translation record for instructions fetching.",
                metadata_plot: "",
                color: [
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_l1icache",
                    "wf_font_3",
                    "path308-2-9", // L1i Tags
                    "path308-2-3", // L1i Cache
                ],
                name: "L1 Instruction Cache",
                description: "This buffer keeps the recently used instruction blocks so that instruction fetching do not need to go to far memory to get instructions.",
                metadata_plot: "/figure/metadata_figure/li1.svg",
                color: [
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_instruction_queue",
                    "wf_font_4",
                    "path11560", // Predecode
                    "path308-1-2", // Instruction Queue?
                ],
                name: "Instruction Queue",
                description: "This queue keeps the instruction fetched from the L1 instruction cache. It makes sure the fetching process does not stop when decoders are busy.",
                metadata_plot: "",
                color: [
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_decode",
                    "wf_decode_1",
                    "wf_decode_2",
                    "wf_decode_3",
                    "wf_decode_4",
                    "wf_font_5",
                    "wf_font_6",
                    "wf_font_7",
                    "wf_font_8",
                    "path308-1-2-9", // Decode
                    "path308-2-3-6", // 
                    "path11846",
                ],
                name: "Decode",
                description: "This module break a instruction into micro operations, which are finer-grained hardware-friendly instructions.",
                metadata_plot: "/figure/metadata_figure/decode_width.svg",
                color: [
                    "#f5f5f5",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_microcode",
                    "wf_font_9",
                    "path308-2-1-9", // MSROM?
                ],
                name: "Microcode",
                description: "This module assists the decoder to decode instructions. It serves as a look-up table to store the micro-op for complex instructions (e.g., vector).",
                metadata_plot: "",
                color: [
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_micro_opcache",
                    "wf_font_10",
                    "path308-2-1", // Op Cache Fetch / Fill
                    "path11950", // Op Cache Tags/State?
                    "path308-2-3-6-4", // Op Cache
                ],
                name: "Micro-Op Cache",
                description: "This buffer keeps the micro-ops from recently decoded instructions. No decoding process happens if the hardware founds required decoded micro-op inside.",
                metadata_plot: "/figure/metadata_figure/mop_cache.svg",
                color: [
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_micro_opqueue",
                    "wf_font_11",
                    "path308-9-7-1-8", // Decoded Instruction Queue?
                ],
                name: "Micro-Op Queue",
                description: "This queue keeps the decoded micro-op so that decoding process does not stop when the reorder-buffer is busy.",
                metadata_plot: "",
                color: [
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_reorder_buffer",
                    "wf_font_12",
                    "path18245", // Backend
                ],
                name: "Reorder Buffer",
                description: "This buffer tracks all instructions being executed in parallel, and roll back the processor state if necessary. ",
                metadata_plot: "/figure/metadata_figure/rob.svg",
                color: [
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_ooo_resources",
                    "wf_font_42",
                    "wf_integer_register_file",
                    "wf_font_13",
                    "path308-2-1-8", // Integer Register File
                    "wf_vector_register_file",
                    "wf_font_14",
                    "path308-2-9-7", // Vector / FP Register File
                    "path308-2-9-7-6", // Vector / FP Register File
                    "path308-2-9-5-5", // Extends Vector RF to 512 bits on SKL-X
                    "path308-2-9-5-5-4", // Extends Vector RF to 512 bits on SKL-X
                    "wf_mmx_x87",
                    "wf_font_15",
                    "path308-1-2-5", // MMX / x87 Register File
                ],
                name: "OoO Resources",
                description: "OoO resources contain all registers resources for micro-ops.",
                metadata_plot: "",
                color: [
                    "#f5f5f5",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_integer_register_file",
                    "wf_font_13",
                    "path308-2-1-8", // Integer Register File
                ],
                name: "Integer Register File",
                description: "Register for scalar integer operations (e.g., add, mul, load and store)",
                metadata_plot: "",
                color: [
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_vector_register_file",
                    "wf_font_14",
                    "path308-2-9-7", // Vector / FP Register File
                    "path308-2-9-7-6", // Vector / FP Register File
                    "path308-2-9-5-5", // Extends Vector RF to 512 bits on SKL-X
                    "path308-2-9-5-5-4", // Extends Vector RF to 512 bits on SKL-X
                ],
                name: "Vector Register File",
                description: "Registers for vector integer/float-point operations. ",
                metadata_plot: "",
                color: [
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_mmx_x87",
                    "wf_font_15",
                    "path308-1-2-5", // MMX / x87 Register File
                ],
                name: "MMX / x87 Register File",
                description: "Registers for scalar floating-point operations and legacy 2-element vector floating-point operations. ",
                metadata_plot: "",
                color: [
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_agu_scheduler",
                    "wf_font_16",
                    "path308-2-3-6-4-1", // Reservation Station for Ports 2, 3, 7 (AGUs)?
                ],
                name: "Address Generation Scheduler",
                description:"Scheduler for reordering operations related to the memory address generation.",
                metadata_plot: "",
                color: [
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_reservation_station",
                    "wf_font_17",
                    "path308-2-36-5", // Reservation Station for Ports 0, 1, 4, 5, 6?
                ],
                name: "Reservation Station",
                description: "Scheduler for reordering computation operations (e.g., adder, multiplier, division) and branches. Its size determine the processors' reorder ability.",
                metadata_plot: "/figure/metadata_figure/reservation_station.svg",
                color: [
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_agu_1",
                    "wf_agu_2",
                    "wf_agu_store",
                    "wf_font_18",
                    "wf_font_19",
                    "wf_font_20",
                    "path308-2-3-6-4-1-9", // AGUs
                ],
                name: "Address Generation Unit",
                description: "Hardware to calculate memory access addresses.",
                metadata_plot: "/figure/metadata_figure/agu_count.svg",
                color: [
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_store_data",
                    "wf_font_21",
                    "path308-1-2-9-6-3", // Store Data Buffer
                ],
                name: "Store Data",
                description: "This buffer keeps the store data that are not dispatched to the memory due to the order dependency.",
                metadata_plot: "",
                color: [
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_alu_1",
                    "wf_alu_2",
                    "wf_alu_3",
                    "wf_alu_4",
                    "wf_branch_1",
                    "wf_branch_2",
                    "wf_font_22",
                    "wf_font_23",
                    "wf_font_24",
                    "wf_font_25",
                    "wf_font_26",
                    "wf_font_27",
                    "path308-2-36-7", // Integer ALUs
                ],
                name: "Integer Arithmetic and Logic Unit",
                description: "This module calculates the result of simple integer operations (e.g., add, sub, and, or, not).",
                metadata_plot: "/figure/metadata_figure/alu_count.svg",
                color: [
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_mul",
                    "wf_font_28",
                    "path308-2-9-5-5-45", // Integer Multiply and Divide
                ],
                name: "Integer Multiplier and Divider",
                description: "This module calculates the result of complex integer operations that last for more than one cycle, e.g., multiplier, division, and square-root.",
                metadata_plot: "",
                color: [
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_vfma_1",
                    "wf_vfma_2",
                    "wf_font_29",
                    "wf_font_30",
                    "path308-2-9-4", // 64-bit FMA Unit
                    "path308-2-9-4-4", // 64-bit FMA Unit
                    "path308-2-9-4-3", // 64-bit FMA Unit
                    "path308-2-9-4-0", // 64-bit FMA Unit
                    "path308-1-2-9-6-3-8", // x87 Execution?
                ],
                name: "Vectored Floating Point Unit",
                description: "This module calculates the result of floating-point scalar and vector operations.",
                metadata_plot: "",
                color: [
                    "#f5f5f5",
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_valu_1",
                    "wf_valu_2",
                    "wf_valu_3",
                    "wf_font_31",
                    "wf_font_32",
                    "wf_font_33",
                    "path308-2-3-6-4-2", // Vector Integer Execution?
                    "path308-2-3-6-4-2-5", // Vector Integer Execution?
                    "path308-2-3-6-4-2-4", // Vector Integer Execution?
                    "path308-2-3-6-4-2-7", // Vector Integer Execution?
                    "path308-2-36-5-7", // Mystery Vector Execution Units Duplicated 4x?
                ],
                name: "Vector Integer Unit",
                description: "This module calculates the result of vector integer operations.",
                metadata_plot: "",
                color: [
                    "#f5f5f5",
                    "#f5f5f5",
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_load_queue",
                    "wf_font_34",
                    "path308-2-36", // Load Queue?
                ],
                name: "Load Queue",
                description: "This module tracks the load operations waiting for its data arrival from the memory.",
                metadata_plot: "/figure/metadata_figure/load_queue.svg",
                color: [
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_store_queue",
                    "wf_font_35",
                    "path308-2-9-5", // Store Queue?
                ],
                name: "Store Queue",
                description: "This module tracks the finished store operations waiting for order dependency. Incoming load operations need to check this module to get the latest value of a memory region.",
                metadata_plot: "/figure/metadata_figure/store_queue.svg",
                color: [
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_load_store",
                    "wf_font_36",
                    "path13460", // Load Store Unit
                ],
                name: "Load / Store Unit",
                description: "This hardware manages all inflight memory accesses for resource allocation, order tracking, data dependency forwarding, and rolling back.",
                metadata_plot: "",
                color: [
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_l1_data_cache",
                    "wf_font_38",
                    "path308-1-2-9-6", // L1D Cache
                ],
                name: "L1 Data Cache",
                description: "This memory buffers the recently accessed data from memory so that memory operations do not need to go to the main memory if they find the result in this buffer.",
                metadata_plot: "/figure/metadata_figure/l1d.svg",
                color: [
                    "#ffffff",
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_l1_dtlb",
                    "wf_font_37",
                ],
                name: "L1 DTLB",
                description: "This buffer keeps the address translation record for memory access.",
                metadata_plot: "",
                color: [
                    "#ffffff",
                    "#f5f5f5",
                ],
            },
            {
                highlight_region: [
                    "wf_fill_buffer",
                    "wf_font_39",
                    "path15132", // Fill Buffers?
                ],
                name: "Fill Buffers",
                description: "This buffer keeps the pending memory access to the next-level of cache.",
                metadata_plot: "/figure/metadata_figure/fill_buffer.svg",
                color: [
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_l2_tlb",
                    "wf_font_40",
                    "path12705", // L2 TLB
                ],
                name: "L2 TLB",
                description: "This buffer keeps the address translation record, as another level of cache for instruction and data TLBs.",
                metadata_plot: "",
                color: [
                    "#ffffff",
                ],
            },
            {
                highlight_region: [
                    "wf_l2_cache",
                    "wf_font_41",
                    "path308-2-10", // L2 Cache
                    "path308-2-3-2", // L2 Control
                    "path308-2-10-3", // L2 Cache
                ],
                name: "L2 Cache",
                description: "This buffer captures the recent memory access from L1 instruction and data accesses. It is greatly larger than two L1 caches, so it can buffer more data.",
                metadata_plot: "",
                // metadata_plot : "/figure/metadata_figure/l2.svg",
                color: [
                    "#f5f5f5",
                ],
            },
        ]

        let text_tooltip = d3.select("#text_tooltip");

        for (let i = 0; i < hover_info.length; i++) {
            for (let j = 0; j < hover_info[i].highlight_region.length; j++) {
                let hover_item = "#" + hover_info[i].highlight_region[j]

                if (hover_item.startsWith("#path")) {  // in the dieshot
                    d3.select(hover_item)
                        .style("opacity", "0")
                        .on('mouseover', function (d, n) {
                            let img_str = ""
                            if (hover_info[i].metadata_plot != "") {
                                const promot = `<p class='text-sl mx-1'>Recent trend:</p>`;
                                img_str = promot + "<img src=" + hover_info[i].metadata_plot + " width=400px; height=auto></img>"
                            }

                            const title_text = `<p class="font-bold mx-1">${hover_info[i].name}</p>`

                            text_tooltip
                                .style("opacity", 1)
                                // .text(hover_info[i].description);
                                .html(title_text + "<p class='mx-1 text-sl'>" + hover_info[i].description + "</p>" + img_str)
                                .style("left", null)
                                .style("bottom", null)
                                .style("right", null)
                                .style("top", null)

                            for (let k = 0; k < hover_info[i].highlight_region.length; k++) {
                                let related_item = "#" + hover_info[i].highlight_region[k]
                                if (related_item.startsWith("#path")) {  // in the dieshot, show up
                                    d3.select(related_item)
                                        .transition()
                                        .duration('100')
                                        .style('opacity', '1');
                                }
                                else if (related_item.startsWith("#wf_font")) {  // fonts in the workflow, do nothing

                                }
                                else {  // blocks in the workflow, change color TODO
                                    d3.select(related_item)
                                        .transition()
                                        .duration('100')
                                        .style("fill", "#89abe3");
                                }
                            }
                        })
                        .on('mouseout', function (d, n) {
                            text_tooltip
                                .style("opacity", 0)
                            for (let k = 0; k < hover_info[i].highlight_region.length; k++) {
                                let related_item = "#" + hover_info[i].highlight_region[k]
                                if (related_item.startsWith("#path")) {  // in the dieshot, show up
                                    d3.select(related_item)
                                        .transition()
                                        .duration('100')
                                        .style('opacity', '0');
                                }
                                else if (related_item.startsWith("#wf_font")) {  // fonts in the workflow, do nothing

                                }
                                else {  // blocks in the workflow, change color back TODO
                                    d3.select(related_item)
                                        .transition()
                                        .duration('100')
                                        .style("fill", hover_info[i].color[k]);
                                }
                            }
                        })
                        .on('mousemove', function (event) {
                            const body_rec = document.getElementById('whole_panel').getBoundingClientRect()
                            const body_width = body_rec.width;
                            const body_height = body_rec.height;
                            const relative_mouse_x = event.clientX - body_rec.left;
                            const relative_mouse_y = event.clientY - body_rec.top;
                            if (relative_mouse_x < body_width / 2) {
                                if (event.pageY < body_height / 2) {
                                    text_tooltip
                                        .style("right", null)
                                        .style("bottom", null)
                                        .style("left", `${relative_mouse_x}px`)
                                        .style("top", `${relative_mouse_y}px`)
                                }
                                else {
                                    // console.log("left bottom")
                                    text_tooltip
                                        .style("right", null)
                                        .style("top", null)
                                        .style("left", `${relative_mouse_x}px`)
                                        .style("bottom", `${body_height - relative_mouse_y}px`)
                                }
                            }
                            else {
                                if (relative_mouse_y < body_height / 2) {
                                    text_tooltip
                                        .style("left", null)
                                        .style("bottom", null)
                                        .style("right", `${body_width - relative_mouse_x}px`)
                                        .style("top", `${relative_mouse_y}px`)
                                }
                                else {
                                    text_tooltip
                                        .style("left", null)
                                        .style("top", null)
                                        .style("right", `${body_width - relative_mouse_x}px`)
                                        .style("bottom", `${body_height - relative_mouse_y}px`)
                                }
                            }
                        });
                }
                else {  // fonts and blocks in the workflow
                    d3.select(hover_item)
                        .on('mouseover', function (d, n) {
                            let img_str = ""
                            if (hover_info[i].metadata_plot != "") {
                                const promot = `<p class='text-sl mx-1'>Recent trend:</p>`;
                                img_str = promot + "<img src=" + hover_info[i].metadata_plot + " width=400px; height=auto></img>"
                            }

                            const title_text = `<p class="font-bold mx-1">${hover_info[i].name}</p>`

                            text_tooltip
                                .style("opacity", 1)
                                // .text(hover_info[i].description);
                                .html(title_text + "<p class='mx-1 text-sl'>" + hover_info[i].description + "</p>" + img_str)
                                .style("left", null)
                                .style("bottom", null)
                                .style("right", null)
                                .style("top", null)

                            for (let k = 0; k < hover_info[i].highlight_region.length; k++) {
                                let related_item = "#" + hover_info[i].highlight_region[k]
                                if (related_item.startsWith("#path")) {  // in the dieshot, show up
                                    d3.select(related_item)
                                        .transition()
                                        .duration('100')
                                        .style('opacity', '1');
                                }
                                else if (related_item.startsWith("#wf_font")) {  // fonts in the workflow, do nothing

                                }
                                else {  // blocks in the workflow, change color TODO
                                    d3.select(related_item)
                                        .transition()
                                        .duration('100')
                                        .style("fill", "#89abe3");
                                }
                            }
                        })
                        .on('mouseout', function (d, n) {
                            text_tooltip
                                .style("opacity", 0)
                            let m = 0;
                            for (let k = 0; k < hover_info[i].highlight_region.length; k++) {
                                let related_item = "#" + hover_info[i].highlight_region[k]
                                if (related_item.startsWith("#path")) {  // in the dieshot, show up
                                    d3.select(related_item)
                                        .transition()
                                        .duration('100')
                                        .style('opacity', '0');
                                }
                                else if (!related_item.startsWith("#wf_font")) {  // fonts in the workflow, do nothing
                                    // blocks in the workflow, change color back TODO
                                    d3.select(related_item)
                                        .transition()
                                        .duration('100')
                                        .style("fill", hover_info[i].color[m]);
                                    m++;
                                }
                            }
                        })
                        .on('mousemove', function (event) {
                            const body_rec = document.getElementById('whole_panel').getBoundingClientRect()
                            const body_width = body_rec.width;
                            const body_height = body_rec.height;
                            const relative_mouse_x = event.clientX - body_rec.left;
                            const relative_mouse_y = event.clientY - body_rec.top;

                            if (relative_mouse_x < body_width / 2) {
                                if (relative_mouse_y < body_height / 2) {
                                    text_tooltip
                                        .style("right", null)
                                        .style("bottom", null)
                                        .style("left", `${relative_mouse_x}px`)
                                        .style("top", `${relative_mouse_y+ 20}px`)
                                }
                                else {
                                    // console.log("left bottom")
                                    text_tooltip
                                        .style("right", null)
                                        .style("top", null)
                                        .style("left", `${relative_mouse_x}px`)
                                        .style("bottom", `${body_height - relative_mouse_y + 20}px`)
                                }
                            }
                            else {
                                if (relative_mouse_y < body_height / 2) {
                                    text_tooltip
                                        .style("left", null)
                                        .style("bottom", null)
                                        .style("right", `${body_width - relative_mouse_x + 20}px`)
                                        .style("top", `${relative_mouse_y + 20}px`)
                                }
                                else {
                                    text_tooltip
                                        .style("left", null)
                                        .style("top", null)
                                        .style("right", `${body_width - relative_mouse_x + 20}px`)
                                        .style("bottom", `${body_height - relative_mouse_y + 20}px`)
                                }
                            }
                        });
                }
            }
        }
    }
}
</script>