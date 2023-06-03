<template>
    <h2 class="mb-10">Transistor Types</h2>
    <div class="text-justify mx-50">
        <p class="my-4">
            Based on the way in which the gate controls the channel, there are two types of MOSFET:
        </p>
        <ul class="my-4">
            <li>NMOS, whose channel is generated when the gate voltage is high.</li>
            <li>PMOS, whose channel is generated when the gate voltage is low.</li>
        </ul>
        <p class="my-4">
            Their circuit symbols and the terminals are displayed below:
        </p>

    </div>
    <div class="flex my-10">
        <img src="/figure/transistor_symbol.svg" class="h-60" />
    </div>

    <p class="text-justify mx-50">
        Usually, NMOS and PMOS are complementarily used (<code class="font-bold">CMOS</code>) to design logic circuit, which means no direct path from the power (<code class="font-bold">VDD</code>) and the ground (<code class="font-bold">GND</code>) when the input is stable. As a result, the power consumption of each MOSFET only exists when the input voltage is changed. 
    </p>

</template>