let DaftarTugas = [];
function tambah() {
 let input = document.getElementById("tugas");
 
 if (input.value === "") {
    return;
 }
 DaftarTugas.push({ judul: input.value, selasai: false });
 input.value = "";
 tambilkan();
}

function tandaiselasai(index) {
    DaftarTugas [index].selasai = !DaftarTugas[index].selasai;
    tambilkan();
}

function HapusTugas(index) {
    DaftarTugas.splice(index, 1);
    tambilkan();
}

function tambilkan() {
    let html = "";

    for (let i = 0; i < DaftarTugas.length; i++) {
        let kelas = "";
    if (DaftarTugas[i].selasai) {
        kelas = "selasai";
    }

    html += "<li class='" + kelas + "'>" + DaftarTugas[i].judul + 
    " <button onclick='tandaiselasai (" + i + ")'>Selasai</button>" +
    " <button onclick='HapusTugas (" + i +")'>Hapus</button></li>";
}

document.getElementById ("Daftar").innerHTML = html;
}