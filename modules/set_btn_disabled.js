export function setBtnDisabled() {
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
