// Data gejala dengan MB dan MD
const gejala = {
    G1: { deskripsi: "Rambut kusam, tidak bercahaya", MB: 0.7, MD: 0.2 },
    G2: { deskripsi: "Rambut terasa kasar saat disentuh", MB: 0.8, MD: 0.3 },
    G3: { deskripsi: "Rambut sulit disisir karena kusut", MB: 0.6, MD: 0.2 },
    G4: { deskripsi: "Rambut mudah patah", MB: 0.9, MD: 0.1 },
    G5: { deskripsi: "Rambut mengembang tanpa bentuk", MB: 0.7, MD: 0.3 },
    G6: { deskripsi: "Kulit kepala terasa kering dan bersisik", MB: 0.8, MD: 0.2 },
    G7: { deskripsi: "Rambut rapuh dan sering berbunyi saat digesek", MB: 0.6, MD: 0.2 },
    G8: { deskripsi: "Rambut kehilangan elastisitas", MB: 0.9, MD: 0.1 },
    G9: { deskripsi: "Banyak helai rambut dengan tekstur tidak rata", MB: 0.7, MD: 0.3 },
    G10: { deskripsi: "Rambut terlihat rapuh setelah proses kimia", MB: 0.9, MD: 0.2 },
    G11: { deskripsi: "Ujung rambut bercabang menjadi dua atau lebih", MB: 0.8, MD: 0.3 },
    G12: { deskripsi: "Rambut terasa kasar di ujungnya", MB: 0.7, MD: 0.2 },
    G13: { deskripsi: "Rambut tidak tumbuh panjang meskipun tidak dipotong", MB: 0.6, MD: 0.3 },
    G14: { deskripsi: "Rambut rontok lebih dari 100 helai per hari", MB: 1.0, MD: 0.1 },
    G15: { deskripsi: "Rambut menipis di area tertentu", MB: 0.9, MD: 0.2 },
    G16: { deskripsi: "Kulit kepala terlihat lebih jelas", MB: 0.8, MD: 0.3 },
    G17: { deskripsi: "Rambut cepat lepek meskipun baru dicuci", MB: 0.7, MD: 0.2 },
    G18: { deskripsi: "Rambut licin dan sulit diatur", MB: 0.8, MD: 0.3 },
    G19: { deskripsi: "Kulit kepala terasa lengket", MB: 0.6, MD: 0.2 },
    G20: { deskripsi: "Kulit kepala terasa gatal", MB: 0.7, MD: 0.2 },
    G21: { deskripsi: "Terdapat serpihan putih di rambut atau pakaian", MB: 0.8, MD: 0.3 },
    G22: { deskripsi: "Kulit kepala tampak merah atau iritasi", MB: 0.9, MD: 0.2 },
    G23: { deskripsi: "Area kepala tertentu tampak botak", MB: 1.0, MD: 0.1 },
    G24: { deskripsi: "Tidak ada rambut baru di area botak", MB: 0.9, MD: 0.3 },
    G25: { deskripsi: "Rambut terlihat 'terbang' tidak rata", MB: 0.7, MD: 0.2 },
    G26: { deskripsi: "Rambut sulit mempertahankan bentuk", MB: 0.6, MD: 0.3 },
  };
  
  // Data diagnosa
  const diagnosa = {
    D1: { nama: "Rambut Kering", gejala: ["G1", "G2", "G3", "G4", "G6", "G7"], solusi: "Gunakan sampo pelembap dan masker rambut secara rutin." },
    D2: { nama: "Rambut Rusak", gejala: ["G1", "G4", "G8", "G9", "G10"], solusi: "Hindari penggunaan produk kimia berlebih, gunakan minyak alami untuk perawatan." },
    D3: { nama: "Rambut Bercabang", gejala: ["G11", "G12", "G13"], solusi: "Potong ujung rambut secara teratur dan gunakan serum rambut untuk mengatasi ujung bercabang." },
    D4: { nama: "Rambut Rontok", gejala: ["G14", "G15", "G16"], solusi: "Gunakan sampo anti-rontok dan pertimbangkan perawatan medis seperti terapi rambut." },
    D5: { nama: "Rambut Berminyak", gejala: ["G17", "G18", "G19"], solusi: "Gunakan sampo pengontrol minyak dan hindari pemakaian produk rambut yang berat." },
    D6: { nama: "Ketombe", gejala: ["G20", "G21", "G22"], solusi: "Gunakan sampo anti-ketombe dan hindari stres yang dapat memperburuk kondisi ketombe." },
    D7: { nama: "Kebotakan Parsial", gejala: ["G14", "G23", "G24"], solusi: "Konsultasikan dengan dokter kulit atau gunakan produk penumbuh rambut." },
    D8: { nama: "Rambut Mengembang", gejala: ["G1", "G5", "G25", "G26"], solusi: "Gunakan serum atau minyak rambut untuk memberikan kelembapan dan menjaga bentuk rambut." },
  };
  

  // Menampilkan daftar gejala sebagai checkbox dengan nomor
const gejalaListEl = document.querySelector(".gejala-list");
let index = 1;
Object.entries(gejala).forEach(([kode, data]) => {
    const li = document.createElement("li");
    li.classList.add("gejala-item");
    li.innerHTML = `
        <label>
            <input type="checkbox" value="${kode}"> 
            <span class="gejala-text">${index}. ${data.deskripsi}</span>
        </label>
    `;
    gejalaListEl.appendChild(li);
    index++;
});

// Menambahkan CSS untuk mempercantik tampilan
const style = document.createElement("style");
style.innerHTML = `
    .gejala-list {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .gejala-item {
        background: #f9f9f9;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .gejala-text {
        font-size: 16px;
        font-weight: 500;
    }
    input[type="checkbox"] {
        margin-right: 10px;
        transform: scale(1.2);
    }
`;
document.head.appendChild(style);
  
 // Fungsi untuk menghitung diagnosa menggunakan Certainty Factor dan Forward Chaining
function hitungDiagnosa() {
    const inputGejala = Array.from(document.querySelectorAll(".gejala-list input:checked")).map(input => input.value);
  
    // Certainty Factor (CF)
    const hasilCF = Object.entries(diagnosa).map(([kode, data]) => {
      let CF = 0;
      const relevan = data.gejala.filter(g => inputGejala.includes(g));
      relevan.forEach(g => {
        const CFGejala = gejala[g].MB - gejala[g].MD;
        CF = CF + CFGejala * (1 - Math.abs(CF));
      });
      return { nama: data.nama, solusi: data.solusi, CF: CF.toFixed(2) };
    }).sort((a, b) => b.CF - a.CF);
  
    // Forward Chaining (FC)
    const hasilFC = Object.entries(diagnosa).map(([kode, data]) => {
      const totalGejala = data.gejala.length;
      const cocok = data.gejala.filter(g => inputGejala.includes(g)).length;
      const persentase = (cocok / totalGejala) * 100;
      return { nama: data.nama, solusi: data.solusi, persentase: persentase.toFixed(2) };
    }).sort((a, b) => b.persentase - a.persentase);
  
    tampilkanHasil(hasilCF, hasilFC);
  }
  
  // Fungsi untuk menghitung diagnosa menggunakan Certainty Factor dan Forward Chaining
function hitungDiagnosa() {
    const inputGejala = Array.from(document.querySelectorAll(".gejala-list input:checked")).map(input => input.value);
  
    // Certainty Factor (CF)
    const hasilCF = Object.entries(diagnosa).map(([kode, data]) => {
      let CF = 0;
      const relevan = data.gejala.filter(g => inputGejala.includes(g));
      relevan.forEach(g => {
        const CFGejala = gejala[g].MB - gejala[g].MD;
        CF = CF + CFGejala * (1 - Math.abs(CF));
      });
      return { nama: data.nama, solusi: data.solusi, CF: CF.toFixed(2) };
    }).sort((a, b) => b.CF - a.CF);
  
    // Forward Chaining (FC)
    const hasilFC = Object.entries(diagnosa).map(([kode, data]) => {
      const totalGejala = data.gejala.length;
      const cocok = data.gejala.filter(g => inputGejala.includes(g)).length;
      const persentase = (cocok / totalGejala) * 100;
      return { nama: data.nama, solusi: data.solusi, persentase: persentase.toFixed(2) };
    }).sort((a, b) => b.persentase - a.persentase);
  
    tampilkanHasil(hasilCF, hasilFC);
}
  
// Fungsi untuk menampilkan hasil diagnosa
function tampilkanHasil(hasilCF, hasilFC) {
    const resultEl = document.getElementById("result");
    resultEl.style.display = "block";
  
    if (hasilCF.length > 0 && hasilFC.length > 0) {
      resultEl.innerHTML = `<h3>Hasil Diagnosa Certainty Factor:</h3>`;
      hasilCF.forEach(h => {
        resultEl.innerHTML += 
          `<strong>${h.nama}</strong> - CF: ${h.CF}<br>
           Solusi: ${h.solusi}<br><br>`;
      });
  
      resultEl.innerHTML += `<h3>Hasil Diagnosa Forward Chaining:</h3>`;
      hasilFC.forEach(h => {
        resultEl.innerHTML += 
          `<strong>${h.nama}</strong> - Persentase: ${h.persentase}%<br>
           Solusi: ${h.solusi}<br><br>`;
      });
  
      // Kesimpulan
      const kesimpulanCF = hasilCF[0]; // Diagnosa dengan CF tertinggi
      const kesimpulanFC = hasilFC[0]; // Diagnosa dengan persentase tertinggi
  
      resultEl.innerHTML += 
        `<h3>Kesimpulan:</h3>
         Berdasarkan metode Certainty Factor, diagnosa terbaik adalah <strong>${kesimpulanCF.nama}</strong> dengan tingkat keyakinan CF: <strong>${kesimpulanCF.CF}</strong>.<br>
         Berdasarkan metode Forward Chaining, diagnosa terbaik adalah <strong>${kesimpulanFC.nama}</strong> dengan kecocokan gejala sebesar <strong>${kesimpulanFC.persentase}%</strong>.<br>
         <br>`;

      // Menentukan solusi terbaik antara CF dan FC
      const solusiTerbaik = (parseFloat(kesimpulanCF.CF) > parseFloat(kesimpulanFC.persentase) / 100) 
        ? { nama: kesimpulanCF.nama, metode: 'Certainty Factor', nilai: kesimpulanCF.CF, solusi: kesimpulanCF.solusi }
        : { nama: kesimpulanFC.nama, metode: 'Forward Chaining', nilai: kesimpulanFC.persentase, solusi: kesimpulanFC.solusi };

      resultEl.innerHTML += 
        `Diagnosa terbaik adalah <strong>${solusiTerbaik.nama}</strong> berdasarkan metode <strong>${solusiTerbaik.metode}</strong> dengan nilai kecocokan <strong>${solusiTerbaik.nilai}</strong>.<br>
         Rekomendasi solusi utama: <strong>${solusiTerbaik.solusi}</strong>`;
    } else {
      resultEl.innerHTML = "<strong>Tidak ada diagnosa yang cocok.</strong>";
    }
}
  
// Event listener tombol diagnosa
document.getElementById("diagnoseBtn").addEventListener("click", hitungDiagnosa);

