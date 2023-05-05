<template>
    <h2>Wide Data Width</h2>
    <div class="flex mt-20 mb-20">
        <div class="text-justify w-1/3 ml-20">
            <p class="mb-5">(Not serious, for wider scalar) Well, the wider is better. It can simply use the memory bus more efficiently. This is also a hard requirement, because the width of an address must be large enough (at present 64bit is enough) to use a large memory.</p>
            <p>Some workloads have vector processing (e.g., Video/Image decoding, scientific computing) requirement, so bringing in wider vector is a good option. </p>
            <p>There are two main ways to use large data width</p>
            <ul>
                <li>Larger data encodings, double floating point, floating point, 16-bit integer, 8-bit integer</li>
                <li>Vector.</li>
            </ul>
        </div>
        <table class="w-1/4 ml-1/12 mr-1/8 text-xl">
            <caption>Evolution of processor data width, will be repainted with d3.js using a tree to show the evolution process.</caption>
            <thead>
                <tr>
                    <th>Years</th>
                    <th>Processor Name</th>
                    <th>Data Path Width</th>
                </tr>
            </thead>
            <tbody>
                <tr><td colspan="3">Scalar Machine</td></tr>
                <tr>
                    <td>1971</td>
                    <td>Intel 4004</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>1972</td>
                    <td>Intel 8008</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>1978</td>
                    <td>Intel 8086</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>1985</td>
                    <td>Intel i386</td>
                    <td>32</td>
                </tr>
                <tr>
                    <td>1991</td>
                    <td>MIPS R4000</td>
                    <td>64</td>
                </tr>
                <tr><td colspan="3">Machine with SIMD/Vector Extension</td></tr>
                <tr>
                    <td>1999</td>
                    <td>Intel Pentium III</td>
                    <td>64x2 (SSE)</td>
                </tr>
                <tr>
                    <td>2011</td>
                    <td>Intel Sandy Bridge</td>
                    <td>64x4 (AVX)</td>
                </tr>
                <tr>
                    <td>2016</td>
                    <td>Intel Knight Landing</td>
                    <td>64x8 (AVX-512)</td>
                </tr>
                <tr>
                    <td>2023</td>
                    <td>Intel Xeon Sapphire Rapids</td>
                    <td>64x16x2(AME)</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>