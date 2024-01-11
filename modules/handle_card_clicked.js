export function handleCardClicked({ target }) {
  const cards = cardList.querySelectorAll('.card')
  const node = target.closest('.card')
  if (node) {
    const idArr = node.id.split('-')
    const num = Number(idArr[idArr.length - 1])
    cards[activeCard].classList.remove('active')
    cards[num - 1].classList.add('active')
    activeCard = num - 1
  }
}
