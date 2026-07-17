<template>
  <div class="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer" @click="$router.push(`/live/${item.id}`)">
    <img :src="item.cover" alt="" class="w-full h-48 object-cover">
    <div class="p-3">
      <h3 class="font-bold text-lg truncate">{{ item.title }}</h3>
      <p class="text-gray-500 text-sm mt-1">{{ item.location }} · {{ item.temp }}℃ {{ item.weather }}</p>
      <div class="flex justify-between mt-2 text-sm">
        <span class="bg-sky-100 text-sky-600 px-2 rounded">{{ item.category }}</span>
        <span class="text-red-500">在线 {{ item.online }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['item'])
</script>
