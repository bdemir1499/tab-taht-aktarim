


// Artık sabit bir MY_SECRET_KEY yok, öğretmen her ders şifreyi belirleyecek
window.sessionPassword = "";

// --- DİL SÖZLÜĞÜ ---
let currentLang = 'tr'; // Varsayılan dil

const translations = {
    tr: { yukle: "Resim/Dosya Yükle", silgi: "Silgi", kalem: "Kalem", cizgi: "Çizgi", nokta: "Nokta", d_cizgi: "Düz Çizgi", dogru: "Doğru", dogru_parcasi: "Doğru Parçası", isin: "Işın", cetvel: "Cetvel", gonye: "Gönye", aciolcer: "Açı Ölçer", pergel: "Pergel", cokgenler: "Çokgenler", cember: "Çember", d_ucgen: "Düzgün 3gen", d_dortgen: "Düzgün 4gen", dikdortgen: "Dikdörtgen", d_besgen: "Düzgün 5gen", d_altigen: "Düzgün 6gen", d_yedigen: "Düzgün 7gen", d_sekizgen: "Düzgün 8gen", oyunlar: "Oyunlar", arac_rengi: "Araç Rengi", geri_al: "Geri Al", hepsini_sil: "Hepsini Sil", tasi: "Taşı", canlandir: "Canlandır ✂️", kutu: "Kutu", serbest: "Serbest", yardim: "Video Yardım", ins_t: "Uygulamayı Yükle", ins_d: "Daha iyi performans için uygulamayı yükle.", ins_b: "Yükle", ins_c: "Kapat", vid_cetvel: "Cetvel Kullanımı", vid_gonye: "Gönye Kullanımı", vid_aciolcer: "Açı Ölçer Kullanımı", vid_pergel: "Pergel Kullanımı", vid_canlandir: "Canlandırma (Kopyalama)", vid_cizgi: "Çizgi Menüsü Kullanımı", vid_cokgenler: "Çokgenler", vid_kalem: "Kalem", vid_kitap: "Kitap ve Resim Yükleme", vid_oyunlar: "Oyunlar", pdf_soru: "Bu PDF {0} sayfadır. Kaçıncı sayfadan devam etmek istersiniz?", kvkk: "Bu uygulama hiçbir kişisel veri toplamaz ve dosyalarınızı sunuculara yüklemez." },

    en: { yukle: "Upload Image/PDF", silgi: "Eraser", kalem: "Pen", cizgi: "Line", nokta: "Point", d_cizgi: "Straight Line", dogru: "Line", dogru_parcasi: "Segment", isin: "Ray", cetvel: "Ruler", gonye: "Set Square", aciolcer: "Protractor", pergel: "Compass", cokgenler: "Polygons", cember: "Circle", d_ucgen: "Regular Triangle", d_dortgen: "Square", dikdortgen: "Rectangle", d_besgen: "Pentagon", d_altigen: "Hexagon", d_yedigen: "Heptagon", d_sekizgen: "Octagon", oyunlar: "Games", arac_rengi: "Tool Color", geri_al: "Undo", hepsini_sil: "Clear All", tasi: "Move", canlandir: "Animate ✂️", kutu: "Box", serbest: "Free", yardim: "Video Help", ins_t: "Install App", ins_d: "Install app for better performance.", ins_b: "Install", ins_c: "Close", vid_cetvel: "Ruler Usage", vid_gonye: "Set Square Usage", vid_aciolcer: "Protractor Usage", vid_pergel: "Compass Usage", vid_canlandir: "Animation (Copy)", vid_cizgi: "Line Menu Usage", vid_cokgenler: "Polygons", vid_kalem: "Pen", vid_kitap: "Load Book and Image", vid_oyunlar: "Games", pdf_soru: "This PDF has {0} pages. Which page would you like to continue from?", kvkk: "This application does not collect any personal data and does not upload your files to servers." },

    de: { yukle: "Bild/PDF hochladen", silgi: "Radierer", kalem: "Stift", cizgi: "Linie", nokta: "Punkt", d_cizgi: "Gerade", dogru: "Gerade", dogru_parcasi: "Strecke", isin: "Strahl", cetvel: "Lineal", gonye: "Geodreieck", aciolcer: "Winkelmesser", pergel: "Zirkel", cokgenler: "Polygone", cember: "Kreis", d_ucgen: "Dreieck", d_dortgen: "Quadrat", dikdortgen: "Rechteck", d_besgen: "Fünfeck", d_altigen: "Sechseck", d_yedigen: "Heptagon", d_sekizgen: "Oktagon", oyunlar: "Spiele", arac_rengi: "Farbe", geri_al: "Rückgängig", hepsini_sil: "Löschen", tasi: "Bewegen", canlandir: "Animieren", kutu: "Box", serbest: "Frei", yardim: "Hilfe", ins_t: "App installieren", ins_d: "Installieren für bessere Leistung.", ins_b: "Installieren", ins_c: "Schließen", vid_cetvel: "Lineal verwenden", vid_gonye: "Geodreieck verwenden", vid_aciolcer: "Winkelmesser verwenden", vid_pergel: "Zirkel verwenden", vid_canlandir: "Animation (Kopieren)", vid_cizgi: "Linienmenü verwenden", vid_cokgenler: "Vielecke", vid_kalem: "Stift", vid_kitap: "Buch und Bild laden", vid_oyunlar: "Spiele", pdf_soru: "Dieses PDF hat {0} Seiten. Auf welcher Seite möchten Sie fortfahren?", kvkk: "Diese Anwendung sammelt keine personenbezogenen Daten und lädt Ihre Dateien nicht auf Server hoch." },

    ar: { yukle: "تحميل ملف", silgi: "ممحاة", kalem: "قلم", cizgi: "خط", nokta: "نقطة", d_cizgi: "خط مستقيم", dogru: "مستقيم", dogru_parcasi: "قطعة", isin: "شعاع", cetvel: "مسطرة", gonye: "مثلث", aciolcer: "منقلة", pergel: "فرجار", cokgenler: "مضلعات", cember: "دائرة", d_ucgen: "مثلث منتظم", d_dortgen: "مربع", dikdortgen: "مستطيل", d_besgen: "مخمس", d_altigen: "مسدس", d_yedigen: "مسبع", d_sekizgen: "مثمن", oyunlar: "ألعاب", arac_rengi: "اللون", geri_al: "تراجع", hepsini_sil: "مسح", tasi: "تحريك", canlandir: "تحريك", kutu: "صندوق", serbest: "حر", yardim: "مساعدة", ins_t: "تثبيت التطبيق", ins_d: "ثبت التطبيق لأداء أفضل.", ins_b: "تثبيت", ins_c: "إغلاق", vid_cetvel: "استخدام المسطرة", vid_gonye: "استخدام المثلث", vid_aciolcer: "استخدام المنقلة", vid_pergel: "استخدام الفرجار", vid_canlandir: "رسوم متحركة (نسخ)", vid_cizgi: "استخدام قائمة الخطوط", vid_cokgenler: "مضلعات", vid_kalem: "قلم", vid_kitap: "تحميل كتاب وصورة", vid_oyunlar: "ألعاب", pdf_soru: "يحتوي هذا الملف على {0} صفحة. من أي صفحة تريد المتابعة؟", kvkk: "لا يجمع هذا التطبيق أي بيانات شخصية ولا يرفع ملفاتك إلى الخوادم." },

    hi: { yukle: "फ़ाइल अपलोड", silgi: "इरेज़र", kalem: "पेन", cizgi: "रेखा", nokta: "बिंदु", d_cizgi: "सीधी रेखा", dogru: "रेखा", dogru_parcasi: "खंड", isin: "किरण", cetvel: "पैमाना", gonye: "गुनिया", aciolcer: "चांदा", pergel: "परकार", cokgenler: "बहुभुज", cember: "वृत्त", d_ucgen: "त्रिभुज", d_dortgen: "वर्ग", dikdortgen: "आयत", d_besgen: "पंचभुज", d_altigen: "षट्भुज", d_yedigen: "सप्तभुज", d_sekizgen: "अष्टभुज", oyunlar: "खेल", arac_rengi: "रंग", geri_al: "पूर्ववत", hepsini_sil: "साफ़", tasi: "ले जाएँ", canlandir: "एनिमेट", kutu: "बॉक्स", serbest: "मुक्त", yardim: "सहायता", ins_t: "ऐप इंस्टॉल करें", ins_d: "बेहतर प्रदर्शन के लिए इंस्टॉल करें।", ins_b: "इंस्टॉल", ins_c: "बंद", vid_cetvel: "रूलer का उपयोग", vid_gonye: "सेट स्क्वायर का उपयोग", vid_aciolcer: "चांदा का उपयोग", vid_pergel: "परकार का उपयोग", vid_canlandir: "एनीमेशन (कॉपी)", vid_cizgi: "लाइन मेनू का उपयोग", vid_cokgenler: "बहुभुज", vid_kalem: "पेन", vid_kitap: "पुस्तक और छवि लोड करें", vid_oyunlar: "खेल", pdf_soru: "इस PDF में {0} पृष्ठ हैं। आप किस पृष्ठ से जारी रखना चाहेंगे?", kvkk: "यह एप्लिकेशन कोई व्यक्तिगत डेटा एकत्र नहीं करता है और आपकी फ़ाइलों को सर्वर पर अपलोड नहीं करता है।" },

    ms: { yukle: "Muat Naik Fail", silgi: "Pemadam", kalem: "Pen", cizgi: "Garis", nokta: "Titik", d_cizgi: "Garis Lurus", dogru: "Garis", dogru_parcasi: "Segmen", isin: "Sinar", cetvel: "Pembaris", gonye: "Sesiku", aciolcer: "Jangka Sudut", pergel: "Jangka Lukis", cokgenler: "Poligon", cember: "Bulatan", d_ucgen: "Segi Tiga", d_dortgen: "Segi Empat", dikdortgen: "Segi Empat Tepat", d_besgen: "Pentagon", d_altigen: "Heksagon", d_yedigen: "Heptagon", d_sekizgen: "Oktagon", oyunlar: "Permainan", arac_rengi: "Warna", geri_al: "Batal", hepsini_sil: "Padam", tasi: "Gerak", canlandir: "Animasi", kutu: "Kotak", serbest: "Bebas", yardim: "Bantuan", ins_t: "Pasang Aplikasi", ins_d: "Pasang untuk prestasi lebih baik.", ins_b: "Pasang", ins_c: "Tutup", vid_cetvel: "Penggunaan Pembaris", vid_gonye: "Penggunaan Sesiku", vid_aciolcer: "Penggunaan Jangka Sudut", vid_pergel: "Penggunaan Jangka Lukis", vid_canlandir: "Animasi (Salin)", vid_cizgi: "Penggunaan Menu Garisan", vid_cokgenler: "Poligon", vid_kalem: "Pen", vid_kitap: "Muat Buku dan Imej", vid_oyunlar: "Permainan", pdf_soru: "PDF ini mempunyai {0} halaman. Dari halaman mana anda ingin teruskan?", kvkk: "Aplikasi ini tidak mengumpul sebarang data peribadi and tidak memuat naik fail anda ke pelayan." },

    id: { yukle: "Unggah Berkas", silgi: "Penghapus", kalem: "Pena", cizgi: "Garis", nokta: "Titik", d_cizgi: "Garis Lurus", dogru: "Garis", dogru_parcasi: "Segmen", isin: "Sinar", cetvel: "Penggaris", gonye: "Segitiga", aciolcer: "Busur", pergel: "Jangka", cokgenler: "Poligon", cember: "Lingkaran", d_ucgen: "Segitiga", d_dortgen: "Persegi", dikdortgen: "Persegi Panjang", d_besgen: "Pentagon", d_altigen: "Heksagon", d_yedigen: "Heptagon", d_sekizgen: "Octagon", oyunlar: "Permainan", arac_rengi: "Warna", geri_al: "Urung", hepsini_sil: "Hapus", tasi: "Pindah", canlandir: "Animasi", kutu: "Kotak", serbest: "Bebas", yardim: "Bantuan", ins_t: "Instal Aplikasi", ins_d: "Instal untuk performa daha baik.", ins_b: "Instal", ins_c: "Tutup", vid_cetvel: "Penggunaan Penggaris", vid_gonye: "Penggunaan Penggaris Segitiga", vid_aciolcer: "Penggunaan Busur Derajat", vid_pergel: "Penggunaan Jangka", vid_canlandir: "Animasi (Salin)", vid_cizgi: "Penggunaan Menu Garis", vid_cokgenler: "Poligon", vid_kalem: "Pena", vid_kitap: "Muat Buku dan Gambar", vid_oyunlar: "Permainan", pdf_soru: "PDF ini memiliki {0} halaman. Dari halaman mana Anda ingin melanjutkan?", kvkk: "Aplikasi ini tidak mengumpulkan data pribadi apa pun dan tidak mengunggah file Anda ke server." },

    zh: { yukle: "上传文件", silgi: "橡皮", kalem: "笔", cizgi: "线", nokta: "点", d_cizgi: "直线", dogru: "直线", dogru_parcasi: "线段", isin: "射线", cetvel: "直尺", gonye: "三角板", aciolcer: "量角器", pergel: "圆规", cokgenler: "多边形", cember: "圆", d_ucgen: "三角形", d_dortgen: "正方形", dikdortgen: "长方形", d_besgen: "五边形", d_altigen: "六边形", d_yedigen: "七边形", d_sekizgen: "八边形", oyunlar: "游戏", arac_rengi: "颜色", geri_al: "撤销", hepsini_sil: "清除", tasi: "移动", canlandir: "动画", kutu: "框选", serbest: "自由", yardim: "帮助", ins_t: "安装应用", ins_d: "安装应用以获得更好性能。", ins_b: "安装", ins_c: "关闭", vid_cetvel: "尺子用法", vid_gonye: "三角板用法", vid_aciolcer: "量角器用法", vid_pergel: "圆规用法", vid_canlandir: "动画（复制）", vid_cizgi: "线条菜单用法", vid_cokgenler: "多边形", vid_kalem: "笔", vid_kitap: "加载书籍和图片", vid_oyunlar: "游戏", pdf_soru: "此 PDF 共有 {0} 页。您想从哪一页开始继续？", kvkk: "此应用程序不收集任何个人数据，也不会将您的文件上传到服务器。" },

    ru: { yukle: "Загрузить файл", silgi: "Ластик", kalem: "Ручка", cizgi: "Линия", nokta: "Точка", d_cizgi: "Прямая линия", dogru: "Прямая", dogru_parcasi: "Отрезок", isin: "Луч", cetvel: "Линейка", gonye: "Угольник", aciolcer: "Транспортир", pergel: "Циркуль", cokgenler: "Многоугольники", cember: "Круг", d_ucgen: "Правильный треугольник", d_dortgen: "Квадрат", dikdortgen: "Прямоугольник", d_besgen: "Пятиугольник", d_altigen: "Шестиугольник", d_yedigen: "Семиугольник", d_sekizgen: "Восьмиугольник", oyunlar: "Игры", arac_rengi: "Цвет инструмента", geri_al: "Отменить", hepsini_sil: "Очистить всё", tasi: "Переместить", canlandir: "Анимация ✂️", kutu: "Коробка", serbest: "Свободно", yardim: "Справка", ins_t: "Установить", ins_d: "Установите для лучшей работы.", ins_b: "Установить", ins_c: "Закрыть", vid_cetvel: "Как использовать линейку", vid_gonye: "Как использовать угольник", vid_aciolcer: "Как использовать транспортир", vid_pergel: "Как использовать циркуль", vid_canlandir: "Анимация (Копия)", vid_cizgi: "Меню линий", vid_cokgenler: "Многоугольники", vid_kalem: "Ручка", vid_kitap: "Загрузка книг", vid_oyunlar: "Игры", pdf_soru: "В этом PDF {0} страниц. С какой страницы вы хотите продолжить?", kvkk: "Это приложение не собирает никаких персональных данных и не загружает ваши файлы на серверы." },

    es: { yukle: "Subir Archivo", silgi: "Borrador", kalem: "Lápiz", cizgi: "Línea", nokta: "Punto", d_cizgi: "Línea Recta", dogru: "Recta", dogru_parcasi: "Segmento", isin: "Rayo", cetvel: "Regla", gonye: "Escuadra", aciolcer: "Transportador", pergel: "Compás", cokgenler: "Polígonos", cember: "Círculo", d_ucgen: "Triángulo", d_dortgen: "Cuadrado", dikdortgen: "Rectángulo", d_besgen: "Pentágono", d_altigen: "Hexágono", d_yedigen: "Heptágono", d_sekizgen: "Octágono", oyunlar: "Juegos", arac_rengi: "Color", geri_al: "Deshacer", hepsini_sil: "Borrar Todo", tasi: "Mover", canlandir: "Animar ✂️", kutu: "Caja", serbest: "Libre", yardim: "Ayuda", ins_t: "Instalar App", ins_d: "Instalar para mejor rendimiento.", ins_b: "Instalar", ins_c: "Cerrar", vid_cetvel: "Uso de Regla", vid_gonye: "Uso de Escuadra", vid_aciolcer: "Uso de Transportador", vid_pergel: "Uso de Compás", vid_canlandir: "Animación (Copiar)", vid_cizgi: "Menú de Líneas", vid_cokgenler: "Polígonos", vid_kalem: "Lápiz", vid_kitap: "Cargar Libro", vid_oyunlar: "Juegos", pdf_soru: "Este PDF tiene {0} páginas. ¿Desde qué página te gustaría continuar?", kvkk: "Esta aplicación no recopila ningún dato personal y no sube sus archivos a los servidores." },

    fr: { yukle: "Télécharger", silgi: "Gomme", kalem: "Stylo", cizgi: "Ligne", nokta: "Point", d_cizgi: "Ligne Droite", dogru: "Droite", dogru_parcasi: "Segment", isin: "Demi-droite", cetvel: "Règle", gonye: "Équerre", aciolcer: "Rapporteur", pergel: "Compas", cokgenler: "Polygones", cember: "Cercle", d_ucgen: "Triangle", d_dortgen: "Carré", dikdortgen: "Rectangle", d_besgen: "Pentagone", d_altigen: "Hexagone", d_yedigen: "Heptagone", d_sekizgen: "Octogone", oyunlar: "Jeux", arac_rengi: "Couleur", geri_al: "Annuler", hepsini_sil: "Effacer Tout", tasi: "Déplacer", canlandir: "Animer ✂️", kutu: "Boîte", serbest: "Libre", yardim: "Aide", ins_t: "Installer App", ins_d: "Installez pour de meilleures performances.", ins_b: "Installer", ins_c: "Fermer", vid_cetvel: "Utilisation de la Règle", vid_gonye: "Utilisation de l'Équerre", vid_aciolcer: "Utilisation du Rapporteur", vid_pergel: "Utilisation du Compas", vid_canlandir: "Animation (Copie)", vid_cizgi: "Menu des Lignes", vid_cokgenler: "Polygones", vid_kalem: "Stylo", vid_kitap: "Charger Livre", vid_oyunlar: "Jeux", pdf_soru: "Ce PDF contient {0} pages. À partir de quelle page voulez-vous continuer ?", kvkk: "Cette application ne collecte aucune donnée personnelle et ne télécharge pas vos fichiers sur des serveurs." },

    pt: { yukle: "Carregar Ficheiro", silgi: "Borracha", kalem: "Caneta", cizgi: "Linha", nokta: "Ponto", d_cizgi: "Linha Reta", dogru: "Reta", dogru_parcasi: "Segmento", isin: "Semirreta", cetvel: "Régua", gonye: "Esquadro", aciolcer: "Transferidor", pergel: "Compasso", cokgenler: "Polígonos", cember: "Círculo", d_ucgen: "Triângulo", d_dortgen: "Quadrado", dikdortgen: "Retângulo", d_besgen: "Pentágono", d_altigen: "Hexágono", d_yedigen: "Heptágono", d_sekizgen: "Octógono", oyunlar: "Jogos", arac_rengi: "Cor", geri_al: "Desfazer", hepsini_sil: "Apagar Tudo", tasi: "Mover", canlandir: "Animar ✂️", kutu: "Caixa", serbest: "Livre", yardim: "Ajuda", ins_t: "Instalar App", ins_d: "Instale para melhor desempenho.", ins_b: "Instalar", ins_c: "Fechar", vid_cetvel: "Uso da Régua", vid_gonye: "Uso do Esquadro", vid_aciolcer: "Uso do Transferidor", vid_pergel: "Uso do Compasso", vid_canlandir: "Animação (Cópia)", vid_cizgi: "Menu de Linhas", vid_cokgenler: "Polígonos", vid_kalem: "Caneta", vid_kitap: "Carregar Livro", vid_oyunlar: "Jogos", pdf_soru: "Este PDF tem {0} páginas. A partir de qual página gostaria de continuar?", kvkk: "Este aplicativo não coleta nenhum dado pessoal e não faz upload de seus arquivos para servidores." },

    ja: { yukle: "アップロード", silgi: "消しゴム", kalem: "ペン", cizgi: "線", nokta: "点", d_cizgi: "直線", dogru: "直線", dogru_parcasi: "線分", isin: "半直線", cetvel: "定規", gonye: "三角定規", aciolcer: "分度器", pergel: "コンパス", cokgenler: "多角形", cember: "円", d_ucgen: "正三角形", d_dortgen: "正方形", dikdortgen: "長方形", d_besgen: "五角形", d_altigen: "六角形", d_yedigen: "七角形", d_sekizgen: "八角形", oyunlar: "ゲーム", arac_rengi: "ツールの色", geri_al: "元に戻す", hepsini_sil: "すべて消去", tasi: "移動", canlandir: "アニメ ✂️", kutu: "ボックス", serbest: "自由", yardim: "ヘルプ", ins_t: "アプリをインストール", ins_d: "パフォーマンス向上のためインストール", ins_b: "インストール", ins_c: "閉じる", vid_cetvel: "定規の使い方", vid_gonye: "三角定規の使い方", vid_aciolcer: "分度器の使い方", vid_pergel: "コンパスの使い方", vid_canlandir: "アニメーション (コピー)", vid_cizgi: "線メニューの使い方", vid_cokgenler: "多角形", vid_kalem: "ペン", vid_kitap: "本と画像を読み込む", vid_oyunlar: "ゲーム", pdf_soru: "このPDFは{0}ページあります。どのページから続行しますか？", kvkk: "このアプリケーションは個人データを収集せず、ファイルをサーバーにアップロードしません。" }
};

window.aktifBaglantilar = {};
let currentLassoX = 0;
let currentLassoY = 0;
let isDrawingLasso = false;
let lassoPoints = [];
let drawnStrokes = [];
window.drawnStrokes = drawnStrokes;
let boxCopies = [];
window.boxCopies = boxCopies;
let isDrawing = false;
let isDrawingRectangle = false;
let isDrawingPolygon = false;
let rectStartPoint = null;
let globalScale = 1;
let lastDist = 0;
let pointers = new Map();
let offsetX = 0; // BUNU EKLE
let offsetY = 0; // BUNU EKLE
const MIN_SCALE = 0.5; 
const MAX_SCALE = 5.0;
let initialWidth = 0;
let initialHeight = 0;
let isPenActive = false; // Avuç içi reddi için
let penActiveTimer = null;

// --- ÇOK DİLLİ OYUNLAR LİSTESİ (TÜM DİLLER GÜNCELLENDİ) ---
window.OyunListesi = [
    {
        tr: "ÇEMBERLERDEN ÜÇGEN İNŞASI",
        en: "TRIANGLE CONSTRUCTION FROM CIRCLES",
        de: "DREIECKSKONSTRUKTION AUS KREISEN",
        ar: "بناء المثلث من الدوائر",
        hi: "वृत्तों से त्रिभुज निर्माण",
        ms: "PEMBINAAN SEGI TIGA DARIPADA BULATAN",
        id: "KONSTRUKSI SEGITIGA DARI LINGKARAN",
        zh: "从圆构建三角形",
        ru: "ПОСТРОЕНИЕ ТРЕУГОЛЬНИКА ИЗ ОКРУЖНОСТЕЙ",
        es: "CONSTRUCCIÓN DE TRIÁNGULOS DESDE CÍRCULOS",
        fr: "CONSTRUCTION DE TRIANGLES À PARTIR DE CERCLES",
        pt: "CONSTRUÇÃO DE TRIÂNGULOS A PARTIR DE CÍRCULOS",
        ja: "円からの三角形の構築",
        link: "https://bekrmatmt25.my.canva.site/cemberden-ucgen-elde-etme"
    },
    {
        tr: "AÇI ÖLÇER YERLEŞTİRME OYUNU",
        en: "PROTRACTOR PLACEMENT GAME",
        de: "WINKELMESSER-PLATZIERUNGSSPIEL",
        ar: "لعبة وضع المنقلة",
        hi: "चांदा प्लेसमेंट गेम",
        ms: "PERMAINAN PENEMPATAN JANGKA SUDUT",
        id: "PERMAINAN PENEMPATAN BUSUR DERAJAT",
        zh: "量角器放置游戏",
        ru: "ИГРА НА РАЗМЕЩЕНИЕ ТРАНСПОРТИРА",
        es: "JUEGO DE COLOCACIÓN DEL TRANSPORTADOR",
        fr: "JEU DE PLACEMENT DU RAPPORTEUR",
        pt: "JOGO DE COLOCAÇÃO DO TRANSFERIDOR",
        ja: "分度器配置ゲーム",
        link: "https://bekrmatmt2507.my.canva.site/a-l-er-yar-mas"
    },
    {
        tr: "DOĞRUYA DIŞINDAKİ NOKTADAN DİKME",
        en: "PERPENDICULAR FROM EXTERNAL POINT",
        de: "LORECHT VON EINEM EXTERNEN PUNKT",
        ar: "إسقاط عمود من نقطة خارج الخط",
        hi: "बाहरी बिंदु से लंबवत रेखा",
        ms: "SERENJANG DARI TITIK LUAR",
        id: "TEGAK LURUS DARI TITIK LUAR",
        zh: "从外部点画垂线",
        ru: "ПЕРПЕНДИКУЛЯР ИЗ ВНЕШНЕЙ ТОЧКИ",
        es: "PERPENDICULAR DESDE UN PUNTO EXTERNO",
        fr: "PERPENDICULAIRE À PARTIR D'UN POINT EXTERNE",
        pt: "PERPENDICULAR A PARTIR DE UM PONTO EXTERNO",
        ja: "外部の点からの垂線",
        link: "https://bekrmatmt25.my.canva.site/dogruya-disindeki-noktadan-dikme-cizmek"
    },
    {
        tr: "AYNI DÜZLEMDE İKİ DOĞRUNUN YOLCULUĞU",
        en: "JOURNEY OF TWO LINES IN THE SAME PLANE",
        de: "REISE ZWEIER LINIEN IN DERSELBEN EBENE",
        ar: "رحلة خطين في نفس المستوى",
        hi: "एक ही तल में दो रेखाओं की यात्रा",
        ms: "PERJALANAN DUA GARIS DALAM SATAH YANG SAMA",
        id: "PERJALANAN DUA GARIS DALAM BIDANG YANG SAMA",
        zh: "同一平面内两条线的旅程",
        ru: "ПУТЕШЕСТВИЕ ДВУХ ЛИНИЙ В ОДНОЙ ПЛОСКОСТИ",
        es: "EL VIAJE DE DOS LÍNEAS EN EL MISMO PLANO",
        fr: "LE VOYAGE DE DEUX LIGNES DANS LE MÊME PLAN",
        pt: "A JORNADA DE DUAS LINHAS NO MESMO PLANO",
        ja: "同一平面上の2本の線の旅",
        link: "https://bdemir1499.github.io/ayni-duzlemde-iki-dogru/"
    },
    {
        tr: "AYNI DÜZLEMDE 3 DOĞRUNUN DURUMLARI",
        en: "POSITIONS OF 3 LINES IN THE SAME PLANE",
        de: "LAGE VON 3 LINIEN IN DERSELBEN EBENE",
        ar: "حالات 3 خطوط في نفس المستوى",
        hi: "एक ही तल में 3 रेखाओं की स्थितियाँ",
        ms: "KEDUDUKAN 3 GARIS DALAM SATAH YANG SAMA",
        id: "POSISI 3 GARIS DALAM BIDANG YANG SAMA",
        zh: "同一平面内3条线的位置",
        ru: "ПОЛОЖЕНИЯ 3 ЛИНИЙ В ОДНОЙ ПЛОСКОСТИ",
        es: "POSICIONES DE 3 LÍNEAS EN EL MISMO PLANO",
        fr: "POSITIONS DE 3 LIGNES DANS LE MÊME PLAN",
        pt: "POSIÇÕES DE 3 LINHAS NO MESMO PLANO",
        ja: "同一平面上の3本の線の位置",
        link: "https://bekrmatmt2507.my.canva.site/ayniduzlemdeucdogrunundurumlari"
    },
    {
        tr: "AÇI ÇEŞİTLERİ (TÜMLER/BÜTÜNLER/KOMŞU)",
        en: "ANGLE TYPES (COMPLEMENTARY/SUPPLEMENTARY/ADJACENT)",
        de: "WINKELARTEN (KOMPLEMENTÄR/SUPPLEMENTÄR/NEBENWINKEL)",
        ar: "أنواع الزوايا (متتامة/متكاملة/متجاورة)",
        hi: "कोणों के प्रकार (पूरक/संपूरक/आसन्न)",
        ms: "JENIS SUDUT (PELENGKAP/PENGGENAP/BERSEBELAH)",
        id: "JENIS SUDUT (BERPELURUS/BERPENYIKU/BERDAMPINGAN)",
        zh: "角的类型（余角/补角/邻角）",
        ru: "ТИПЫ УГЛОВ (ДОПОЛНИТЕЛЬНЫЕ/СМЕЖНЫЕ)",
        es: "TIPOS DE ÁNGULOS (COMPLEMENTARIOS/SUPLEMENTARIOS/ADYACENTES)",
        fr: "TYPES D'ANGLES (COMPLÉMENTAIRES/SUPPLÉMENTAIRES/ADJACENTS)",
        pt: "TIPOS DE ÂNGULOS (COMPLEMENTARES/SUPLEMENTARES/ADJACENTES)",
        ja: "角のタイプ（余角/補角/隣接角）",
        link: "https://bdemir1499.github.io/tumler-butunler-komsutumler-komsubutunler/"
    },
    {
        tr: "AÇILARINA GÖRE ÜÇGENLER",
        en: "TRIANGLES ACCORDING TO THEIR ANGLES",
        de: "DREIECKE NACH IHREN WINKELN",
        ar: "المثلثات حسب زواياها",
        hi: "कोणों के आधार पर त्रिभुज",
        ms: "SEGI TIGA MENGIKUT SUDUT",
        id: "SEGITIGA BERDASARKAN SUDUTNYA",
        zh: "按角分类的三角形",
        ru: "ТРЕУГОЛЬНИКИ ПО ТИПАМ УГЛОВ",
        es: "TRIÁNGULOS SEGÚN SUS ÁNGULOS",
        fr: "TRIANGLES SELON LEURS ANGLES",
        pt: "TRIÂNGULOS DE ACORDO COM SEUS ÂNGULOS",
        ja: "角による三角形の分類",
        link: "https://bekrmatmt25.my.canva.site/acilarina-gire-ucgenler"
    },
    {
        tr: "AÇI ÇEŞİTLERİ (DAR, DİK, GENİŞ vb.)",
        en: "ANGLE TYPES (ACUTE, RIGHT, OBTUSE etc.)",
        de: "WINKELARTEN (SPITZ, RECHT, STUMPF usw.)",
        ar: "أنواع الزوايا (حادة، قائمة، منفرجة إلخ)",
        hi: "कोणों के प्रकार (न्यून, सम, अधिक आदि)",
        ms: "JENIS SUDUT (TIRUS, TEGAK, CAWAK dsb.)",
        id: "JENIS SUDUT (LANCIP, SIKU, TUMPUL dll.)",
        zh: "角的类型（锐角、直角、钝角等）",
        ru: "ВИДЫ УГЛОВ (ОСТРЫЙ, ПРЯМОЙ, ТУПОЙ и т.д.)",
        es: "TIPOS DE ÁNGULOS (AGUDO, RECTO, OBTUSO, etc.)",
        fr: "TYPES D'ANGLES (AIGU, DROIT, OBTUS, etc.)",
        pt: "TIPOS DE ÂNGULOS (AGUDO, RETO, OBTUSO, etc.)",
        ja: "角のタイプ（鋭角、直角、鈍角など）",
        link: "https://bekrmatmt2507.my.canva.site/aci-cesitleri"
    },
    {
        tr: "TEMEL GEOMETRİK ŞEKİLLER",
        en: "BASIC GEOMETRIC SHAPES",
        de: "GEOMETRISCHE GRUNDFORMEN",
        ar: "الأشكال الهندسية الأساسية",
        hi: "बुनियादी ज्यामितीय आकृतियाँ",
        ms: "BENTUK GEOMETRI ASAS",
        id: "BENTUK GEOMETRIS DASAR",
        zh: "基本几何图形",
        ru: "ОСНОВНЫЕ ГЕОМЕТРИЧЕСКИЕ ФИГУРЫ",
        es: "FORMAS GEOMÉTRICAS BÁSICAS",
        fr: "FORMES GÉOMÉTRIQUES DE BASE",
        pt: "FORMAS GEOMÉTRICAS BÁSICAS",
        ja: "基本的な幾何学図形",
        link: "https://bekrmatmt25.my.canva.site/temel-geometrik-sekiller"
    },
    {
        tr: "ÇOKGENLERİN ELEMANLARI",
        en: "ELEMENTS OF POLYGONS",
        de: "ELEMENTE VON POLYGONEN",
        ar: "عناصر المضلعات",
        hi: "बहुभुज के तत्व",
        ms: "ELEMEN POLIGON",
        id: "UNSUR-UNSUR POLIGON",
        zh: "多边形的要素",
        ru: "ЭЛЕМЕНТЫ МНОГОУГОЛЬНИКОВ",
        es: "ELEMENTOS DE LOS POLÍGONOS",
        fr: "ÉLÉMENTS DES POLYGONES",
        pt: "ELEMENTOS DOS POLÍGONOS",
        ja: "多角形の要素",
        link: "https://bekrmatmt2507.my.canva.site/cokgenlerin-elemanlari"
    },
    {
        tr: "İKİ PARALEL VE KESENLE OLUŞAN AÇILAR (1)",
        en: "ANGLES FORMED BY TWO PARALLELS AND A TRANSVERSAL (1)",
        de: "WINKEL AN PARALLELEN UND SCHNEIDENDEN LINIEN (1)",
        ar: "الزوايا الناتجة عن متوازيين وقاطع (1)",
        hi: "दो समांतर रेखाओं और bir तिर्यक रेखा द्वारा बने कोण (1)",
        ms: "SUDUT YANG DIBENTUK OLEH DUA GARIS SELARI DAN KERENTAS (1)",
        id: "SUDUT YANG DIBENTUK OLEH DUA GARIS SEJAJAR DAN TRANSVERSAL (1)",
        zh: "两条平行线和一条截线形成的角 (1)",
        ru: "УГЛЫ ПРИ ПАРАЛЛЕЛЬНЫХ И СЕКУЩЕЙ (1)",
        es: "ÁNGULOS ENTRE DOS PARALELAS Y UNA TRANSVERSAL (1)",
        fr: "ANGLES FORMÉS PAR DEUX PARALLÈLES ET UNE TRANSVERSALE (1)",
        pt: "ÂNGULOS FORMADOS POR DUAS PARALELAS E UMA TRANSVERSAL (1)",
        ja: "2本の平行線と1本の横断線によって形成される角 (1)",
        link: "https://bekrmatmt25.my.canva.site/k-paralel-dogrunun-b-r-kesenle-yapt-g-ac-lar"
    },
    {
        tr: "ÜÇ DOĞRUNUN İKİŞER KESİŞMESİ",
        en: "INTERSECTION OF THREE LINES IN PAIRS",
        de: "PAARWEISE SCHNITTPUNKTE VON DREI LINIEN",
        ar: "تقاطع ثلاث خطوط مثنى مثنى",
        hi: "तीन रेखाओं का युग्मों में प्रतिच्छेदन",
        ms: "PERSILANGAN TIGA GARIS SECARA BERPASANGAN",
        id: "PERPOTONGAN TIGA GARIS BERPASANGAN",
        zh: "三条线两两相交",
        ru: "ПОПАРНОЕ ПЕРЕСЕЧЕНИЕ ТРЕХ ПРЯМЫХ",
        es: "INTERSECCIÓN DE TRES LÍNEAS EN PARES",
        fr: "INTERSECTION DE TROIS LIGNES PAR PAIRES",
        pt: "INTERSEÇÃO DE TRÊS LINHAS EM PARES",
        ja: "3本の線のペアごとの交差",
        link: "https://bekrmatmt2507.my.canva.site/ikiser-kesisen-dogru"
    },
    {
        tr: "DİKDÖRTGENİN ÇEVRE VE ALANI",
        en: "PERIMETER AND AREA OF RECTANGLE",
        de: "UMFANG UND FLÄCHE DES RECHTECKS",
        ar: "محيط ومساحة المستطيل",
        hi: "आयत का परिमाप और क्षेत्रफल",
        ms: "PERIMETER DAN LUAS SEGI EMPAT TEPAT",
        id: "KELILING DAN LUAS PERSEGI PANJANG",
        zh: "长方形的周长和面积",
        ru: "ПЕРИМЕТР И ПЛОЩАДЬ ПРЯМОУГОЛЬНИКА",
        es: "PERÍMETRO Y ÁREA DEL RECTÁNGULO",
        fr: "PÉRIMÈTRE ET AIRE DU RECTANGLE",
        pt: "PERÍMETRO E ÁREA DO RETÂNGULO",
        ja: "長方形の周囲と面積",
        link: "https://bdemir1499.github.io/dikdortgen-cevre-ve-alan/"
    },
    {
        tr: "DÖRTGENLERİN ÖZELLİKLERİ (TÜMEVARIM)",
        en: "PROPERTIES OF QUADRILATERALS (INDUCTION)",
        de: "EIGENSCHAFTEN VON VIERECKEN (INDUKTION)",
        ar: "خصائص الأشكال الرباعية (الاستقراء)",
        hi: "चतुर्भुज के गुण (आगमन)",
        ms: "SIFAT-SIFAT SISI EMPAT (INDUKSI)",
        id: "SIFAT-SIFAT SEGI EMPAT (INDUKSI)",
        zh: "四边形的属性（归纳法）",
        ru: "СВОЙСТВА ЧЕТЫРЕХУГОЛЬНИКОВ (ИНДУКЦИЯ)",
        es: "PROPIEDADES DE LOS CUADRILÁTEROS (INDUCCIÓN)",
        fr: "PROPRIÉTÉS DES QUADRILATÈRES (INDUCTION)",
        pt: "PROPRIEDADES DOS QUADRILÁTEROS (INDUÇÃO)",
        ja: "四角形の性質（帰納法）",
        link: "https://bekrmatmt25.my.canva.site/dortgenler-ve-ozellikleri-tumevarim"
    },
    {
        tr: "DÖRTGENLERİN ÖZELLİKLERİ (TÜMDEN GELİM)",
        en: "PROPERTIES OF QUADRILATERALS (DEDUCTION)",
        de: "EIGENSCHAFTEN VON VIERECKEN (DEDUKTION)",
        ar: "خصائص الأشكال الرباعية (الاستنتاج)",
        hi: "चतुर्भुज के गुण (निगमन)",
        ms: "SIFAT-SIFAT SISI EMPAT (DEDUKSI)",
        id: "SIFAT-SIFAT SEGI EMPAT (DEDUKSI)",
        zh: "四边形的属性（演绎法）",
        ru: "СВОЙСТВА ЧЕТЫРЕХУГОЛЬНИКОВ (ДЕДУКЦИЯ)",
        es: "PROPIEDADES DE LOS CUADRILÁTEROS (DEDUCCIÓN)",
        fr: "PROPRIÉTÉS DES QUADRILATÈRES (DÉDUCTION)",
        pt: "PROPRIEDADES DOS QUADRILÁTEROS (DEDUÇÃO)",
        ja: "四角形の性質（演繹法）",
        link: "https://bdemir1499.github.io/dortgen-ve-ozellikleri-tumdengelim/"
    },
    {
        tr: "İKİ PARALEL DOĞRUNUN BİR KESENLE YAPTIĞI AÇILAR (2)",
        en: "ANGLES FORMED BY TWO PARALLEL LINES AND A TRANSVERSAL (2)",
        de: "WINKEL AN PARALLELEN UND SCHNEIDENDEN LINIEN (2)",
        ar: "الزوايا الناتجة عن متوازيين وقاطع (2)",
        hi: "दो समांतर रेखाओं और bir तिर्यक रेखा द्वारा बने कोण (2)",
        ms: "SUDUT YANG DIBENTUK OLEH DUA GARIS SELARI DAN KERENTAS (2)",
        id: "SUDUT YANG DIBENTUK OLEH DUA GARIS SEJAJAR DAN TRANSVERSAL (2)",
        zh: "两条平行线和一条截线形成的角 (2)",
        ru: "УГЛЫ ПРИ ПАРАЛЛЕЛЬНЫХ И СЕКУЩЕЙ (2)",
        es: "ÁNGULOS ENTRE DOS PARALELAS Y UNA TRANSVERSAL (2)",
        fr: "ANGLES FORMÉS PAR DEUX PARALLÈLES ET UNE TRANSVERSALE (2)",
        pt: "ÂNGULOS FORMADOS POR DUAS PARALELAS E UMA TRANSVERSAL (2)",
        ja: "2本の平行線と1本の横断線によって形成される角 (2)",
        link: "https://bekrmatmt25.my.canva.site/iki-paralel-dogrunun-bir-kesenle-yapt-g-ac-lar"
    },
    {
        tr: "DÖNÜŞÜM GEOMETRİSİ (ÖTELEME/YANSIMA)",
        en: "TRANSFORMATION GEOMETRY (TRANSLATION/REFLECTION)",
        de: "TRANSFORMATIONSGEOMETRIE (VERSCHIEBUNG/SPIEGELUNG)",
        ar: "الهندسة التحويلية (الإزاحة/الانعكاس)",
        hi: "रूपांतरण ज्यामिति (स्थानांतरण/परावर्तन)",
        ms: "GEOMETRI TRANSFORMASI (TRANSLASI/PANTULAN)",
        id: "GEOMETRI TRANSFORMASI (TRANSLASI/REFLEKSI)",
        zh: "变换几何（平移/反射）",
        ru: "ГЕОМЕТРИЯ ПРЕОБРАЗОВАНИЙ (ПЕРЕНОС/ОТРАЖЕНИЕ)",
        es: "GEOMETRÍA DE TRANSFORMACIÓN (TRASLACIÓN/REFLEXIÓN)",
        fr: "GÉOMÉTRIE DE TRANSFORMATION (TRANSLATION/RÉFLEXION)",
        pt: "GEOMETRIA DE TRANSFORMAÇÃO (TRANSLAÇÃO/REFLEXÃO)",
        ja: "変換幾何学（平移/反射）",
        link: "https://bekrmatmt25.my.canva.site/oteleme-ve-yansima"
    },
    {
        tr: "DÖRTGEN ÇEŞİTLERİ KAVRAM HARİTASI",
        en: "CONCEPT MAP OF QUADRILATERAL TYPES",
        de: "BEGRIFFSMAP DER VIERECKARTEN",
        ar: "خريطة مفاهيم أنواع الأشكال الرباعية",
        hi: "चतुर्भुज प्रकारों का अवधारणा मानचित्र",
        ms: "PETA KONSEP JENIS SISI EMPAT",
        id: "PETA KONSEP JENIS SEGI EMPAT",
        zh: "四边形类型概念图",
        ru: "КОНЦЕПТУАЛЬНАЯ КАРТА ТИПОВ ЧЕТЫРЕХУГОЛЬНИКОВ",
        es: "MAPA CONCEPTUAL DE TIPOS DE CUADRILÁTEROS",
        fr: "CARTE CONCEPTUELLE DES TYPES DE QUADRILATÈRES",
        pt: "MAPA CONCEITUAL DE TIPOS DE QUADRILÁTEROS",
        ja: "四角形のタイプの概念図",
        link: "https://bekrmatmt25.my.canva.site/dortgenler-kavram-haritasi"
    },
    {
        tr: "DÖRTGENLER GENEL ÇIKARIMLAR",
        en: "GENERAL INFERENCES ABOUT QUADRILATERALS",
        de: "ALLGEMEINE SCHLUSSFOLGERUNGEN ÜBER VIERECKE",
        ar: "الاستنتاجات العامة حول الأشكال الرباعية",
        hi: "चतुर्भुजों के बारे में सामान्य निष्कर्ष",
        ms: "INFERENS UMUM TENTANG SISI EMPAT",
        id: "KESIMPULAN UMUM TENTANG SEGI EMPAT",
        zh: "关于四边形的一般推论",
        ru: "ОБЩИЕ ВЫВОДЫ О ЧЕТЫРЕХУГОЛЬНИКАХ",
        es: "INFERENCIAS GENERALES SOBRE CUADRILÁTEROS",
        fr: "INFERENCES GÉNÉRALES SUR LES QUADRILATÈRES",
        pt: "INFERÊNCIAS GERAIS SOBRE QUADRILÁTEROS",
        ja: "四角形に関する一般的な推論",
        link: "https://bekrmatmt25.my.canva.site/dortgenler-genel-cikarimlar"
    },
    {
        tr: "KESİRLERİN FARKLI GÖSTERİMLERİ",
        en: "DIFFERENT REPRESENTATIONS OF FRACTIONS",
        de: "VERSCHIEDENE DARSTELLUNGEN VON BRÜCHEN",
        ar: "تمثيلات مختلفة للكسور",
        hi: "भिन्नों के विभिन्न निरूपण",
        ms: "PERWAKILAN PECAHAN YANG BERBEZA",
        id: "BERBAGAI REPRESENTASI PECAHAN",
        zh: "分数的不同表示形式",
        ru: "РАЗЛИЧНЫЕ ПРЕДСТАВЛЕНИЯ ДРОБЕЙ",
        es: "DIFERENTES REPRESENTACIONES DE FRACCIONES",
        fr: "DIFFÉRENTES REPRÉSENTATIONS DES FRACTIONS",
        pt: "DIFERENTES REPRESENTAÇÕES DE FRAÇÕES",
        ja: "分数のさまざまな表現",
        link: "https://bekrmatmt25.my.canva.site/kesirlerin-farkl-g-sterimleri"
    },
    {
        tr: "KÖŞEGENLERDEN DÖRTGENLERE (1)",
        en: "FROM DIAGONALS TO QUADRILATERALS (1)",
        de: "VON DIAGONALEN ZU VIERECKEN (1)",
        ar: "من الأقطار إلى الأشكال الرباعية (1)",
        hi: "विकर्णों से चतुर्भुज तक (1)",
        ms: "DARIPADA PEPENJURU KEPADA SISI EMPAT (1)",
        id: "DARI DIAGONAL KE SEGI EMPAT (1)",
        zh: "从对角线到四边形 (1)",
        ru: "ОТ ДИАГОНАЛЕЙ К ЧЕТЫРЕХУГОЛЬНИКАМ (1)",
        es: "DE LAS DIAGONALES A LOS CUADRILÁTEROS (1)",
        fr: "DES DIAGONALES AUX QUADRILATÈRES (1)",
        pt: "DAS DIAGONAIS AOS QUADRILÁTEROS (1)",
        ja: "対角線から四角形へ (1)",
        link: "https://bekrmatmt25.my.canva.site/k-egenlerden-d-rtgenlere"
    },
    {
        tr: "CEBİRSEL İFADELER TEMEL KAVRAMLAR",
        en: "ALGEBRAIC EXPRESSIONS BASIC CONCEPTS",
        de: "ALGEBRAISCHE AUSDRÜCKE - GRUNDBEGRIFFE",
        ar: "المفاهيم الأساسية للتعبيرات الجبرية",
        hi: "बीजगणितीय व्यंजक बुनियादी अवधारणाएँ",
        ms: "UNGKAPAN ALGEBRA KONSEP ASAS",
        id: "KONSEP DASAR EKSPRESI ALJABAR",
        zh: "代数式基本概念",
        ru: "АЛГЕБРАИЧЕСКИЕ ВЫРАЖЕНИЯ: ОСНОВНЫЕ ПОНЯТИЯ",
        es: "EXPRESIONES ALGEBRAICAS CONCEPTOS BÁSICOS",
        fr: "EXPRESSIONS ALGÉBRIQUES CONCEPTS DE BASE",
        pt: "EXPRESSÕES ALGÉBRICAS CONCEITOS BÁSICOS",
        ja: "代数式の基本概念",
        link: "https://bekrmatmt25.my.canva.site/cebirsel-ifadeler-temel-kavramlar"
    },
    {
        tr: "CEBİRSEL İFADELER SÖZELDEN CEBİRE",
        en: "ALGEBRAIC EXPRESSIONS FROM VERBAL TO ALGEBRAIC",
        de: "VON DER SPRACHE ZUR ALGEBRA",
        ar: "التعبيرات الجبرية من اللفظية إلى الجبرية",
        hi: "बीजगणितीय व्यंजक: मौखिक से बीजगणितीय",
        ms: "UNGKAPAN ALGEBRA DARIPADA LISAN KEPADA ALGEBRA",
        id: "EKSPRESI ALJABAR DARI VERBAL KE ALJABAR",
        zh: "代数式：从语言到代数",
        ru: "АЛГЕБРАИЧЕСКИЕ ВЫРАЖЕНИЯ: ОТ СЛОВ К АЛГЕБРЕ",
        es: "EXPRESIONES ALGEBRAICAS DE VERBAL A ALGEBRAICO",
        fr: "EXPRESSIONS ALGÉBRIQUES DU VERBAL À L'ALGÉBRIQUE",
        pt: "EXPRESSÕES ALGÉBRICAS DO VERBAL PARA O ALGÉBRICO",
        ja: "代数式：言語から代数へ",
        link: "https://bekrmatmt25.my.canva.site/cebirsel-ifadelerle-oyun-tasar-m-kopyas"
    },
    {
        tr: "CEBİRSEL İFADELER CEBİRDEN SÖZELE",
        en: "ALGEBRAIC EXPRESSIONS FROM ALGEBRAIC TO VERBAL",
        de: "VON DER ALGEBRA ZUR SPRACHE",
        ar: "التعبيرات الجبرية من الجبرية إلى اللفظية",
        hi: "बीजगणितीय व्यंजक: बीजगणितीय से मौखिक",
        ms: "UNGKAPAN ALGEBRA DARIPADA ALGEBRA KEPADA LISAN",
        id: "EKSPRESI ALJABAR DARI ALJABAR KE VERBAL",
        zh: "代数式：从代数到语言",
        ru: "АЛГЕБРАИЧЕСКИЕ ВЫРАЖЕНИЯ: ОТ АЛГЕБРЫ К СЛОВАМ",
        es: "EXPRESIONES ALGEBRAICAS DE ALGEBRAICO A VERBAL",
        fr: "EXPRESSIONS ALGÉBRIQUES DE L'ALGÉBRIQUE AU VERBAL",
        pt: "EXPRESSÕES ALGÉBRICAS DO ALGÉBRICO PARA O VERBAL",
        ja: "代数式：代数から言語へ",
        link: "https://bekrmatmt25.my.canva.site/cebirsel-ifadeler-2-cebirden-s-zele"
    },
    {
        tr: "CEBİRSEL İFADELER DEĞER HESAPLAMA",
        en: "CALCULATING VALUES OF ALGEBRAIC EXPRESSIONS",
        de: "BERECHNEN VON WERTE ALGEBRAISCHER AUSDRÜCKE",
        ar: "حساب قيم التعبيرات الجبرية",
        hi: "बीजगणितीय व्यंजकों के मानों की गणना",
        ms: "MENGIRA NILAI UNGKAPAN ALGEBRA",
        id: "MENGHITUNG NILAI EKSPRESI ALJABAR",
        zh: "计算代数式的值",
        ru: "ВЫЧИСЛЕНИЕ ЗНАЧЕНИЙ АЛГЕБРАИЧЕСКИХ ВЫРАЖЕНИЙ",
        es: "CALCULAR VALORES DE EXPRESIONES ALGEBRAICAS",
        fr: "CALCUL DES VALEURS D'EXPRESSIONS ALGÉBRIQUES",
        pt: "CALCULAR VALORES DE EXPRESSÕES ALGÉBRICAS",
        ja: "代数式の値の計算",
        link: "https://bekrmatmt25.my.canva.site/cebirsel-ifadelerin-degerini-hesaplamak"
    },
    {
        tr: "ARAŞTIRMA ADIMLARI (Canva)",
        en: "RESEARCH STEPS (Canva)",
        de: "FORSCHUNGSSCHRITTE (Canva)",
        ar: "خطوات البحث (كانفا)",
        hi: "अनुसंधान चरण (Canva)",
        ms: "LANGKAH PENYELIDIKAN (Canva)",
        id: "LANGKAH PENELITIAN (Canva)",
        zh: "研究步骤 (Canva)",
        ru: "ЭТАПЫ ИССЛЕДОВАНИЯ (Canva)",
        es: "PASOS DE INVESTIGACIÓN (Canva)",
        fr: "ÉTAPES DE RECHERCHE (Canva)",
        pt: "PASSOS DE PESQUISA (Canva)",
        ja: "研究のステップ (Canva)",
        link: "https://bekrmatmt25.my.canva.site/5-sinif-arastirma-adimlari"
    },
    {
        tr: "ARAŞTIRMA ADIMLARI (GitHub)",
        en: "RESEARCH STEPS (GitHub)",
        de: "FORSCHUNGSSCHRITTE (GitHub)",
        ar: "خطوات البحث (جيت هاب)",
        hi: "अनुसंधान चरण (GitHub)",
        ms: "LANGKAH PENYELIDIKAN (GitHub)",
        id: "LANGKAH PENELITIAN (GitHub)",
        zh: "研究步骤 (GitHub)",
        ru: "ЭТАПЫ ИССЛЕДОВАНИЯ (GitHub)",
        es: "PASOS DE INVESTIGACIÓN (GitHub)",
        fr: "ÉTAPES DE RECHERCHE (GitHub)",
        pt: "PASSOS DE PESQUISA (GitHub)",
        ja: "研究のステップ (GitHub)",
        link: "https://bdemir1499.github.io/5.sinif-arastirma-asamalari/"
    },
    {
        tr: "ÜÇGENDE YARDIMCI ELEMANLAR",
        en: "AUXILIARY ELEMENTS IN TRIANGLES",
        de: "HILFSELEMENTE IN DREIECKEN",
        ar: "العناصر المساعدة في المثلث",
        hi: "त्रिभुजों में सहायक तत्व",
        ms: "ELEMEN PEMBANTU DALAM SEGI TIGA",
        id: "UNSUR PEMBANTU DALAM SEGITIGA",
        zh: "三角形中的辅助要素",
        ru: "ВСПОМОГАТЕЛЬНЫЕ ЭЛЕМЕНТЫ В ТРЕУГОЛЬНИКАХ",
        es: "ELEMENTOS AUXILIARES EN TRIÁNGULOS",
        fr: "ÉLÉMENTS AUXILIAIRES DANS LES TRIANGLES",
        pt: "ELEMENTOS AUXILIARES EM TRIÂNGULOS",
        ja: "三角形の補助要素",
        link: "https://bekrmatmt25.my.canva.site/ucgende-yardim-i-elemanlar"
    },
    {
        tr: "ÜÇGEN ÇİZİMİ",
        en: "TRIANGLE DRAWING",
        de: "DREIECKE ZEICHNEN",
        ar: "رسم المثلث",
        hi: "त्रिभुज आरेखण",
        ms: "LUKISAN SEGI TIGA",
        id: "MENGGAMBAR SEGITIGA",
        zh: "三角形绘制",
        ru: "ПОСТРОЕНИЕ ТРЕУГОЛЬНИКА",
        es: "DIBUJO DE TRIÁNGULOS",
        fr: "DESSIN DE TRIANGLE",
        pt: "DESENHO DE TRIÂNGULOS",
        ja: "三角形の作図",
        link: "https://bekrmatmt25.my.canva.site/ucgen-cizim-sartlari"
    },
    {
        tr: "ÜÇGENDE EŞLİK VE BENZERLİK",
        en: "CONGRUENCE AND SIMILARITY IN TRIANGLES",
        de: "KONGRUENZ UND ÄHNLICHKEIT IN DREIECKEN",
        ar: "تطابق وتشابه المثلثات",
        hi: "त्रिभुजों में सर्वांगसमता और समरूपता",
        ms: "KONGRUEN DAN KESERUPAAN DALAM SEGI TIGA",
        id: "KEKONGRUENAN DAN KESEBANGUNAN DALAM SEGITIGA",
        zh: "三角形的全等和相似",
        ru: "КОНГРУЭНТНОСТЬ И ПОДОБИЕ ТРЕУГОЛЬНИКОВ",
        es: "CONGRUENCIA Y SEMEJANZA EN TRIÁNGULOS",
        fr: "CONGRUENCE ET SIMILITUDE DANS LES TRIANGLES",
        pt: "CONGRUÊNCIA E SEMELHANÇA EM TRIÂNGULOS",
        ja: "三角形の合同と相似",
        link: "https://bdemir1499.github.io/eslikvebenzerlik/"
    },
    {
        tr: "PRİZMALARIN ELEMANLARI",
        en: "ELEMENTS OF PRISMS",
        de: "ELEMENTE VON PRISMEN",
        ar: "عناصر المنشورات",
        hi: "प्रिज्म के तत्व",
        ms: "ELEMEN PRISMA",
        id: "UNSUR-UNSUR PRISMA",
        zh: "棱柱的要素",
        ru: "ЭЛЕМЕНТЫ ПРИЗМ",
        es: "ELEMENTOS DE LOS PRISMAS",
        fr: "ÉLÉMENTS DES PRISMES",
        pt: "ELEMENTOS DOS PRISMAS",
        ja: "柱体の要素",
        link: "https://bekrmatmt25.my.canva.site/prizmalarin-elemanlar-ve-a-inimlari"
    },
    {
        tr: "PİRAMİT VE AÇINIMI",
        en: "PYRAMID AND ITS NET",
        de: "PYRAMIDE UND IHR NETZ",
        ar: "الهرم وشبكته",
        hi: "पिरामिड और उसका जाल",
        ms: "PIRAMID DAN BENTANGANNYA",
        id: "LIMAS DAN JARING-JARINGNYA",
        zh: "棱锥及其展开图",
        ru: "ПИРАМИДА И ЕЕ РАЗВЕРТКА",
        es: "PIRÁMIDE Y SU DESARROLLO",
        fr: "PYRAMIDE ET SON PATRON",
        pt: "PIRÂMIDE E SUA PLANIFICAÇÃO",
        ja: "錐体とその展開図",
        link: "https://bekrmatmt25.my.canva.site/piramidin-elemanlar-ve-acinimi"
    },
    {
        tr: "PRİZMA, PİRAMİT, KONİ, SİLİNDİR",
        en: "PRISM, PYRAMID, CONE, CYLINDER",
        de: "PRISMA, PYRAMIDE, KEGEL, ZYLINDER",
        ar: "المنشور، الهرم، المخروط، الاسطوانة",
        hi: "प्रिज्म, पिраमिड, शंकु, बेलन",
        ms: "PRISMA, PIRAMID, KON, SILINDIR",
        id: "PRISMA, LIMAS, KERUCUT, TABUNG",
        zh: "棱柱、棱锥、圆锥、圆柱",
        ru: "ПРИЗМА, ПИРАМИДА, КОНУС, ЦИЛИНДР",
        es: "PRISMA, PIRÁMIDE, CONO, CILINDRO",
        fr: "PRISME, PYRAMIDE, CÔNE, CYLINDRE",
        pt: "PRISMA, PIRÂMIDE, CONE, CILINDRO",
        ja: "柱体、錐体、円錐、円柱",
        link: "https://sites.google.com/view/uc-boyutlu-sekiller/ana-sayfa_1"
    },
    {
        tr: "KÖŞEGENLERDEN DÖRTGENLERE (2)",
        en: "FROM DIAGONALS TO QUADRILATERALS (2)",
        de: "VON DIAGONALEN ZU VIERECKEN (2)",
        ar: "من الأقطار إلى الأشكال الرباعية (2)",
        hi: "विकर्णों से चतुर्भुज तक (2)",
        ms: "DARIPADA PEPENJURU KEPADA SISI EMPAT (2)",
        id: "DARI DIAGONAL KE SEGI EMPAT (2)",
        zh: "从对角线到四边形 (2)",
        ru: "ОТ ДИАГОНАЛЕЙ К ЧЕТЫРЕХУГОЛЬНИКАМ (2)",
        es: "DE LAS DIAGONALES A LOS CUADRILÁTEROS (2)",
        fr: "DES DIAGONALES AUX QUADRILATÈRES (2)",
        pt: "DAS DIAGONAIS AOS QUADRILÁTEROS (2)",
        ja: "対角線から四角形へ (2)",
        link: "https://bekrmatmt25.my.canva.site/kosegenlerden-dortgenlere"
    }
];

// --- BURAYA YAPIŞTIR ---
window.sendNetworkData = function(dataObj) {
    // 1. Durum: Eğer bu cihaz TABLET ise (tahtaya bağlıyız)
    if (typeof myConnection !== 'undefined' && myConnection && myConnection.open) {
        myConnection.send(dataObj);
    }
    // 2. Durum: Eğer bu cihaz AKILLI TAHTA ise (bağlı olan tabletlere gönder)
    else if (typeof window.aktifBaglantilar !== 'undefined') {
        for (let id in window.aktifBaglantilar) {
            if (window.aktifBaglantilar[id] && window.aktifBaglantilar[id].open) {
                window.aktifBaglantilar[id].send(dataObj);
            }
        }
    }
};


// Sayfa açıldığında kırmızı butonun yanlışlıkla görünmesini engellemek için:
const closePdfBtn = document.getElementById('btn-close-pdf');
if (closePdfBtn) {
    closePdfBtn.classList.add('hidden');
    closePdfBtn.style.display = 'none'; // Kesin olarak gizle
}




function getGlobalCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    return {
        x: clientX - rect.left,
        y: clientY - rect.top
    };
}

function getPointerPos(e) {
    const rect = canvas.getBoundingClientRect();
    let cX = e.clientX;
    let cY = e.clientY;

    // --- SENİN MEVCUT HATA KORUMA MANTIĞIN (DOKUNULMADI) ---
    if (cX === undefined || cX === null || isNaN(cX)) {
        if (e.targetTouches && e.targetTouches.length > 0) {
            cX = e.targetTouches[0].clientX;
            cY = e.targetTouches[0].clientY;
        } else if (e.touches && e.touches.length > 0) {
            cX = e.touches[0].clientX;
            cY = e.touches[0].clientY;
        } else if (e.changedTouches && e.changedTouches.length > 0) {
            cX = e.changedTouches[0].clientX;
            cY = e.changedTouches[0].clientY;
        } else {
            cX = 0; 
            cY = 0;
        }
    }

    // --- YENİ DÜZELTİLMİŞ HESAPLAMA (ÖZELLİK KAYBI YOK) ---
    return {
        // (cX - rect.left) ile ham koordinatı bulup, 
        // kanvasın iç çözünürlüğü ile ekrandaki boyutu arasındaki orana (canvas.width / rect.width) çarpıyoruz.
        x: ((cX || 0) - rect.left) * (canvas.width / rect.width),
        y: ((cY || 0) - rect.top) * (canvas.height / rect.height)
    };
}

// --- GRAFİK TABLET SİMÜLATÖRÜ ---
function getPointerInfo(e) {
    // BURAYI false YAPTIK!
    const testModuAcik = false; 

    // Eğer test modu açıksa ve fare kullanılıyorsa, onu "Kalem" gibi kandır
    if (testModuAcik && e.pointerType === 'mouse') {
        return {
            type: 'pen',
            pressure: Math.random() * 0.8 + 0.2
        };
    }
    
    return {
        type: e.pointerType,
        pressure: e.pressure || 1 
    };
}


// --- KANVAS AYARLARI ---

const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');

function setupCanvasResolution() {
    const rect = canvas.getBoundingClientRect();
    
    // Kanvasın iç piksel sayısını, ekrandaki gerçek boyutuyla birebir eşitle
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // Eğer çizimlerin varsa, çözünürlük değişince silinmemesi için yeniden çizdir
    if (typeof redrawAllStrokes === 'function') {
        redrawAllStrokes();
    }
}

// 1. Uygulama ilk açıldığında çalıştır
setupCanvasResolution();

// 2. Ekran boyutu her değiştiğinde (yükle butonu sonrası veya yan çevirince) çalıştır
window.addEventListener('resize', setupCanvasResolution);

// PARDUS KESİN ÇÖZÜM: Tarayıcının kaydırma ve yakınlaştırma yapmasını yasakla
canvas.style.touchAction = 'none';
canvas.style.userSelect = 'none';
document.body.style.overscrollBehavior = 'none';


// --- RESİM YÜKLEME DEĞİŞKENLERİ ---
let backgroundImage = null; // Yüklenen resmi tutacak değişken
const uploadButton = document.getElementById('btn-upload');
const fileInput = document.getElementById('file-input');

// --- app.js (DÜZELTİLMİŞ BAŞLANGIÇ BÖLÜMÜ) ---

// --- SESLER (TÜMÜ İPTAL EDİLDİ / SESSİZ MOD) ---
// Gerçek ses dosyaları yerine, hiçbir iş yapmayan "sahte" bir oynatıcı tanımlıyoruz.
// Bu sayede alt satırlardaki hiçbir kodu silmenize gerek kalmaz, hepsi sessizce çalışır.

const silentAudio = { 
    play: function() {},   // Çal komutu gelirse: Hiçbir şey yapma.
    pause: function() {},  // Durdur komutu gelirse: Hiçbir şey yapma.
    currentTime: 0,        // Süre ayarı gelirse: Kabul et ama işleme.
    src: "" 
};

window.audio_click = silentAudio;
let audio_click_src_set = true; // Hata vermemesi için "ayarlandı" sayıyoruz.
window.audio_undo = silentAudio;
window.audio_draw = silentAudio;
window.audio_eraser = silentAudio;


// --- DEĞİŞKENLER ---
 
let snapshotStart = null; 
const animateButton = document.getElementById('btn-animate');
let currentTool = 'none'; 
let isPinching = false;           // İki parmakla yakınlaştırma aktif mi?
let initialDistance = 0;          // Başlangıç parmak mesafesi (zoom için)
let initialScale = 0;             // Başlangıçta seçili nesnenin genişliği
let initialCenter = { x: 0, y:  0 }; // İki parmağın merkez noktası (pan için)
let currentPenColor = '#FFFFFF'; 
let currentPenWidth = 3;
window.currentLineColor = '#FFFFFF'; // Varsayılan Renk: BEYAZ
const SNAP_THRESHOLD = 10;
let returnToSnapshot = false; // İşlem bitince geri dönülecek mi? 

 

let nextPointChar = 'A'; 
window.nextPointChar = nextPointChar;

let lineStartPoint = null; 
let currentMousePos = { x: 0, y: 0 }; 
let snapTarget = null; 
let snapHoverTimer = null;

window.tempPolygonData = null; 

let isDrawingLine = false; 
let isDrawingInfinityLine = false; 
let isDrawingSegment = false; 
let isDrawingRay = false; 
let isMoving = false;         
let selectedItem = null;      
let selectedPointKey = null;  
let rotationPivot = null;     
let dragStartPos = { x: 0, y: 0 }; 
let originalStartPos = {};
let currentPDF = null;       // Yüklenen PDF dosyası
let currentPDFPage = 1;      // Şu anki sayfa
let totalPDFPages = 0;       // Toplam sayfa
let pdfImageStroke = null;   // Ekrana çizilen PDF sayfası

// --- HTML ELEMENTLERİ ---
const body = document.body;

// 1. Sol Panel Araçları
const penButton = document.getElementById('btn-kalem');
const eraserButton = document.getElementById('btn-silgi');
const lineButton = document.getElementById('btn-cizgi');
const rulerButton = document.getElementById('btn-cetvel');
const gonyeButton = document.getElementById('btn-gonye');
const aciolcerButton = document.getElementById('btn-aciolcer');
const pergelButton = document.getElementById('btn-pergel');
const polygonButton = document.getElementById('btn-cokgenler');
const oyunlarButton = document.getElementById('btn-oyunlar');
const oyunlarOptions = document.getElementById('oyunlar-options');

if (oyunlarOptions) {
    oyunlarOptions.classList.add('hidden');
}
oyunlarButton.classList.remove('active');


// --- DİKDÖRTGEN BUTONU TANIMLAMASI ---
const dikdortgenButton = document.getElementById('btn-dikdortgen');

if (dikdortgenButton) {
    dikdortgenButton.addEventListener('click', () => {
        if (typeof window.setActiveTool === 'function') {
            window.setActiveTool('draw_rectangle');
        } else {
            window.currentTool = 'draw_rectangle';
        }
    });
}
// --------------------------------------

// 2. Alt Menü Butonları ve Seçenekler
const penOptions = document.getElementById('pen-options');
const colorBoxes = document.querySelectorAll('#pen-options .color-box');
const lineOptions = document.getElementById('line-options');
const pointButton = document.getElementById('btn-nokta');
const straightLineButton = document.getElementById('btn-d_cizgi');
const infinityLineButton = document.getElementById('btn-dogru');
const segmentButton = document.getElementById('btn-dogru_parcasi');
const rayButton = document.getElementById('btn-isin');
const lineColorOptions = document.querySelectorAll('#line-color-options .color-box');
const polygonOptions = document.getElementById('polygon-options');
const polygonPreviewLabel = document.getElementById('polygon-preview-label');
const circleButton = document.getElementById('btn-cember');
const regularPolygonButtons = document.querySelectorAll('#polygon-options button[data-sides]');
const polygonColorOptions = document.querySelectorAll('#polygon-color-options .color-box');
// 🔑 Burada oyunlarOptions tekrar tanımlanmadı, yukarıdaki global tanım kullanılacak.


// 3. Sağ Panel Araçları
const undoButton = document.getElementById('btn-undo');
const clearAllButton = document.getElementById('btn-clear-all');
const moveButton = document.getElementById('btn-move');
const fillButton = document.getElementById('btn-fill');
const fillOptions = document.getElementById('fill-options');
const fillColorBoxes = document.querySelectorAll('#fill-options .color-box');
let currentFillColor = '#FF69B4';

// --- CANLANDIR VE KES MENÜSÜ ---
const btnSnapshotMain = document.getElementById('btn-snapshot-main');
const snapshotOptions = document.getElementById('snapshot-options');
const btnSnapshotBox = document.getElementById('btn-snapshot-box');
const btnSnapshotLasso = document.getElementById('btn-snapshot-lasso');

if (btnSnapshotMain) {
    btnSnapshotMain.addEventListener('click', () => {
        snapshotOptions.classList.toggle('hidden');
    });
}
if (btnSnapshotBox) {
    btnSnapshotBox.addEventListener('click', () => {
        setActiveTool('snapshot'); // Senin mevcut standart kutu aracın
        snapshotOptions.classList.add('hidden');
    });
}
if (btnSnapshotLasso) {
    btnSnapshotLasso.addEventListener('click', () => {
        setActiveTool('lasso'); // YENİ: Serbest kesim aracımız
        snapshotOptions.classList.add('hidden');
    });
}

// 4. Resim ve PDF Yükleme Araçları


const pdfControls = document.getElementById('pdf-controls');
const pageCountLabel = document.getElementById('page-count-label');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');




// --- GÖRSEL YARDIMCILAR ---
const snapIndicator = document.createElement('div');
snapIndicator.id = 'snap-indicator';
body.appendChild(snapIndicator);
const eraserPreview = document.createElement('div');
eraserPreview.className = 'eraser-cursor-preview';
body.appendChild(eraserPreview);


// --- YARDIMCI FONKSİYONLAR ---

function distance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function advanceChar(char) {
    let charCode = char.charCodeAt(0) + 1;
    if (charCode > 90) charCode = 65; 
    return String.fromCharCode(charCode);
}

function findSnapPoint(pos) {
    for (const stroke of drawnStrokes) {
        if (stroke.type === 'point') {
            if (distance(pos, stroke) < SNAP_THRESHOLD) return { x: stroke.x, y: stroke.y }; 
        } else if (stroke.type === 'straightLine' || stroke.type === 'segment') { 
            if (distance(pos, stroke.p1) < SNAP_THRESHOLD) return stroke.p1;
            if (distance(pos, stroke.p2) < SNAP_THRESHOLD) return stroke.p2;
        }
    }
    return null; 
}


function getEventPosition(e) {
    if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
}

function drawDot(pos, color = '#00FFCC') {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 5, 0, 2 * Math.PI); 
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLabel(text, pos, color = '#FF69B4') {
    ctx.font = 'bold 16px Arial';
    ctx.fillStyle = color; 
    ctx.fillText(text, pos.x + 8, pos.y + 5);
}

function drawInfinityLine(p1, p2, color, width, isRay = false) {
    const INFINITY = 5000;
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const mag = Math.sqrt(dx * dx + dy * dy);
    if (mag === 0) return { ux: 0, uy: 0 }; 
    const ux = dx / mag;
    const uy = dy / mag;
    const drawP1 = isRay ? p1 : { x: p1.x - ux * INFINITY, y: p1.y - uy * INFINITY };
    const drawP2 = { x: p1.x + ux * INFINITY, y: p1.y + uy * INFINITY };
    ctx.beginPath();
    ctx.moveTo(drawP1.x, drawP1.y);
    ctx.lineTo(drawP2.x, drawP2.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    return { ux, uy }; 
}

window.bringToolToFront = function(clickedElement) {
    const tools = [
        window.RulerTool ? window.RulerTool.rulerElement : null,
        window.GonyeTool ? window.GonyeTool.gonyeElement : null,
        window.AciolcerTool ? window.AciolcerTool.aciolcerElement : null,
        window.PergelTool ? window.PergelTool.pergelElement : null
    ];
    tools.forEach(tool => { if (tool) tool.style.zIndex = 5; });
    if (clickedElement) clickedElement.style.zIndex = 6;
}

function redrawAllStrokes() {
    // 1. ÖNCE KOORDİNATLARI SIFIRLA VE TÜM EKRANI SİL
    ctx.setTransform(1, 0, 0, 1, 0, 0); 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // GÜVENLİK KİLİDİ
    if (!window.drawnStrokes || window.drawnStrokes.length === 0) return;

    // --- BÜYÜK ÇÖZÜM: KATMAN (Z-INDEX) KORUMASI ---
    // Arka planı (sayfayı veya pdf'i) her zaman zorla en alta gönderir.
    // Böylece kopyalar, makaslar ve çizimler ASLA sayfanın altında kalmaz!
    window.drawnStrokes.sort((a, b) => {
        if (a.isBackground && !b.isBackground) return -1;
        if (!a.isBackground && b.isBackground) return 1;
        return 0;
    });

    ctx.save();
    // (Buradaki translate ve scale satırlarını tamamen sildik. Zemin artık sabit!)

    for (const stroke of drawnStrokes) {
        
        // --- BU BLOĞU DÖNGÜNÜN EN BAŞINA EKLE ---
        if (stroke.type === 'preview') {
            const p = stroke.payload;
            ctx.save();
            ctx.strokeStyle = '#FF0000'; // Kırmızı
            ctx.lineWidth = 3;
            ctx.setLineDash([5, 5]); // Kesikli

            if (p.tool === 'pen' && p.path) {
                ctx.beginPath();
                ctx.moveTo(p.path[0].x, p.path[0].y);
                for (let i = 1; i < p.path.length; i++) ctx.lineTo(p.path[i].x, p.path[i].y);
                ctx.stroke();
            }
            else if (['straightLine', 'line', 'segment', 'ray'].includes(p.tool) && p.start && p.end) {
                ctx.beginPath();
                const dx = p.end.x - p.start.x, dy = p.end.y - p.start.y, devCarpan = 5000;
                if (p.tool === 'line') { ctx.moveTo(p.start.x - dx * devCarpan, p.start.y - dy * devCarpan); ctx.lineTo(p.start.x + dx * devCarpan, p.start.y + dy * devCarpan); }
                else if (p.tool === 'ray') { ctx.moveTo(p.start.x, p.start.y); ctx.lineTo(p.start.x + dx * devCarpan, p.start.y + dy * devCarpan); }
                else { ctx.moveTo(p.start.x, p.start.y); ctx.lineTo(p.end.x, p.end.y); }
                ctx.stroke();
            }
            else if (p.tool === 'rectangle' && p.start && p.end) {
                ctx.beginPath();
                ctx.rect(Math.min(p.start.x, p.end.x), Math.min(p.start.y, p.end.y), Math.abs(p.end.x - p.start.x), Math.abs(p.end.y - p.start.y));
                ctx.stroke();
            }
            else if (p.start && p.end) {
                const radius = p.radius || Math.hypot(p.end.x - p.start.x, p.end.y - p.start.y);
                ctx.beginPath();
                ctx.arc(p.start.x, p.start.y, radius, 0, Math.PI * 2);
                ctx.stroke();
            }
            ctx.restore();
            continue; // Bu nesneyi çizdik, diğer döngülere girmesine gerek yok
        }
        // ------------------------------------------

        // ... (Senin mevcut if (stroke.type === 'pen') { ... } kodların burada devam edecek)
  // --- AKILLI BOYAMA MASKESİ ---
        if (stroke.type === 'lasso-mask') {
            ctx.save();
            
            // Lazerle şeffaf delme iptal, akıllı tarayıcının bulduğu renkle boyama devrede!
            ctx.fillStyle = stroke.fillColor || "white"; 
            
            ctx.beginPath();
            if (stroke.points && stroke.points.length > 0) {
                ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
                for (let i = 1; i < stroke.points.length; i++) {
                    ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
                }
            }
            ctx.closePath();
            
            // Kestiğin tam o noktayı, sensörlerin bulduğu sarı renge pürüzsüzce boyar
            ctx.fill(); 
            ctx.restore();
            continue; 
        }
        
        // --- KALEM (PEN) GRAFİK TABLET DESTEKLİ ---
        if (stroke.type === 'pen') {
            const points = stroke.path;
            
            if (points.length < 2) {
                // Sadece tıklandıysa tek bir nokta koy
                ctx.beginPath();
                ctx.arc(points[0].x, points[0].y, (stroke.baseWidth * (points[0].p || 1)) / 2, 0, Math.PI * 2);
                ctx.fillStyle = stroke.color;
                ctx.fill();
            } else {
                // Çizgiyi basınç hassasiyetiyle çiz
                for (let i = 1; i < points.length; i++) {
                    ctx.beginPath();
                    ctx.moveTo(points[i - 1].x, points[i - 1].y);
                    ctx.lineTo(points[i].x, points[i].y);
                    ctx.strokeStyle = stroke.color;
                    
                    // Basıncı genişliğe uygula (En az %20 kalınlık olsun)
                    let currentPressure = points[i].p !== undefined ? points[i].p : 1;
                    let dynamicWidth = stroke.baseWidth * Math.max(0.2, currentPressure);
                    
                    ctx.lineWidth = dynamicWidth;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    ctx.stroke();
                }
            }
        }

       // --- RESİM / PDF VE CANLANDIR (SNAPSHOT) KOPYASI ---
       else if (stroke.type === 'image') {

            // YENİ ŞART: Kestiğimiz kopya değilse, kesinlikle ana zemindir. Sona sakla!
            if (stroke.isBackground !== false) continue;
            let imgToDraw = null;

            // 1. KAYNAK KONTROLÜ (Kayıp olan Canlandır kodunu geri ekledik)
            if (stroke.img && stroke.img instanceof HTMLImageElement) {
                imgToDraw = stroke.img; // PDF veya Dosya yüklemesi
            } else if (stroke.imgData) {
                if (!stroke.imgObj) {
                    stroke.imgObj = new Image();
                    stroke.imgObj.src = stroke.imgData;
                    // Resim yüklendiğinde ekranı tazele
                    stroke.imgObj.onload = () => { if (window.redrawAllStrokes) window.redrawAllStrokes(); };
                }
                imgToDraw = stroke.imgObj; // Canlandır kopyası
            }

            // 2. ÇİZİM MANTIĞI VE BUTONLARIN EKLENDİĞİ YER
            if (imgToDraw && (imgToDraw.complete || imgToDraw.readyState >= 2)) {
                ctx.save();
                const centerX = stroke.x + (stroke.width / 2);
                const centerY = stroke.y + (stroke.height / 2);
                ctx.translate(centerX, centerY);
                ctx.rotate((stroke.rotation || 0) * Math.PI / 180);
                
                ctx.drawImage(imgToDraw, -stroke.width / 2, -stroke.height / 2, stroke.width, stroke.height);
                
                // PARÇA SEÇİLİYSE ÇERÇEVE VE BUTONLARI ÇİZ
                if (typeof currentTool !== 'undefined' && currentTool === 'move' && selectedItem === stroke) {
                    ctx.strokeStyle = '#00FFCC'; ctx.lineWidth = 2; ctx.setLineDash([5, 5]);
                    ctx.strokeRect(-stroke.width / 2, -stroke.height / 2, stroke.width, stroke.height);
                    ctx.setLineDash([]);

                    // 1. Döndürme Butonu (Üst Orta - Yeşil)
                    const rotX = 0;
                    const rotY = -stroke.height / 2 - 25;
                    ctx.beginPath();
                    ctx.arc(rotX, rotY, 12, 0, 2 * Math.PI); 
                    ctx.fillStyle = '#0F0'; ctx.fill();
                    ctx.strokeStyle = '#000'; ctx.lineWidth = 2; ctx.stroke();
                    
                    // İçine Döndürme Simgesi (↻) Ekle - BEYAZ
                    ctx.font = "bold 16px Arial"; 
                    ctx.fillStyle = "#FFF"; // Siyah yerine BEYAZ yapıldı
                    ctx.textAlign = "center"; 
                    ctx.textBaseline = "middle";
                    ctx.fillText("↻", rotX, rotY - 1); 

                    // 2. Boyutlandırma Butonu (Sağ Alt - Pembe)
                    const resX = stroke.width / 2;
                    const resY = stroke.height / 2;
                    ctx.beginPath();
                    ctx.arc(resX, resY, 12, 0, 2 * Math.PI);
                    ctx.fillStyle = '#F0F'; ctx.fill();
                    ctx.strokeStyle = '#000'; ctx.lineWidth = 2; ctx.stroke();
                    
                    // İçine Boyutlandırma Simgesi (⤢) Ekle - BEYAZ
                    ctx.fillStyle = "#FFF"; // Pembe butonun simgesi için de rengi BEYAZ yaptık
                    ctx.fillText("⤢", resX, resY);
                }
                ctx.restore();
            }
        }

        // --- NOKTA ---
        else if (stroke.type === 'point') {
            drawDot(stroke);
            drawLabel(stroke.label, stroke);
        }

        // --- DÜZ ÇİZGİ ---
        else if (stroke.type === 'straightLine') { 
            ctx.beginPath();
            ctx.moveTo(stroke.p1.x, stroke.p1.y);
            ctx.lineTo(stroke.p2.x, stroke.p2.y);
            ctx.strokeStyle = stroke.color;
            ctx.lineWidth = stroke.width;
            ctx.lineCap = 'round';
            ctx.stroke();
            if (stroke.lengthLabel) drawLabel(stroke.lengthLabel, stroke.lengthLabelPos, '#FFFF00');
        }

        // --- DOĞRU ---
        else if (stroke.type === 'line') { 
            const { ux, uy } = drawInfinityLine(stroke.p1, stroke.p2, stroke.color, stroke.width, false);
            if (ux !== 0 || uy !== 0) {
                drawDot(stroke.p1, stroke.color);
                drawDot(stroke.p2, stroke.color);
                drawLabel(stroke.label1, stroke.p1, '#FF69B4');
                drawLabel(stroke.label2, stroke.p2, '#FF69B4');
            }
        }

        // --- DOĞRU PARÇASI ---
        else if (stroke.type === 'segment') { 
            ctx.beginPath();
            ctx.moveTo(stroke.p1.x, stroke.p1.y);
            ctx.lineTo(stroke.p2.x, stroke.p2.y);
            ctx.strokeStyle = stroke.color;
            ctx.lineWidth = stroke.width || 3; 
            ctx.lineCap = 'round';
            ctx.stroke();
            drawLabel(stroke.label1, stroke.p1, '#FF69B4'); 
            drawLabel(stroke.label2, stroke.p2, '#FF69B4');
            if (stroke.lengthLabel) drawLabel(stroke.lengthLabel, stroke.lengthLabelPos, '#FFFF00'); 
        }

        // --- IŞIN ---
        else if (stroke.type === 'ray') { 
            const { ux, uy } = drawInfinityLine(stroke.p1, stroke.p2, stroke.color, stroke.width, true); 
            if (ux !== 0 || uy !== 0) {
                drawDot(stroke.p1, stroke.color);
                drawDot(stroke.p2, stroke.color);
                drawLabel(stroke.label1, stroke.p1, '#FF69B4');
                drawLabel(stroke.label2, stroke.p2, '#FF69B4');
            }
        }

        // --- ÇOKGENLER ---
        else if (stroke.type === 'polygon') {
            if (window.PolygonTool && typeof window.PolygonTool.calculateVertices === 'function') {
                const vertices = window.PolygonTool.calculateVertices(stroke.center, stroke.radius, stroke.sideCount, stroke.rotation);
                stroke.vertices = vertices; 

                if (vertices.length > 0) {
                    ctx.beginPath();
                    ctx.moveTo(vertices[0].x, vertices[0].y);
                    for (let i = 1; i < vertices.length; i++) ctx.lineTo(vertices[i].x, vertices[i].y);
                    ctx.closePath();
                }
                
                ctx.fillStyle = stroke.fillColor || 'rgba(0, 0, 0, 0.2)'; 
                ctx.fill();
                ctx.strokeStyle = stroke.color;
                ctx.lineWidth = stroke.width || 3; 
                ctx.lineCap = 'round'; ctx.lineJoin = 'round';
                ctx.stroke();

                drawDot(stroke.center, stroke.color);
                drawLabel(stroke.label, stroke.center, '#FF69B4');
                vertices.forEach(v => drawDot(v, stroke.color));
                
                if (stroke.showEdgeLabels) {
                    for (let j = 0; j < vertices.length; j++) {
                        const v1 = vertices[j];
                        const v2 = vertices[(j + 1) % vertices.length];
                        const midPoint = { x: (v1.x + v2.x) / 2, y: (v1.y + v2.y) / 2 };
                        const edgeLabel = window.PolygonTool.getEdgeLength(v1, v2);
                        drawLabel(edgeLabel, midPoint, '#FF69B4');
                    }
                }
                if (stroke.showAngleLabels) {
                    const angleLabel = window.PolygonTool.getInternalAngle(stroke.sideCount);
                    const arcRadius = 25; 
                    for (let j = 0; j < vertices.length; j++) {
                        const v_current = vertices[j];
                        const v_prev = vertices[j === 0 ? vertices.length - 1 : j - 1];
                        const v_next = vertices[(j + 1) % vertices.length];
                        const startAngle = Math.atan2(v_prev.y - v_current.y, v_prev.x - v_current.x);
                        const endAngle = Math.atan2(v_next.y - v_current.y, v_next.x - v_current.x);
                        ctx.beginPath();
                        ctx.arc(v_current.x, v_current.y, arcRadius, endAngle, startAngle);
                        ctx.strokeStyle = '#FFFF00'; ctx.lineWidth = 2; ctx.stroke();
                        const angle_label_x = (v_current.x * 0.8) + (stroke.center.x * 0.2); 
                        const angle_label_y = (v_current.y * 0.8) + (stroke.center.y * 0.2); 
                        drawLabel(angleLabel, {x: angle_label_x, y: angle_label_y}, '#FFFF00');
                    }
                }
                if (typeof currentTool !== 'undefined' && currentTool === 'move' && selectedItem === stroke) {
                    const rotateHandlePos = window.PolygonTool.getRotateHandlePosition(stroke);
                    ctx.beginPath(); ctx.arc(rotateHandlePos.x, rotateHandlePos.y, 10, 0, 2 * Math.PI);
                    ctx.fillStyle = 'rgba(0, 255, 0, 0.8)'; ctx.fill(); ctx.strokeStyle = '#0F0'; ctx.lineWidth = 2; ctx.stroke();
                    const resizeHandlePos = vertices.length > 0 ? vertices[0] : stroke.center; 
                    ctx.beginPath(); ctx.arc(resizeHandlePos.x, resizeHandlePos.y, 8, 0, 2 * Math.PI);
                    ctx.fillStyle = 'rgba(255, 0, 255, 0.8)'; ctx.fill(); ctx.strokeStyle = '#F0F'; ctx.lineWidth = 2; ctx.stroke();
                }
            }
        }


else if (stroke.type === 'rectangle') {
            ctx.save();
            const centerX = stroke.x + stroke.width / 2;
            const centerY = stroke.y + stroke.height / 2;
            ctx.translate(centerX, centerY);
            ctx.rotate((stroke.rotation || 0) * Math.PI / 180);

            // 1. Dikdörtgeni Çiz
            ctx.beginPath();
            ctx.rect(-stroke.width / 2, -stroke.height / 2, stroke.width, stroke.height);
            ctx.strokeStyle = stroke.color;
            ctx.lineWidth = 3;
            ctx.stroke();

            // 2. Kenar Uzunluklarını Yazdır (Önizlemedeki gibi kalıcı olur)
            if (stroke.showEdgeLabels) {
                ctx.font = "14px Arial";
                ctx.fillStyle = stroke.color;
                ctx.textAlign = "center";
                
                const wCm = (stroke.width / 30).toFixed(1).replace('.', ',');
                const hCm = (stroke.height / 30).toFixed(1).replace('.', ',');

                // Üst Kenar CM
                ctx.fillText(`${wCm} cm`, 0, -stroke.height / 2 - 10);
                
                // Sol Kenar CM (Dikey yazdırmak için döndürüyoruz)
                ctx.save();
                ctx.translate(-stroke.width / 2 - 25, 0);
                ctx.rotate(-Math.PI / 2);
                ctx.fillText(`${hCm} cm`, 0, 0);
                ctx.restore();
            }

            // 3. Köşe Harflerini Yazdır (A, B, C, D)
            if (stroke.labels) {
                ctx.font = "bold 16px Arial";
                ctx.fillStyle = "#FF69B4"; // Pembe harfler
                ctx.fillText(stroke.labels[0], -stroke.width/2 - 15, -stroke.height/2 - 5); // Sol Üst
                ctx.fillText(stroke.labels[1], stroke.width/2 + 10, -stroke.height/2 - 5);  // Sağ Üst
                ctx.fillText(stroke.labels[2], stroke.width/2 + 10, stroke.height/2 + 15);  // Sağ Alt
                ctx.fillText(stroke.labels[3], -stroke.width/2 - 15, stroke.height/2 + 15); // Sol Alt
            }

            // 4. "Taşı" Modu Aktifse Butonları Çiz
            if (currentTool === 'move' && selectedItem === stroke) {
                // Döndürme (Yeşil)
                ctx.fillStyle = '#0F0'; ctx.beginPath(); ctx.arc(0, -stroke.height/2 - 30, 12, 0, 7); ctx.fill();
                // Boyutlandırma (Pembe)
                ctx.fillStyle = '#F0F'; ctx.beginPath(); ctx.arc(stroke.width/2, stroke.height/2, 12, 0, 7); ctx.fill();
            }
            
            // 5. Açı Tıklandıysa 90 Derece Sembolünü Çiz
            if (stroke.showAngleLabels) {
                ctx.font = "bold 14px Arial"; ctx.fillStyle = "yellow";
                ctx.fillText("90°", -stroke.width/2 + 15, -stroke.height/2 + 20);
            }
            ctx.restore();
        }



        // --- ÇEMBER / PERGEL ---
        else if (stroke.type === 'arc') { 
            const PI_RAD = Math.PI / 180;
            let startRad = stroke.startAngle * PI_RAD;
            let endRad = stroke.endAngle * PI_RAD;
            const totalAngleDrawn = Math.abs(stroke.endAngle - stroke.startAngle);

            if (totalAngleDrawn >= 359) { startRad = 0; endRad = 2 * Math.PI; }

            ctx.beginPath();
            ctx.arc(stroke.cx, stroke.cy, stroke.radius, startRad, endRad, false);
            if (totalAngleDrawn >= 359) ctx.closePath(); 
            
            if (stroke.fillColor && stroke.fillColor !== 'transparent' && totalAngleDrawn >= 359) {
                 ctx.fillStyle = stroke.fillColor;
                 ctx.fill();
            }

            ctx.strokeStyle = stroke.color;
            ctx.lineWidth = stroke.width || 3; 
            ctx.lineCap = 'round'; 
            ctx.stroke();

            const centerPos = { x: stroke.cx, y: stroke.cy };
            drawDot(centerPos, stroke.color);
            if (stroke.label) drawLabel(stroke.label, centerPos, '#FF69B4'); 
            
            if (stroke.showCircleInfo) {
                ctx.beginPath();
                ctx.moveTo(centerPos.x, centerPos.y);
                ctx.lineTo(centerPos.x + stroke.radius, centerPos.y);
                ctx.strokeStyle = '#FF69B4'; ctx.lineWidth = 1; ctx.setLineDash([2, 2]); ctx.stroke(); ctx.setLineDash([]); 

                const PI = window.PolygonTool.PI_VALUE || 3;
                const r_px = stroke.radius;
                const r_cm_raw = (r_px / (window.PolygonTool.PIXELS_PER_CM || 30));
                const r_cm_calc = parseFloat(r_cm_raw.toFixed(2)); 
                const r_cm_str = r_cm_raw.toFixed(2).replace('.', ','); 
                const circ_str = (2 * PI * r_cm_calc).toFixed(2).replace('.', ','); 
                const area_str = (PI * r_cm_calc * r_cm_calc).toFixed(2).replace('.', ',');

                const r_label = `r = ${r_cm_str} cm`;
                drawLabel(r_label, {x: centerPos.x + (r_px / 2) - 20, y: centerPos.y - 10}, '#FFFF00'); 
                let labelY = centerPos.y - 20;
                const labelX = centerPos.x + r_px + 30; 
                drawLabel(`Ç = 2 . π . r`, {x: labelX, y: labelY}, '#FFFF00'); labelY += 20; 
                drawLabel(`= 2 . ${PI} . ${r_cm_str} = ${circ_str} cm`, {x: labelX, y: labelY}, '#FFFF00'); labelY += 25; 
                drawLabel(`A = π . r²`, {x: labelX, y: labelY}, '#FFFF00'); labelY += 20;
                drawLabel(`= ${PI} . ${r_cm_str}² = ${area_str} cm²`, {x: labelX, y: labelY}, '#FFFF00'); labelY += 25; 
                drawLabel(`(π = ${PI} alındı)`, {x: labelX, y: labelY}, '#AAAAAA'); 
            }
        }
    } // <-- FOR DÖNGÜSÜ BURADA KAPANIYOR

    ctx.restore();

// === EKLENECEK YENİ BÖLÜM: SAYFAYI EN ARKAYA ÇİZ ===
    // Deliğin arkasından görünmesi için PDF'i her şeyin altına (destination-over) çiziyoruz
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over'; 
    for (const stroke of drawnStrokes) {
    if (stroke.type === 'image' && stroke.isBackground !== false) {
            let imgToDraw = null;
            if (stroke.img && stroke.img instanceof HTMLImageElement) {
                imgToDraw = stroke.img; 
            } else if (stroke.imgObj) {
                imgToDraw = stroke.imgObj; 
            }

            if (imgToDraw && (imgToDraw.complete || imgToDraw.readyState >= 2)) {
                ctx.save();
                const centerX = stroke.x + (stroke.width / 2);
                const centerY = stroke.y + (stroke.height / 2);
                ctx.translate(centerX, centerY);
                ctx.rotate((stroke.rotation || 0) * Math.PI / 180);
                ctx.drawImage(imgToDraw, -stroke.width / 2, -stroke.height / 2, stroke.width, stroke.height);
                ctx.restore();
            }
        }
    }
    ctx.restore();
    // ====================================================

    // --- YENİ EKLENEN KISIM: OTOMATİK HARF SENKRONİZASYONU ---
    // Ekranda o an var olan en yüksek harfi bulur
    let maxCode = 64; 
    drawnStrokes.forEach(s => {
        if (s.label && s.label.charCodeAt(0) > maxCode) maxCode = s.label.charCodeAt(0);
        if (s.label1 && s.label1.charCodeAt(0) > maxCode) maxCode = s.label1.charCodeAt(0);
        if (s.label2 && s.label2.charCodeAt(0) > maxCode) maxCode = s.label2.charCodeAt(0);
    });

    
    // Sıradaki harfe geçer (Z'yi geçerse A'ya döner)
    let nextCode = maxCode + 1;
    if (nextCode > 90) nextCode = 65; 
    
    // Tüm sistemi (Pergel, Çokgenler ve Kalem) tek bir harfe senkronize eder
    nextPointChar = String.fromCharCode(nextCode);
    window.nextPointChar = nextPointChar;
    // ---------------------------------------------------------

// --- 4. ADIM: YENİ POLİGONAL LASSO ÖNİZLEMESİ ---
    if (currentTool === 'lasso' && typeof lassoPoints !== 'undefined' && lassoPoints.length > 0) {
        ctx.save();
        
        // 1. SABİTLENMİŞ ÇİZGİLERİ ÇİZ (Noktalar arası)
        ctx.strokeStyle = '#00ffcc'; // Çizgi rengi turkuaz
        ctx.lineWidth = 2;
        ctx.setLineDash([]); // Sabit çizgiler düz olsun
        ctx.beginPath();
        ctx.moveTo(lassoPoints[0].x, lassoPoints[0].y);
        for (let i = 1; i < lassoPoints.length; i++) {
            ctx.lineTo(lassoPoints[i].x, lassoPoints[i].y);
        }
        ctx.stroke();
        
        // 2. KESİKLİ ÖNİZLEME ÇİZGİSİNİ ÇİZ (Son noktadan imlece giden)
        if (typeof currentMousePos !== 'undefined' && currentMousePos) {
            ctx.beginPath();
            ctx.setLineDash([6, 6]); // Kesikli çizgi efekti
            ctx.strokeStyle = '#aaaaaa'; 
            let lastPoint = lassoPoints[lassoPoints.length - 1];
            ctx.moveTo(lastPoint.x, lastPoint.y);
            ctx.lineTo(currentMousePos.x, currentMousePos.y);
            ctx.stroke();
        }
        
        // 3. TIKLANAN NOKTALARI (KÜÇÜK YUVARLAKLARI) ÇİZ
        ctx.fillStyle = '#ff0044'; 
        ctx.setLineDash([]); 
        for (let i = 0; i < lassoPoints.length; i++) {
            ctx.beginPath();
            // İLK noktayı hedef olarak göstermek için daha BÜYÜK çiziyoruz
            let radius = (i === 0) ? 8 : 4; 
            ctx.arc(lassoPoints[i].x, lassoPoints[i].y, radius, 0, Math.PI * 2);
            ctx.fill();
            
            // İlk noktanın etrafına beyaz bir hedef halkası ekle
            if (i === 0) {
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
        
        ctx.restore();
    } // <-- BURASI YENİ POLİGONAL LASSO BLOĞUNUN BİTİŞ PARANTEZİ


    // --- HASSAS HEDEFLEME ÇAPRAZI (KESKİN NİŞANCI MODU) ---
    // (Lasso seçiliyse ve parmak ekrana basılıysa her zaman çıkar)
    if (currentTool === 'lasso' && window.isDraggingLassoPoint && typeof currentMousePos !== 'undefined' && currentMousePos) {
        ctx.save();
        ctx.beginPath();
        // Ekranın bir ucundan diğer ucuna yatay ve dikey hizalama çizgileri
        ctx.moveTo(0, currentMousePos.y);
        ctx.lineTo(canvas.width, currentMousePos.y);
        ctx.moveTo(currentMousePos.x, 0);
        ctx.lineTo(currentMousePos.x, canvas.height);
        
        ctx.setLineDash([4, 4]); // Kesikli
        
        // Eğer başlangıç noktasına kilitlendiysek çapraz YEŞİL olsun
        if (window.lassoIsClosing) {
            ctx.strokeStyle = '#00FF00'; // Kilitlendi Yeşili
        } else {
            ctx.strokeStyle = 'rgba(255, 0, 255, 0.7)'; // Normal Pembe
        }
        
        ctx.lineWidth = 1.5;
        ctx.stroke();


        // Tam dokunduğun yere minik bir merkez noktası
        ctx.beginPath();
        ctx.arc(currentMousePos.x, currentMousePos.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = window.lassoIsClosing ? '#00FF00' : '#ff00ff';
        ctx.fill();
        ctx.restore(); 
    }

} // <-- redrawAllStrokes FONKSİYONU BURADA TAMAMEN KAPANIYOR


function processLassoCut() {
    if (lassoPoints.length < 3) return;

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    lassoPoints.forEach(p => {
        if (p.x < minX) minX = p.x; if (p.y < minY) minY = p.y;
        if (p.x > maxX) maxX = p.x; if (p.y > maxY) maxY = p.y;
    });

    const width = maxX - minX;
    const height = maxY - minY;
    if (width < 5 || height < 5) return; 

    // =======================================================
    // 1. X-RAY (RÖNTGEN) SENSÖRÜ: Tüm katmanları birleştirip gerçek rengi okur
    // =======================================================
    function getRealColor(x, y) {
        const tCan = document.createElement('canvas');
        tCan.width = 1; tCan.height = 1;
        const tCtx = tCan.getContext('2d');
        
        // Alttaki PDF katmanını oku
        const bgLayer = document.getElementById('pdf-canvas') || document.querySelector('.pdf-page-canvas');
        if (bgLayer) {
            const sX = bgLayer.width / bgLayer.offsetWidth;
            const sY = bgLayer.height / bgLayer.offsetHeight;
            tCtx.drawImage(bgLayer, x * sX, y * sY, 1 * sX, 1 * sY, 0, 0, 1, 1);
        } else {
            tCtx.fillStyle = "white"; tCtx.fillRect(0,0,1,1);
        }
        // Üstteki çizim katmanını ekle
        tCtx.drawImage(canvas, x, y, 1, 1, 0, 0, 1, 1);
        return tCtx.getImageData(0, 0, 1, 1).data;
    }

    // =======================================================
    // 2. KESTİĞİMİZ PARÇAYI (KOPYAYI) OLUŞTUR (X-Ray kullanarak keser)
    // =======================================================
    const offCanvas = document.createElement('canvas');
    offCanvas.width = width; offCanvas.height = height;
    const offCtx = offCanvas.getContext('2d');

    offCtx.beginPath();
    offCtx.moveTo(lassoPoints[0].x - minX, lassoPoints[0].y - minY);
    for (let i = 1; i < lassoPoints.length; i++) {
        offCtx.lineTo(lassoPoints[i].x - minX, lassoPoints[i].y - minY);
    }
    offCtx.closePath();
    offCtx.clip();
    
    const bgLayer = document.getElementById('pdf-canvas') || document.querySelector('.pdf-page-canvas');
    if (bgLayer) {
        const sX = bgLayer.width / bgLayer.offsetWidth;
        const sY = bgLayer.height / bgLayer.offsetHeight;
        offCtx.drawImage(bgLayer, minX * sX, minY * sY, width * sX, height * sY, 0, 0, width, height);
    }
    offCtx.drawImage(canvas, minX, minY, width, height, 0, 0, width, height);
    const imgSrc = offCanvas.toDataURL('image/png');

    // =======================================================
    // 3. AKILLI RENK BULUCU
    // =======================================================
    let smartColor = "white"; 
    try {
        const cX = minX + width / 2;
        const cY = minY + height / 2;
        const centerPixel = getRealColor(cX, cY);

        const margin = 15;
        const scanPoints = [
            { x: minX - margin, y: cY }, 
            { x: maxX + margin, y: cY }, 
            { x: cX, y: minY - margin }, 
            { x: cX, y: maxY + margin }  
        ];

        for (let p of scanPoints) {
            const px = getRealColor(p.x, p.y);
            // Renk farkını hesapla
            const diff = Math.abs(px[0] - centerPixel[0]) + Math.abs(px[1] - centerPixel[1]) + Math.abs(px[2] - centerPixel[2]);
            if (diff > 50) { 
                smartColor = `rgb(${px[0]}, ${px[1]}, ${px[2]})`;
                break; 
            }
        }
    } catch (e) {
        console.warn("Renk okuma hatası", e);
    }

    // =======================================================
    // 4. ZOOM UYUMLU, KALICI YAMA OLUŞTURUCU
    // =======================================================
    const patchCanvas = document.createElement('canvas');
    patchCanvas.width = width; patchCanvas.height = height;
    const pCtx = patchCanvas.getContext('2d');
    pCtx.fillStyle = smartColor;
    pCtx.beginPath();
    pCtx.moveTo(lassoPoints[0].x - minX, lassoPoints[0].y - minY);
    for (let i = 1; i < lassoPoints.length; i++) {
        pCtx.lineTo(lassoPoints[i].x - minX, lassoPoints[i].y - minY);
    }
    pCtx.closePath();
    pCtx.fill(); // Rengi boya
    
    const patchImg = new Image();
    patchImg.src = patchCanvas.toDataURL('image/png');
    patchImg.onload = () => {
        drawnStrokes.unshift({ // Yama her şeyin EN ALTINDA kalacak şekilde başa eklenir
            type: 'image',
            imgObj: patchImg,
            x: minX, y: minY,
            width: width, height: height,
            rotation: 0,
            isBackground: true, // ZOOM YAPILDIĞINDA PDF İLE BÜYÜMESİ İÇİN
            isPatch: true       // SAYFA DEĞİŞİNCE SİLİNMESİ İÇİN ÖZEL ETİKET
        });
        if (window.redrawAllStrokes) window.redrawAllStrokes();
    };

   // =======================================================
    // 5. KESTİĞİNİZ KOPYAYI EKRANA GETİR VE OTOMATİK SEÇ
    // =======================================================
    const newImgStroke = {
        type: 'image',
        imgData: imgSrc,
        x: minX, y: minY,
        width: width, height: height,
        rotation: 0,
        isBackground: false, // KRİTİK: Butonların çıkması için false olmalı
        imgObj: null 
    };
    
    const tempImg = new Image();
    tempImg.src = imgSrc;
    tempImg.onload = () => {

        newImgStroke.imgObj = tempImg;
        if (window.redrawAllStrokes) window.redrawAllStrokes();
    };
   boxCopies.push(newImgStroke);

    
    // --- TABLETTE BUTONLARIN ÇIKMASI İÇİN ŞART ---
    selectedItem = newImgStroke; // Yeni kestiğin parçayı anında seç
    isMoving = false;            // Sürükleme durumunu kapat
    
    // Aracı 'move' yap (Yukarıda da yaptık ama burada da olması güvenlidir)
    currentTool = 'move'; 
    
    if (window.redrawAllStrokes) window.redrawAllStrokes();
}


function undoLastStroke() {
    if (drawnStrokes.length > 0) {
        if (window.audio_undo) { window.audio_undo.currentTime = 0; window.audio_undo.play(); }
        
        // 1. Kendi listenden son çizgiyi sil
        drawnStrokes.pop(); 

        // --- CANLI SINIF: TAHTAYA "SON ÇİZİMİ SİL" MESAJI GÖNDER ---
        if (typeof isConnected !== 'undefined' && isConnected) {
            window.sendNetworkData({ type: 'geri_al' });
        }
        // ---------------------------------------------------------

        redrawAllStrokes(); 
    }
}

function clearAllStrokes() {
    // 1. Ses çal (varsa)
    if (drawnStrokes.length > 0) {
        if (window.audio_clear) window.audio_clear.play();
    }

    // 2. Tabletin yerel hafızasını temizle (Arka planları koru)
    drawnStrokes = drawnStrokes.filter(stroke => stroke.isBackground === true);
    window.drawnStrokes = drawnStrokes; 

    // 3. Tarayıcıdaki eski kayıtları temizle (Eğer PC veya Tablette localStorage kullanıyorsan)
    if (window.localStorage) {
        window.localStorage.removeItem('drawnStrokes');
    }

    // 4. PC'ye "hepsini_sil" komutunu gönder
    if (typeof isConnected !== 'undefined' && isConnected) {
        window.sendNetworkData({ type: 'hepsini_sil' });
        console.log("Temizleme komutu PC'ye gönderildi.");
    }

    // 5. Harf sayacını sıfırla
    nextPointChar = 'A';
    window.nextPointChar = 'A';

    // 6. Ekranı tamamen yenile
    if (typeof redrawAllStrokes === 'function') {
        redrawAllStrokes();
    }
}

function findHit(pos) {
    for (let i = drawnStrokes.length - 1; i >= 0; i--) {
        const stroke = drawnStrokes[i];

if (stroke.type === 'image') {
            const halfW = stroke.width / 2;
            const halfH = stroke.height / 2;
            const angleRad = (stroke.rotation || 0) * (Math.PI / 180);

            // --- KRİTİK DÜZELTME: Resmin gerçek merkezini hesapla ---
            const centerX = stroke.x + halfW;
            const centerY = stroke.y + halfH;

            // --- A. DÖNDÜRME KULPU (Rotate Handle) ALGILAMA ---
            const handleDist = halfH + 30;
            const rotX = centerX + Math.sin(angleRad) * handleDist;
            const rotY = centerY - Math.cos(angleRad) * handleDist;

            if (distance(pos, {x: rotX, y: rotY}) < 25) {
                return { item: stroke, pointKey: 'image_rotate' }; 
            }

            // --- B. BOYUTLANDIRMA KULPU (Resize Handle) ---
            const resLocalX = halfW * Math.cos(angleRad) - halfH * Math.sin(angleRad);
            const resLocalY = halfW * Math.sin(angleRad) + halfH * Math.cos(angleRad);
            const resX = centerX + resLocalX;
            const resY = centerY + resLocalY;

            if (distance(pos, {x: resX, y: resY}) < 25) {
                return { item: stroke, pointKey: 'image_resize' };
            }

            // --- C. RESİM GÖVDESİ (Taşıma) ---
            const dx = pos.x - centerX;
            const dy = pos.y - centerY;
            const localClickX = dx * Math.cos(-angleRad) - dy * Math.sin(-angleRad);
            const localClickY = dx * Math.sin(-angleRad) + dy * Math.cos(-angleRad);

            if (localClickX > -halfW && localClickX < halfW && localClickY > -halfH && localClickY < halfH) {
                return { item: stroke, pointKey: 'self' };
            }
        }        if (currentTool === 'move' && selectedItem === stroke) {
            if (stroke.type === 'polygon') {
                const rotateHandlePos = 
window.PolygonTool.getRotateHandlePosition(stroke);
                if (distance(pos, rotateHandlePos) < 12) return { item: stroke, pointKey: 'rotate' }; 
                if (stroke.vertices && stroke.vertices.length > 0) {
                    const resizeHandlePos = stroke.vertices[0];
                    if (distance(pos, resizeHandlePos) < 10) return { item: stroke, pointKey: 'resize' }; 
                }
            }
        }

// --- DİKDÖRTGEN YAKALAMA (TABLET UYUMLU) ---
        if (stroke.type === 'rectangle') {
            const centerX = stroke.x + stroke.width / 2;
            const centerY = stroke.y + stroke.height / 2;
            const angleRad = (stroke.rotation || 0) * (Math.PI / 180);

            // A. Döndürme Butonu (Yeşil - Üstte)
            const rotX = centerX + Math.sin(angleRad) * (stroke.height / 2 + 35);
            const rotY = centerY - Math.cos(angleRad) * (stroke.height / 2 + 35);
            if (distance(pos, {x: rotX, y: rotY}) < 30) return { item: stroke, pointKey: 'image_rotate' };

            // B. Boyutlandırma Butonu (Pembe - Sağ Alt)
            const resX = centerX + (stroke.width / 2 * Math.cos(angleRad) - stroke.height / 2 * Math.sin(angleRad));
            const resY = centerY + (stroke.width / 2 * Math.sin(angleRad) + stroke.height / 2 * Math.cos(angleRad));
            if (distance(pos, {x: resX, y: resY}) < 30) return { item: stroke, pointKey: 'image_resize' };

            // C. Köşeler (90 Derece Açı Gösterme - 30px hassasiyet)
            const corners = [
                {x: -stroke.width/2, y: -stroke.height/2}, {x: stroke.width/2, y: -stroke.height/2},
                {x: stroke.width/2, y: stroke.height/2}, {x: -stroke.width/2, y: stroke.height/2}
            ];
            for (let c of corners) {
                const cornerX = centerX + (c.x * Math.cos(angleRad) - c.y * Math.sin(angleRad));
                const cornerY = centerY + (c.x * Math.sin(angleRad) + c.y * Math.cos(angleRad));
                if (distance(pos, {x: cornerX, y: cornerY}) < 30) return { item: stroke, pointKey: 'toggle_angles' };
            }

            // D. Gövde (Merkezden Taşıma)
            const dx = pos.x - centerX;
            const dy = pos.y - centerY;
            const localX = dx * Math.cos(-angleRad) - dy * Math.sin(-angleRad);
            const localY = dx * Math.sin(-angleRad) + dy * Math.cos(-angleRad);
            if (Math.abs(localX) < stroke.width / 2 && Math.abs(localY) < stroke.height / 2) {
                return { item: stroke, pointKey: 'self' };
            }
        }
        
        if (currentTool === 'move' || currentTool === 'fill') { // Fill için de hit gerekli
            if (stroke.type === 'polygon' && stroke.vertices) {
                for (let j = 0; j < stroke.vertices.length; j++) {
                    if (distance(pos, stroke.vertices[j]) < SNAP_THRESHOLD) return { item: stroke, pointKey: 'toggle_angles' };
                }
                for (let j = 0; j < stroke.vertices.length; j++) {
                    const v1 = stroke.vertices[j];
                    const v2 = stroke.vertices[(j + 1) % stroke.vertices.length];
                    const lineLength = distance(v1, v2);
                    const steps = Math.max(1, Math.floor(lineLength / 5)); 
                    let hitEdge = false;
                    for (let step = 1; step < steps; step++) { 
                        const t = step / steps;
                        const sampleX = v1.x + (v2.x - v1.x) * t;
                        const sampleY = v1.y + (v2.y - v1.y) * t;
                        if (distance({x: sampleX, y: sampleY}, pos) < SNAP_THRESHOLD) { hitEdge = true; break; }
                    }
                    if (hitEdge) return { item: stroke, pointKey: 'toggle_edges' };
                }
            }

if (stroke.type === 'rectangle') {
            const centerX = stroke.x + stroke.width / 2;
            const centerY = stroke.y + stroke.height / 2;
            const angleRad = (stroke.rotation || 0) * (Math.PI / 180);

            // A. Döndürme Butonu (Yeşil)
            const rotX = centerX + Math.sin(angleRad) * (stroke.height / 2 + 30);
            const rotY = centerY - Math.cos(angleRad) * (stroke.height / 2 + 30);
            if (distance(pos, {x: rotX, y: rotY}) < 20) return { item: stroke, pointKey: 'image_rotate' };

            // B. Boyutlandırma Butonu (Pembe)
            const resX = centerX + (stroke.width / 2 * Math.cos(angleRad) - stroke.height / 2 * Math.sin(angleRad));
            const resY = centerY + (stroke.width / 2 * Math.sin(angleRad) + stroke.height / 2 * Math.cos(angleRad));
            if (distance(pos, {x: resX, y: resY}) < 20) return { item: stroke, pointKey: 'image_resize' };

            // C. Köşeye Tıklama (Açı Gösterme)
            if (distance(pos, {x: stroke.x, y: stroke.y}) < 20) return { item: stroke, pointKey: 'toggle_angles' };

            // D. Gövdeden Tutma (Merkezden Taşıma)
            const dx = pos.x - centerX; const dy = pos.y - centerY;
            const localX = dx * Math.cos(-angleRad) - dy * Math.sin(-angleRad);
            const localY = dx * Math.sin(-angleRad) + dy * Math.cos(-angleRad);
            if (Math.abs(localX) < stroke.width / 2 && Math.abs(localY) < stroke.height / 2) {
                return { item: stroke, pointKey: 'self' };
            }
        }            if (stroke.type === 'arc' && stroke.cx) {
                const distToCenter = distance(pos, {x: stroke.cx, y: stroke.cy});
                if (Math.abs(distToCenter - stroke.radius) < SNAP_THRESHOLD) return { item: stroke, pointKey: 'toggle_circle_info' };
            }
        }

        if (stroke.type === 'point') {
            if (distance(pos, stroke) < SNAP_THRESHOLD) return { item: stroke, pointKey: 'self' };
        }
        if (stroke.p1 && distance(pos, stroke.p1) < SNAP_THRESHOLD) return { item: stroke, pointKey: 'p1' };
        if (stroke.p2 && distance(pos, stroke.p2) < SNAP_THRESHOLD) return { item: stroke, pointKey: 'p2' };
        if (stroke.type === 'arc' && stroke.cx && distance(pos, {x: stroke.cx, y: stroke.cy}) < SNAP_THRESHOLD) return { item: stroke, pointKey: 'center' };
        if (stroke.type === 'polygon' && stroke.center && distance(pos, stroke.center) < SNAP_THRESHOLD) return { item: stroke, pointKey: 'center' };
    }
    return null; 
}

// Global atamalar
window.redrawAllStrokes = redrawAllStrokes;
window.advanceChar = advanceChar;
window.distance = distance; 


// --- ARAÇ SEÇİMİ (TAMAMEN DÜZELTİLMİŞ VERSİYON) ---
function setActiveTool(tool) {
    // Oyunlar menüsünü her araç değişiminde kapat
    if (oyunlarOptions) oyunlarOptions.classList.add('hidden');
    if (oyunlarButton) oyunlarButton.classList.remove('active');

    // Mevcut butonların aktifliğini temizle
    penButton.classList.remove('active');
    eraserButton.classList.remove('active');
    lineButton.classList.remove('active');
    pointButton.classList.remove('active');
    straightLineButton.classList.remove('active');
    infinityLineButton.classList.remove('active');
    segmentButton.classList.remove('active');
    rayButton.classList.remove('active');
    rulerButton.classList.remove('active');
    gonyeButton.classList.remove('active');
    aciolcerButton.classList.remove('active');
    pergelButton.classList.remove('active');
    polygonButton.classList.remove('active');
    circleButton.classList.remove('active');
    moveButton.classList.remove('active');
    if(fillButton) fillButton.classList.remove('active');
    if(animateButton) animateButton.classList.remove('active'); 

    // İmleçleri temizle
    body.classList.remove('cursor-pen', 'cursor-eraser', 'cursor-snapshot');
    if (eraserPreview) eraserPreview.style.display = 'none'; 

    // Yeni aracı ayarla
    currentTool = tool;

    // Seçilen aracın ışığını yak
    if (tool === 'pen') {
        penButton.classList.add('active');
        body.classList.add('cursor-pen');
    } else if (tool === 'eraser') {
        eraserButton.classList.add('active');
        body.classList.add('cursor-eraser');
    }
    // ... (Kodun devamı senin dosyadakiyle aynı kalabilir, sadece baş kısmı böyle olsun)
// --- BU SATIRI EKLE ---
    if (eraserPreview) eraserPreview.style.display = 'none'; 
    // ----------------------

    // Menüleri gizle
    if (polygonOptions) { polygonOptions.classList.add('hidden'); polygonOptions.style.display = ''; }
    
    // Çizgi menüsünü, SADECE yeni seçilen araç bir çizgi aracı DEĞİLSE gizle
    // (Böylece alt araçlar arasında gezerken menü kapanmaz)
    const isLineTool = ['point', 'straightLine', 'line', 'segment', 'ray'].includes(tool);
    if (!isLineTool && lineOptions) { 
        lineOptions.classList.add('hidden'); 
        lineOptions.style.display = ''; 
    }

        if (fillOptions) { fillOptions.classList.add('hidden'); fillOptions.style.display = ''; }
    penOptions.classList.add('hidden'); 

    // Değişkenleri sıfırla
    isDrawing = false;
    lineStartPoint = null;
    isDrawingLine = false;
    isDrawingInfinityLine = false; 
    isDrawingSegment = false; 
    isDrawingRay = false; 

// --- BURAYA DİKDÖRTGEN SIFIRLAMASINI EKLEYİN ---
    isDrawingRectangle = false;
    rectStartPoint = null;
    
    window.tempPolygonData = null; 
    polygonPreviewLabel.classList.add('hidden'); 
    
    // Fiziksel Araçları gizle
    if (window.RulerTool) window.RulerTool.hide();
    if (window.GonyeTool) window.GonyeTool.hide();
    if (window.AciolcerTool) window.AciolcerTool.hide();
    if (window.PergelTool) window.PergelTool.hide();
    
    if (snapIndicator) snapIndicator.style.display = 'none';
    
    // Etkileşimleri kapat
    if (window.RulerTool) window.RulerTool.interactionMode = 'none';
    if (window.GonyeTool) window.GonyeTool.interactionMode = 'none';
    if (window.AciolcerTool) window.AciolcerTool.interactionMode = 'none';
    if (window.PergelTool) window.PergelTool.interactionMode = 'none';
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    redrawAllStrokes(); 

    // 2. Yeni aracı aktif et
    currentTool = tool;

    if (tool === 'pen') {
        penButton.classList.add('active');
        body.classList.add('cursor-pen');
        penOptions.classList.remove('hidden'); 
    } else if (tool === 'eraser') {
        eraserButton.classList.add('active');
        body.classList.add('cursor-eraser');
    } else if (tool === 'snapshot') { 
        if(animateButton) animateButton.classList.add('active');
        body.classList.add('cursor-snapshot');
    } 
    // --- ÇİZGİ ARAÇLARI GRUBU ---
    else if (tool === 'point') {
        lineButton.classList.add('active'); // Ana buton aktif
        pointButton.classList.add('active'); // Alt buton aktif
        lineOptions.classList.remove('hidden'); 
    } else if (tool === 'straightLine') { 
        lineButton.classList.add('active');
        straightLineButton.classList.add('active');
        lineOptions.classList.remove('hidden');
    } else if (tool === 'line') { 
        lineButton.classList.add('active');
        infinityLineButton.classList.add('active');
        lineOptions.classList.remove('hidden');
    } else if (tool === 'segment') { 
        lineButton.classList.add('active');
        segmentButton.classList.add('active');
        lineOptions.classList.remove('hidden');
    } else if (tool === 'ray') { 
        lineButton.classList.add('active');
        rayButton.classList.add('active');
        lineOptions.classList.remove('hidden');
    } 

    // --- DİĞER ARAÇLAR ---
    else if (tool === 'ruler') {
        rulerButton.classList.add('active');
        if (window.RulerTool) window.RulerTool.show();
    } else if (tool === 'gonye') {
        gonyeButton.classList.add('active');
        if (window.GonyeTool) window.GonyeTool.show();
    } else if (tool === 'aciolcer') {
        aciolcerButton.classList.add('active');
        if (window.AciolcerTool) window.AciolcerTool.show();
    } else if (tool === 'pergel') {
    pergelButton.classList.add('active');
    if (window.PergelTool) {
        window.PergelTool.show(); // Pergelin görünür olmasını sağlar
        // Pergelin en üstte görünmesi için:
        if (window.bringToolToFront) {
            window.bringToolToFront(window.PergelTool.pergelElement);
        }
    }
} else if (tool.startsWith('draw_polygon_')) { 
        polygonButton.classList.add('active');
    } else if (tool === 'move') {
        moveButton.classList.add('active');
    } else if (tool === 'fill') {
        if(fillButton) {
            fillButton.classList.add('active');
            fillOptions.classList.remove('hidden');
            fillOptions.style.display = 'flex';
            const buttonRect = fillButton.getBoundingClientRect();
            const panelRect = fillButton.parentElement.getBoundingClientRect();
            const topOffset = buttonRect.top - panelRect.top;
            fillOptions.style.top = `${topOffset}px`;
        }
    }
    
    redrawAllStrokes(); 
}
// --- BUTON OLAYLARI ---

penButton.addEventListener('click', () => setActiveTool(currentTool === 'pen' ? 'none' : 'pen'));
eraserButton.addEventListener('click', () => setActiveTool(currentTool === 'eraser' ? 'none' : 'eraser'));
rulerButton.addEventListener('click', () => { if (window.RulerTool) { window.RulerTool.toggle(); rulerButton.classList.toggle('active', !window.RulerTool.rulerElement.style.display); } });
gonyeButton.addEventListener('click', () => { if (window.GonyeTool) { window.GonyeTool.toggle(); gonyeButton.classList.toggle('active', !window.GonyeTool.gonyeElement.style.display); } });
aciolcerButton.addEventListener('click', () => { if (window.AciolcerTool) { window.AciolcerTool.toggle(); aciolcerButton.classList.toggle('active', !window.AciolcerTool.aciolcerElement.style.display); } });
pergelButton.addEventListener('click', () => {
    setActiveTool(currentTool === 'pergel' ? 'none' : 'pergel');
});
undoButton.addEventListener('click', undoLastStroke);
clearAllButton.addEventListener('click', clearAllStrokes);
moveButton.addEventListener('click', () => setActiveTool(currentTool === 'move' ? 'none' : 'move'));

pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

if (prevPageBtn && nextPageBtn) {
    
    // Önceki Sayfa (<)
    prevPageBtn.addEventListener('click', () => {
        if (currentPDF && currentPDFPage > 1) {
            currentPDFPage--; // Sayfayı 1 azalt
            renderPDFPage(currentPDFPage); // Yeni sayfayı çiz
        }
    });

    // Sonraki Sayfa (>)
    nextPageBtn.addEventListener('click', () => {
        if (currentPDF && currentPDFPage < totalPDFPages) {
            currentPDFPage++; // Sayfayı 1 artır
            renderPDFPage(currentPDFPage); // Yeni sayfayı çiz
        }
    });
}

// --- YENİ: Sayfa numarasına tıklayınca hızlı gitme kutusunu aç ---
if (pageCountLabel) {
    pageCountLabel.style.cursor = 'pointer'; // Fareyle üzerine gelince tıklanabilir el işareti çıksın
    pageCountLabel.addEventListener('click', () => {
        if (!currentPDF) return;
        
        // --- ÇEVİRİ ENTEGRASYONU ---
        let t = translations[currentLang];
        let soruMetni = t.pdf_soru.replace('{0}', totalPDFPages);
        
        const gitSayfa = prompt(soruMetni, currentPDFPage);
        if (gitSayfa !== null) {
            const num = parseInt(gitSayfa);
            if (num > 0 && num <= totalPDFPages) {
                currentPDFPage = num;
                renderPDFPage(currentPDFPage);
            } else {
                alert("Geçersiz sayfa numarası girdiniz!"); // İstersen burayı da ileride sözlüğe ekleyebilirsin
            }
        }
    });
}

if (uploadButton && fileInput) {
    uploadButton.onclick = () => fileInput.click();

    fileInput.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // --- DURUM A: PDF DOSYASI ---
        if (file.type === 'application/pdf') {
            const fileReader = new FileReader();
            fileReader.onload = async function() {
                // 1. AĞA GÖNDERMEK İÇİN (Base64 Metni Olarak)
                const base64String = this.result; 
                
                // 2. TABLET EKRANI İÇİN (PDF.js'in anladığı formata geri çeviriyoruz)
                const base64Data = base64String.split(',')[1];
                const binaryString = window.atob(base64Data);
                const len = binaryString.length;
                const bytes = new Uint8Array(len);
                for (let i = 0; i < len; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }

                try {
                    currentPDF = await pdfjsLib.getDocument(bytes).promise;
                    totalPDFPages = currentPDF.numPages;
                    currentPDFPage = 1; 

                    if (pdfControls) pdfControls.classList.remove('hidden');

                    renderPDFPage(currentPDFPage);

                    setTimeout(() => {
                        let t = typeof translations !== 'undefined' ? translations[currentLang] : { pdf_soru: "Sayfa (1-{0}):" };
                        let soruMetni = (t.pdf_soru || "Sayfa (1-{0}):").replace('{0}', totalPDFPages);
                        
                        const sayfaGrisi = prompt(soruMetni, "1");
                        if (sayfaGrisi !== null) {
                            const hedefSayfa = parseInt(sayfaGrisi);
                            if (hedefSayfa > 0 && hedefSayfa <= totalPDFPages) {
                                currentPDFPage = hedefSayfa;
                                renderPDFPage(currentPDFPage);
                                
                                if (typeof isConnected !== 'undefined' && isConnected) {
                                    window.sendNetworkData({ type: 'pdf_sayfa_degis', sayfa: currentPDFPage });
                                }
                            }
                        }
                    }, 500);

                } catch (error) {
                    console.error("PDF açılırken hata oluştu:", error);
                }
            };   // ← fileReader.onload BURADA biter
            fileReader.readAsDataURL(file); 
        }       
        
        // --- DURUM B: RESİM DOSYASI ---
        if (file.type.startsWith('image/')) {   
            const reader = new FileReader();
            reader.onload = (event) => {
                const imgData = event.target.result;
                
                // --- 2. AĞA FIRLAT (RESİM DOSYASI) ---
                if (typeof isConnected !== 'undefined' && isConnected) {
                    window.sendNetworkData({ type: 'resim_yukle', imgData: imgData });
                }

                const img = new Image();
                img.onload = () => {
                    addNewImageToCanvas(img, false);
                };
                img.src = imgData;
            };
            reader.readAsDataURL(file);
        }       
        e.target.value = ''; 
    };
}


function addToCanvasAsObject(img) {
    let startWidth = 400;
    if (img.width < 400) startWidth = img.width;
    
    let scaleFactor = startWidth / img.width;
    let startHeight = img.height * scaleFactor;

    drawnStrokes.push({
        type: 'image',
        img: img,
        // --- TAM ORTALAMA HESABI ---
        x: (canvas.width / 2) - (startWidth / 2),
        y: (canvas.height / 2) - (startHeight / 2),
        width: startWidth,
        height: startHeight,
        rotation: 0,
        isBackground: true 
    });

    // --- BUTONU GÖSTERME VE KAPATMA İŞLEVİ FONKSİYONUN İÇİNE ALINDI ---
    if (closePdfBtn) {
        // 1. Butonu SADECE resim eklendiğinde görünür yap
        closePdfBtn.classList.remove('hidden');
        closePdfBtn.style.display = 'flex';

        // 2. Kapatma işlevini tanımla
        closePdfBtn.onclick = () => {
            // Kontrol panelini ve butonun kendisini gizle
            if (typeof pdfControls !== 'undefined' && pdfControls) {
                pdfControls.classList.add('hidden');
            }
            closePdfBtn.classList.add('hidden');
            closePdfBtn.style.display = 'none';

            // Arka plan olan öğeleri kaldır
            drawnStrokes = drawnStrokes.filter(s => !s.isBackground && !s.isPDFPage);
            window.drawnStrokes = drawnStrokes;

            // Değişkenleri sıfırla
            currentPDF = null;
            if (typeof pdfImageStroke !== 'undefined') pdfImageStroke = null;

            // Ekranı temizle ve kalan çizimleri tekrar çiz
            redrawAllStrokes();
        };
    }
    
    redrawAllStrokes();
}


if(fillButton) fillButton.addEventListener('click', () => setActiveTool(currentTool === 'fill' ? 'none' : 'fill'));
if(fillColorBoxes) {
    fillColorBoxes.forEach(box => {
        const handler = (e) => {
            e.stopPropagation();
            fillColorBoxes.forEach(b => b.classList.remove('selected'));
            e.target.classList.add('selected');
            currentFillColor = e.target.dataset.color || e.target.style.backgroundColor;
            setActiveTool('fill');
        };
        box.addEventListener('click', handler);
        box.addEventListener('touchstart', handler, {passive:false});
    });
    if(fillColorBoxes.length>0) { fillColorBoxes[0].classList.add('selected'); currentFillColor = fillColorBoxes[0].dataset.color || fillColorBoxes[0].style.backgroundColor; }
}

colorBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
        colorBoxes.forEach(b => b.classList.remove('selected'));
        e.target.classList.add('selected');
        currentPenColor = e.target.style.backgroundColor;
    });
});
colorBoxes[0].classList.add('selected');
currentPenColor = colorBoxes[0].style.backgroundColor;

lineButton.addEventListener('click', () => {
    if (lineButton.classList.contains('active')) { setActiveTool('none'); } 
    else {
        setActiveTool('none'); 
        lineOptions.classList.remove('hidden'); lineOptions.style.display = 'flex'; lineButton.classList.add('active'); 
        const buttonRect = lineButton.getBoundingClientRect();
        const panelRect = lineButton.parentElement.getBoundingClientRect();
        lineOptions.style.top = `${buttonRect.top - panelRect.top}px`;
    }
});

// Çokgen Renk Seçimi (Varsayılan Beyaz)
if (polygonColorOptions.length > 0) {
    polygonColorOptions[0].classList.add('selected');
    window.currentLineColor = polygonColorOptions[0].dataset.color || '#FFFFFF'; 
    
    polygonColorOptions.forEach(box => {
        const handleColorSelect = (e) => {
            e.stopPropagation(); e.preventDefault();
            polygonColorOptions.forEach(b => b.classList.remove('selected'));
            e.target.classList.add('selected');
            const color = e.target.dataset.color || e.target.style.backgroundColor;
            window.currentLineColor = color; 
            try { if (window.audio_select) { window.audio_select.currentTime=0; window.audio_select.play(); } else if (window.audio_click) { window.audio_click.currentTime=0; window.audio_click.play(); } } catch(err){}
        };
        box.addEventListener('click', handleColorSelect);
        box.addEventListener('touchstart', handleColorSelect, { passive: false });
    });
}

polygonButton.addEventListener('click', () => {
    if (polygonButton.classList.contains('active')) { setActiveTool('none'); } 
    else {
        setActiveTool('none'); 
        polygonOptions.classList.remove('hidden'); polygonOptions.style.display = 'flex'; polygonButton.classList.add('active'); 
        const buttonRect = polygonButton.getBoundingClientRect();
        const panelRect = polygonButton.parentElement.getBoundingClientRect();
        const menuHeight = polygonOptions.offsetHeight;
        const windowHeight = window.innerHeight;
        const margin = 10;
        let topOffset = buttonRect.top - panelRect.top;
        if (buttonRect.top + menuHeight > (windowHeight - margin)) {
            topOffset = (windowHeight - menuHeight - margin) - panelRect.top;
        }
        polygonOptions.style.top = `${topOffset}px`;
    }
});

// --- OYUNLAR MENÜSÜ: YUKARI AÇILAN, SEVİMLİ VE SİLGİ KAPATAN SİSTEM ---
oyunlarButton.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (oyunlarButton.classList.contains('active')) {
        oyunlarOptions.classList.add('hidden');
        oyunlarButton.classList.remove('active');
    } else {
        // 1. DİĞER ARAÇLARI VE SİLGİYİ KAPAT (Işığını söndürür)
        if (typeof setActiveTool === 'function') setActiveTool('none'); 
        
        oyunlarOptions.innerHTML = ''; // İçeriği temizle
        
        // 2. MENÜ GÖRÜNÜM AYARLARI
        oyunlarOptions.style.display = 'flex';
        oyunlarOptions.style.flexDirection = 'column';
        oyunlarOptions.style.maxHeight = '400px';
        oyunlarOptions.style.overflowY = 'auto';
        oyunlarOptions.style.touchAction = 'pan-y';
        oyunlarOptions.style.WebkitOverflowScrolling = 'touch';

        // 3. KONUMU YUKARI ALAN HESAPLAMA (Ekrana sığması için)
        const buttonRect = oyunlarButton.getBoundingClientRect();
        const panelRect = oyunlarButton.parentElement.getBoundingClientRect();
        oyunlarOptions.style.top = 'auto'; 
        oyunlarOptions.style.bottom = (panelRect.bottom - buttonRect.bottom) + 'px';

        // 4. KAYDIRMA İPUCU (Yazı Geri Geldi)
        const hint = document.createElement('div');
        hint.innerHTML = '⬇️ Liste kaydırılabilir ⬇️';
        hint.style.cssText = `
            text-align: center; 
            color: #00ffcc; 
            font-family: 'Fredoka', sans-serif; 
            font-size: 13px; 
            padding: 12px; 
            border-bottom: 1px solid rgba(255,255,255,0.1); 
            margin-bottom: 8px; 
            font-weight: 600;
            background: rgba(0, 255, 204, 0.05);
            border-radius: 12px 12px 0 0;
        `;
        oyunlarOptions.appendChild(hint);

        // 5. OYUNLARI EKLE
       if (window.OyunListesi && window.OyunListesi.length > 0) {
    window.OyunListesi.forEach(oyun => {
        const linkElement = document.createElement('a');
        linkElement.className = 'tool-button-sub';
        
        // KRİTİK DEĞİŞİKLİK BURADA:
        // 'oyun.isim' yerine 'oyun[currentLang]' kullanıyoruz.
        // Eğer o dilde karşılığı yoksa (hata vermemesi için) Türkçe'yi gösterir.
        linkElement.innerText = oyun[currentLang] || oyun.tr; 

        linkElement.style.cssText = `
            text-decoration: none; 
            display: block; 
            padding: 15px; 
            text-align: center; 
            color: white; 
            border-bottom: 1px solid rgba(255,255,255,0.05);
            font-family: 'Fredoka', sans-serif;
            font-size: 14px;
        `;

                let startY = 0;
                let isScrolling = false;

                linkElement.addEventListener('touchstart', (te) => {
                    startY = te.touches[0].clientY;
                    isScrolling = false;
                }, { passive: true });

                linkElement.addEventListener('touchmove', (te) => {
                    if (Math.abs(te.touches[0].clientY - startY) > 10) isScrolling = true;
                }, { passive: true });

                const linkiAc = (ae) => {
                    if (isScrolling) return; 
                    ae.preventDefault();
                    ae.stopPropagation();
                    window.open(oyun.link, '_blank');
                    
                    // Kapatma işlemi
                    oyunlarOptions.classList.add('hidden');
                    oyunlarButton.classList.remove('active');
                };

                linkElement.addEventListener('touchend', linkiAc);
                linkElement.addEventListener('click', linkiAc);
                oyunlarOptions.appendChild(linkElement);
            });
        }

        oyunlarOptions.classList.remove('hidden');
        oyunlarButton.classList.add('active');
    }
});

// --- BOŞLUĞA TIKLAYINCA KAPATMA (DOSYANIN EN ALTINA EKLEYİN) ---
document.addEventListener('pointerdown', (e) => {
    
    if (oyunlarOptions && !oyunlarOptions.contains(e.target) && e.target !== oyunlarButton) {
        oyunlarOptions.classList.add('hidden');
        oyunlarButton.classList.remove('active');
    }
});
// 2. Ana menü kutusunun da dışarıdaki "Ekran Kilitlerine" takılmasını engelle:
oyunlarOptions.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
oyunlarOptions.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });
oyunlarOptions.addEventListener('wheel', (e) => e.stopPropagation(), { passive: true });

circleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    setActiveTool('draw_polygon_circle');
    window.PolygonTool.handleDrawClick(null, 0); 
    regularPolygonButtons.forEach(b => b.classList.remove('active'));
    circleButton.classList.add('active');
});

regularPolygonButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const sides = parseInt(e.target.dataset.sides);
        setActiveTool(`draw_polygon_${sides}_sides`);
        window.PolygonTool.handleDrawClick(null, sides); 
        regularPolygonButtons.forEach(b => b.classList.remove('active'));
        circleButton.classList.remove('active');
        e.target.classList.add('active');
    });
});

pointButton.addEventListener('click', (e) => {
    e.stopPropagation(); 
    if (window.audio_select) window.audio_select.play();
    if (!audio_click_src_set) { audio_click.src = 'sesler/point-smooth-beep-230573.mp3'; audio_click_src_set = true; }
    setActiveTool(currentTool === 'point' ? 'none' : 'point');
});
straightLineButton.addEventListener('click', (e) => { e.stopPropagation(); if(window.audio_select) window.audio_select.play(); setActiveTool(currentTool === 'straightLine' ? 'none' : 'straightLine'); });
infinityLineButton.addEventListener('click', (e) => { e.stopPropagation(); if(window.audio_select) window.audio_select.play(); setActiveTool(currentTool === 'line' ? 'none' : 'line'); });
segmentButton.addEventListener('click', (e) => { e.stopPropagation(); if(window.audio_select) window.audio_select.play(); setActiveTool(currentTool === 'segment' ? 'none' : 'segment'); });
rayButton.addEventListener('click', (e) => { e.stopPropagation(); if(window.audio_select) window.audio_select.play(); setActiveTool(currentTool === 'ray' ? 'none' : 'ray'); });

lineColorOptions.forEach(box => {
    box.addEventListener('click', (e) => {
        e.stopPropagation();
        lineColorOptions.forEach(b => b.classList.remove('selected'));
        e.target.classList.add('selected');
        const color = e.target.dataset.color || e.target.style.backgroundColor;
        window.currentLineColor = color; 
    });
});
lineColorOptions[0].classList.add('selected');
window.currentLineColor = lineColorOptions[0].dataset.color || lineColorOptions[0].style.backgroundColor; 

// --- app.js: Canlandır Butonu (Dokunmatik ve Tıklama GARANTİLİ) ---
if (animateButton) {
    const toggleAnimate = (e) => {
        // Dokunmatik ekranlarda çift tetiklenmeyi ve diğer araçların araya girmesini önle
        if (e && e.cancelable) e.preventDefault(); 
        if (e) e.stopPropagation(); 

        // Modu Değiştir
        setActiveTool(currentTool === 'snapshot' ? 'none' : 'snapshot');
        
        // Görsel Ayarlar (Aktiflik Rengi ve İmleç)
        if (currentTool === 'snapshot') {
            animateButton.classList.add('active');
            body.classList.add('cursor-snapshot'); 
        } else {
            animateButton.classList.remove('active');
            body.classList.remove('cursor-snapshot');
        }
    };

    // 1. Standart Tıklama (Mouse için)
    animateButton.addEventListener('click', toggleAnimate);
    
    // 2. Parmak Dokunuşu (Akıllı Tahta için ŞART olan kısım)
    animateButton.addEventListener('touchstart', toggleAnimate, { passive: false });
}


// --- MOUSE OLAYLARI ---


// Mevcut pointerdown dinleyicisinin en başına (yaklaşık 5100. satırlar civarı)
canvas.addEventListener('pointerdown', (e) => {
// (Mühürleme kodu tamamen silindi)
    // AKILLI TAHTA YAMASI:
    // Eğer kalemle dokunuluyorsa, dokunmatik (el) verisini geçici olarak devre dışı bırak
    if (e.pointerType === 'pen') {
        isPenActive = true;
        clearTimeout(penActiveTimer);
        // Kalem aktifken el dokunuşlarını 1 saniye boyunca görmezden gel
        penActiveTimer = setTimeout(() => { isPenActive = false; }, 1000);
    }

    // Eğer el dokunuşu gelirse ve kalem o an aktifse, bu dokunuşu iptal et (Avuç içi engeli)
    if (e.pointerType === 'touch' && isPenActive) {
        return; 
    }

    // 1. Tarayıcıyı sabitle
    if (e.cancelable) e.preventDefault();
    // NOT: setPointerCapture komutu Vestel tahtaları kilitlediği için tamamen kaldırıldı.

    // --- KRİTİK EKLENTİ: HAYALET PARMAK SIFIRLAYICI ---
    // Eğer dokunmatik ekrandaysak ve ekrana sadece 1 parmak değiyorsa,
    // hafızada kalmış eski görünmez parmakları tamamen temizle!
    if (e.pointerType === 'touch' && e.touches && e.touches.length === 1) {
        pointers.clear();
        lastDist = 0;
    }

if (currentTool === 'lasso') {
    const pos = getPointerPos(e); 
    window.isDraggingLassoPoint = true; // Sürükleme ve nişan alma başladı
    currentMousePos = pos;
    window.lassoIsClosing = false;
    
    redrawAllStrokes();
    return; 
}
 // --- BUNU EKLE: Parmağı ekrana değdiği an kaydet ---
    pointers.set(e.pointerId, e); 
    // ------------------------------------------------

    // 2. Koordinatları tek seferde al (Zıplamayı bitiren temiz veri)
    const pos = getPointerPos(e); 
    const snapPos = snapTarget || pos;
    currentMousePos = pos; // Mobil için konum bilgisini güncelle

    // --- AVUÇ İÇİ REDDİ (PALM REJECTION) KONTROLÜ ---
    const currentPointer = getPointerInfo(e);
    
    if (currentPointer.type === 'pen') {
        isPenActive = true;
        clearTimeout(penActiveTimer);
        // Kalem kalktıktan sonra 1 saniye daha elleri reddetmeye devam et
        penActiveTimer = setTimeout(() => { isPenActive = false; }, 1000); 
    } else if (currentPointer.type === 'touch' && isPenActive) {
        // Kalem kullanılıyorken ekrana el/avuç içi değerse işlemi İPTAL ET
        console.log("Avuç içi reddedildi.");
        return; 
    }
    // -----------------------------------------------


    // --- 1. FİZİKSEL ARAÇ KONTROLÜ ---
    const isToolElementClicked = e.target.closest('.ruler-container, .gonye-container, .aciolcer-container, #compass-container');
// Herhangi bir araç değiştiğinde (Kalem, Taşı vb.) silgiyi gizle
if (typeof eraserPreview !== 'undefined' && eraserPreview) {
    eraserPreview.style.display = 'none';
}
    if (isToolElementClicked) { 
        isDrawingLine = isDrawingInfinityLine = isDrawingSegment = isDrawingRay = false;
        lineStartPoint = null;
        window.tempPolygonData = null; 
        
        // --- SİLGİ İMLECİNİ TEMİZLE ---
        if (typeof eraserPreview !== 'undefined' && eraserPreview) {
            eraserPreview.style.display = 'none';
        }
        
        if (polygonPreviewLabel) polygonPreviewLabel.classList.add('hidden');
        return; 
    }

    // --- 2. "TAŞI" MODU KONTROLÜ ---
    if (currentTool === 'move') {
        // BURADA: getEventPosition(e) yerine en üstteki 'pos'u kullanıyoruz
        const hit = findHit(pos); 
        
        if (hit) {

        // Seçilen nesneyi en üste taşı (Z-Index mantığı)
        drawnStrokes = drawnStrokes.filter(s => s !== hit.item);
        drawnStrokes.push(hit.item);
        window.drawnStrokes = drawnStrokes;


            // Etiket Aç/Kapat Mantığı (Burası aynı kalıyor)
            if (hit.pointKey === 'toggle_edges') { hit.item.showEdgeLabels = !hit.item.showEdgeLabels; redrawAllStrokes(); return; }
            if (hit.pointKey === 'toggle_angles') { hit.item.showAngleLabels = !hit.item.showAngleLabels; redrawAllStrokes(); return; }
            if (hit.pointKey === 'toggle_circle_info') { hit.item.showCircleInfo = !hit.item.showCircleInfo; redrawAllStrokes(); return; }

            isMoving = true;
            selectedItem = hit.item;
            selectedPointKey = hit.pointKey; 
            dragStartPos = pos; 

// YAMA: PC'ye Hangi Nesnenin Seçildiğini Bildir (Yan Butonlar Çıksın)
    if (typeof isConnected !== 'undefined' && isConnected) {
        window.sendNetworkData({ type: 'secimi_senkronize_et', strokeId: selectedItem.id });
    }
            
            // Başlangıç konumlarını kaydet
            originalStartPos = {}; 
            if (hit.pointKey === 'self') {
                originalStartPos = { x: hit.item.x, y: hit.item.y };
            } else if (hit.pointKey === 'p1') {
                originalStartPos = { x: hit.item.p1.x, y: hit.item.p1.y };
            } else if (hit.pointKey === 'p2') {
                originalStartPos = { x: hit.item.p2.x, y: hit.item.p2.y };
            } else if (hit.pointKey === 'center') {
                originalStartPos = { x: (hit.item.cx || hit.item.center.x), y: (hit.item.cy || hit.item.center.y) };
            } else if (hit.pointKey === 'rotate' || hit.pointKey === 'resize' || hit.pointKey === 'image_resize') {
    // Hem çokgen hem dikdörtgen verilerini tek seferde yedekle
    originalStartPos = { 
        radius: hit.item.radius, 
        rotation: hit.item.rotation,
        x: hit.item.x || (hit.item.center ? hit.item.center.x : 0),
        y: hit.item.y || (hit.item.center ? hit.item.center.y : 0)
    };

                // --- TABLET İÇİN KRİTİK EKLEME ---
                if (selectedItem.type === 'rectangle') {
                    initialWidth = selectedItem.width;
                    initialHeight = selectedItem.height;
                }
                // --------------------------------
                
                if (hit.item.type === 'rectangle' || hit.item.type === 'image') {
    initialWidth = hit.item.width;
    initialHeight = hit.item.height;
}
                // --------------------------------------------------
            }
            
            const itemType = hit.item.type;
            if ((itemType === 'line' || itemType === 'segment' || itemType === 'ray' || itemType === 'straightLine') && (hit.pointKey === 'p1' || hit.pointKey === 'p2')) {
                rotationPivot = (hit.pointKey === 'p1') ? hit.item.p2 : hit.item.p1;
                const movingPoint = (hit.pointKey === 'p1') ? hit.item.p1 : hit.item.p2;
                selectedItem.startRadius = distance(movingPoint, rotationPivot);
            } else {
                rotationPivot = null; 
            }
            
            redrawAllStrokes(); 
            return; 
        } else {
            if (selectedItem) {
                selectedItem.showEdgeLabels = selectedItem.showAngleLabels = selectedItem.showCircleInfo = false;
            }
            selectedItem = null;

// YAMA: PC'de Seçimi İptal Et (Yan Butonları Kapat)
    if (typeof isConnected !== 'undefined' && isConnected) {
        window.sendNetworkData({ type: 'secimi_kaldir' });
    }
            redrawAllStrokes();
        }
    }

    // --- 3. DİĞER ÇİZİM ARAÇLARI KONTROLÜ ---
    if (currentTool === 'none') return;

    // Çizgi menüsü kapatma
    if (['point', 'straightLine', 'line', 'segment', 'ray'].includes(currentTool)) {
        if (lineOptions) { lineOptions.classList.add('hidden'); lineOptions.style.display = 'none'; }
    }

    // --- SNAPSHOT (KUTU STANDART) SADECE DİKDÖRTGEN KESİM ---
    if (currentTool === 'snapshot') {
        snapshotStart = getPointerPos(e); 
        return;
    }

    // ARAÇLARIN BAŞLATILMASI
    switch (currentTool) {
        case 'pen':
            isDrawing = true; 
            // YENİ: Kalemin basıncını al
            const pInfoDown = getPointerInfo(e);
            const pressureDown = pInfoDown.type === 'pen' ? pInfoDown.pressure : 1;
            
            // YENİ: Basınç değerini (p) koordinatla birlikte kaydet
            drawnStrokes.push({ 
                type: 'pen', 
                path: [{x: snapPos.x, y: snapPos.y, p: pressureDown}], 
                color: currentPenColor, 
                baseWidth: currentPenWidth 
            });
            break;

        case 'point':
            isDrawing = false; 
            drawnStrokes.push({ type: 'point', x: snapPos.x, y: snapPos.y, label: nextPointChar });
            nextPointChar = advanceChar(nextPointChar);
            redrawAllStrokes(); 
            break;
        case 'eraser':
            isDrawing = true; 
            break;
        case 'straightLine':
            if (!isDrawingLine) { isDrawingLine = true; lineStartPoint = snapPos; }
            break;
        case 'line':
            if (!isDrawingInfinityLine) { isDrawingInfinityLine = true; lineStartPoint = pos; }
            break;
        case 'segment':
            if (!isDrawingSegment) { isDrawingSegment = true; lineStartPoint = snapPos; }
            break;
        case 'ray':
            if (!isDrawingRay) { isDrawingRay = true; lineStartPoint = pos; }
            break;

        case 'draw_rectangle':
            // Şartı (!isDrawingRectangle) kaldırıyoruz; direkt başlatıyoruz.
            isDrawingRectangle = true; 
            rectStartPoint = pos; 
            break;

        case 'draw_polygon_circle':
        case 'draw_polygon_3_sides':
        case 'draw_polygon_4_sides':
        case 'draw_polygon_5_sides':
        case 'draw_polygon_6_sides':
        case 'draw_polygon_7_sides':
        case 'draw_polygon_8_sides':
            // HATA ÇÖZÜMÜ: Eğer obje null ise önce oluşturuyoruz
            if (!window.tempPolygonData) {
                window.tempPolygonData = { center: null, type: 0, radius: 0, rotation: 0 };
            }

            if (window.tempPolygonData.center === null) {
                 window.tempPolygonData.center = snapPos;
                 window.tempPolygonData.type = currentTool === 'draw_polygon_circle' ? 0 : parseInt(currentTool.split('_')[2]);
                 if (window.PolygonTool) window.PolygonTool.state.isDrawing = true; 
                 if (polygonPreviewLabel) polygonPreviewLabel.classList.remove('hidden');
            } else {
                 const finalRadius = window.tempPolygonData.radius || 0;
                 if (window.tempPolygonData.type === 0) window.PolygonTool.finalizeCircle(finalRadius);
                 else window.PolygonTool.finalizeDraw(finalRadius, window.tempPolygonData.rotation);
                 if (polygonPreviewLabel) polygonPreviewLabel.classList.add('hidden');
                 window.tempPolygonData.center = null;
            }
            break;
    }
}, { passive: false });

canvas.addEventListener('pointermove', (e) => {
    // PARDUS KORUMASI: Sürükleme sırasında tarayıcının araya girmesini kesin engelle
    if (e.cancelable) e.preventDefault();

    // --- AVUÇ İÇİ REDDİ (SÜREKLİ GÜNCELLEME) ---
    const currentPointerMove = getPointerInfo(e);
    
    // Eğer kalem ekrana değiyorsa VEYA havadan ekranın üzerinde geziniyorsa (hover)
    if (currentPointerMove.type === 'pen') {
        isPenActive = true;
        clearTimeout(penActiveTimer); 
        penActiveTimer = setTimeout(() => { isPenActive = false; }, 1000); 
    } 
    // Kalem aktifken bir el/parmak değerse REDDET
    else if (currentPointerMove.type === 'touch' && isPenActive) {
        return; 
    }

    // --- PARDUS ÇİFT SİNYAL ENGELLEYİCİ ---
    if (e.pointerType === 'mouse') {
        let hasTouch = false;
        for (let p of pointers.values()) {
            if (p.pointerType === 'touch' || p.pointerType === 'pen') hasTouch = true;
        }
        if (hasTouch) return; 
    }

    // --- YENİ: PARMAK TAKİBİ VE ZOOM ---
    pointers.set(e.pointerId, e); 

    // --- TABLET/PARDUS: İKİ PARMAK ZOOM ---
    if (pointers.size === 2 || (e.touches && e.touches.length === 2)) {
        let p1x, p1y, p2x, p2y;
        if (e.touches && e.touches.length === 2) {
            p1x = e.touches[0].clientX; p1y = e.touches[0].clientY;
            p2x = e.touches[1].clientX; p2y = e.touches[1].clientY;
        } else {
            const p = Array.from(pointers.values());
            p1x = p[0].clientX; p1y = p[0].clientY;
            p2x = p[1].clientX; p2y = p[1].clientY;
        }

        const currentDist = Math.hypot(p1x - p2x, p1y - p2y);
        if (lastDist > 0) {
            const delta = currentDist - lastDist;
            const zoomSpeed = 0.003; 
            const zoomStep = 1 + (delta * zoomSpeed);

            const bgStrokes = drawnStrokes.filter(s => s.isBackground === true);
            if (bgStrokes.length > 0) {
                bgStrokes.forEach(bg => {
                    const newW = bg.width * zoomStep;
                    const newH = bg.height * zoomStep;
                    bg.x = bg.x - (newW - bg.width) / 2;
                    bg.y = bg.y - (newH - bg.height) / 2;
                    bg.width = newW;
                    bg.height = newH;
                });
                redrawAllStrokes();
// --- BURAYA EKLE: ZOMM VERİSİNİ PC'YE FIRLAT ---
                window.sendNetworkData({
                    type: 'zoom_senkron',
                    x: bgStrokes[0].x, 
                    y: bgStrokes[0].y, 
                    width: bgStrokes[0].width, 
                    height: bgStrokes[0].height
                });
            }
        }
        lastDist = currentDist; 
        return; 
    }

    if (pointers.size > 1 && e.isPrimary === false) return; 

    const pos = getPointerPos(e); 
    currentMousePos = pos;

    // --- KESİLEN PARÇA İÇİN DÖNDÜRME VE BOYUTLANDIRMA ---
    if (window.isImageRotating && selectedItem) {
        const cX = selectedItem.x + selectedItem.width / 2;
        const cY = selectedItem.y + selectedItem.height / 2;
        const angle = Math.atan2(pos.y - cY, pos.x - cX);
        selectedItem.rotation = (angle * 180 / Math.PI) + 90;
window.sendNetworkData({ type: 'arac_senkron', selector: '.yuzen-kopya-container', transform: `rotate(${selectedItem.rotation}deg)` });
// --- BURAYA EKLE ---
        window.sendNetworkData({ type: 'sekil_guncelle', stroke: selectedItem });
        if (window.redrawAllStrokes) window.redrawAllStrokes();
        return;
    }

    if (window.isImageResizing && selectedItem) {
        const cX = selectedItem.x + selectedItem.width / 2;
        const cY = selectedItem.y + selectedItem.height / 2;
        const currentDistance = Math.hypot(pos.x - cX, pos.y - cY);
        const ratio = currentDistance / window.startImageDistance;
        selectedItem.width = window.startImageWidth * ratio;
        selectedItem.height = window.startImageHeight * ratio;
        selectedItem.x = cX - selectedItem.width / 2;
        selectedItem.y = cY - selectedItem.height / 2;
window.sendNetworkData({ type: 'arac_senkron', selector: '.yuzen-kopya-container', width: selectedItem.width + 'px', height: selectedItem.height + 'px' });
// --- BURAYA EKLE ---
        window.sendNetworkData({ type: 'sekil_guncelle', stroke: selectedItem });
        if (window.redrawAllStrokes) window.redrawAllStrokes();
        return;
    }

    // --- 1. TAŞIMA (MOVE) MANTIĞI (ÇOKGEN + DİKDÖRTGEN + KOPYALAR) ---
    if (currentTool === 'move' && isMoving && selectedItem) {
        const pos = getPointerPos(e);
        const dx = pos.x - dragStartPos.x;
        const dy = pos.y - dragStartPos.y;

        // A) MERKEZDEN VEYA GÖVDEDEN TUTUP TAŞIMA
        if (selectedPointKey === 'self' || selectedPointKey === 'center') {
            if (selectedItem.type === 'arc') {
                selectedItem.cx = originalStartPos.x + dx;
                selectedItem.cy = originalStartPos.y + dy;
            } else if (selectedItem.center) {
                selectedItem.center.x = originalStartPos.x + dx;
                selectedItem.center.y = originalStartPos.y + dy;
            } else {
                selectedItem.x = (originalStartPos.x || 0) + dx;
                selectedItem.y = (originalStartPos.y || 0) + dy;
            }
            if (selectedItem.vertices) selectedItem.vertices = null;
        } 
        
        // B) YEŞİL BUTON: DÖNDÜRME
        else if (selectedPointKey === 'rotate' || selectedPointKey === 'image_rotate') {
            // Dikdörtgen ve Resim için merkezi hesapla
            const isRect = (selectedItem.type === 'rectangle' || selectedItem.type === 'rect' || selectedItem.type === 'image');
            const cX = isRect ? selectedItem.x + selectedItem.width / 2 : selectedItem.center.x;
            const cY = isRect ? selectedItem.y + selectedItem.height / 2 : selectedItem.center.y;
            
            const currentAngle = Math.atan2(pos.y - cY, pos.x - cX);
            const startAngle = Math.atan2(dragStartPos.y - cY, dragStartPos.x - cX);
            
            selectedItem.rotation = (originalStartPos.rotation || 0) + (currentAngle - startAngle) * (180 / Math.PI);
            if (selectedItem.vertices) selectedItem.vertices = null;
        } 
        
        // C) PEMBE BUTON: DİKDÖRTGEN VE ÇOKGEN BOYUTLANDIRMA (GÜNCEL VERSİYON)
        else if (selectedPointKey === 'resize' || selectedPointKey === 'image_resize') {
            const isRect = (selectedItem.type === 'rectangle' || selectedItem.type === 'rect' || selectedItem.type === 'image');
            
            if (isRect) {
                // Konum ve boyutları 'originalStartPos' ve 'initialWidth' üzerinden al (DİKDÖRTGEN İÇİN)
                const startX = originalStartPos.x || 0;
                const startY = originalStartPos.y || 0;
                const sW = initialWidth || selectedItem.width;
                const sH = initialHeight || selectedItem.height;

                // Sabit Merkez Hesapla
                const startCX = startX + (sW / 2);
                const startCY = startY + (sH / 2);

                const currentDist = Math.hypot(pos.x - startCX, pos.y - startCY);
                const startDist = Math.hypot(dragStartPos.x - startCX, dragStartPos.y - startCY);
                
                if (startDist > 10) {
                    const ratio = currentDist / startDist;
                    const newW = sW * ratio;
                    const newH = sH * ratio;
                    
                    selectedItem.width = newW;
                    selectedItem.height = newH;
                    selectedItem.x = startCX - (newW / 2);
                    selectedItem.y = startCY - (newH / 2);

                    // CM Etiketi Gösterimi
                    const previewLabel = document.getElementById('polygon-preview-label');
                    if (previewLabel && selectedItem.type !== 'image') {
                        const kalibrasyon = 30; // 1cm = 30px
                        previewLabel.innerText = `w: ${(newW / kalibrasyon).toFixed(1)} cm, h: ${(newH / kalibrasyon).toFixed(1)} cm`;
                        previewLabel.style.left = (pos.x + 15) + 'px';
                        previewLabel.style.top = (pos.y - 35) + 'px';
                        previewLabel.style.display = 'block';
                        previewLabel.classList.remove('hidden');
                    }
                }
            } else {
                // STANDART ÇOKGEN BOYUTLANDIRMA (Üçgen, Beşgen vb.)
                const currentDist = Math.hypot(pos.x - selectedItem.center.x, pos.y - selectedItem.center.y);
                const startDist = Math.hypot(dragStartPos.x - selectedItem.center.x, dragStartPos.y - selectedItem.center.y);
                
                if (startDist > 0) {
                    selectedItem.radius = originalStartPos.radius * (currentDist / startDist);
                }
                if (selectedItem.vertices) selectedItem.vertices = null;

                // Çokgen CM Gösterimi
                const previewLabel = document.getElementById('polygon-preview-label');
                if (previewLabel) {
                    const sides = selectedItem.sideCount || selectedItem.type;
                    let kenarPx = selectedItem.radius;
                    if (sides >= 3) kenarPx = 2 * selectedItem.radius * Math.sin(Math.PI / sides);
                    const cmUzunluk = (kenarPx / 30).toFixed(1);
                    previewLabel.innerText = sides === 0 ? `r: ${cmUzunluk} cm` : `a: ${cmUzunluk} cm`;
                    previewLabel.style.left = (pos.x + 15) + 'px';
                    previewLabel.style.top = (pos.y - 35) + 'px';
                    previewLabel.style.display = 'block';
                    previewLabel.classList.remove('hidden');
                }
            }
        }

        redrawAllStrokes();
// --- GÜNCEL VE AKICI TAŞIMA MOTORU ---
       // --- GÜNCEL VE AKICI TAŞIMA MOTORU ---
        if (typeof isConnected !== 'undefined' && isConnected) {
            
            // 🚨 SİHİRLİ ÇÖZÜM: Koca resmi değil, sadece şeklin iskeletini (koordinatları) yolluyoruz!
            const hafifSekil = {
                id: selectedItem.id,
                isBackground: selectedItem.isBackground === true,
                x: selectedItem.x,
                y: selectedItem.y,
                width: selectedItem.width,
                height: selectedItem.height,
                rotation: selectedItem.rotation || 0,
                radius: selectedItem.radius,
                cx: selectedItem.cx,
                cy: selectedItem.cy,
                center: selectedItem.center
            };

            // 1. Sadece hafif iskeleti PC'ye ilet
            window.sendNetworkData({ 
                type: 'sekil_guncelle', 
                stroke: hafifSekil 
            });
            
            // 2. PC'de o nesnenin seçili olduğunu ve butonlarının çıkması gerektiğini hatırlat
            window.sendNetworkData({ 
                type: 'secimi_senkronize_et', 
                strokeId: selectedItem.id 
            });
        }



        return; 
    }

    const isPhysicalTool = ['ruler', 'gonye', 'aciolcer', 'pergel'].includes(currentTool);
    if (isPhysicalTool || currentTool === 'none') return;

    // --- 2. AKILLI YAKALAMA (SNAP) SİSTEMİ ---
    clearTimeout(snapHoverTimer);
    if (['point', 'straightLine', 'pen', 'segment'].includes(currentTool)) {
        const potentialSnap = findSnapPoint(pos); 
        if (potentialSnap) {
            snapHoverTimer = setTimeout(() => {
                snapTarget = potentialSnap;
                snapIndicator.style.left = `${snapTarget.x}px`;
                snapIndicator.style.top = `${snapTarget.y}px`;
                snapIndicator.style.display = 'block';
            }, 25);
        } else {
            snapTarget = null;
            snapIndicator.style.display = 'none';
        }
    }

    // --- 3. SİLGİ ÖNİZLEMESİ (GÜNCELLENDİ) ---
    if (currentTool === 'eraser') {
        eraserPreview.style.left = `${pos.x}px`;
        eraserPreview.style.top = `${pos.y}px`;
        eraserPreview.style.display = 'block';
    } else {
        // Silgi seçili değilse imleci her hareketle beraber gizle
        if (typeof eraserPreview !== 'undefined' && eraserPreview) {
            eraserPreview.style.display = 'none';
        }
    }

   // --- 4. ÇİZİM ÖN İZLEMELERİ ---
    let previewActive = false;
    const endPos = snapTarget || pos;

    if (isDrawingLine || isDrawingInfinityLine || isDrawingSegment || isDrawingRay || isDrawingRectangle || (window.tempPolygonData && window.tempPolygonData.center) || (currentTool === 'snapshot' && typeof snapshotStart !== 'undefined' && snapshotStart)) {
        redrawAllStrokes();
        
        const ctx = canvas.getContext('2d');
        ctx.save(); // Kalemin mevcut ayarlarını yedekle
        
        ctx.strokeStyle = window.currentLineColor || '#000000';
        ctx.lineWidth = 3;
        ctx.setLineDash([5, 5]); // KESİKLİ ÇİZGİ EFEKTİ

        if (['straightLine', 'line', 'segment', 'ray'].includes(currentTool) && lineStartPoint) {
            ctx.beginPath();
            
            // Başlangıç ve bitiş arasındaki mesafe/yön farkı
            const dx = endPos.x - lineStartPoint.x;
            const dy = endPos.y - lineStartPoint.y;
            
            // Eğer fare hareket ettiyse yönü hesapla
            if (dx !== 0 || dy !== 0) {
                const devCarpan = 5000; // Ekran dışına taşıracak (sonsuzluk hissi verecek) çarpan
                
                if (currentTool === 'line') {
                    // DOĞRU: Her iki uca doğru ekran dışına kadar uzar
                    ctx.moveTo(lineStartPoint.x - dx * devCarpan, lineStartPoint.y - dy * devCarpan);
                    ctx.lineTo(lineStartPoint.x + dx * devCarpan, lineStartPoint.y + dy * devCarpan);
                } 
                else if (currentTool === 'ray') {
                    // IŞIN: Başlangıç noktasından çıkar, fare yönünde sonsuza uzar
                    ctx.moveTo(lineStartPoint.x, lineStartPoint.y);
                    ctx.lineTo(lineStartPoint.x + dx * devCarpan, lineStartPoint.y + dy * devCarpan);
                } 
                else {
                    // DOĞRU PARÇASI / DÜZ ÇİZGİ: Sadece ilk noktadan fareye kadar çizilir
                    ctx.moveTo(lineStartPoint.x, lineStartPoint.y);
                    ctx.lineTo(endPos.x, endPos.y);
                }
            } else {
                // Fare henüz hareket etmediyse sadece nokta koy
                ctx.moveTo(lineStartPoint.x, lineStartPoint.y);
                ctx.lineTo(endPos.x, endPos.y);
            }
            
            ctx.stroke();
        }
        else if (isDrawingRectangle && rectStartPoint) {
            ctx.beginPath();
            ctx.rect(Math.min(rectStartPoint.x, endPos.x), Math.min(rectStartPoint.y, endPos.y), Math.abs(endPos.x - rectStartPoint.x), Math.abs(endPos.y - rectStartPoint.y));
            ctx.stroke();
        } 
        else if (window.tempPolygonData && window.tempPolygonData.center) {
            const cx = window.tempPolygonData.center.x;
            const cy = window.tempPolygonData.center.y;
            
            // Yarıçap ve açıyı hesapla
            const radius = Math.hypot(endPos.x - cx, endPos.y - cy);
            const angleRad = Math.atan2(endPos.y - cy, endPos.x - cx);
            
            window.tempPolygonData.radius = radius;
            window.tempPolygonData.rotation = angleRad * 180 / Math.PI; // Derece olarak kaydet
            
            const sides = window.tempPolygonData.type;

            ctx.beginPath();
            if (sides === 0) {
                // Çember Önizlemesi
                ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            } else if (sides >= 3) {
                // Tüm Düzgün Çokgenlerin (3gen, 5gen, 6gen vb.) Kusursuz Önizlemesi
                for (let i = 0; i <= sides; i++) {
                    const polyAngle = (i * 2 * Math.PI / sides) + angleRad;
                    const px = cx + radius * Math.cos(polyAngle);
                    const py = cy + radius * Math.sin(polyAngle);
                    if (i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
            }
            ctx.stroke();
// --- BURADAN İTİBAREN EKLE ---
        
        // --- CANLI ÇİZİM ÖNİZLEMESİNİ PC'YE FIRLAT (DOKUNMATİK UYUMLU) ---
        if (typeof isConnected !== 'undefined' && isConnected) {
            let previewData = null;

            // 1. Çizgi Çeşitleri
            if (['straightLine', 'line', 'segment', 'ray'].includes(currentTool) && typeof lineStartPoint !== 'undefined' && lineStartPoint) {
                previewData = { tool: currentTool, start: lineStartPoint, end: endPos };
            }
            // 2. Dikdörtgen
            else if (currentTool === 'rectangle' && typeof rectStartPoint !== 'undefined' && rectStartPoint) {
                previewData = { tool: currentTool, start: rectStartPoint, end: endPos };
            }
            // 3. Çokgen ve Çember
            else if (window.tempPolygonData && window.tempPolygonData.center) {
                previewData = { 
                    tool: 'polygon',
                    start: window.tempPolygonData.center,
                    end: endPos,
                    radius: window.tempPolygonData.radius || Math.hypot(endPos.x - window.tempPolygonData.center.x, endPos.y - window.tempPolygonData.center.y)
                };
            }

            // PC'ye ateşle!
            if (previewData) {
                window.sendNetworkData({
                    type: 'aktif_onizleme',
                    arac: 'cizim_onizleme',
                    payload: previewData
                });
            }
        }
        
        // --- BURAYA KADAR EKLE ---

// ========================================================
            // GERÇEK ZAMANLI KENAR UZUNLUĞU GÖSTERGESİ
            // ========================================================
            const previewLabel = document.getElementById('polygon-preview-label');
            if (previewLabel) {
                let kenarPx = radius; // Varsayılan olarak çember için yarıçap
                if (sides >= 3) {
                    // Çokgen için matematiksel kenar uzunluğu formülü
                    kenarPx = 2 * radius * Math.sin(Math.PI / sides);
                }
                
                // =========================================================
                // NOKTA ATIŞI EŞİTLEME (ŞEKİL İLE ÖNİZLEMEYİ BİRLEŞTİRME)
                // cokgen.js dosyası ile birebir aynı kalibrasyon (30 piksel)
                // =========================================================
                const kalibrasyon = 30; // <--- İŞTE UYGULAMANIN GİZLİ SAYISI 30!
                
                let cmUzunluk = (kenarPx / kalibrasyon).toFixed(1);
                
                // Metni belirle
                previewLabel.innerText = sides === 0 ? `r: ${cmUzunluk} cm` : `a: ${cmUzunluk} cm`;
                
                // Etiketi farenin/kalemin ucuna yerleştir
                previewLabel.style.left = (endPos.x + 15) + 'px';
                previewLabel.style.top = (endPos.y - 35) + 'px';
                previewLabel.style.display = 'block';
                previewLabel.classList.remove('hidden');
            }        


        } 
        else if (currentTool === 'snapshot' && snapshotStart) {
            ctx.strokeStyle = '#00ffcc';
            ctx.beginPath();
            ctx.rect(Math.min(snapshotStart.x, endPos.x), Math.min(snapshotStart.y, endPos.y), Math.abs(endPos.x - snapshotStart.x), Math.abs(endPos.y - snapshotStart.y));
            ctx.stroke();
        }

        
        ctx.restore(); // Çizim bitince kalemi düz çizgiye geri çevir
        previewActive = true;

window.sendNetworkData({
    type: 'aktif_onizleme',
    arac: 'cizim_onizleme',
    payload: {
        tool: currentTool,
        path: (typeof currentPath !== 'undefined') ? currentPath : [],
        start: (typeof lineStartPoint !== 'undefined') ? lineStartPoint : null,
        end: anlikPos,
        radius: (typeof radius !== 'undefined') ? radius : null
    }
});
    }

    if (previewActive) return; 

    // --- 5. AKTİF ÇİZİM VE KESKİN NİŞANCI (LASSO) KONTROLÜ ---
    
    // 2. ADIM: LASSO İÇİN SÜRÜKLEME (POINTERMOVE) İŞLEMİ
    if (currentTool === 'lasso') {
        currentMousePos = pos; 
        
        // Sürüklerken hedef başlangıç noktasına yaklaştı mı kontrol et (Yeşil Işık İçin)
        if (typeof isDrawingLasso !== 'undefined' && isDrawingLasso && typeof lassoPoints !== 'undefined' && lassoPoints.length > 0) {
            let startPoint = lassoPoints[0];
            const toleransScale = (typeof globalScale !== 'undefined' && globalScale > 0) ? globalScale : 1;
            const kapanmaToleransi = 40 / toleransScale; 
            let mesafe = Math.hypot(pos.x - startPoint.x, pos.y - startPoint.y);
            
            window.lassoIsClosing = (mesafe < kapanmaToleransi); // Yakınsa true olur
        }

        redrawAllStrokes(); 
        return; // Lasso çalışırken alt kısımdaki kalem kodlarına inme
    }

    // Diğer araçlar (Kalem / Silgi) eğer çizim yapılmıyorsa burada dursun
    if (!isDrawing) return;

    if (currentTool === 'pen') {
        const pInfoMove = getPointerInfo(e);
        const pressureMove = pInfoMove.type === 'pen' ? pInfoMove.pressure : 1;
        
        // Sadece tablette çizer, ağı meşgul etmez
        drawnStrokes[drawnStrokes.length - 1].path.push({x: pos.x, y: pos.y, p: pressureMove});
        redrawAllStrokes();
    }

    else if (currentTool === 'eraser') {
        // ... (Buradaki silgi algoritması aynı kalacak)
    }

// --- BURADAN İTİBAREN EKLE ---
        // --- CANLI ÇİZİM ÖNİZLEMESİNİ PC'YE FIRLAT ---
        if (typeof isConnected !== 'undefined' && isConnected && e.buttons > 0) {
            
            const anlikPos = typeof getPointerPos === 'function' ? getPointerPos(e) : { x: e.clientX, y: e.clientY };
            let previewData = null;

            if (['straightLine', 'line', 'segment', 'ray'].includes(currentTool) && typeof lineStartPoint !== 'undefined' && lineStartPoint) {
                previewData = { tool: currentTool, start: lineStartPoint, end: anlikPos };
            }
            else if (currentTool === 'rectangle' && typeof rectStartPoint !== 'undefined' && rectStartPoint) {
                previewData = { tool: currentTool, start: rectStartPoint, end: anlikPos };
            }
            else if (window.tempPolygonData && window.tempPolygonData.center) {
                previewData = { 
                    tool: 'polygon',
                    start: window.tempPolygonData.center,
                    end: anlikPos,
                    radius: Math.hypot(anlikPos.x - window.tempPolygonData.center.x, anlikPos.y - window.tempPolygonData.center.y)
                };
            }

            if (previewData) {
                window.sendNetworkData({
                    type: 'aktif_onizleme',
                    arac: 'cizim_onizleme',
                    payload: previewData
                });
            }
        }
        // --- BURAYA KADAR EKLE ---

}, { passive: false }); // <--- TÜM FONKSİYON ŞİMDİ BURADA KAPANIYOR


// --- POINTER UP (TÜM ÇİZİM VE ARAÇ İŞLEMLERİNİN BİTİŞİ) ---

canvas.addEventListener('pointerup', (e) => {
    isDrawing = false;
    
    // Kilitleri serbest bırak
    if (canvas.hasPointerCapture && canvas.hasPointerCapture(e.pointerId)) {
        canvas.releasePointerCapture(e.pointerId);
    }
    if (e.pointerType === 'touch' && e.cancelable) e.preventDefault();

    // --- PARDUS ÇİFT SİNYAL ENGELLEYİCİ ---
    if (e.pointerType === 'mouse') {
        let hasTouch = false;
        for (let p of pointers.values()) {
            if (p.pointerType === 'touch' || p.pointerType === 'pen') hasTouch = true;
        }
        if (hasTouch) return;
    }

    pointers.delete(e.pointerId); 
    if (pointers.size < 2) lastDist = 0; 

    // KRİTİK: Son kararlı konumu al
    const finalPos = snapTarget || currentMousePos;

    // --- A) FİZİKSEL ARAÇLAR (CETVEL, GÖNYE, PERGEL vb.) ---
    const isPhysicalTool = ['ruler', 'gonye', 'aciolcer', 'pergel'].includes(currentTool);
    if (isPhysicalTool) {
        isDrawing = false;
        if (currentTool === 'ruler' && window.RulerTool && window.RulerTool.finalizeDraw) window.RulerTool.finalizeDraw();
        if (currentTool === 'gonye' && window.GonyeTool && window.GonyeTool.finalizeDraw) window.GonyeTool.finalizeDraw();
        if (currentTool === 'aciolcer' && window.AciolcerTool && window.AciolcerTool.finalizeDraw) window.AciolcerTool.finalizeDraw();
        if (currentTool === 'pergel' && window.PergelTool && window.PergelTool.finalizeDraw) window.PergelTool.finalizeDraw();

        setTimeout(() => {
            const lastS = drawnStrokes[drawnStrokes.length - 1];
            if (lastS) {
                if (!lastS.id) lastS.id = Date.now() + Math.random();
                if (typeof window.sendNetworkData === 'function' && typeof isConnected !== 'undefined' && isConnected) {
                    window.sendNetworkData({ type: 'yeni_cizim', stroke: lastS });
                }
            }
        }, 50);

        redrawAllStrokes();
        return; 
    }

    // --- B) TAŞIMA (MOVE) MANTIĞI ---
    if (currentTool === 'move' && isMoving) {
        isMoving = false;
        selectedPointKey = null;
        if (returnToSnapshot) {
            returnToSnapshot = false;
            setActiveTool('snapshot');
            if (typeof animateButton !== 'undefined' && animateButton) animateButton.classList.add('active');
            document.body.classList.add('cursor-snapshot');
        }
        redrawAllStrokes();
        return;
    }

    // --- C) NORMAL ÇİZGİLER (DOĞRU, IŞIN, SEGMENT) ---
    if (lineStartPoint && finalPos) {
        let strokeObj = null;

        if (isDrawingLine) {
            strokeObj = { type: 'straightLine', p1: lineStartPoint, p2: finalPos, color: currentLineColor, width: 3 };
        } 
        else if (isDrawingInfinityLine) {
            const l1 = nextPointChar; const l2 = advanceChar(l1); nextPointChar = advanceChar(l2);
            strokeObj = { type: 'line', p1: lineStartPoint, p2: finalPos, color: currentLineColor, width: 3, label1: l1, label2: l2 };
        } 
        else if (isDrawingSegment) {
            const l1 = nextPointChar; const l2 = advanceChar(l1); nextPointChar = advanceChar(l2);
            strokeObj = { type: 'segment', p1: lineStartPoint, p2: finalPos, color: currentLineColor, width: 3, label1: l1, label2: l2 };
        } 
        else if (isDrawingRay) {
            const l1 = nextPointChar; const l2 = advanceChar(l1); nextPointChar = advanceChar(l2);
            strokeObj = { type: 'ray', p1: lineStartPoint, p2: finalPos, color: currentLineColor, width: 3, label1: l1, label2: l2 };
        }

        if (strokeObj) {
            strokeObj.id = Date.now() + Math.random(); 
            drawnStrokes.push(strokeObj);

            if (typeof window.sendNetworkData === 'function' && typeof isConnected !== 'undefined' && isConnected) {
                window.sendNetworkData({ type: 'yeni_cizim', stroke: strokeObj });
            }
            window.nextPointChar = nextPointChar;
            if (typeof redrawAllStrokes === 'function') redrawAllStrokes();
        }
    }

    // --- D) ÇOKGENLER (POLYGON TOOL) ---
    if (currentTool && currentTool.startsWith('draw_polygon_')) {
        if (window.tempPolygonData && window.tempPolygonData.center) {
            const finalRadius = window.tempPolygonData.radius || 0;
            if (finalRadius > 5) {
                const currentType = window.tempPolygonData.type;
                
                if (currentType === 0) window.PolygonTool.finalizeCircle(finalRadius);
                else window.PolygonTool.finalizeDraw(finalRadius, window.tempPolygonData.rotation);
                
                setTimeout(() => {
                    const lastS = drawnStrokes[drawnStrokes.length - 1];
                    if (typeof window.sendNetworkData === 'function' && typeof isConnected !== 'undefined' && isConnected && lastS) {
                        window.sendNetworkData({ type: 'yeni_cizim', stroke: lastS });
                    }
                }, 50);

                if (typeof polygonPreviewLabel !== 'undefined' && polygonPreviewLabel) polygonPreviewLabel.classList.add('hidden');
                window.tempPolygonData.center = null;
                if (window.PolygonTool && window.PolygonTool.handleDrawClick) window.PolygonTool.handleDrawClick(null, currentType);
            }
        }
    }

    // --- E) CANLANDIR (KUTU SNAPSHOT) ---
    if (currentTool === 'snapshot' && snapshotStart && currentMousePos) {
        const x = Math.round(Math.min(snapshotStart.x, currentMousePos.x));
        const y = Math.round(Math.min(snapshotStart.y, currentMousePos.y));
        const w = Math.round(Math.abs(currentMousePos.x - snapshotStart.x));
        const h = Math.round(Math.abs(currentMousePos.y - snapshotStart.y));

        if (w > 10 && h > 10) {
            const bgLayer = document.getElementById('pdf-canvas') || document.querySelector('.pdf-page-canvas');
            const dpr = window.devicePixelRatio || 1;
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = w * (dpr * 10);
            tempCanvas.height = h * (dpr * 10);
            const tempCtx = tempCanvas.getContext('2d');
            
            if (bgLayer) {
                const bgRect = bgLayer.getBoundingClientRect();
                const canvasRect = canvas.getBoundingClientRect();
                const oranX = bgLayer.width / bgRect.width;
                const oranY = bgLayer.height / bgRect.height;
                tempCtx.drawImage(bgLayer, Math.round((x + (canvasRect.left - bgRect.left)) * oranX), Math.round((y + (canvasRect.top - bgRect.top)) * oranY), Math.round(w * oranX), Math.round(h * oranY), 0, 0, tempCanvas.width, tempCanvas.height);
            }
            
            const finalImage = tempCanvas.toDataURL('image/png', 1.0);
            
            const maskStroke = {
                type: 'lasso-mask',
                points: [{ x: x, y: y }, { x: x + w, y: y }, { x: x + w, y: y + h }, { x: x, y: y + h }],
                fillColor: (window.isToolThemeBlack) ? '#222222' : '#ffffff',
                id: Date.now() + Math.random()
            };
            drawnStrokes.push(maskStroke);

            const newImgStroke = {
                type: 'image',
                imgData: finalImage,
                x: x, y: y,
                width: w, height: h,
                id: Date.now() + Math.random(),
                isBoxCopy: true
            };
            drawnStrokes.push(newImgStroke);
            
            if (typeof window.sendNetworkData === 'function' && typeof isConnected !== 'undefined' && isConnected) {
                window.sendNetworkData({ type: 'yeni_cizim', stroke: maskStroke });
                window.sendNetworkData({ type: 'yeni_cizim', stroke: newImgStroke });
            }
            
            if (typeof setActiveTool === 'function') setActiveTool('move');
            else currentTool = 'move';
            selectedItem = newImgStroke;
            snapshotStart = null;
            redrawAllStrokes();
        }
    }

    // --- F) DİKDÖRTGEN ARACI ---
    if (isDrawingRectangle && rectStartPoint && finalPos) {
        const widthPx = Math.abs(finalPos.x - rectStartPoint.x);
        const heightPx = Math.abs(finalPos.y - rectStartPoint.y);

        if (widthPx > 10 && heightPx > 10) {
            const startX = Math.min(rectStartPoint.x, finalPos.x);
            const startY = Math.min(rectStartPoint.y, finalPos.y);
            const color = window.isToolThemeBlack ? '#000000' : (window.currentLineColor || '#000000');

            const rectLabels = [nextPointChar];
            for (let i = 0; i < 3; i++) {
                nextPointChar = advanceChar(nextPointChar);
                rectLabels.push(nextPointChar);
            }
            nextPointChar = advanceChar(nextPointChar);

            const rectangleStroke = { 
                type: 'rectangle', x: startX, y: startY, width: widthPx, height: heightPx, rotation: 0, 
                color: color, labels: rectLabels, showEdgeLabels: true, showAngleLabels: false,
                id: Date.now() + Math.random() 
            };

            drawnStrokes.push(rectangleStroke);

            if (typeof window.sendNetworkData === 'function' && typeof isConnected !== 'undefined' && isConnected) {
                window.sendNetworkData({ type: 'yeni_cizim', stroke: rectangleStroke });
            }
            window.nextPointChar = nextPointChar; 
            if (typeof redrawAllStrokes === 'function') redrawAllStrokes();
        }
    }

  // --- G) AKILLI KALEM (PEN) VE ŞEKİL TANIMA (GÜVENLİ SÜRÜM) ---
    if (currentTool === 'pen') {
        let lastStroke = drawnStrokes[drawnStrokes.length - 1];    
        
        if (lastStroke && lastStroke.type === 'pen') {
            if (!lastStroke.id) lastStroke.id = Date.now() + Math.random(); // Zombileri engelle

            if (lastStroke.path && lastStroke.path.length <= 3) {
                 if (lastStroke.path[0]) lastStroke.path.push({ x: lastStroke.path[0].x + 0.1, y: lastStroke.path[0].y + 0.1 });
                 setTimeout(() => {
                     if (typeof window.sendNetworkData === 'function' && typeof isConnected !== 'undefined' && isConnected) {
                         window.sendNetworkData({ type: 'yeni_cizim', stroke: lastStroke });
                     }
                 }, 50);
            } 
            else {
                let correctedShape = null;
                if (typeof akilliSekilTani === 'function') {
                    try { correctedShape = akilliSekilTani(lastStroke); } catch(err) {}
                }

                if (correctedShape) {
                    drawnStrokes.pop(); // Tabletteki bozuk çizimi sil
                    
                    if (Array.isArray(correctedShape)) {
                        correctedShape.forEach(s => s.id = Date.now() + Math.random());
                        drawnStrokes.push(...correctedShape);
                        
                        setTimeout(() => {
                            if (typeof window.sendNetworkData === 'function' && typeof isConnected !== 'undefined' && isConnected) {
                                window.sendNetworkData({ type: 'akilli_sekil_toplu', strokes: correctedShape });
                            }
                        }, 50);
                    } 
                    else {
                        correctedShape.id = Date.now() + Math.random(); 
                        drawnStrokes.push(correctedShape);
                        
                        setTimeout(() => {
                            if (typeof window.sendNetworkData === 'function' && typeof isConnected !== 'undefined' && isConnected) {
                                window.sendNetworkData({ type: 'yeni_cizim', stroke: correctedShape });
                            }
                        }, 50);
                    }
                } 
                else {
                    // SİHİRLİ SIKIŞTIRMA: Küsüratları atarak veriyi %60 küçültür
                    const safePenStroke = {
                        type: 'pen',
                        id: lastStroke.id,
                        color: lastStroke.color || '#000000',
                        baseWidth: lastStroke.baseWidth || 3,
                        width: lastStroke.width || lastStroke.baseWidth || 3,
                        isBackground: false,
                        path: lastStroke.path.map(p => ({ 
                            x: Math.round(p.x), 
                            y: Math.round(p.y), 
                            p: Number((p.p || 1).toFixed(2)) 
                        })) 
                    };
                    
                    setTimeout(() => {
                        if (typeof window.sendNetworkData === 'function' && typeof isConnected !== 'undefined' && isConnected) {
                            window.sendNetworkData({ type: 'yeni_cizim', stroke: safePenStroke });
                        }
                    }, 50);
                }
            }
        }
    }

    // --- GENEL SIFIRLAMA ---
    isDrawing = false;
    isDrawingLine = isDrawingInfinityLine = isDrawingSegment = isDrawingRay = false;
    isDrawingRectangle = false; 
    lineStartPoint = null;
    rectStartPoint = null;      
    snapTarget = null;
    window.isImageRotating = false;
    window.isImageResizing = false;
    if (typeof snapIndicator !== 'undefined' && snapIndicator) snapIndicator.style.display = 'none';

    // --- H) KESKİN NİŞANCI LASSO (SERBEST KESİM) ---

    // --- H) KESKİN NİŞANCI LASSO (SERBEST KESİM) ---
    if (currentTool === 'lasso' && window.isDraggingLassoPoint) {
        window.isDraggingLassoPoint = false;
        
        if (!isDrawingLasso) {
            isDrawingLasso = true;
            lassoPoints = [{ x: currentMousePos.x, y: currentMousePos.y }];
        } else {
            let startPoint = lassoPoints[0];
            const mesafe = Math.hypot(currentMousePos.x - startPoint.x, currentMousePos.y - startPoint.y);
            
            if (mesafe < 40) { 
                lassoPoints.push({ x: startPoint.x, y: startPoint.y });

                let minX = Math.min(...lassoPoints.map(p => p.x));
                let minY = Math.min(...lassoPoints.map(p => p.y));
                let maxX = Math.max(...lassoPoints.map(p => p.x));
                let maxY = Math.max(...lassoPoints.map(p => p.y));
                let w = Math.max(10, maxX - minX);
                let h = Math.max(10, maxY - minY);

                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = w; tempCanvas.height = h;
                const tempCtx = tempCanvas.getContext('2d');

                tempCtx.save();
                tempCtx.beginPath();
                tempCtx.moveTo(lassoPoints[0].x - minX, lassoPoints[0].y - minY);
                for (let i = 1; i < lassoPoints.length; i++) tempCtx.lineTo(lassoPoints[i].x - minX, lassoPoints[i].y - minY);
                tempCtx.closePath();
                tempCtx.clip(); 

                const bgLayer = document.getElementById('pdf-canvas') || document.querySelector('.pdf-page-canvas');
                if (bgLayer) {
                    const sX = bgLayer.width / bgLayer.offsetWidth;
                    const sY = bgLayer.height / bgLayer.offsetHeight;
                    tempCtx.drawImage(bgLayer, minX * sX, minY * sY, w * sX, h * sY, 0, 0, w, h);
                }
                tempCtx.drawImage(canvas, minX, minY, w, h, 0, 0, w, h);
                tempCtx.restore();

                const finalImage = tempCanvas.toDataURL('image/png');

                let cx = 0, cy = 0;
                for (let p of lassoPoints) { cx += p.x; cy += p.y; }
                cx /= lassoPoints.length; cy /= lassoPoints.length;

                let dx = lassoPoints[0].x - cx; let dy = lassoPoints[0].y - cy;
                let dist = Math.hypot(dx, dy) || 1;
                let sampleX = lassoPoints[0].x + (dx / dist) * 10; let sampleY = lassoPoints[0].y + (dy / dist) * 10;
                
                let detectedColor = (typeof window.isToolThemeBlack !== 'undefined' && window.isToolThemeBlack) ? '#222222' : '#ffffff'; 

                try {
                    let pxl = canvas.getContext('2d').getImageData(sampleX, sampleY, 1, 1).data;
                    if (pxl[3] > 0) detectedColor = `rgba(${pxl[0]}, ${pxl[1]}, ${pxl[2]}, ${pxl[3]/255})`;
                } catch (e) { console.log("Renk okuma güvenlik duvarına takıldı."); }

                const maskStroke = { type: 'lasso-mask', points: lassoPoints.map(p => ({ x: p.x, y: p.y })), fillColor: detectedColor, id: Date.now() + Math.random() };
                drawnStrokes.push(maskStroke); 

                const newImgStroke = { type: 'image', imgData: finalImage, x: minX + 30, y: minY + 30, width: w, height: h, rotation: 0, isBackground: false, imgObj: null, id: Date.now() + Math.random() };
                
                const tempImg = new Image();
                tempImg.onload = () => { newImgStroke.imgObj = tempImg; if (typeof redrawAllStrokes === 'function') redrawAllStrokes(); };
                tempImg.src = finalImage;
                drawnStrokes.push(newImgStroke);

                if (typeof window.sendNetworkData === 'function' && typeof isConnected !== 'undefined' && isConnected) {
                    window.sendNetworkData({ type: 'yeni_cizim', stroke: maskStroke });
                    window.sendNetworkData({ type: 'yeni_cizim', stroke: newImgStroke });
                }

                if (typeof setActiveTool === 'function') setActiveTool('move'); else currentTool = 'move';
                selectedItem = newImgStroke;
                isDrawingLasso = false; window.lassoIsClosing = false; currentMousePos = null; lassoPoints = []; 
            } else {
                lassoPoints.push({ x: currentMousePos.x, y: currentMousePos.y });
            }
        }
        redrawAllStrokes();
        return;
    } else {
        redrawAllStrokes();
    }
}, { passive: false }); // <--- pointerup fonksiyonu burada BİTTİ
// ==============================================================================


canvas.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
        
        const zoomStep = e.deltaY > 0 ? 0.95 : 1.05; 

        // SADECE ARKA PLANI (PDF/RESİM) BUL VE BÜYÜT/KÜÇÜLT
        const bgStrokes = drawnStrokes.filter(s => s.isBackground === true);
        if (bgStrokes.length > 0) {
            bgStrokes.forEach(bg => {
                const newW = bg.width * zoomStep;
                const newH = bg.height * zoomStep;
                // Merkezden büyütmek için x ve y koordinatlarını da kaydır
                bg.x = bg.x - (newW - bg.width) / 2;
                bg.y = bg.y - (newH - bg.height) / 2;
                bg.width = newW;
                bg.height = newH;
            });



            redrawAllStrokes();
        }
    }
}, { passive: false });


// --- POINTERCANCEL (KESİNTİ DURUMUNDA SIFIRLAMA) ---
canvas.addEventListener('pointercancel', (e) => {
// --- BUNLARI EKLE ---
    pointers.delete(e.pointerId);
    lastDist = 0;
    // --------------------

    // İşlemi iptal et ve tüm bayrakları (flag) indir
    isDrawing = false;
    isMoving = false;
    isPinching = false; // Varsa zoom işlemini de durdur
isDrawingRectangle = false; 
    rectStartPoint = null;
    
    // Geçici verileri temizle
    snapshotStart = null;
    snapTarget = null;
    lineStartPoint = null;
    window.tempPolygonData = null;

    // Arayüz elemanlarını gizle
    if (snapIndicator) snapIndicator.style.display = 'none';
    if (polygonPreviewLabel) polygonPreviewLabel.classList.add('hidden');
    if (eraserPreview) eraserPreview.style.display = 'none';

    // Yarım kalan önizlemeleri ekrandan temizlemek için
    redrawAllStrokes(); 
    
    console.log("Pointer işlemi bir sistem kesintisi nedeniyle iptal edildi.");
});


// --- BUNLARI EKLE: Tablet ekranından dışarı taşan parmakları zorla sil ---
canvas.addEventListener('pointerout', (e) => { pointers.delete(e.pointerId); if (pointers.size < 2) lastDist = 0; });
canvas.addEventListener('pointerleave', (e) => { pointers.delete(e.pointerId); if (pointers.size < 2) lastDist = 0; });


// --- YAPIŞTIRMA (PASTE) DESTEĞİ (CTRL+V) ---
window.addEventListener('paste', (e) => {
    // Panodaki verileri al
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;

    // Verileri tara (Resim var mı?)
    for (let index in items) {
        const item = items[index];
        
        // Eğer bu bir dosya ise ve tipi 'image' içeriyorsa
        if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
            const blob = item.getAsFile();
            const reader = new FileReader();

            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    // Resmi makul bir boyuta getir (Dosya yüklemedeki mantığın aynısı)
                    let startWidth = 300; 
                    let scaleFactor = startWidth / img.width;
                    let startHeight = img.height * scaleFactor;

                    // Resmi Hafızaya 'image' nesnesi olarak ekle
                    drawnStrokes.push({
                        type: 'image',
                        img: img,
                        x: canvas.width / 2, // Ekranın ortasına koy
                        y: canvas.height / 2,
                        width: startWidth,
                        height: startHeight,
                        rotation: 0
                    });

                    redrawAllStrokes(); // Ekrana çiz
                    
                    // İşlem başarılı sesi (İsteğe bağlı)
                    if (window.audio_click) { 
                        window.audio_click.currentTime = 0; 
                        window.audio_click.play(); 
                    }
                };
                img.src = event.target.result;
            };
            
            reader.readAsDataURL(blob);
            e.preventDefault(); // Sayfanın varsayılan yapıştırma davranışını engelle
        }
    }
});

// --- app.js EN ALTINA EKLEYİN (EKSİK OLAN PARÇALAR) ---

function updatePageLabel() {
    if(pageCountLabel) pageCountLabel.innerText = `Sayfa: ${currentPDFPage} / ${totalPDFPages}`;
}

async function renderPDFPage(num) {
    if (!currentPDF) return;
    
    const page = await currentPDF.getPage(num);
    
    // --- BURASI DEĞİŞTİ: OTOMATİK VE YÜKSEK ÇÖZÜNÜRLÜK AYARI ---
    const dpr = window.devicePixelRatio || 1;
    const KALITE_CARPANI = 3; 
    const hdScale = dpr * KALITE_CARPANI;
    
    const viewport = page.getViewport({ scale: hdScale }); 
    // -----------------------------------------------------------

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.height = viewport.height;
    tempCanvas.width = viewport.width;

    // --- BURASI EKLENDİ: YAZI KENARLARINI KESKİNLEŞTİRME FİLTRESİ ---
    tempCtx.imageSmoothingEnabled = true;
    tempCtx.imageSmoothingQuality = 'high';
    // ----------------------------------------------------------------

    await page.render({
        canvasContext: tempCtx,
        viewport: viewport
    }).promise;

    const img = new Image();
    img.onload = () => {
        addNewImageToCanvas(img, true);
        
        // --- KUTU KOPYALARINI PDF SAYFASINA GÖRE GERİ YÜKLEME YAMASI ---
        if (window.boxCopies) {
            window.boxCopies.forEach(copy => {
                if (!copy.pageOwner || copy.pageOwner === num) {
                    if (!copy.imgObj) {
                        const tImg = new Image();
                        tImg.src = copy.imgData;
                        tImg.onload = () => {
                            copy.imgObj = tImg;
                            if (window.drawnStrokes && !window.drawnStrokes.includes(copy)) {
                                window.drawnStrokes.push(copy);
                            }
                            if (window.redrawAllStrokes) window.redrawAllStrokes();
                        };
                    } else {
                        if (window.drawnStrokes && !window.drawnStrokes.includes(copy)) {
                            window.drawnStrokes.push(copy);
                        }
                    }
                }
            });
            if (window.redrawAllStrokes) window.redrawAllStrokes();
        }
    };

    // 🚨 İŞTE 2. ADIMDAKİ DEĞİŞİKLİĞİN YAPILDIĞI YER BURASI 🚨
    const sayfaResmi = tempCanvas.toDataURL('image/png', 1.0);
    img.src = sayfaResmi; 
    
    // YENİ EKLENEN KISIM: Koca kitap yerine sadece bu sayfayı PC'ye fırlat
    if (typeof isConnected !== 'undefined' && isConnected) {
        window.sendNetworkData({ type: 'pdf_sayfa_resmi_aktar', imgData: sayfaResmi });
    }
    
    if(pageCountLabel) pageCountLabel.innerText = `Sayfa: ${num} / ${totalPDFPages}`;
}
// --- app.js İÇİNDEKİ addNewImageToCanvas FONKSİYONU ---

function addNewImageToCanvas(img, isPDF = false) {
    let startWidth = 400; 
    if (img.width < 400) startWidth = img.width;
    
    let scaleFactor = startWidth / img.width;
    let startHeight = img.height * scaleFactor;

    const newStroke = {
        type: 'image',
        id: Date.now() + Math.random(), // 🚨 SİHİRLİ DOKUNUŞ: PC'nin onu tanıması için kimlik veriyoruz 🚨
        img: img, 
        // --- 1. KRİTİK DÜZELTME: TAM ORTALAMA HESABI ---
        x: (canvas.width / 2) - (startWidth / 2),
        y: (canvas.height / 2) - (startHeight / 2),
        width: startWidth,
        height: startHeight,
        rotation: 0,
        isBackground: true 
    };
    
    // (Böylece üst üste binmezler)
// 🚨 DİKKAT: .filter yerine .splice kullanarak sayfa değişiminde hafızanın kopmasını engelliyoruz 🚨
    if (isPDF && typeof pdfImageStroke !== 'undefined' && pdfImageStroke !== null) { 
        for (let i = window.drawnStrokes.length - 1; i >= 0; i--) {
            let s = window.drawnStrokes[i];
            if (s === pdfImageStroke || 
               (s.type === 'image' && s.isBackground === false && !s.isBoxCopy) || 
               (s.isPatch === true || s.type === 'lasso-mask')) {
                window.drawnStrokes.splice(i, 1);
            }
        }
        // Ana hafızayı eşitle
        if (typeof drawnStrokes !== 'undefined') drawnStrokes = window.drawnStrokes; 
    } 
    // --------------------------------------------

    drawnStrokes.push(newStroke);
    
    if (isPDF) {
        pdfImageStroke = newStroke; // Yeni sayfayı sisteme tanıt
    }
    
    // --- 2. KRİTİK DÜZELTME: BUTONU DOĞRU ZAMANDA GÖSTER ---
    // Resim veya PDF ekrana "gerçekten" çizildiği an bu buton görünür olacak

    // 1. Sağ paneldeki İleri/Geri tuşlarını (pdf-controls) geri getir
    const pdfControls = document.getElementById('pdf-controls');
    if (pdfControls) {
        pdfControls.classList.remove('hidden');
        pdfControls.style.display = 'flex'; 
    }

    // 2. Kırmızı Kapatma Butonunu geri getir
    const closeBtn = document.getElementById('btn-close-pdf');
    if (closeBtn) {
        closeBtn.classList.remove('hidden');
        closeBtn.style.display = 'flex';
    }

    redrawAllStrokes();

}

// --- ARAÇ RENGİ DEĞİŞTİRME MANTIĞI (SİYAH / NEON / TOK MAVİ) ---
const toolColorBtn = document.getElementById('btn-tool-color');
let isBlackTheme = false;
window.isToolThemeBlack = false; // Diğer dosyalar için global değişken

if (toolColorBtn) {
    toolColorBtn.addEventListener('click', () => {
        isBlackTheme = !isBlackTheme;
        window.isToolThemeBlack = isBlackTheme; // Durumu kaydet
        
        // Buton yazısını güncelle
        toolColorBtn.innerText = isBlackTheme ? "Araç Rengi: Neon" : "Araç Rengi: Siyah";
        
        // O an ekranda açık olan tüm fiziksel araçları bul ve rengini değiştir
        const elements = document.querySelectorAll('.ruler-container, .gonye-container, .aciolcer-container, #compass-container');
        
        elements.forEach(el => {
            if (isBlackTheme) {
                el.classList.add('tool-black-theme');
            } else {
                el.classList.remove('tool-black-theme');
            }
        });
    });
}

// --- ARAÇLAR AÇILDIĞINDA RENGİ HATIRLA (YAMA) ---
// Sayfa tamamen yüklendikten sonra araçların 'show' fonksiyonlarına ekleme yapıyoruz
window.addEventListener('load', () => {
    const toolsList = [
        { objName: 'RulerTool', elementProp: 'rulerElement' },
        { objName: 'GonyeTool', elementProp: 'gonyeElement' },
        { objName: 'AciolcerTool', elementProp: 'aciolcerElement' },
        { objName: 'PergelTool', elementProp: 'pergelElement' }
    ];

    toolsList.forEach(toolInfo => {
        const toolObj = window[toolInfo.objName];
        if (toolObj && toolObj.show) {
            // Orijinal show fonksiyonunu sakla
            const originalShow = toolObj.show.bind(toolObj);
            
            // Yeni show fonksiyonu tanımla
            toolObj.show = function() {
                originalShow(); // Önce normal açılma işlemini yap
                
                // Sonra tema rengini kontrol et ve uygula
                if (this[toolInfo.elementProp]) {
                    if (window.isToolThemeBlack) {
                        this[toolInfo.elementProp].classList.add('tool-black-theme');
                    } else {
                        this[toolInfo.elementProp].classList.remove('tool-black-theme');
                    }
                }
            };
        }
    });
});

// --- YARDIM VİDEOLARI SİSTEMİ ---

// 1. VİDEO LİSTESİ (Çeviriye Uygun Hale Getirildi)
const tutorialVideos = [
    { id: "vid_cetvel", dosya: "cetvel-vid.mp4" },
    { id: "vid_gonye", dosya: "gonye-vid.mp4" },
    { id: "vid_aciolcer", dosya: "aciolcer-vid.mp4" },
    { id: "vid_pergel", dosya: "pergel-vid.mp4" },
    { id: "vid_canlandir", dosya: "canlandir-vid.mp4" },
    { id: "vid_cizgi", dosya: "cizgi-vid.mp4" },
    { id: "vid_cokgenler", dosya: "cokgenler-vid.mp4" },
    { id: "vid_kalem", dosya: "kalem-vid.mp4" },
    { id: "vid_kitap", dosya: "kitap-yukleme-vid.mp4" },
    { id: "vid_oyunlar", dosya: "oyunlar-vid.mp4" }
];


// Elementleri Seç
const helpBtn = document.getElementById('btn-help');
const helpModal = document.getElementById('help-modal');
const closeHelpBtn = document.getElementById('close-help');
const videoListContainer = document.getElementById('video-list-container');
const videoPlayer = document.getElementById('main-video-player');
const videoTitleLabel = document.getElementById('video-title-label');

// Listeyi Oluştur (Çoklu Dil Destekli)
function loadVideoList() {
    videoListContainer.innerHTML = ''; 
    
    // O anki seçili dili al (Eğer boşsa 'tr' kabul et)
    const t = translations[currentLang || 'tr'];

    tutorialVideos.forEach((vid) => {
        const btn = document.createElement('button');
        btn.className = 'video-item-btn';
        
        // Çeviriden başlığı al (Eğer çeviri dosyasına eklemeyi unutursan hata vermesin diye id'yi yazar)
        const videoBaslik = t[vid.id] || vid.id; 
        
        btn.innerText = `▶ ${videoBaslik}`;
        
        btn.onclick = () => {
            // Tüm butonların rengini sıfırla, buna renk ver
            document.querySelectorAll('.video-item-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Videoyu oynat
            videoPlayer.src = `videolar/${vid.dosya}`;
            videoTitleLabel.innerText = videoBaslik; // Oynatıcının üstündeki başlığı da çevir
            videoPlayer.play();
        };
        videoListContainer.appendChild(btn);
    });
}
// Açma/Kapama Olayları
if (helpBtn && helpModal) {
    helpBtn.addEventListener('click', () => {
        helpModal.classList.remove('hidden');
        loadVideoList();
    });

    closeHelpBtn.addEventListener('click', () => {
        helpModal.classList.add('hidden');
        videoPlayer.pause();
        videoPlayer.src = ""; // Videoyu durdur ve sıfırla
    });
}

// --- KESİN ÇÖZÜM: PDF KAPATMA BUTONU (Global Dinleyici) ---
document.addEventListener('click', function(e) {
    const btn = e.target.closest('#btn-close-pdf');

    if (btn) {
        console.log("PDF Kapatılıyor..."); 
        
        // 1. PC'YE KAPATMA EMRİ GÖNDER
        if (typeof window.sendNetworkData === 'function' && typeof isConnected !== 'undefined' && isConnected) {
            window.sendNetworkData({ type: 'pdf_kapat' });
        }
        
        e.preventDefault();
        e.stopPropagation();

        // 🚨 2. SİHİRLİ ÇÖZÜM: filter yerine splice ile hafıza kopmadan temizlik yapıyoruz 🚨
        if (window.drawnStrokes) {
            for (let i = window.drawnStrokes.length - 1; i >= 0; i--) {
                // PDF, Resim veya arka plan ne varsa koparmadan sil
                if (window.drawnStrokes[i].isBackground === true) {
                    window.drawnStrokes.splice(i, 1);
                }
            }
        }

        // 3. Değişkenleri Sıfırla
        if (typeof currentPDF !== 'undefined') currentPDF = null;
        if (typeof pdfImageStroke !== 'undefined') pdfImageStroke = null;
        if (typeof currentPDFPage !== 'undefined') currentPDFPage = 1;
        if (typeof totalPDFPages !== 'undefined') totalPDFPages = 0;
        if (typeof backgroundImage !== 'undefined') backgroundImage = null;

        // 4. Butonları Gizle
        const controls = document.getElementById('pdf-controls');
        if (controls) {
            controls.classList.add('hidden');
            controls.style.display = 'none';
        }
        btn.classList.add('hidden');
        btn.style.display = 'none';

        // 5. Ekranı Temizle ve Kalanları Yeniden Çiz
        if (typeof redrawAllStrokes === 'function') {
            const canvas = document.getElementById('drawing-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            redrawAllStrokes();
        }
        
        try {
            if (window.audio_click) {
                window.audio_click.currentTime = 0;
                window.audio_click.play();
            }
        } catch(err) {}
    }
}, true);


// --- BAŞLANGIÇ ---
// --- AKILLI EKRAN BOYUTLANDIRMA (ADRES ÇUBUĞU ZIPLAMASINI ENGELLER) ---
let lastWindowWidth = window.innerWidth;

function resizeCanvas() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    // Gerçekten ekran döndüyse veya boyut değiştiyse güncelle
    lastWindowWidth = newWidth;
    canvas.width = newWidth;
    canvas.height = newHeight;
    redrawAllStrokes();

// canvas.height = newHeight; satırının hemen altına ekle
setupCanvasResolution();
}

window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

// --- app.js EN ALT SATIR (EDGE, CHROME, TABLET UYUMLU FİNAL) ---

{
    let deferredPrompt; 
    const installPopup = document.getElementById('install-popup');
    const btnInstall = document.getElementById('btn-popup-install');
    const btnClose = document.getElementById('btn-popup-close');
    const iosInstructions = document.getElementById('ios-instructions');

    // 1. Tarayıcı sinyali (Install Prompt)
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Popup'ı göster
        if (installPopup) installPopup.style.display = 'flex';
    });

    // 2. iOS (iPhone/iPad) Kontrolü
    const isIos = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator.standalone);

    if (isIos && !isInStandaloneMode) {
        setTimeout(() => {
            if (installPopup) {
                installPopup.style.display = 'flex';
                if (btnInstall) btnInstall.style.display = 'none'; // iPhone'da butonu gizle
                if (iosInstructions) iosInstructions.style.display = 'block'; // Tarifi göster
            }
        }, 3000);
    }

    // --- BUTONLARI ÇALIŞTIRAN FONKSİYON (EDGE DOKUNMATİK HATASI ÇÖZÜMÜ) ---
    const activateButton = (btn, actionCallback) => {
        if (!btn) return;

        const handler = async (e) => {
            // Edge'in dokunmayı yutmasını engelle
            e.stopPropagation(); 
            e.preventDefault(); 
            
            // İşlemi gerçekleştir
            await actionCallback();
        };

        // Hem tıklama hem parmak dokunuşunu dinle
        btn.addEventListener('click', handler);
        btn.addEventListener('touchstart', handler, { passive: false });
    };

    // --- BUTONLARA GÖREVLERİNİ VER ---

    // A) Yükle Butonu
    activateButton(btnInstall, async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log("Sonuç:", outcome);
            deferredPrompt = null;
        }
        if (installPopup) installPopup.style.display = 'none';
    });

    // B) Kapat (Hayır) Butonu
    activateButton(btnClose, async () => {
        if (installPopup) installPopup.style.display = 'none';
    });
}

// --- app.js EN ALTA EKLE: DÖNDÜRME FONKSİYONU ---

/**
 * Bir HTML elementine döndürme özelliği ekler.
 * @param {HTMLElement} element - Döndürülecek olan kopya kutusu (div)
 */

// ==========================================
// --- TARAYICI DOKUNMATİK ÇAKIŞMA ÇÖZÜMÜ ---
// ==========================================
// Tarayıcının adres çubuğu veya "sayfayı yenile" hareketinin
// döndürme (rotate) ve taşıma işlemlerini bozmasını engeller.
window.addEventListener('touchmove', function(e) {
    // Eğer dokunulan şey döndürme kulpuysa veya kopyalanan resimse:
    if (e.target.closest('.rotate-handle') || 
        e.target.classList.contains('rotate-handle') ||
        e.target.closest('.resize-handle') ||
        e.target.tagName.toLowerCase() === 'img') {
        
        // Tarayıcıya "Karışma, kaydırma yapma!" diyoruz.
        e.preventDefault(); 
    }
}, { passive: false }); // passive: false çok önemlidir, tarayıcıyı durdurmaya izin verir.
// ==========================================


// =========================================================
// MOBİL TARAYICI ZIPLAMA ÇÖZÜMÜ: KATI EKRAN KİLİDİ (app.js)
// =========================================================
function lockScreenSize() {
    // Ekranın o anki gerçek piksel boyutunu al
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Kanvası ve body'yi bu piksel değerine beton gibi sabitle (100vh yerine px kullan)
    const canvas = document.getElementById('drawing-canvas');
    if (canvas) {
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvas.width = w;   // İç çizim çözünürlüğünü kilitle
        canvas.height = h;
    }

    document.body.style.width = w + 'px';
    document.body.style.height = h + 'px';
    document.documentElement.style.width = w + 'px';
    document.documentElement.style.height = h + 'px';
}

// 1. Sayfa yüklendiğinde boyutları kilitle
window.addEventListener('load', lockScreenSize);

// 2. Tablet yan çevrilirse (yatay/dikey) yeni boyuta göre tekrar kilitle
window.addEventListener('orientationchange', () => {
    setTimeout(lockScreenSize, 300);
});

// KRİTİK NOKTA: 'resize' eventini (adres çubuğu hareketlerini) DİNLEMİYORUZ!
// Böylece adres çubuğu kaybolsa/çıksa bile sayfa esnemez, çizgiler zıplamaz.

// =======================================================
// CANLANDIR (SNAPSHOT) - TABLET/PC UYUMLU YÜZEN KOPYA
// =======================================================
function olusturYuzenKopya(imgSrc, startX, startY, width, height) {
    // 1. Ana Kapsayıcı Kutu
    const container = document.createElement('div');
    container.className = 'yuzen-kopya-container'; // Global dokunma engelleri için sınıf
    container.style.position = 'absolute';
    container.style.left = startX + 'px';
    container.style.top = startY + 'px';
    container.style.width = width + 'px';
    container.style.height = height + 'px';
    container.style.border = '2px dashed #00ffcc';
    container.style.cursor = 'grab';
    container.style.zIndex = '9999';
    container.style.boxSizing = 'border-box';
    container.style.transformOrigin = 'center center';
    container.style.touchAction = 'none'; // KRİTİK: Tablette sayfa kaymasını yasaklar
    container.dataset.rotation = '0'; 

    // 2. Kopyalanan Resim
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.display = 'block';
    img.style.pointerEvents = 'none'; 
    container.appendChild(img);

    // 3. Döndürme (Yeşil) Butonu ve Sapı
    const rotateLine = document.createElement('div');
    rotateLine.style.position = 'absolute';
    rotateLine.style.top = '-20px';
    rotateLine.style.left = '50%';
    rotateLine.style.width = '2px';
    rotateLine.style.height = '20px';
    rotateLine.style.backgroundColor = '#00ff00';
    rotateLine.style.transform = 'translateX(-50%)';
    container.appendChild(rotateLine);

    const rotateBtn = document.createElement('div');
    rotateBtn.className = 'rotate-handle'; // Tablette kaymayı durduran mevcut sınıfınız
    rotateBtn.style.position = 'absolute';
    rotateBtn.style.top = '-40px';
    rotateBtn.style.left = '50%';
    rotateBtn.style.transform = 'translateX(-50%)';
    rotateBtn.style.width = '30px';
    rotateBtn.style.height = '30px';
    rotateBtn.style.backgroundColor = '#00ff00'; 
    rotateBtn.style.borderRadius = '50%';
    rotateBtn.style.cursor = 'grab';
    rotateBtn.style.border = '2px solid white';
    rotateBtn.style.boxShadow = '0px 2px 5px rgba(0,0,0,0.5)';
    rotateBtn.style.touchAction = 'none'; // KRİTİK
    container.appendChild(rotateBtn);

    // 4. Yeniden Boyutlandırma (Pembe) Butonu
    const resizeBtn = document.createElement('div');
    resizeBtn.className = 'resize-handle'; // Tablette kaymayı durduran mevcut sınıfınız
    resizeBtn.style.position = 'absolute';
    resizeBtn.style.bottom = '-15px';
    resizeBtn.style.right = '-15px';
    resizeBtn.style.width = '30px';
    resizeBtn.style.height = '30px';
    resizeBtn.style.backgroundColor = '#ff00ff'; 
    resizeBtn.style.borderRadius = '50%';
    resizeBtn.style.cursor = 'nwse-resize';
    resizeBtn.style.border = '2px solid white';
    resizeBtn.style.boxShadow = '0px 2px 5px rgba(0,0,0,0.5)';
    resizeBtn.style.touchAction = 'none'; // KRİTİK
    container.appendChild(resizeBtn);

    document.body.appendChild(container);

    // --- TABLET UYUMLU ETKİLEŞİM MANTIĞI ---
    let mode = 'none'; 
    let startEvtX, startEvtY, initialLeft, initialTop, initialWidth, initialHeight, initialRotation, centerX, centerY;
    let activePointerId = null; // Parmağı takip etmek için kilit ID'si

    // Döndürmeye Başla
    rotateBtn.addEventListener('pointerdown', (e) => {
        e.stopPropagation(); e.preventDefault();
        mode = 'rotate';
        activePointerId = e.pointerId;
        rotateBtn.setPointerCapture(activePointerId); // KRİTİK: Parmağı yeşil butona kilitle!

        const rect = container.getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;
        initialRotation = parseFloat(container.dataset.rotation) || 0;
        container.dataset.startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;
    });

    // Boyutlandırmaya Başla
    resizeBtn.addEventListener('pointerdown', (e) => {
        e.stopPropagation(); e.preventDefault();
        mode = 'resize';
        activePointerId = e.pointerId;
        resizeBtn.setPointerCapture(activePointerId); // KRİTİK: Parmağı pembe butona kilitle!

        startEvtX = e.clientX; startEvtY = e.clientY;
        initialWidth = container.offsetWidth; initialHeight = container.offsetHeight;
    });

    // Sürüklemeye Başla
    container.addEventListener('pointerdown', (e) => {
        if (e.target === rotateBtn || e.target === resizeBtn) return;
        e.stopPropagation(); e.preventDefault();
        mode = 'drag';
        activePointerId = e.pointerId;
        container.setPointerCapture(activePointerId); // KRİTİK: Parmağı resme kilitle!

        container.style.cursor = 'grabbing';
        startEvtX = e.clientX; startEvtY = e.clientY;
        initialLeft = container.offsetLeft; initialTop = container.offsetTop;
    });

    // Hareket Etme (Move)
    const onMove = (e) => {
        if (mode === 'none') return;
        if (e.pointerId !== activePointerId) return; // İkinci parmakla yapılan müdahaleleri engeller
        e.preventDefault();

        if (mode === 'drag') {
            container.style.left = (initialLeft + (e.clientX - startEvtX)) + 'px';
            container.style.top = (initialTop + (e.clientY - startEvtY)) + 'px';
        } else if (mode === 'resize') {
            const newWidth = Math.max(30, initialWidth + (e.clientX - startEvtX));
            container.style.width = newWidth + 'px';
            container.style.height = initialHeight * (newWidth / initialWidth) + 'px'; 
        } else if (mode === 'rotate') {
            const currentAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;
            const finalRotation = initialRotation + (currentAngle - parseFloat(container.dataset.startAngle));
            container.style.transform = `rotate(${finalRotation}deg)`;
            container.dataset.rotation = finalRotation;
        }
    };

    // Parmağı Kaldırma (Bırakma)
    const onUp = (e) => {
        if (mode === 'none') return;
        
        // Kilidi serbest bırak
        if (e.target.hasPointerCapture && e.target.hasPointerCapture(e.pointerId)) {
            e.target.releasePointerCapture(e.pointerId);
        }
        
        if (mode === 'drag') container.style.cursor = 'grab'; 
        mode = 'none'; 
        activePointerId = null;
    };

    window.addEventListener('pointermove', onMove, { passive: false });
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp); // Tarayıcı hatasında da bırak

   // --- BOŞLUĞA TIKLAYINCA ANA KANVASA MÜHÜRLE (TABLET ÇOKLU KOPYA ÖNLEYİCİ) ---
    setTimeout(() => {
        let isStamped = false; // Çoklu kopyayı engelleyen kilit

        const disariTiklama = (e) => {
            if (isStamped || container.contains(e.target)) return;

            // Eğer döndürme veya boyutlandırma butonlarına basılıyorsa mühürleme yapma
            if (e.target.closest('.rotate-handle') || e.target.closest('.resize-handle')) return;

            isStamped = true;
            window.removeEventListener('pointerdown', disariTiklama, true);

            // Sizin orijinal canvas referansınıza (canvas) göre tam uyumlu koordinat yakalama
            const containerRect = container.getBoundingClientRect();
            const canvasRect = canvas.getBoundingClientRect(); 

            let xKoordinati = parseFloat(container.style.left);
            let yKoordinati = parseFloat(container.style.top);
            let genislik = parseFloat(container.style.width);
            let yukseklik = parseFloat(container.style.height);

            // Dokunmatik ekrandan el çekildiğinde koordinat kaybolursa fiziksel pikselleri kurtar
            if (isNaN(xKoordinati) || isNaN(yKoordinati)) {
                xKoordinati = containerRect.left - canvasRect.left;
                yKoordinati = containerRect.top - canvasRect.top;
                genislik = containerRect.width;
                yukseklik = containerRect.height;
            }

            // Hatalı/boş tıklamaları engelle
            if (genislik < 5 || yukseklik < 5) {
                if (container && container.parentNode) container.parentNode.removeChild(container);
                return;
            }

            // PDF ve Sayfa Hafızasıyla tam uyumlu yeni kopya objesi
            const newCopy = {
                type: 'image',
                imgData: imgSrc, 
                x: xKoordinati - canvasRect.left, // Kanvasın sol boşluğunu net olarak düşüyoruz
                y: yKoordinati - canvasRect.top,  // Kanvasın üst boşluğunu net olarak düşüyoruz
                width: genislik,
                height: yukseklik,
                rotation: parseFloat(container.dataset.rotation) || 0,
                isBackground: false,
                isBoxCopy: true, 
                pageOwner: typeof currentPDFPage !== 'undefined' ? currentPDFPage : 1, 
                imgObj: null
            };

            // Kanvas çizim motoru tetikleyicisi
            const imgObj = new Image();
            imgObj.src = imgSrc;
            imgObj.onload = () => {
                newCopy.imgObj = imgObj;
                
                // Ana çizim dizisine ekle
                if (typeof drawnStrokes !== 'undefined') {
                    drawnStrokes.push(newCopy);
                }
                
                // PDF sayfa hafıza dizisine ekle
                if (!window.boxCopies) window.boxCopies = [];
                window.boxCopies.push(newCopy);

                // Kanvas ekranını anında tazeleyip resmi görünür kıl
                if (window.redrawAllStrokes) window.redrawAllStrokes();
                
                console.log("Kutu kopyası başarıyla kanvas hafızasına mühürlendi!");
            };

            // Geçici çizgili kutuyu ve diğer izleyicileri temizle
            if (container && container.parentNode) {
                container.parentNode.removeChild(container);
            }
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onUp);
            window.removeEventListener('pointercancel', onUp);
        };

        window.addEventListener('pointerdown', disariTiklama, true); 
    }, 200);
}

// Dosyanın en altına ekle
window.addEventListener('load', () => {
    setTimeout(setupCanvasResolution, 500);
});


// ===================================================================
// --- AKILLI ŞEKİL TANIMA V15 (KUSURSUZ YILDIZ VE ÜÇGEN AYRIMI) ---
// ===================================================================
function akilliSekilTani(stroke) {
    if (!stroke || stroke.type !== 'pen' || stroke.path.length < 15) return null;

    const pts = stroke.path;
    const start = pts[0];
    const end = pts[pts.length - 1];
    const directDistance = Math.hypot(end.x - start.x, end.y - start.y);
    
    let totalDistance = 0;
    for (let i = 1; i < pts.length; i++) totalDistance += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    pts.forEach(p => {
        if (p.x < minX) minX = p.x; if (p.y < minY) minY = p.y;
        if (p.x > maxX) maxX = p.x; if (p.y > maxY) maxY = p.y;
    });
    
    const w = maxX - minX; 
    const h = maxY - minY;
    const maxBoyut = Math.max(w, h);
    const cx = minX + w / 2;
    const cy = minY + h / 2;

    if (maxBoyut < 30) return null; 
    
    const col = stroke.color;
    const wid = stroke.baseWidth || 3;

    // 1. DÜZ ÇİZGİ
    if (directDistance > 50 && (totalDistance / directDistance) < 1.15) {
        return { type: 'straightLine', p1: start, p2: end, color: col, width: wid };
    }

    // 2. KAPALI ŞEKİLLER (Kapanma Toleransı)
    const tamKapaliMi = directDistance < (maxBoyut * 0.3) && directDistance < 50;
    if (!tamKapaliMi) return null;

    // AŞIRI KARMAŞIK KARALAMA KORUMASI 
    if (totalDistance > (w + h) * 4) return null;

    // --- BÖLGESEL FİZİKSEL KANITLAR ---
    let topMinX = Infinity, topMaxX = -Infinity;
    let bottomMinX = Infinity, bottomMaxX = -Infinity;
    let leftMinY = Infinity, leftMaxY = -Infinity;
    let rightMinY = Infinity, rightMaxY = -Infinity;
    let distTL = Infinity, distTR = Infinity, distBL = Infinity, distBR = Infinity;
    let totalR = 0;

    pts.forEach(p => {
        if (p.y < minY + h * 0.35) { if (p.x < topMinX) topMinX = p.x; if (p.x > topMaxX) topMaxX = p.x; }
        if (p.y > maxY - h * 0.35) { if (p.x < bottomMinX) bottomMinX = p.x; if (p.x > bottomMaxX) bottomMaxX = p.x; }
        if (p.x < minX + w * 0.35) { if (p.y < leftMinY) leftMinY = p.y; if (p.y > leftMaxY) leftMaxY = p.y; }
        if (p.x > maxX - w * 0.35) { if (p.y < rightMinY) rightMinY = p.y; if (p.y > rightMaxY) rightMaxY = p.y; }
        totalR += Math.hypot(p.x - cx, p.y - cy);

        const dTL = Math.hypot(p.x - minX, p.y - minY); if (dTL < distTL) distTL = dTL;
        const dTR = Math.hypot(p.x - maxX, p.y - minY); if (dTR < distTR) distTR = dTR;
        const dBL = Math.hypot(p.x - minX, p.y - maxY); if (dBL < distBL) distBL = dBL;
        const dBR = Math.hypot(p.x - maxX, p.y - maxY); if (dBR < distBR) distBR = dBR;
    });

    let topW = Math.max(1, topMaxX - topMinX);
    let bottomW = Math.max(1, bottomMaxX - bottomMinX);
    let leftH = Math.max(1, leftMaxY - leftMinY);
    let rightH = Math.max(1, rightMaxY - rightMinY);
    let avgCornerDist = (distTL + distTR + distBL + distBR) / 4;

    let avgR = totalR / pts.length;
    let sapma = 0;
    pts.forEach(p => { sapma += Math.abs(Math.hypot(p.x - cx, p.y - cy) - avgR); });
    let sapmaOrani = sapma / (pts.length * avgR); 

    // ==========================================
    // 1. YILDIZ KONTROLÜ (Nokta Sayma İptal, Derinlik Ölçümü Geldi)
    // ==========================================
    let isStar = false;
    if (Math.abs(w - h) < maxBoyut * 0.6) {
        let altSolMaxY = -Infinity;
        let altSagMaxY = -Infinity;
        let altOrtaMaxY = -Infinity;

        pts.forEach(p => {
            // Şeklin sağ, sol ve orta alt kısımlarının "En derin" (MaxY) noktalarını buluyoruz
            if (p.x < cx - w * 0.15) { if (p.y > altSolMaxY) altSolMaxY = p.y; }
            else if (p.x > cx + w * 0.15) { if (p.y > altSagMaxY) altSagMaxY = p.y; }
            else { if (p.y > altOrtaMaxY) altOrtaMaxY = p.y; }
        });

        // Üçgende alt çizgi düzdür, altOrtaMaxY diğerlerine eşittir.
        // Yıldızda ise ortada boşluk olduğu için altOrtaMaxY belirgin şekilde DAHA YUKARIDADIR.
        if (topW < w * 0.5 && 
            altSolMaxY > cy + h * 0.10 && 
            altSagMaxY > cy + h * 0.10 && 
            altOrtaMaxY < Math.min(altSolMaxY, altSagMaxY) - h * 0.10) {
            isStar = true;
        }
    }

    // ==========================================
    // 2. KALP KONTROLÜ 
    // ==========================================
    let isHeart = false;
    if (!isStar && Math.abs(w - h) < maxBoyut * 0.5) {
        let ustKisim = pts.filter(p => p.y < cy);
        let solTepe = ustKisim.filter(p => p.x < cx - w * 0.15);
        let sagTepe = ustKisim.filter(p => p.x > cx + w * 0.15);
        let ortaCukur = ustKisim.filter(p => Math.abs(p.x - cx) <= w * 0.15);

        if (solTepe.length > 0 && sagTepe.length > 0 && ortaCukur.length > 0) {
            let solMaxY = Math.min(...solTepe.map(p => p.y));
            let sagMaxY = Math.min(...sagTepe.map(p => p.y));
            let ortaMinY = Math.max(...ortaCukur.map(p => p.y));
            
            if (ortaMinY > solMaxY + h * 0.08 && ortaMinY > sagMaxY + h * 0.08 && bottomW < w * 0.45) {
                isHeart = true;
            }
        }
    }

    // ==========================================
    // 3. ÇEMBER KONTROLÜ
    // ==========================================
    let isCircle = (!isStar && !isHeart && sapmaOrani < 0.20 && Math.abs(w - h) < maxBoyut * 0.5 && avgCornerDist > maxBoyut * 0.14);

    // --- SONUÇ DÖNDÜRME ---
    const getChar = () => {
        let c = window.nextPointChar || 'A';
        let nextCode = c.charCodeAt(0) + 1;
        if (nextCode > 90) nextCode = 65; 
        window.nextPointChar = String.fromCharCode(nextCode);
        return c;
    };
    
    const createTriangle = (pA, pB, pC) => {
        const l1 = getChar(), l2 = getChar(), l3 = getChar();
        return [
            { type: 'segment', p1: pA, p2: pB, color: col, width: wid, label1: l1, label2: l2 },
            { type: 'segment', p1: pB, p2: pC, color: col, width: wid, label1: l2, label2: l3 },
            { type: 'segment', p1: pC, p2: pA, color: col, width: wid, label1: l3, label2: l1 }
        ];
    };

    if (isStar) {
        const starPath = [];
        // Bu döngü, senin istediğin "Dış Hatları Olan Kesişmeyen Yıldızı" çizen 10 noktalı sihirli kısımdır!
        for (let i = 0; i <= 10; i++) {
            let r = i % 2 === 0 ? maxBoyut/2 : maxBoyut/4.5;
            let ang = (Math.PI * 2 * i / 10) - Math.PI / 2;
            starPath.push({ x: cx + Math.cos(ang) * r, y: cy + Math.sin(ang) * r });
        }
        return { type: 'pen', path: starPath, color: col, baseWidth: wid, width: wid };
    }

    if (isHeart) {
        const heartPath = [];
        for (let t = 0; t <= Math.PI * 2; t += 0.1) {
            heartPath.push({
                x: cx + (w/2) * (16 * Math.pow(Math.sin(t), 3)) / 16,
                y: cy - (h/2) * (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) / 16 - (h*0.05)
            });
        }
        heartPath.push(heartPath[0]); 
        return { type: 'pen', path: heartPath, color: col, baseWidth: wid, width: wid };
    }

    if (isCircle) {
        return { type: 'arc', cx: cx, cy: cy, radius: (w+h)/4, startAngle: 0, endAngle: 360, color: col, width: wid, fillColor: 'transparent' };
    }

    // 4. ÜÇGEN
    if (topW < bottomW * 0.45 || bottomW < topW * 0.45) {
        if (topW < bottomW) return createTriangle({ x: (topMinX + topMaxX) / 2, y: minY }, { x: minX, y: maxY }, { x: maxX, y: maxY });
        else return createTriangle({ x: minX, y: minY }, { x: maxX, y: minY }, { x: (bottomMinX + bottomMaxX) / 2, y: maxY });
    }
    if (leftH < rightH * 0.45 || rightH < leftH * 0.45) {
        if (leftH < rightH) return createTriangle({ x: minX, y: (leftMinY + leftMaxY) / 2 }, { x: maxX, y: minY }, { x: maxX, y: maxY });
        else return createTriangle({ x: maxX, y: (rightMinY + rightMaxY) / 2 }, { x: minX, y: minY }, { x: minX, y: maxY });
    }
    
    // 5. YAMUK
    if ((topW < bottomW * 0.85 && topW >= bottomW * 0.45) || (bottomW < topW * 0.85 && bottomW >= topW * 0.45)) {
        const l1 = getChar(), l2 = getChar(), l3 = getChar(), l4 = getChar();
        return [
            { type: 'segment', p1: { x: topMinX, y: minY }, p2: { x: topMaxX, y: minY }, color: col, width: wid, label1: l1, label2: l2 },
            { type: 'segment', p1: { x: topMaxX, y: minY }, p2: { x: maxX, y: maxY }, color: col, width: wid, label1: l2, label2: l3 },
            { type: 'segment', p1: { x: maxX, y: maxY }, p2: { x: minX, y: maxY }, color: col, width: wid, label1: l3, label2: l4 },
            { type: 'segment', p1: { x: minX, y: maxY }, p2: { x: topMinX, y: minY }, color: col, width: wid, label1: l4, label2: l1 }
        ];
    }

    // 6. DİKDÖRTGEN / KARE 
    const l1 = getChar(), l2 = getChar(), l3 = getChar(), l4 = getChar();
    return [
        { type: 'segment', p1: { x: minX, y: minY }, p2: { x: maxX, y: minY }, color: col, width: wid, label1: l1, label2: l2 },
        { type: 'segment', p1: { x: maxX, y: minY }, p2: { x: maxX, y: maxY }, color: col, width: wid, label1: l2, label2: l3 },
        { type: 'segment', p1: { x: maxX, y: maxY }, p2: { x: minX, y: maxY }, color: col, width: wid, label1: l3, label2: l4 },
        { type: 'segment', p1: { x: minX, y: maxY }, p2: { x: minX, y: minY }, color: col, width: wid, label1: l4, label2: l1 }
    ];

} // <-- BU SÜSLÜ PARANTEZ ÇOK ÖNEMLİ, ÜSTTEKİ FONKSİYONU KAPATIR!


// --- BAŞKA BİR ARACA TIKLANDIĞINDA SİLGİYİ OTOMATİK KAPATMA YAMASI ---
document.querySelectorAll('.tool-button, .tool-button-sub').forEach(btn => {
    btn.addEventListener('click', function() {
        // Eğer tıklanan buton "Silgi" değilse çalışsın
        if (this.id !== 'btn-silgi') {
            const silgiBtn = document.getElementById('btn-silgi');
            
            // Silgi butonu aktifse, aktiflik sınıfını kaldır (ışığını söndür)
            if (silgiBtn && silgiBtn.classList.contains('active')) {
                silgiBtn.classList.remove('active');
                
                // Arka planda çizim aracını 'silgi' modundan çıkar (uygulamanızdaki değişken ismine göre 'none' veya 'pen' yapıyoruz)
                if (typeof currentTool !== 'undefined' && currentTool === 'eraser') {
                    currentTool = 'none'; 
                }
            }
        }
    });
});

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const t = translations[lang];

    const update = (id, text) => {
        const el = document.getElementById(id);
        if (el) {
            el.innerText = text;
            console.log(`${id} güncellendi: ${text}`); // Hata ayıklama için konsola yazar
        }
    };

    // SOL PANEL
    update('btn-silgi', t.silgi);
    update('btn-kalem', t.kalem);
    update('btn-cizgi', t.cizgi);
    update('btn-nokta', t.nokta);
    update('btn-d_cizgi', t.d_cizgi);
    update('btn-dogru', t.dogru);
    update('btn-dogru_parcasi', t.dogru_parcasi);
    update('btn-isin', t.isin);
    update('btn-cetvel', t.cetvel);
    update('btn-gonye', t.gonye);
    update('btn-aciolcer', t.aciolcer);
    update('btn-pergel', t.pergel);
    update('btn-cokgenler', t.cokgenler);
    update('btn-cember', t.cember);
    update('btn-duzgun_ucgen', t.d_ucgen);
    update('btn-duzgun_dortgen', t.d_dortgen);
    update('btn-dikdortgen', t.dikdortgen);
    update('btn-duzgun_besgen', t.d_besgen);
    update('btn-duzgun_altigen', t.d_altigen);
    update('btn-duzgun_yedigen', t.d_yedigen);
    update('btn-duzgun_sekizgen', t.d_sekizgen);
    update('btn-oyunlar', t.oyunlar);

    // SAĞ PANEL
    update('btn-undo', t.geri_al);
    update('btn-clear-all', t.hepsini_sil);
    update('btn-move', t.tasi);
    update('btn-upload', t.yukle);
    update('btn-snapshot-main', t.canlandir);
    update('btn-snapshot-box', t.kutu);
    update('btn-snapshot-lasso', t.serbest);
    update('btn-help', t.yardim);

    // POPUP VE ALT BİLGİ (Kritik Satır)
    update('install-title', t.ins_t);
    update('install-desc', t.ins_d);
    update('btn-popup-install', t.ins_b);
    update('btn-popup-close', t.ins_c);
    update('kvkk-bilgi', t.kvkk); // <--- BU SATIRIN EKLENDİĞİNDEN EMİN OL

    // ARAÇ RENGİ GÜNCELLEME
    const colorBtn = document.getElementById('btn-tool-color');
    if (colorBtn) {
        const parts = colorBtn.innerText.split(': ');
        const currentColor = parts[1] || "Siyah";
        colorBtn.innerText = `${t.arac_rengi}: ${currentColor}`;
    }

    // ARAPÇA YÖN AYARI
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // ARAYÜZÜ KAPAT
    const overlay = document.getElementById('language-overlay');
    if (overlay) overlay.style.display = 'none';

// --- RUSÇA VE DİĞER UZUN DİLLER İÇİN MENÜ SIFIRLAMA ---
    // Dil değişimi sırasında butonların taşmasından kaynaklanan otomatik açılmaları kapatır
    const allOptions = document.querySelectorAll('.tool-options, .tool-options-right');
    allOptions.forEach(opt => {
        opt.classList.add('hidden'); // Tüm alt menüleri (çizgi, çokgen vb.) gizle
    });

    // Eğer aktif bir araç seçili kalmışsa onu temizle (isteğe bağlı)
    // currentTool = null; 
    
    console.log("Menüler uzun kelime taşmasına karşı sıfırlandı.");

    // OYUN LİSTESİNİ YENİLE (Oyunlar menüsü açıksa isimler değişsin)
    if (typeof listeleOyunlar === 'function') listeleOyunlar();

    // KANVAS TAZELEME
    setTimeout(() => {
        if (window.redrawAllStrokes) window.redrawAllStrokes();
    }, 100);
}

// --- BU FONKSİYON SETLANGUAGE'İN DIŞINA/ALTINA GELİYOR ---
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (window.redrawAllStrokes) window.redrawAllStrokes();
}

// ================================================================
// DİL SEÇİMİ VE AĞA FIRLATMA MOTORU
// ================================================================
function dilButonlariniHazirla() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const langMatch = btn.getAttribute('onclick')?.match(/'([^']+)'/);
        const targetLang = langMatch ? langMatch[1] : btn.dataset.lang;

        if (targetLang) {
            btn.onclick = null;
            btn.removeAttribute('onclick');

            let isTriggered = false;
            const handleSelect = (e) => {
                if (isTriggered) return; 
                isTriggered = true; 
                
                if (e.cancelable) e.preventDefault();
                e.stopPropagation();
                
                // 1. Tabletin (Tıklanan cihazın) ekranını aç
                setLanguage(targetLang);
                
                // 2. Karşı cihaza (PC/Tahtaya) "Aynı dili seç ve ekranı aç" emri gönder!
                if (typeof isConnected !== 'undefined' && isConnected && typeof sendNetworkData !== 'undefined') {
                    sendNetworkData({ type: 'dil_secimi', lang: targetLang });
                }
                
                setTimeout(() => { isTriggered = false; }, 500);
            };

            btn.addEventListener('pointerdown', handleSelect);
            btn.addEventListener('touchstart', handleSelect, { passive: false });
            btn.addEventListener('click', handleSelect);
        }
    });
}


// Akıllı tahta tarayıcılarının gecikme/hız problemlerine karşı garanti tetikleyici
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', dilButonlariniHazirla);
} else {
    dilButonlariniHazirla();
}// Akıllı tahtada parmak/kalem kaydırırken tarayıcının araya girmesini kesin olarak engeller
const canvasEl = document.getElementById('drawing-canvas');

canvasEl.addEventListener('touchstart', function(e) {
    if (e.cancelable) e.preventDefault();
}, { passive: false });

canvasEl.addEventListener('touchmove', function(e) {
    if (e.cancelable) e.preventDefault();
}, { passive: false });


// Akıllı tahtalarda kalemin sayfayı kaydırmasını (scroll) JS seviyesinde durdurur
const canvasElement = document.getElementById('drawing-canvas');

canvasElement.addEventListener('touchstart', (e) => {
    if (e.cancelable) e.preventDefault();
}, { passive: false });

canvasElement.addEventListener('touchmove', (e) => {
    if (e.cancelable) e.preventDefault();
}, { passive: false });

// AKILLI TAHTALARDA KALEMİN KAYDIRMA (SCROLL) YAPMASINI KESİN ENGELLER
const kanvasSabitleyici = document.getElementById('drawing-canvas');
if (kanvasSabitleyici) {
    kanvasSabitleyici.addEventListener('touchmove', function(e) {
        if (e.cancelable) e.preventDefault();
    }, { passive: false });
}

// =========================================================================
// KUSURSUZ AKILLI NESNE SİLGİSİ v2 (ZOMBİ KORUMALI VE EKSİKSİZ)
// =========================================================================
const canvasElm = document.getElementById('drawing-canvas');

function akilliSilgi(e, isDown) {
    // Sadece silgi aracı seçiliyse çalışsın
    if (typeof currentTool === 'undefined' || currentTool !== 'eraser') return false;
    
    // Tıklanmıyorsa veya ekrana dokunulmuyorsa işlem yapma
    const isClicking = isDown || (typeof isDrawing !== 'undefined' && isDrawing) || e.buttons > 0 || (e.touches && e.touches.length > 0);
    if (!isClicking) return false;

    const rect = canvasElm.getBoundingClientRect();
    
    let ex, ey;
    if (e.touches && e.touches.length > 0) {
        ex = e.touches[0].clientX - rect.left;
        ey = e.touches[0].clientY - rect.top;
    } else {
        ex = e.clientX - rect.left;
        ey = e.clientY - rect.top;
    }

    const eR = 25; 
    let silindiMi = false;

    const distToSeg = (p, v, w) => {
        let l2 = (v.x - w.x)**2 + (v.y - w.y)**2;
        if (l2 === 0) return Math.hypot(p.x - v.x, p.y - v.y);
        let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
        t = Math.max(0, Math.min(1, t));
        return Math.hypot(p.x - (v.x + t * (w.x - v.x)), p.y - (v.y + t * (w.y - v.y)));
    };

    if (typeof drawnStrokes !== 'undefined') {
        for (let i = drawnStrokes.length - 1; i >= 0; i--) {
            const s = drawnStrokes[i];
            if (s.isBackground) continue; 

            let vuruldu = false;

            // 1. Serbest Kalem
            if (s.type === 'pen' && s.path) {
                for (let j = 1; j < s.path.length; j++) {
                    if (distToSeg({x: ex, y: ey}, s.path[j-1], s.path[j]) < eR + (s.width || 3)) { vuruldu = true; break; }
                }
                if (!vuruldu && s.path.length === 1) {
                    if (Math.hypot(s.path[0].x - ex, s.path[0].y - ey) < eR + 5) vuruldu = true;
                }
            } 
            // 2. Kutu ve Serbest Kesimler
            else if (s.type === 'image') {
                 if (ex >= (s.x||0) && ex <= (s.x||0) + (s.width||0) && ey >= (s.y||0) && ey <= (s.y||0) + (s.height||0)) vuruldu = true;
            } 
            // 3. Çokgenler
            else if (s.type === 'polygon' && s.center) {
                 if (Math.hypot(s.center.x - ex, s.center.y - ey) <= (s.radius||0) + eR) vuruldu = true;
            } 
            // 4. Çember
            else if (s.type === 'arc') {
                 if (Math.hypot((s.cx||0) - ex, (s.cy||0) - ey) <= (s.radius||0) + eR) vuruldu = true;
            } 
            // 5. Cetvel Çizgileri
            else if (s.p1 && s.p2) {
                 if (distToSeg({x: ex, y: ey}, s.p1, s.p2) < eR + 10) vuruldu = true;
            }
            // 6. DİKDÖRTGEN DESTEĞİ
            else if (s.type === 'rectangle' || s.type === 'rect') {
                 let rx = s.x !== undefined ? s.x : Math.min(s.startPoint?.x||0, s.endPoint?.x||0);
                 let ry = s.y !== undefined ? s.y : Math.min(s.startPoint?.y||0, s.endPoint?.y||0);
                 let rw = s.width !== undefined ? s.width : Math.abs((s.startPoint?.x||0) - (s.endPoint?.x||0));
                 let rh = s.height !== undefined ? s.height : Math.abs((s.startPoint?.y||0) - (s.endPoint?.y||0));
                 
                 if (ex >= rx - eR && ex <= rx + rw + eR && ey >= ry - eR && ey <= ry + rh + eR) {
                     vuruldu = true;
                 }
            }

            // VURULDUYSA SİL VE AĞA GÖNDER
            if (vuruldu) {
                if (!s.id) s.id = Date.now() + Math.random(); 
                window.drawnStrokes.splice(i, 1);
                silindiMi = true;
                
                if (typeof isConnected !== 'undefined' && isConnected) {
                    window.sendNetworkData({ type: 'sil_objeyi', strokeId: s.id, index: i });
                }
            }
        } 
    } 

    if (silindiMi && window.redrawAllStrokes) {
        window.redrawAllStrokes(); 
    }
} // AKILLI SİLGİ FONKSİYONU BURADA TEMİZCE KAPANDI

// --- SİLGİ OLAY DİNLEYİCİLERİ (Artık Güvende) ---
if (canvasElm) {
    canvasElm.addEventListener('pointerdown', (e) => akilliSilgi(e, true));
    canvasElm.addEventListener('pointermove', (e) => akilliSilgi(e, false));
    canvasElm.addEventListener('touchmove', (e) => akilliSilgi(e, false), {passive: true});
    
    // Fare veya parmak kanvas alanından çıkarsa silgi imlecini zorla kapat
    canvasElm.addEventListener('pointerleave', () => {
        if (typeof eraserPreview !== 'undefined' && eraserPreview) {
            eraserPreview.style.display = 'none';
        }
    });
}
// =========================================================================

// Fare veya parmak kanvas alanından çıkarsa silgi imlecini zorla kapat
canvas.addEventListener('pointerleave', () => {
    if (typeof eraserPreview !== 'undefined' && eraserPreview) {
        eraserPreview.style.display = 'none';
    }
});

// =========================================================================
// --- OTOMATİK AKILLI YAMA VE KOPYA TEMİZLEME MOTORU ---
// =========================================================================

window.temizleLassoVeKopyalar = function() {
    if (typeof drawnStrokes !== 'undefined' && drawnStrokes.length > 0) {
        let silinenOlduMu = false;
        
        // Döngüyü tersten kuruyoruz ki silerken sıra kaymasın
        for (let i = drawnStrokes.length - 1; i >= 0; i--) {
            let s = drawnStrokes[i];
            
            // DÜZELTME: isBoxCopy (Kutu veya Kement kopyası) ise SİLME!
            // Sadece maskeler (delikler) temizlensin, kopyalar ekranda silgiye kadar yaşasın.
            if (s.type === 'lasso-mask' || (s.type === 'image' && s.isBackground === false && !s.isBoxCopy)) {
                drawnStrokes.splice(i, 1);
                silinenOlduMu = true;
            }
        }
        
        // Eğer seçili olan şey silinen bir şeyse seçimi iptal et
if (typeof window.selectedItem !== 'undefined' && window.selectedItem && !window.selectedItem.isBoxCopy) {
    window.selectedItem = null;
}
        
        // Sadece bir şey silindiyse ekranı tazele
        if (silinenOlduMu && typeof window.redrawAllStrokes === 'function') {
            window.redrawAllStrokes();
        }
    }
};

// --- OTOMATİK TETİKLEYİCİ (GÖZLEMCİ) - GÜNCELLENMİŞ ---
document.addEventListener('click', function(e) {
    let element = e.target.closest('button, div, a, i'); 
    if (element) {
        let id = (element.id || '').toLowerCase();
        let sinif = (element.className || '').toLowerCase();
        let metin = (element.innerText || '').toLowerCase();
        
        // KRİTİK DÜZELTME: Eğer tıklanan buton bir "Silgi" (Eraser) ise temizliği TETİKLEME!
        let isSilgi = id.includes('silgi') || metin.includes('silgi') || id.includes('eraser') || metin.includes('eraser');
        if (isSilgi) return; 

        // Gerçek temizleme butonları (Hepsini sil, kapat, ileri-geri vb.)
        let silmeSartlari = [
            'next', 'prev', 'page', 'clear', 'close', 'kapat', 'ileri', 'geri', 'temizle'
        ];

        // "sil" kelimesini sadece "hepsini_sil" veya "temizle" gibi durumlarda kabul et
        let tamSilme = id.includes('clear-all') || id.includes('hepsini_sil') || metin.includes('hepsini sil');

        let tetikle = tamSilme || silmeSartlari.some(kelime => id.includes(kelime) || sinif.includes(kelime) || metin.includes(kelime));

        if (tetikle) {
            setTimeout(window.temizleLassoVeKopyalar, 50);
        }
    }
});


// =========================================================================
// --- CANLI SINIF (PEERJS) AĞ MOTORU ---
// =========================================================================

let myPeer = null;
let myConnection = null;
let isConnected = false;

// --- 1. AĞ AYARLARI VE KOD ÜRETİCİ ---
const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'; 
let myRoomCode = '';
for (let i = 0; i < 5; i++) {
    myRoomCode += chars.charAt(Math.floor(Math.random() * chars.length));
}
const isTablet = window.location.href.includes("tablet");

// --- 2. PEERJS BAŞLANGIÇ VE CİHAZ MODU AYARI ---
if (isTablet) {
    myPeer = new Peer();
    myPeer.on('open', (id) => { console.log("Tablet Peer Hazır. Kimliğim:", id); });
} else {
    myPeer = new Peer(myRoomCode);
    window.sessionPassword = Math.floor(1000 + Math.random() * 9000).toString();
    myPeer.on('open', (id) => {
        console.log("Tahta Peer Hazır. Oda Kodu:", id);
        const idSaha = document.getElementById('my-peer-id');
        const pinSaha = document.getElementById('my-pin-code');
        if(idSaha) idSaha.innerText = id;
        if(pinSaha) pinSaha.innerText = window.sessionPassword;
    });
}

// --- 3. BAĞLANTI İSTEK DİNLEYİCİSİ (KAPI ZİLİ) ---
myPeer.on('connection', function(conn) {
    console.log("Bir cihaz bağlanmak istiyor:", conn.peer);
    
    const requestModal = document.getElementById('conn-request-modal');
    const requestText = document.getElementById('request-text');
    const btnAccept = document.getElementById('btn-conn-accept');
    const btnReject = document.getElementById('btn-conn-reject');
    
    if (requestModal && requestText && btnAccept && btnReject) {
        requestText.innerText = `Oda kodu "${conn.peer}" olan bir cihaz bağlanmak istiyor. Onaylıyor musun?`;
        requestModal.classList.remove('hidden');
        requestModal.style.display = 'flex';

        btnAccept.onclick = function() {
            try {
                myConnection = conn;

                const baglantiHazir = () => {
                    isConnected = true;
                    window.baglantiOnaylandi = true;

                    const statusEl = document.getElementById('connection-status');
                    if (statusEl) {
                        statusEl.innerText = "BAĞLANDI 🟢";
                        statusEl.style.color = "#00ffcc";
                    }

                    setupConnectionEvents();
                    console.log("Cihaz başarıyla bağlandı:", conn.peer);
                };

                if (conn.open) {
                    baglantiHazir();
                } else {
                    conn.on('open', baglantiHazir);
                }
            } catch (err) {
                console.error("Bağlantı hatası:", err);
            } finally {
                requestModal.classList.add('hidden');
                requestModal.style.display = 'none';
            }
        };

        btnReject.onclick = function() {
            conn.close();
            requestModal.classList.add('hidden');
            requestModal.style.display = 'none';
        };
    }
});

// 4. Sistem sunucuya başarıyla bağlandığında kodumuzu HTML panele yazdır
myPeer.on('open', function(id) {
    const idSaha = document.getElementById('my-peer-id');
    const pinSaha = document.getElementById('my-pin-code');

    if (!isTablet) {
        if(idSaha) idSaha.innerText = id;
        if(pinSaha) pinSaha.innerText = window.sessionPassword;
    } else {
        const panel = document.getElementById('network-panel');
        if(panel) {
            const kodDiv = document.getElementById('my-peer-id')?.parentElement;
            if(kodDiv) kodDiv.style.display = 'none';
        }
    }
});

// 5. TABLET ROLÜ: Bağlanma butonu (GÜNCEL VERSİYON)
document.addEventListener('DOMContentLoaded', () => {
    const connectBtn = document.getElementById('connect-btn');
    if (connectBtn) {
        connectBtn.addEventListener('click', () => {
            const targetCode = document.getElementById('connect-input').value.trim();
            const passwordInput = document.getElementById('session-pass-input').value.trim();

            if (targetCode.length === 5 && passwordInput.length > 0) {
                if (!myPeer || myPeer.destroyed) {
                    alert("Ağ bağlantısı henüz kurulmadı, lütfen 2 saniye bekleyip tekrar dene.");
                    return;
                }
                
                window.sessionPassword = passwordInput; 
                document.getElementById('connection-status').innerText = "Bağlanıyor ⏳";
                
                // Bağlantıyı başlat
                myConnection = myPeer.connect(targetCode);
                
                // --- BAĞLANTIYI GARANTİLEMEK İÇİN İKİLİ KONTROL ---
                myConnection.on('open', () => {
                    console.log("Tablet: Connection Open tetiklendi!");
                    isConnected = true;
                    window.baglantiOnaylandi = true;
                    document.getElementById('connection-status').innerText = "BAĞLANDI 🟢";
                    document.getElementById('connection-status').style.color = "#00ffcc";
                    
                    // Tablet arayüzünü temizle
                    document.getElementById('connect-input').style.display = "none";
                    document.getElementById('connect-btn').style.display = "none";
                    
                    // 🚨 YENİ: Bağlantı kurulunca oda/şifre panelini otomatik küçült 🚨
                    if (typeof window.kucultPanel === 'function') {
                        window.kucultPanel();
                    }
                    
                    setupConnectionEvents();
                });
            } else {
                alert("Lütfen 5 haneli Oda Kodunu ve Tahta Şifresini eksiksiz girin.");
            }
        });
    }
});



function setupConnectionEvents() {
    if (!myConnection) return;
    if (window._lastSetupConnection === myConnection) return;
    window._lastSetupConnection = myConnection;
    window._connectionEventsBound = true;

    // --- 1. SIKI YÖNETİM: AYNI Wİ-Fİ / YEREL AĞ KONTROLÜ ---
    const pc = myConnection.peerConnection;
    window.baglantiOnaylandi = true; // Bağlantı açık, IP kontrolü arka planda
    isConnected = true;

    if (pc && !pc._iceListenerAdded) {
        pc._iceListenerAdded = true;
        pc.addEventListener('icecandidate', (event) => {
            if (!event.candidate) return;
            const cand = event.candidate.candidate;
            const ipMatch = cand.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/);
            if (ipMatch) {
                const ip = ipMatch[1];
                const yerelAgMi = (
                    ip.startsWith('192.168.') ||
                    ip.startsWith('10.') ||
                    /^172\.(1[6-9]|2[0-9]|3[01])\./.test(ip) ||
                    ip.startsWith('127.')
                );
                if (yerelAgMi) {
                    window.baglantiOnaylandi = true;
                    console.log("Yerel ağ bağlantısı onaylandı:", ip);
                }
                // NOT: Genel/STUN IP görülünce bağlantıyı KAPATMA — kalem verisi böyle kesiliyordu
            }
        });
    }

    // --- 2. VERİ ALICI VE PARÇALAMA MOTORU (BARKOD SİSTEMLİ) ---
    window.chunkBuffers = {}; // 🚨 YENİ: Her mesaja özel ayrı bir kutu açıyoruz
    
    myConnection.on('data', function(data) {
        // Parçalı veri geliyorsa barkoduna göre kendi kutusunda birleştir
        if (data && data.type === 'chunk') {
            const id = data.msgId || 'genel';
            if (!window.chunkBuffers[id]) window.chunkBuffers[id] = "";
            
            window.chunkBuffers[id] += data.data;
            
            if (data.isLast) {
                try {
                    processData(JSON.parse(window.chunkBuffers[id]));
                } catch (e) {
                    console.error("Paket birleştirme hatası (Kayıp Parça):", e);
                }
                delete window.chunkBuffers[id]; // İşlem bitince kutuyu silerek hafızayı temizle
            }
            return;
        }
        // Normal veri geliyorsa direkt işle
        processData(data);
    });


    // --- VERİ İŞLEME MERKEZİ ---
    function processData(data) {
        if (!data || !data.type) return;
        if (!window.drawnStrokes) window.drawnStrokes = [];

        // DİL SEÇİMİ HER ZAMAN GEÇSİN
        if (data.type === 'dil_secimi') { 
            if (typeof setLanguage === 'function') setLanguage(data.lang);
            
            // 1. PC'deki dil ekranını kapat
            const overlay = document.getElementById('language-overlay');
            if (overlay) overlay.style.display = 'none';
            
            // 🚨 YENİ EKLENEN KISIM: PC ekranındaki yasal uyarı şeridini (footer) tamamen gizle!
            const footer = document.getElementById('footer-container');
            if (footer) footer.style.display = 'none';
            
            return;
        }


        // GÜVENLİK DUVARI
        if (!window.baglantiOnaylandi) return;

        // --- A) TOPLU ŞEKİL ALICISI (ÇOKGENLER VE ÜÇGENLER) ---
        if (data.type === 'akilli_sekil_toplu') {
            if (data.strokes && Array.isArray(data.strokes)) {
                data.strokes.forEach(s => {
                    const isDuplicate = s.id && window.drawnStrokes.some(ds => ds.id === s.id);
                    if (!isDuplicate) window.drawnStrokes.push(s);
                });
            }
            if (window.redrawAllStrokes) window.redrawAllStrokes();
            return; 
        }

// Yeni Sayfa Resmi geldiğinde PC ekranına yansıt
        if (data.type === 'pdf_sayfa_resmi_aktar') {
            const img = new Image();
            img.onload = () => { 
                if (typeof addNewImageToCanvas === 'function') addNewImageToCanvas(img, true); 
            };
            img.src = data.imgData;
        }

        // --- B) TEKİL ÇİZİM/KALEM/RESİM ALICISI ---
        if (data.type === 'yeni_cizim') {
            const stroke = data.stroke;
            if (!stroke) return;

            // Eğer veride bir anormallik olup dizi (array) gelirse diye güvenlik önlemi
            if (Array.isArray(stroke)) {
                stroke.forEach(s => {
                    const isExist = s.id && window.drawnStrokes.some(ex => ex.id === s.id);
                    if (!isExist) window.drawnStrokes.push(s);
                });
                if (window.redrawAllStrokes) window.redrawAllStrokes();
                return;
            }

            // Normal Tekil Çizim (Kalem karalaması vs.)
            const existingIndex = stroke.id ? window.drawnStrokes.findIndex(s => s.id === stroke.id) : -1;

            if (existingIndex !== -1) {
                // REDDETME, ÜZERİNE YAZ! (Eski veriyi silip yenisini/tamamlanmış olanı koyuyoruz)
                window.drawnStrokes[existingIndex] = stroke;
                if (window.redrawAllStrokes) window.redrawAllStrokes();
            } else {
                // Hiç yoksa ilk kez ekle
                if (stroke.type === 'image' && stroke.imgData) {
                    const tempImg = new Image();
                    tempImg.src = stroke.imgData;
                    tempImg.onload = () => { 
                        stroke.imgObj = tempImg; 
                        window.drawnStrokes.push(stroke); 
                        if (window.redrawAllStrokes) window.redrawAllStrokes(); 
                    };
                } else {
                    window.drawnStrokes.push(stroke);
                    if (window.redrawAllStrokes) window.redrawAllStrokes();
                }
            }
            return;
        }

        // --- C) FİZİKSEL ARAÇLAR VE DİĞER FONKSİYONLAR ---
        if (data.type === 'arac_senkron') {
            const el = document.querySelector(data.selector);
            if (el) {
                if (data.display !== undefined) el.style.display = data.display; 
                if (data.left !== undefined) el.style.left = data.left; 
                if (data.top !== undefined) el.style.top = data.top;
                if (data.transform !== undefined) el.style.transform = data.transform; 
                if (data.width !== undefined) el.style.width = data.width;
                if (data.height !== undefined) el.style.height = data.height;
            }
        }

        if (data.type === 'sekil_guncelle') {
            if (!data.stroke) return;
            
            let index = -1;
            
            // 🚨 KİMLİK UYUŞMAZLIĞI ÇÖZÜMÜ: 
            // Gelen şekil arka plan (resim/PDF) ise, ID'ye bakmadan direkt bul!
            if (data.stroke.isBackground === true) {
                index = window.drawnStrokes.findIndex(s => s.isBackground === true);
            } else {
                if (!data.stroke.id) return;
                index = window.drawnStrokes.findIndex(s => s.id === data.stroke.id);
            }

            if (index !== -1) {
                const hedef = window.drawnStrokes[index];
                
                hedef.x = data.stroke.x;
                hedef.y = data.stroke.y;
                hedef.width = data.stroke.width;
                hedef.height = data.stroke.height;
                if (data.stroke.rotation !== undefined) hedef.rotation = data.stroke.rotation;
                
                // Çokgenler ve çemberler için
                if (data.stroke.radius !== undefined) hedef.radius = data.stroke.radius;
                if (data.stroke.cx !== undefined) hedef.cx = data.stroke.cx;
                if (data.stroke.cy !== undefined) hedef.cy = data.stroke.cy;
                if (data.stroke.center !== undefined) hedef.center = data.stroke.center;
                
                if (window.redrawAllStrokes) window.redrawAllStrokes();
            }
        }

        if (data.type === 'sil_objeyi') {
            const zombiIndex = window.drawnStrokes.findIndex(s => s.id === data.strokeId);
            if (zombiIndex !== -1) window.drawnStrokes.splice(zombiIndex, 1);
            else if (data.index !== undefined && window.drawnStrokes[data.index]) window.drawnStrokes.splice(data.index, 1);
            if (window.redrawAllStrokes) window.redrawAllStrokes();
        }

        if (data.type === 'geri_al') { window.drawnStrokes.pop(); if (window.redrawAllStrokes) window.redrawAllStrokes(); }
        else if (data.type === 'hepsini_sil') { 
            // 1. Diziyi tamamen temizle (Hafızayı KOPARMADAN, içini boşaltıyoruz)
            window.drawnStrokes.length = 0; 
            
            // 2. PC tarafındaki kayıtlı veriyi de temizle (LocalStorage)
            if (window.localStorage) {
                window.localStorage.removeItem('drawnStrokes'); 
            }
            // 3. Ekranı yenile
            if (window.redrawAllStrokes) window.redrawAllStrokes(); 
            
            console.log("PC: Silme komutu alındı ve hafıza temizlendi.");
        }
        
        if (data.type === 'pdf_yukle') { 
            try {
                const base64Data = data.pdfData.split(',')[1];
                const binaryString = window.atob(base64Data);
                const len = binaryString.length;
                const bytes = new Uint8Array(len);
                for (let i = 0; i < len; i++) { bytes[i] = binaryString.charCodeAt(i); }
                if (typeof pdfjsLib !== 'undefined') {
                    pdfjsLib.getDocument(bytes).promise.then(pdf => {
                        window.currentPDF = pdf; window.totalPDFPages = pdf.numPages; window.currentPDFPage = 1;
                        if (document.getElementById('pdf-controls')) document.getElementById('pdf-controls').classList.remove('hidden');
                        if (typeof renderPDFPage === 'function') renderPDFPage(1);
                    });
                }
            } catch (e) { console.error("PDF Hatası:", e); }
        }

        if (data.type === 'pdf_sayfa_degis') { window.currentPDFPage = data.sayfa; if (typeof renderPDFPage === 'function') renderPDFPage(window.currentPDFPage); }
        
        if (data.type === 'resim_yukle') {
            const img = new Image();
            img.onload = () => { if (typeof addNewImageToCanvas === 'function') addNewImageToCanvas(img, false); };
            img.src = data.imgData;
        }

// 🚨 YENİ EKLENEN BÖLÜM: PC'NİN PDF KAPATMA EMRİNİ ALDIĞI YER 🚨
        if (data.type === 'pdf_kapat') {
            // 🚨 SİHİRLİ ÇÖZÜM: PC tarafında da filter yerine splice kullanıyoruz 🚨
            if (window.drawnStrokes) {
                for (let i = window.drawnStrokes.length - 1; i >= 0; i--) {
                    if (window.drawnStrokes[i].isBackground === true) {
                        window.drawnStrokes.splice(i, 1);
                    }
                }
            }
            window.currentPDF = null;
            window.pdfImageStroke = null;
            
            // Kırmızı butonu PC ekranından da garanti olması için gizle
            const pcKapatBtn = document.getElementById('btn-close-pdf');
            if (pcKapatBtn) {
                pcKapatBtn.classList.add('hidden');
                pcKapatBtn.style.display = 'none';
            }
            
            if (window.redrawAllStrokes) window.redrawAllStrokes();
            console.log("PC: Tablet arka planı kapattı, ekran temizlendi.");
        }


// 🚨 NÜKLEER ÇÖZÜM: AÇILIŞ PENCERESİNİ KÖKÜNDEN SİL 🚨
        if (data.type === 'acilis_penceresini_kapat') {
            const acilisPenceresi = document.getElementById('disclaimer-modal');
            if (acilisPenceresi) {
                // Sadece gizlemekle kalma, HTML'den tamamen kazı!
                acilisPenceresi.remove(); 
            }
            
            // Eğer isminde farklılık varsa diye tüm uyarı pencerelerini gizle
            document.querySelectorAll('.modal, .overlay, [id*="modal"], [id*="disclaimer"]').forEach(el => {
                el.style.display = 'none';
            });

            // Zırh: PC arka planda yeniden açmaya çalışmasın diye CSS ile mühürle
            const mühür = document.createElement('style');
            mühür.innerHTML = '#disclaimer-modal, .disclaimer-modal { display: none !important; opacity: 0 !important; pointer-events: none !important; z-index: -9999 !important; }';
            document.head.appendChild(mühür);
            
            console.log("PC: Açılış penceresi KÖKÜNDEN silindi ve mühürlendi.");
        }

        if (data.type === 'zoom_senkron') {
            const bgStrokes = window.drawnStrokes.filter(s => s.isBackground === true);
            bgStrokes.forEach(bg => { 
                // 🚨 SİHİRLİ ÇÖZÜM: Tabletin X/Y koordinatlarını kopyalamak yerine, 
                // bilgisayar eski merkezini koruyarak sadece boyutu günceller.
                const yeniW = data.width;
                const yeniH = data.height;
                
                // Resmi bulunduğu yerde, tam ortadan büyüt/küçült
                bg.x = bg.x - (yeniW - bg.width) / 2;
                bg.y = bg.y - (yeniH - bg.height) / 2;
                
                bg.width = yeniW; 
                bg.height = yeniH; 
            });
            if (window.redrawAllStrokes) window.redrawAllStrokes();
        }


// 🚨 PC: UYGULAMAYI YÜKLE PENCERESİNİ KAPATMA SİNYALİ 🚨
        if (data.type === 'yukleme_penceresini_kapat') {
            const yuklemePenceresi = document.getElementById('install-popup');
            if (yuklemePenceresi) {
                yuklemePenceresi.remove(); // Sadece gizleme, HTML dosyasından KÖKÜNDEN SİL!
            }
            
            // Tarayıcı arkadan iş çevirip geri getirmesin diye CSS Mührü bas:
            const muhur = document.createElement('style');
            muhur.innerHTML = '#install-popup { display: none !important; opacity: 0 !important; z-index: -9999 !important; pointer-events: none !important; }';
            document.head.appendChild(muhur);
            
            console.log("PC: Yükleme penceresi yok edildi ve mühürlendi.");
        }


        if (data.type === 'arac_state_senkron') {
            let toolObj = null, el = null;
            if (data.arac === 'ruler') { toolObj = window.RulerTool; el = document.querySelector('.ruler-container'); }
            if (data.arac === 'gonye') { toolObj = window.GonyeTool; el = document.querySelector('.gonye-container'); }
            if (data.arac === 'aciolcer') { toolObj = window.AciolcerTool; el = document.querySelector('.aciolcer-container'); }
            if (data.arac === 'pergel') { toolObj = window.PergelTool; el = document.getElementById('compass-container'); }

            if (toolObj) {
                if (data.state) Object.assign(toolObj.state, data.state);
                if (data.arac === 'pergel' && toolObj.state) {
                    if (toolObj.state.isDrawing) { 
                        toolObj.previewCanvas.style.display = 'block';
                        toolObj.previewCanvas.width = window.innerWidth;
                        toolObj.previewCanvas.height = window.innerHeight;
                        toolObj.drawPreviewArc(); 
                    } else { 
                        toolObj.previewCanvas.style.display = 'none'; 
                        if(toolObj.previewCtx) toolObj.previewCtx.clearRect(0,0,toolObj.previewCanvas.width, toolObj.previewCanvas.height); 
                    }
                }
                if (el) {
                    if (data.display === 'none') { data.arac === 'pergel' ? el.classList.add('hidden') : el.style.display = 'none'; }
                    else { data.arac === 'pergel' ? el.classList.remove('hidden') : el.style.display = (data.arac === 'ruler' || data.arac === 'gonye') ? 'flex' : 'block'; }
                    if (data.width) el.style.width = data.width;
                    if (data.height) el.style.height = data.height;
                }
                if (typeof toolObj.updateTransform === 'function') toolObj.updateTransform();
                if (typeof toolObj.updateMarkings === 'function') toolObj.updateMarkings();
                if (typeof toolObj.createLabels === 'function') toolObj.createLabels();
            } 
        } 

        if (data.type === 'aktif_onizleme') {
            const arac = data.arac;
            const p = data.payload;

            if (arac === 'ruler' && window.RulerTool && window.RulerTool.drawCtx) {
                const r = window.RulerTool;
                r.drawHandleElement.style.transition = 'none'; r.drawHandleElement.style.left = `${p.handleX}px`;
                r.drawHandleLabel.innerText = `${(p.handleX / r.PIXELS_PER_CM).toFixed(1).replace('.', ',')} cm`;
                r.drawHandleLabel.style.display = 'block';
                r.drawCtx.clearRect(0, 0, r.drawCanvas.width, r.drawCanvas.height);
                r.drawCtx.beginPath(); r.drawCtx.moveTo(0, 4); r.drawCtx.lineTo(p.handleX, 4);
                r.drawCtx.strokeStyle = '#FFFFFF'; r.drawCtx.lineWidth = 3; r.drawCtx.stroke();
            }
            else if (arac === 'gonye' && window.GonyeTool && window.GonyeTool.drawCtx) {
                const g = window.GonyeTool;
                g.drawHandleElement.style.transition = 'none'; g.drawHandleElement.style.top = `${p.handleY}px`;
                g.drawHandleLabel.innerText = `${(Math.abs(g.state.height - (p.handleY + 10)) / g.PIXELS_PER_CM).toFixed(1).replace('.', ',')} cm`;
                g.drawHandleLabel.style.display = 'block';
                g.drawCtx.clearRect(0, 0, g.drawCanvas.width, g.drawCanvas.height);
                g.drawCtx.beginPath(); g.drawCtx.moveTo(4, g.state.height); g.drawCtx.lineTo(4, p.handleY + 10);
                g.drawCtx.strokeStyle = '#FFFFFF'; g.drawCtx.lineWidth = 3; g.drawCtx.stroke();
            }
            else if (arac === 'aciolcer' && window.AciolcerTool && window.AciolcerTool.previewCtx) {
                const a = window.AciolcerTool;
                a.previewCanvas.style.display = 'block'; a.previewCanvas.width = window.innerWidth; a.previewCanvas.height = window.innerHeight;
                a.previewCtx.clearRect(0, 0, a.previewCanvas.width, a.previewCanvas.height);
                a.previewCtx.beginPath(); a.previewCtx.moveTo(p.cx, p.cy); a.previewCtx.lineTo(p.px, p.py);
                a.previewCtx.strokeStyle = '#FFFFFF'; a.previewCtx.lineWidth = 3; a.previewCtx.setLineDash([5, 5]); a.previewCtx.stroke(); a.previewCtx.setLineDash([]);
                a.drawHandleLabel.style.display = 'block'; a.drawHandleLabel.innerText = `${p.angle.toFixed(0)}°`;
                a.redLine.style.transition = 'none'; a.redLine.style.transform = `rotate(${-p.angle}deg)`;
                a.drawHandle.style.transform = `translateX(-50%) translate(${p.ldx}px, ${p.ldy + 5}px)`;
                a.drawHandleLabel.style.transform = `translateX(-50%) translate(${p.ldx}px, ${p.ldy - 20}px)`;
            }
            else if (arac === 'lazer') {
                let lazer = document.getElementById('sanal-lazer');
                if (!lazer) {
                    lazer = document.createElement('div'); lazer.id = 'sanal-lazer';
                    lazer.style.width = '14px'; lazer.style.height = '14px'; lazer.style.background = 'rgba(0, 255, 200, 0.9)'; lazer.style.boxShadow = '0 0 12px rgba(0,255,200,1)';
                    lazer.style.borderRadius = '50%'; lazer.style.position = 'fixed'; lazer.style.pointerEvents = 'none'; lazer.style.zIndex = '9999'; lazer.style.transform = 'translate(-50%, -50%)';
                    document.body.appendChild(lazer);
                }
                lazer.style.display = 'block'; lazer.style.left = `${p.x}px`; lazer.style.top = `${p.y}px`;
                clearTimeout(window.lazerTimer); window.lazerTimer = setTimeout(() => { lazer.style.display = 'none'; }, 150);
            }
            else if (arac === 'cizim_onizleme') {
                // SİHİRLİ DÜZELTME: filter yerine splice kullanarak hafıza kopmasını kökünden çözüyoruz!
                for (let i = window.drawnStrokes.length - 1; i >= 0; i--) {
                    if (window.drawnStrokes[i].type === 'preview') window.drawnStrokes.splice(i, 1);
                }
                
                const previewObj = { type: 'preview', isTemporaryPreview: true, payload: p, id: 'temp-preview-id' };
                window.drawnStrokes.push(previewObj);
                if (window.redrawAllStrokes) window.redrawAllStrokes();
            }
        } // <--- 🚨 EKSİK OLAN SÜSLÜ PARANTEZ BURADA! (aktif_onizleme bloğunu kapatır) 🚨

       if (data.type === 'onizleme_bitir') {
            // SİHİRLİ DÜZELTME: filter yerine splice kullanarak hafıza kopmasını kökünden çözüyoruz!
            for (let i = window.drawnStrokes.length - 1; i >= 0; i--) {
                if (window.drawnStrokes[i].type === 'preview') window.drawnStrokes.splice(i, 1);
            }

            if (window.RulerTool && window.RulerTool.drawCtx) { window.RulerTool.drawHandleLabel.style.display = 'none'; window.RulerTool.drawCtx.clearRect(0,0, window.RulerTool.drawCanvas.width, window.RulerTool.drawCanvas.height); }
            if (window.GonyeTool && window.GonyeTool.drawCtx) { window.GonyeTool.drawHandleLabel.style.display = 'none'; window.GonyeTool.drawHandleElement.style.transition = 'top 0.1s ease-out'; window.GonyeTool.drawHandleElement.style.top = `${window.GonyeTool.state.height - 20}px`; window.GonyeTool.drawCtx.clearRect(0,0, window.GonyeTool.drawCanvas.width, window.GonyeTool.drawCanvas.height); }
            if (window.AciolcerTool && window.AciolcerTool.previewCtx) { window.AciolcerTool.drawHandleLabel.style.display = 'none'; window.AciolcerTool.previewCanvas.style.display = 'none'; window.AciolcerTool.redLine.style.transition = 'transform 0.1s ease-out'; window.AciolcerTool.redLine.style.transform = 'rotate(0deg)'; window.AciolcerTool.drawHandle.style.transition = 'transform 0.1s ease-out'; window.AciolcerTool.drawHandle.style.transform = 'translateX(-50%) translate(0px, 0px)'; window.AciolcerTool.previewCtx.clearRect(0,0, window.AciolcerTool.previewCanvas.width, window.AciolcerTool.previewCanvas.height); }
            let lazer = document.getElementById('sanal-lazer'); if (lazer) lazer.style.display = 'none';
            if (window.redrawAllStrokes) window.redrawAllStrokes();
        }

        if (data.type === 'secimi_senkronize_et') {
            const index = window.drawnStrokes.findIndex(s => s.id === data.strokeId);
            if (index !== -1) {
                window.selectedItem = window.drawnStrokes[index];
                window.currentTool = 'move';
                if (window.redrawAllStrokes) window.redrawAllStrokes();
            }
        }

        if (data.type === 'secimi_kaldir') {
            window.selectedItem = null;
            if (window.redrawAllStrokes) window.redrawAllStrokes();
        }

    }

    // --- 3. BAĞLANTI KOPMASI DURUMU ---
    myConnection.on('close', function() {
        window._connectionEventsBound = false;
        window._lastSetupConnection = null;
        isConnected = false;
        const statusEl = document.getElementById('connection-status');
        if (statusEl) {
            statusEl.innerText = "Bağlantı Koptu 🔴";
            statusEl.style.color = "#ff4444";
        }
        // Bağlantı koptuğunda sayfayı yenilemek en garantili çözümdür:
        setTimeout(() => { location.reload(); }, 2000);
    });

   // --- SİHİRLİ EŞİTLEME (İKİ PENCERE İÇİN ISRARCI VE ZIRHLI VERSİYON) ---
    let denemeSayisi = 0;
    const pencereSyncTimer = setInterval(() => {
        if (!isConnected || !myConnection || !myConnection.open) return;
        
        // 1. Yasal Uyarı Kontrolü ve Sinyali
        if (window.acilisPenceresiKapatildi || (document.getElementById('disclaimer-modal') && document.getElementById('disclaimer-modal').style.display === 'none')) {
            window.sendNetworkData({ type: 'acilis_penceresini_kapat' });
        }
        
        // 🚨 2. YENİ: Yükle Penceresi Kontrolü ve Sinyali 🚨
        // Tablette yükle popupu kapalıysa veya hiç yoksa, PC'ye de ısrarla kapatma emri gönderir
        const tabletPopup = document.getElementById('install-popup');
        if (!tabletPopup || tabletPopup.style.display === 'none' || tabletPopup.classList.contains('hidden')) {
            window.sendNetworkData({ type: 'yukleme_penceresini_kapat' });
        }
        
        console.log("PC'ye tüm pencerelerin durum eşitlemesi gönderiliyor... (Deneme: " + (denemeSayisi + 1) + ")");
        
        denemeSayisi++;
        if (denemeSayisi >= 4) clearInterval(pencereSyncTimer); // 4 saniye boyunca tahtayı bombalar, sonra durur
    }, 1000); 

} // <--- setupConnectionEvents fonksiyonu tam burada kusursuzca kapanıyor

// =========================================================
// 7. GÜVENLİ VE KAYIPSIZ VERİ FIRLATMA FONKSİYONU (BARKODLU VERSİYON)
// =========================================================
window.sendNetworkData = function(dataPackage) {
    if (!isConnected || !myConnection || !myConnection.open) return;
    
    const dataString = JSON.stringify(dataPackage);
    const CHUNK_SIZE = 8000; 

    if (dataString.length <= CHUNK_SIZE) {
        // Küçük paketleri bekletmeden direkt gönder
        myConnection.send(dataPackage);
    } else {
        let i = 0;
        // 🚨 SİHİRLİ DOKUNUŞ: Her büyük dosyaya eşsiz bir barkod basıyoruz
        const kargoBarkodu = Date.now().toString() + Math.floor(Math.random() * 1000);
        
        function paketGonder() {
            if (!isConnected || !myConnection || !myConnection.open) return;
            
            if (myConnection.dataChannel && myConnection.dataChannel.bufferedAmount > 64000) {
                setTimeout(paketGonder, 50); // Ağ doluysa bekle
                return;
            }
            
            if (i < dataString.length) {
                myConnection.send({
                    type: 'chunk',
                    msgId: kargoBarkodu, // Bu parçanın kime ait olduğunu belirtir
                    data: dataString.substring(i, i + CHUNK_SIZE),
                    isLast: (i + CHUNK_SIZE >= dataString.length)
                });
                
                i += CHUNK_SIZE;
                setTimeout(paketGonder, 5); 
            }
        }
        paketGonder();
    }
};

// --- AĞ PANELİ BUTONLARI (DOKUNULMADI, AYNEN KORUNDU) ---
const closeBtn = document.getElementById('network-close-btn');
const miniBtn = document.getElementById('network-mini-btn');
const panel = document.getElementById('network-panel');

if (closeBtn && miniBtn && panel) {
    closeBtn.addEventListener('click', () => {
        panel.style.display = 'none';
        miniBtn.style.display = 'block';
    });

    miniBtn.addEventListener('click', () => {
        miniBtn.style.display = 'none';
        panel.style.display = 'block';
    });
}
// =========================================================
// FİZİKSEL ARAÇLAR İÇİN RADAR (ÇÖKMEYE KARŞI KORUMALI)
// =========================================================
let sonAracDurumlari = {};

window.araclariAgaGonder = function() {
    if (!isConnected || !myConnection) return;
    
    const gelismisAraclar = [
        { id: 'ruler', obj: window.RulerTool, selector: '.ruler-container' },
        { id: 'gonye', obj: window.GonyeTool, selector: '.gonye-container' },
        { id: 'aciolcer', obj: window.AciolcerTool, selector: '.aciolcer-container' },
        { id: 'pergel', obj: window.PergelTool, selector: '#compass-container' }
    ];

    gelismisAraclar.forEach(arac => {
        if (arac.obj && arac.obj.state) {
            try {
                const el = document.querySelector(arac.selector);
                let isVisible = 'none';
                let elW = '', elH = ''; 
                
                if (el) {
                    isVisible = (el.style.display !== 'none' && !el.classList.contains('hidden')) ? 'block' : 'none';
                    elW = el.style.width;
                    elH = el.style.height;
                }
                
                // Eğer state içinde kopyalanamaz bir veri varsa JSON.stringify motoru kitler.
                // try-catch sayesinde motor kilitlenmez, es geçer.
                const durum = isVisible + JSON.stringify(arac.obj.state) + elW + elH;

                if (sonAracDurumlari[arac.id] !== durum) {
                    sonAracDurumlari[arac.id] = durum;

                    window.sendNetworkData({
                        type: 'arac_state_senkron',
                        arac: arac.id,
                        display: isVisible,
                        state: arac.obj.state,
                        width: elW,   
                        height: elH   
                    });
                }
            } catch (err) {
                // Sessizce hatayı yut, sistemi kilitleme
            }
        }
    });

    const basitAraclar = [
        { id: 'yuzen-kopya', selector: '.yuzen-kopya-container' } 
    ];

    basitAraclar.forEach(arac => {
        const el = document.querySelector(arac.selector);
        if (el) {
            const durum = el.style.display + el.style.left + el.style.top + el.style.transform + el.style.width + el.style.height;
            if (sonAracDurumlari[arac.id] !== durum) {
                sonAracDurumlari[arac.id] = durum;
                window.sendNetworkData({
                    type: 'arac_senkron',
                    arac: arac.id,
                    selector: arac.selector,
                    display: el.style.display,
                    left: el.style.left,
                    top: el.style.top,
                    transform: el.style.transform,
                    width: el.style.width,
                    height: el.style.height
                });
            }
        }
    });
};

setInterval(window.araclariAgaGonder, 100);

window.addEventListener('load', () => {
    if (window.PergelTool && typeof window.PergelTool.init === 'function') {
        window.PergelTool.init();
        window.PergelTool.hide(); 
    }
});

window.broadcastPreview = function(toolType, stateData) {
    if (typeof window.sendNetworkData === 'function' && window.isConnected) {
        window.sendNetworkData({ type: 'active_preview', tool: toolType, data: stateData });
    }
};

window.addEventListener('pointermove', (e) => {
    // KRİTİK ÇÖZÜM: Kalemle çizim yapılırken lazeri iptal et, ağı boğmasın!
    if (typeof isDrawing !== 'undefined' && isDrawing) return;
    
    if (e.buttons > 0 && typeof window.sendNetworkData === 'function' && isConnected) {
        window.sendNetworkData({ type: 'aktif_onizleme', arac: 'lazer', payload: { x: e.clientX, y: e.clientY } });
    }
});
window.addEventListener('pointerup', () => {
    if (typeof window.sendNetworkData === 'function' && isConnected) {
        window.sendNetworkData({ type: 'onizleme_bitir' });
    }
});

// --- AÇILIŞ PENCERESİ (MODAL) VE AĞ ÜZERİNDEN KAPATMA (NÖBETÇİ GÖZCÜ SİSTEMİ) ---
const modal = document.getElementById('disclaimer-modal');
const openBtn = document.getElementById('open-disclaimer');
const closeDisclaimerBtn = document.getElementById('close-disclaimer');

if (modal) {
    // 1. Normal buton işlevleri
    if (openBtn) openBtn.addEventListener('click', (e) => { e.preventDefault(); modal.style.display = 'flex'; });
    if (closeDisclaimerBtn) closeDisclaimerBtn.addEventListener('click', () => { modal.style.display = 'none'; modal.classList.add('hidden'); });
    window.addEventListener('click', (event) => { if (event.target == modal) { modal.style.display = 'none'; modal.classList.add('hidden'); } });

    // 🚨 2. SİHİRLİ NÖBETÇİ GÖZCÜ (MUTATION OBSERVER) 🚨
    // Pencereyi kim kapatırsa kapatsın anında enseleyip PC'ye sinyal çakar!
    const gozcu = new MutationObserver(() => {
        if (modal.style.display === 'none' || modal.classList.contains('hidden')) {
            if (typeof window.sendNetworkData === 'function' && typeof isConnected !== 'undefined' && isConnected) {
                window.sendNetworkData({ type: 'acilis_penceresini_kapat' });
            }
        }
    });
    gozcu.observe(modal, { attributes: true, attributeFilter: ['style', 'class'] });
}

window.addEventListener('load', () => { if (modal) modal.style.display = 'flex'; });


// --- UYGULAMAYI YÜKLE PENCERESİ İÇİN KUSURSUZ RADAR SİSTEMİ ---
window.popupDurumu = 'baslangic'; 

setInterval(() => {
    const popup = document.getElementById('install-popup');
    if (!popup) return;
    
    // Pencere şu an ekranda görünüyor mu?
    const isVisible = (popup.style.display === 'flex' || popup.style.display === 'block');
    
    // 1. AŞAMA: Eğer ekrana yenice geldiyse durumunu "acik" olarak işaretle
    if (isVisible && window.popupDurumu !== 'acik') {
        window.popupDurumu = 'acik';
    } 
    // 2. AŞAMA: Eğer az önce açıktıysa ve ŞU AN GİZLENDİYSE (Kullanıcı kapattıysa)
    else if (!isVisible && window.popupDurumu === 'acik') {
        window.popupDurumu = 'kapali';
        
        // PC'ye nükleer bombaları tam bu saniyede yolla!
        if (typeof isConnected !== 'undefined' && isConnected && window.sendNetworkData) {
            window.sendNetworkData({ type: 'yukleme_penceresini_kapat' });
            setTimeout(() => { window.sendNetworkData({ type: 'yukleme_penceresini_kapat' }); }, 500);
            setTimeout(() => { window.sendNetworkData({ type: 'yukleme_penceresini_kapat' }); }, 1000);
            console.log("Tablet: Kapatılma anı yakalandı, PC'ye sinyaller fırlatıldı!");
        }
    }
}, 300); // Saniyede 3 kez sadece pencerenin durumunu gözetler


// 🚨 YENİ: Dil butonuna basıldığı an alt yasal uyarı şeridini kesin olarak gizle 🚨
document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('lang-btn')) {
        const footer = document.getElementById('footer-container');
        if (footer) {
            footer.style.display = 'none';
            console.log("Sistem: Dil seçimi algılandı, yasal uyarı şeridi gizlendi.");
        }
    }
});

