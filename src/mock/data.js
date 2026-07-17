// 在这里替换所有 url 为你收集的景区m3u8实时流
export const liveList = [
  {
    id: 1,
    title: "黄山光明顶云海",
    location: "安徽黄山",
    category: "云海",
    cover: "https://picsum.photos/id/1036/600/400",
    url: "https://替换成你的直播地址.m3u8",
    lat: 30.1400,
    lng: 118.1746,
    temp: 16,
    weather: "多云有云海",
    online: 2136
  },
  {
    id: 2,
    title: "青海湖二郎剑湖泊全景",
    location: "青海海南",
    category: "湖泊",
    cover: "https://picsum.photos/id/1039/600/400",
    url: "https://替换成你的直播地址.m3u8",
    lat: 36.9486,
    lng: 100.1348,
    temp: 12,
    weather: "晴天",
    online: 865
  },
  {
    id: 3,
    title: "张家界天门山山水",
    location: "湖南张家界",
    category: "山水",
    cover: "https://picsum.photos/id/1031/600/400",
    url: "https://替换成你的直播地址.m3u8",
    lat: 29.0843,
    lng: 110.4173,
    temp: 22,
    weather: "薄雾",
    online: 1520
  },
  {
    id: 4,
    title: "武功山金顶云海",
    location: "江西萍乡",
    category: "云海",
    cover: "https://picsum.photos/id/1037/600/400",
    url: "https://替换成你的直播地址.m3u8",
    lat: 27.4522,
    lng: 114.1011,
    temp: 14,
    weather: "云海高发",
    online: 3652
  }
]

// 分类标签
export const categoryList = [
  { label: "全部", key: "all" },
  { label: "云海", key: "云海" },
  { label: "湖泊", key: "湖泊" },
  { label: "山水", key: "山水" }
]
