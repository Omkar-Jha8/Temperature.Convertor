const cal =()=>{
    const val = document.getElementById('value').value;
    const typ = document.getElementById('type').value;
    const result = document.getElementById('out');
    if(typ=="cel" && val==1){
        result.innerHTML=val*33.8+" Fahrenheit";
    }
    if(typ=="cel" && val>1){
        result.innerHTML=32+(1.8*val)+" Fahrenheit";
    }
    else if(typ=="fah"&&val==1){
        result.innerHTML=-17.2222+" Celsius";
    }
    else if(typ=="fah"&&val>1){
        result.innerHTML=-(17.7777)+(val*0.5555)+" Celsius";
    }
}
