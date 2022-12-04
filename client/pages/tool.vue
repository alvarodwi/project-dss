<template>
  <h1 class="text-xl font-bold text-center">Alat DSS</h1>

  <div class="w-3/4 mx-auto mt-4">
    <h3 class="inline text-lg font-semibold text-gray-600">Input</h3>
    <button
      class="px-3 py-2 mx-4 text-white bg-green-400 rounded-lg hover:bg-green-500"
      type="button"
      @click="showNewModal"
    >
      Add New
      <IconAdd class="inline -mt-1" />
    </button>
  </div>

  <div
    class="grid w-3/4 grid-flow-col grid-cols-3 grid-rows-5 gap-2 p-4 mx-auto mt-4 bg-gray-100 rounded-lg md:grid-cols-4 h-96"
  >
    <ItemArea
      v-for="(area, index) in areas"
      :area="area"
      @delete="areas.splice(index, 1)"
      @click="() => showDetailModal(area)"
    />
  </div>

  <div
    class="w-3/4 mx-auto mt-4 text-sm text-red-500"
    v-if="errors && errors.length > 0"
  >
    <p>Error :</p>
    <ul class="ml-6 list-disc">
      <li v-for="e in errors">{{ e }}</li>
    </ul>
  </div>

  <button
    @click="onSubmit"
    class="block w-3/4 py-2 mx-auto mt-4 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600"
  >
    Submit
  </button>

  <transition name="fade" mode="out-in">
    <InputModal
      v-if="modalProps.visible"
      :type="modalProps.type"
      :area="modalProps.area"
      @submit="(data) => onModalSubmit(data)"
      @close="hideModal"
    />
  </transition>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import IconAdd from "~icons/carbon/add";

interface ModalProps {
  type: "form" | "detail";
  visible: boolean;
  area?: Area;
}

const modalProps: Ref<ModalProps> = ref(<ModalProps>{
  type: "form",
  visible: false,
});

const areas = useAreas();
const errors: Ref<String[]> = ref([]);

function showNewModal() {
  modalProps.value = {
    type: "form",
    visible: true,
  };
}

function showDetailModal(data: Area) {
  modalProps.value = {
    type: "detail",
    visible: true,
    area: data,
  };
}

function validate() {
  if (areas.value.length < 2) {
    errors.value.push(
      "Minimal terdapat 2 desa/kecamatan sebelum data bisa dihitung"
    );
  }
}

function hideModal() {
  modalProps.value.visible = false;
}

function onModalSubmit(modalData: Area) {
  areas.value.push(modalData);
}

async function onSubmit() {
  errors.value = [];
  validate();
  if (errors.value.length === 0) {
    await navigateTo("/result");
  }
}
</script>
