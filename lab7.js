//Büyütme ve küçültme
function buyut() {
    var metin = document.getElementById("yazi").value;
    metin = replaceAll("i", "İ");
    metin = metin.toUpperCase();
    console.log("Yeni metin" + metin);
    document.getElementById("yeniyazi").innerHTML = metin;
}

function kucult() {
    var metin = document.getElementById("yazi").value;
    metin = replaceAll("I", "ı");
    metin = metin.toLowerCase();
    console.log("Yeni metin" + metin);
    document.getElementById("yeniyazi").innerHTML = metin;
}