<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">全国景区实时风景直播</h2>
    <!-- 分类筛选 -->
    <div class="flex gap-3 mb-6">
      <button
        v-for="cat in categoryList"
        :key="cat.key"
        @click="currentCat = cat.key"
        class="px-4 py-2 rounded-full border"
        :class="currentCat === cat.key ? 'bg-sky-600 text-white border-sky-600' : 'border-gray-300'"
      >
        {{ cat.label }}
      </button>
    </div>
    <!-- 直播网格 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <LiveCard v-for="item in filterList" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { liveList, categoryList } from '../mock/data'
import LiveCard from '../components/LiveCard.vue'

const currentCat = ref('all')
const filterList = computed(() => {
  if (currentCat.value === 'all') return liveList
  return liveList.filter(i => i.category === currentCat.value)
})
</script>
