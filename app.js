// 載入封包函式
import { handleCardClicked } from "./modules/handle_card_clicked.js"
import { handleBtnControlClicked } from "./modules/handle_btn_control_clicked.js"
import { renderCardList } from "./modules/render_card_list.js"

// 進行 DOM 操作選取物件
const cardList = document.getElementById('card-list')
const btnControl = document.getElementById('btn-control')

renderCardList() // 渲染網紅清單的函式
cardList.addEventListener('click', handleCardClicked)
btnControl.addEventListener('click', handleBtnControlClicked)