<script setup>

import Skylake from './SvgFigure/Skylake.vue';
import SkylakeWorkflow from "./SvgFigure/SkylakeWorkflow.vue";
import * as d3 from "d3";

</script>

<template>
    <div class="flex-col h-9/10 mt-1/30">
        <h2 class="h-1/10 mb-1/80">Example: Intel Skylake (2015)</h2>
        <div class="flex w-7/8 mx-auto h-8/10">
            <SkylakeWorkflow class="h-full flex-shrink-0"></SkylakeWorkflow>
            <Skylake class="h-full ml-10 flex-shrink"></Skylake>
        </div>
    </div>
</template>


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
                description: "Branch Predictor",
            },
            {
                highlight_region: [
                    "wf_font_2",
                    "wf_l1tlb",
                    "path308-1", // ITLB?
                ],
                description: "L1 ITLB",
            },
            {
                highlight_region: [
                    "wf_l1icache",
                    "wf_font_3",
                    "path308-2-9", // L1i Tags
                    "path308-2-3", // L1i Cache
                ],
                description: "L1 Instruction Cache",
            },
            {
                highlight_region: [
                    "wf_instruction_queue",
                    "wf_font_4",
                    "path11560", // Predecode
                    "path308-1-2", // Instruction Queue?
                ],
                description: "Instruction Queue",
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
                description: "Decode",
            },
            {
                highlight_region: [
                    "wf_microcode",
                    "wf_font_9",
                    "path308-2-1-9", // MSROM?
                ],
                description: "Microcode",
            },
            {
                highlight_region: [
                    "wf_micro_opcache",
                    "wf_font_10",
                    "path308-2-1", // Op Cache Fetch / Fill
                    "path11950", // Op Cache Tags/State?
                    "path308-2-3-6-4", // Op Cache
                ],
                description: "Micro-Op Cache",
            },
            {
                highlight_region: [
                    "wf_micro_opqueue",
                    "wf_font_11",
                    "path308-9-7-1-8", // Decoded Instruction Queue?
                ],
                description: "Micro-Op Queue",
            },
            {
                highlight_region: [
                    "wf_reorder_buffer",
                    "wf_font_12",
                    "path18245", // Backend
                ],
                description: "Reorder Buffer",
            },
            {
                highlight_region: [
                    "wf_integer_register_file",
                    "wf_font_13",
                    "path308-2-1-8", // Integer Register File
                ],
                description: "Integer Register File",
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
                description: "Vector Register File",
            },
            {
                highlight_region: [
                    "wf_mmx_x87",
                    "wf_font_15",
                    "path308-1-2-5", // MMX / x87 Register File
                ],
                description: "MMX / x87 Register File",
            },
            {
                highlight_region: [
                    "wf_agu_scheduler",
                    "wf_font_16",
                    "path308-2-3-6-4-1", // Reservation Station for Ports 2, 3, 7 (AGUs)?
                ],
                description: "AGU Scheduler",
            },
            {
                highlight_region: [
                    "wf_reservation_station",
                    "wf_font_17",
                    "path308-2-36-5", // Reservation Station for Ports 0, 1, 4, 5, 6?
                ],
                description: "Reservation Station",
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
                description: "AGU",
            },
            {
                highlight_region: [
                    "wf_store_data",
                    "wf_font_21",
                    "path308-1-2-9-6-3", // Store Data Buffer
                ],
                description: "Store Data",
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
                description: "Integer ALUs",
            },
            {
                highlight_region: [
                    "wf_mul",
                    "wf_font_28",
                    "path308-2-9-5-5-45", // Integer Multiply and Divide
                ],
                description: "MUL",
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
                description: "Vectored FP MA",
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
                description: "Vectored ALUs",
            },
            {
                highlight_region: [
                    "wf_load_queue",
                    "wf_font_34",
                    "path308-2-36", // Load Queue?
                ],
                description: "Load Queue",
            },
            {
                highlight_region: [
                    "wf_store_queue",
                    "wf_font_35",
                    "path308-2-9-5", // Store Queue?
                ],
                description: "Store Queue",
            },
            {
                highlight_region: [
                    "wf_load_store",
                    "wf_font_36",
                    "path13460", // Load Store Unit
                ],
                description: "Load / Store",
            },
            {
                highlight_region: [
                    "wf_l1_dtlb",
                    "wf_l1_data_cache",
                    "wf_font_37",
                    "wf_font_38",
                    "path308-1-2-9-6", // L1D Cache
                ],
                description: "L1 DTLB and L1 Data Cache",
            },
            {
                highlight_region: [
                    "wf_fill_buffer",
                    "wf_font_39",
                    "path15132", // Fill Buffers?
                ],
                description: "Fill Buffers",
            },
            {
                highlight_region: [
                    "wf_l2_tlb",
                    "wf_font_40",
                    "path12705", // L2 TLB
                ],
                description: "L2 TLB",
            },
            {
                highlight_region: [
                    "wf_l2_cache",
                    "wf_font_41",
                    "path308-2-10", // L2 Cache
                    "path308-2-3-2", // L2 Control
                    "path308-2-10-3", // L2 Cache
                ],
                description: "L2 Cache",
            },
        ]

        for (let i=0; i<hover_info.length; i++) {
            for (let j=0; j<hover_info[i].highlight_region.length; j++) {
                d3.select("#"+hover_info[i].highlight_region[j])
                    .on('mouseover', function (d, n) {
                        for (let k=0; k<hover_info[i].highlight_region.length; k++) {
                            d3.select("#"+hover_info[i].highlight_region[k])
                                .transition()
                                .duration('100')
                                .style('opacity', '1');
                        }
                    })
                    .on('mouseout', function (d, n) {
                        for (let k=0; k<hover_info[i].highlight_region.length; k++) {
                            d3.select("#"+hover_info[i].highlight_region[k])
                                .transition()
                                .duration('100')
                                .style('opacity', '0');
                        }
                    });
            }
        }

        // d3.select(workflow_arr[0])
        //     .on('mouseover', function (d, i) {
        //         d3.select(workflow_arr[0])
        //             .transition()
        //             .duration('100')
        //             .style('opacity', '1');
        //         d3.select(dieshot_arr[0])
        //             .transition()
        //             .duration('300')
        //             .style('opacity', '1');
        //     })
        //     .on('mouseout', function (d, i) {
        //         d3.select(workflow_arr[0])
        //             .transition()
        //             .duration('300')
        //             .style('opacity', '0');
        //         d3.select(dieshot_arr[0])
        //             .transition()
        //             .duration('100')
        //             .style('opacity', '0');
        //     });

        // d3.select("#path308-2-3-2")
        //     .on('mouseover', function (d, i) {
        //         d3.select('#path18245')
        //             .transition()
        //             .duration('300')
        //             .style('opacity', '1');
        //         d3.select("#path308-2-3-2")
        //             .transition()
        //             .duration('300')
        //             .style('opacity', '1');
        //     })
        //     .on('mouseout', function (d, i) {
        //         d3.select('#path18245')
        //             .transition()
        //             .duration('300')
        //             .style('opacity', '0');
        //         d3.select("#path308-2-3-2")
        //             .transition()
        //             .duration('300')
        //             .style('opacity', '0');
        //     });
    }
}
</script>