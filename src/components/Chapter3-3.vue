<template>
    <h2 class="mb-10">Trend 2: More Instructions Per Cycle</h2>
    <div class="">
        <div class="text-justify mx-50">
            <p class="my-4">
                Usually, the fewer things hardware could do in one cycle, the shorter clock period.
                As a result, architects naturally design processors using multiple cycles and stages to execute single
                instruction.
                Because instructions with different operation code can do different things, they take various number of
                cycles to finish.
            </p>
            <p class="my-4">
                With more transistors budgets, hardware designers can make multiple instructions executed in parallel:
            </p>
            <ul>
                <li><code class="font-bold">Pipeline</code>: Instructions can pass the same hardware stages sequentially.
                </li>
                <li><code class="font-bold">Multi-issuing</code>: Pipelines are replicated to execute multiple instructions
                    in parallel.</li>
                <li><code class="font-bold">Out-of-order (OoO)</code>: Hardware can adjust instructions' order dynamically
                    so that
                    later instructions finish earlier.</li>
            </ul>
            <p class="my-4">
                Although these techniques can vastly improve the hardware utilization, there is a limit:
                Some instructions have <i>data dependency</i>, which means they need the result of previous instructions.
                There are also other hazards (e.g., order restriction, or resource unavailable) that can influence cause
                <code style="color: #777">Wait</code> between instruction stages.
            </p>
        </div>

        <div class="flex flex-justify-center flex-items-center my-2">
            <label class="mx-5"><input type="radio" v-model="selected_value" checked value="mc"> Baseline: Multi-cycle
            </label>
            <label class="mx-5"><input type="radio" v-model="selected_value" value="pl"> Pipelining</label>
            <label class="mx-5"><input type="radio" v-model="selected_value" value="dual"> Dual-issuing</label>
            <label class="mx-5"><input type="radio" v-model="selected_value" value="ooo_dual"> OoO dual-issue </label>
        </div>

        <InstructionExecuted class="h-70" ref="instruction_visualizer"></InstructionExecuted>

        <div>Stages: &nbsp; <code>IF</code>: Instruction Fetching &nbsp; <code>DE</code>: Decoding &nbsp; <code>EX</code>: Execution &nbsp; <code>WB</code> Write-back result</div> 
    </div>
</template>

<style scoped>
.i-mdi-information-slab-circle {
    @apply w-6 h-6;
}
</style>

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