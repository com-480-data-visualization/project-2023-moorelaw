<template>
    <h2>Period 2: Step to Multiple Cores</h2>
    <p>(2005 to Now)</p>
    <div class="text-justify mx-50 mt-10">
        <p class="pt-4">Around 2005, due to the limit of the power consumption, it is hard to
            improve the working frequency of the processor. On the other hand, there is a limit of instruction-level
            parallelism due to the true data dependency, the branch misprediction, and the memory speed limitation. As a
            result, the benefit of improving single-core performance is not proportional to the effort and resources
            devoted. Building multiple processor cores on the same chip became the main way to utilize the overwhelming
            transistor budgets. </p>

        <p class="pt-4">The main challenge of designing multi-core processors come from the
            following aspects: </p>
        <ul class="pt-4">
            <li>Memory sharing abstraction, which means the hardware has to behave as if all cores share the same memory.
                This abstraction can cause problem, because each processor has caches containing the replica of the data in
                the memory. </li>
            <li>Interconnection. The network connecting multiple processors should be carefully design. It is a trade-off
                between communication latency, the scalability, the communication bandwidth, and the resource consumption.
            </li>
        </ul>
    </div>
</template>