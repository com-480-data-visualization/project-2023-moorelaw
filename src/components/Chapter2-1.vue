<script setup>
    import Transistor from './SvgFigure/Transistor.vue';
</script>

<template>
    <div class="flex">
        <div class="w-3/8 pl-5 ml-30">
            <h2 class="mb-10">Integrated Transistors</h2>
            <p class="text-justify">
                (Place holder) Integrated transistors are a fundamental building block of modern electronic devices, providing the ability to switch and amplify electrical signals. Complementary Metal-Oxide-Semiconductor (CMOS) technology is a type of integrated circuit design that uses pairs of complementary MOSFET transistors to form logic gates, memory cells, and other digital circuits. In a CMOS circuit, the MOSFET transistors are arranged in a complementary fashion, such that one transistor is responsible for pulling the output to a low state, while the other transistor is responsible for pulling the output to a high state. This configuration results in low power consumption, high noise immunity, and the ability to operate at high speeds, making CMOS technology the dominant technology in modern digital circuits. 
            </p>

            <p class="text-2xl mt-18 mb-3">Transistor symbols</p>

            <div class="flex mt-3" >
                <div class="flex-col mx-10">
                    <img src="/figure/Mosfet_N-Ch_Sedra.svg">
                    <p>NMOS</p>
                </div>
                <div class="flex-col mx-10">
                    <img src="/figure/Mosfet_P-Ch_Sedra.svg">
                    <p>PMOS</p>
                </div>
            </div>

        </div>
        <div class="w-5/8">
            <Transistor></Transistor>
        </div>
    </div>
</template>

<style>
</style>