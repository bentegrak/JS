class MigrosBase {
    indirimOrani = 15;

    constructor(isim, soyisim, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.urunler = urunler;
    }

    hesapla() {
        let odenecekTutar = 0;
        if (this.urunleriKontrolEt(this.urunler)) {
            this.urunler.forEach((urun) => {
                odenecekTutar += urun.fiyat;
            })
        }
        else {
            alert("En az bir tane ürün almalısınız.");
        }
        return odenecekTutar;
    }

    hesaplaMoney() {
        let odenecekTutar = 0;
        if (this.urunleriKontrolEt(this.urunler)) {
            this.urunler.forEach((urun) => {
                odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100);
            })
        }
        else {
            alert("En az bir tane ürün almalısınız.");
        }
        return odenecekTutar;
    }

    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }

    getIsim() {
        return this.isim;
    }

    getSoyisim() {
        return this.soyisim;
    }
}