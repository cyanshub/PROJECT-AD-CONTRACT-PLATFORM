// 載入封包函式
import {setBtnDisabled} from "./set_btn_disabled.js"
export function handleBtnControlClicked(e) {
  e.preventDefault()
  const nowStep = steps[step]
  if (e.target.matches('.btn-primary') && e.target.innerHTML === '下一步') {
    const nextStep = steps[step + 1]
    nowStep.classList.remove('active')
    nowStep.classList.add('checked')
    nextStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step + 1].classList.toggle('d-none')
    step += 1
  } else if (e.target.matches('.btn-outline')) {
    const prevStep = steps[step - 1]
    nowStep.classList.remove('active')
    prevStep.classList.remove('checked')
    prevStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step - 1].classList.toggle('d-none')
    step -= 1
  }
  setBtnDisabled()
}
