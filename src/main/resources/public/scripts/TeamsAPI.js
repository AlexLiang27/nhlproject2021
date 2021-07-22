

$.getJSON("https://statsapi.web.nhl.com/api/v1/teams", function(data) {
    console.log(data);


    
    var teamname = data.teams[0].teamName;
    var location = data.teams[0].locationName;
    var division = data.teams[0].division.name;
    var venue = data.teams[0].venue.name;
    var abbre = data.teams[0].abbreviation;
    var creation = data.teams[0].firstYearOfPlay;

    $(".teamname").append(teamname);
    $(".location").append(location);
    $(".division").append(division);
    $(".venue").append(venue);
    $(".abbre").append(abbre);
    $(".creation").append(creation);
});