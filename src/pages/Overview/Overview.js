import React from 'react';

const Overview = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-600"> {/* Changed background to dark pink */}
      <div className="card bg-pink-200 w-full max-w-3xl mx-4 shadow-xl"> {/* Card background remains pink */}
        <div className="card-body p-6">
          <h2 className="card-title">OVERVIEW</h2>
          <p>
            HALO! Nama saya Ratih Aulia Ningrum sisiwi kelas 12 jurusan Rekayasa Perangkat Lunak (RPL) / Pengembangan Perangkat Lunak dan Gim (PPLG) di SMK Muhammadiyah 04 Sukorejo. 
            Saya memilih jurusan ini karena saya tertarik pada bagaimana teknologi dan perangkat lunak.
          </p>
          <p>
            Saya mengambil jurusan RPL bukan hanya karena minat pada komputer, tetapi juga karena saya ingin belajar bagaimana aplikasi dan website dibangun dari awal hingga siap digunakan. 
            Selain itu, saya juga menyukai tantangan yang diberikan oleh dunia pemrograman. Meskipun kadang menghadapi kesulitan, setiap tantangan yang berhasil diselesaikan memberikan rasa puas tersendiri.
          </p>
          <ul className="list-disc ml-5">
            <li>Portofolio Pribadi: yang dirancang menampilkan informasi dan keahlian saya.</li>
            <li>Website Toko Roti: untuk mendesain toko online sederhana.</li>
            <li>CV Multi Halaman: yang berisi detail tentang pengalaman dan kemampuan saya secara lebih terstruktur, dan masih ada lagi.</li>
          </ul>
          <p>
            Dengan memilih RPL, saya berharap dapat menguasai lebih banyak teknologi baru dan mengembangkan solusi yang bermanfaat bagi banyak orang. 
            Meski perjalanan belajar saya masih panjang, saya percaya bahwa setiap proyek yang saya selesaikan adalah langkah menuju pemahaman yang lebih dalam tentang dunia teknologi.
          </p>
          <p>
            Terima kasih telah mengunjungi profil saya.
          </p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;