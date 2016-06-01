
$(document).ready(function(){
    $(document).on("click", "#startRecording", function () {   
        Fr.voice.record();
        console.log("start");
        });
    });

$(document).on("click", "#stopRecording", function(){
    Fr.voice.stop();
    alert("stop");
    });

$(document).on("click", "#playRecording", function(){
        Fr.voice.export(function(url){
            $("#audio").attr("src", url);
            $("#audio")[0].play();
        }, "URL");
        Fr.voice.stop();
        alert("play");
    });

    $(document).on("click", "#download:not(.disabled)", function(){
        Fr.voice.export(function(url){
            $("<a href='"+url+"' download='MyRecording.wav'></a>")[0].click();
        }, "URL");
        restore();
    });

    $(document).on("click", "#base64:not(.disabled)", function(){
        Fr.voice.export(function(url){
            console.log("Here is the base64 URL : " + url);
            alert("Check the web console for the URL");

            $("<a href='"+ url +"' target='_blank'></a>")[0].click();
        }, "base64");
        restore();
    });

   /**
 * Created by Dario on 26/05/2016.
 */
