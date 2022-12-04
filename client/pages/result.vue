<template>
  <h1 class="text-xl font-bold text-center">🎉 Hasil Perhitungan 🎉</h1>

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

const areas = useAreas();
let result: number[] = [];

let data: Ref<
  {
    area: Area;
    value: number;
  }[]
> = ref([]);

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

async function navigateToTool() {
  await navigateTo("/tool");
}

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

  console.log(request);

  $fetch<number[]>("http://localhost:3001/topsis", request).then((data) =>
    bindData(data)
  );
});
</script>
