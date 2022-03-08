var str;

function convert(){
    str = document.getElementById("textbox1").value;
    str = str.trim();
    var msg = new SpeechSynthesisUtterance();
    msg.text = str;
    window.speechSynthesis.speak(msg);
}