<script setup lang="ts">

import * as d3 from "d3";
import { defineComponent } from 'vue';

</script>


<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
        viewBox="-0.5 -0.5 243 282" style="background-color: rgb(255, 255, 255);">
        <defs />
        <g>
            <g id="and_pmos_1">
                <path d="M 61 86 L 61 56" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 66 91 L 66 51" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 66 56 L 76 56" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 66 86 L 76 86" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <ellipse cx="59" cy="71" rx="2" ry="2" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            </g>
            <path d="M 51 71 L 57 71" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <g id="and_pmos_2">
                <path d="M 121 86 L 121 56" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 126 91 L 126 51" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 126 56 L 136 56" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 126 86 L 136 86" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <ellipse cx="119" cy="71" rx="2" ry="2" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            </g>
            <path d="M 111 71 L 117 71" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <g id="and_nmos_4">
                <path d="M 121 166 L 121 136" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 126 171 L 126 131" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 126 136 L 136 136" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 126 166 L 136 166" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            </g>
            <path d="M 111 151 L 121 151" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <g id="and_nmos_5">
                <path d="M 121 226 L 121 196" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 126 231 L 126 191" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 126 196 L 136 196" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 126 226 L 136 226" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            </g>
            <path d="M 111 211 L 121 211" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <g id="and_pmos_3">
                <path d="M 181 86 L 181 56" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 186 91 L 186 51" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 186 56 L 196 56" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 186 86 L 196 86" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <ellipse cx="179" cy="71" rx="2" ry="2" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            </g>
            <path d="M 171 71 L 177 71" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <g id="and_nmos_6">
                <path d="M 181 226 L 181 196" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 186 231 L 186 191" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 186 196 L 196 196" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 186 226 L 196 226" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            </g>
            <path d="M 171 211 L 181 211" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <path d="M 196 195.5 L 196 86.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="196" cy="196" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="196" cy="86" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 171 210.5 L 171 71.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="171" cy="211" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="171" cy="71" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 76 86.5 L 76 111 L 170.5 111" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2"
                stroke-miterlimit="10" />
            <ellipse cx="76" cy="86" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="171" cy="111" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 136 110.5 L 136 86.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="136" cy="111" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="136" cy="86" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 136 195.5 L 136 166.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="136" cy="196" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="136" cy="166" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 136 135.5 L 136 111.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="136" cy="136" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="136" cy="111" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 1 31 L 241 31" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <path d="M 196 31.5 L 196 55.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="196" cy="31" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="196" cy="56" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 136 31.5 L 136 55.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="136" cy="31" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="136" cy="56" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 76 31.5 L 76 55.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="76" cy="31" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="76" cy="56" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <g transform="translate(-0.5 -0.5)">
                <text x="124" y="20" fill="rgb(0, 0, 0)" font-size="12px" text-anchor="middle">VDD</text>
            </g>
            <path d="M 1 251 L 241 251" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <path d="M 196 250.5 L 196 226.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="196" cy="251" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="196" cy="226" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 136 250.5 L 136 226.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="136" cy="251" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="136" cy="226" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 21 151 L 110.5 151" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="111" cy="151" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 21 211 L 110.5 210.86" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="111" cy="210.86" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 91 210.5 L 91 71 L 110.5 71" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2"
                stroke-miterlimit="10" />
            <ellipse cx="91" cy="211" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="111" cy="71" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 41 150.5 L 41 71 L 50.5 71" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2"
                stroke-miterlimit="10" />
            <ellipse cx="41" cy="151" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="51" cy="71" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="16" cy="151" rx="5" ry="5" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="2" id="and_input_a" />
            <ellipse cx="16" cy="211" rx="5" ry="5" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="2" id="and_input_b" />
            <ellipse cx="226" cy="141" rx="5" ry="5" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="2" id="and_output" />
            <path d="M 221 141 L 196.5 141" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="196" cy="141" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <g transform="translate(-0.5 -0.5)">
                <text x="124" y="270" fill="rgb(0, 0, 0)" font-size="12px" text-anchor="middle">GND</text>
            </g>
        </g>
        <switch>
            <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" /><a transform="translate(0,-5)"
                xlink:href="https://www.drawio.com/doc/faq/svg-export-text-problems" target="_blank"><text
                    text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a>
        </switch>
    </svg>
</template>

<script lang="ts">

export default defineComponent({
    mounted(){
        const input_a = d3.select("#and_input_a");
        const input_b = d3.select("#and_input_b");
        const output = d3.select("#and_output");

        const propagate = function(){
            const mos = [
                d3.select("#and_pmos_1"),
                d3.select("#and_pmos_2"),
                d3.select("#and_pmos_3"),
                d3.select("#and_nmos_4"),
                d3.select("#and_nmos_5"),
                d3.select("#and_nmos_6")
            ];

            const evaluation_functions = [
                (a: boolean, b: boolean) => {
                    return a == false;
                },
                (a: boolean, b: boolean) => {
                    return b == false;
                },
                (a: boolean, b: boolean) => {
                    return a && b;
                },
                (a: boolean, b: boolean) => {
                    return a == true;
                },
                (a: boolean, b: boolean) => {
                    return b == true;
                },
                (a: boolean, b: boolean) => {
                    return !(a && b);
                }
            ];

            const a = input_a.attr("is_1") == "true";
            const b = input_b.attr("is_1") == "true";
            
            for (let i = 0; i < 6; ++i) {
                if (evaluation_functions[i](a, b)) {
                    // set mos[i] to be active
                    mos[i].selectChildren().attr("stroke-dasharray", "0");
                } else {
                    mos[i].selectChildren().attr("stroke-dasharray", "1.5");
                }
            }

            if (a && b) {
                // set the output to be true
                output.transition().duration(200).attr("fill", "#D48080");
            } else {
                output.transition().duration(200).attr("fill", "#ffffff");
            }
        }

        input_a.attr("is_1", "false");
        input_b.attr("is_1", "false");

        const click_attr = (target: typeof input_a) => {
            if (target.attr("is_1") == "true"){
                // set it to false
                target.attr("is_1", "false");
                target.transition().duration(200).attr("fill", "#ffffff");
            } else {
                target.attr("is_1", "true");
                target.transition().duration(200).attr("fill", "#D48080");
            }
            propagate();
        };


        input_a.on("click", (event) => click_attr(input_a));
        input_b.on("click", (event) => click_attr(input_b));
        propagate();
    }
});

</script>
