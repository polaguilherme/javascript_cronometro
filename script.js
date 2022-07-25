var min= 00
var seg = 00
var hr = 00
var tempo = 1000
var tmp

function start(params) {
   tmp = setInterval(() => {watch()}, tempo)  
}
function pause(params) {
    clearInterval(tmp)
}
function zerar(params) {
    clearInterval(tmp)
    hr=00
    min=00
    seg=00
    document.getElementById('tmp').innerText='00:00:00'
}
function watch(params) {
    seg++
    if(seg==60){
        min++
        seg=0
        if(min==60){
            hr++
            min=0
        }
    }  
    var format = (hr < 10 ? '0'+ hr:hr) + ':'+(min < 10 ? '0'+ min : min)+ ':' +(seg < 10 ? '0'+ seg : seg) 
    document.getElementById('tmp').innerText = format
  
}
