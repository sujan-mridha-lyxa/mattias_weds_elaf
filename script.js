const I18N = {
  sv: {
    brand: 'Inbjudan',
    name_1: 'Mattias',
    name_2: 'Elaf',
    hero_sub: 'MONALISA FESTVÅNING · SÖDERTÄLJE · LÖRDAG 20 JUNI 2026 · 19:00',

    count_overline: 'Nedräkning',
    count_title: 'För vårt nya kapitel',
    count_days: 'Dagar',
    count_hours: 'Timmar',
    count_minutes: 'Minuter',
    count_seconds: 'Sekunder',

    welcome_overline: 'Välkommen',
    welcome_title: 'Bröllopsinbjudan',

    inv_p1: 'Med stor glädje och värme vill vi bjuda in dig att fira vår bröllopsdag tillsammans med oss, lördagen den 20 juni 2026 – en dag fylld av kärlek, glädje och oförglömliga minnen.',
    inv_p2: 'Din närvaro betyder mycket för oss, och det skulle göra vår dag ännu mer speciell att få dela denna stund med dig.',

    inv_fam_title: 'Familjerna',
    inv_fam_1: '',
    inv_and: '',
    inv_fam_2: '',

    inv_invite_line: '',
    inv_couple: 'Mattias & Elaf',

    inv_date_label: 'Datum:',
    inv_date: 'Lördagen den 20 juni 2026',
    inv_time_label: 'Tid:',
    inv_time: 'kl. 19:00',

    inv_place_title: 'Plats',
    venue_name: 'Monalisa festvåning',
    venue_line1: 'Klockarvägen 118',
    venue_line2: '151 61 Södertälje',

    inv_rsvp_title: 'Bekräfta närvaro',
    inv_rsvp_line: 'Vänligen bekräfta senast den 1/6 och meddela om du kan närvara, så att vi kan planera kvällen på bästa sätt.',
    inv_c1_label: 'Afaq Sami:',
    inv_c2_label: 'Thaer Jeaz:',
    inv_c3_label: 'Mattias:',

    inv_final: 'Vi ser med glädje fram emot att få skapa vackra minnen tillsammans med dig.',

    gal_overline: 'Galleri',
    gal_title: 'Ögonblick av oss',

    map_overline: 'Karta',
    map_title: 'Vägbeskrivning',
    map_btn: 'Öppna i Google Maps',

    footer_line: 'Mattias & Elaf · 20 juni 2026 · Södertälje',
    to_top: 'Till toppen'
  },
  ar: {
    brand: 'الدعوة',
    name_1: 'معتز',
    name_2: 'ايلاف',
    hero_sub: 'Monalisa festvåning · Södertälje · السبت 2026/06/20 · 19:00',

    count_overline: 'العد التنازلي',
    count_title: 'لفصلنا الجديد',
    count_days: 'أيام',
    count_hours: 'ساعات',
    count_minutes: 'دقائق',
    count_seconds: 'ثوانٍ',

    welcome_overline: 'أهلًا بكم',
    welcome_title: 'دعوة زفاف',

    inv_p1: 'بأسم الحيّ العظيم، فصلٌ جديد يبدأ في حياتنا، ولا يسعدنا شيء أكثر من أن نشاركه مع أحبّتنا وأقرب الناس إلى قلوبنا.',
    inv_p2: 'نتطلع إلى ليلة مميزة مملوءة بالفرح، والحب، والذكريات الجميلة التي ستبقى خالدة في قلوبنا إلى الأبد، في ليلة تملؤها السعادة.',

    inv_fam_title: 'تتشرف عائلتا',
    inv_fam_1: 'السيد سامي عطية السهيلي',
    inv_and: '&',
    inv_fam_2: 'السيد ثائر جعاز الجميلي',

    inv_invite_line: 'بدعوتكم بكل محبة لحضور حفل زفاف ولديهما',
    inv_couple: 'معتز & ايلاف',

    inv_date_label: 'اليوم:',
    inv_date: 'السبت 2026/06/20',
    inv_time_label: 'الساعة:',
    inv_time: '19:00',

    inv_place_title: 'عنوان القاعة',
    venue_name: 'Monalisa festvåning',
    venue_line1: 'Klockarvägen 118',
    venue_line2: '151 61 Södertälje',

    inv_rsvp_title: 'تأكيد الحضور',
    inv_rsvp_line: 'عند تعذركم عن الحضور يرجى إعلامنا قبل 06/01 عبر الأرقام',
    inv_c1_label: 'افاق سامي:',
    inv_c2_label: 'ثائر ابو ايفان:',
    inv_c3_label: 'معتز سامي:',

    inv_final: '',

    gal_overline: 'الصور',
    gal_title: 'لحظات جميلة',

    map_overline: 'الخريطة',
    map_title: 'الموقع',
    map_btn: 'فتح في خرائط Google',

    footer_line: 'معتز & ايلاف · 2026/06/20 · Södertälje',
    to_top: 'للأعلى'
  }
};

function setLang(lang){
  const dict = I18N[lang] || I18N.sv;
  document.documentElement.lang = lang === 'ar' ? 'ar' : 'sv';
  document.body.classList.toggle('lang-ar', lang === 'ar');

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('lang', lang);
}

function initLang(){
  const saved = localStorage.getItem('lang') || 'sv';
  setLang(I18N[saved] ? saved : 'sv');

  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=> {
      e.preventDefault();
      e.stopPropagation();
      setLang(btn.dataset.lang);
    });
  });
}

function startCountdown(){
  const target = new Date('2026-06-20T19:00:00');
  const elD = document.getElementById('cd_days');
  const elH = document.getElementById('cd_hours');
  const elM = document.getElementById('cd_minutes');
  const elS = document.getElementById('cd_seconds');

  function tick(){
    const now = new Date();
    let diff = target - now;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);
    const minutes = Math.floor((diff / (1000*60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (elD) elD.textContent = String(days);
    if (elH) elH.textContent = String(hours);
    if (elM) elM.textContent = String(minutes);
    if (elS) elS.textContent = String(seconds);
  }

  tick();
  setInterval(tick, 1000);
}

function initHearts(){
  const hearts = document.getElementById('hearts');
  if (!hearts) return;
  const heartChars = ['❤','♥','❥','❣'];
  const count = 44;
  for (let i=0;i<count;i++){
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = heartChars[Math.floor(Math.random()*heartChars.length)];
    const x = Math.floor(Math.random()*100);
    const drift = (Math.random()*40 - 20).toFixed(1) + 'vw';
    const dur = (Math.random()*10 + 10).toFixed(2) + 's';
    const delay = (Math.random()*-12).toFixed(2) + 's';
    const scale = (Math.random()*0.9 + 0.6).toFixed(2);
    h.style.setProperty('--x', x + 'vw');
    h.style.setProperty('--drift', drift);
    h.style.setProperty('--scale', scale);
    h.style.animationDuration = dur;
    h.style.animationDelay = delay;
    hearts.appendChild(h);
  }

  // Tiny hearts layer
  const tinyCount = 28;
  for (let i=0;i<tinyCount;i++){
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = '♥';
    const x = Math.floor(Math.random()*100);
    const drift = (Math.random()*30 - 15).toFixed(1) + 'vw';
    const dur = (Math.random()*12 + 14).toFixed(2) + 's';
    const delay = (Math.random()*-18).toFixed(2) + 's';
    const scale = (Math.random()*0.55 + 0.35).toFixed(2);
    h.style.setProperty('--x', x + 'vw');
    h.style.setProperty('--drift', drift);
    h.style.setProperty('--scale', scale);
    h.style.animationDuration = dur;
    h.style.animationDelay = delay;
    h.style.opacity = '0.0';
    hearts.appendChild(h);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  startCountdown();
  initHearts();
});
