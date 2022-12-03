<template>
  <div role="dialog">
    <div
      class="fixed top-0 left-0 z-20 w-full h-full bg-black opacity-[.5]"
      @click="cancel"
    ></div>
    <div
      id="modal_container"
      class="fixed z-30 w-2/3 pt-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2"
    >
      <div class="px-6 mb-6">
        <p class="font-bold">
          {{ props.type === "form" ? "Input" : "Detail" }} Data Daerah
        </p>
        <div class="mt-2">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-800"
            >Nama Desa/Kecamatan</label
          >
          <input
            type="text"
            id="name"
            class="w-1/2 p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
            placeholder="Desa Cikeruh"
            v-model="area.name"
            :disabled="props.type !== 'form'"
          />
        </div>

        <div class="flex flex-row w-full mt-4 border-t">
          <!-- input dinding -->
          <div class="flex flex-col w-1/3 pr-2 mt-2">
            <label class="text-sm font-medium text-gray-800"
              >Data Jenis Dinding</label
            >
            <div>
              <label for="name" class="block my-1 text-xs text-gray-500"
                >Bambu</label
              >
              <input
                type="text"
                id="name"
                class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                placeholder="0"
                v-model.number="area.dinding.bambu"
                :disabled="props.type !== 'form'"
              />
            </div>
            <div>
              <label for="name" class="block my-1 text-xs text-gray-500"
                >Batang Kayu</label
              >
              <input
                type="text"
                id="name"
                class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                placeholder="0"
                v-model.number="area.dinding.batangKayu"
                :disabled="props.type !== 'form'"
              />
            </div>
            <div>
              <label for="name" class="block my-1 text-xs text-gray-500"
                >Kayu</label
              >
              <input
                type="text"
                id="name"
                class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                placeholder="0"
                v-model.number="area.dinding.kayu"
                :disabled="props.type !== 'form'"
              />
            </div>
            <div>
              <label for="name" class="block my-1 text-xs text-gray-500"
                >Plesteran/Anyaman Bambu/Kawat</label
              >
              <input
                type="text"
                id="name"
                class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                placeholder="0"
                v-model.number="area.dinding.plesteran"
                :disabled="props.type !== 'form'"
              />
            </div>

            <div>
              <label for="name" class="block my-1 text-xs text-gray-500"
                >Tembok</label
              >
              <input
                type="text"
                id="name"
                class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                placeholder="0"
                v-model.number="area.dinding.tembok"
                :disabled="props.type !== 'form'"
              />
            </div>
          </div>
          <!-- input lantai -->
          <div class="flex flex-col w-2/3 pl-2 mt-2 border-l">
            <label class="text-sm font-medium text-gray-800"
              >Data Jenis Lantai</label
            >
            <div class="grid grid-flow-col grid-rows-5 gap-x-2">
              <div>
                <label for="name" class="block my-1 text-xs text-gray-500"
                  >Bambu</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                  placeholder="0"
                  v-model.number="area.lantai.bambu"
                  :disabled="props.type !== 'form'"
                />
              </div>
              <div>
                <label for="name" class="block my-1 text-xs text-gray-500"
                  >Kayu/Papan Kualitas Rendah</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                  placeholder="0"
                  v-model.number="area.lantai.kayuKualitasRendah"
                  :disabled="props.type !== 'form'"
                />
              </div>
              <div>
                <label for="name" class="block my-1 text-xs text-gray-500"
                  >Kayu/Papan Kualitas Tinggi</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                  placeholder="0"
                  v-model.number="area.lantai.kayuKualitasTinggi"
                  :disabled="props.type !== 'form'"
                />
              </div>
              <div>
                <label for="name" class="block my-1 text-xs text-gray-500"
                  >Keramik</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                  placeholder="0"
                  v-model.number="area.lantai.keramik"
                  :disabled="props.type !== 'form'"
                />
              </div>
              <div>
                <label for="name" class="block my-1 text-xs text-gray-500"
                  >Marmer/Granit</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                  placeholder="0"
                  v-model.number="area.lantai.marmerGranit"
                  :disabled="props.type !== 'form'"
                />
              </div>
              <div>
                <label for="name" class="block my-1 text-xs text-gray-500"
                  >Parket/Vinyl/Permadani</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                  placeholder="0"
                  v-model.number="area.lantai.parketVinyl"
                  :disabled="props.type !== 'form'"
                />
              </div>
              <div>
                <label for="name" class="block my-1 text-xs text-gray-500"
                  >Semen/Bata Merah</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                  placeholder="0"
                  v-model.number="area.lantai.semenBata"
                  :disabled="props.type !== 'form'"
                />
              </div>
              <div>
                <label for="name" class="block my-1 text-xs text-gray-500"
                  >Tanah</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                  placeholder="0"
                  v-model.number="area.lantai.tanah"
                  :disabled="props.type !== 'form'"
                />
              </div>
              <div>
                <label for="name" class="block my-1 text-xs text-gray-500"
                  >Ubin/Tegel/Teraso</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                  placeholder="0"
                  v-model.number="area.lantai.ubinTeraso"
                  :disabled="props.type !== 'form'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- button -->
      <div
        class="flex justify-end px-4 py-3 border-t shadow-sm"
        v-if="props.type === 'form'"
      >
        <button
          class="px-3 py-1 mr-2 text-sm font-medium text-gray-900 border border-red-400 rounded-lg hover:border-red-600"
          type="button"
          @click="cancel"
        >
          Batal
        </button>
        <button
          class="px-3 py-1 text-sm font-medium text-gray-900 border border-green-400 rounded-lg hover:border-green-600"
          type="button"
          @click="submit"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, Ref } from "vue";

const emit = defineEmits(["close", "submit"]);

const props = defineProps<{
  type: ModalType;
  area?: Area;
}>();

type ModalType = "detail" | "form";

const defaultValue: Area = {
  name: "",
  dinding: <JenisDinding>{
    tembok: 0,
    batangKayu: 0,
    kayu: 0,
    plesteran: 0,
    bambu: 0,
  },
  lantai: <JenisLantai>{
    kayuKualitasTinggi: 0,
    keramik: 0,
    marmerGranit: 0,
    parketVinyl: 0,
    kayuKualitasRendah: 0,
    semenBata: 0,
    ubinTeraso: 0,
    tanah: 0,
    bambu: 0,
  },
};

const area: Ref<Area> = ref(props.area ?? defaultValue);

function cancel() {
  emit("close");
}

function submit() {
  console.log(area.value);
  emit("submit", area.value);
  emit("close");
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
