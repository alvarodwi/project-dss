<template>
  <div
    class="flex flex-row w-full p-4 bg-white rounded-lg shadow-lg cursor-pointer"
    @click="emit('click')"
  >
    <h1 class="my-auto text-xs font-semibold text-gray-700 lg:text-base grow">
      {{ area.name }}
    </h1>
    <div class="flex justify-end">
      <button
        type="button"
        @click.stop="emit('delete')"
        class="p-1 rounded-full cursor-pointer hover:border-red-500 hover:border"
      >
        <IconTrash class="text-red-500" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTrash from "~icons/carbon/trash-can";

const emit = defineEmits(["click", "delete"]);
const props = defineProps<{
  area: Area;
}>();
</script>
