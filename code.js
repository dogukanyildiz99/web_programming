
function buton_aksiyonu() {
    alert("Gönderildi!");
}

function isim_degisti() {
    var isim_inputu = document.getElementById("isim");
    // alert("Hoşgeldiniz " + isim_input.value + "!");

    var h2isim = document.getElementById("h2isim");
    h2isim.innerText = "Hoşgeldiniz " + isim_inputu.value + "!";

}