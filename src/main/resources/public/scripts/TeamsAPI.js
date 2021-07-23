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

    document.getElementById("teamImg").src = map.get(teamNumber);
    document.getElementById("teamRoster").onclick = function() {
        document.getElementById("teamRoster").href="/teamroster?id="+data.teams[teamNumber].id;
    }

});
