<template>
    <svg version="1.1" width="401px" height="321px" viewBox="-0.5 -0.5 401 321"
        style="background-color: rgb(255, 255, 255);">
        <defs />
        <g>
            <ellipse cx="140" cy="100" rx="20" ry="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="139.5" y="104.5">Core</text></g>
            <ellipse cx="260" cy="100" rx="20" ry="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="259.5" y="104.5">Core</text></g>
            <ellipse cx="260" cy="220" rx="20" ry="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="259.5" y="224.5">Core</text></g>
            <ellipse cx="140" cy="220" rx="20" ry="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="139.5" y="224.5">Core</text></g>
            <rect x="60" y="0" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="89.5" y="14.5">Data</text></g>
            <rect x="0" y="0" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="29.5" y="14.5">Addr</text></g>
            <rect x="0" y="20" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="29.5" y="34.5">....</text></g>
            <rect x="60" y="20" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="89.5" y="34.5">....</text></g>
            <rect x="0" y="40" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="29.5" y="54.5">0x100</text></g>
            <rect x="60" y="40" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <foreignObject x="60" y="38" width="60" height="20" style="font-size: center;">
                <input type="text" pattern="[0-9]" value="50" @input="onDataUpdate()" />
            </foreignObject>
            <rect x="0" y="60" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="29.5" y="74.5">....</text></g>
            <rect x="60" y="60" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="89.5" y="74.5">....</text></g>
            <rect x="340" y="0" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="369.5" y="14.5">Data</text></g>
            <rect x="280" y="0" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="309.5" y="14.5">Addr</text></g>
            <rect x="280" y="20" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="309.5" y="34.5">....</text></g>
            <rect x="340" y="20" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="369.5" y="34.5">....</text></g>
            <rect x="280" y="40" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text ref="core_2_tag" x="309.5"
                    y="54.5">0x100</text></g>
            <rect x="340" y="40" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text ref="core_2_data" x="369.5"
                    y="54.5">50</text></g>
            <rect x="280" y="60" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="309.5" y="74.5">....</text></g>
            <rect x="340" y="60" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="369.5" y="74.5">....</text></g>
            <rect x="60" y="240" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="89.5" y="254.5">Data</text></g>
            <rect x="0" y="240" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="29.5" y="254.5">Addr</text></g>
            <rect x="0" y="260" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="29.5" y="274.5">....</text></g>
            <rect x="60" y="260" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="89.5" y="274.5">....</text></g>
            <rect x="0" y="280" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text ref="core_3_tag" x="29.5"
                    y="294.5">0x100</text></g>
            <rect x="60" y="280" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text ref="core_3_data" x="89.5" y="294.5">
                    50</text></g>
            <rect x="0" y="300" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="29.5" y="314.5">....</text></g>
            <rect x="60" y="300" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="89.5" y="314.5">....</text></g>
            <rect x="340" y="240" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="369.5" y="254.5">Data</text></g>
            <rect x="280" y="240" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="309.5" y="254.5">Addr</text></g>
            <rect x="280" y="260" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="309.5" y="274.5">....</text></g>
            <rect x="340" y="260" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="369.5" y="274.5">....</text></g>
            <rect x="280" y="280" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="309.5" y="294.5">....</text></g>
            <rect x="340" y="280" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="369.5" y="294.5">....</text></g>
            <rect x="280" y="300" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="309.5" y="314.5">....</text></g>
            <rect x="340" y="300" width="60" height="20" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"
                pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="369.5" y="314.5">....</text></g>
            <rect x="30" y="80" width="60" height="30" fill="none" stroke="none" pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="59.5" y="99.5">Cache</text></g>
            <rect x="310" y="80" width="60" height="30" fill="none" stroke="none" pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="339.5" y="99.5">Cache</text></g>
            <rect x="310" y="210" width="60" height="30" fill="none" stroke="none" pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="339.5" y="229.5">Cache</text></g>
            <rect x="30" y="210" width="60" height="30" fill="none" stroke="none" pointer-events="all" />
            <g fill="rgb(0, 0, 0)" text-anchor="middle" font-size="12px"><text x="59.5" y="229.5">Cache</text></g>

            <path ref="c1_to_c3" d="M 144 120 L 144 200" fill="none" stroke="#6c8ebf" stroke-miterlimit="10"
                pointer-events="stroke" stroke-dasharray="80" stroke-dashoffset="80" />
            <path ref="c1_to_c3_arr" d="M 144 200 L 149.5 189" fill="none" stroke="#6c8ebf" stroke-miterlimit="10"
                pointer-events="all" stroke-dasharray="13" stroke-dashoffset="13" />
            <path ref="c3_to_c1" d="M 135.94 200 L 135.94 120" fill="none" stroke="#6c8ebf" stroke-miterlimit="10"
                pointer-events="stroke" stroke-dasharray="80" stroke-dashoffset="80" />
            <path ref="c3_to_c1_arr" d="M 135.94 120 L 130.44 131" fill="none" stroke="#6c8ebf" stroke-miterlimit="10"
                pointer-events="all" stroke-dasharray="13" stroke-dashoffset="13" />


            <path ref="c1_to_c4" d="M 157.14 111.14 L 248.86 202.86" fill="none" stroke="#6c8ebf" stroke-miterlimit="10"
                pointer-events="stroke" stroke-dasharray="129" stroke-dashoffset="129" />
            <path ref="c1_to_c4_arr" d="M 248.86 202.86 L 244.97 191.19" fill="none" stroke="#6c8ebf" stroke-miterlimit="10"
                pointer-events="all" stroke-dasharray="13" stroke-dashoffset="13" />
            <path ref="c4_to_c1" d="M 242.86 208.86 L 151.14 117.14" fill="none" stroke="#666666" stroke-miterlimit="10"
                pointer-events="stroke" stroke-dasharray="129" stroke-dashoffset="129" />
            <path ref="c4_to_c1_arr" d="M 151.14 117.14 L 155.03 128.81" fill="none" stroke="#666666" stroke-miterlimit="10"
                pointer-events="all" stroke-dasharray="13" stroke-dashoffset="13" />


            <path ref="c1_to_c2" d="M 160 97 L 240 97" fill="none" stroke="#6c8ebf" stroke-miterlimit="10"
                pointer-events="stroke" stroke-dasharray="80" stroke-dashoffset="80" />
            <path ref="c1_to_c2_arr" d="M 240 97 L 229 91.5" fill="none" stroke="#6c8ebf" stroke-miterlimit="10"
                pointer-events="all" stroke-dasharray="13" stroke-dashoffset="13" />
            <path ref="c2_to_c1" d="M 240 103 L 160 103" fill="none" stroke="#6c8ebf" stroke-miterlimit="10"
                pointer-events="stroke" stroke-dasharray="80" stroke-dashoffset="80" />
            <path ref="c2_to_c1_arr" d="M 160 103 L 171 108.5" fill="none" stroke="#6c8ebf" stroke-miterlimit="10"
                pointer-events="all" stroke-dasharray="13" stroke-dashoffset="13" />
        </g>
    </svg>
</template>

<style scoped>
input[type=text] {
    @apply w-4/5 h-3/5;
    border: 0;
    padding: 0;
    text-align: center;
    font-size: 12px;
}
</style>

<script setup lang="ts">

import * as d3 from 'd3';
import { onMounted, ref, watch } from 'vue';

// references to the DOM elements
const c1_to_c2 = ref(null);
const c1_to_c2_arr = ref(null);
const c1_to_c3 = ref(null);
const c1_to_c3_arr = ref(null);
const c1_to_c4 = ref(null);
const c1_to_c4_arr = ref(null);


const c2_to_c1 = ref(null);
const c2_to_c1_arr = ref(null);
const c3_to_c1 = ref(null);
const c3_to_c1_arr = ref(null);
const c4_to_c1 = ref(null);
const c4_to_c1_arr = ref(null);

const core_2_data = ref(null);
const core_2_tag = ref(null);
const core_3_data = ref(null);
const core_3_tag = ref(null);


const onDataUpdate = () => {
    const requests = [
        [c1_to_c2, c1_to_c2_arr],
        [c1_to_c3, c1_to_c3_arr],
        [c1_to_c4, c1_to_c4_arr]
    ].map((el) => el.map((e) => d3.select(e.value)));

    const replies = [
        [c2_to_c1, c2_to_c1_arr],
        [c3_to_c1, c3_to_c1_arr],
        [c4_to_c1, c4_to_c1_arr]
    ].map((el) => el.map((e) => d3.select(e.value)));

    const request_animation = async (index: string) => {
        // change the stroke-dashoffset animation.
        await requests[index][0].transition().duration(1000).attr("stroke-dashoffset", 0).end();
        // start painting the arrow
        await requests[index][1].transition().duration(200).attr("stroke-dashoffset", 0).end();

        const handler = Promise.all([
            requests[index][0].transition().duration(500).style("opacity", 0).end(),
            requests[index][1].transition().duration(500).style("opacity", 0).end()
        ]);

        [core_2_data, core_2_tag, core_3_data, core_3_tag].forEach((el) => d3.select(el.value).style("text-decoration", "line-through"));

        // wait for all of them to be finished.
        await handler;

        // Now it is time to send the reply.

        await replies[index][0].transition().duration(1000).attr("stroke-dashoffset", 0).end();
        await replies[index][1].transition().duration(200).attr("stroke-dashoffset", 0).end();

        await Promise.all([
            replies[index][0].transition().duration(500).style("opacity", 0).end(),
            replies[index][1].transition().duration(500).style("opacity", 0).end()
        ])

        // Set the attribute back
        requests[index][0].attr("stroke-dashoffset", requests[index][0].attr("stroke-dasharray")).style("opacity", 1);
        requests[index][1].attr("stroke-dashoffset", requests[index][1].attr("stroke-dasharray")).style("opacity", 1);
        replies[index][0].attr("stroke-dashoffset", requests[index][0].attr("stroke-dasharray")).style("opacity", 1).attr("stroke", "#666666");
        replies[index][1].attr("stroke-dashoffset", requests[index][1].attr("stroke-dasharray")).style("opacity", 1).attr("stroke", "#666666");
    };

    for (const index in requests) {
        request_animation(index);
    }
}


</script>