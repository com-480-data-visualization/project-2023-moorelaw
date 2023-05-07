<template>
    <h2>Instruction-level Parallelism</h2>
    <div class="">
        <div class="text-justify mx-40 my-10">
            <p>The stages of executing an instruction: fetch, decode, execution, memory, and update register</p>
            <p>This part discuss the techniques of the instruction-level parallelism extraction. </p>
            <p>A current plan is to have a selection bar, and select different technologies and combine them, and then see the schedule.</p>
        </div>

        <div class="flex mb-3">
            <label class="mx-5"><input type="radio" v-model="selected_value" checked value="multi-cycle"> Multi-cycle processor </label>
            <label class="mx-5"><input type="radio" v-model="selected_value" value="pipeline"> Pipelined processor</label>
            <label class="mx-5"><input type="radio" v-model="selected_value" value="dual-issue"> Dual-issue processor</label>
            <label class="mx-5"><input type="radio" v-model="selected_value" value="OoO"> OoO dual-issue processor</label>
        </div>

        <img :src="`/figure/ilp/${selected_value}.svg`" class="h-1/3">

        <p class="mt-10">TODO: This figure will be repainted and animated with d3.js</p>
    </div>
</template>

<script>


export default {
    data() {
        return {
            selected_value: "multi-cycle",

        }
    },
}

</script>