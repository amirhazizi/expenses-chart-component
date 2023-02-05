// get Json file
fetch("../data.json")
  .then((response) => response.json())
  .then((json) => setBarDetails(json))

const bars = document.querySelectorAll(".bar")
const barsText = document.querySelectorAll(".bar-text")
bars.addEventListener("click", (e) => {})
function setBarDetails(obj) {
  bars.forEach((item, index) => {
    if (item.dataset.id === barsText[index].dataset.id) {
      if (obj[index].day === barsText[index].dataset.id) {
        barsText[index].textContent = `$${obj[index].amount}`
      }
    }
    if (obj[index].day === item.dataset.id) {
      item.style.height = `${obj[index].amount * 2.5}px`
    }
  })
  let amounts = []
  obj.forEach((item) => {
    amounts.push(item.amount)
  })
  let maxAmount = Math.ceil(Math.max(...amounts) / 18)
  console.log(maxAmount)
}
