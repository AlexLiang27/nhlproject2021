

$.getJSON("https://statsapi.web.nhl.com/api/v1/teams", function(data) {
    console.log(data);
    
    var teamname = data.teams[0].name;

    $(".teamname").append(teamname);
});