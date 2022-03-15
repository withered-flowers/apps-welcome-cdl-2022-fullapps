<script>
  import TextHeader from "./TextHeader.svelte";
  import TextLine from "./TextLine.svelte";

  const scheduleData = [
    {
      name: "Introduction Cloud Computing with Google Cloud",
      date: "9 Maret 2022, 19.00 WIB",
      liveUrl: "https://www.youtube.com/watch?v=wTIqXDZf42A",
      absentUrl: "https://komin.fo/presensi-pro22-cdl1",
    },
    {
      name: "Services on Google Cloud",
      date: "11 Maret 2022, 19.00 WIB",
      liveUrl: "https://www.youtube.com/watch?v=rS9pcF2RLQM",
      absentUrl: "https://komin.fo/presensi-pro22-cdl1",
    },
    {
      name: "Sharing Session #1",
      date: "12 Maret 2022, 19.00 WIB ",
      liveUrl: "https://www.youtube.com/watch?v=ZQl4keS-M6c",
      absentUrl: "",
    },
    {
      name: "Networking and Security in Google Cloud",
      date: "14 Maret 2022, 19.00 WIB",
      liveUrl: "https://www.youtube.com/watch?v=e1C8MaKjgqI",
      absentUrl: "https://komin.fo/presensi-pro22-cdl1",
    },
    {
      name: "Sharing Session #2",
      date: "15 Maret 2022, 19.00 WIB ",
      liveUrl: "https://www.youtube.com/watch?v=1HNKRA6kJUQ",
      absentUrl: "",
    },
    {
      name: "Calculate and Save Costs on Google Cloud",
      date: "16 Maret 2022, 19.00 WIB",
      liveUrl: "https://www.youtube.com/watch?v=Av2aDxRPpeQ",
      absentUrl: "https://komin.fo/presensi-pro22-cdl1",
    },
    {
      name: "Sharing Session #3",
      date: "17 Maret 2022, 19.00 WIB ",
      liveUrl: "https://www.youtube.com/watch?v=T0yuI-5OYT4",
      absentUrl: "",
    },
    {
      name: "Sharing Session #4",
      date: "18 Maret 2022, 19.00 WIB ",
      liveUrl: "https://www.youtube.com/watch?v=FP_e2K_u72Y",
      absentUrl: "",
    },
  ];
</script>

<TextHeader>Jadwal Pelatihan</TextHeader>

<div class="flex flex-col text-left font-mono text-sm divide-y-4 max-w-4xl">
  <h1 class="text-md text-center mb-2">
    <a
      href="https://k-cloud.kominfo.go.id/s/Joy6xrLnQw7t7cJ"
      class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
      >Daftar Peserta Cek di sini !</a
    >
  </h1>
  <table class="table table-auto border-separate">
    <thead>
      <tr>
        <th class="border border-slate-600">Topik</th>
        <th class="border border-slate-600">Tanggal / Jam</th>
        <th class="border border-slate-600">Tautan Live Session</th>
        <th class="border border-slate-600">Tautan Absensi</th>
      </tr>
    </thead>
    <tbody>
      {#each scheduleData as sched, idx}
        <tr>
          <td class="border border-slate-600">{sched.name} </td>
          <td class="border border-slate-600">{sched.date}</td>
          <td class="border border-slate-600 text-center"
            ><a
              href="{sched.liveUrl}"
              class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
              >Pertemuan {idx + 1}</a
            ></td
          >
          <td class="border border-slate-600 text-center">
            {#if sched.absentUrl}
              <a
                href="{sched.absentUrl}"
                class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
                >Absensi {idx + 1}</a
              >
            {:else}
              <span>Tidak Diperlukan</span>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<TextLine>
  <a href="/" class="text-[#1aa260] hover:text-[#4285f4] hover:underline"
    >Kembali ke Halaman utama</a
  >
</TextLine>
