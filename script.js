/* Logika Ruang Kata. Data demo disimpan di browser, bukan di server. */

const $ = (selector, root = document) => root.querySelector(selector);
const KEYS = {
  novels: "ruangKata_userNovels_v1",
  draft: "ruangKata_writerDraft_v2",
  session: "ruangKata_demoSession_v1",
  comments: "ruangKata_readerComments_v1",
  readerName: "ruangKata_readerName_v1",
  topics: "ruangKata_forumTopics_v1",
  contests: "ruangKata_contestEntries_v1",
  customContests: "ruangKata_customContests_v1",
  contestSuggestions: "ruangKata_contestSuggestions_v1",
  messages: "ruangKata_messages_v1",
  publisherSubmissions: "ruangKata_publisherSubmissions_v1",
  profiles: "ruangKata_profiles_v1"
};

const starterNovels = [
  {
    id: "s1", title: "Senja Terakhir", author: "A. Nara", genre: "Drama",
    synopsis: "Di sebuah toko buku tua, Arka bertemu kembali dengan seseorang yang pernah ia tinggalkan.",
    chapters: [{ title: "Toko Buku di Ujung Jalan", text: `Hujan turun perlahan ketika Arka mendorong pintu toko buku tua. Aroma kertas dan kayu basah menyambutnya, sama seperti lima tahun lalu. Ia sebenarnya hanya ingin berteduh, tetapi langkahnya terhenti saat melihat perempuan di dekat jendela.\n\nPerempuan itu mengangkat kepala. Di tangannya ada buku bersampul cokelat dengan nama yang sudah lama Arka coba lupakan.\n\n“Kamu masih menyimpannya?” tanya Arka pelan.\n\nPerempuan itu menutup buku, lalu tersenyum tipis. “Aku menunggu pemiliknya kembali.”` }]
  },
  {
    id: "s2", title: "Di Balik Hujan", author: "Kirana Putri", genre: "Romansa",
    synopsis: "Setiap hujan menyimpan kenangan yang tak sempat selesai. Aluna masih mengingat seseorang yang pernah berjanji untuk kembali.",
    chapters: [{ title: "Janji di Halte", text: `Aluna selalu memilih bangku paling ujung di halte itu. Dari sana, ia bisa melihat jalan yang dulu dilewati Raka setiap sore. Hujan datang lagi, mengetuk atap halte seperti seseorang yang ingin mengingatkan janji lama.\n\nTiga tahun lalu, Raka pergi dengan satu kalimat: tunggu aku sampai hujan berikutnya. Sejak itu, Aluna berhenti menghitung musim dan mulai menghitung hujan.\n\nSebuah payung biru berhenti di sampingnya. Suara yang dikenalnya berkata, “Aku terlambat, ya?”` }]
  },
  {
    id: "s3", title: "Dunia Kedua", author: "R. Mahesa", genre: "Fantasi",
    synopsis: "Di balik pintu perpustakaan yang terkunci, Nara menemukan peta menuju dunia yang tak tercantum dalam atlas mana pun.",
    chapters: [{ title: "Pintu yang Tak Ada Kemarin", text: `Pintu itu tidak ada kemarin. Nara yakin karena ia sudah menghafal setiap lorong perpustakaan sejak kecil. Namun malam ini, di balik rak astronomi, sebuah pintu kayu berdiri dengan simbol bintang yang berdenyut lembut.\n\nSaat disentuh, peta kecil jatuh ke lantai. Garis-garisnya bergerak sendiri, membentuk jalan menuju tempat yang tak tercantum di atlas mana pun.\n\nNara menarik napas, lalu memutar gagang pintu.` }]
  },
  {
    id: "s4", title: "Surat Tanpa Nama", author: "Dimas Aruna", genre: "Misteri",
    synopsis: "Sebuah surat tanpa nama tiba setiap Jumat. Isinya selalu memuat kejadian yang belum terjadi.",
    chapters: [{ title: "Jumat Pagi", text: `Surat pertama tiba pada Jumat pagi, diselipkan di bawah pintu rumah Dira. Tidak ada perangko, alamat pengirim, atau tanda tangan. Hanya satu kalimat yang diketik rapi: jangan naik bus pukul tujuh lewat sepuluh.\n\nDira menganggapnya lelucon sampai ia melihat berita kecelakaan bus yang biasa ia tumpangi. Jumat berikutnya, surat kedua datang. Kali ini surat itu menyebut nama lengkapnya dan sebuah rahasia yang bahkan tak diketahui sahabatnya.\n\nDira mengunci pintu. Dari luar, seseorang mengetuk tiga kali.` }]
  },
  {
    id: "s5", title: "Arah Pulang", author: "Nadia Senja", genre: "Drama",
    synopsis: "Setelah bertahun-tahun pergi, Raka kembali ke kota kecil tempat ia tumbuh dan belajar berdamai dengan masa lalu.",
    chapters: [{ title: "Stasiun Kecil", text: `Kereta berhenti di stasiun kecil yang catnya mulai mengelupas. Raka turun dengan satu koper dan banyak hal yang belum berani ia katakan. Kota itu tidak berubah banyak: warung di depan stasiun masih menjual teh hangat, dan pohon ketapang masih menaungi jalan pulang.\n\nIa berjalan melewati rumah masa kecilnya, tetapi tidak masuk. Dari balik jendela terdengar tawa yang terasa akrab sekaligus jauh.\n\nUntuk pertama kalinya setelah bertahun-tahun, Raka bertanya-tanya apakah pulang berarti kembali ke tempat lama, atau berani meminta maaf kepada orang yang ditinggalkan.` }]
  },
  {
    id: "s6", title: "Bintang di Utara", author: "L. Adikara", genre: "Petualangan",
    synopsis: "Seorang penjaga mercusuar muda menerima tugas untuk menyalakan bintang yang padam.",
    chapters: [{ title: "Cahaya yang Hilang", text: `Malam ketika bintang utara padam, seluruh kompas di pulau itu berhenti bergerak. Laut menjadi hitam seperti tinta, dan kapal-kapal kehilangan arah. Lio, penjaga mercusuar termuda, menerima sebuah kotak dari kapten tua.\n\n“Cahayanya tidak hilang,” kata kapten. “Ia dicuri dan disembunyikan di tempat yang hanya bisa ditemukan oleh orang yang berani tersesat.”\n\nDi dalam kotak terdapat peta tanpa nama dan sebuah kunci dingin. Lio menyalakan lentera, lalu melangkah menuju dermaga yang belum pernah ia datangi.` }]
  }
];

const coverByGenre = {
  "Drama": "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85",
  "Romansa": "https://images.unsplash.com/photo-1518198388390-7d5b5d9b2f6f?auto=format&fit=crop&w=900&q=85",
  "Fantasi": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
  "Misteri": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
  "Petualangan": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
  "Fiksi ilmiah": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
  "Horor": "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=900&q=85"
};

const demoAccounts = {
  writer: { email: "penulis@ruangkata.test", password: "tulis123", name: "Penulis Demo", label: "Penulis" },
  editor: { email: "editor@ruangkata.test", password: "edit123", name: "Editor Demo", label: "Editor", portfolioCount: 4 },
  publisher: { email: "penerbit@ruangkata.test", password: "terbit123", name: "Penerbit Aksara Demo", label: "Penerbit", publisherId: "publisher-aksara" }
};

// Portofolio contoh untuk menjelaskan syarat editor; bukan bukti penerbitan nyata.
const editorPortfolio = [
  { title: "Kota yang Tidak Tidur", publisher: "Penerbit Lentera Demo", year: 2022, genre: "Drama", color: "#394B43" },
  { title: "Ruang di Antara Hujan", publisher: "Penerbit Aksara Demo", year: 2023, genre: "Romansa", color: "#7D514C" },
  { title: "Atlas Kehilangan", publisher: "Penerbit Sembilan Demo", year: 2024, genre: "Fiksi literer", color: "#596A84" },
  { title: "Di Balik Kaca", publisher: "Penerbit Aksara Demo", year: 2025, genre: "Misteri", color: "#6F6045" }
];

const demoPublishers = [
  { id: "publisher-aksara", name: "Penerbit Aksara Demo", email: "penerbit@ruangkata.test", focus: "Fiksi literer, drama, misteri, dan cerita reflektif.", description: "Penerbit contoh untuk demo pengajuan naskah dan komunikasi dengan penulis.", openForSubmissions: true }
];

const communities = [
  { id: "philosophers", name: "Philosophers Buddies", icon: "✦", description: "Filsafat, makna cerita, etika karakter, dan pertanyaan yang tidak sederhana." },
  { id: "writers", name: "Writers' Corner", icon: "✎", description: "Berbagi proses kreatif, bedah naskah, dan saran menulis." },
  { id: "fantasy", name: "Fantasy Forge", icon: "✧", description: "Worldbuilding, sistem sihir, makhluk, dan dunia fantasi." },
  { id: "romance", name: "Romansa & Rasa", icon: "♡", description: "Relasi karakter, slow burn, dialog, dan kisah emosional." }
];

const contests = [
  { id: "cerita-seribu", title: "Cerita 1.000 Kata", category: "FIKSI PENDEK", description: "Ciptakan cerita pendek yang utuh dan berkesan dalam batas 1.000 kata.", deadline: "30 November 2026", theme: "Tema bebas", format: "Maksimal 1.000 kata", minWords: 1, maxWords: 1000 },
  { id: "dunia-tiga-bab", title: "Dunia dalam Tiga Bab", category: "NOVEL MINI", description: "Bangun dunia, tokoh, dan konflik yang membuat pembaca ingin lanjut.", deadline: "15 Desember 2026", theme: "Fantasi atau fiksi spekulatif", format: "Tiga bab pembuka", minWords: null, maxWords: null },
  { id: "surat-masa-depan", title: "Surat untuk Diri di Masa Depan", category: "PROSA REFLEKTIF", description: "Tulis surat yang jujur, hangat, atau menggugat tentang diri dan waktu.", deadline: "20 Desember 2026", theme: "Refleksi dan pertumbuhan", format: "500-1.500 kata", minWords: 500, maxWords: 1500 }
];

const seedTopics = [
  { id: "t1", community: "philosophers", title: "Apakah karakter harus selalu bisa ditebus?", body: "Aku sedang menulis tokoh yang melakukan kesalahan besar. Menurut kalian, apa yang membuat perkembangan karakter terasa meyakinkan, bukan sekadar pembenaran?", author: "AksaraSenja", createdAt: "2026-10-22T09:00:00.000Z", replies: [{ id: "r1", author: "Mira", text: "Menurutku bukan semua kesalahan harus dimaafkan. Yang penting tokohnya menghadapi akibat tindakannya.", createdAt: "2026-10-22T10:00:00.000Z" }] },
  { id: "t2", community: "writers", title: "Bagaimana membuat dialog terasa natural?", body: "Dialogku sering terasa seperti karakter sedang menjelaskan sesuatu kepada pembaca. Ada tips supaya percakapan lebih hidup?", author: "KertasKosong", createdAt: "2026-10-23T12:00:00.000Z", replies: [] },
  { id: "t3", community: "fantasy", title: "Membangun sistem sihir yang konsisten", body: "Aku ingin sistem sihir yang punya batasan jelas. Hal apa yang biasanya kalian tentukan lebih dulu?", author: "MoonArchivist", createdAt: "2026-10-24T14:00:00.000Z", replies: [] },
  { id: "t4", community: "romance", title: "Slow burn vs. love at first sight", body: "Mana yang paling kalian suka baca, dan apa yang membuat hubungan karakter terasa punya chemistry?", author: "RuangRindu", createdAt: "2026-10-25T08:00:00.000Z", replies: [] }
];

let currentUser = readSession();
let currentPage = "home";
let pendingRouteAfterLogin = null;
let activeCategory = "Semua";
let currentNovel = null;
let currentChapterIndex = 0;
let previousScrollY = 0;
let selectedTextTarget = null;
let pendingCommentTarget = { scope: "novel" };
let currentTopicId = null;
let selectedContest = null;
let activeCommunity = "all";
let writerChapters = [{ title: "Bab 1", html: "", text: "" }];
let writerChapterIndex = 0;
let writerChapterLabel = "Bab";
let topicImageData = "";
let suggestionPosterData = "";
let adminContestPosterData = "";
let writerCoverData = "";
let publisherSubmissionCoverData = "";
let draftProfileAvatarData = "";
let pendingMessageFile = null;
let messageObjectUrls = [];
let expandedParagraphComments = new Set();
let expandNovelDiscussionAfterSubmit = false;
const MEDIA_DB_NAME = "ruangKataMedia";
const MEDIA_DB_STORE = "attachments";

/* Helpers: safe storage, text and rich text */

function readSession() {
  try {
    const session = JSON.parse(sessionStorage.getItem(KEYS.session) || "null");
    return session && ["writer", "editor", "publisher"].includes(session.role) ? session : null;
  } catch { return null; }
}
function readArray(key) {
  try {
    const data = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(data) ? data : [];
  } catch { return []; }
}
function saveArray(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch {
    alert("Penyimpanan browser penuh atau tidak tersedia. Data belum tersimpan.");
    return false;
  }
}

function getProfiles() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEYS.profiles) || "{}");
    return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
  } catch {
    return {};
  }
}

function getProfile(email) {
  return getProfiles()[email] || {};
}

function saveProfile(email, profile) {
  const profiles = getProfiles();
  profiles[email] = profile;
  try {
    localStorage.setItem(KEYS.profiles, JSON.stringify(profiles));
    return true;
  } catch {
    alert("Profil belum tersimpan. Ruang penyimpanan browser mungkin penuh.");
    return false;
  }
}

function getAccountName(email) {
  const account = Object.values(demoAccounts).find(item => item.email === email);
  return getProfile(email).name || account?.name || "Pengguna Ruang Kata";
}

function getAccountAvatar(email) {
  return getProfile(email).avatarData || "";
}

function openMediaDatabase() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("Penyimpanan file tidak tersedia di browser ini."));
      return;
    }

    const request = indexedDB.open(MEDIA_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(MEDIA_DB_STORE)) {
        database.createObjectStore(MEDIA_DB_STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Penyimpanan file gagal dibuka."));
  });
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("File tidak bisa dibaca."));
    reader.readAsDataURL(file);
  });
}

async function storeMessageAttachment(file) {
  const attachmentId = `attachment-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const details = { id: attachmentId, name: file.name, type: file.type || "application/octet-stream", size: file.size };

  try {
    const database = await openMediaDatabase();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction(MEDIA_DB_STORE, "readwrite");
      transaction.objectStore(MEDIA_DB_STORE).put({ ...details, blob: file });
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error || new Error("File gagal disimpan."));
      transaction.onabort = () => reject(transaction.error || new Error("Penyimpanan file dibatalkan."));
    });
    database.close();
    return details;
  } catch (error) {
    // The fallback is intentionally small to avoid filling localStorage with large files.
    if (file.size <= 600 * 1024) {
      return { ...details, dataUrl: await readFileAsDataURL(file) };
    }
    throw new Error("Browser tidak dapat menyimpan lampiran besar. Coba jalankan situs lewat Live Server, lalu kirim ulang file.");
  }
}

async function loadMessageAttachment(attachment) {
  if (!attachment) return "";
  if (attachment.dataUrl) return attachment.dataUrl;

  const database = await openMediaDatabase();
  const record = await new Promise((resolve, reject) => {
    const request = database.transaction(MEDIA_DB_STORE, "readonly").objectStore(MEDIA_DB_STORE).get(attachment.id);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error || new Error("Lampiran tidak dapat dibuka."));
  });
  database.close();
  if (!record?.blob) return "";
  const url = URL.createObjectURL(record.blob);
  messageObjectUrls.push(url);
  return url;
}

async function removeMessageAttachment(attachment) {
  if (!attachment?.id || attachment.dataUrl) return;
  try {
    const database = await openMediaDatabase();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction(MEDIA_DB_STORE, "readwrite");
      transaction.objectStore(MEDIA_DB_STORE).delete(attachment.id);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    database.close();
  } catch {
    // A deleted message remains removed from the visible conversation even if cleanup fails.
  }
}

function paintAvatar(element, name, avatarData) {
  if (!element) return;
  element.classList.toggle("has-photo", Boolean(avatarData));
  if (avatarData) {
    element.textContent = "";
    element.style.backgroundImage = `url("${avatarData}")`;
    element.setAttribute("aria-label", `Foto profil ${name}`);
  } else {
    element.style.backgroundImage = "";
    element.textContent = String(name || "RK").trim().split(/\s+/).map(part => part[0]).slice(0, 2).join("").toUpperCase() || "RK";
    element.setAttribute("aria-label", `Inisial ${name}`);
  }
}
function getNovels() {
  return readArray(KEYS.novels).map(novel => ({ ...novel, status: novel.status || "published" }));
}
function saveNovels(novels) { return saveArray(KEYS.novels, novels); }
function getComments() { return readArray(KEYS.comments); }
function saveComments(comments) { return saveArray(KEYS.comments, comments); }
function textElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}
function displayName() {
  if (currentUser) return currentUser.name;
  return "Pembaca";
}
function dateLabel(value) {
  if (!value) return "Baru saja";
  return new Date(value).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}
function driveImageUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  try {
    const url = new URL(raw);
    if (url.hostname === "drive.google.com" || url.hostname.endsWith(".drive.google.com")) {
      const match = url.pathname.match(/\/file\/d\/([^/]+)/);
      const id = match ? match[1] : url.searchParams.get("id");
      if (id && !url.pathname.startsWith("/uc")) return `https://drive.google.com/uc?export=view&id=${encodeURIComponent(id)}`;
    }
    return url.href;
  } catch { return ""; }
}
function sanitizeRichHTML(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(String(html || ""), "text/html");
  const allowed = new Set(["P", "DIV", "BR", "STRONG", "B", "EM", "I", "U", "UL", "OL", "LI", "BLOCKQUOTE", "IMG"]);
  const output = document.createElement("div");

  function copyNode(node, parent) {
    if (node.nodeType === Node.TEXT_NODE) {
      parent.append(document.createTextNode(node.nodeValue || ""));
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    if (!allowed.has(node.tagName)) {
      [...node.childNodes].forEach(child => copyNode(child, parent));
      return;
    }

    const clean = document.createElement(node.tagName.toLowerCase());
    if (node.tagName === "IMG") {
      const src = node.getAttribute("src") || "";
      if (!(src.startsWith("data:image/") || isSafeHttpUrl(src))) return;
      clean.setAttribute("src", src);
      clean.setAttribute("alt", (node.getAttribute("alt") || "Ilustrasi cerita").slice(0, 200));
      clean.className = "chapter-inline-image";
      parent.append(clean);
      return;
    }
    [...node.childNodes].forEach(child => copyNode(child, clean));
    parent.append(clean);
  }

  [...doc.body.childNodes].forEach(node => copyNode(node, output));
  return output.innerHTML;
}
function plainTextToHTML(text) {
  return String(text || "").split(/\n\s*\n/).filter(Boolean)
    .map(part => `<p>${escapeHTML(part).replace(/\n/g, "<br>")}</p>`).join("");
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}
function chaptersOf(novel) {
  if (Array.isArray(novel.chapters) && novel.chapters.length) {
    return novel.chapters.map(chapter => ({
      title: chapter.title || "Tanpa judul",
      html: chapter.html || "",
      text: chapter.text || ""
    }));
  }
  if (novel.chapterText) return [{ title: novel.chapterTitle || "Bab 1", text: novel.chapterText, html: "" }];
  return [];
}
function paragraphsOf(chapter) {
  const html = sanitizeRichHTML(chapter.html || "");
  if (html.trim()) {
    const template = document.createElement("template");
    template.innerHTML = html;
    const nodes = [...template.content.childNodes];
    const paragraphs = [];

    nodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) return;
      if (node.nodeType === Node.ELEMENT_NODE && ["P", "DIV", "BLOCKQUOTE"].includes(node.tagName)) {
        paragraphs.push({ html: sanitizeRichHTML(node.innerHTML), text: node.textContent || "" });
      } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "BR") {
        paragraphs.push({ html: "", text: "" });
      } else {
        paragraphs.push({ html: node.nodeType === Node.ELEMENT_NODE ? sanitizeRichHTML(node.outerHTML) : "", text: node.textContent || "" });
      }
    });

    const nonEmpty = paragraphs.filter(p => p.text.trim() || p.html.trim());
    if (nonEmpty.length) return nonEmpty;
  }

  return String(chapter.text || "").trim().split(/\n\s*\n/).filter(Boolean)
    .map(text => ({ html: "", text }));
}
function getPublishedNovels() {
  const published = [
    ...getNovels().filter(novel => novel.status === "published").slice().reverse(),
    ...starterNovels
  ];
  const unique = new Map();
  published.forEach(novel => {
    const title = String(novel.title || "").trim().toLocaleLowerCase("id");
    const author = String(novel.author || novel.penName || "").trim().toLocaleLowerCase("id");
    const key = `${title}::${author}`;
    const existing = unique.get(key);
    const stamp = new Date(novel.reviewedAt || novel.savedAt || novel.createdAt || 0).getTime();
    const existingStamp = existing ? new Date(existing.reviewedAt || existing.savedAt || existing.createdAt || 0).getTime() : -1;
    if (!existing || stamp >= existingStamp) unique.set(key, novel);
  });
  return [...unique.values()];
}

/* IMAGE UPLOADS: images are compressed before local browser storage. */
function imageFileToDataURL(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve("");
    if (!file.type.startsWith("image/")) {
      reject(new Error("Pilih file gambar seperti JPG, PNG, atau WebP."));
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      reject(new Error("Ukuran gambar maksimal 8 MB sebelum dikompres."));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Gambar gagal dibaca."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("File gambar tidak dapat dibuka."));
      image.onload = () => {
        const maxEdge = 900;
        const scale = Math.min(1, maxEdge / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFCF6";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.70));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function setImagePreview(dataURL, imageId, messageId, emptyText) {
  const image = $(imageId);
  const message = $(messageId);
  if (dataURL) {
    image.src = dataURL;
    image.hidden = false;
    message.hidden = true;
  } else {
    image.removeAttribute("src");
    image.hidden = true;
    message.hidden = false;
    message.textContent = emptyText;
  }
}

function isSafeHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function isInstagramUrl(value) {
  try {
    const url = new URL(value);
    const validHost = url.hostname === "instagram.com" || url.hostname.endsWith(".instagram.com");
    const validPostPath = /^\/(p|reel|reels|tv|stories)\//i.test(url.pathname);
    return url.protocol === "https:" && validHost && validPostPath;
  } catch {
    return false;
  }
}

function getApprovedCountForCurrentEditor() {
  // Legacy metric: karya yang disetujui akun editor di Ruang Kata.
  if (currentUser?.role !== "editor") return 0;
  return getNovels().filter(novel => novel.status === "published" && novel.reviewedBy === currentUser.email).length;
}
function getEligibleEditorPortfolio() {
  if (currentUser?.role !== "editor") return [];
  // Di aplikasi nyata portofolio ini harus berasal dari akun yang terverifikasi server.
  return editorPortfolio.filter(work => work.title && work.publisher && Number.isFinite(work.year));
}
function isForumAdmin() {
  return currentUser?.role === "editor" && getEligibleEditorPortfolio().length >= 4;
}
function renderEditorAdminStatus() {
  const gate = $("#editorAdminGate");
  const panel = $("#communityAdminPanel");
  if (!gate || !panel) return;
  if (currentUser?.role !== "editor") {
    gate.replaceChildren(); panel.hidden = true;
    const adminNav = $("#editorAdminNavLink"); if (adminNav) adminNav.hidden = true;
    return;
  }
  const portfolio = getEligibleEditorPortfolio();
  const unlocked = portfolio.length >= 4;
  gate.replaceChildren();
  gate.className = `editor-admin-gate${unlocked ? " unlocked" : ""}`;
  gate.append(textElement("p", "eyebrow", unlocked ? "PORTOFOLIO EDITOR MEMENUHI SYARAT (DEMO)" : "PORTOFOLIO EDITOR"));
  gate.append(textElement("h3", "", unlocked ? "Akses pengelolaan komunitas tersedia." : "Lengkapi portofolio terbitan."));
  gate.append(textElement("p", "muted small", unlocked
    ? `Portofolio akun ini memuat ${portfolio.length} karya terbit dengan data penerbit dan tahun. Ini contoh demo, bukan verifikasi penerbitan sungguhan.`
    : `Tambahkan bukti minimal 4 karya yang diterbitkan penerbit. Progres: ${portfolio.length}/4.`));
  panel.hidden = !unlocked;
  const adminNav = $("#editorAdminNavLink"); if (adminNav) adminNav.hidden = !unlocked;
  if (unlocked) { renderContestSuggestionQueue(); renderManagedContests(); renderManagedTopics(); }
  else {
    topicImageData = "";
    const topicImageInput = $("#topicImageInput"); if (topicImageInput) topicImageInput.value = "";
    setImagePreview("", "#topicImagePreview", "#topicImagePreviewText", "Belum ada gambar.");
  }
}

/* Catalog */

function makeCover(novel) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "cover-button";
  button.setAttribute("aria-label", `Baca ${novel.title}`);

  const art = document.createElement("div");
  art.className = "cover-art";
  const placeholder = document.createElement("span");
  placeholder.className = "cover-placeholder";
  const image = document.createElement("img");
  image.className = "cover-photo";
  image.alt = `Sampul ${novel.title}`;
  image.loading = "lazy";
  image.src = driveImageUrl(novel.cover) || coverByGenre[novel.genre] || coverByGenre.Drama;
  image.onerror = () => image.remove();

  const shade = document.createElement("span");
  shade.className = "cover-shade";
  art.append(placeholder, image, shade,
    textElement("span", "cover-title", novel.title),
    textElement("span", "cover-author", `Oleh ${novel.author || novel.penName || "Penulis Ruang Kata"}`));
  button.append(art);
  button.addEventListener("click", () => openReader(novel));
  return button;
}
function makeBookCard(novel) {
  const card = document.createElement("article");
  card.className = "book-card";
  card.append(makeCover(novel));

  const meta = document.createElement("div");
  meta.className = "novel-meta";
  const title = textElement("h3", "", novel.title);
  const author = textElement("p", "", novel.author || novel.penName || "Penulis Ruang Kata");
  const genre = textElement("span", "genre-tag", novel.genre || "Novel");
  meta.append(title, author, genre);
  card.append(meta);
  return card;
}
function renderBooks() {
  const all = getPublishedNovels();
  const query = $("#searchInput").value.trim().toLocaleLowerCase("id");
  const visible = all.filter(novel => {
    const genreMatch = activeCategory === "Semua" || novel.genre === activeCategory;
    const searchable = `${novel.title} ${novel.author || novel.penName || ""} ${novel.genre || ""}`.toLocaleLowerCase("id");
    return genreMatch && searchable.includes(query);
  });
  $("#allNovels").replaceChildren(...visible.map(makeBookCard));
  $("#featuredNovels").replaceChildren(...all.slice(0, 3).map(makeBookCard));
  $("#emptyState").hidden = visible.length > 0;
}

/* Reader: a dedicated page, not a small modal */

function openReader(novel) {
  currentNovel = novel;
  currentChapterIndex = 0;
  previousScrollY = window.scrollY;
  selectedTextTarget = null;
  expandedParagraphComments = new Set();
  expandNovelDiscussionAfterSubmit = false;
  $("#readingPage").hidden = false;
  document.body.classList.add("reading-mode");
  renderReader();
  $("#readingPage").scrollTop = 0;
}
function closeReader() {
  $("#readingPage").hidden = true;
  document.body.classList.remove("reading-mode");
  currentNovel = null;
  selectedTextTarget = null;
  window.scrollTo(0, previousScrollY);
}
function renderReader() {
  if (!currentNovel) return;
  const novel = currentNovel;
  const chapters = chaptersOf(novel);

  $("#readerTitle").textContent = novel.title;
  $("#readerGenre").textContent = (novel.genre || "NOVEL").toUpperCase();
  $("#readerAuthor").textContent = `Oleh ${novel.author || novel.penName || "Penulis Ruang Kata"}`;
  $("#readerSynopsis").textContent = novel.synopsis || "Belum ada sinopsis.";

  const cover = $("#readerCover");
  cover.classList.remove("reader-empty-cover");
  cover.alt = `Sampul ${novel.title}`;
  cover.src = driveImageUrl(novel.cover) || coverByGenre[novel.genre] || coverByGenre.Drama;
  cover.onerror = () => {
    cover.removeAttribute("src");
    cover.classList.add("reader-empty-cover");
  };

  const select = $("#readerChapterSelect");
  select.replaceChildren();
  chapters.forEach((chapter, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${novel.chapterLabel || "Bab"} ${index + 1} : ${chapter.title || "Tanpa judul"}`;
    select.append(option);
  });

  if (!chapters.length) {
    $("#readerChapterTitle").textContent = "Belum ada bab";
    $("#readerContent").replaceChildren(textElement("p", "no-comments", "Novel ini belum memiliki isi bab."));
    select.disabled = true;
    $("#previousChapter").disabled = true;
    $("#nextChapter").disabled = true;
    renderNovelComments();
    return;
  }

  select.disabled = false;
  currentChapterIndex = Math.min(currentChapterIndex, chapters.length - 1);
  select.value = String(currentChapterIndex);

  const chapter = chapters[currentChapterIndex];
  $("#readerChapterNumber").textContent = `${(novel.chapterLabel || "Bab").toUpperCase()} ${currentChapterIndex + 1} DARI ${chapters.length}`;
  $("#readerChapterTitle").textContent = chapter.title || `Bab ${currentChapterIndex + 1}`;
  $("#readerProgress").textContent = `${Math.round((currentChapterIndex + 1) / chapters.length * 100)}% perjalanan membaca`;
  $("#previousChapter").disabled = currentChapterIndex === 0;
  $("#nextChapter").disabled = currentChapterIndex >= chapters.length - 1;
  $("#selectionActionArea").hidden = true;
  selectedTextTarget = null;
  renderChapterText(chapter);
  renderNovelComments();
}
function renderChapterText(chapter) {
  const container = $("#readerContent");
  container.replaceChildren();

  paragraphsOf(chapter).forEach((paragraph, paragraphIndex) => {
    const section = document.createElement("section");
    section.className = "reader-paragraph";
    section.dataset.paragraphIndex = String(paragraphIndex);

    const text = document.createElement("div");
    text.className = "reader-paragraph-text";
    if (paragraph.html) text.innerHTML = sanitizeRichHTML(paragraph.html);
    else text.textContent = paragraph.text;
    section.append(text);

    const actions = document.createElement("div");
    actions.className = "paragraph-actions";
    const commentButton = textElement("button", "inline-comment-button", "+ Komentari paragraf");
    commentButton.type = "button";
    commentButton.addEventListener("click", () => {
      pendingCommentTarget = {
        scope: "paragraph",
        chapterIndex: currentChapterIndex,
        paragraphIndex,
        quote: ""
      };
      showCommentComposer();
    });
    actions.append(commentButton);
    section.append(actions);

    const comments = getComments().filter(item =>
      item.novelId === currentNovel.id &&
      item.chapterIndex === currentChapterIndex &&
      item.paragraphIndex === paragraphIndex &&
      ["paragraph", "selection"].includes(item.scope)
    );

    // Keep the reading page clean. Show the disclosure only when a paragraph has comments.
    if (comments.length) {
      const disclosure = document.createElement("details");
      disclosure.className = "paragraph-comments-disclosure";
      disclosure.open = expandedParagraphComments.has(`${currentChapterIndex}:${paragraphIndex}`);

      const summary = textElement("summary", "", "");
      const updateCommentLabel = () => {
        summary.textContent = disclosure.open
          ? `Sembunyikan komentar (${comments.length})`
          : `Lihat komentar (${comments.length})`;
      };
      disclosure.addEventListener("toggle", updateCommentLabel);
      updateCommentLabel();
      disclosure.append(summary);

      const commentList = document.createElement("div");
      commentList.className = "paragraph-comments";
      comments.forEach(item => commentList.append(makeCommentItem(item)));
      disclosure.append(commentList);
      section.append(disclosure);
    }

    container.append(section);
  });

  if (!container.children.length) {
    container.append(textElement("p", "no-comments", "Bab ini belum memiliki teks."));
  }
}
function makeCommentItem(comment) {
  const article = document.createElement("article");
  article.className = "comment-item";

  const header = document.createElement("div");
  header.className = "comment-item-header";
  header.append(textElement("strong", "", comment.author || "Pembaca"));

  const time = document.createElement("time");
  time.dateTime = comment.createdAt || "";
  time.textContent = dateLabel(comment.createdAt);
  header.append(time);
  article.append(header);

  if (comment.scope === "selection" && comment.quote) {
    article.append(textElement("blockquote", "comment-quote-small", `“${comment.quote}”`));
  }
  article.append(textElement("p", "", comment.text));
  return article;
}
function renderNovelComments() {
  const container = $("#novelComments");
  container.replaceChildren();
  if (!currentNovel) return;

  const comments = getComments().filter(item =>
    item.novelId === currentNovel.id && item.scope === "novel"
  );
  if (!comments.length) return;

  const disclosure = document.createElement("details");
  disclosure.className = "novel-comments-disclosure";
  disclosure.open = expandNovelDiscussionAfterSubmit;
  const summary = textElement("summary", "", "");
  const updateDiscussionLabel = () => {
    summary.textContent = disclosure.open
      ? `Sembunyikan diskusi pembaca (${comments.length})`
      : `Lihat diskusi pembaca (${comments.length})`;
  };
  disclosure.addEventListener("toggle", updateDiscussionLabel);
  updateDiscussionLabel();
  disclosure.append(summary);

  const commentList = document.createElement("div");
  commentList.className = "novel-comments-list";
  comments.forEach(comment => commentList.append(makeCommentItem(comment)));
  disclosure.append(commentList);
  container.append(disclosure);
}
function showCommentComposer() {
  const target = pendingCommentTarget;
  let label = "Komentar tentang novel";
  let quote = "";

  if (target.scope === "paragraph") label = `Komentar untuk paragraf ${target.paragraphIndex + 1}, Bab ${target.chapterIndex + 1}`;
  if (target.scope === "selection") {
    label = `Komentar untuk kutipan di Bab ${target.chapterIndex + 1}`;
    quote = target.quote || "";
  }

  $("#commentTargetLabel").textContent = label;
  $("#commentQuote").textContent = quote ? `“${quote}”` : "";
  $("#commentQuote").hidden = !quote;
  $("#commentComposer").hidden = false;

  const savedName = localStorage.getItem(KEYS.readerName) || currentUser?.name || "";
  if (savedName && !$("#readerName").value) $("#readerName").value = savedName;
  $("#readerDiscussion").scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => $("#commentText").focus(), 200);
}
$("#readerContent").addEventListener("mouseup", captureSelection);
$("#readerContent").addEventListener("touchend", () => setTimeout(captureSelection, 80));
function captureSelection() {
  const selection = window.getSelection();
  const quote = selection ? selection.toString().trim() : "";
  if (!quote || quote.length > 500) return;

  const anchor = selection.anchorNode;
  const element = anchor && (anchor.nodeType === Node.ELEMENT_NODE ? anchor : anchor.parentElement);
  const paragraph = element && element.closest(".reader-paragraph");
  if (!paragraph || !currentNovel) return;

  selectedTextTarget = {
    scope: "selection",
    chapterIndex: currentChapterIndex,
    paragraphIndex: Number(paragraph.dataset.paragraphIndex),
    quote
  };
  $("#selectedQuotePreview").textContent = `“${quote}”`;
  $("#selectionActionArea").hidden = false;
}
$("#commentSelectedTextButton").addEventListener("click", () => {
  if (!selectedTextTarget) return;
  pendingCommentTarget = { ...selectedTextTarget };
  showCommentComposer();
});
$("#generalCommentButton").addEventListener("click", () => {
  pendingCommentTarget = { scope: "novel" };
  showCommentComposer();
});
$("#cancelCommentButton").addEventListener("click", () => { $("#commentComposer").hidden = true; });
$("#commentForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!currentNovel) return;

  const author = $("#readerName").value.trim();
  const text = $("#commentText").value.trim();
  if (!author || !text) return;

  const target = pendingCommentTarget || { scope: "novel" };
  const comments = getComments();
  comments.push({
    id: `comment-${Date.now()}`,
    novelId: currentNovel.id,
    scope: target.scope,
    chapterIndex: target.chapterIndex ?? null,
    paragraphIndex: target.paragraphIndex ?? null,
    quote: target.quote || "",
    author,
    text,
    createdAt: new Date().toISOString()
  });
  if (!saveComments(comments)) return;

  localStorage.setItem(KEYS.readerName, author);
  if (target.scope === "novel") {
    expandNovelDiscussionAfterSubmit = true;
  } else {
    const targetChapter = target.chapterIndex ?? currentChapterIndex;
    const targetParagraph = target.paragraphIndex;
    expandedParagraphComments.add(`${targetChapter}:${targetParagraph}`);
  }

  $("#commentText").value = "";
  $("#commentComposer").hidden = true;
  renderChapterText(chaptersOf(currentNovel)[currentChapterIndex] || { text: "" });
  renderNovelComments();
});
$("#readerChapterSelect").addEventListener("change", event => {
  currentChapterIndex = Number(event.target.value);
  $("#readingPage").scrollTop = 0;
  renderReader();
});
$("#previousChapter").addEventListener("click", () => {
  if (currentChapterIndex > 0) { currentChapterIndex--; renderReader(); $("#readingPage").scrollTop = 0; }
});
$("#nextChapter").addEventListener("click", () => {
  if (currentNovel && currentChapterIndex < chaptersOf(currentNovel).length - 1) {
    currentChapterIndex++;
    renderReader();
    $("#readingPage").scrollTop = 0;
  }
});
$("#readerBackButton").addEventListener("click", closeReader);

/* Writer editor and chapters */

let writerDraft = null;
const writerFields = {
  title: $("#novelTitle"),
  genre: $("#novelGenre"),
  penName: $("#penName"),
  synopsis: $("#novelSynopsis"),
  cover: $("#coverUrl")
};

function captureCurrentChapter() {
  if (!writerChapters[writerChapterIndex]) return;
  const html = sanitizeRichHTML($("#chapterEditor").innerHTML);
  const text = $("#chapterEditor").innerText.trim();

  writerChapters[writerChapterIndex] = {
    title: $("#chapterTitleInput").value.trim(),
    html,
    text
  };
}
function updateWordCount() {
  const text = $("#chapterEditor").innerText.trim();
  const words = text ? text.split(/\s+/).length : 0;
  const characters = text.length;
  $("#wordCount").textContent = `${words} kata · ${characters} karakter`;
}
function renderWriterChapter() {
  const chapter = writerChapters[writerChapterIndex] || { title: "", html: "", text: "" };
  $("#chapterTitleInput").value = chapter.title || "";
  writerChapterLabel = ( $("#chapterLabelInput")?.value || "Bab").trim() || "Bab";
  $("#chapterEditor").innerHTML = sanitizeRichHTML(chapter.html || plainTextToHTML(chapter.text || ""));
  $("#writerChapterSelect").replaceChildren();

  writerChapters.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${writerChapterLabel} ${index + 1} : ${item.title || "Tanpa judul"}`;
    $("#writerChapterSelect").append(option);
  });

  $("#writerChapterSelect").value = String(writerChapterIndex);
  $("#removeChapterButton").disabled = writerChapters.length <= 1;
  updateWordCount();
}
function saveDraftData() {
  captureCurrentChapter();

  return {
    title: writerFields.title.value.trim(),
    genre: writerFields.genre.value,
    penName: writerFields.penName.value.trim(),
    synopsis: writerFields.synopsis.value.trim(),
    cover: writerCoverData || driveImageUrl(writerFields.cover.value.trim()),
    chapterLabel: ( $("#chapterLabelInput")?.value || "Bab").trim() || "Bab",
    chapters: writerChapters.map(chapter => ({ ...chapter }))
  };
}
function resetWriterForm() {
  $("#novelForm").reset();
  delete $("#novelForm").dataset.editId;
  writerCoverData = "";
  const coverFile = $("#coverFileInput"); if (coverFile) coverFile.value = "";
  writerChapters = [{ title: "Bab 1", html: "", text: "" }];
  writerChapterIndex = 0;
  if ($("#chapterLabelInput")) $("#chapterLabelInput").value = "Bab";
  $("#submitNovelButton").textContent = "Kirim ke Editor";
  $("#proofreadingResults").replaceChildren(textElement("p", "muted small", "Hasil pemeriksaan akan muncul di sini."));
  renderWriterChapter();
  updateCoverPreview();
}
function fillWriterForm(novel) {
  writerFields.title.value = novel.title || "";
  writerFields.genre.value = novel.genre || "Romansa";
  writerFields.penName.value = novel.penName || novel.author || "";
  writerFields.synopsis.value = novel.synopsis || "";
  if ($("#chapterLabelInput")) $("#chapterLabelInput").value = novel.chapterLabel || "Bab";
  if (String(novel.cover || "").startsWith("data:image/")) {
    writerCoverData = novel.cover;
    writerFields.cover.value = "";
    const coverFile = $("#coverFileInput"); if (coverFile) coverFile.value = "";
  } else {
    writerCoverData = "";
    writerFields.cover.value = novel.cover || "";
  }

  writerChapters = chaptersOf(novel).map(chapter => ({
    title: chapter.title || "",
    html: sanitizeRichHTML(chapter.html || plainTextToHTML(chapter.text || "")),
    text: chapter.text || ""
  }));
  if (!writerChapters.length) writerChapters = [{ title: "Bab 1", html: "", text: "" }];
  writerChapterIndex = 0;
  renderWriterChapter();
  updateCoverPreview();
}
function writerDraftKey() {
  return `${KEYS.draft}_${(currentUser?.email || "guest").replace(/[^a-z0-9@._-]/gi, "_")}`;
}
function saveDraft() {
  if (currentUser?.role !== "writer") {
    alert("Masuk sebagai penulis terlebih dahulu.");
    return;
  }

  const data = saveDraftData();
  const hasContent = Boolean(data.title || data.synopsis || data.chapters.some(chapter => chapter.text.trim()));
  if (!hasContent) {
    alert("Isi minimal judul, sinopsis, atau sebagian naskah sebelum menyimpan draf.");
    return;
  }

  const novels = getNovels();
  const editId = $("#novelForm").dataset.editId;
  const index = novels.findIndex(novel =>
    novel.id === editId && novel.ownerEmail === currentUser.email
  );
  const old = index >= 0 ? novels[index] : {};
  const now = new Date().toISOString();
  const draft = {
    ...old,
    ...data,
    title: data.title || old.title || "Draf tanpa judul",
    id: editId || `draft-${Date.now()}`,
    author: data.penName || old.author || currentUser.name,
    ownerEmail: currentUser.email,
    status: "draft",
    editorNote: old.editorNote || "",
    createdAt: old.createdAt || now,
    savedAt: now
  };

  if (index >= 0) novels[index] = draft;
  else novels.push(draft);
  if (!saveNovels(novels)) return;

  $("#novelForm").dataset.editId = draft.id;
  $("#saveStatus").textContent = "Draf tersimpan. Kamu bisa menemukannya di halaman Karyaku.";
  renderMyNovels();
}
function loadDraft() {
  resetWriterForm();
  try {
    const draft = JSON.parse(localStorage.getItem(writerDraftKey()) || "null");
    if (draft) fillWriterForm(draft);
  } catch {}
}
$("#writerChapterSelect").addEventListener("change", event => {
  captureCurrentChapter();
  writerChapterIndex = Number(event.target.value);
  renderWriterChapter();
});
$("#chapterTitleInput").addEventListener("input", () => {
  captureCurrentChapter();
  const option = $("#writerChapterSelect").options[writerChapterIndex];
  if (option) option.textContent = `${($("#chapterLabelInput")?.value || "Bab").trim() || "Bab"} ${writerChapterIndex + 1} : ${$("#chapterTitleInput").value || "Tanpa judul"}`;
});
$("#chapterEditor").setAttribute("tabindex", "0");
$("#chapterEditor").setAttribute("contenteditable", "true");
$("#chapterEditor").addEventListener("input", () => {
  captureCurrentChapter();
  updateWordCount();
});
$("#chapterEditor").addEventListener("blur", () => {
  captureCurrentChapter();
});

let savedEditorRange = null;
$("#chapterEditor").addEventListener("mouseup", rememberEditorRange);
$("#chapterEditor").addEventListener("keyup", rememberEditorRange);
function rememberEditorRange() {
  const selection = window.getSelection();
  if (selection && selection.rangeCount && $("#chapterEditor").contains(selection.anchorNode)) {
    savedEditorRange = selection.getRangeAt(0).cloneRange();
  }
}
$("#insertChapterImageButton")?.addEventListener("mousedown", rememberEditorRange);
$("#insertChapterImageButton")?.addEventListener("click", () => $("#chapterImageInput").click());
$("#chapterImageInput")?.addEventListener("change", async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const dataURL = await imageFileToDataURL(file);
    const editor = $("#chapterEditor");
    editor.focus();
    const image = document.createElement("img");
    image.src = dataURL;
    image.alt = file.name.replace(/\.[^.]+$/, "") || "Ilustrasi cerita";
    image.className = "chapter-inline-image";
    const range = savedEditorRange;
    if (range && editor.contains(range.commonAncestorContainer)) {
      range.deleteContents();
      range.insertNode(image);
      const spacer = document.createElement("p");
      spacer.innerHTML = "<br>";
      image.after(spacer);
      const nextRange = document.createRange();
      nextRange.setStart(spacer, 0);
      nextRange.collapse(true);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(nextRange);
    } else {
      editor.append(image, document.createElement("p"));
    }
    captureCurrentChapter();
    updateWordCount();
    $("#saveStatus").textContent = "Gambar ditambahkan ke naskah. Simpan draf untuk menyimpan perubahan.";
  } catch (error) {
    alert(error.message || "Gambar tidak dapat ditambahkan.");
  } finally {
    event.target.value = "";
  }
});
$("#chapterLabelInput")?.addEventListener("input", () => {
  const label = $("#chapterLabelInput").value.trim() || "Bab";
  const option = $("#writerChapterSelect").options[writerChapterIndex];
  if (option) option.textContent = `${label} ${writerChapterIndex + 1} : ${$("#chapterTitleInput").value || "Tanpa judul"}`;
});
$("#addChapterButton").addEventListener("click", () => {
  captureCurrentChapter();
  writerChapters.push({ title: `${($("#chapterLabelInput")?.value || "Bab").trim() || "Bab"} ${writerChapters.length + 1}`, html: "", text: "" });
  writerChapterIndex = writerChapters.length - 1;
  renderWriterChapter();
  $("#chapterTitleInput").focus();
});
$("#removeChapterButton").addEventListener("click", () => {
  if (writerChapters.length <= 1) return;
  if (!confirm(`Hapus Bab ${writerChapterIndex + 1} dari draf?`)) return;
  writerChapters.splice(writerChapterIndex, 1);
  writerChapterIndex = Math.max(0, writerChapterIndex - 1);
  renderWriterChapter();
});
$("#saveDraftButton").addEventListener("click", saveDraft);

/* Word-like formatting toolbar */
document.querySelectorAll(".editor-toolbar [data-command]").forEach(button => {
  button.addEventListener("mousedown", event => event.preventDefault());
  button.addEventListener("click", () => {
    $("#chapterEditor").focus();
    document.execCommand(button.dataset.command, false, null);
    captureCurrentChapter();
    updateWordCount();
  });
});

/* Basic proofreading helpers */
function getEditorText() {
  return $("#chapterEditor").innerText.replace(/\u00A0/g, " ");
}
const commonNonstandardSpellings = {
  "aktifitas": { correct: "aktivitas", reason: "Bentuk baku yang digunakan dalam bahasa Indonesia adalah ‘aktivitas’." },
  "ijin": { correct: "izin", reason: "Bentuk baku: ‘izin’." },
  "resiko": { correct: "risiko", reason: "Bentuk baku: ‘risiko’." },
  "sekedar": { correct: "sekadar", reason: "Bentuk baku: ‘sekadar’." },
  "silahkan": { correct: "silakan", reason: "Bentuk baku: ‘silakan’." },
  "praktek": { correct: "praktik", reason: "Bentuk baku: ‘praktik’." },
  "apotik": { correct: "apotek", reason: "Bentuk baku: ‘apotek’." },
  "nasehat": { correct: "nasihat", reason: "Bentuk baku: ‘nasihat’." },
  "analisa": { correct: "analisis", reason: "Untuk nomina bermakna penguraian, bentuk bakunya ‘analisis’; sesuaikan jika yang dimaksud bentuk verba lain." },
  "kwalitas": { correct: "kualitas", reason: "Bentuk baku: ‘kualitas’." },
  "kwitansi": { correct: "kuitansi", reason: "Bentuk baku: ‘kuitansi’." },
  "terimakasih": { correct: "terima kasih", reason: "Ungkapan ini ditulis terpisah: ‘terima kasih’." },
  "kerjasama": { correct: "kerja sama", reason: "Gabungan kata ini ditulis terpisah: ‘kerja sama’." },
  "merubah": { correct: "mengubah", reason: "Kata dasar ‘ubah’ membentuk verba ‘mengubah’, bukan ‘merubah’." },
  "sekedar": { correct: "sekadar", reason: "Bentuk baku: ‘sekadar’." }
};
function locationAt(text, index) {
  const before = text.slice(0, index);
  const line = before.split("\n").length;
  const lastNewline = before.lastIndexOf("\n");
  const column = index - lastNewline;
  const lineText = (text.split("\n")[line - 1] || "").trim();
  return { line, column, lineText };
}
function findProofIssues(text) {
  const found = [];
  const add = (index, length, title, reason, suggestion = "", lookupWord = "") => {
    const loc = locationAt(text, index);
    found.push({ index, length, ...loc, title, reason, suggestion, lookupWord, type: "warning" });
  };
  const rules = [
    { regex: /[\t ]{2,}/g, title: "Spasi ganda", reason: "Antarkata biasanya cukup dipisahkan satu spasi.", suggestion: "Gunakan satu spasi." },
    { regex: /[\t ]+([,;:!?])/g, title: "Spasi sebelum tanda baca", reason: "Tanda baca melekat pada kata sebelumnya, tanpa spasi di depannya.", suggestion: "Hapus spasi sebelum tanda baca." },
    { regex: /([,;:!?])(?=[A-Za-zÀ-ÿ0-9“‘"(])/g, title: "Kemungkinan spasi hilang setelah tanda baca", reason: "Jika kalimat berlanjut, tanda baca umumnya diikuti spasi. Periksa konteks dialog dan tanda petik.", suggestion: "Tambahkan satu spasi jika kalimat berlanjut." },
    { regex: /([!?])\1+/g, title: "Tanda baca berulang", reason: "Tanda tanya/seru berulang sering tidak diperlukan dalam naskah formal; gaya dialog boleh dipertahankan jika disengaja.", suggestion: "Gunakan satu tanda baca, kecuali pengulangan memang gaya tokoh." }
  ];
  rules.forEach(rule => {
    let match;
    while ((match = rule.regex.exec(text)) !== null) add(match.index, match[0].length, rule.title, rule.reason, rule.suggestion);
  });
  const wordRegex = /[A-Za-zÀ-ÿ]+/g;
  let match;
  while ((match = wordRegex.exec(text)) !== null) {
    const word = match[0];
    const correction = commonNonstandardSpellings[word.toLocaleLowerCase("id")];
    if (correction) add(match.index, word.length, `Periksa kata “${word}”`, correction.reason, `Saran: ${correction.correct}`, correction.correct);
  }
  // Common preposition spacing errors. These are heuristics; context still matters.
  const prepositionPatterns = [
    { regex: /\bdi(atas|bawah|depan|belakang|sana|sini|mana|antara|dalam|luar|samping|tengah)\b/gi, correction: (_, word) => `di ${word}`, reason: "Kata depan ‘di’ ditulis terpisah dari kata yang menunjukkan tempat." },
    { regex: /\bke(atas|bawah|depan|belakang|sana|sini|mana|dalam|luar|samping|tengah)\b/gi, correction: (_, word) => `ke ${word}`, reason: "Kata depan ‘ke’ ditulis terpisah dari kata yang menunjukkan arah/tempat." }
  ];
  prepositionPatterns.forEach(rule => {
    let m;
    while ((m = rule.regex.exec(text)) !== null) {
      const replacement = m[0].replace(/^(di|ke)/i, x => x.toLowerCase() + " ");
      add(m.index, m[0].length, `Kemungkinan kata depan menempel: “${m[0]}”`, rule.reason, `Saran: ${replacement}`, replacement.split(/\s+/).pop());
    }
  });
  // A paragraph missing terminal punctuation is a note, not an automatic error.
  let offset = 0;
  text.split("\n").forEach(lineText => {
    const trimmed = lineText.trim();
    if (trimmed && !/[.!?…][”’"')\]]?$/.test(trimmed)) {
      const local = lineText.indexOf(trimmed);
      add(offset + Math.max(0, local), trimmed.length, "Paragraf mungkin belum ditutup tanda baca", "Kalimat naratif biasanya diakhiri tanda baca. Dialog terputus, judul, dan gaya sastra dapat menjadi pengecualian.", "Periksa akhir kalimat secara manual.");
    }
    offset += lineText.length + 1;
  });
  // Avoid duplicate reports at the exact same location from overlapping generic rules.
  const seen = new Set();
  return found.sort((a,b) => a.index - b.index).filter(item => {
    const key = `${item.index}|${item.title}`;
    if (seen.has(key)) return false;
    seen.add(key); return true;
  });
}
function renderProofIssues(resultsBox, text, issues) {
  resultsBox.replaceChildren();
  if (!text.trim()) {
    resultsBox.append(textElement("p", "proof-result", "Isi naskah terlebih dahulu, lalu tekan Periksa naskah."));
    return;
  }
  if (!issues.length) {
    resultsBox.append(textElement("p", "proof-result good", "Tidak ada pola masalah yang dikenali pada pemeriksaan ini. Ini bukan jaminan seluruh kata sudah sesuai KBBI."));
    return;
  }
  resultsBox.append(textElement("p", "proof-summary", `Ditemukan ${issues.length} hal untuk diperiksa. Klik kata saran ke KBBI bila tersedia.`));
  issues.forEach(issue => {
    const box = document.createElement("article");
    box.className = "proof-result detailed-proof-result";
    box.append(textElement("strong", "proof-issue-title", issue.title));
    box.append(textElement("small", "proof-location", `Baris ${issue.line}, kolom ${issue.column}`));
    box.append(textElement("code", "proof-snippet", issue.lineText || "(baris kosong)"));
    box.append(textElement("p", "proof-reason", `Alasan: ${issue.reason}`));
    if (issue.suggestion) box.append(textElement("p", "proof-suggestion", issue.suggestion));
    if (issue.lookupWord) {
      const link = document.createElement("a");
      link.href = `https://kbbi.kemendikdasmen.go.id/entri/${encodeURIComponent(issue.lookupWord)}`;
      link.target = "_blank"; link.rel = "noopener noreferrer"; link.textContent = `Periksa “${issue.lookupWord}” di KBBI VI Daring ↗`;
      box.append(link);
    }
    resultsBox.append(box);
  });
}
function runProofread() {
  captureCurrentChapter();
  const text = getEditorText();
  const resultsBox = $("#proofreadingResults");
  const issues = findProofIssues(text);
  renderProofIssues(resultsBox, text, issues);
}

function quickFixTextNodes() {
  const editor = $("#chapterEditor");
  const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    node.nodeValue = node.nodeValue
      .replace(/[ \t]{2,}/g, " ")
      .replace(/[ \t]+([,;:!?])/g, "$1")
      .replace(/([,;:!?])(?=[A-Za-zÀ-ÿ0-9])/g, "$1 ")
      .replace(/([!?])\1{2,}/g, "$1$1");
  });

  captureCurrentChapter();
  updateWordCount();
  runProofread();
  $("#saveStatus").textContent = "Spasi dan beberapa pola tanda baca dirapikan. Periksa hasilnya sebelum menyimpan.";
}
$("#checkWritingButton").addEventListener("click", runProofread);
$("#quickFixButton").addEventListener("click", quickFixTextNodes);
writerFields.cover.addEventListener("input", () => {
  writerCoverData = "";
  const fileInput = $("#coverFileInput"); if (fileInput) fileInput.value = "";
  updateCoverPreview();
});
$("#coverFileInput").addEventListener("change", async event => {
  try {
    const file = event.target.files[0];
    writerCoverData = await imageFileToDataURL(file);
    if (writerCoverData) writerFields.cover.value = "";
    updateCoverPreview();
  } catch (error) {
    event.target.value = ""; writerCoverData = ""; updateCoverPreview(); alert(error.message);
  }
});
function updateCoverPreview() {
  const image = $("#coverPreview");
  const message = $("#coverPreviewMessage");
  const url = writerCoverData || driveImageUrl(writerFields.cover.value);
  if (!url) {
    image.hidden = true; image.removeAttribute("src");
    message.hidden = false; message.textContent = "Pratinjau sampul akan tampil di sini.";
    return;
  }
  image.onload = () => { image.hidden = false; message.hidden = true; };
  image.onerror = () => { image.hidden = true; message.hidden = false; message.textContent = "Gambar tidak bisa dimuat. Coba unggah dari perangkat."; };
  image.src = url;
}

/* Submit a novel to editor review */
$("#novelForm").addEventListener("submit", event => {
  event.preventDefault();
  if (currentUser?.role !== "writer") { alert("Masuk sebagai penulis terlebih dahulu."); return; }

  const data = saveDraftData();
  if (!data.title || !data.penName || !data.synopsis || !data.chapters.length ||
      data.chapters.some(chapter => !chapter.title || !chapter.text.trim())) {
    alert("Lengkapi judul, nama pena, sinopsis, serta judul dan isi setiap bab.");
    return;
  }

  const novels = getNovels();
  const editId = $("#novelForm").dataset.editId;
  const index = novels.findIndex(novel => novel.id === editId && novel.ownerEmail === currentUser.email);
  const old = index >= 0 ? novels[index] : {};

  const updated = {
    ...old, ...data,
    id: editId || `novel-${Date.now()}`,
    author: data.penName,
    ownerEmail: currentUser.email,
    status: "pending",
    editorNote: "",
    submittedAt: new Date().toISOString(),
    createdAt: old.createdAt || new Date().toISOString()
  };

  if (index >= 0) novels[index] = updated;
  else novels.push(updated);

  if (!saveNovels(novels)) return;
  localStorage.removeItem(writerDraftKey());
  resetWriterForm();
  $("#saveStatus").textContent = "Naskah dikirim ke editor untuk ditinjau.";
  renderMyNovels();
  renderBooks();
  renderEditorQueue();
  alert("Naskah masuk antrean editor. Kamu bisa memantau statusnya di Karyaku.");
  routeToPage("works");
});

/* Novel list for current writer */
function isOwnedByCurrentWriter(novel) {
  return currentUser?.role === "writer" &&
    (novel.ownerEmail === currentUser.email || !novel.ownerEmail);
}
function statusLabel(status, novel = null) {
  if (novel?.basedOnPublishedId && status === "draft") return "Draf revisi";
  return ({ draft: "Draf tersimpan", pending: "Menunggu review", revision: "Perlu revisi", published: "Sudah terbit", rejected: "Belum disetujui", archived: "Edisi sebelumnya" })[status] || "Draf";
}
function startEditingWork(novel) {
  if (!currentUser || currentUser.role !== "writer" || !isOwnedByCurrentWriter(novel)) {
    alert("Masuk sebagai pemilik karya untuk mengedit naskah ini.");
    return;
  }
  let target = novel;
  const novels = getNovels();
  if (novel.status === "published" || novel.status === "archived") {
    target = {
      ...novel,
      id: `revision-draft-${Date.now()}`,
      status: "draft",
      basedOnPublishedId: novel.basedOnPublishedId || novel.id,
      editorNote: "",
      savedAt: new Date().toISOString()
    };
    novels.push(target);
    if (!saveNovels(novels)) return;
  }
  resetWriterForm();
  fillWriterForm(target);
  $("#novelForm").dataset.editId = target.id;
  $("#submitNovelButton").textContent = target.basedOnPublishedId ? "Kirim Revisi ke Editor" : "Kirim ke Editor";
  $("#saveStatus").textContent = target.basedOnPublishedId
    ? "Kamu sedang mengedit revisi. Edisi terbit sebelumnya tetap tersedia."
    : "Naskah dibuka untuk diedit. Simpan draf atau kirim kembali ke editor.";
  $("#novelForm").scrollIntoView({ behavior: "smooth", block: "start" });
  routeToPage("studio");
}

function renderMyNovels() {
  const list = $("#myNovelsList");
  list.replaceChildren();
  const novels = getNovels().filter(isOwnedByCurrentWriter).slice().reverse();
  const groups = new Map();
  novels.forEach(novel => {
    const key = String(novel.title || "Draf tanpa judul").trim().toLocaleLowerCase("id");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(novel);
  });
  const uniqueCount = groups.size;
  $("#myNovelCount").textContent = `${uniqueCount} ${uniqueCount === 1 ? "karya" : "karya"}`;
  if (!novels.length) {
    list.append(textElement("p", "empty-state", "Belum ada karya. Mulai tulis novel pertamamu."));
    return;
  }

  groups.forEach(editions => {
    const novel = editions[0];
    const card = document.createElement("article");
    card.className = "my-novel-item grouped-work-card";
    const top = document.createElement("div"); top.className = "grouped-work-top";
    const cover = textElement("span", "work-book-mark", "✦");
    const titleBlock = document.createElement("div"); titleBlock.className = "grouped-work-title";
    titleBlock.append(textElement("h4", "", novel.title || "Draf tanpa judul"));
    titleBlock.append(textElement("p", "", `${novel.genre || "Belum ada genre"} · ${chaptersOf(novel).length} bagian · ${editions.length} versi/status`));
    top.append(cover, titleBlock);
    card.append(top);
    const statuses = document.createElement("div"); statuses.className = "work-status-stack";
    editions.forEach(edition => {
      const status = textElement("span", `status-tag ${edition.status}`, statusLabel(edition.status, edition));
      status.title = `Diperbarui ${edition.savedAt ? new Date(edition.savedAt).toLocaleDateString("id-ID") : "tanggal tidak tersedia"}`;
      statuses.append(status);
    });
    card.append(statuses);
    if (novel.editorNote) card.append(textElement("p", "work-editor-note", `Catatan editor terbaru: ${novel.editorNote}`));
    const actions = document.createElement("div"); actions.className = "my-novel-actions";
    const detail = textElement("button", "small-action primary-work-action", "Lihat detail & status");
    detail.type = "button";
    detail.addEventListener("click", () => openWorkDetail(editions));
    actions.append(detail);
    const edit = textElement("button", "small-action", "Edit naskah");
    edit.type = "button";
    edit.addEventListener("click", () => startEditingWork(novel));
    actions.append(edit);
    const preview = textElement("button", "small-action", "Baca versi terbaru"); preview.type = "button";
    preview.addEventListener("click", () => openReader(novel)); actions.append(preview);
    card.append(actions); list.append(card);
  });
}

function openWorkDetail(editions) {
  let dialog = $("#workDetailDialog");
  if (!dialog) {
    dialog = document.createElement("dialog"); dialog.id = "workDetailDialog"; dialog.className = "login-dialog work-detail-dialog";
    dialog.innerHTML = `<button aria-label="Tutup" class="dialog-close" type="button" data-close-work></button><p class="eyebrow">WORKSPACE KARYA</p><h2 data-work-title></h2><p class="muted small" data-work-summary></p><div data-work-chapters></div><h3 class="work-history-heading">Riwayat versi dan review</h3><div data-work-editions></div><div class="form-actions"><button class="button" type="button" data-edit-work>Edit naskah</button><button class="button button-outline" type="button" data-close-work>Tutup</button></div>`;
    document.body.append(dialog);
    dialog.querySelectorAll("[data-close-work]").forEach(button => button.addEventListener("click", () => dialog.close()));
    dialog.querySelector("[data-edit-work]").addEventListener("click", () => {
      dialog.close();
      const editTarget = getNovels().find(item => item.id === dialog.dataset.editId);
      if (editTarget) startEditingWork(editTarget);
    });
    dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  }
  const sorted = [...editions].sort((a,b) => new Date(b.savedAt || b.createdAt || 0) - new Date(a.savedAt || a.createdAt || 0));
  const latest = sorted[0];
  dialog.dataset.editId = latest.id;
  dialog.querySelector("[data-work-title]").textContent = latest.title || "Draf tanpa judul";
  dialog.querySelector("[data-work-summary]").textContent = `${latest.genre || "Genre belum dipilih"} · ${chaptersOf(latest).length} bagian · Label bagian: ${latest.chapterLabel || "Bab"}`;
  const chapterBox = dialog.querySelector("[data-work-chapters]"); chapterBox.replaceChildren();
  chaptersOf(latest).forEach((chapter, index) => {
    const row = document.createElement("article"); row.className = "work-chapter-status";
    const content = document.createElement("div");
    content.append(textElement("strong", "", `${latest.chapterLabel || "Bab"} ${index + 1}: ${chapter.title || "Tanpa judul"}`));
    const hasText = Boolean((chapter.text || "").trim() || (chapter.html || "").replace(/<[^>]*>/g, "").trim());
    let label = !hasText ? "Belum ditulis" : latest.status === "pending" ? "Menunggu review" : latest.status === "revision" ? "Perlu revisi" : latest.status === "published" ? "Sudah terbit" : latest.status === "archived" ? "Edisi sebelumnya" : "Tersimpan dalam draf";
    content.append(textElement("p", "muted small", !hasText ? "Bagian ini masih kosong." : latest.status === "pending" ? "Bagian ini ikut dikirim ke editor dan menunggu peninjauan." : latest.status === "revision" ? (latest.editorNote || "Editor meminta perbaikan pada naskah.") : latest.status === "published" ? "Bagian ini termasuk dalam edisi terbit." : "Bagian ini belum dikirim untuk review."));
    row.append(content, textElement("span", `status-tag ${latest.status}`, label)); chapterBox.append(row);
  });
  const history = dialog.querySelector("[data-work-editions]"); history.replaceChildren();
  sorted.forEach((edition, index) => {
    const row = document.createElement("article"); row.className = "work-edition-row";
    const info = document.createElement("div");
    info.append(textElement("strong", "", index === 0 ? "Versi terbaru" : `Versi ${sorted.length - index}`));
    info.append(textElement("p", "muted small", `${statusLabel(edition.status, edition)} · ${chaptersOf(edition).length} bagian · ${edition.savedAt ? new Date(edition.savedAt).toLocaleString("id-ID") : "tanggal belum tersedia"}`));
    if (edition.editorNote) info.append(textElement("p", "small", `Catatan editor: ${edition.editorNote}`));
    row.append(info);
    const read = textElement("button", "small-action", "Baca"); read.type = "button"; read.addEventListener("click", () => { dialog.close(); openReader(edition); });
    row.append(read); history.append(row);
  });
  if (!dialog.open) dialog.showModal();
}

/* Editor moderation queue */
function renderEditorQueue() {
  const container = $("#editorQueue");
  if (!container) return;
  container.replaceChildren();
  const queue = getNovels().filter(novel => novel.status === "pending");

  if (!queue.length) {
    container.append(textElement("p", "empty-state", "Belum ada naskah yang menunggu peninjauan."));
    return;
  }

  queue.forEach(novel => {
    const card = document.createElement("article");
    card.className = "editor-review-card";
    const top = document.createElement("div");
    top.className = "editor-review-top";
    const heading = document.createElement("div");
    heading.append(textElement("h3", "", novel.title));
    heading.append(textElement("p", "review-meta", `${novel.author || novel.penName} · ${novel.genre} · ${chaptersOf(novel).length} bab`));
    top.append(heading, textElement("span", "status-tag pending", "Menunggu review"));
    card.append(top, textElement("p", "review-meta", novel.synopsis || "Belum ada sinopsis."));

    chaptersOf(novel).forEach((chapter, index) => {
      const part = document.createElement("section");
      part.className = "review-chapter";
      part.append(textElement("h4", "", `${novel.chapterLabel || "Bab"} ${index + 1}: ${chapter.title}`));
      const body = document.createElement("div");
      body.innerHTML = sanitizeRichHTML(chapter.html || plainTextToHTML(chapter.text || ""));
      part.append(body);
      card.append(part);
    });

    const label = textElement("label", "editor-note-label", "Catatan untuk penulis (wajib untuk meminta revisi)");
    const note = document.createElement("textarea");
    note.className = "editor-note-input";
    note.placeholder = "Tuliskan masukan yang jelas dan membangun...";
    card.append(label, note);

    const actions = document.createElement("div");
    actions.className = "editor-actions";
    [
      ["Setujui & Terbitkan", "approve-button", "published"],
      ["Minta Revisi", "revision-button", "revision"],
      ["Tolak Naskah", "reject-button", "rejected"]
    ].forEach(([labelText, className, status]) => {
      const button = textElement("button", `button ${className}`, labelText);
      button.type = "button";
      button.addEventListener("click", () => reviewNovel(novel.id, status, note.value.trim()));
      actions.append(button);
    });
    card.append(actions);
    container.append(card);
  });
}
function reviewNovel(id, status, note) {
  if (currentUser?.role !== "editor") {
    alert("Masuk sebagai editor terlebih dahulu.");
    return;
  }
  if (status === "revision" && !note) {
    alert("Tuliskan catatan revisi terlebih dahulu.");
    return;
  }

  const novels = getNovels();
  const index = novels.findIndex(novel => novel.id === id);
  if (index < 0) return;

  const reviewedNovel = novels[index];
  const reviewedAt = new Date().toISOString();

  // A revised edition replaces its published predecessor only after approval.
  if (status === "published" && reviewedNovel.basedOnPublishedId) {
    const previousIndex = novels.findIndex(item => item.id === reviewedNovel.basedOnPublishedId);
    if (previousIndex >= 0) {
      novels[previousIndex] = {
        ...novels[previousIndex],
        status: "archived",
        replacedBy: reviewedNovel.id,
        replacedAt: reviewedAt
      };
    }
  }

  novels[index] = {
    ...reviewedNovel,
    status,
    editorNote: note,
    reviewedBy: currentUser.email,
    reviewedAt
  };

  if (!saveNovels(novels)) return;

  renderEditorQueue();
  renderMyNovels();
  renderBooks();
  renderEditorAdminStatus();

  alert(status === "published"
    ? "Naskah disetujui dan masuk katalog. Karya yang telah disetujui juga dihitung untuk progres Admin Forum."
    : status === "revision"
      ? "Catatan revisi tersimpan."
      : "Naskah ditandai belum disetujui.");
}



/* Forums: named communities, topics, images, and moderation. */
function getTopics() {
  if (localStorage.getItem(KEYS.topics) === null) {
    saveArray(KEYS.topics, seedTopics);
    return seedTopics;
  }
  return readArray(KEYS.topics);
}
function saveTopics(topics) { return saveArray(KEYS.topics, topics); }
function getCommunity(id) { return communities.find(item => item.id === id) || communities[0]; }

function canWrite() {
  if (currentUser?.role === "writer" || isForumAdmin()) return true;
  if (currentUser?.role === "editor") {
    alert("Hak Admin Forum terbuka setelah akun Editor menyetujui minimal 4 karya.");
    return false;
  }
  openLogin("writer");
  return false;
}

function renderCommunities() {
  const grid = $("#communityGrid");
  grid.replaceChildren();
  const topics = getTopics();

  communities.forEach(community => {
    const count = topics.filter(topic => topic.community === community.id).length;
    const card = document.createElement("button");
    card.type = "button";
    card.className = `community-card${activeCommunity === community.id ? " selected" : ""}`;
    card.append(textElement("span", "community-icon", community.icon));

    const copy = document.createElement("div");
    copy.append(textElement("h3", "", community.name));
    copy.append(textElement("p", "", community.description));
    copy.append(textElement("small", "", `${count} diskusi`));
    card.append(copy);

    card.addEventListener("click", () => {
      activeCommunity = community.id;
      $("#forumCommunityFilter").value = community.id;
      renderCommunities();
      renderTopics();
    });
    grid.append(card);
  });

  const sideList = $("#rightCommunityList");
  sideList.replaceChildren();
  communities.forEach(community => {
    const item = document.createElement("div");
    item.className = "right-community-item";
    item.append(textElement("span", "community-icon", community.icon));
    const copy = document.createElement("div");
    copy.append(textElement("strong", "", community.name));
    copy.append(textElement("small", "", `${topics.filter(topic => topic.community === community.id).length} diskusi`));
    item.append(copy);
    sideList.append(item);
  });
}

function renderTopics() {
  const container = $("#forumTopics");
  container.replaceChildren();
  const filter = $("#forumCommunityFilter").value;
  activeCommunity = filter === "all" ? "all" : filter;

  const topics = getTopics()
    .filter(topic => filter === "all" || topic.community === filter)
    .sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)) || new Date(b.createdAt) - new Date(a.createdAt));

  $("#forumHeading").textContent = filter === "all" ? "Semua diskusi" : getCommunity(filter).name;
  $("#forumSubheading").textContent = filter === "all" ? "Pertukaran pikiran dimulai dari rasa ingin tahu." : getCommunity(filter).description;

  if (!topics.length) {
    container.append(textElement("p", "empty-state", "Belum ada topik di komunitas ini. Mulai diskusi pertama."));
    return;
  }

  topics.forEach(topic => {
    const card = document.createElement("article");
    card.className = "topic-card";

    const top = document.createElement("div");
    top.className = "topic-card-top";
    top.append(textElement("span", "soft-tag", getCommunity(topic.community).name));
    top.append(textElement("span", "topic-meta", `${(topic.replies || []).length} balasan`));
    card.append(top);

    if (topic.pinned) card.append(textElement("span", "pinned-label", "★ Disematkan editor"));
    card.append(textElement("h4", "", topic.title));

    const body = String(topic.body || "");
    card.append(textElement("p", "", body.length > 190 ? `${body.slice(0, 190)}…` : body));

    if (topic.imageData) {
      const image = document.createElement("img");
      image.className = "topic-image";
      image.src = topic.imageData;
      image.alt = `Gambar untuk ${topic.title}`;
      image.loading = "lazy";
      card.append(image);
    }

    card.append(textElement("span", "topic-meta", `${topic.author || "Penulis"} · ${dateLabel(topic.createdAt)}`));

    const openButton = textElement("button", "button button-outline button-small", "Buka diskusi →");
    openButton.type = "button";
    openButton.addEventListener("click", () => openTopic(topic.id));
    card.append(openButton);
    container.append(card);
  });
}

function openTopic(id) {
  currentTopicId = id;
  const topic = getTopics().find(item => item.id === id);
  if (!topic) return;

  $("#topicFormWrap").hidden = true;
  $("#forumTopics").hidden = true;
  $("#forumCommunityFilter").disabled = true;
  $("#topicDetail").hidden = false;

  const content = $("#topicDetailContent");
  content.replaceChildren();
  content.append(textElement("span", "soft-tag", getCommunity(topic.community).name));
  if (topic.pinned) content.append(textElement("span", "pinned-label", "★ Disematkan editor"));
  content.append(textElement("h3", "", topic.title));
  content.append(textElement("p", "topic-meta", `${topic.author || "Penulis"} · ${dateLabel(topic.createdAt)}`));
  content.append(textElement("p", "topic-body", topic.body));

  if (topic.imageData) {
    const image = document.createElement("img");
    image.className = "topic-image topic-detail-image";
    image.src = topic.imageData;
    image.alt = `Gambar untuk ${topic.title}`;
    content.append(image);
  }

  renderTopicReplies(topic);
  $("#topicDetail").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderTopicReplies(topic) {
  const box = $("#topicReplies");
  box.replaceChildren();
  box.append(textElement("h4", "", `Balasan (${(topic.replies || []).length})`));

  if (!(topic.replies || []).length) {
    box.append(textElement("p", "muted small", "Belum ada balasan. Jadilah yang pertama menanggapi."));
    return;
  }

  topic.replies.forEach(reply => {
    const item = document.createElement("div");
    item.className = "reply-item";
    item.append(textElement("strong", "", `${reply.author} · ${dateLabel(reply.createdAt)}`));
    item.append(textElement("p", "", reply.text));
    box.append(item);
  });
}

function backToTopics() {
  currentTopicId = null;
  $("#topicDetail").hidden = true;
  $("#forumTopics").hidden = false;
  $("#forumCommunityFilter").disabled = false;
  renderTopics();
}

function openTopicForm() {
  if (!canWrite()) return;
  $("#topicFormWrap").hidden = false;
  $("#topicCommunity").value = activeCommunity === "all" ? "writers" : activeCommunity;
  $("#topicImageField").hidden = !isForumAdmin();
  $("#topicForm").scrollIntoView({ behavior: "smooth", block: "center" });
}

$("#newTopicButton").addEventListener("click", openTopicForm);
$("#cancelTopicButton").addEventListener("click", () => {
  $("#topicFormWrap").hidden = true;
  topicImageData = "";
  $("#topicImageInput").value = "";
  setImagePreview("", "#topicImagePreview", "#topicImagePreviewText", "Belum ada gambar.");
});
$("#forumCommunityFilter").addEventListener("change", () => {
  activeCommunity = $("#forumCommunityFilter").value;
  renderCommunities();
  renderTopics();
});

document.querySelectorAll("[data-community-shortcut]").forEach(button => {
  button.addEventListener("click", () => {
    activeCommunity = button.dataset.communityShortcut;
    $("#forumCommunityFilter").value = activeCommunity;
    renderCommunities();
    renderTopics();
    $("#forum").scrollIntoView({ behavior: "smooth" });
  });
});

$("#topicForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!canWrite()) return;

  const topics = getTopics();
  topics.push({
    id: `topic-${Date.now()}`,
    community: $("#topicCommunity").value,
    title: $("#topicTitle").value.trim(),
    body: $("#topicBody").value.trim(),
    imageData: isForumAdmin() ? topicImageData : "",
    author: displayName(),
    createdAt: new Date().toISOString(),
    pinned: false,
    replies: []
  });

  if (!saveTopics(topics)) return;
  $("#topicForm").reset();
  $("#topicFormWrap").hidden = true;
  topicImageData = "";
  setImagePreview("", "#topicImagePreview", "#topicImagePreviewText", "Belum ada gambar.");
  renderCommunities();
  renderTopics();
  renderManagedTopics();
});

$("#backToTopics").addEventListener("click", backToTopics);
$("#replyForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!canWrite()) return;

  const topics = getTopics();
  const topic = topics.find(item => item.id === currentTopicId);
  const text = $("#replyText").value.trim();
  if (!topic || !text) return;

  topic.replies = topic.replies || [];
  topic.replies.push({
    id: `reply-${Date.now()}`,
    author: displayName(),
    text,
    createdAt: new Date().toISOString()
  });

  if (!saveTopics(topics)) return;
  $("#replyText").value = "";
  openTopic(currentTopicId);
  renderCommunities();
});

function renderManagedTopics() {
  const container = $("#managedTopicList");
  if (!container) return;
  container.replaceChildren();
  if (!isForumAdmin()) return;

  const topics = getTopics().slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!topics.length) {
    container.append(textElement("p", "empty-state", "Belum ada topik untuk dikelola."));
    return;
  }

  topics.forEach(topic => {
    const item = document.createElement("article");
    item.className = "admin-list-item";
    item.append(
      textElement("strong", "", topic.title),
      textElement("small", "", getCommunity(topic.community).name)
    );
    const actions = document.createElement("div");
    actions.className = "admin-list-actions";

    const pin = textElement("button", "small-action", topic.pinned ? "Lepas sematan" : "Sematkan");
    pin.type = "button";
    pin.addEventListener("click", () => {
      if (!isForumAdmin()) return;
      const all = getTopics();
      const target = all.find(value => value.id === topic.id);
      if (!target) return;
      target.pinned = !target.pinned;
      if (saveTopics(all)) {
        renderTopics();
        renderManagedTopics();
      }
    });

    const remove = textElement("button", "small-action danger-text", "Hapus topik");
    remove.type = "button";
    remove.addEventListener("click", () => {
      if (!isForumAdmin()) return;
      if (!confirm(`Hapus topik “${topic.title}”?`)) return;
      if (saveTopics(getTopics().filter(value => value.id !== topic.id))) {
        if (currentTopicId === topic.id) backToTopics();
        renderTopics();
        renderCommunities();
        renderManagedTopics();
      }
    });

    actions.append(pin, remove);
    item.append(actions);
    container.append(item);
  });
}


/* Writing contests, Instagram submissions, and editor publishing tools. */
function getContestEntries() { return readArray(KEYS.contests); }
function getCustomContests() { return readArray(KEYS.customContests); }
function saveCustomContests(items) { return saveArray(KEYS.customContests, items); }
function getContestSuggestions() { return readArray(KEYS.contestSuggestions); }
function saveContestSuggestions(items) { return saveArray(KEYS.contestSuggestions, items); }
function getAllContests() {
  return [...getCustomContests().slice().reverse(), ...contests];
}

function renderContests() {
  const container = $("#contestGrid");
  container.replaceChildren();

  getAllContests().forEach(contest => {
    const card = document.createElement("article");
    card.className = "contest-card";

    if (contest.posterData) {
      const poster = document.createElement("img");
      poster.className = "contest-poster";
      poster.src = contest.posterData;
      poster.alt = `Poster ${contest.title}`;
      poster.loading = "lazy";
      card.append(poster);
    }

    card.append(textElement("p", "eyebrow", contest.category || "LOMBA MENULIS"));
    card.append(textElement("h3", "", contest.title));
    card.append(textElement("p", "", contest.description));

    const meta = document.createElement("div");
    meta.className = "contest-meta";
    meta.append(textElement("span", "", `Batas pengumpulan: ${dateLabel(contest.deadline)}`));
    meta.append(textElement("span", "", contest.format || contest.theme || "Lihat ketentuan lomba"));
    card.append(meta);

    if (contest.instagramUrl && isSafeHttpUrl(contest.instagramUrl)) {
      const source = document.createElement("a");
      source.className = "contest-source-link";
      source.href = contest.instagramUrl;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      source.textContent = "Lihat pengumuman / sumber ↗";
      card.append(source);
    }

    const button = textElement("button", "button", "Ikuti / catat lomba");
    button.type = "button";
    button.addEventListener("click", () => openContestForm(contest.id));
    card.append(button);

    if (!contest.ownerEmail) {
      card.append(textElement("small", "contest-disclaimer", "Contoh lomba untuk prototipe, bukan pengumuman kompetisi nyata."));
    } else {
      card.append(textElement("small", "contest-disclaimer", "Diumumkan melalui Ruang Kata. Periksa sumber resmi sebelum mengirim karya."));
    }

    container.append(card);
  });
}

function countWords(value) {
  const text = String(value || "").trim();
  return text ? (text.match(/\S+/g) || []).length : 0;
}

function contestWordRule(contest) {
  if (!contest) return "Tempel atau ketik naskah lengkapmu di kolom ini.";
  if (Number.isFinite(contest.maxWords) && Number.isFinite(contest.minWords)) {
    if (contest.minWords === 1) return `Maksimal ${contest.maxWords.toLocaleString("id-ID")} kata.`;
    return `Minimal ${contest.minWords.toLocaleString("id-ID")} dan maksimal ${contest.maxWords.toLocaleString("id-ID")} kata.`;
  }
  if (Number.isFinite(contest.maxWords)) {
    return `Maksimal ${contest.maxWords.toLocaleString("id-ID")} kata.`;
  }
  if (Number.isFinite(contest.minWords)) {
    return `Minimal ${contest.minWords.toLocaleString("id-ID")} kata.`;
  }
  return `Ketentuan format: ${contest.format || "ikuti pengumuman resmi"}. Pastikan seluruh bagian karya sudah ditempel.`;
}

function updateContestWordCounter() {
  const field = $("#contestManuscript");
  const counter = $("#contestWordCounter");
  const rule = $("#contestManuscriptRule");
  if (!field || !counter) return;

  const words = countWords(field.value);
  const max = Number.isFinite(selectedContest?.maxWords) ? selectedContest.maxWords : null;
  const min = Number.isFinite(selectedContest?.minWords) ? selectedContest.minWords : null;
  counter.textContent = max
    ? `${words.toLocaleString("id-ID")} / ${max.toLocaleString("id-ID")} kata`
    : `${words.toLocaleString("id-ID")} kata`;
  counter.classList.toggle("over-limit", max !== null && words > max);
  counter.classList.toggle("under-limit", min !== null && words < min);
  if (rule) rule.textContent = contestWordRule(selectedContest);
}

function validateContestManuscript(contest, manuscript) {
  const words = countWords(manuscript);
  if (!manuscript.trim()) return "Naskah lengkap wajib diisi. Sinopsis saja belum cukup.";
  if (Number.isFinite(contest.minWords) && words < contest.minWords) {
    return `Naskahmu baru ${words} kata. Ketentuan lomba ini minimal ${contest.minWords.toLocaleString("id-ID")} kata.`;
  }
  if (Number.isFinite(contest.maxWords) && words > contest.maxWords) {
    return `Naskahmu ${words.toLocaleString("id-ID")} kata. Batas lomba ini ${contest.maxWords.toLocaleString("id-ID")} kata. Kurangi ${ (words - contest.maxWords).toLocaleString("id-ID")} kata lalu kirim lagi.`;
  }
  return "";
}

function openContestForm(id) {
  if (!canWrite()) return;
  selectedContest = getAllContests().find(contest => contest.id === id);
  if (!selectedContest) return;

  $("#contestForm").reset();
  $("#contestFormHeading").textContent = `Kirim karya: ${selectedContest.title}`;
  $("#contestFormDescription").textContent = `${selectedContest.theme || "Periksa ketentuan sumber resmi."} Batas: ${dateLabel(selectedContest.deadline)}. Isian di halaman ini dicatat sebagai demo di browser, belum dikirim ke penyelenggara.`;
  $("#contestPenName").value = currentUser.name === "Penulis Demo" ? "" : currentUser.name;
  updateContestWordCounter();
  $("#contestFormWrap").hidden = false;
  $("#contestFormWrap").scrollIntoView({ behavior: "smooth", block: "center" });
}

$("#contestManuscript").addEventListener("input", updateContestWordCounter);

$("#cancelContestButton").addEventListener("click", () => {
  $("#contestFormWrap").hidden = true;
});

$("#contestForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!canWrite() || !selectedContest) return;

  const manuscript = $("#contestManuscript").value.trim();
  const validationError = validateContestManuscript(selectedContest, manuscript);
  if (validationError) {
    updateContestWordCounter();
    alert(validationError);
    $("#contestManuscript").focus();
    return;
  }

  const entries = getContestEntries();
  entries.push({
    id: `entry-${Date.now()}`,
    contestId: selectedContest.id,
    contestTitle: selectedContest.title,
    penName: $("#contestPenName").value.trim(),
    workTitle: $("#contestWorkTitle").value.trim(),
    pitch: $("#contestPitch").value.trim(),
    manuscript,
    wordCount: countWords(manuscript),
    ownerEmail: currentUser.email,
    status: "Tercatat (demo)",
    submittedAt: new Date().toISOString()
  });

  if (!saveArray(KEYS.contests, entries)) return;
  $("#contestForm").reset();
  updateContestWordCounter();
  $("#contestFormWrap").hidden = true;
  renderContestEntries();
  alert("Naskah dan catatan keikutsertaan tersimpan di browser ini. Ini belum mengirim karya ke penyelenggara lomba.");
});

function renderContestEntries() {
  const container = $("#myContestEntries");
  container.replaceChildren();
  const entries = currentUser
    ? getContestEntries().filter(entry => entry.ownerEmail === currentUser.email)
    : [];

  if (!entries.length) {
    container.append(textElement("p", "empty-state", currentUser
      ? "Belum ada catatan keikutsertaan lomba."
      : "Masuk sebagai Penulis untuk melihat catatan lomba yang kamu ikuti."));
    return;
  }

  entries.slice().reverse().forEach(entry => {
    const card = document.createElement("article");
    card.className = "contest-entry";
    card.append(textElement("strong", "", entry.contestTitle));
    card.append(textElement("p", "", `${entry.workTitle} · ${entry.penName}`));
    const count = Number.isFinite(entry.wordCount) ? entry.wordCount : countWords(entry.manuscript || "");
    card.append(textElement("p", "", `${entry.status} · dicatat ${dateLabel(entry.submittedAt)} · ${count.toLocaleString("id-ID")} kata`));
    if (entry.manuscript) {
      const details = document.createElement("details");
      details.className = "contest-submission-details";
      const summary = textElement("summary", "", "Lihat naskah lengkap");
      const manuscript = textElement("pre", "contest-manuscript-preview", entry.manuscript);
      details.append(summary, manuscript);
      card.append(details);
    } else {
      card.append(textElement("p", "muted small", "Catatan ini dibuat sebelum kolom naskah lengkap tersedia."));
    }
    container.append(card);
  });
}

/* Reader suggestions: paste an Instagram post URL and optionally attach the poster. */
$("#suggestContestButton").addEventListener("click", () => {
  $("#contestSuggestionWrap").hidden = false;
  $("#contestSuggestionWrap").scrollIntoView({ behavior: "smooth", block: "center" });
});

$("#cancelSuggestionButton").addEventListener("click", () => {
  $("#contestSuggestionWrap").hidden = true;
  $("#contestSuggestionForm").reset();
  suggestionPosterData = "";
  setImagePreview("", "#suggestionPosterPreview", "#suggestionPosterPreviewText", "Belum ada poster.");
});

$("#contestSuggestionForm").addEventListener("submit", async event => {
  event.preventDefault();

  const title = $("#suggestionTitle").value.trim();
  const instagramUrl = $("#suggestionInstagram").value.trim();
  const details = $("#suggestionDetails").value.trim();

  if (!isInstagramUrl(instagramUrl)) {
    alert("Masukkan tautan posting Instagram yang valid, misalnya https://www.instagram.com/p/...");
    return;
  }

  const suggestions = getContestSuggestions();
  suggestions.push({
    id: `suggestion-${Date.now()}`,
    title,
    instagramUrl,
    description: details,
    posterData: suggestionPosterData,
    suggestedBy: displayName(),
    status: "pending",
    createdAt: new Date().toISOString()
  });

  if (!saveContestSuggestions(suggestions)) return;
  $("#contestSuggestionForm").reset();
  $("#contestSuggestionWrap").hidden = true;
  suggestionPosterData = "";
  setImagePreview("", "#suggestionPosterPreview", "#suggestionPosterPreviewText", "Belum ada poster.");
  alert("Usulan tersimpan sebagai menunggu verifikasi. Editor harus memeriksa sumber sebelum menerbitkannya.");
  renderEditorAdminStatus();
});

function renderContestSuggestionQueue() {
  const container = $("#contestSuggestionQueue");
  if (!container) return;
  container.replaceChildren();
  if (!isForumAdmin()) return;

  const suggestions = getContestSuggestions().filter(item => item.status === "pending");
  if (!suggestions.length) {
    container.append(textElement("p", "empty-state", "Tidak ada usulan lomba yang menunggu verifikasi."));
    return;
  }

  suggestions.forEach(suggestion => {
    const item = document.createElement("article");
    item.className = "admin-list-item";
    item.append(
      textElement("strong", "", suggestion.title),
      textElement("small", "", `Diusulkan oleh ${suggestion.suggestedBy} · ${dateLabel(suggestion.createdAt)}`),
      textElement("p", "", suggestion.description)
    );

    if (suggestion.posterData) {
      const image = document.createElement("img");
      image.className = "admin-mini-poster";
      image.src = suggestion.posterData;
      image.alt = `Poster usulan ${suggestion.title}`;
      item.append(image);
    }

    const link = document.createElement("a");
    link.href = suggestion.instagramUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Periksa posting Instagram ↗";
    link.className = "contest-source-link";
    item.append(link);

    const actions = document.createElement("div");
    actions.className = "admin-list-actions";
    const approve = textElement("button", "small-action", "Verifikasi & terbitkan");
    approve.type = "button";
    approve.addEventListener("click", () => approveContestSuggestion(suggestion.id));
    const reject = textElement("button", "small-action danger-text", "Tolak usulan");
    reject.type = "button";
    reject.addEventListener("click", () => rejectContestSuggestion(suggestion.id));
    actions.append(approve, reject);
    item.append(actions);
    container.append(item);
  });
}

function approveContestSuggestion(id) {
  if (!isForumAdmin()) return;
  const suggestions = getContestSuggestions();
  const suggestion = suggestions.find(item => item.id === id && item.status === "pending");
  if (!suggestion) return;

  const custom = getCustomContests();
  custom.push({
    id: `contest-${Date.now()}`,
    title: suggestion.title,
    category: "LOMBA DARI KOMUNITAS",
    description: suggestion.description,
    deadline: "Periksa pengumuman resmi",
    theme: "Lihat sumber resmi",
    format: "Ikuti ketentuan penyelenggara",
    instagramUrl: suggestion.instagramUrl,
    posterData: suggestion.posterData || "",
    ownerEmail: currentUser.email,
    createdAt: new Date().toISOString()
  });
  if (!saveCustomContests(custom)) return;

  suggestion.status = "published";
  suggestion.reviewedBy = currentUser.email;
  suggestion.reviewedAt = new Date().toISOString();
  if (!saveContestSuggestions(suggestions)) return;

  renderContests();
  renderContestSuggestionQueue();
  renderManagedContests();
  alert("Usulan terverifikasi dan diterbitkan ke halaman Lomba Menulis. Pembaca tetap harus memeriksa aturan di sumber resmi.");
}

function rejectContestSuggestion(id) {
  if (!isForumAdmin()) return;
  const suggestions = getContestSuggestions();
  const suggestion = suggestions.find(item => item.id === id);
  if (!suggestion) return;
  suggestion.status = "rejected";
  suggestion.reviewedBy = currentUser.email;
  suggestion.reviewedAt = new Date().toISOString();
  if (!saveContestSuggestions(suggestions)) return;
  renderContestSuggestionQueue();
}

$("#adminContestForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!isForumAdmin()) {
    alert("Hak Admin Forum belum terbuka untuk akun editor ini.");
    return;
  }

  const sourceURL = $("#adminContestInstagram").value.trim();
  if (sourceURL && !isSafeHttpUrl(sourceURL)) {
    alert("Tautan pengumuman harus berupa URL yang valid.");
    return;
  }

  const contest = {
    id: `contest-${Date.now()}`,
    title: $("#adminContestTitle").value.trim(),
    category: $("#adminContestCategory").value.trim(),
    description: $("#adminContestDescription").value.trim(),
    deadline: $("#adminContestDeadline").value,
    theme: $("#adminContestTheme").value.trim(),
    format: $("#adminContestFormat").value.trim(),
    instagramUrl: sourceURL,
    posterData: adminContestPosterData,
    ownerEmail: currentUser.email,
    createdAt: new Date().toISOString()
  };

  const custom = getCustomContests();
  custom.push(contest);
  if (!saveCustomContests(custom)) return;

  $("#adminContestForm").reset();
  adminContestPosterData = "";
  setImagePreview("", "#adminContestPosterPreview", "#adminContestPosterPreviewText", "Belum ada poster.");
  renderContests();
  renderManagedContests();
  alert("Lomba berhasil ditambahkan pada daftar lokal Ruang Kata.");
});

function renderManagedContests() {
  const container = $("#managedContestList");
  if (!container) return;
  container.replaceChildren();
  if (!isForumAdmin()) return;

  const custom = getCustomContests().slice().reverse();
  if (!custom.length) {
    container.append(textElement("p", "empty-state", "Belum ada lomba yang dibuat editor."));
    return;
  }

  custom.forEach(contest => {
    const item = document.createElement("article");
    item.className = "admin-list-item";
    item.append(
      textElement("strong", "", contest.title),
      textElement("small", "", `Batas: ${dateLabel(contest.deadline)}`)
    );
    const remove = textElement("button", "small-action danger-text", "Hapus lomba");
    remove.type = "button";
    remove.addEventListener("click", () => {
      if (!isForumAdmin() || !confirm(`Hapus lomba “${contest.title}” dari daftar?`)) return;
      if (saveCustomContests(getCustomContests().filter(item => item.id !== contest.id))) {
        renderContests();
        renderManagedContests();
      }
    });
    item.append(remove);
    container.append(item);
  });
}

/* Editor-only image pickers. Selected images are resized before saving. */
$("#topicImageInput").addEventListener("change", async event => {
  try {
    topicImageData = await imageFileToDataURL(event.target.files[0]);
    setImagePreview(topicImageData, "#topicImagePreview", "#topicImagePreviewText", "Belum ada gambar.");
  } catch (error) {
    event.target.value = "";
    topicImageData = "";
    alert(error.message);
  }
});

$("#suggestionPosterInput").addEventListener("change", async event => {
  try {
    suggestionPosterData = await imageFileToDataURL(event.target.files[0]);
    setImagePreview(suggestionPosterData, "#suggestionPosterPreview", "#suggestionPosterPreviewText", "Belum ada poster.");
  } catch (error) {
    event.target.value = "";
    suggestionPosterData = "";
    alert(error.message);
  }
});

$("#adminContestPosterInput").addEventListener("change", async event => {
  try {
    adminContestPosterData = await imageFileToDataURL(event.target.files[0]);
    setImagePreview(adminContestPosterData, "#adminContestPosterPreview", "#adminContestPosterPreviewText", "Belum ada poster.");
  } catch (error) {
    event.target.value = "";
    adminContestPosterData = "";
    alert(error.message);
  }
});


/* Publisher directory, submissions, and local demo messaging */
function getMessages() { return readArray(KEYS.messages); }
function saveMessages(items) { return saveArray(KEYS.messages, items); }
function getPublisherSubmissions() { return readArray(KEYS.publisherSubmissions); }
function savePublisherSubmissions(items) { return saveArray(KEYS.publisherSubmissions, items); }

function createLocalMessage(fromEmail, toEmail, body, subject = "Pesan terkait naskah", attachment = null) {
  const accountList = Object.values(demoAccounts);
  const from = accountList.find(account => account.email === fromEmail);
  const to = accountList.find(account => account.email === toEmail);
  if (!from || !to || (!String(body || "").trim() && !attachment)) return false;

  const messages = getMessages();
  messages.push({
    id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    fromEmail,
    fromName: getAccountName(fromEmail),
    toEmail,
    toName: getAccountName(toEmail),
    subject,
    body: String(body || "").trim(),
    attachment,
    createdAt: new Date().toISOString(),
    read: false,
    readBy: [],
    deletedFor: [],
    deletedForAll: false
  });
  return saveMessages(messages);
}

function messageIsUnread(message, email) {
  if (!message || message.toEmail !== email || message.deletedForAll) return false;
  if ((message.deletedFor || []).includes(email)) return false;
  if (Array.isArray(message.readBy)) return !message.readBy.includes(email);
  return message.read !== true;
}

function unreadMessageCount(email) {
  if (!email) return 0;
  return getMessages().filter(message => messageIsUnread(message, email)).length;
}

function updateUnreadBadge() {
  const badge = $("#messageUnreadBadge");
  const count = currentUser ? unreadMessageCount(currentUser.email) : 0;
  if (badge) {
    badge.textContent = count > 99 ? "99+" : String(count);
    badge.hidden = count === 0;
  }
  document.title = count ? `(${count}) Pesan baru | Ruang Kata` : "Ruang Kata | Literary Community";
}

function notifyUnreadMessages() {
  if (!currentUser || !("Notification" in window) || Notification.permission !== "granted") return;
  const unread = getMessages().filter(message => messageIsUnread(message, currentUser.email));
  if (!unread.length) return;

  const seenKey = `ruangKata_notified_${currentUser.email}`;
  let seenIds = [];
  try { seenIds = JSON.parse(sessionStorage.getItem(seenKey) || "[]"); } catch { seenIds = []; }
  const unseen = unread.filter(message => !seenIds.includes(message.id));
  if (!unseen.length) return;

  const latest = unseen[unseen.length - 1];
  try {
    const notice = new Notification(`Pesan baru dari ${latest.fromName || getAccountName(latest.fromEmail)}`, {
      body: latest.body || latest.attachment?.name || "Kamu menerima lampiran baru.",
      tag: `ruangkata-${latest.id}`
    });
    notice.onclick = () => {
      window.focus();
      routeToPage("messages");
    };
    sessionStorage.setItem(seenKey, JSON.stringify([...seenIds, ...unseen.map(message => message.id)].slice(-100)));
  } catch {
    // Badge tetap tersedia jika notifikasi desktop diblokir browser.
  }
}

function updateMessageReadStatus(messages, peerEmail) {
  if (!currentUser) return false;
  let changed = false;
  messages.forEach(message => {
    if (message.fromEmail !== peerEmail || message.toEmail !== currentUser.email || message.deletedForAll) return;
    if (!Array.isArray(message.readBy)) message.readBy = [];
    if (!message.readBy.includes(currentUser.email)) {
      message.readBy.push(currentUser.email);
      message.read = true;
      changed = true;
    }
  });
  return changed;
}

function deleteMessageForUser(messageId, mode) {
  if (!currentUser) return;
  const messages = getMessages();
  const message = messages.find(item => item.id === messageId);
  if (!message) return;

  if (mode === "everyone" && message.fromEmail !== currentUser.email) return;
  if (mode === "everyone") {
    const shouldDelete = confirm("Hapus pesan ini untuk semua orang? Riwayat akan tetap menampilkan tanda pesan dihapus.");
    if (!shouldDelete) return;
    const oldAttachment = message.attachment;
    message.deletedForAll = true;
    message.deletedAt = new Date().toISOString();
    message.body = "";
    message.attachment = null;
    if (oldAttachment) removeMessageAttachment(oldAttachment);
  } else {
    message.deletedFor = Array.isArray(message.deletedFor) ? message.deletedFor : [];
    if (!message.deletedFor.includes(currentUser.email)) message.deletedFor.push(currentUser.email);
  }

  if (!saveMessages(messages)) return;
  renderMessageContacts();
  updateUnreadBadge();
}

async function addAttachmentToMessageBubble(bubble, attachment) {
  if (!attachment) return;
  let url = "";
  try {
    url = await loadMessageAttachment(attachment);
  } catch {
    // The fallback label below explains that the local file is not available.
  }

  if (!url) {
    bubble.append(textElement("p", "message-attachment-missing", `Lampiran tidak tersedia: ${attachment.name || "file"}`));
    return;
  }

  if ((attachment.type || "").startsWith("image/")) {
    const image = document.createElement("img");
    image.className = "message-media-image";
    image.src = url;
    image.alt = attachment.name || "Gambar yang dikirim";
    image.loading = "lazy";
    bubble.append(image);
  } else if ((attachment.type || "").startsWith("video/")) {
    const video = document.createElement("video");
    video.className = "message-media-video";
    video.src = url;
    video.controls = true;
    video.preload = "metadata";
    bubble.append(video);
  } else {
    const link = document.createElement("a");
    link.className = "message-document-link";
    link.href = url;
    link.download = attachment.name || "lampiran";
    link.textContent = `Unduh ${attachment.name || "dokumen"} (${formatFileSize(attachment.size || 0)})`;
    link.rel = "noopener";
    bubble.append(link);
  }
}

function formatFileSize(bytes) {
  if (!bytes) return "ukuran tidak diketahui";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function renderPublisherDirectory() {
  const box = $("#publisherDirectoryGrid");
  if (!box) return;
  box.replaceChildren();
  demoPublishers.forEach(publisher => {
    const card = document.createElement("article"); card.className = "publisher-directory-card";
    const mark = textElement("div", "publisher-mark", "PA");
    const title = textElement("h3", "", publisher.name);
    const desc = textElement("p", "muted", publisher.description);
    const focus = textElement("p", "publisher-focus", publisher.focus);
    const status = textElement("span", "status-tag", publisher.openForSubmissions ? "Menerima naskah (demo)" : "Belum membuka pengajuan");
    const button = textElement("button", "button", "Ajukan naskah"); button.type = "button";
    button.disabled = !publisher.openForSubmissions;
    button.addEventListener("click", () => openPublisherSubmission(publisher.id));
    card.append(mark, title, desc, focus, status, button); box.append(card);
  });
}
function openPublisherSubmission(publisherId) {
  if (currentUser?.role !== "writer") {
    if (currentUser) { alert("Pengajuan naskah hanya tersedia untuk akun Penulis. Keluar dahulu untuk berganti peran."); return; }
    pendingRouteAfterLogin = "publishers";
    openLogin("writer");
    return;
  }
  const publisher = demoPublishers.find(p => p.id === publisherId) || demoPublishers[0];
  $("#publisherRecipientSelect").value = publisher.id;
  $("#publisherSubmissionWrap").hidden = false;
  $("#publisherSubmissionWrap").scrollIntoView({ behavior: "smooth", block: "start" });
}
function renderPublisherInbox() {
  const box = $("#publisherIncomingList");
  if (!box) return;
  box.replaceChildren();
  if (currentUser?.role !== "publisher") return;
  const submissions = getPublisherSubmissions().filter(s => s.publisherEmail === currentUser.email).slice().reverse();
  if (!submissions.length) {
    box.append(textElement("p", "empty-state", "Belum ada pengajuan. Penulis dapat memilih Penerbit di menu utama lalu mengirim naskah."));
    return;
  }
  submissions.forEach(submission => {
    const card = document.createElement("article"); card.className = "publisher-submission-card";
    const header = document.createElement("div"); header.className = "publisher-submission-header";
    const info = document.createElement("div");
    info.append(textElement("h3", "", submission.title));
    info.append(textElement("p", "muted small", `${submission.authorName} · ${submission.authorEmail} · dikirim ${dateLabel(submission.submittedAt)}`));
    header.append(info, textElement("span", `status-tag ${submission.status === "Diterima" ? "published" : submission.status === "Ditolak" ? "rejected" : "pending"}`, submission.status));
    card.append(header, textElement("p", "publisher-submission-synopsis", submission.synopsis));
    if (submission.cover) { const img = document.createElement("img"); img.className = "publisher-submission-cover"; img.src = submission.cover; img.alt = `Sampul ${submission.title}`; img.onerror = () => img.remove(); card.append(img); }
    const details = document.createElement("details"); details.className = "publisher-manuscript-details";
    details.append(textElement("summary", "", `Baca naskah lengkap (${countWords(submission.manuscript)} kata)`));
    details.append(textElement("pre", "contest-manuscript-preview", submission.manuscript)); card.append(details);
    if (submission.status === "Menunggu tinjauan") {
      const actions = document.createElement("div"); actions.className = "my-novel-actions";
      [["Tandai ditinjau", "Dalam tinjauan"], ["Terima pengajuan", "Diterima"], ["Tolak pengajuan", "Ditolak"]].forEach(([label, status]) => {
        const button = textElement("button", `small-action${status === "Ditolak" ? " danger-text" : ""}`, label); button.type = "button";
        button.addEventListener("click", () => updatePublisherSubmission(submission.id, status)); actions.append(button);
      }); card.append(actions);
    }
    const chatButton = textElement("button", "button button-outline button-small", `Pesan ${submission.authorName}`); chatButton.type = "button";
    chatButton.addEventListener("click", () => { routeToPage("messages"); const select = $("#messageContactSelect"); if (select) { select.value = submission.authorEmail; renderMessageThread(); } });
    card.append(chatButton); box.append(card);
  });
}
function updatePublisherSubmission(id, status) {
  if (currentUser?.role !== "publisher") return;
  const all = getPublisherSubmissions();
  const index = all.findIndex(s => s.id === id && s.publisherEmail === currentUser.email);
  if (index < 0) return;
  all[index].status = status; all[index].updatedAt = new Date().toISOString();
  if (!savePublisherSubmissions(all)) return;
  createLocalMessage(currentUser.email, all[index].authorEmail,
    status === "Diterima" ? `Pengajuan “${all[index].title}” berstatus DITERIMA untuk pembahasan lebih lanjut. Ini belum merupakan kontrak penerbitan.` : status === "Ditolak" ? `Pengajuan “${all[index].title}” belum dapat kami terima. Terima kasih sudah mengirimkan naskah.` : `Pengajuan “${all[index].title}” sedang ditinjau.`,
    `Status pengajuan: ${status}`);
  renderPublisherInbox();
}
function renderMessageContacts() {
  const select = $("#messageContactSelect");
  const list = $("#messageContactList");
  if (!select || !list) return;

  const previous = select.value;
  const searchText = $("#messageContactSearch")?.value.trim().toLocaleLowerCase("id") || "";
  const accounts = Object.values(demoAccounts).filter(account => account.email !== currentUser?.email);
  const allMessages = getMessages();

  accounts.sort((left, right) => {
    const lastForLeft = allMessages.filter(message =>
      (message.fromEmail === currentUser?.email && message.toEmail === left.email) ||
      (message.fromEmail === left.email && message.toEmail === currentUser?.email)
    ).map(message => new Date(message.createdAt).getTime()).pop() || 0;
    const lastForRight = allMessages.filter(message =>
      (message.fromEmail === currentUser?.email && message.toEmail === right.email) ||
      (message.fromEmail === right.email && message.toEmail === currentUser?.email)
    ).map(message => new Date(message.createdAt).getTime()).pop() || 0;
    return lastForRight - lastForLeft;
  });

  select.replaceChildren();
  accounts.forEach(account => {
    const option = document.createElement("option");
    option.value = account.email;
    option.textContent = `${getAccountName(account.email)} | ${account.label}`;
    select.append(option);
  });
  if (accounts.some(account => account.email === previous)) select.value = previous;
  else if (accounts.length) select.value = accounts[0].email;

  list.replaceChildren();
  const visibleAccounts = accounts.filter(account =>
    `${getAccountName(account.email)} ${account.label}`.toLocaleLowerCase("id").includes(searchText)
  );

  if (!visibleAccounts.length) {
    list.append(textElement("p", "empty-state", "Kontak tidak ditemukan."));
  }

  visibleAccounts.forEach(account => {
    const email = account.email;
    const conversation = allMessages.filter(message =>
      (message.fromEmail === currentUser?.email && message.toEmail === email) ||
      (message.fromEmail === email && message.toEmail === currentUser?.email)
    ).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    const latest = conversation[conversation.length - 1];
    const unread = currentUser ? conversation.filter(message => messageIsUnread(message, currentUser.email)).length : 0;

    const button = document.createElement("button");
    button.type = "button";
    button.className = `message-contact-button${select.value === email ? " selected" : ""}`;
    button.dataset.email = email;
    const avatar = textElement("span", "contact-avatar", "");
    paintAvatar(avatar, getAccountName(email), getAccountAvatar(email));
    const copy = document.createElement("span");
    copy.className = "contact-copy";
    copy.append(textElement("strong", "", getAccountName(email)));
    copy.append(textElement("small", "", account.label));
    const previewText = !latest ? "Mulai percakapan" : (latest.deletedForAll || (latest.deletedFor || []).includes(currentUser?.email)) ? "Pesan telah dihapus" : latest.attachment ? latest.attachment.name : (latest.body || "Lampiran");
    copy.append(textElement("span", "contact-preview", previewText));
    button.append(avatar, copy);
    if (unread) button.append(textElement("span", "contact-unread-badge", unread > 99 ? "99+" : String(unread)));

    button.addEventListener("click", () => {
      select.value = email;
      renderMessageContacts();
    });
    list.append(button);
  });

  updateUnreadBadge();
  if (currentUser && select.value) renderMessageThread();
}

async function renderMessageThread() {
  const thread = $("#messageThread");
  const summary = $("#messageContactSummary");
  const select = $("#messageContactSelect");
  if (!thread || !select) return;

  messageObjectUrls.forEach(url => URL.revokeObjectURL(url));
  messageObjectUrls = [];
  thread.replaceChildren();

  const peerEmail = select.value;
  const peer = Object.values(demoAccounts).find(account => account.email === peerEmail);
  if (summary) summary.replaceChildren();
  if (peer && summary) {
    const openProfile = document.createElement("button");
    openProfile.type = "button";
    openProfile.className = "contact-profile-trigger";
    openProfile.setAttribute("aria-label", `Buka profil ${getAccountName(peerEmail)}`);
    const avatar = textElement("span", "contact-avatar active-peer-avatar", "");
    paintAvatar(avatar, getAccountName(peerEmail), getAccountAvatar(peerEmail));
    const details = document.createElement("span");
    details.className = "active-peer-details";
    details.append(textElement("strong", "", getAccountName(peerEmail)));
    details.append(textElement("small", "", `${peer.label} · Lihat profil dan media sosial`));
    const arrow = textElement("span", "contact-profile-arrow", "›");
    openProfile.append(avatar, details, arrow);
    openProfile.addEventListener("click", () => openContactProfile(peerEmail));
    summary.append(openProfile);
  }

  if (!currentUser || !peer) {
    thread.append(textElement("p", "empty-state", "Masuk untuk menggunakan ruang pesan."));
    return;
  }

  const allMessages = getMessages();
  const conversation = allMessages.filter(message =>
    (message.fromEmail === currentUser.email && message.toEmail === peerEmail) ||
    (message.fromEmail === peerEmail && message.toEmail === currentUser.email)
  ).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  const hasReadChanges = updateMessageReadStatus(conversation, peerEmail);
  if (hasReadChanges) saveMessages(allMessages);
  updateUnreadBadge();

  if (!conversation.length) {
    thread.append(textElement("p", "empty-state", `Belum ada pesan dengan ${getAccountName(peerEmail)}. Mulai percakapan di bawah.`));
  }

  for (const message of conversation) {
    const isMine = message.fromEmail === currentUser.email;
    const isDeletedForMe = (message.deletedFor || []).includes(currentUser.email);
    const bubble = document.createElement("article");
    bubble.className = `message-bubble${isMine ? " own-message" : ""}${message.deletedForAll || isDeletedForMe ? " deleted-message" : ""}`;
    bubble.append(textElement("strong", "", message.fromName || getAccountName(message.fromEmail)));

    if (message.deletedForAll) {
      bubble.append(textElement("p", "message-deleted-label", "Pesan ini telah dihapus."));
    } else if (isDeletedForMe) {
      bubble.append(textElement("p", "message-deleted-label", "Pesan ini dihapus dari riwayat kamu."));
    } else {
      if (message.body) bubble.append(textElement("p", "", message.body));
      if (message.attachment) await addAttachmentToMessageBubble(bubble, message.attachment);
    }

    const timeLabel = `${dateLabel(message.createdAt)} · ${new Date(message.createdAt).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}`;
    bubble.append(textElement("time", "", timeLabel));

    if (!message.deletedForAll && !isDeletedForMe) {
      const actions = document.createElement("div");
      actions.className = "message-actions";
      const hideButton = textElement("button", "message-action-button", "Hapus untuk saya");
      hideButton.type = "button";
      hideButton.addEventListener("click", () => deleteMessageForUser(message.id, "me"));
      actions.append(hideButton);

      if (isMine) {
        const deleteAllButton = textElement("button", "message-action-button danger-text", "Hapus untuk semua");
        deleteAllButton.type = "button";
        deleteAllButton.addEventListener("click", () => deleteMessageForUser(message.id, "everyone"));
        actions.append(deleteAllButton);
      }
      bubble.append(actions);
    }
    thread.append(bubble);
  }

  thread.scrollTop = thread.scrollHeight;
  renderMessageContactsWithoutThread();
}

function renderMessageContactsWithoutThread() {
  const select = $("#messageContactSelect");
  const list = $("#messageContactList");
  if (!select || !list || !currentUser) return;
  const accounts = Object.values(demoAccounts).filter(account => account.email !== currentUser.email);
  const messages = getMessages();
  list.querySelectorAll(".message-contact-button").forEach(button => {
    const email = button.dataset.email;
    const account = accounts.find(item => item.email === email);
    if (!account) return;
    const unread = messages.filter(message =>
      message.fromEmail === email && message.toEmail === currentUser.email && messageIsUnread(message, currentUser.email)
    ).length;
    const badge = button.querySelector(".contact-unread-badge");
    if (unread && !badge) button.append(textElement("span", "contact-unread-badge", String(unread)));
    if (!unread && badge) badge.remove();
    button.classList.toggle("selected", email === select.value);
  });
}

function initializePublisherAndMessaging() {
  const recipient = $("#publisherRecipientSelect");
  if (recipient) {
    recipient.replaceChildren();
    demoPublishers.forEach(publisher => {
      const option = document.createElement("option");
      option.value = publisher.id;
      option.textContent = publisher.name;
      recipient.append(option);
    });
  }

  renderPublisherDirectory();
  $("#publisherSubmissionCoverInput")?.addEventListener("change", async event => {
    try {
      publisherSubmissionCoverData = await imageFileToDataURL(event.target.files[0]);
      setImagePreview(publisherSubmissionCoverData, "#publisherSubmissionCoverPreview", "#publisherSubmissionCoverPreviewText", "Belum ada sampul.");
    } catch (error) {
      event.target.value = "";
      publisherSubmissionCoverData = "";
      alert(error.message);
    }
  });

  $("#publisherSubmissionForm")?.addEventListener("submit", event => {
    event.preventDefault();
    if (currentUser?.role !== "writer") {
      if (currentUser) { alert("Pengajuan naskah hanya tersedia untuk akun Penulis."); return; }
      pendingRouteAfterLogin = "publishers";
      openLogin("writer");
      return;
    }
    const publisher = demoPublishers.find(item => item.id === $("#publisherRecipientSelect").value);
    if (!publisher) return;
    const manuscript = $("#publisherSubmissionManuscript").value.trim();
    if (!manuscript) { alert("Naskah lengkap perlu diisi."); return; }

    const entries = getPublisherSubmissions();
    const submission = {
      id: `pubsub-${Date.now()}`,
      publisherId: publisher.id,
      publisherEmail: publisher.email,
      publisherName: publisher.name,
      authorEmail: currentUser.email,
      authorName: currentUser.name,
      title: $("#publisherSubmissionTitle").value.trim(),
      synopsis: $("#publisherSubmissionSynopsis").value.trim(),
      manuscript,
      wordCount: countWords(manuscript),
      cover: publisherSubmissionCoverData,
      status: "Menunggu tinjauan",
      submittedAt: new Date().toISOString()
    };
    entries.push(submission);
    if (!savePublisherSubmissions(entries)) return;
    createLocalMessage(currentUser.email, publisher.email,
      `Halo, saya mengirim naskah "${submission.title}" melalui formulir Penerbit. Sinopsis: ${submission.synopsis}`,
      "Pengajuan naskah baru");

    $("#publisherSubmissionForm").reset();
    publisherSubmissionCoverData = "";
    setImagePreview("", "#publisherSubmissionCoverPreview", "#publisherSubmissionCoverPreviewText", "Belum ada sampul.");
    $("#publisherSubmissionWrap").hidden = true;
    alert("Pengajuan tersimpan di browser demo. Ini bukan kontrak atau pengiriman ke penerbit nyata.");
  });
  $("#cancelPublisherSubmission")?.addEventListener("click", () => { $("#publisherSubmissionWrap").hidden = true; });

  $("#messageContactSelect")?.addEventListener("change", renderMessageContacts);
  $("#messageContactSearch")?.addEventListener("input", renderMessageContacts);
  $("#messageAttachmentInput")?.addEventListener("change", event => {
    const file = event.target.files?.[0] || null;
    const info = $("#messageAttachmentInfo");
    const clearButton = $("#clearMessageAttachment");
    if (!file) {
      pendingMessageFile = null;
      if (info) info.textContent = "Gambar, video, atau dokumen. Maksimal 15 MB.";
      if (clearButton) clearButton.hidden = true;
      return;
    }
    const imageFile = file.type.startsWith("image/");
    const maximum = imageFile ? 8 * 1024 * 1024 : 15 * 1024 * 1024;
    if (file.size > maximum) {
      event.target.value = "";
      pendingMessageFile = null;
      if (clearButton) clearButton.hidden = true;
      alert(imageFile ? "Gambar maksimal 8 MB." : "Video atau dokumen maksimal 15 MB.");
      return;
    }
    pendingMessageFile = file;
    if (info) info.textContent = `${file.name} (${formatFileSize(file.size)}) siap dikirim.`;
    if (clearButton) clearButton.hidden = false;
  });
  $("#clearMessageAttachment")?.addEventListener("click", () => {
    pendingMessageFile = null;
    $("#messageAttachmentInput").value = "";
    $("#messageAttachmentInfo").textContent = "Gambar, video, atau dokumen. Maksimal 15 MB.";
    $("#clearMessageAttachment").hidden = true;
  });

  $("#messageForm")?.addEventListener("submit", async event => {
    event.preventDefault();
    if (!currentUser) {
      pendingRouteAfterLogin = "messages";
      openLogin("writer");
      return;
    }

    const body = $("#messageBody").value.trim();
    const toEmail = $("#messageContactSelect").value;
    if ((!body && !pendingMessageFile) || !toEmail) return;

    const submitButton = $("#messageForm button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Mengirim...";
    try {
      const attachment = pendingMessageFile ? await storeMessageAttachment(pendingMessageFile) : null;
      const saved = createLocalMessage(currentUser.email, toEmail, body, "Pesan Ruang Kata", attachment);
      if (!saved) return;
      $("#messageBody").value = "";
      pendingMessageFile = null;
      $("#messageAttachmentInput").value = "";
      $("#messageAttachmentInfo").textContent = "Gambar, video, atau dokumen. Maksimal 15 MB.";
      $("#clearMessageAttachment").hidden = true;
      renderMessageContacts();
      updateUnreadBadge();
    } catch (error) {
      alert(error.message || "Pesan belum bisa dikirim.");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Kirim pesan";
    }
  });

  $("#enableNotificationsButton")?.addEventListener("click", async () => {
    const status = $("#messageNotificationStatus");
    if (!("Notification" in window)) {
      if (status) status.textContent = "Browser ini tidak mendukung notifikasi desktop. Lencana pesan tetap muncul di menu.";
      return;
    }
    try {
      const permission = Notification.permission === "default" ? await Notification.requestPermission() : Notification.permission;
      if (status) status.textContent = permission === "granted" ? "Notifikasi browser aktif untuk pesan yang belum dibaca." : "Izin notifikasi belum diberikan. Kamu tetap bisa melihat lencana pesan di menu.";
      if (permission === "granted") notifyUnreadMessages();
    } catch {
      if (status) status.textContent = "Notifikasi tidak tersedia di halaman lokal ini. Lencana pesan tetap bisa digunakan.";
    }
  });
}

function renderEditorPortfolioPreview() {
  const wrapper = $("#editorEligibilityPreview");
  const publisherNote = $("#publisherRolePreview");
  const role = $("#loginRole")?.value;
  if (wrapper) wrapper.hidden = role !== "editor";
  if (publisherNote) publisherNote.hidden = role !== "publisher";
  if (wrapper && role === "editor") {
    $("#editorPortfolioCount").textContent = `Portofolio demo: ${editorPortfolio.length}/4 karya terbit`;
    const grid = $("#editorPortfolioGrid"); grid.replaceChildren();
    editorPortfolio.forEach((work, index) => {
      const card = document.createElement("article"); card.className = "editor-portfolio-card";
      const cover = textElement("div", "editor-portfolio-cover", work.title); cover.style.background = `linear-gradient(145deg, ${work.color}, #202820)`;
      card.append(cover, textElement("strong", "", work.title), textElement("small", "", `${work.publisher} · ${work.year}`));
      grid.append(card);
    });
  }
}
$("#loginRole")?.addEventListener("change", renderEditorPortfolioPreview);

/* Profil pengguna: tautan sosial dan story disimpan per akun demo. */
function normalizeSocialURL(value, allowedDomain) {
  const raw = String(value || "").trim(); if (!raw) return "";
  try {
    const url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (!/^https?:$/.test(url.protocol) || !(url.hostname === allowedDomain || url.hostname.endsWith(`.${allowedDomain}`))) return "";
    return url.href;
  } catch { return ""; }
}
function normalizeXURL(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  try {
    const url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    const host = url.hostname.toLowerCase();
    return /^https?:$/.test(url.protocol) && ["x.com", "www.x.com", "twitter.com", "www.twitter.com"].includes(host) ? url.href : "";
  } catch { return ""; }
}
function appendSocialLink(container, label, url) {
  if (!url) return;
  const link = document.createElement("a"); link.href = url; link.target = "_blank"; link.rel = "noopener noreferrer"; link.textContent = label; link.className = "social-profile-link"; container.append(link);
}

function openContactProfile(email) {
  const account = Object.values(demoAccounts).find(item => item.email === email);
  if (!account) return;
  const profile = getProfile(email);
  const avatar = $("#contactProfileAvatar");
  paintAvatar(avatar, getAccountName(email), getAccountAvatar(email));
  $("#contactProfileName").textContent = getAccountName(email);
  $("#contactProfileRole").textContent = account.label;
  const story = $("#contactProfileStory");
  story.textContent = profile.story || "";
  story.hidden = !profile.story;
  const socials = $("#contactProfileSocials");
  socials.replaceChildren();
  appendSocialLink(socials, "Instagram", profile.instagram);
  appendSocialLink(socials, "LinkedIn", profile.linkedin);
  appendSocialLink(socials, "Pinterest", profile.pinterest);
  appendSocialLink(socials, "X", profile.x);
  appendSocialLink(socials, "Wattpad", profile.wattpad);
  $("#contactProfileEmpty").hidden = socials.childElementCount > 0;
  if (!$("#contactProfileDialog").open) $("#contactProfileDialog").showModal();
}
$("#contactProfileClose")?.addEventListener("click", () => $("#contactProfileDialog").close());
$("#contactProfileDone")?.addEventListener("click", () => $("#contactProfileDialog").close());
$("#contactProfileDialog")?.addEventListener("click", event => {
  if (event.target === $("#contactProfileDialog")) $("#contactProfileDialog").close();
});

/* Profil pengguna: tautan sosial dan story disimpan per akun demo. */
function openProfileEditor() {
  if (!currentUser) return;
  const profile = getProfile(currentUser.email);
  $("#profileDisplayName").value = profile.name || currentUser.name || "";
  $("#profileInstagram").value = profile.instagram || "";
  $("#profileLinkedIn").value = profile.linkedin || "";
  $("#profileWattpad").value = profile.wattpad || "";
  $("#profilePinterest").value = profile.pinterest || "";
  $("#profileX").value = profile.x || "";
  $("#profileStory").value = profile.story || "";
  draftProfileAvatarData = profile.avatarData || currentUser.avatarData || "";
  $("#profileMessage").textContent = "";
  updateProfileAvatarPreview();
  if (!$("#profileDialog").open) $("#profileDialog").showModal();
}

function updateProfileAvatarPreview() {
  const image = $("#profileAvatarPreviewImage");
  const initials = $("#profileAvatarPreviewInitials");
  const name = $("#profileDisplayName").value.trim() || currentUser?.name || "Ruang Kata";
  paintAvatar(initials, name, draftProfileAvatarData);
  if (draftProfileAvatarData) {
    image.src = draftProfileAvatarData;
    image.hidden = false;
    initials.hidden = true;
  } else {
    image.removeAttribute("src");
    image.hidden = true;
    initials.hidden = false;
  }
}

$("#editProfileButton")?.addEventListener("click", openProfileEditor);
$("#userAvatar")?.addEventListener("click", openProfileEditor);
$("#userAvatar")?.classList.add("avatar-editable");
$("#sidebarUserName")?.addEventListener("click", openProfileEditor);
$("#profileDisplayName")?.addEventListener("input", updateProfileAvatarPreview);
$("#profileAvatarInput")?.addEventListener("change", async event => {
  try {
    draftProfileAvatarData = await imageFileToDataURL(event.target.files[0]);
    updateProfileAvatarPreview();
  } catch (error) {
    event.target.value = "";
    alert(error.message);
  }
});
$("#removeProfilePhoto")?.addEventListener("click", () => {
  draftProfileAvatarData = "";
  $("#profileAvatarInput").value = "";
  updateProfileAvatarPreview();
});
$("#profileClose")?.addEventListener("click", () => $("#profileDialog").close());
$("#cancelProfileEdit")?.addEventListener("click", () => $("#profileDialog").close());
$("#profileDialog")?.addEventListener("click", event => {
  if (event.target === $("#profileDialog")) $("#profileDialog").close();
});
$("#profileForm")?.addEventListener("submit", event => {
  event.preventDefault();
  if (!currentUser) return;
  const name = $("#profileDisplayName").value.trim();
  if (name.length < 2) {
    $("#profileMessage").textContent = "Nama tampilan minimal dua karakter.";
    return;
  }
  const profile = {
    ...getProfile(currentUser.email), name, avatarData: draftProfileAvatarData,
    instagram: normalizeSocialURL($("#profileInstagram").value, "instagram.com"),
    linkedin: normalizeSocialURL($("#profileLinkedIn").value, "linkedin.com"),
    wattpad: normalizeSocialURL($("#profileWattpad").value, "wattpad.com"),
    pinterest: normalizeSocialURL($("#profilePinterest").value, "pinterest.com"),
    x: normalizeXURL($("#profileX").value),
    story: $("#profileStory").value.trim().slice(0, 180)
  };
  if (!saveProfile(currentUser.email, profile)) return;
  currentUser = { ...currentUser, name, avatarData: draftProfileAvatarData };
  sessionStorage.setItem(KEYS.session, JSON.stringify(currentUser));
  $("#profileDialog").close();
  updateRoleUI();
  renderMessageContacts();
  renderPublisherInbox();
  renderMyNovels();
});

/* Login/logout + role-dependent menus */
function openLogin(role = "writer") {
  $("#loginRole").value = role;
  $("#loginMessage").textContent = "";
  renderEditorPortfolioPreview();
  if (!$("#loginDialog").open) $("#loginDialog").showModal();
}
function updateRoleUI() {
  if (currentUser) {
    const savedProfile = getProfile(currentUser.email);
    if (savedProfile.name) currentUser.name = savedProfile.name;
    if (Object.prototype.hasOwnProperty.call(savedProfile, "avatarData")) {
      currentUser.avatarData = savedProfile.avatarData || "";
    }
    sessionStorage.setItem(KEYS.session, JSON.stringify(currentUser));
  }

  const isWriter = currentUser?.role === "writer";
  const isEditor = currentUser?.role === "editor";
  const isPublisher = currentUser?.role === "publisher";
  const roleName = currentUser ? currentUser.label : "Tamu Ruang Kata";
  const name = currentUser ? currentUser.name : "Pembaca";

  $("#loginButton").textContent = currentUser ? "Keluar" : "Masuk / Daftar";
  $("#topLoginButton").textContent = currentUser ? "Keluar" : "Masuk";
  $("#sessionInfo").hidden = !currentUser;
  $("#sessionInfo").textContent = currentUser ? `${name} · ${roleName}` : "";
  $("#sidebarUserName").textContent = name;
  $("#sidebarUserRole").textContent = roleName;
  paintAvatar($("#userAvatar"), name, currentUser?.avatarData || getAccountAvatar(currentUser?.email));
  $("#editProfileButton").hidden = !currentUser;
  $("#rightGreeting").textContent = currentUser ? `Halo, ${name}.` : "Selamat datang, pembaca.";
  $("#writerWorkspace").hidden = !isWriter;
  $("#writerAccessPrompt").hidden = isWriter;
  $("#writerWorksNav").hidden = !isWriter;
  $("#editorNavLink").hidden = !isEditor;
  $("#messagesNavLink").hidden = !currentUser;
  $("#publisherPanelNavLink").hidden = !isPublisher;

  if (isWriter) renderMyNovels();
  if (isEditor) renderEditorQueue();
  if (isPublisher) renderPublisherInbox();
  renderEditorAdminStatus();
  const adminNav = $("#editorAdminNavLink");
  if (adminNav) adminNav.hidden = !isForumAdmin();
  renderContestEntries();
  updateUnreadBadge();
  if (currentUser) notifyUnreadMessages();

  if ((currentPage === "studio" || currentPage === "works") && !isWriter) {
    routeToPage("home", { updateHash: false });
  } else if ((currentPage === "editor" || currentPage === "admin") && !isEditor) {
    routeToPage("home", { updateHash: false });
  } else if (currentPage === "publisher" && !isPublisher) {
    routeToPage("home", { updateHash: false });
  } else if (currentPage === "messages" && !currentUser) {
    routeToPage("home", { updateHash: false });
  } else if (currentPage === "admin" && !isForumAdmin()) {
    routeToPage("editor", { updateHash: false });
  } else {
    routeToPage(currentPage, { updateHash: false });
  }
}
function logout() {
  currentUser = null;
  sessionStorage.removeItem(KEYS.session);
  updateRoleUI();
}
function toggleLogin() {
  if (currentUser) logout();
  else openLogin("writer");
}
$("#loginButton").addEventListener("click", toggleLogin);
$("#topLoginButton").addEventListener("click", toggleLogin);
$("#openWriterLogin").addEventListener("click", () => openLogin("writer"));
$("#loginClose").addEventListener("click", () => $("#loginDialog").close());
$("#loginDialog").addEventListener("click", event => {
  if (event.target === $("#loginDialog")) $("#loginDialog").close();
});
$("#loginForm").addEventListener("submit", event => {
  event.preventDefault();
  const role = $("#loginRole").value;
  const account = demoAccounts[role];
  const email = $("#email").value.trim().toLowerCase();
  const password = $("#password").value;

  if (!account || email !== account.email || password !== account.password) {
    $("#loginMessage").textContent = "Email atau kata sandi tidak cocok dengan akun demo untuk peran ini.";
    return;
  }

  if (role === "editor" && editorPortfolio.filter(work => work.title && work.publisher && Number.isFinite(work.year)).length < 4) {
    $("#loginMessage").textContent = "Akun Editor memerlukan minimal empat karya terbit yang dapat diverifikasi.";
    return;
  }
  const savedProfile = getProfile(account.email);
  currentUser = {
    email: account.email,
    role,
    name: savedProfile.name || account.name,
    avatarData: savedProfile.avatarData || "",
    label: account.label,
    publisherId: account.publisherId || null
  };
  sessionStorage.setItem(KEYS.session, JSON.stringify(currentUser));
  $("#password").value = "";
  $("#loginDialog").close();
  updateRoleUI();
  renderMessageContacts();
  if (role === "publisher") renderPublisherInbox();

  if (role === "writer") loadDraft();
  const destination = pendingRouteAfterLogin || (role === "writer" ? "studio" : role === "editor" ? "editor" : "publisher");
  pendingRouteAfterLogin = null;
  routeToPage(destination);
});
$("#writerNavLink").addEventListener("click", event => {
  if (currentUser?.role !== "writer") {
    event.preventDefault();
    if (currentUser?.role === "editor") alert("Kamu sedang masuk sebagai editor. Keluar dahulu untuk masuk sebagai penulis.");
    else { pendingRouteAfterLogin = "studio"; openLogin("writer"); }
  }
});
$("#heroWriteLink").addEventListener("click", event => {
  if (currentUser?.role !== "writer") {
    event.preventDefault();
    if (currentUser?.role === "editor") alert("Kamu sedang masuk sebagai editor. Keluar dahulu untuk masuk sebagai penulis.");
    else { pendingRouteAfterLogin = "studio"; openLogin("writer"); }
  }
});
$("#mobileMenu").addEventListener("click", () => $(".sidebar").classList.toggle("open"));
document.querySelectorAll(".side-nav .nav-item").forEach(link => {
  link.addEventListener("click", () => $(".sidebar").classList.remove("open"));
});

/* Search bar at the top shares the same catalog search */
$("#globalSearch").addEventListener("input", event => {
  $("#searchInput").value = event.target.value;
  renderBooks();
  if (event.target.value.trim()) routeToPage("explore");
});
$("#searchInput").addEventListener("input", event => {
  $("#globalSearch").value = event.target.value;
  renderBooks();
});
$("#categoryFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  $("#categoryFilters").querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
  renderBooks();
});

/* Separate public pages, writer workspace, and editor workspace. */
const pageConfig = {
  home: { ids: ["beranda", "pilihan"], eyebrow: "SELAMAT DATANG DI RUANG KATA", title: "Temukan cerita berikutnya." },
  explore: { ids: ["jelajahi"], eyebrow: "KATALOG CERITA", title: "Jelajahi semua karya." },
  studio: { ids: ["studio"], eyebrow: "RUANG KREATIF PENULIS", title: "Tulis satu karya dalam satu waktu." },
  works: { ids: ["myWorksPage"], eyebrow: "WORKSPACE PENULIS", title: "Semua karyamu, di satu tempat." },
  forum: { ids: ["forum"], eyebrow: "KOMUNITAS", title: "Bertukar ide dan berdiskusi." },
  contests: { ids: ["lomba"], eyebrow: "PANGGUNG KARYA", title: "Temukan lomba berikutnya." },
  editor: { ids: ["editorPanel"], eyebrow: "RUANG REDAKSI", title: "Tinjau karya yang masuk." },
  admin: { ids: ["editorAdminPage"], eyebrow: "PENGELOLAAN KOMUNITAS", title: "Admin Forum & Lomba." },
  publishers: { ids: ["publisherDirectory"], eyebrow: "JARINGAN PENERBIT", title: "Temukan penerbit untuk naskahmu." },
  messages: { ids: ["messagesPage"], eyebrow: "RUANG PESAN", title: "Bicarakan naskah secara langsung." },
  publisher: { ids: ["publisherPanel"], eyebrow: "MEJA REDAKSI PENERBIT", title: "Tinjau naskah yang masuk." }
};
const hashToPage = {
  "#beranda": "home", "#pilihan": "home", "#jelajahi": "explore",
  "#studio": "studio", "#myWorksSection": "works", "#myWorksPage": "works", "#works": "works",
  "#forum": "forum", "#lomba": "contests", "#editorPanel": "editor", "#editorAdminPage": "admin", "#admin": "admin",
  "#penerbit": "publishers", "#messages": "messages", "#publisherPanel": "publisher"
};
const pageToHash = { home: "#beranda", explore: "#jelajahi", studio: "#studio", works: "#works", forum: "#forum", contests: "#lomba", editor: "#editorPanel", admin: "#admin", publishers: "#penerbit", messages: "#messages", publisher: "#publisherPanel" };

function setupWorkspacePages() {
  const main = $("#mainContent");
  const worksPanel = $("#myWorksSection");
  if (worksPanel && !$("#myWorksPage")) {
    const page = document.createElement("section");
    page.id = "myWorksPage";
    page.className = "page-section workspace-page";
    page.hidden = true;
    page.append(worksPanel);
    main.insertBefore(page, $("#forum"));

    const heading = worksPanel.querySelector(".section-heading");
    const startButton = textElement("button", "button button-small", "+ Tulis karya baru");
    startButton.type = "button";
    startButton.id = "newNovelFromWorks";
    heading.append(startButton);
  }

  const editorPanel = $("#editorPanel");
  if (editorPanel && !$("#editorAdminPage")) {
    const page = document.createElement("section");
    page.id = "editorAdminPage";
    page.className = "page-section editor-panel";
    page.hidden = true;
    const heading = document.createElement("div");
    heading.className = "section-heading";
    const copy = document.createElement("div");
    copy.append(textElement("p", "eyebrow", "PENGELOLAAN KOMUNITAS"));
    copy.append(textElement("h2", "", "Admin Forum & Lomba"));
    copy.append(textElement("p", "muted", "Halaman khusus editor yang sudah memenuhi syarat. Kelola topik, gambar pengumuman, dan daftar lomba dari sini."));
    heading.append(copy);
    page.append(heading);
    const panel = $("#communityAdminPanel");
    if (panel) page.append(panel);
    editorPanel.insertAdjacentElement("afterend", page);
  }

  const nav = document.querySelector(".side-nav");
  if (nav && !$("#editorAdminNavLink")) {
    const link = document.createElement("a");
    link.id = "editorAdminNavLink";
    link.className = "nav-item";
    link.href = "#admin";
    link.hidden = true;
    link.append(textElement("span", "", "⚙"), document.createTextNode("Admin Forum & Lomba"));
    nav.append(link);
  }

  const studioHeading = $("#studio > .section-heading");
  if (studioHeading && !$("#newNovelButton")) {
    const button = textElement("button", "button button-small", "+ Karya Baru");
    button.id = "newNovelButton";
    button.type = "button";
    studioHeading.append(button);
  }

  const newWorkHandler = () => {
    const hasUnsavedContent = Boolean(
      writerFields.title.value.trim() || writerFields.synopsis.value.trim() || $("#chapterEditor").innerText.trim()
    );
    if (currentUser?.role !== "writer") {
      pendingRouteAfterLogin = "studio";
      openLogin("writer");
      return;
    }
    if (hasUnsavedContent) {
      if (!confirm("Simpan karya yang sedang kamu kerjakan sebagai draf, lalu mulai karya baru?")) return;
      saveDraft();
    }
    resetWriterForm();
    $("#saveStatus").textContent = "Karya baru. Simpan draf agar muncul di Karyaku.";
    routeToPage("studio");
  };
  $("#newNovelButton")?.addEventListener("click", newWorkHandler);
  $("#newNovelFromWorks")?.addEventListener("click", newWorkHandler);

  document.addEventListener("click", event => {
    const link = event.target.closest("a[href^='#']");
    if (!link || event.defaultPrevented) return;
    const pageName = hashToPage[link.getAttribute("href")];
    if (!pageName) return;
    event.preventDefault();
    if (link.classList.contains("nav-item")) $(".sidebar")?.classList.remove("open");
    routeToPage(pageName);
  });

  window.addEventListener("popstate", () => {
    const pageName = hashToPage[window.location.hash] || "home";
    routeToPage(pageName, { updateHash: false });
  });
}

function routeToPage(pageName, options = {}) {
  const page = pageConfig[pageName] ? pageName : "home";

  if (["studio", "works"].includes(page) && currentUser?.role !== "writer") {
    if (currentUser) {
      alert("Halaman ini khusus akun Penulis. Keluar dahulu untuk berganti peran.");
      routeToPage("home", { updateHash: false });
    } else {
      pendingRouteAfterLogin = page;
      openLogin("writer");
    }
    return;
  }
  if (["editor", "admin"].includes(page) && currentUser?.role !== "editor") {
    if (currentUser) { alert("Panel ini khusus akun Editor."); routeToPage("home", { updateHash: false }); }
    else { pendingRouteAfterLogin = page; openLogin("editor"); }
    return;
  }
  if (page === "publisher" && currentUser?.role !== "publisher") {
    if (currentUser) { alert("Panel Penerbit hanya untuk akun Penerbit."); routeToPage("home", { updateHash: false }); }
    else { pendingRouteAfterLogin = page; openLogin("publisher"); }
    return;
  }
  if (page === "messages" && !currentUser) {
    pendingRouteAfterLogin = "messages"; openLogin("writer"); return;
  }
  if (page === "admin" && !isForumAdmin()) {
    alert("Admin Forum & Lomba memerlukan portofolio minimal empat karya terbit yang dapat diverifikasi.");
    routeToPage("editor", { updateHash: false });
    return;
  }

  currentPage = page;
  document.body.dataset.page = page;
  Object.values(pageConfig).flatMap(config => config.ids).forEach(id => {
    const element = $("#" + id);
    if (element) element.hidden = !pageConfig[page].ids.includes(id);
  });
  // The footer is shared between pages; the right rail is reserved for the home dashboard.
  const footer = document.querySelector("#mainContent > .page-footer");
  if (footer) footer.hidden = false;
  const rightSidebar = $(".right-sidebar");
  if (rightSidebar) rightSidebar.hidden = page !== "home";

  $(".topbar-title .eyebrow").textContent = pageConfig[page].eyebrow;
  $(".topbar-title strong").textContent = pageConfig[page].title;
  document.querySelectorAll(".side-nav .nav-item").forEach(link => {
    const route = hashToPage[link.getAttribute("href")];
    link.classList.toggle("active", route === page);
  });

  if (page === "editor") $("#editorPanel").hidden = currentUser?.role !== "editor";
  if (page === "admin") $("#editorAdminPage").hidden = !isForumAdmin();
  if (page === "publisher") renderPublisherInbox();
  if (page === "messages") renderMessageContacts();
  if (page === "publishers") renderPublisherDirectory();
  if (page === "works") renderMyNovels();
  if (options.updateHash !== false) {
    const nextHash = pageToHash[page];
    if (nextHash && window.location.hash !== nextHash) history.pushState({ page }, "", nextHash);
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

/* Startup */
setupWorkspacePages();
initializePublisherAndMessaging();
renderEditorPortfolioPreview();
$("#year").textContent = new Date().getFullYear();
renderBooks();
renderCommunities();
renderTopics();
renderContests();
renderContestEntries();
updateRoleUI();
renderEditorAdminStatus();
renderMessageContacts();
resetWriterForm();

if (currentUser?.role === "writer") loadDraft();
const initialPage = hashToPage[window.location.hash] || "home";
routeToPage(initialPage, { updateHash: false });

window.addEventListener("storage", event => {
  if (event.key === KEYS.messages) {
    updateUnreadBadge();
    renderMessageContacts();
    notifyUnreadMessages();
  }
  if (event.key === KEYS.profiles) {
    updateRoleUI();
    renderMessageContacts();
  }
});
