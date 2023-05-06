<template>
    <h1>Interconnect Topology</h1>
    <div class="text-justify mx-50 mt-10">
        <p>The following figure lists the typical way to interconnect multiple cores. A typical multiprocessor design would
            combine several topologies to balance their wire complexity and communication latency. </p>

        <div class="flex">
            <label v-for="(item, index) in topologies" class="mx-5 mt-5">
                <input type="radio" v-model="selected_index" :value="index">
                {{ item.name }}
            </label>
        </div>

        <div class="flex mt-10">

            <div class="w-3/5 mr-20">
                <p> {{ topologies[selected_index].text }} </p>
                <p class="mt-5">Main property: </p>
                <ul class="mt-1">
                    <li>Wire complexity: {{ topologies[selected_index].wire_complexity }}</li>
                    <li>Longest path latency: {{ topologies[selected_index].longest_path }}</li>
                    <li>Bisection bandwidth: {{ topologies[selected_index].bisection_bandwidth }}</li>
                    <li>Typical core count: {{ topologies[selected_index].typical_core_count }}</li>
                </ul>
            </div>



            <img :src="topologies[selected_index].image" class="h-90 flex-shrink-0 mx-5">
            <ul>

            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            topologies: [
                {
                    name: "Crossbar",
                    image: "/figure/interconnect/crossbar.svg",
                    wire_complexity: "n^2/2",
                    longest_path: "constant",
                    bisection_bandwidth: "n^2",
                    typical_core_count: "2, 4, 8",
                    text: "(Place holder) The crossbar interconnect is an on-chip interconnection network used in multicore processors to facilitate communication between cores. It consists of a grid of wires that connect each core to every other core in the system, allowing for efficient communication and coordination. However, as the number of cores increases, the crossbar interconnect can become a potential bottleneck, which can be addressed using techniques such as virtual channels and arbitration mechanisms."
                },
                {
                    name: "Ring",
                    image: "/figure/interconnect/ring.svg",
                    wire_complexity: "3n",
                    longest_path: "n/2",
                    bisection_bandwidth: "constant",
                    typical_core_count: "4, 8, 10",
                    text: "(Place holder) The ring topology for on-chip networks is a circular arrangement of nodes where each node is connected to its two neighboring nodes, enabling data transmission in a unidirectional manner. This topology is commonly used in high-performance computing systems due to its high bandwidth and low latency, but it can also be vulnerable to a single point of failure. Techniques such as redundancy and fault tolerance mechanisms are often used to enhance the reliability of the network."

                },
                {
                    name: "2D Mesh",
                    image: "/figure/interconnect/2d-mesh.svg",
                    wire_complexity: "5n - 2*sqrt(n)",
                    longest_path: "2*sqrt(n)",
                    bisection_bandwidth: "n",
                    typical_core_count: "16 to 64",
                    text: "(Place holder) The 2D mesh topology for multiprocessor interconnects organizes processing nodes in a two-dimensional array, with each node connected to its four neighbors. Data is transmitted between nodes using a routing algorithm, making it highly scalable and efficient for small to medium-sized systems. However, as the number of nodes increases, wiring complexity and bottlenecks may arise, and techniques such as virtual channels and adaptive routing are often used to address these issues."

                },
                {
                    name: "2D Torus",
                    image: "/figure/interconnect/2d-torus.svg",
                    wire_complexity: "5n",
                    longest_path: "sqrt(n)",
                    bisection_bandwidth: "2n",
                    typical_core_count: "16 to 64",
                    text: "(Place holder) The 2D torus topology for multiprocessor interconnects is a two-dimensional grid of processing nodes with wrap-around connections in both dimensions, forming a torus shape. It supports efficient communication between distant nodes using a routing algorithm that determines the shortest path between the source and destination nodes. This topology is highly scalable, fault-tolerant, and can provide high bisection bandwidth, making it suitable for many high-performance computing applications."

                },
                {
                    name: "Butterfly",
                    image: "/figure/interconnect/butterfly.svg",
                    wire_complexity: "n*log(n)",
                    longest_path: "log(n)",
                    bisection_bandwidth: "2log(n)",
                    typical_core_count: "up to 128",
                    text: "(Place holder) The butterfly topology for multiprocessor interconnects is a hierarchical tree structure where nodes are connected to their parent and child nodes, forming a layered structure. Data is transmitted between nodes using a routing algorithm that follows the paths of the tree, allowing for efficient communication between nodes at different levels of the hierarchy. This topology is fault-tolerant, scalable, and provides low-latency communication, making it suitable for many parallel computing applications."
                }
            ],
            selected_index: 0
        }
    }
}

</script>