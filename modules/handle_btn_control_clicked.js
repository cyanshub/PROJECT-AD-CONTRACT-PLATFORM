// 進行 DOM 操作選取物件
const form = document.getElementById('a-form')
const formParts = form.querySelectorAll('.part')
const stepControl = document.getElementById('step-control')
const steps = stepControl.querySelectorAll('.step')
const btnControl = document.getElementById('btn-control')
const nextBtn = btnControl.querySelector('.btn-primary')
const prevBtn = btnControl.querySelector('.btn-outline')

// 定義變數
let step = 0

// 定義按鈕失效互動
function setBtnDisabled(step) {
  if (step === 0) {
    prevBtn.setAttribute('disabled', 'disabled')
  } else {
    prevBtn.removeAttribute('disabled')
  }
  if (step === 2) {
    nextBtn.innerHTML = '送出申請'
  } else {
    nextBtn.innerHTML = '下一步'
  }
}


export function handleBtnControlClicked(e) {
  e.preventDefault()
  const nowStep = steps[step]
  if (e.target.matches('.btn-primary')) {
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
    nowStep.classList.remove('checked')
    prevStep.classList.remove('checked')
    prevStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step - 1].classList.toggle('d-none')
    step -= 1
  }
  setBtnDisabled(step)
}


