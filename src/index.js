document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})

function handleSubmit(e) {
  e.preventDefault()
  let allSpans = Array.from(document.querySelectorAll('span'))
  allSpans.forEach(element => {
    element.style.backgroundColor = ""
  })
  let spansOneToFifteen = allSpans.filter(element => element.id.split("-")[1] < 3)
  let columnOne = allSpans.filter(element => element.id.split("-")[1] == "0")
  let columnTwo = allSpans.filter(element => element.id.split("-")[1] == "1")
  let columnFive = allSpans.filter(element => element.id.split("-")[1] == "4")
  let columnFour = allSpans.filter(element => element.id.split("-")[1] == "3")
  let input = e.currentTarget.querySelectorAll('input')[0].value
  let array = md5.array(input)
  let color = `rgb(${array[0]}, ${array[1]}, ${array[2]})`
  let i = 0
  let i2 = 0
  let i3 = 0
  array.slice(0, 15).forEach(number => {
    if (number % 2 === 0) {
      spansOneToFifteen[i].style.backgroundColor = color
    }
    i++
  })

  columnFive.forEach(element => {
    element.style.backgroundColor = columnOne[i2].style.backgroundColor
    i2++
  })

  columnFour.forEach(element => {
    element.style.backgroundColor = columnTwo[i3].style.backgroundColor
    i3++
  })


}
