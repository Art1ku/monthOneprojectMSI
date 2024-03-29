function trafficLight(){
    const red =document.getElementById('red')
    const yellow =document.getElementById('yellow')
    const yellow1 =document.getElementById('yellow1')
    const green =document.getElementById('green')
    function Red(){
        red.style.backgroundColor='red'
        yellow.style.backgroundColor='rgba(157, 157, 0, 0.533)'
        green.style.backgroundColor='rgb(0, 104, 0)'
        setTimeout(Yellow, 2000)

    }
    function Yellow(){
        red.style.backgroundColor='rgb(154, 0, 0)'
        yellow.style.backgroundColor='yellow'
        green.style.backgroundColor='rgb(0, 104, 0)'
        setTimeout(Green, 2000)
        
    }
    function Green(){
        red.style.backgroundColor='rgb(154, 0, 0)'
        yellow.style.backgroundColor='rgba(157, 157, 0, 0.533)'
        green.style.backgroundColor='rgb(0, 219, 26)'
        setTimeout(Yellow1, 2000)
        
    }
    function Yellow1(){
        red.style.backgroundColor='rgb(154, 0, 0)'
        yellow.style.backgroundColor='yellow'
        green.style.backgroundColor='rgb(0, 104, 0)'
        setTimeout(Red, 2000)
        
    }

    Red()


}

trafficLight()