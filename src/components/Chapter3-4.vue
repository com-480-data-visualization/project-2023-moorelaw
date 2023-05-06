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
        let workflow_arr = ['#path308-2-3-2']
        let dieshot_arr = ['#path18245']

        d3.select(workflow_arr[0])
            .on('mouseover', function (d, i) {
                d3.select(workflow_arr[0])
                    .transition()
                    .duration('100')
                    .style('opacity', '1');
                d3.select(dieshot_arr[0])
                    .transition()
                    .duration('300')
                    .style('opacity', '1');
            })
            .on('mouseout', function (d, i) {
                d3.select(workflow_arr[0])
                    .transition()
                    .duration('300')
                    .style('opacity', '0');
                d3.select(dieshot_arr[0])
                    .transition()
                    .duration('100')
                    .style('opacity', '0');
            });

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