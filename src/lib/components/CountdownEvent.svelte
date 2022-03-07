<script>
  // Modified from
  // https://tailwindcomponents.com/component/countdown-timer
  import dayjs from "dayjs";

  import { onMount, onDestroy } from "svelte";
  import { eventTimeEnd } from "$lib/configs/config.js";
  import {
    eventUrl,
    countdown_event_string1_start,
    countdown_event_string2_further1,
    countdown_event_string2_further2,
    countdown_event_string3_notif,
    countdown_event_string5_faq1,
    countdown_event_string5_faq2,
    countdown_event_string5_faq3,
    countdown_event_string8_validator1,
    countdown_event_string8_validator2,
    countdown_event_string8_validator3,
    countdown_event_string10_group1,
    countdown_event_string10_group2,
    countdown_event_string10_group3,
    countdown_event_string10_url,
  } from "$lib/strings/id";
  import { checkEventEnded } from "$lib/utils/helper";

  import TextHeader from "$lib/components/TextHeader.svelte";
  import TextLine from "$lib/components/TextLine.svelte";
  import TextLineSmall from "$lib/components/TextLineSmall.svelte";

  const stripEventUrl = "DTS Kominfo";
  const endTime = eventTimeEnd;

  let timer = null;
  let now = dayjs().valueOf();
  let end = dayjs(endTime).valueOf();

  onMount(() => {
    timer = setInterval(() => {
      now = dayjs().valueOf();

      if (checkEventEnded()) {
        clearInterval(timer);
      }
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(timer);
  });

  $: count = Math.round((end - now) / 1000);
  $: d = Math.floor(count / (3600 * 24));
  $: h = Math.floor(count / 3600) % 24;
  $: m = Math.floor(count / 60) % 60;
  $: s = count % 60;
</script>

<TextHeader>
  {countdown_event_string1_start}
</TextHeader>

<div class="text-6xl text-center flex w-full items-center justify-center">
  <div class="w-24 mx-1 p-2 bg-white text-[#fbbc05] rounded-lg">
    <div class="font-mono leading-none">{d}</div>
    <div class="font-mono uppercase text-sm leading-none">Hari</div>
  </div>
  <div class="w-24 mx-1 p-2 bg-white text-[#fbbc05] rounded-lg">
    <div class="font-mono leading-none">{h}</div>
    <div class="font-mono uppercase text-sm leading-none">Jam</div>
  </div>
  <div class="w-24 mx-1 p-2 bg-white text-[#fbbc05] rounded-lg">
    <div class="font-mono leading-none">{m}</div>
    <div class="font-mono uppercase text-sm leading-none">Menit</div>
  </div>
  <div class="text-2xl mx-1 font-extralight text-slate-500">dan</div>
  <div class="w-24 mx-1 p-2 bg-white text-[#fbbc05] rounded-lg">
    <div class="font-mono leading-none">{s}</div>
    <div class="font-mono uppercase text-sm leading-none">Detik</div>
  </div>
</div>

<TextLine>
  {countdown_event_string2_further1}
  <a
    href="{eventUrl}"
    class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
    >{stripEventUrl}</a
  >
  {countdown_event_string2_further2}
</TextLine>

<TextLineSmall>
  ({countdown_event_string3_notif})
</TextLineSmall>

<TextLine>
  {countdown_event_string5_faq1}
  <a href="/faq" class="text-[#1aa260] hover:text-[#4285f4] hover:underline">
    {countdown_event_string5_faq2}
  </a>
  {countdown_event_string5_faq3}
</TextLine>

<TextLine>
  {countdown_event_string8_validator1}<a
    href="/validator"
    class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
    >{countdown_event_string8_validator2}</a
  >{countdown_event_string8_validator3}
</TextLine>

<TextLine>
  {countdown_event_string10_group1}<a
    href="{countdown_event_string10_url}"
    class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
    >{countdown_event_string10_group2}</a
  >{countdown_event_string10_group3}
</TextLine>
