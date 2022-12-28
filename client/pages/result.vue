<!-- layout halaman result (hasil perhitungan) -->
<template>
  <h1 class="text-xl font-bold text-center">🧮 Hasil Perhitungan 🧮</h1>

  <div class="w-3/4 pb-16 mx-auto mt-4 border-b" v-if="data.length > 0">
    <h3 class="inline text-lg font-semibold text-gray-600">Kandidat Terbaik</h3>

    <p class="mx-auto mt-16 mb-4 text-4xl font-bold text-center">
      {{ data[0].area.name }}
    </p>
    <p class="font-medium text-center text-gray-600">
      dengan V = {{ data[0].value }}
    </p>
  </div>

  <div class="w-3/4 mx-auto mt-4" v-if="data.length > 0">
    <h3 class="inline text-lg font-semibold text-gray-600">
      Hasil Perhitungan
    </h3>

    <table class="w-3/4 mx-auto mt-4 table-auto">
      <thead class="border-b table-fixed">
        <tr>
          <th class="w-1/6 p-2 text-lg font-medium">Rank</th>
          <th class="w-3/6 p-2 text-lg font-medium">Kandidat</th>
          <th class="w-2/6 p-2 text-lg font-medium">V</th>
        </tr>
      </thead>
      <tbody class="border-b">
        <tr v-for="(d, index) in data" class="text-center border-b">
          <td class="w-1/6 p-2">{{ index + 1 }}</td>
          <td class="w-3/6 p-2">{{ d.area.name }}</td>
          <td class="w-2/6 p-2">{{ d.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";

/**
 * pendefinisian variable
 * areas    -> data area yang telah diinput di halaman sebelumnya
 * result   -> data dari API berisi hasil perhitungan TOPSIS
 * data     -> data hasil gabungan areas dan result, untuk menampilkan secara berdampingan data area dan hasil perhitungan TOPSIS
 */
const areas = useAreas();
let result: number[] = [];
let data: Ref<
  {
    area: Area;
    value: number;
  }[]
> = ref([]);

/**
 * fungsi untuk menggabungkan data areas dan result dari API
 * @param param data result dari API
 */
function bindData(param: number[]) {
  result = param;
  let temp: {
    area: Area;
    value: number;
  }[] = [];

  for (let i = 0; i < result.length; i++) {
    temp.push({
      area: areas.value[i],
      value: result[i],
    });
  }

  temp.sort((a, b) => b.value - a.value);

  data.value = temp;
}

/**
 * fungsi untuk kembali ke halaman tool
 */
async function navigateToTool() {
  await navigateTo("/tool");
}

/**
 * fungsi yang dijalankan ketika halaman dibuka
 * dilakukan hal-hal berikut :
 * 1. jika areas kosong, maka kembali ke halaman tool (untuk diinput kembali)
 * 2. jika tidak kosong, maka API akan ditembak dan ditampilkan hasil perhitungan TOPSIS nya
 */
onMounted(() => {
  if (!areas.value || areas.value.length === 0) {
    navigateToTool();
  }

  const request = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: {
      areas: areas.value,
    },
  };

  // tembak api
  $fetch<number[]>("http://localhost:3001/topsis", request).then((data) =>
    bindData(data)
  );
});
</script>
