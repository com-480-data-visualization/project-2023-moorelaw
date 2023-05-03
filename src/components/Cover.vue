<template>
    <div class="section flex bg1">
        <div class="text-8xl text-orange-100 text-shadow+ leading-loose">Moore's law</div>
    </div>
    <p class="annotate1 absolute">The journey of semiconductor and CPU performance growing</p>
</template>

<style scoped>

.bg1 {
    align-items: center;
    justify-content: center;
    background-image: url('/figure/bg1.jpg'); /* https://unsplash.com/s/photos/computer-chip */
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center;
}

.annotate1 {
    color: #ffffff;
    font-size: 20pt;
    bottom: 5%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    text-shadow: 0px 0px 20px #334155;
}

</style>