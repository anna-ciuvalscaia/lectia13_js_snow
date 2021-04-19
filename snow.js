
const N_FLAKES = 25

let flakes_x = []

let flakes_y = []

let clickOn = false

const N_PAUSE = 1

let fallTimer = [setInterval( fall, 20 )]    

let clear = []

let size = 5

function generateCoords() {
    for(let i = 0; i < N_FLAKES; i++)  {
        flakes_x[i] = parseInt( Math.random() * 500)
        flakes_y[i] = -parseInt( Math.random() * 300)
       }
}

function drawFlake( i ){
    snowContainer.innerHTML += `
      <div class="flake"
      style="
      width: ${size}px;
      height: ${size}px;
      left: ${flakes_x[i]}px;
      top: ${flakes_y[i]}px;
      "
      >
      </div>
    `
}

function drawAllFlakes() {
    snowContainer.innerHTML = ``
  for(let i = 0; i < N_FLAKES; i++)  {
    // size flakes ???? 
   size = Math.round( Math.random(i) * 10)  
   drawFlake(i) 
   
  }
}


function fall() {
    for(let i = 0; i < N_FLAKES; i++)  {
        flakes_y[i] += 5
        if(flakes_y[i] > 500){
            flakes_y[i] = -parseInt( Math.random() * 500)
        }
       }
       drawAllFlakes()  
}

generateCoords()
drawAllFlakes()


function pause(){
    if(clickOn){
      // console.log('start')
      clickOn = false
      start()    
  } else {
      // console.log('stop')
      clickOn = true
      stop() 
  }   
}

function start(){
for(let i = 0; i < N_PAUSE; i++)  {
  fallTimer[i] = setInterval(fall, 20)
  }  
}


function stop() {
    for(let i = 0; i < N_PAUSE; i++)  {
        clear[i] = clearInterval(fallTimer[i])
        } 
}  
        
      
        
        

   




