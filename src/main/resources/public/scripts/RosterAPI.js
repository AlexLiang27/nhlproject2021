
var reg = new RegExp(/[^=]*$/g);
var teamNum = parseInt(reg.exec(window.location.href));
var count = 0;
var playerID = [];
var tableLength = 0;
$.getJSON("https://statsapi.web.nhl.com/api/v1/teams/"+teamNum+"/roster", function(data) {
    tableLength = parseInt(data.roster.length/5)*5 + 5;
    console.log(tableLength);
    for(var k=0;k<tableLength;k++){
        if(k%5==0){
            if(k!=0){
                count++;
            }
            document.getElementById("cards").innerHTML+='<div class="card-group" id="row'+count+'"></div>';
        }
        if(document.getElementById(("row"+count))!=null){
            if(k<data.roster.length){
                document.getElementById("row"+count).innerHTML+="<div class='card'><img id='player"+k+"' src='https://nhl.bamcontent.com/images/headshots/current/168x168/8477972.jpg' style='width: 37%; height: auto; ' class='card-img-top rounded mx-auto d-block'><div class='card-body'><h5 style='color: black'>Name:</h5><p class='fullname"+k+"' style='color:black;'></p><h5 style='color: black'>Jersey #:</h5><p class='number"+k+"' style='color:black;'></p><h5 style='color: black'>Position:</h5><p class='position"+k+"' style='color:black;'></p><a id='teamRoster' href='/playerstats?id="+data.roster[k].person.id+"' class='btn btn-primary'>Player Stats</a></div></div>";
                document.getElementsByClassName("fullname"+k)[0].innerHTML+=data.roster[k].person.fullName;
                document.getElementsByClassName("number"+k)[0].innerHTML+=data.roster[k].jerseyNumber;
                document.getElementsByClassName("position"+k)[0].innerHTML+=data.roster[k].position.name;
                playerID.push(data.roster[k].person.id);
            }
            else{
                document.getElementById("row"+count).innerHTML+="<div class='card'> <img id='player"+k+"' src='' style='width: 37%; height: auto; ' class='card-img-top rounded mx-auto d-block'><div class='card-body'><h5 style='color: black'></h5><p class='fullname"+k+"' style='color:black;'></p><h5 style='color: black'></h5><p class='number"+k+"' style='color:black;'></p><h5 style='color: black'></h5><p class='position"+k+"' style='color:black;'></p></div></div>";
            }
        }
    }
    for(var k = 0;k<tableLength;k++){
        if(k<data.roster.length){
            console.log("http://nhl.bamcontent.com/images/headshots/current/168x168/"+playerID[k]+".jpg")
            document.getElementById("player"+k).src="http://nhl.bamcontent.com/images/headshots/current/168x168/"+playerID[k]+".jpg";
        }
    }

});