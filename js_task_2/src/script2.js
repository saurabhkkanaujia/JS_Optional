function convert(){
    time = parseInt(document.getElementById('time_txt').value);
    var res, unit;
    if (document.getElementById('rad1').checked == true){
        res = time*60;
        unit = ' mins';
    }
    else if (document.getElementById('rad2').checked == true){
        res = time*3600;
        unit = ' sec';
    }
    document.getElementById('result').innerHTML = "1 Hour = "+res+unit;
}