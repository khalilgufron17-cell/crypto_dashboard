console.log("File JS berhasil dimuat!");

function sapaGua() {
    alert("Halo Khalil! kau adalah seorang hacker!");
}

function gantiTema() {
    document.body.classList.toggle("light-mode");
}
// Fungsi buat ngambil harga dari CoinGecko
async function ambilHargaCrypto() {
    try {
        // 1. Manggil API (URL ini udah disiapin sama CoinGecko)
        let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd');
        
        // 2. Ubah datanya jadi format yang bisa dibaca JS (JSON)
        let data = await response.json();
        
        // 3. Suntikin datanya ke dalam HTML pakai ID yang udah kita bikin
        // toLocaleString() fungsinya buat nambahin koma otomatis
        document.getElementById("harga-btc").innerText = "$" + data.bitcoin.usd.toLocaleString();
        document.getElementById("harga-eth").innerText = "$" + data.ethereum.usd.toLocaleString();
        document.getElementById("harga-sol").innerText = "$" + data.solana.usd.toLocaleString();
        
    } catch (error) {
        console.log("Gagal ngambil data:", error);
    }
}

// Panggil fungsinya saat web pertama kali dibuka
ambilHargaCrypto();