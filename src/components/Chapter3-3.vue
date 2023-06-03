<template>
    <h2>Instruction-level Parallelism</h2>
    <div class="">
        <div class="text-justify mx-40 my-10">
            <p>The stages of executing an instruction: fetch, decode, execution, memory, and update register</p>
            <p>This part discuss the techniques of the instruction-level parallelism extraction. </p>
            <p>A current plan is to have a selection bar, and select different technologies and combine them, and then see
                the schedule.</p>
        </div>

        <div class="flex mb-3">
            <label class="mx-5"><input type="radio" v-model="selected_value" checked value="mc"> Multi-cycle processor
            </label>
            <label class="mx-5"><input type="radio" v-model="selected_value" value="pl"> Pipelined processor</label>
            <label class="mx-5"><input type="radio" v-model="selected_value" value="dual"> Dual-issue processor</label>
            <label class="mx-5"><input type="radio" v-model="selected_value" value="ooo_dual"> OoO dual-issue
                processor</label>
        </div>

        <InstructionExecuted class="h-70" ref="instruction_visualizer"></InstructionExecuted>

    </div>
</template>

<script setup lang="ts">

import { onMounted, ref, watch } from 'vue';
import InstructionExecuted from './SvgFigure/InstructionExecuted.vue';


const selected_value = ref("mc");
const instruction_visualizer = ref<typeof InstructionExecuted | null>(null);

onMounted(() => {
    watch(() => selected_value.value, (new_value, old_value) => {
        if (new_value != old_value) instruction_visualizer.value!.updateSelection(new_value);
    }, { immediate: true, deep: true });
})




</script>