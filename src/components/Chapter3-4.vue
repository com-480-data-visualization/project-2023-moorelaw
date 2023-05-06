<script setup>

import Skylake from './SvgFigure/Skylake.vue';
import * as d3 from "d3";

</script>

<template>
    <div class="flex-col h-full">
        <h2 class="h-1/7 mt-10">Example: Intel Skylake (2015)</h2>
        <div class="flex mt-5 h-3/5">
            <img src="/figure/skylake-workflow.drawio.svg" class="w-auto">
            <Skylake class="w-3/5 mx-10"></Skylake>
        </div>
    </div>
</template>


<script>
export default {
    mounted() {
        d3.select("#path18245")
            .on('mouseover', function (d, i) {
                d3.select("#path308-2-3-2")
                    .transition()
                    .duration('100')
                    .style('opacity', '1');
                d3.select('#path18245')
                    .transition()
                    .duration('300')
                    .style('opacity', '1');
            })
            .on('mouseout', function (d, i) {
                d3.select("#path308-2-3-2")
                    .transition()
                    .duration('300')
                    .style('opacity', '0');
                d3.select('#path18245')
                    .transition()
                    .duration('100')
                    .style('opacity', '0');
            });

        d3.select("#path308-2-3-2")
            .on('mouseover', function (d, i) {
                d3.select('#path18245')
                    .transition()
                    .duration('300')
                    .style('opacity', '1');
                d3.select("#path308-2-3-2")
                    .transition()
                    .duration('300')
                    .style('opacity', '1');
            })
            .on('mouseout', function (d, i) {
                d3.select('#path18245')
                    .transition()
                    .duration('300')
                    .style('opacity', '0');
                d3.select("#path308-2-3-2")
                    .transition()
                    .duration('300')
                    .style('opacity', '0');
            });
    }
}
</script>