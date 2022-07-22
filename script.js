// -----------------------------INITIALIZATION----------------------------------------------
let display1 = document.getElementById('num1-display')
let homeCount = 0
let display2 = document.getElementById('num2-display')
let awayCount = 0 


// ------------------------FUNCTION TO INCREASE THE HOME SCORE-----------------------------------
function add1(){                                                                                
    homeCount ++                                                                               
    display1.innerText=homeCount                                                              
}                                                                                            
                                                                                            
function add2(){                                                                           
    homeCount=homeCount + 2                                                               
    display1.innerText=homeCount                                                         
}                                                                                       
function add3(){                                                                       
    homeCount=homeCount + 3                                                           
    display1.innerText=homeCount                                                    
}                                                                                   
// -----------------------FUNCTION TO INCREASE THE AWAY SCORE-----------------------------------


function awayAdd1(){
    awayCount ++
    display2.innerText=awayCount
}

function awayAdd2(){
    awayCount=awayCount + 2
    display2.innerText=awayCount
}
function awayAdd3(){
    awayCount=awayCount + 3
    display2.innerText=awayCount
}

// ------------------------FUNCTION TO RESET COUNT-----------------------------------------------

function reset1(){
    homeCount = 0
     display1.innerText=homeCount
}

function reset2(){
    awayCount = 0
     display2.innerText=awayCount
}