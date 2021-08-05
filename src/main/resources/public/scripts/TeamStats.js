var regex = new RegExp(/[^=]*$/g);
    var teamNumber = parseInt(regex.exec(window.location.href));

$.getJSON("https://statsapi.web.nhl.com/api/v1/teams/"+teamNumber+"/stats", function(data) {
    
    console.log(data.stats[0].splits[0].stat.gamesPlayed);
    

    $(".gamesplayed").append(data.stats[0].splits[0].stat.gamesPlayed);
    $(".wins").append(data.stats[0].splits[0].stat.wins);
    $(".losses").append(data.stats[0].splits[0].stat.losses);
    $(".ot").append(data.stats[0].splits[0].stat.ot);
    $(".points").append(data.stats[0].splits[0].stat.pts);
    $(".goalspergame").append(data.stats[0].splits[0].stat.goalsPerGame);
    $(".goalsagainstpergame").append(data.stats[0].splits[0].stat.goalsAgainstPerGame);

    //Nathan's hardcode coding test
    var map = new Map();

    map.set(10,"./LOGOS/leafs.png");
    map.set(22,"./LOGOS/oilers.png");
    map.set(52,"./LOGOS/winnipeg.png");
    map.set(8,"./LOGOS/montreal.png");
    map.set(20,"./LOGOS/calgary.png");
    map.set(9,"./LOGOS/ottawa.png");
    map.set(23,"./LOGOS/vancouver.png");

    map.set(21,"./LOGOS/avs.png");
    map.set(54,"./LOGOS/golden knights.png");
    map.set(30,"./LOGOS/wild.png");
    map.set(19,"./LOGOS/blues.png");
    map.set(53,"./LOGOS/ariz.png");
    map.set(26,"./LOGOS/kings.png");
    map.set(28,"./LOGOS/san jose.png");
    map.set(24,"./LOGOS/ducks.png");

    map.set(12,"./LOGOS/canes.png");
    map.set(13,"./LOGOS/panthers.png");
    map.set(14,"./LOGOS/light.png");
    map.set(18,"./LOGOS/preds.png");
    map.set(25,"./LOGOS/stars.png");
    map.set(16,"./LOGOS/hawks.png");
    map.set(17,"./LOGOS/wings.png");
    map.set(29,"./LOGOS/jacket.png");

    map.set(5,"./LOGOS/penguin.png");
    map.set(15,"./LOGOS/caps.png");
    map.set(6,"./LOGOS/bruins.png");
    map.set(2,"./LOGOS/isles.png");
    map.set(3,"./LOGOS/rangers.png");
    map.set(4,"./LOGOS/fly.png");
    map.set(1,"./LOGOS/devils.png");
    map.set(7,"./LOGOS/buff.png");

    document.getElementById("teamImg").src = map.get(teamNumber);
    document.getElementById("teamRoster").onclick = function() {
        document.getElementById("teamRoster").href="/teamroster?id="+data.teams[teamNumber].id;
    
    }

    
    document.getElementById("seasonStats").onclick = function() {
        document.getElementById("seasonStats").href="/seasonstats?id="+data.teams[teamNumber].id;

    }
   
});
