function clearDisplay()
{
    document.getElementById('text').value = " " ;
}
function display(value)
{
    document.getElementById('text').value += value;
}
function calculator(){
    var x = document.getElementById("text").value;
    var z = eval(x);
    document.getElementById("text").value = z;
}