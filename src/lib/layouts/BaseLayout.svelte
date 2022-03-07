<script>
  import "$lib/styles/tailwind.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="container p-4">
  <Header />
</div>

<main
  class="bg-[#f1f1f1] container p-4 min-h-screen min-w-full flex flex-col items-center justify-center text-center"
>
  <slot />
</main>

<div class="container p-4">
  <Footer />
</div>
