<script>
  import { checkEventStarted, checkEventEnded } from "$lib/utils/helper";
  import Confet from "$lib/components/Confet.svelte";
  import CountdownPreEvent from "$lib/components/CountdownPreEvent.svelte";
  import CountdownEvent from "$lib/components/CountdownEvent.svelte";
</script>

{#if !checkEventStarted() && !checkEventEnded()}
  <CountdownPreEvent />
{:else if checkEventStarted() && !checkEventEnded()}
  <Confet />
  <CountdownEvent />
{/if}
