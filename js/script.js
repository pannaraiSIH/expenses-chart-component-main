
const url = "./data.json"
const chartBox = document.querySelector(".chart")

//get data from json file
//iterate through each element in array
//populate each element in template literal
//find current day to display different color 

const currentDay = (day) => {
    const rightNow = new Date().getDay()
    const arrayDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
    const highlightDay = arrayDays[rightNow]
    if (day == highlightDay) {
        return true
    } else {
        return false
    }
}

const myChart  = (dataItem) => {
    const {day, amount} = dataItem
    return `
    <li>
        <p class="amount">${amount}</p>
        <div class="bar" style="height:${amount * 3}px; background-color: ${currentDay(day) == true ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"};"></div>
        <p class="day">${day}</p>
    </li>`
}

async function getData() {
    const response = await fetch(url)
    const data = await response.json() 
    const dataChart = data.map((dataItem) => myChart(dataItem)).join("")
    chartBox.innerHTML = dataChart
}

getData()
