<script setup>

import WriteInvald from './SvgFigure/WriteInvald.vue';
import WriteUpdate from './SvgFigure/WriteUpdate.vue';

</script>

<template>
    <h2>Cache Coherence Protocol</h2>
    <div class="flex px-50 pt-10">
        <div class="text-justify w-1/2">
            <p>Why we need cache coherence protocol? Because there are replicas of the same data in each core's cache, so
                any update from any core should be visible to data on another core. </p>

            <p class="mt-4">How to implement it?</p>

            <ul class="mt-4">
                <li>Write-invalid. Write operations invalidate replicas on other cores.</li>
                <li>Write-update. Write operations broadcasts the new data to other cores.</li>
            </ul>

            <div class="flex flex-justify flex-items-center my-8">
                <div class="i-mdi-information-slab-circle mx-2"></div>
                <p> After selecting the mode, you can change the highlighted cache value as if executing a memory operation, and observe the traffic to other caches. </p>
            </div>
        </div>
        <div class="w-2/3">
            <div class="flex flex-justify-center mb-5">
                <label class="mx-5"><input type="radio" v-model="coherence_type" value="write_invalid"> Write-invalid mode
                </label>
                <label class="mx-5"><input type="radio" v-model="coherence_type" value="write_update"> Write-update mode
                </label>

            </div>
            <WriteInvald v-if="coherence_type == 'write_invalid'" class="w-100"></WriteInvald>
            <WriteUpdate v-if="coherence_type == 'write_update'" class="w-100"></WriteUpdate>
        </div>
    </div>
</template>

<style scoped>
.i-mdi-information-slab-circle {
    @apply w-18 h-18;
}
</style>

<script>

export default {
    data() {
        return {
            coherence_type: "write_invalid"
        }
    }
}

</script>