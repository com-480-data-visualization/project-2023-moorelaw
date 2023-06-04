<template>
  <h2 class="mb-10">Moore's Law</h2>
  <div class="text-justify mx-50">
    <p class="my-4">
      As a recaption, advancing semiconductor technologies make transistors faster, take less area, and consume fewer
      power. This scaling gives more design budgets for the hardware designers to develop better CPUs, which, as a
      return, enables higher level design automation, thus making chip larger and more powerful.
    </p>

    <p class="my-4">
      The similar observation first appeared in Gordon Moore's article <i>"Cramming more components onto
        integrated circuits"</i> in 1965:
    </p>

    <blockquote>
      <p>The complexity for minimum component costs has increased at a rate of roughly a factor of two per year.
        Certainly
        over the short term this rate can be expected to continue, if not to increase. Over the longer term, the rate of
        increase is a bit more uncertain, although there is no reason to believe it will not remain nearly constant for
        at
        least 10 years.</p>
    </blockquote>

    <p> This famous prediction thus is called <code class="font-bold">Moore's law</code>. It was a economic prediction,
      which then us also widely known as a description ofs the exponential scaling of chip complexity. </p>

  </div>
</template>

<style scoped>
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  border-right: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C" "\201D" "\2018" "\2019";
}

blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}

blockquote p {
  display: inline;
}
</style>

