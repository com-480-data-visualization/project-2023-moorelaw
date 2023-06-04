<script setup>

import * as d3 from "d3";

</script>

<template>
    <svg viewBox="-0.5 -0.5 123 283">
        <defs />
        <g>
            <g id="not_pmos_1">
                <path d="M 61 86 L 61 56" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 66 91 L 66 51" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 66 56 L 76 56" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 66 86 L 76 86" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <ellipse cx="59" cy="71" rx="2" ry="2" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            </g>
            <path d="M 51 71 L 57 71" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <g id="not_nmos_2">
                <path d="M 61 226 L 61 196" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 66 231 L 66 191" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 66 196 L 76 196" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
                <path d="M 66 226 L 76 226" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            </g>
            <path d="M 51 211 L 61 211" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <path d="M 76 195.5 L 76 86.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="76" cy="196" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="76" cy="86" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 51 210.5 L 51 71.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="51" cy="211" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="51" cy="71" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 76 31.5 L 76 55.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="76" cy="31" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="76" cy="56" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 76 250.5 L 76 226.5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="76" cy="251" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="76" cy="226" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <ellipse cx="106" cy="141" rx="5" ry="5" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="2"
                id="not_output" />
            <path d="M 101 141 L 76.5 141" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="76" cy="141" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <path d="M 1 31 L 121 31" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <path d="M 1 251 L 121 251" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="16" cy="141" rx="5" ry="5" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="2"
                id="not_input" />
            <path d="M 21 141 L 50.5 141" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" />
            <ellipse cx="51" cy="141" rx="0.5" ry="0.5" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" />
            <g transform="translate(-0.5 -0.5)">
                <text x="64" y="20" fill="rgb(0, 0, 0)" font-size="12px" text-anchor="middle">VDD</text>
            </g>
            <g transform="translate(-0.5 -0.5)">
                <text x="64" y="270" fill="rgb(0, 0, 0)" font-size="12px" text-anchor="middle">GND</text>
            </g>
        </g>
    </svg>
</template>

<script>

export default {
    mounted() {
        let propagate = function () {
            let input = d3.select("#not_input");
            let output = d3.select("#not_output");
            let pmos_1 = d3.select("#not_pmos_1");
            let nmos_2 = d3.select("#not_nmos_2");


            if (input.attr("is_1") == "false") {
                output.transition().duration(200).attr("fill", "#D48080");
                // pmos_1 should be on
                pmos_1.selectChildren().attr("stroke-dasharray", "0")
                // nmos_1 should be off
                nmos_2.selectChildren().attr("stroke-dasharray", "1.5")
            } else {
                output.transition().duration(200).attr("fill", "#ffffff");
                // pmos_1 should be on
                pmos_1.selectChildren().attr("stroke-dasharray", "1.5");
                // nmos_1 should be off
                nmos_2.selectChildren().attr("stroke-dasharray", "0");
            }
        };

        // in the beginning
        let input = d3.select("#not_input")
        input.attr("is_1", "false");
        input.on("click", (event) => {
            if (input.attr("is_1") == "false") {
                input.attr("is_1", "true");
                input.transition().duration(200).attr("fill", "#D48080")
                propagate();
            } else {
                input.attr("is_1", "false");
                input.transition().duration(200).attr("fill", "#ffffff")
                propagate();
            }
            console.log("Clicked!!!");
        });

        propagate();
    }
}


</script>