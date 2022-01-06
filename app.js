var birthdate= new Date("Sept 11, 2022 00:00:00").getTime();

var func= setInterval(function(){

    var now= new Date().getTime();
    var timeleft=  birthdate-now;
    var days= Math.floor (timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor ((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor ((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor ((timeleft % (1000 * 60)) / (1000));

    
    document.getElementById("days").innerHTML= days + "days: "
    document.getElementById("hours").innerHTML= hours + "hours: "
    document.getElementById("min").innerHTML= min + "mins: "
    document.getElementById("sec").innerHTML= sec + "sec  "
    if(timeleft<0){
            clearInterval(func);
            document.getElementById("days").innerHTML = ""
            document.getElementById("hours").innerHTML = ""
            document.getElementById("min").innerHTML = ""
            document.getElementById("sec").innerHTML = ""
            document.getElementById("end").innerHTML = "You are not 19 anymore, you are 20. Welcome to the league";
    }
},1000);
