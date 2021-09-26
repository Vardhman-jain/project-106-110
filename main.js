var dog=0;
var cat=0;
var cow=0;
var lion=0;
function Classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4zNyHC6yH/model.json",modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        red=Math.floor(Math.random()*255 + 1);
        green=Math.floor(Math.random()*255 + 1);
        blue=Math.floor(Math.random()*255 + 1);

        document.getElementById("result_label").innerHTML='I can hear - '+ results[0].label;
        document.getElementById("result_count").innerHTML='Detected Dog- '+dog+ ',Detected Cat- ' +cat+ ',Detected Cow- '+cow+ ',Detected lion- ' +lion;
        document.getElementById('result_label').style.color="rgb("+r+','+g+','+b+')';
        document.getElementById('result_count').style.color="rgb("+r+','+g+','+b+')';

        img=document.getElementById("animal_img");
        label=results[0].label;

        if (label =='barking') {
            img.src='https://shravaripatil.github.io/Sound_controlled_animals/bark.gif';
            dog=dog+1;
        }else if(label =='meowing'){
            img.src='https://shravaripatil.github.io/Sound_controlled_animals/meow.gif';
            cat=cat+1;
        }else if (label =='mooing') {
            img.src='mooooo.gif';
            cow=cow+1;
        } else if(label =='roar'){
            img.src='roar.gif';
            lion=lion+1;
        }else if('Background Noise'){
            img.src='https://shravaripatil.github.io/Sound_controlled_animals/listen.gif';
        }
    }
}