
let hour = document.querySelector('.hour')
let minutes = document.querySelector('.minute')
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

  hour.innerHTML= getHour
  minutes.innerHTML = getMinutes

  console.log('function just ran')
}

function updateDate(){
  const months =[
    "January","February","March","April","June","July","August","September","October","November","December"
  ]

  let getMonth 

}

updateTime()


// console.log(`${date.getHours()}:${date.getMinutes()}`)


