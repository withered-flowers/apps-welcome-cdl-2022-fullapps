<script>
  import {
    video_introduction_string1,
    video_introduction_string2_video1,
    video_introduction_string2_video1_url,
    video_introduction_string3_video2,
    video_introduction_string3_video2_url,
    video_introduction_string4_back_to_home,
  } from "$lib/strings/id";

  import TextHeader from "$lib/components/TextHeader.svelte";
  import TextLine from "$lib/components/TextLine.svelte";
</script>

<TextHeader>{video_introduction_string1}</TextHeader>

<div
  class="flex flex-col text-center items-center font-mono divide-y-4 max-w-4xl"
>
  <div class="px-2 py-4">
    <div class="pb-2">
      {video_introduction_string2_video1}
    </div>
    <div>
      <iframe
        width="560"
        height="315"
        src={video_introduction_string2_video1_url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
  <div class="px-2 py-4">
    <div class="pb-2">{video_introduction_string3_video2}</div>

    <div>
      <!-- svelte-ignore a11y-media-has-caption -->
      <video width="560" height="315" controls>
        <source src={video_introduction_string3_video2_url} type="video/mp4" />
      </video>
    </div>
  </div>
</div>

<TextLine>
  <a href="/" class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
    >{video_introduction_string4_back_to_home}</a
  >
</TextLine>
