<script>
  // import { faq } from "./configs/config.js";
  import {
    faq_string1,
    faq_string2_back_to_home,
    faq_array_of_string1_question,
  } from "$lib/strings/id";

  import TextHeader from "$lib/components/TextHeader.svelte";
  import TextLine from "$lib/components/TextLine.svelte";
</script>

<TextHeader>{faq_string1}</TextHeader>

<div class="flex flex-col text-left font-mono divide-y-4 max-w-4xl">
  {#each faq_array_of_string1_question as question}
    <div class="px-2 py-4">
      <p class="text-slate-500">
        <span class="text-2xl mr-4">Q</span>{question.q}
      </p>
      <p class="text-slate-500">
        <span class="text-2xl mr-4">A</span>{question.a}
      </p>
    </div>
  {/each}
</div>

<TextLine>
  <a href="/" class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
    >{faq_string2_back_to_home}</a
  >
</TextLine>
