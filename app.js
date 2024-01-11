// 提取 json 檔案陣列資料的方法: 網紅資料
import data from "./data.json" assert{type: "json"}
const influencers = data.influencers
console.log(influencers)


// 載入封包函式
import { handleCardClicked } from "./modules/handle_card_clicked.js"
import { handleBtnControlClicked } from "./modules/handle_btn_control_clicked.js"


// 進行 DOM 操作選取物件
const cardList = document.getElementById('card-list')
const form = document.getElementById('a-form')
const formParts = form.querySelectorAll('.part')
const stepControl = document.getElementById('step-control')
const steps = stepControl.querySelectorAll('.step')
const btnControl = document.getElementById('btn-control')
const nextBtn = btnControl.querySelector('.btn-primary')
const prevBtn = btnControl.querySelector('.btn-outline')

let activeCard = 0
let step = 0

  ; (function () {
    influencers.forEach((influencer) => {
      cardList.innerHTML += `
        <div id="${influencer.name}-${influencer.id}" class="card ${influencer.id === activeCard + 1 ? 'active' : ''
        }">
        <div class="name">${influencer.name}</div>
        <div class="flex-row"><i class="fab fa-youtube"></i><span>${influencer.youtube
        }</span></div>
        <div class="flex-row"><i class="fab fa-facebook-square"></i><span>${influencer.fb
        }</span></div>
        <div class="flex-row"><i class="fab fa-instagram"></i><span>${influencer.ig
        }</span></div>
        </div>
     `
    })
  })()


cardList.addEventListener('click', handleCardClicked)
btnControl.addEventListener('click', handleBtnControlClicked)
