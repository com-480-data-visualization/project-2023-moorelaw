<script setup>
import DataWidth from './SvgFigure/DataWidth.vue';
</script>

<template>
    <h2>Wide Data Width</h2>
    <div class="flex mt-5 mb-0">
        <div class="text-justify w-1/3 ml-20">
            <p class="mb-5">(Not serious, for wider scalar) Well, the wider is better. It can simply use the memory bus more
                efficiently. This is also a hard requirement, because the width of an address must be large enough (at
                present 64bit is enough) to use a large memory.</p>
            <p>Some workloads have vector processing (e.g., Video/Image decoding, scientific computing) requirement, so
                bringing in wider vector is a good option. </p>
            <p>There are two main ways to use large data width</p>
            <ul>
                <li>Larger data encodings, double floating point, floating point, 16-bit integer, 8-bit integer</li>
                <li>Vector, which means the processor can handle multiple elements in parallel.</li>
            </ul>
        </div>
        <DataWidth class="w-1/4 ml-1/12 mr-1/8 h-1/2"></DataWidth>

    </div>
</template>