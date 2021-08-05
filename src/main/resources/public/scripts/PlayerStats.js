var reg = new RegExp(/[^=]*$/g);
var playerNum = parseInt(reg.exec(window.location.href));
console.log("Player URL: "+playerNum);
$.when(
    $.getJSON("https://statsapi.web.nhl.com/api/v1/people/"+playerNum+"/stats?stats=statsSingleSeason&season=20202021"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/people/"+playerNum)
).done(function(data2, data1) {
    console.log(data1[0].people[0]);
    $(".fullName").append(data1[0].people[0].fullName);
    $(".birthDate").append(data1[0].people[0].birthDate);
    $(".currentAge").append(data1[0].people[0].currentAge);
    $(".birthCity").append(data1[0].people[0].birthCity);
    $(".nationality").append(data1[0].people[0].nationality);
    $(".height").append(data1[0].people[0].height);
    $(".weight").append(data1[0].people[0].weight);
    $(".shootsCatches").append(data1[0].people[0].shootsCatches);
    $(".timeOnIcePerGame").append(data2[0].stats[0].splits[0].stat.timeOnIcePerGame);
    $(".assists").append(data2[0].stats[0].splits[0].stat.assists);
    $(".goals").append(data2[0].stats[0].splits[0].stat.goals);
    $(".shots").append(data2[0].stats[0].splits[0].stat.shots);
    $(".games").append(data2[0].stats[0].splits[0].stat.games);
    $(".hits").append(data2[0].stats[0].splits[0].stat.hits);
    $(".faceOffPct").append(data2[0].stats[0].splits[0].stat.faceOffPct);
    $(".gameWinningGoals").append(data2[0].stats[0].splits[0].stat.gameWinningGoals);
    $(".blocked").append(data2[0].stats[0].splits[0].stat.blocked);
    $(".plusMinus").append(data2[0].stats[0].splits[0].stat.plusMinus);
    $(".points").append(data2[0].stats[0].splits[0].stat.points);

    document.getElementById("playerImg").src = "http://nhl.bamcontent.com/images/headshots/current/168x168/"+playerNum+".jpg";
});