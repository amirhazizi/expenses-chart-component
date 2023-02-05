// get Json file
fetch("../data.json")
  .then((response) => response.json())
  .then((json) => setBarDetails(json))
// variables
const bars = document.querySelectorAll(".bar")
const barsText = document.querySelectorAll(".bar-text")
// dynamic bar details
function setBarDetails(obj) {
  bars.forEach((item, index) => {
    if (item.dataset.id === barsText[index].dataset.id) {
      if (obj[index].day === barsText[index].dataset.id) {
        barsText[index].textContent = `$${obj[index].amount}`
      }
    }
    if (obj[index].day === item.dataset.id) {
      item.style.height = `${obj[index].amount * 3}px`
      window.addEventListener("resize", () => {
        if (self.innerWidth > 768) {
          item.style.height = `${obj[index].amount * 4}px`
        } else {
          item.style.height = `${obj[index].amount * 3}px`
        }
      })
    }
  })
}
// DOM content event
window.addEventListener("DOMContentLoaded", () => {
  const weekdays = ["sun", "mon", "tue", "wen", "thu", "fri", "sat"]
  const dayWeek = weekdays[new Date().getDay()]
  bars.forEach((item) => {
    if (item.dataset.id === dayWeek) {
      item.style.backgroundColor = "hsl(186, 34%, 60%)"
    } else {
      item.classList.add("bg-cl_Softred")
    }
  })
})
// hover bars event
bars.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    if (item.dataset.id === barsText[index].dataset.id) {
      barsText[index].classList.remove("invisible")
    }
  })
})
bars.forEach((item, index) => {
  item.addEventListener("mouseleave", () => {
    if (item.dataset.id === barsText[index].dataset.id) {
      barsText[index].classList.add("invisible")
    }
  })
})
