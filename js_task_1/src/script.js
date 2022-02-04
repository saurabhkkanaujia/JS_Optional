function calc(){
    l = parseInt(document.getElementById('length').value);
    b = parseInt(document.getElementById('breadth').value);
    let per = 2*(l+b);
    let area = l*b;
    document.getElementById('area').innerHTML="Area is "+area+" sq. mtr.";
    document.getElementById('per').innerHTML="Perimeter is "+per+" mtr.";
}