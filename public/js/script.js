function updateTime(){
    
      const hour = document.querySelector('.hour');
      const minutes = document.querySelector('.minute');
      const amPm = document.querySelector('.am-pm')
      const month = document.querySelector('.month');
      const day = document.querySelector('.day');
      const date = new Date(); 
    
    let getHour = date.getHours()
    let getMinutes = date.getMinutes()
    
    //format time
    
    if(getMinutes < 10){
      getMinutes = `0${getMinutes}`
    }
    //Updte AM/PM
    (getHour >= 12)? amPm.innerText ='PM': amPm.innerText ='AM'
    
    hour.innerText= getHour
    minutes.innerText = getMinutes

    //Udate date
      const months =[
      "January","February","March","April","May","June","July","August","September","October","November","December"
    ]
    
    let getMonth = date.getMonth()
    let getDay = date.getDate()
    
    month.innerText = months[getMonth];
    day.innerText = getDay; 
  }
  
  // function updateDate(){
 
    
  // }
  
  updateTime()
  // updateDate()
  
  setInterval(updateTime,1000)
  
  
  // console.log(`${date.getHours()}:${date.getMinutes()}`)
  

  
  