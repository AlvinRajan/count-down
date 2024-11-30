const dayel =document.getElementById("day");
const hourel =document.getElementById("hour");
const minel =document.getElementById("minute");
const secel =document.getElementById("second");
const monthel=document.getElementById("month");

const newyaer=new Date( "jan 1, 2025 00:00:00").getTime();


function updateyear(){
    const now =new Date().getTime();
    const gap =newyaer - now;
    
    const date =new Date();
    const nextYear = date.getFullYear() + 1;
    const newYearDate = new Date(nextYear, 0, 1);
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour *24;
     
    const d=Math.floor(gap/day);
    const h=Math.floor((gap%day)/hour);
    const m=Math.floor((gap%hour)/minute);
    const s=Math.floor((gap%minute)/second);
    
    dayel.innerText=d;
    hourel.innerText=h;
    minel.innerText=m;
    secel.innerText=s;
    setTimeout(updateyear,1000)
}
updateyear();