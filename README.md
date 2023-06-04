# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Zhiyao Feng | 336126 |
| Shanqing Lin | 322975 |
| Duo Xu | 338095 |

## Guidance

This visualization project aims for showing the Moore's law, the most impactful observation that accompanies the evolution of modern society. It also includes the evolution of CPU, including the single-threaded performance improvement, how to build multiple cores, and the specialization hardware on modern system-on-chip. 

Please find the website here: https://com-480-moorelaw.github.io/


Process book: [here](./m3/Processbook.pdf)

Fixed Video: [here](https://drive.google.com/file/d/1LaxqDie57vizW11qgXo6CGEkkLWh_ehk/view?usp=sharing)

(We do not touch any website content in the last commit, so the website is still the version before 5:00PM. )



[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (23rd April, 5pm)

**10% of the final grade**

*(max. 2000 characters per section)*

### Dataset

Our main goal is to make existing figures interactive, so most of the "dataset" is figures.

We also give each dataset a name so we can refer to them in the next section.

Data-based dataset:
- (`D-1`) The evolution of semiconductor technology on a single chip, including the transistor counts, the power limit, and the relative performance: https://github.com/karlrupp/microprocessor-trend-data
- (`D-2`) The evolution of processor architecture, including the parameter of cache, OoO window, etc. (Manually collected): https://docs.google.com/spreadsheets/d/1yJfT3mDx2eucNy9hRfu0SeN6Q3OyYJL64gCJAcmVeCY/edit?usp=sharing

Figure-based dataset:
- (`F-1`) The first integrated transistor: https://www.edn.com/noyce-receives-1st-ic-patent-april-25-1961/
- (`F-2`) The first general-purpose processor, Intel 4004: https://wifihifi.com/intel-4004-chip-democratized-computers-50-years-ago/
- (`F-3`) The famous 16-bit processor Intel 8086, as the foundation of x86 instruction set: https://www.righto.com/2020/06/a-look-at-die-of-8086-processor.html
- (`F-4`) A pipelined processor: https://en.wikichip.org/wiki/acorn/microarchitectures/arm1
- (`F-5`) A superscalar processor: https://en.wikichip.org/wiki/dec/microarchitectures/alpha_21164
- (`F-6`) An OoO superscalar processor: https://chipsandcheese.com/2022/07/28/amds-athlon-64-getting-the-basics-right/
- (`F-7`) A processor with parallel functional units: https://chipsandcheese.com/2022/10/14/skylake-intels-longest-serving-architecture/
- (`F-8`) Ring-based processor interconnect: https://en.wikichip.org/wiki/File:E5_v4_LCC.png
- (`F-9`) Mesh-based processor interconnect: https://en.wikichip.org/wiki/File:skylake_sp_xcc_block_diagram.svg
- (`F-10`) System on Chip: https://en.wikichip.org/wiki/File:skylake_soc_block_diagram.svg
- (`F-11`) Intel integrated graphics card: https://en.wikichip.org/wiki/File:gen9_lp_gt2_block_diagram.svg
- (`F-12`) Apple M1 Dieshot: https://twitter.com/Frederic_Orange/status/1452916317355397128

### Problematic

The high-level idea of this project is to build a visual museum of the CPU development history, influenced both by technological innovation (e.g., Moore's law) and architectural improvement. 

By analyzing `D-1` using our knowledge, there are four different stages:
- Early developing stage (From the 1960s to 1980). During this time, CPUs were manually designed, and the integrated circuit scale was small. We would like to show the figure of the first integrated transistor (`F-1`) and Intel 4004 (`F-2`), a manually designed CPU containing 4000+ transistors.
- Architecture Innovation (From the 1980s to 2005) for Single Core Performance. During this period, better technology gave more transistor budgets and a higher frequency while reducing power consumption. Moreover, architects exploited the parallelism among instructions by using more complex structures, e.g., pipelines (`F-4`), multiple issues (`F-5`), and Out of program order execution (`F-6`). We would like to show the die pictures of these processors, their logical pipeline diagrams, and their way of executing instructions using small animations.
- Parallel Processors (2005 to Now). Due to the power limit, it was not wise to continue improving the single-core performance. As a result, architects worked on processors with vector execution units and multicore processors. We would like to show a detailed processor chip picture (`F-7`) and its logical component to see its incredible complexity and powerful vector unit. We will also display the evolution of each component over the years. For multicore processors, we will show some typical on-chip interconnect topology (e.g., Ring `F-8` and Mesh `F-9`), which makes multicore processors integrated and functionally correct.
- Specialization (2016 to Now). Processors are not energy-efficient when processing some specialized tasks, e.g., graphics rendering and machine learning. As a result, hardware designers also developed specialized hardware for these tasks. They are integrated on the same chip with general-purpose CPUs as a versatile on-chip system for users. We would like to show an integrated GPU (Intel Xe Gen9, `F-10`) and compare it with a CPU, and then a typical on-chip system (Apple M1, `F-11`), with an introduction to its components (CPUs, energy-efficient CPUs, GPU, Neural Engine, Encryption Unit, I/O).

The target audience of this project is mainly computer science bachelor and master students who have an interest in processor design. Besides conveying knowledge, we are also motivated by the complex structure, the beauty and pattern of the chip, and the delicate human wisdom to design powerful hardware.

### Exploratory Data Analysis

Please checek the `eda.ipynb` file for the visualization. The main observations are:

- Power limit is why people shifted to multicore processors and specialized hardware. 
- The scale of hardware components grows in general. There were some aggressive outliers in history, but they quickly followed the normal trend in the next generation, indicating that the processor design is not simply making the hardware structure bigger.
- Intel's processors stayed constant between 2012 to 2018 because AMD did not ship good designs. However, when the powerful AMD Zen was released, Intel quickly improved its CPU. This reaction implies that competition is necessary for product improvement. :)

### Related work

People already use these data and figures to write blogs (e.g., [Chip and Cheese](https://chipsandcheese.com/) and [Karl Rupp](https://www.karlrupp.net/2018/02/42-years-of-microprocessor-trend-data/)) and analyze the performance of these CPUs. However, their goal mainly focuses on analysis, and their audiences are professional readers. We want to make these figures interactive, and our audience is students interested in this field. As far as we know, these hardware figures have no interactive visualization. 

We take inspiration from the visualization project about [wine](https://github.com/com-480-data-visualization/com-480-project-onvagagner). It also does not have much data to show, but it is graceful and engages people.


## Milestone 2 (7th May, 5pm)

**10% of the final grade**

For the project goal, please check [here](./m2.md).

For the functional prototype, please visit https://com-480-moorelaw.github.io/ 


## Milestone 3 (4th June, 5pm)

**80% of the final grade**

For the process book, please check [here](./m3/Processbook.pdf).


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

