const fs = require("fs");
let appJs = fs.readFileSync("app.js", "utf8");

const target = `// KRİTİK NOKTA: 'resize' eventini (adres çubuğu hareketlerini) DİNLENMİYORUZ!
// Böylece adres çubuğu kaybolsa/çıksa bile sayfa esnemez, çizgiler zıplamaz.`;

const replace = `// 3. EBA Tam Ekran / Pencere Boyutu Degisimi Icin Akilli Resize Dinleyici
// Adres cubugu yuzunden olan ufak oynamalari (sayfa ziplamasini) engeller, ama gercek tam ekran gecislerini (EBA) yakalar!
let sonEkranGenislik = window.innerWidth;
let sonEkranYukseklik = window.innerHeight;

window.addEventListener('resize', () => {
    const yeniGenislik = window.innerWidth;
    const yeniYukseklik = window.innerHeight;
    
    // Genislik degistiyse KESINLIKLE gercek bir boyut degisimi vardir (EBA Tam Ekran vb.)
    // VEYA yukseklik 80 pikselden fazla degistiyse (Adres cubugundan daha buyuk bir degisim)
    if (Math.abs(yeniGenislik - sonEkranGenislik) > 10 || Math.abs(yeniYukseklik - sonEkranYukseklik) > 80) {
        sonEkranGenislik = yeniGenislik;
        sonEkranYukseklik = yeniYukseklik;
        setTimeout(() => {
            lockScreenSize();
            if (typeof setupCanvasResolution === 'function') setupCanvasResolution();
        }, 150);
    }
});`;

// Fallback in case of character encoding issues in comments
const target2 = `// KRTK NOKTA: 'resize' eventini (adres ubuYu hareketlerini) DNLEMYORUZ!
// Bylece adres ubuYu kaybolsa/ksa bile sayfa esnemez, izgiler zplamaz.`;

let replaced = false;
if (appJs.includes(target)) {
    appJs = appJs.replace(target, replace);
    replaced = true;
} else if (appJs.includes(target2)) {
    appJs = appJs.replace(target2, replace);
    replaced = true;
} else {
    // Search by regex if exact string is messy
    const regex = /\/\/ KR.T.K NOKTA: 'resize' eventini[^\n]*\n\/\/ B.ylece adres[^\n]*\n/g;
    if (regex.test(appJs)) {
        appJs = appJs.replace(regex, replace + "\n");
        replaced = true;
    }
}

if (replaced) {
    fs.writeFileSync("app.js", appJs, "utf8");
    console.log("Success: Smart resize listener added for EBA fullscreen.");
} else {
    console.log("Failed: Target comment not found.");
}
