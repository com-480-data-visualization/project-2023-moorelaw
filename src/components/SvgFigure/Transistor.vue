<!--
    This figure should be repainted to be interactive.
    The original figure is from wikipedia. 
    Possible interactive way:
-->


<script setup>

import * as d3 from "d3";

</script>

<template>
    <svg viewBox="0 0 600 300" width="600px" height="400px">
        <g xmlns="http://www.w3.org/2000/svg" stroke="#000" stroke-width="3">

            <!-- The top -->
            <rect x="15" y="162" width="570" height="102" fill="#D8D890" />
            <rect x="15" y="264" width="570" height="12" fill="#9090A8" />
            <rect x="96" y="132" width="78" height="30" fill="#70B8D8" />
            <rect x="426" y="132" width="78" height="30" fill="#70B8D8" />
            <rect x="222" y="138" width="159" height="24" fill="#B0AAA8" />

            <g id="carrier_groups">
            </g>

            <path fill="#88A888" d="M222,138 l9,-30 l141,0 l9,30 z" />
            <path fill="#D48080" d="M72,162 v30 c0,15 6,21 30,21 h102 c24,0 30,-6 30,-21 v-30 z" />
            <path fill="#D48080" d="M528,162 v30 c0,15 -6,21 -30,21 h-102 c-24,0 -30,-6 -30,-21 v-30 z" />
            <path d="M135,132 v-32" />
            <circle id="source_button" cx="135" cy="90" r="10" fill="#fff" />
            <path d="M465,132 v-32" />
            <circle id="drain_button" cx="465" cy="90" r="10" fill="fff" />
            <path d="M300,108 v-47" />
            <circle id="gate_button" cx="300" cy="51" r="10" fill="#fff" />
            <path fill="none" d="M195,54 C213,69 201,144 234,150" />


            <!--
                <rect x="15" y="520" width="570" height="130" fill="#D8D890" />
                <rect x="72" y="520" width="159" height="130" fill="#D48080" />
                <rect x="354" y="520" width="180" height="130" fill="#D48080" />

                <rect x="222" y="445" width="159" height="300" fill="#88A888" />

                <rect x="96" y="546" width="78" height="78" fill="#70B8D8" />
                <rect x="426" y="546" width="78" height="78" fill="#70B8D8" />
            -->

        </g>
        <g xmlns="http://www.w3.org/2000/svg" font-family="Verdana" font-size="27" font-style="italic" fill="#000"
            stroke="none" text-anchor="end">
            <text x="147" y="192">n+</text>
            <text x="480" y="192">n+</text>
            <text x="300" y="246">p</text>
            <text x="120" y="81">Source</text>
            <text x="450" y="81">Drain</text>
            <text x="285" y="42">Gate</text>
            <text x="189" y="57">Oxide</text>
        </g>
    </svg>
</template>

<script>

export default {
    mounted() {
        let gate_button = d3.select("#gate_button");
        gate_button.attr("is_selected", "false");
        let source_button = d3.select("#source_button");
        source_button.attr("is_selected", "false");

        for (let i = 0; i < 10; ++i) {
            let high_g = d3.select("#carrier_groups").append("g");

            high_g
                .append("circle")
                .attr("r", "10")
                .attr("cx", 205)
                .attr("cy", 175)
                .attr("fill", "green");

            high_g
                .append("line")

                .attr("x1", 200)
                .attr("y1", 175)

                .attr("x2", 210)
                .attr("y2", 175)

                .attr("stroke", "black")
                .attr("position", i)
                .attr("transform", `translate(${i * 20}, 0))`);

            // now, bind their animation.
            (function cyclic_animation(current_pos) {
                // If the gate button is clicked, then it appears, otherwise, it does not appear.
                let opacity
                let next_position
                if (gate_button.attr("is_selected") == "true") {
                    if (source_button.attr("is_selected") == "true") {
                        opacity = 1;
                        next_position = (current_pos + 1) % 10;
                    } else {
                        opacity = 1;
                        next_position = current_pos % 10;
                    }
                } else {
                    opacity = 0;
                    next_position = current_pos % 10;
                }
                
                if(next_position == 0){
                    high_g.style("opacity", 0);
                    opacity = 0;
                } else {
                    // high_g.style("opacity", opacity);
                }

                high_g.transition().duration(500).ease(d3.easeLinear).attrTween("transform", function () {
                    return d3.interpolateString(
                        `translate(${current_pos * 20},0)`,
                        `translate(${next_position * 20},0)`
                    );
                })
                .style("opacity", opacity)
                .on("end", () => cyclic_animation(next_position))
            })(i);
        }

        gate_button.on("click", (event) => {
            if (gate_button.attr("is_selected") == "false") {
                gate_button.attr("is_selected", "true");
                gate_button.transition().duration(200).attr("fill", "#D48080");
            } else {
                gate_button.attr("is_selected", "false");
                gate_button.attr("fill", "#fff");
            }
        });

        source_button.on("click", (event) => {
            if (source_button.attr("is_selected") == "false") {
                source_button.attr("is_selected", "true");
                source_button.transition().duration(200).attr("fill", "#D48080");
            } else {
                source_button.attr("is_selected", "false");
                source_button.attr("fill", "#fff");
            }
        });

        d3.interval(() => {
            if (gate_button.attr("is_selected") == "true" && source_button.attr("is_selected") == "true") {
                d3.select("#drain_button").transition().duration(500).attr("fill", "#D48080");
            } else {
                d3.select("#drain_button").transition().duration(500).attr("fill", "#fff");
            }
        }, 500);

    }
}

</script>