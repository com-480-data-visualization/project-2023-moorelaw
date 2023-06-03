<script setup>
import * as d3 from "d3";
</script>

<template>
    <div class="section text-center">
        <div class="flex">
            <h1 class="mr-30">Acknowledgement</h1>
            <table id="ack_table"></table>
        </div>

    </div>
</template>

<script>
export default {
    mounted() {
        let table_path = "../../public/table/ack.csv"
        d3.text(table_path).then(function (table_path) {
            let rows = d3.csvParseRows(table_path),
                table = d3.select('#ack_table')
                    .style("border-collapse", "collapse")
                    .style("border", "2px transparent solid");

            // headers
            table.append("thead").append("tr")
                .selectAll("th")
                .data(rows[0])
                .enter().append("th")
                .text(function (d) { return d; })
                .style("border", "1px transparent solid")
                .style("padding", "5px")
                .style("background-color", "#ededed")
                .style("font-weight", "bold")
                .style("text-transform", "uppercase");

            // data
            table.append("tbody")
                .selectAll("tr").data(rows.slice(1))
                .enter().append("tr")
                .selectAll("td")
                .data(function (d) { return d; })
                .enter().append("td")
                .style("border", "1px transparent solid")
                .style("padding", "5px")
                .on("mouseover", function () {
                    d3.select(this).style("background-color", "#ededed");
                })
                .on("mouseout", function () {
                    d3.select(this).style("background-color", "white");
                })
                .text(function (d) { return d; })
                .style("font-size", "16px")
                .style("text-align", "left");
        });
    }
}
</script>