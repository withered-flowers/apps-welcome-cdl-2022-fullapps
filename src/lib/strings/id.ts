// Reserved for internationalization (i18n)
interface QnA {
  q: string;
  a: string;
}

export let eventName: string = "CDL Kominfo";
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
export let countdown_event_string4_video_introduction1: string = `Belum dapat credit? Silahkan nonton`;
export let countdown_event_string4_video_introduction2: string = `Video Perkenalan`;
export let countdown_event_string4_video_introduction3: string = `ini yah.`;
export let countdown_event_string5_faq1: string = `Ada pertanyaan? Silahkan baca`;
export let countdown_event_string5_faq2: string = `Pertanyaan Umum`;
export let countdown_event_string5_faq3: string = `ini dulu yah.`;
export let countdown_event_string6_excel1: string = `Ingin Tracking progress lab? silahkan unduh`;
export let countdown_event_string6_excel2: string = `File excel`;
export let countdown_event_string6_excel3: string = `ini.`;
export let countdown_event_string6_excel_url: string = `https://firebasestorage.googleapis.com/v0/b/dev-that-can-be-crashed.appspot.com/o/juaragcp%2FJuaraGCPSeason7Checklist.xls?alt=media&token=55680515-fcfa-4153-9d7b-87088984ebd4`;
export let countdown_event_string7_notif1: string = `Special Thanks untuk `;
export let countdown_event_string7_notif2: string = `Yoga RSPR`;
export let countdown_event_string7_notif3: string = ` yang sudah membuat file ini 😉`;
export let countdown_event_string8_validator1: string = `Ingin mengetahui sudah sampai Tier berapa? Kunjungi `;
export let countdown_event_string8_validator2: string = `Tautan ini`;
export let countdown_event_string8_validator3: string = ` untuk mengetahuinya.`;
export let countdown_event_string8_validator_url: string = `https://juaragcps7-validator.herokuapp.com/`;
export let countdown_event_string9_notif1: string = `Special Thanks untuk `;
export let countdown_event_string9_notif2: string = `Archzen`;
export let countdown_event_string9_notif3: string = ` yang sudah melanjutkan situs ini 😉`;
export let countdown_event_string10_group1: string = `Masih buntu? Yuk join grup `;
export let countdown_event_string10_group2: string = `telegram JuaraGCP`;
export let countdown_event_string10_group3: string = ` untuk menanyakan lebih lanjut.`;
export let countdown_event_string10_url: string = `https://t.me/JuaraGCP`;

export let video_introduction_string1: string = `Video Perkenalan`;
export let video_introduction_string2_video1: string = `JuaraGCP S7 Monthly Subscription + 1st Lab by Angga Anggia`;
export let video_introduction_string2_video1_url: string = `https://www.youtube.com/embed/LVzHsXBVnQQ`;
export let video_introduction_string3_video2: string = `Stuck di 9 credits?`;
export let video_introduction_string3_video2_url: string = `https://firebasestorage.googleapis.com/v0/b/dev-that-can-be-crashed.appspot.com/o/juaragcp%2Fjuaragcp-credits.mp4?alt=media&token=b2b302a0-59f3-4ace-a248-ac18139ebea4`;
export let video_introduction_string4_back_to_home: string = `Kembali ke Countdown`;

export let faq_string1: string = `Pertanyaan Umum`;
export let faq_string2_back_to_home: string = `Kembali ke Countdown`;
export let faq_array_of_string1_question: Array<QnA> = [
  {
    q: "loh season 6 nya mana?",
    a: "yaudah sih terima aja, kita season 7 sekarang 😆",
  },
  {
    q: "event Season 7 kali ini berapa lama?",
    a: "18 hari(13-30 Januari 2022), engga seperti event sebelumnya 10 hari ya, perhatikan hari nya",
  },
  {
    q: "harus register di google forms di web itu dulu kah?",
    a: "iyak betul",
  },
  {
    q: "cara dapetin hadiahnya gimana?",
    a: "kerjakan quest yang ada listnya di web juaragcp, minimal 8 untuk hadiah tier 1, 14 untuk hadiah tier 2",
  },
  {
    q: "bakal diperpanjang ga hari event nya?",
    a: "sampai saat ini belum ada info event diperpanjang",
  },
  {
    q: "berapa quest untuk dapet swag?",
    a: "minimal 8 quest dari list di web https://goo.gle/juaragcp",
  },
  {
    q: "berarti questnya ga bebas ya?",
    a: "sayangnya engga, ikutin list yang di web kalo mau dapet swags",
  },
  {
    q: "apakah semua quest dihitung?",
    a: "tidak, hanya quest yang selesai dari tanggal 13 Januari 2022- 30 Januari 2022 yang masuk hitungan. no debat!",
  },
  {
    q: "tanggal 13 Januari WIB?",
    a: "13 Januari 2022 waktu server Cloud Skill Boost, biasanya jam 2-3 siang di gmt +7 / WIB",
  },
  {
    q: "kalo nyelesaiin tanggal 13 Januari pagi gimana tuh?",
    a: "akan terhitung 12 Januari dan ga masuk hitungan dong, usahakan siang aja sekitaran jam 2-3 kalo mau aman",
  },
  {
    q: "closing tanggal dan jam berapa?",
    a: "30 Januari 2022 23:59 WIB (jangan tanya kenapa), usahakan jangan mepet2 submitnya",
  },
  {
    q: "list quest yang di web harus dikerjakan semua?",
    a: "tidak, pilih minimal 8 quest",
  },
  {
    q: "ga punya credits nih",
    a: "kan dapat dari email Juaragcp untuk monthly subs?",
  },
  {
    q: "belum masuk nih emailnya",
    a: "tunggu, email akan di blast dekat2 dengan event dimulai, kurang lebih sekitaran 13 Januari 2021",
  },
  {
    q: "ga bisa bahasa engreesss",
    a: "bruh (╯°□°）╯︵ ┻━┻",
  },
  {
    q: "swag yang lalu gimana?",
    a: "season 3 sudah berlalu, yang tanya akan di ignore, season 4 & crash course seharusnya sudah terkirim semua, season 5 sudah diproses semua, harap sabar menunggu",
  },
  {
    q: "juaragcp bisa untuk pemula?",
    a: "bisa banget, yang penting mau baca & bertanya di grup, tanya nya yang sopan ya sama member yang lain 😁",
  },
  {
    q: "ada yang bisa jokiin engga?",
    a: "WTF BAN 😡",
  },
  {
    q: "bingung nyatet quest / lab yang udah selesai nih",
    a: "om yoga udah buatin tracker, bisa dilihat di halaman countdown, om Archzen sudah update validator app, ada di halaman countdown",
  },
  {
    q: "bedanya QUEST sama LAB apa ya?",
    a: "Quest itu kumpulan dari labs, biasanya ada 5-6 labs dalam 1 quest",
  },
  {
    q: "boleh pakai akun lama dari season sebelumnya?",
    a: "boleh, tapi kalo udah mengerjakan semua quest di list ga bisa ikutan dapet swags",
  },
  {
    q: "yah udah kelar di season kemarin quest2 nya",
    a: "buat akun baru aja kalo mau ikutan",
  },
  {
    q: "ikut event nya perlu beli credits ya?",
    a: "engga, step 1 email itu link untuk dapatkan monthly subscription gratis",
  },
  {
    q: "diriku sultan mau pake credits aja, boleh kan?",
    a: "sultan mah bebas 😅",
  },
  {
    q: "diriku sudah selesai quest tapi lupa submit, jadi gimana ya?",
    a: "tidak dihitung dong, next event jangan lupa submit.",
  },
  {
    q: "ada limit ga berapa kali ngulang lab nya?",
    a: 'per lab rata2 3x, lewat dari itu biasanya akan muncul "Quota Exceeded", silahkan kontak support jika terjadi, siapa tau support lagi baik dan dibukain.',
  },
  {
    q: "aduh lab nya maintenance nih",
    a: "move on kerjakan lab lain, jangan ditungguin",
  },
  {
    q: "diriku ga mau hadiahnya, mau belajar aja pake gratisan sebulannya",
    a: "ya silahkan 😁",
  },
  {
    q: "kok ngetik password ga muncul ya?",
    a: "linux terminal memang seperti itu, ketik aja terus tekan enter nanti akan bisa lanjut",
  },
  {
    q: "harus pake incogito borwsernya?",
    a: "iya ikutin aja instruksinya",
  },
  {
    q: "belum dapet email nih",
    a: "-ada antrian, klo blom dapet sabar aja-",
  },
  {
    q: "gan diriku udah ngerjakan lab tapi kok belum centang ijo ya?",
    a: "tiap lab minimal dikerjakan selama 5 menit, meskipun dirimu selesai lebih awal, tunggu dulu 5 menit baru end lab supaya terhitung",
  },
  {
    q: "gan wajib end lab?",
    a: "iye",
  },
];
