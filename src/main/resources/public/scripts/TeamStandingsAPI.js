$.getJSON("https://statsapi.web.nhl.com/api/v1/standings", function(data) {
    var divisions = new Array(4);
    
    for(let i = 0; i < data.records.length; i++) {
        divisions[i] = new Array(data.records[i].teamRecords.length);
        for(let j = 0; j < data.records[i].teamRecords.length; j++) {
            divisions[i][j] = (data.records[i].teamRecords[j]);
        }
        bubbleSort(divisions[i], divisions.length);
        
        document.getElementById("standings").innerHTML+='<table class="table table-dark table-striped"><thead><tr><th scope="col">Rank</th><th scope="col"><p class = "division'+i+'"></p></th><th scope="col">Wins</th><th scope="col">Losses</th><th scope="col">Games Played</th><th scope="col">Goals Against</th><th scope="col">Goals Scored</th><th scope="col">Points</th><th scope="col">Streak</th></tr></thead></table>';
        document.getElementsByClassName("division"+i)[0].innerHTML+=data.records[i].division.name;
        //document.getElementById("standings").innerHTML+='<tbody></tbody>';
        //console.log( document.getElementById("row"+i));
        

        // for(let j = 0; j < data.records[i].teamRecords.length; j++) {
        //     document.getElementById("row"+i).innerHTML+='<tr><th scope="row">+'+j+1+'</th><td id="teamName'+i+'"></td><td id="wins'+i+'"></td><td id="losses'+i+'"></td><td id="games'+i+'"></td><td id="GA'+i+'"></td><td id="GS'+i+'"></td><td id="points'+i+'"></td><td id="streak'+i+'"></td></tr>';
        //     document.getElementById(teamName+i).innterHTML+=divisions[i][j].team.name;
        //     document.getElementById(wins+i).innterHTML+=divisions[i][j].leagueRecord.wins;
        //     document.getElementById(losses+i).innterHTML+=divisions[i][j].leagueRecord.losses;
        //     document.getElementById(games+i).innterHTML+=divisions[i][j].gamesPlayed;
        //     document.getElementById(GA+i).innterHTML+=divisions[i][j].goalsAgainst;
        //     document.getElementById(GS+i).innterHTML+=divisions[i][j].goalsScored;
        //     document.getElementById(points+i).innterHTML+=divisions[i][j].points;
        //     document.getElementById(streak+i).innterHTML+=divisions[i][j].streak.streakCode;
        // }
    }
    console.log(document.getElementById("standings"));

});

function swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function bubbleSort( arr, n){
    var i, j;
    for (i = 0; i < n-1; i++){
        for (j = 0; j < n-i-1; j++){
            
            if (arr[j].divisionRank > arr[j+1].divisionRank) {
                swap(arr,j,j+1);
            }
        }
    }
}

