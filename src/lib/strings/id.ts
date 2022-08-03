// Reserved for internationalization (i18n)
interface QnA {
  q: string;
  a: string;
}

export let eventName: string = "PROA - Google CDL";
export let eventUrl: string =
  "https://digitalent.kominfo.go.id/detail/pelatihan/1642?akademiId=152";

export let countdown_pre_event_string1_start: string = `${eventName} dimulai dalam`;
export let countdown_pre_event_string2_further1: string = `Kunjungi`;
export let countdown_pre_event_string2_further2: string = `untuk mempelajari event ${eventName} lebih lanjut`;
export let countdown_pre_event_string3_notif: string = `Dihitung berdasarkan waktu server Google Cloud Skills Boost Pukul 00.00`;

export let countdown_event_string1_start: string = `${eventName} selesai pada`;
export let countdown_event_string2_further1: string = `Kunjungi`;
export let countdown_event_string2_further2: string = `untuk mempelajari event ${eventName} lebih lanjut`;
export let countdown_event_string3_notif: string = `Dihitung berdasarkan waktu server Indonesia dengan waktu UTC+7`;

export let countdown_event_string5_faq1: string = `Ada pertanyaan? Silahkan baca`;
export let countdown_event_string5_faq2: string = `Pertanyaan Umum`;
export let countdown_event_string5_faq3: string = `ini dulu yah.`;

export let countdown_event_string8_validator1: string =
  "Ingin mengecek progress Anda? Kunjungi ";
export let countdown_event_string8_validator2: string =
  "Pengecek Profil Publik";
export let countdown_event_string8_validator3: string = " ini yah";

export let countdown_event_string10_group1: string = `Masih buntu? Yuk join grup `;
export let countdown_event_string10_group2: string = `Discord ${eventName}`;
export let countdown_event_string10_group3: string = ` untuk menanyakan lebih lanjut.`;
export let countdown_event_string10_url: string = `https://discord.com/invite/bMSERnqUJs`;

export let countdown_event_string11_group1: string = `Takut bila situs ini mengambil data Anda? Tenang, kode situs ini bisa dilihat di  `;
export let countdown_event_string11_group2: string = `Github Repository`;
export let countdown_event_string11_group3: string = ` untuk dilihat lebih lanjut.`;
export let countdown_event_string11_url: string = `https://github.com/withered-flowers/apps-welcome-cdl-2022-fullapps/tree/batch-2`;

export let faq_string1: string = `Pertanyaan Umum`;
export let faq_string2_back_to_home: string = `Kembali ke Halaman Utama`;
export let faq_array_of_string1_question: Array<QnA> = [
  {
    q: "Pelatihan ini butuh credit card?",
    a: "Tidak. kalau butuh memasukkan credit card, artinya ada yang salah dengan langkah registrasimu. Dicek kembali yah.",
  },
  {
    q: "Jadwal Pelatihannya dimana?",
    a: "Bisa dicek di <a class='text-[#1aa260] hover:text-[#4285f4] hover:underline' href='/schedule'>Jadwal Pelatihan</a>",
  },
  {
    q: "Latihan Soalnya ada dimana?",
    a: "Bisa dicek di <a class='text-[#1aa260] hover:text-[#4285f4] hover:underline' href='/preparation'>Latihan Soal</a>",
  },
];
