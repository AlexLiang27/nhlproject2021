$.getJSON("https://statsapi.web.nhl.com/api/v1/teams", function(data) {
    console.log(data);
    var regex = new RegExp(/[^=]*$/g);
    var teamNumber = parseInt(regex.exec(window.location.href));

    $(".teamname").append(data.teams[teamNumber].teamName);
    $(".location").append(data.teams[teamNumber].locationName);
    $(".division").append(data.teams[teamNumber].division.name);
    $(".venue").append(data.teams[teamNumber].venue.name);
    $(".abbre").append(data.teams[teamNumber].abbreviation);
    $(".creation").append(data.teams[teamNumber].firstYearOfPlay);

    //Nathan's harcode coding test
    var map = new Map();
    var map2 = new Map();

    map.set(9,"./LOGOS/leafs.png");
    map.set(20,"./LOGOS/oilers.png");
    map.set(28,"./LOGOS/winnipeg.png");
    map.set(7,"./LOGOS/montreal.png");
    map.set(18,"./LOGOS/calgary.png");
    map.set(8,"./LOGOS/ottawa.png");
    map.set(21,"./LOGOS/vancouver.png");
    map.set(19,"./LOGOS/avs.png");
    map.set(30,"./LOGOS/golden knights.png");
    map.set(27,"./LOGOS/wild.png");
    map.set(17,"./LOGOS/blues.png");
    map.set(29,"./LOGOS/ariz.png");
    map.set(24,"./LOGOS/kings.png");
    map.set(25,"./LOGOS/san jose.png");
    map.set(22,"./LOGOS/ducks.png");
    map.set(10,"./LOGOS/canes.png");
    map.set(11,"./LOGOS/panthers.png");
    map.set(12,"./LOGOS/light.png");
    map.set(16,"./LOGOS/preds.png");
    map.set(23,"./LOGOS/stars.png");
    map.set(14,"./LOGOS/hawks.png");
    map.set(15,"./LOGOS/wings.png");
    map.set(26,"./LOGOS/jacket.png");
    map.set(4,"./LOGOS/penguin.png");
    map.set(13,"./LOGOS/caps.png");
    map.set(5,"./LOGOS/bruins.png");
    map.set(1,"./LOGOS/isles.png");
    map.set(2,"./LOGOS/rangers.png");
    map.set(3,"./LOGOS/fly.png");
    map.set(0,"./LOGOS/devils.png");
    map.set(6,"./LOGOS/buff.png");

    map2.set(9,"https://www.nhl.com/mapleleafs");
    map2.set(20,"https://www.nhl.com/oilers");
    map2.set(28,"https://www.nhl.com/jets");
    map2.set(7,"https://www.nhl.com/canadiens");
    map2.set(18,"https://www.nhl.com/flames");
    map2.set(8,"https://www.nhl.com/senators");
    map2.set(21,"https://www.nhl.com/canucks");
    map2.set(19,"https://www.nhl.com/avalanche");
    map2.set(30,"https://www.nhl.com/goldenknights");
    map2.set(27,"https://www.nhl.com/wild");
    map2.set(17,"https://www.nhl.com/blues");
    map2.set(29,"https://www.nhl.com/coyotes");
    map2.set(24,"https://www.nhl.com/kings");
    map2.set(25,"https://www.nhl.com/sharks");
    map2.set(22,"https://www.nhl.com/ducks");
    map2.set(10,"https://www.nhl.com/hurricanes");
    map2.set(11,"https://www.nhl.com/panthers");
    map2.set(12,"https://www.nhl.com/lightning");
    map2.set(16,"https://www.nhl.com/predators");
    map2.set(23,"https://www.nhl.com/stars");
    map2.set(14,"https://www.nhl.com/blackhawks");
    map2.set(15,"https://www.nhl.com/redwings");
    map2.set(26,"https://www.nhl.com/bluejackets");
    map2.set(4,"https://www.nhl.com/penguins");
    map2.set(13,"https://www.nhl.com/capitals");
    map2.set(5,"https://www.nhl.com/bruins");
    map2.set(1,"https://www.nhl.com/islanders");
    map2.set(2,"https://www.nhl.com/rangers");
    map2.set(3,"https://www.nhl.com/flyers");
    map2.set(0,"https://www.nhl.com/devils");
    map2.set(6,"https://www.nhl.com/sabres");

    document.getElementById("officialSite").href = map2.get(teamNumber);



    document.getElementById("teamImg").src = map.get(teamNumber);
    document.getElementById("teamRoster").onclick = function() {
        document.getElementById("teamRoster").href="/teamroster?id="+data.teams[teamNumber].id;
    
    }

    
    document.getElementById("seasonStats").onclick = function() {
        document.getElementById("seasonStats").href="/seasonstats?id="+data.teams[teamNumber].id;

    }
});
