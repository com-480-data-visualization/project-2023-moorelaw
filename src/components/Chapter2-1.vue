<script setup>
    import Transistor from './SvgFigure/Transistor.vue';
</script>

<template>
    <div class="flex">
        <div class="w-3/8 pl-5 ml-30">
            <h2 class="mb-10">Integrated Transistors</h2>
            <p class="break-words">
                PlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolderPlaceHolder
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