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
      <div class="absolute right-0 mx-8" v-if="props.type === 'detail'">
        <IconEdit v-if="!edit" @click="toggleEdit(true)" />
        <IconEditOff v-if="edit" @click="toggleEdit(false)" />
      </div>
      <div class="px-6 mb-6">
        <p class="font-bold">
          {{ type === "form" ? "Input" : "Detail" }} Data Daerah
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
            :disabled="type !== 'form'"
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
                >Anyaman Bambu</label
              >
              <input
                type="text"
                id="name"
                class="w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:border-transparent"
                placeholder="0"
                v-model.number="area.dinding.anyaman"
                :disabled="type !== 'form'"
              />
            </div>
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
                :disabled="type !== 'form'"
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
                :disabled="type !== 'form'"
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
                :disabled="type !== 'form'"
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
                :disabled="type !== 'form'"
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
                :disabled="type !== 'form'"
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
                  :disabled="type !== 'form'"
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
                  :disabled="type !== 'form'"
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
                  :disabled="type !== 'form'"
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
                  :disabled="type !== 'form'"
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
                  :disabled="type !== 'form'"
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
                  :disabled="type !== 'form'"
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
                  :disabled="type !== 'form'"
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
                  :disabled="type !== 'form'"
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
                  :disabled="type !== 'form'"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- error message -->
        <div
          class="mt-4 text-sm text-red-500"
          v-if="errors && errors.length > 0"
        >
          <p>Error :</p>
          <ul class="ml-6 list-disc">
            <li v-for="e in errors">{{ e }}</li>
          </ul>
        </div>
      </div>
      <!-- button -->
      <div
        class="flex justify-end px-4 py-3 border-t shadow-sm"
        v-if="type === 'form'"
      >
        <button
          class="px-3 py-1 mr-2 text-sm font-medium text-gray-900 border border-red-400 rounded-lg hover:border-red-600"
          type="button"
          @click="cancel"
          v-if="props.type !== 'detail'"
        >
          Batal
        </button>
        <button
          class="px-3 py-1 text-sm font-medium text-gray-900 border border-green-400 rounded-lg hover:border-green-600"
          type="button"
          @click="submit"
        >
          {{ props.type === "detail" ? "Update" : "Submit" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, Ref } from "vue";
import IconEditOff from "~icons/carbon/edit-off";
import IconEdit from "~icons/carbon/edit";

const emit = defineEmits(["close", "submit", "edit"]);

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
    anyaman: 0,
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
const type = ref(props.type ?? "form");
const edit = ref(false);
const errors: Ref<String[]> = ref([]);

function toggleEdit(value: Boolean) {
  if (value) {
    type.value = "form";
  } else {
    type.value = "detail";
  }

  edit.value = !edit.value;
}

function validateArea(value: Area) {
  if (!value.name || value.name === "") {
    errors.value.push("Nama desa/kecamatan tidak boleh kosong");
  }

  if (checkIfAllZero(value.dinding)) {
    errors.value.push("Data dinding tidak boleh 0 semua");
  }

  if (checkIfAllZero(value.lantai)) {
    errors.value.push("Data lantai tidak boleh 0 semua");
  }
}

function checkIfAllZero(obj: Object) {
  for (let [_, num] of Object.entries(obj)) {
    if (num != 0) {
      return false;
    }
  }
  return true;
}

function cancel() {
  emit("close");
}

function submit() {
  errors.value = [];
  validateArea(area.value);
  if (errors.value.length === 0) {
    if (edit.value) {
      // emit("edit", area.value);
      // somehow this will still edit the value
    } else {
      emit("submit", area.value);
    }
    emit("close");
  }
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
