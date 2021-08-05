$.getJSON("https://statsapi.web.nhl.com/api/v1/awards", function(data) {
    console.log(data);
    
    var award1 = data.awards[0].name;
    var history1 = data.awards[0].history;
    var description1 = data.awards[0].description;

    var award2 = data.awards[1].name;
    var history2 = data.awards[1].history;
    var description2 = data.awards[1].description;

    var award3 = data.awards[2].name;
    var history3 = data.awards[2].history;
    var description3 = data.awards[2].description;

    var award4 = data.awards[3].name;
    var history4 = data.awards[3].history;
    var description4 = data.awards[3].description;

    var award5 = data.awards[24].name;
    var history5 = data.awards[24].history;
    var description5 = data.awards[24].description;

    var award6 = data.awards[5].name;
    var history6 = data.awards[5].history;
    var description6 = data.awards[5].description;

    var award7 = data.awards[6].name;
    var history7 = data.awards[6].history;
    var description7 = data.awards[6].description;
    
    var award8 = data.awards[7].name;
    var history8 = data.awards[7].history;
    var description8 = data.awards[7].description;

    var award9 = data.awards[8].name;
    var history9 = data.awards[8].history;
    var description9 = data.awards[8].description;

    var award10 = data.awards[9].name;
    var history10 = data.awards[9].history;
    var description10 = data.awards[9].description;

    var award11 = data.awards[10].name;
    var history11 = data.awards[10].history;
    var description11 = data.awards[10].description;

    var award12 = data.awards[11].name;
    var history12 = data.awards[11].history;
    var description12 = data.awards[11].description;

    var award13 = data.awards[12].name;
    var history13 = data.awards[12].history;
    var description13 = data.awards[12].description;

    var award14 = data.awards[13].name;
    var history14 = data.awards[13].history;
    var description14 = data.awards[13].description;

    var award15 = data.awards[14].name;
    var history15 = data.awards[14].history;
    var description15 = data.awards[14].description;

    var award16 = data.awards[15].name;
    var history16 = data.awards[15].history;
    var description16 = data.awards[15].description;

    var award17 = data.awards[16].name;
    var history17 = data.awards[16].history;
    var description17 = data.awards[16].description;

    var award18 = data.awards[17].name;
    var history18 = data.awards[17].history;
    var description18 = data.awards[17].description;

    var award19 = data.awards[18].name;
    var history19 = data.awards[18].history;
    var description19 = data.awards[18].description;

    var award20 = data.awards[19].name;
    var history20 = data.awards[19].history;
    var description20 = data.awards[19].description;

    var award21 = data.awards[20].name;
    var history21 = data.awards[20].history;
    var description21 = data.awards[20].description;

    var award22 = data.awards[21].name;
    var history22 = data.awards[21].history;
    var description22 = data.awards[21].description;

    var award23 = data.awards[22].name;
    var history23 = data.awards[22].history;
    var description23 = data.awards[22].description;

    var award24 = data.awards[23].name;
    var history24 = data.awards[23].history;
    var description24 = data.awards[23].description;

    $(".award-title1").append(award1);
    $(".history1").append(history1);
    $(".description1").append(description1);

    $(".award-title2").append(award2);
    $(".history2").append(history2);
    $(".description2").append(description2);

    $(".award-title3").append(award3);
    $(".history3").append(history3);
    $(".description3").append(description3);

    $(".award-title4").append(award4);
    $(".history4").append(history4);
    $(".description4").append(description4);

    $(".award-title5").append(award5);
    $(".history5").append(history5);
    $(".description5").append(description5);

    $(".award-title6").append(award6);
    $(".history6").append(history6);
    $(".description6").append(description6);

    $(".award-title7").append(award7);
    $(".history7").append(history7);
    $(".description7").append(description7);

    $(".award-title8").append(award8);
    $(".history8").append(history8);
    $(".description8").append(description8);

    $(".award-title9").append(award9);
    $(".history9").append(history9);
    $(".description9").append(description9);

    $(".award-title10").append(award10);
    $(".history10").append(history10);
    $(".description10").append(description10);

    $(".award-title11").append(award11);
    $(".history11").append(history11);
    $(".description11").append(description11);

    $(".award-title12").append(award12);
    $(".history12").append(history12);
    $(".description12").append(description12);

    $(".award-title13").append(award13);
    $(".history13").append(history13);
    $(".description13").append(description13);

    $(".award-title14").append(award14);
    $(".history14").append(history14);
    $(".description14").append(description14);

    $(".award-title15").append(award15);
    $(".history15").append(history15);
    $(".description15").append(description15);

    $(".award-title16").append(award16);
    $(".history16").append(history16);
    $(".description16").append(description16);

    $(".award-title17").append(award17);
    $(".history17").append(history17);
    $(".description17").append(description17);

    $(".award-title18").append(award18);
    $(".history18").append(history18);
    $(".description18").append(description18);

    $(".award-title19").append(award19);
    $(".history19").append(history19);
    $(".description19").append(description19);

    $(".award-title20").append(award20);
    $(".history20").append(history20);
    $(".description20").append(description20);
    
    $(".award-title21").append(award21);
    $(".history21").append(history21);
    $(".description21").append(description21);
    
    $(".award-title22").append(award22);
    $(".history22").append(history22);
    $(".description22").append(description22);

    $(".award-title23").append(award23);
    $(".history23").append(history23);
    $(".description23").append(description23);

    $(".award-title24").append(award24);
    $(".history24").append(history24);
    $(".description24").append(description24);
});