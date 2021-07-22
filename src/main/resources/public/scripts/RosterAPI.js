
$.when(
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/1/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/2/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/3/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/4/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/5/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/6/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/7/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/8/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/9/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/10/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/12/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/13/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/14/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/15/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/16/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/17/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/18/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/19/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/20/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/21/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/22/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/23/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/24/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/25/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/26/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/28/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/29/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/30/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/52/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/53/roster"),
    $.getJSON("https://statsapi.web.nhl.com/api/v1/teams/54/roster")
    ).done(function(NJD,NYI,NYR,PHI,PIT,BOS,BUF,MTL,OTT,TOR,CAR,FLA,TBL,WSH,CHI,DET,NSH,STL,CGY,COL,EDM,VAN,ANA,DAL,LAK,SJS,CBJ,MIN,WPG,ARI,VGK) {
    console.log(NJD);
    
    


    var fullname = NJD[0].roster[0].person.fullName;
    var number = NJD[0].roster[0].jerseyNumber;
    var position = NJD[0].roster[0].position.name;
    var fullname1 = NJD[0].roster[1].person.fullName;
    var number1 = NJD[0].roster[1].jerseyNumber;
    var position1 = NJD[0].roster[1].position.name;
    var fullname2 = NJD[0].roster[2].person.fullName;
    var number2 = NJD[0].roster[2].jerseyNumber;
    var position2 = NJD[0].roster[2].position.name;
    var fullname3 = NJD[0].roster[3].person.fullName;
    var number3 = NJD[0].roster[3].jerseyNumber;
    var position3 = NJD[0].roster[3].position.name;
    var fullname4 = NJD[0].roster[4].person.fullName;
    var number4 = NJD[0].roster[4].jerseyNumber;
    var position4 = NJD[0].roster[4].position.name;
    var fullname5 = NJD[0].roster[5].person.fullName;
    var number5 = NJD[0].roster[5].jerseyNumber;
    var position5 = NJD[0].roster[5].position.name;
    var fullname6 = NJD[0].roster[6].person.fullName;
    var number6 = NJD[0].roster[6].jerseyNumber;
    var position6 = NJD[0].roster[6].position.name;
    var fullname7 = NJD[0].roster[7].person.fullName;
    var number7 = NJD[0].roster[7].jerseyNumber;
    var position7 = NJD[0].roster[7].position.name;
    var fullname8 = NJD[0].roster[8].person.fullName;
    var number8 = NJD[0].roster[8].jerseyNumber;
    var position8 = NJD[0].roster[8].position.name;
    var fullname9 = NJD[0].roster[9].person.fullName;
    var number9 = NJD[0].roster[9].jerseyNumber;
    var position9 = NJD[0].roster[9].position.name;
    var fullname10 = NJD[0].roster[10].person.fullName;
    var number10 = NJD[0].roster[10].jerseyNumber;
    var position10 = NJD[0].roster[10].position.name;
    var fullname11 = NJD[0].roster[11].person.fullName;
    var number11 = NJD[0].roster[11].jerseyNumber;
    var position11 = NJD[0].roster[11].position.name;
    var fullname12 = NJD[0].roster[12].person.fullName;
    var number12 = NJD[0].roster[12].jerseyNumber;
    var position12 = NJD[0].roster[12].position.name;
    var fullname13 = NJD[0].roster[13].person.fullName;
    var number13 = NJD[0].roster[13].jerseyNumber;
    var position13 = NJD[0].roster[13].position.name;
    var fullname14 = NJD[0].roster[14].person.fullName;
    var number14 = NJD[0].roster[14].jerseyNumber;
    var position14 = NJD[0].roster[14].position.name;
    var fullname15 = NJD[0].roster[15].person.fullName;
    var number15 = NJD[0].roster[15].jerseyNumber;
    var position15 = NJD[0].roster[15].position.name;
    var fullname16 = NJD[0].roster[16].person.fullName;
    var number16 = NJD[0].roster[16].jerseyNumber;
    var position16 = NJD[0].roster[16].position.name;
    var fullname17 = NJD[0].roster[17].person.fullName;
    var number17 = NJD[0].roster[17].jerseyNumber;
    var position17 = NJD[0].roster[17].position.name;
    var fullname18 = NJD[0].roster[18].person.fullName;
    var number18 = NJD[0].roster[18].jerseyNumber;
    var position18 = NJD[0].roster[18].position.name;
    var fullname19 = NJD[0].roster[19].person.fullName;
    var number19 = NJD[0].roster[19].jerseyNumber;
    var position19 = NJD[0].roster[19].position.name;
    var fullname20 = NJD[0].roster[20].person.fullName;
    var number20 = NJD[0].roster[20].jerseyNumber;
    var position20 = NJD[0].roster[20].position.name;
    var fullname21 = NJD[0].roster[21].person.fullName;
    var number21 = NJD[0].roster[21].jerseyNumber;
    var position21 = NJD[0].roster[21].position.name;
    var fullname22 = NJD[0].roster[22].person.fullName;
    var number22 = NJD[0].roster[22].jerseyNumber;
    var position22 = NJD[0].roster[22].position.name;
    var fullname23 = NJD[0].roster[23].person.fullName;
    var number23 = NJD[0].roster[23].jerseyNumber;
    var position23 = NJD[0].roster[23].position.name;
    var fullname24 = NJD[0].roster[24].person.fullName;
    var number24 = NJD[0].roster[24].jerseyNumber;
    var position24 = NJD[0].roster[24].position.name;
    var fullname25 = NJD[0].roster[25].person.fullName;
    var number25 = NJD[0].roster[25].jerseyNumber;
    var position25 = NJD[0].roster[25].position.name;

    $(".fullname").append(fullname);
    $(".number").append(number);
    $(".position").append(position);
    $(".fullname1").append(fullname1);
    $(".number1").append(number1);
    $(".position1").append(position1);
    $(".fullname2").append(fullname2);
    $(".number2").append(number2);
    $(".position2").append(position2);
    $(".fullname3").append(fullname3);
    $(".number3").append(number3);
    $(".position3").append(position3);
    $(".fullname4").append(fullname4);
    $(".number4").append(number4);
    $(".position4").append(position4);
    $(".fullname5").append(fullname5);
    $(".number5").append(number5);
    $(".position5").append(position5);
    $(".fullname6").append(fullname6);
    $(".number6").append(number6);
    $(".position6").append(position6);
    $(".fullname7").append(fullname7);
    $(".number7").append(number7);
    $(".position7").append(position7);
    $(".fullname8").append(fullname8);
    $(".number8").append(number8);
    $(".position8").append(position8);
    $(".fullname9").append(fullname9);
    $(".number9").append(number9);
    $(".position9").append(position9);
    $(".fullname10").append(fullname10);
    $(".number10").append(number10);
    $(".position10").append(position10);
    $(".fullname11").append(fullname11);
    $(".number11").append(number11);
    $(".position11").append(position11);
    $(".fullname12").append(fullname12);
    $(".number12").append(number12);
    $(".position12").append(position12);
    $(".fullname13").append(fullname13);
    $(".number13").append(number13);
    $(".position13").append(position13);
    $(".fullname14").append(fullname14);
    $(".number14").append(number14);
    $(".position14").append(position14);
    $(".fullname15").append(fullname15);
    $(".number15").append(number15);
    $(".position15").append(position15);
    $(".fullname16").append(fullname16);
    $(".number16").append(number16);
    $(".position16").append(position16);
    $(".fullname17").append(fullname17);
    $(".number17").append(number17);
    $(".position17").append(position17);
    $(".fullname18").append(fullname18);
    $(".number18").append(number18);
    $(".position18").append(position18);
    $(".fullname19").append(fullname19);
    $(".number19").append(number19);
    $(".position19").append(position19);
    $(".fullname20").append(fullname20);
    $(".number20").append(number20);
    $(".position20").append(position20);
    $(".fullname21").append(fullname21);
    $(".number21").append(number21);
    $(".position21").append(position21);
    $(".fullname22").append(fullname22);
    $(".number22").append(number22);
    $(".position22").append(position22);
    $(".fullname23").append(fullname23);
    $(".number23").append(number23);
    $(".position23").append(position23);
    $(".fullname24").append(fullname24);
    $(".number24").append(number24);
    $(".position24").append(position24);
    $(".fullname25").append(fullname25);
    $(".number25").append(number25);
    $(".position25").append(position25);
    $(".fullname26").append(fullname26);
    $(".number26").append(number26);
    $(".position26").append(position26);
    

});