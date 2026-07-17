<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">全国景区点位地图（点击查看直播）</h2>
    <div id="container" class="rounded-lg shadow"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { liveList } from '../mock/data'
import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(()=>{
  // 初始化地图
  const map = new window.AMap.Map("container", {
    zoom: 5,
    center: [104.06, 30.67]
  })
  // 批量添加标记点
  liveList.forEach(item=>{
    const marker = new window.AMap.Marker({
      position: [item.lng, item.lat],
      title: item.title
    })
    marker.on('click', ()=>{
      router.push(`/live/${item.id}`)
    })
    map.add(marker)
  })
})
</script>
