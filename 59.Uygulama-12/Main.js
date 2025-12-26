let mesaj =
    `
Migros'a Hoşgeldiniz.
Money Kart'ınız Var mı ?
1-Evet
2-Hayır
`;

const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 30,
    },
    {
        urunIsmi: "Yoğurt",
        fiyat: 40,
    },
    {
        urunIsmi: "Peynir",
        fiyat: 90,
    }
]

let sonuc = prompt(mesaj);
let odenecekTutar;

if (sonuc === "1") {
    let isim = prompt("Adınızı Giriniz:");
    let soyisim = prompt("Soyadınızı Giriniz:");

    const musteri = new Musteri(isim, soyisim, urunler);

    odenecekTutar = musteri.hesaplaMoney();

    alert(
        `
        Müşteri Bilgileri : ${musteri.getIsim()} ${musteri.getSoyisim()} 
        Ödenecek Tutar: ${odenecekTutar} TL
        `
    );
}
else if (sonuc === "2") {
    const musteri = new Musteri(null, null, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar} TL`)
}
else {
    alert("Geçersiz İşlem");
}