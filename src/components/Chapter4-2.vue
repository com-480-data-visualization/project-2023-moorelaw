<script setup>

import WriteInvald from './SvgFigure/WriteInvald.vue';
import WriteUpdate from './SvgFigure/WriteUpdate.vue';

</script>

<template>
    <h1>Cache Coherence Protocol</h1>
    <div class="flex px-50 pt-10">
        <div class="text-justify w-1/2">
            <p>Why we need cache coherence protocol? Because there are replicas of the same data in each core's cache, so
                any update from any core should be visible to data on another core. </p>

            <p class="mt-10">How to implement it?</p>

            <ul class="mt-1">
                <li>Write-invalid. Write operations invalidate replicas on other cores.</li>
                <li>Write-update. Write operations broadcasts the new data to other cores.</li>
            </ul>
        </div>
        <div class="w-2/3">

            <div class="flex mb-5">
                <label class="mx-5"><input type="radio" v-model="coherence_type" value="write_invalid"> Write-invalid mode </label>
                <label class="mx-5"><input type="radio" v-model="coherence_type" value="write_update"> Write-update mode </label>

            </div>

            <WriteInvald v-if="coherence_type == 'write_invalid'" class="w-2/3 h-2/3"></WriteInvald>
            <WriteUpdate v-if="coherence_type == 'write_update'" class="w-2/3 h-2/3"></WriteUpdate>

            <p class="mt-5">TODO: Repaint this figure with d3.js and add animation</p>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            coherence_type: "write_invalid"
        }
    }
}

</script>