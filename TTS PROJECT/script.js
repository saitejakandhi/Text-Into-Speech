const synth = window.speechSynthesis;
let voices = [];

speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices();
};

function speak(){
  let text = document.getElementById("text").value.trim();

  if(text === ""){
    alert("Please enter text");
    return;
  }

  let utter = new SpeechSynthesisUtterance(text);
  let isTelugu = /[\u0C00-\u0C7F]/.test(text);

  if(isTelugu){
    utter.voice = voices.find(v => v.lang === "te-IN");
  } else {
    utter.voice = voices.find(v => v.lang === "en-US");
  }

  synth.cancel();
  synth.speak(utter);
}
