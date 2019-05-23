
const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const amPm = document.querySelector('.am-pm')
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const date = new Date(); 


function updateTime(){
 
  let getHour = date.getHours()
  let getMinutes = date.getMinutes()

  //format time
  if(getHour < 10){
    getHour = `0${getHour}`
  }

  if(getMinutes < 10){
    getMinutes = `0${getMinutes}`
  }
  //Updte AM/PM
  (getHour >= 12)? amPm.innerHTML = 'PM': amPm.innerHTML = 'AM'

  hour.innerHTML= getHour
  minutes.innerHTML = getMinutes

}

function updateDate(){
  const months =[
    "January","February","March","April","May","June","July","August","September","October","November","December"
  ]

  let getMonth = date.getMonth()
  let getDay = date.getDate()

  month.innerHTML = months[getMonth];
  day.innerHTML = getDay;

}

updateTime()
updateDate()

setTimeout(updateTime,1000)


// console.log(`${date.getHours()}:${date.getMinutes()}`)


