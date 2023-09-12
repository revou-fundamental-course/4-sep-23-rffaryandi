function Keliling() {
    var sisi = document.getElementById('inputbox').value;
    var hasil = sisi * 4;
    document.getElementById('HasilKeliling').value = hasil;
}

function Luas() {
    var sisi = document.getElementById('inputbox').value;
    var hasilLuas = sisi * sisi;
    document.getElementById('HasilLuas').value = hasilLuas;
}
