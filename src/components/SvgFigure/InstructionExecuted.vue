<template>
    <svg viewBox="0 0 1100 220">
        <!-- List each instruction -->
        <text v-for="(inst, idx) of instructions" x="0" :y="idx * 20 + 50" fill="#000" font-family="Hack" font-size="12px">
            {{ inst }} </text>

        <!-- List the tick -->
        <text v-for="tick in maximums[current_selection]" :x="110 + tick * block_size[current_selection]" y="20" fill="#000"
            font-family="Hack" font-size="12px" text-anchor="middle"> {{ tick }} </text>

        <g ref="schedule_display">

        </g>

        <g ref="wait_chunk">

        </g>
    </svg>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as d3 from 'd3';


const instructions = [
    "add r2, r1, r0",
    "add r3, f4, r0",
    "mul r5, r2, r3",
    "mul r6, r5, r3",
    "div r7, r5, r7",
    "sub r8, r6, r3",
    "sub r9, r4, #1",
    "add r0, r2, #1"
];

const instruction_schedule = {
    // multi-cycle
    mc: [
        [   // add
            { name: "IF", cycle: 1, length: 1 },
            { name: "DE", cycle: 2, length: 1 },
            { name: "EX", cycle: 3, length: 1 },
            { name: "WB", cycle: 4, length: 1 },
        ],
        [   // add
            { name: "IF", cycle: 5, length: 1 },
            { name: "DE", cycle: 6, length: 1 },
            { name: "EX", cycle: 7, length: 1 },
            { name: "WB", cycle: 8, length: 1 },
        ],
        [   // mul
            { name: "IF", cycle: 9, length: 1 },
            { name: "DE", cycle: 10, length: 1 },
            { name: "EX", cycle: 11, length: 1 },
            { name: "EX", cycle: 12, length: 1 },
            { name: "WB", cycle: 13, length: 1 },
        ],
        [   // mul
            { name: "IF", cycle: 14, length: 1 },
            { name: "DE", cycle: 15, length: 1 },
            { name: "EX", cycle: 16, length: 1 },
            { name: "EX", cycle: 17, length: 1 },
            { name: "WB", cycle: 18, length: 1 },
        ],
        [   // div
            { name: "IF", cycle: 19, length: 1 },
            { name: "DE", cycle: 20, length: 1 },
            { name: "EX", cycle: 21, length: 1 },
            { name: "EX", cycle: 22, length: 1 },
            { name: "EX", cycle: 23, length: 1 },
            { name: "EX", cycle: 24, length: 1 },
            { name: "WB", cycle: 25, length: 1 },
        ],
        [   // sub
            { name: "IF", cycle: 26, length: 1 },
            { name: "DE", cycle: 27, length: 1 },
            { name: "EX", cycle: 28, length: 1 },
            { name: "WB", cycle: 29, length: 1 },
        ],
        [   // sub
            { name: "IF", cycle: 30, length: 1 },
            { name: "DE", cycle: 31, length: 1 },
            { name: "EX", cycle: 32, length: 1 },
            { name: "WB", cycle: 33, length: 1 },
        ],
        [   // add
            { name: "IF", cycle: 34, length: 1 },
            { name: "DE", cycle: 35, length: 1 },
            { name: "EX", cycle: 36, length: 1 },
            { name: "WB", cycle: 37, length: 1 },
        ],
    ],
    pl: [
        [   // add
            { name: "IF", cycle: 1, length: 1 },
            { name: "DE", cycle: 2, length: 1 },
            { name: "EX", cycle: 3, length: 1 },
            { name: "WB", cycle: 4, length: 1 },
        ],
        [   // add
            { name: "IF", cycle: 2, length: 1 },
            { name: "DE", cycle: 3, length: 1 },
            { name: "EX", cycle: 4, length: 1 },
            { name: "WB", cycle: 5, length: 1 },
        ],
        [   // mul
            { name: "IF", cycle: 3, length: 1 },
            { name: "DE", cycle: 4, length: 1 },
            { name: "Wait", cycle: 5, length: 1 },
            { name: "EX", cycle: 6, length: 1 },
            { name: "EX", cycle: 7, length: 1 },
            { name: "WB", cycle: 8, length: 1 },
        ],
        [   // mul
            { name: "IF", cycle: 4, length: 1 },
            { name: "DE", cycle: 5, length: 1 },
            { name: "Wait", cycle: 6, length: 3 },
            { name: "EX", cycle: 9, length: 1 },
            { name: "EX", cycle: 10, length: 1 },
            { name: "WB", cycle: 11, length: 1 },
        ],
        [   // div
            { name: "IF", cycle: 5, length: 1 },
            { name: "DE", cycle: 6, length: 1 },
            { name: "Wait", cycle: 7, length: 3 },
            { name: "EX", cycle: 10, length: 1 },
            { name: "EX", cycle: 11, length: 1 },
            { name: "EX", cycle: 12, length: 1 },
            { name: "EX", cycle: 13, length: 1 },
            { name: "WB", cycle: 14, length: 1 },
        ],
        [   // sub
            { name: "IF", cycle: 6, length: 1 },
            { name: "DE", cycle: 7, length: 1 },
            { name: "Wait", cycle: 8, length: 6 },
            { name: "EX", cycle: 14, length: 1 },
            { name: "WB", cycle: 15, length: 1 },
        ],
        [   // sub
            { name: "IF", cycle: 7, length: 1 },
            { name: "DE", cycle: 8, length: 1 },
            { name: "Wait", cycle: 9, length: 6 },
            { name: "EX", cycle: 15, length: 1 },
            { name: "WB", cycle: 16, length: 1 },
        ],
        [   // add
            { name: "IF", cycle: 8, length: 1 },
            { name: "DE", cycle: 9, length: 1 },
            { name: "Wait", cycle: 10, length: 6 },
            { name: "EX", cycle: 16, length: 1 },
            { name: "WB", cycle: 17, length: 1 },
        ],
    ],
    dual: [
        [   // add
            { name: "IF", cycle: 1, length: 1 },
            { name: "DE", cycle: 2, length: 1 },
            { name: "EX", cycle: 3, length: 1 },
            { name: "WB", cycle: 4, length: 1 },
        ],
        [   // add
            { name: "IF", cycle: 1, length: 1 },
            { name: "DE", cycle: 2, length: 1 },
            { name: "EX", cycle: 3, length: 1 },
            { name: "WB", cycle: 4, length: 1 },
        ],
        [   // mul
            { name: "IF", cycle: 2, length: 1 },
            { name: "DE", cycle: 3, length: 1 },
            { name: "Wait", cycle: 4, length: 1 },
            { name: "EX", cycle: 5, length: 1 },
            { name: "EX", cycle: 6, length: 1 },
            { name: "WB", cycle: 7, length: 1 },
        ],
        [   // mul
            { name: "IF", cycle: 2, length: 1 },
            { name: "DE", cycle: 3, length: 1 },
            { name: "Wait", cycle: 4, length: 4 },
            { name: "EX", cycle: 8, length: 1 },
            { name: "EX", cycle: 9, length: 1 },
            { name: "WB", cycle: 10, length: 1 },
        ],
        [   // div
            { name: "IF", cycle: 3, length: 1 },
            { name: "DE", cycle: 4, length: 1 },
            { name: "Wait", cycle: 5, length: 3 },
            { name: "EX", cycle: 8, length: 1 },
            { name: "EX", cycle: 9, length: 1 },
            { name: "EX", cycle: 10, length: 1 },
            { name: "EX", cycle: 11, length: 1 },
            { name: "WB", cycle: 12, length: 1 },
        ],
        [   // sub
            { name: "IF", cycle: 3, length: 1 },
            { name: "DE", cycle: 4, length: 1 },
            { name: "Wait", cycle: 5, length: 6 },
            { name: "EX", cycle: 11, length: 1 },
            { name: "WB", cycle: 12, length: 1 },
        ],
        [   // sub
            { name: "IF", cycle: 4, length: 1 },
            { name: "DE", cycle: 5, length: 1 },
            { name: "Wait", cycle: 6, length: 6 },
            { name: "EX", cycle: 12, length: 1 },
            { name: "WB", cycle: 13, length: 1 },
        ],
        [   // add
            { name: "IF", cycle: 4, length: 1 },
            { name: "DE", cycle: 5, length: 1 },
            { name: "Wait", cycle: 6, length: 6 },
            { name: "EX", cycle: 12, length: 1 },
            { name: "WB", cycle: 13, length: 1 },
        ],
    ],
    ooo_dual: [
        [   // add
            { name: "IF", cycle: 1, length: 1 },
            { name: "DE", cycle: 2, length: 1 },
            { name: "EX", cycle: 3, length: 1 },
            { name: "WB", cycle: 4, length: 1 },
        ],
        [   // add
            { name: "IF", cycle: 1, length: 1 },
            { name: "DE", cycle: 2, length: 1 },
            { name: "EX", cycle: 3, length: 1 },
            { name: "WB", cycle: 4, length: 1 },
        ],
        [   // mul
            { name: "IF", cycle: 2, length: 1 },
            { name: "DE", cycle: 3, length: 1 },
            { name: "Wait", cycle: 4, length: 1 },
            { name: "EX", cycle: 5, length: 1 },
            { name: "EX", cycle: 6, length: 1 },
            { name: "WB", cycle: 7, length: 1 },
        ],
        [   // mul
            { name: "IF", cycle: 2, length: 1 },
            { name: "DE", cycle: 3, length: 1 },
            { name: "Wait", cycle: 4, length: 4 },
            { name: "EX", cycle: 8, length: 1 },
            { name: "EX", cycle: 9, length: 1 },
            { name: "WB", cycle: 10, length: 1 },
        ],
        [   // div
            { name: "IF", cycle: 3, length: 1 },
            { name: "DE", cycle: 4, length: 1 },
            { name: "Wait", cycle: 5, length: 3 },
            { name: "EX", cycle: 8, length: 1 },
            { name: "EX", cycle: 9, length: 1 },
            { name: "EX", cycle: 10, length: 1 },
            { name: "EX", cycle: 11, length: 1 },
            { name: "WB", cycle: 12, length: 1 },
        ],
        [   // sub
            { name: "IF", cycle: 3, length: 1 },
            { name: "DE", cycle: 4, length: 1 },
            { name: "Wait", cycle: 5, length: 6 },
            { name: "EX", cycle: 11, length: 1 },
            { name: "WB", cycle: 12, length: 1 },
        ],
        [   // sub
            { name: "IF", cycle: 4, length: 1 },
            { name: "DE", cycle: 5, length: 1 },
            { name: "EX", cycle: 6, length: 1 },
            { name: "WB", cycle: 7, length: 1 },
        ],
        [   // add
            { name: "IF", cycle: 4, length: 1 },
            { name: "DE", cycle: 5, length: 1 },
            { name: "EX", cycle: 6, length: 1 },
            { name: "WB", cycle: 7, length: 1 },
        ],
    ],
}

const hazards = {
    mc: [

    ]
}

const schedule_display = ref<SVGGElement | null>(null);
const wait_chunk = ref<SVGGElement | null>(null);

const maximums = {
    mc: 37,
    pl: 17,
    dual: 13,
    ooo_dual: 12
}

const block_size = {
    mc: 25,
    pl: 54,
    dual: 70,
    ooo_dual: 75
};

const current_selection = ref("mc");

onMounted(() => {
    const selected_instruction_schedule: { name: string, cycle: number, length: number }[][] = instruction_schedule[current_selection.value];
    selected_instruction_schedule.forEach((single_schedule, i_idx) => {
        single_schedule.forEach((schedule, s_idx) => {
            const g = d3.select(schedule_display.value)
                .append("g")
                .attr("id", `schedule_i${i_idx}_s${s_idx}`);

            g.append("rect")
                .attr("x", 110 + schedule.cycle * block_size[current_selection.value] - block_size[current_selection.value] / 2)
                .attr("y", 20 * i_idx + 35)
                .attr("width", block_size[current_selection.value] * schedule.length)
                .attr("height", 20)
                .attr("fill", schedule.name == "Wait" ? "#ededed" : "#fff")
                .attr("stroke", "#000");

            g.append("text")
                .attr("x", 110 + schedule.cycle * block_size[current_selection.value])
                .attr("y", 20 * i_idx + 50)
                .attr("fill", "#000")
                .attr("font-family", "Hack")
                .attr("font-size", "11px")
                .attr("text-anchor", "middle")
                .text(schedule.name);
        });
    });
});


const updateSelection = async (selection: string) => {
    // clean the old garbage
    await d3.select(wait_chunk.value).selectChildren().transition().duration(300).attr("opacity", 0).end();

    // remove the stuff.
    d3.select(wait_chunk.value).selectChildren().remove();

    current_selection.value = selection;
    const selected_instruction_schedule: { name: string, cycle: number, length: number }[][] = instruction_schedule[current_selection.value];
    selected_instruction_schedule.forEach((single_schedule, i_idx) => {
        let wait_count = 0;
        single_schedule.forEach((schedule, s_idx) => {
            if (schedule.name == "Wait") {
                // create new wait elements
                const g = d3.select(wait_chunk.value).append("g").attr("opacity", 0);
                g.append("rect")
                    .attr("x", 110 + schedule.cycle * block_size[current_selection.value] - block_size[current_selection.value] / 2)
                    .attr("y", 20 * i_idx + 35)
                    .attr("width", block_size[current_selection.value] * schedule.length)
                    .attr("height", 20)
                    .attr("fill", schedule.name == "Wait" ? "#ededed" : "#fff")
                    .attr("stroke", "#000");

                g.append("text")
                    .attr("x", 110 + schedule.cycle * block_size[current_selection.value])
                    .attr("y", 20 * i_idx + 50)
                    .attr("fill", "#000")
                    .attr("font-family", "Hack")
                    .attr("font-size", "11px")
                    .attr("text-anchor", "middle")
                    .text(schedule.name);

                g.transition().delay(1000).duration(500).attr("opacity", 1);
                wait_count += 1;
            } else {
                const g = d3.select(`#schedule_i${i_idx}_s${s_idx - wait_count}`)

                g.selectChild("rect")
                    .transition()
                    .duration(1000)
                    .attr("x", 110 + schedule.cycle * block_size[current_selection.value] - block_size[current_selection.value] / 2)
                    .attr("y", 20 * i_idx + 35)
                    .attr("width", block_size[current_selection.value] * schedule.length)
                    .attr("height", 20)
                    .attr("fill", schedule.name == "Wait" ? "#ededed" : "#fff")
                    .attr("stroke", "#000");

                g.selectChild("text")
                    .transition()
                    .duration(1000)
                    .attr("x", 110 + schedule.cycle * block_size[current_selection.value])
                    .attr("y", 20 * i_idx + 50)
                    .attr("fill", "#000")
                    .attr("font-family", "Hack")
                    .attr("font-size", "11px")
                    .attr("text-anchor", "middle")
                    .text(schedule.name);
            }


        });
    });
};

defineExpose({ updateSelection });

</script>