<script setup>
import Chapter21 from './Chapter2-1.vue';
import Chapter22 from './Chapter2-2.vue';
import Chapter23 from './Chapter2-3.vue';
</script>

<template>
    <div class="section bg2">
        <div class="slide flex">
            <h1>Integrated Circuit 101</h1>

            <div class="flex  mx-50">
                <div class="text-justify mr-20">
                    <p class="mt-10">Transistors are a key component of electronic devices, providing the ability to switch
                        and
                        amplify electrical signals. CMOS technology is a type of integrated circuit design that uses pairs
                        of
                        complementary MOSFET transistors to form logic gates, memory cells, and other digital circuits.
                        Together, integrated transistors and CMOS technology have enabled the creation of high-performance
                        microprocessors, memory chips, and other electronic devices that are ubiquitous in modern life.</p>

                    <p class="mt-10">The first transistor was invented in 1947 by John Bardeen, Walter Brattain, and William
                        Shockley at Bell Labs. The early transistors were discrete devices, meaning that they were
                        individually
                        packaged and wired together on a circuit board to form electronic circuits. As transistor technology
                        advanced, researchers began to explore the possibility of integrating multiple transistors on a
                        single
                        chip, which would allow for the creation of more complex circuits. In 1958, Jack Kilby at Texas
                        Instruments invented the first integrated circuit, which consisted of a few transistors and other
                        components on a single chip.</p>

                    <p class="pt-10">Please move to right to see more detail.</p>

                </div>
                <img src="/public/figure/first_transistor.webp" class="ml-20">
            </div>

        </div>
        <div class="slide">
            <Chapter21></Chapter21>
        </div>
        <div class="slide flex">
            <Chapter22></Chapter22>
        </div>
        <div class="slide flex">
            <Chapter23></Chapter23>
        </div>
    </div>
</template>

<style>
.flex {
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 30pt;
}
</style>

<script>
export default {

}
</script>

<!--
    - Show how transistors work (requires interactive)
    - Show the scaling, thus smaller size, maybe the power, speed, and Density.
    - Show transistors can be used to implement logic (Some circuit image)
    - Show the Moor's law (50-year trend)
-->