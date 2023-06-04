<script setup>
import DataWidth from './SvgFigure/DataWidth.vue';
</script>

<template>
    <div class="flex flex-justify-center flex-items-center mx-30">
        <div class="mr-30 w-1/2">
            <h2 class="mb-10">Trend 1: Wider Data Path</h2>
            <div class="text-justify">
                <p class="my-4">
                    Data from the real world must be encoded into binary before being processed by a computer.
                    A wider processor means it can handle more information per instruction, either higher precision or multiple scalars.
                </p>
                <p class="my-4">
                    The early stage of building wider data was to introduce wider scalar, e.g., from 4-bit per scalar (1971) to 64-bit scalar (1991).
                    During this period, programs that handle multiple low-precision (8-bit) appeared (e.g., graphics rendering). 
                    As a result, processors started to integrate the ability to handle multiple scalars (i.e. vector processing) by borrowing experiences from supercomputers like Cray X1.
                </p>
                <p class="my-4">
                    With the prevalence of deep learning algorithms, recent processors (e.g., Intel Xeon Sapphire Rapids) also integrated the ability to perform tensor operations, whose elements are usually 8-bit. 
                </p>
                <p class="my-4">
                    Wider data path also improves the utilization of memory system: Each request now can transfer more data chunks, thus amortizing the cost of controlling and synchronization. 
                </p>
            </div>
        </div>
        <DataWidth class="h-160"></DataWidth>
    </div>
</template>