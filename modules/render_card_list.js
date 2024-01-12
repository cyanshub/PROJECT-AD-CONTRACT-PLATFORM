// 提取 json 檔案陣列資料的方法: 網紅資料
import data from "../data.json" assert{type: "json"}
const influencers = data.influencers
console.log("載入網紅資料:",influencers)

// 進行 DOM 操作選取物件
const cardList = document.getElementById('card-list')

// 定義變數
let activeCard = 0

export function renderCardList() {
  influencers.forEach((influencer) => {
    cardList.innerHTML += `
      <div id="${influencer.name}-${influencer.id}" class="card ${influencer.id === activeCard + 1 ? 'active' : ''}">
        <div class="name">${influencer.name}</div>
        <div class="flex-row"><i class="fab fa-youtube"></i><span>${influencer.youtube}</span></div>
        <div class="flex-row"><i class="fab fa-facebook-square"></i><span>${influencer.fb}</span></div>
        <div class="flex-row"><i class="fab fa-instagram"></i><span>${influencer.ig}</span></div>
      </div>`
  })
}