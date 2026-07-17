<template>
  <div v-if="info">
    <div class="bg-white rounded-lg shadow p-4 mb-4">
      <h2 class="text-2xl font-bold">{{ info.title }}</h2>
      <p class="text-gray-500 mt-2">{{ info.location }} | 气温 {{ info.temp }}℃ | {{ info.weather }} | 当前在线 {{ info.online }}人</p>
    </div>
    <!-- 播放器容器 -->
    <div ref="playerBox" class="w-full bg-black rounded-lg overflow-hidden" style="height:70vh"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import DPlayer from 'dplayer'
import Hls from 'hls.js'
import { liveList } from '../mock/data'

const route = useRoute()
const playerBox = ref(null)
const info = ref(null)
let dp = null

// 加载对应直播数据
const loadData = () => {
  const id = Number(route.params.id)
  info.value = liveList.find(item => item.id === id)
  if(info.value) initPlayer()
}

// 初始化播放器
const initPlayer = () => {
  if(dp) dp.destroy()
  dp = new DPlayer({
    container: playerBox.value,
    video: { url: info.value.url },
    autoplay: true,
    hotkey: true,
    volume: 0.7
  })
  // hls兼容处理
  if(Hls.isSupported()) {
    const hls = new Hls()
    hls.loadSource(info.value.url)
    hls.attachMedia(dp.video)
  }
}

watch(()=>route.params.id, loadData)
onMounted(loadData)
</script>
