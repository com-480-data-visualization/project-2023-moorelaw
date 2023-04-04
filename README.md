# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| | |
| | |
| | |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (23rd April, 5pm)

**10% of the final grade**

*(max. 2000 characters per section)*

### Dataset

Our main goal is to make existing figure interactive, so most of the "dataset" is actually figures.

We also give a name to each dataset so that we can refer to them in the next section.

Data-based dataset:
- (`D-1`) The evolution of semiconductor technology on a single chip, including the transistor counts, the power limit, and the relative performance: https://github.com/karlrupp/microprocessor-trend-data
- (`D-2`) The evolution of processor architecture, including the parameter of cache, OoO window, etc. (Manually collected): https://docs.google.com/spreadsheets/d/1yJfT3mDx2eucNy9hRfu0SeN6Q3OyYJL64gCJAcmVeCY/edit?usp=sharing
- (`D-3`) The specification of prevalent processors: https://www.kaggle.com/datasets/lincolnzh/cpu-specifications-dataset

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

The high-level idea of this project is to build a visual museum of the CPU development history, influenced both by the technology innovation (e.g., Moore's law) and the architectural improvement. 

By analyzing `D-1` using our knowledge, there are 4 different stages:
- Early developing stage (1960s to 1980). During this time, CPUs are designed by hand, and the integrated circuit scale is small. We would like to show the figure of first integrated transistor (`F-1`) and Intel 4004 (`F-2`), which is a manual design containing 4000+ transistors.
- Architecture Innovation (1980s to 2005) for Single Core Performance. During this period, better technology gives more transistor budgets and higher frequency, while reducing its power consumption. Architects exploit the parallelism among instructions by using more complex structures, e.g., pipelines (`F-4`), multiple issues (`F-5`), and Out of program order execution (`F-6`). We would like to show the die pictures of these processors, their logical pipeline diagrams, and their way to execute instructions using small animations.
- Parallel Processors (2005 to Now). Due to the power limit, it is impossible to improve the single core performance. As a result, architects are working on processors with vector execution unit and multicore processors. We would like to show a detailed processor chip picture (`F-7`) and its logical component to see its great complexity and powerful vector unit. We will also display the evolution of each component over years.  We also shows some typical on-chip interconnect topology (e.g., Ring `F-8` and Mesh `F-9`) which makes multicore processors feasible and functional correct.
- Specialization (2016 to Now). Processors are not energy-efficient when processing some specialized task, e.g., graphics rendering and machine learning. As a result, hardware designers also come up with specialized hardware for these tasks, and they are put on the same chip with general-purpose CPUs, as a versatile on-chip system for users. We would like to show a Integrated GPU structure (Intel Xe Gen9, `F-10`) and compare it with CPU, and then a typical on-chip system (Apple M1, `F-11`), with introduction to its every component.

The target audience of this project is mainly for computer science bachelor and master students, who has interest in processor design. Besides conveying knowledge, we are also motivated by the complex structure, the beauty as well as the pattern of the chip, and human's wisdom to design these powerful hardware.

### Exploratory Data Analysis

TBD on Wednesday, but the main insight would be like:
- Power limit is the main reason why people shifted to multicore and parallel structure. 
- The scale of hardware components grows in general. There were some aggressive outliers in the processor development history, but they quickly followed the normal trend in the next generation, indicating that the processor design is not just making hardware structure bigger.
- Intel's processor stay constant between 2012 to 2018, because AMD did not ship good CPUs. However, when the powerful AMD Zen is released, Intel quickly improved its CPU. This implies that competition is necessary for product improvement. :)

### Related work

People already uses these data and figures to write blog (e.g., [Chip and Cheese](https://chipsandcheese.com/) and [Karl Rupp](https://www.karlrupp.net/2018/02/42-years-of-microprocessor-trend-data/)) and analyze the performance of a CPU. However, their goal is mainly focus on analysis and their audiences are professional readers. We want to make these figure interactive, and our audience is for students having interest in this field. As far as we know, there is not interactive visualization of these structures. 

We take inspirations from the visualization project about [wine](https://github.com/com-480-data-visualization/com-480-project-onvagagner). It also does not have much data to show, but it is graceful and makes people engaged.

## Milestone 2 (7th May, 5pm)

**10% of the final grade**


## Milestone 3 (4th June, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

