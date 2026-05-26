// ---------------------------
// Ayakkabı numarası tahmin oyunu
// ---------------------------

// Buton ve input alanını seçiyoruz
let btn = document.getElementById("guessBtn");
let input = document.getElementById("shoeSizeInput");
let result = document.getElementById("quizResult");

// Butona tıklanınca çalışacak
if (btn) {
    btn.addEventListener("click", function () {
        let size = Number(input.value);

        if (size >= 36 && size <= 44) {
            if (size >= 38 && size <= 40) {
                result.textContent = "Tam sana göre spor ayakkabılarımız var!";
            } else {
                result.textContent = "Bu numarada da güzel modellerimiz mevcut.";
            }
        } else {
            result.textContent = "Lütfen 36 ile 44 arasında bir numara gir.";
        }
    });
}



// ---------------------------
// SEPET SİSTEMİ
// ---------------------------

// 1) Sayfa açıldığında localStorage'daki sepeti yükle
let sepet = [];

let kayitliSepet = localStorage.getItem("sepet");
if (kayitliSepet) {
    sepet = JSON.parse(kayitliSepet);
}

// 2) Ürünler sayfasındaki "Sepete Ekle" butonlarını seç
let butonlar = document.querySelectorAll(".addCartBtn");

butonlar.forEach(function(btn) {
    btn.addEventListener("click", function() {
        let ad = btn.getAttribute("data-name");
        let fiyat = btn.getAttribute("data-price");

        // Ürünü sepete ekle
        sepet.push({ urun: ad, fiyat: fiyat });

        // localStorage'a kaydet
        localStorage.setItem("sepet", JSON.stringify(sepet));

        alert(ad + " sepete eklendi!");
        console.log(sepet);
    });
});



// ---------------------------
// Sepet sayfasında ürünleri gösterme
// ---------------------------

let cartContainer = document.getElementById("cartItems");
let totalPriceText = document.getElementById("totalPrice");

if (cartContainer) {
    let toplam = 0;

    sepet.forEach(function(item) {
        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.textContent = item.urun + " - " + item.fiyat + " TL";
        cartContainer.appendChild(div);

        toplam += Number(item.fiyat);
    });

    totalPriceText.textContent = "Toplam: " + toplam + " TL";
}
