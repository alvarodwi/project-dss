<!-- layout halaman index -->
<template>
  <h1 class="text-xl font-bold text-center">🚧 Penjelasan Projek 🚧</h1>

  <div class="w-1/2 mx-auto mt-4">
    <p class="my-2">
      Pada saat ini banyak sekali narasi mengenai pembangunan yang tidak merata
      dan tidak sesuai, oleh karena itu kami sebagai mahasiswa yang meneliti
      data mengenai kabupaten sumedang, kita ingin membuat sebuah produk yang
      dapat membantu kabupaten sumedang menyelesaikan permasalahan tersebut
      dengan pendekatan berbasis data.
    </p>

    <p class="my-2">
      Kabupaten Sumedang sendiri telah menghimpun berbagai data dari kecamatan
      serta desa, salah satunya adalah data bahan bangunan yang dipakai
      warganya. Dari website
      <a
        href="https://opendata.sumedangkab.go.id/index.php/dashboard/dataseet"
        class="text-purple-600 cursor-pointer hover:text-purple-400"
        >Opendata Kab. Sumedang</a
      >, kami berhasil mendapatkan data jenis dinding dan jenis lantai di
      desa-desa yang ada di kecamatan Jatinangor dan Tanjungsari.
    </p>

    <p class="my-2">
      Dari data tersebut, kami mengembangkan sebuah model untuk membantu
      pengambilan keputusan dalam topik
      <span class="italic font-semibold"
        >"Daerah mana yang lebih cocok menerima bantuan pembangunan"</span
      >
      berdasarkan data bahan bangunan yang dipakai.
    </p>

    <p class="my-2">
      Untuk tujuan tersebut, kami mengelompokkan bahan bangunan ke dalam 3
      tingkatan, yaitu
    </p>

    <table class="w-full mt-4 text-sm table-fixed border-spacing-2">
      <thead>
        <tr class="text-left border-b">
          <th>Tingkatan</th>
          <th>Bahan Dinding</th>
          <th>Bahan Lantai</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b">
          <td class="font-medium">Layak</td>
          <td>Tembok</td>
          <td>
            Kayu/Papan kualitas tinggi, Keramik, Marmer/Granit,
            Parket/Vinyl/Permadani
          </td>
        </tr>
        <tr class="border-b">
          <td class="font-medium">Cukup</td>
          <td>Batang kayu, Kayu</td>
          <td>Kayu kualitas rendah, Semen/Bata merah, Ubin/Tegel/Teraso</td>
        </tr>
        <tr class="border-b">
          <td class="font-medium">Tidak Layak</td>
          <td>Plesteran/Anyaman bambu/Kawat, Bambu</td>
          <td>Tanah, Bambu</td>
        </tr>
      </tbody>
    </table>

    <p class="my-4">
      Baru kemudian, alat DSS kami mengolah data input berupa jumlah unit
      bangunan dari kategori tersebut dan memberikan rekomendasi daerah mana
      yang lebih cocok menerima bantuan pembangunan.
    </p>
  </div>
</template>
