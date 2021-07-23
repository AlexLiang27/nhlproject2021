$.getJSON("https://statsapi.web.nhl.com/api/v1/teams", function(data) {
    console.log(data);
    var regex = new RegExp(/[^?]*$/g);
    var teamNumber = parseInt(regex.exec(window.location.href));

    $(".teamname").append(data.teams[teamNumber].teamName);
    $(".location").append(data.teams[teamNumber].locationName);
    $(".division").append(data.teams[teamNumber].division.name);
    $(".venue").append(data.teams[teamNumber].venue.name);
    $(".abbre").append(ata.teams[teamNumber].abbreviation);
    $(".creation").append(data.teams[teamNumber].firstYearOfPlay);
});