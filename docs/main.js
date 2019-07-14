window.onload = function () {
    // 今日の日付を取得
    var today = new Date();
    document.getElementById('today').innerHTML = today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日';
    var spring = getYmd(today.getFullYear(), 4, 3, 0);
    var autumn = getYmd(today.getFullYear(), 10, 3, 0);

    if (today.getMonth() + 1 >= 11 || (today.getMonth() + 1 == 10 && today.getDate() > autumn.getDate())) {
        remainDay = Math.floor((getYmd(today.getFullYear() + 1, 4, 3, 0) - today)  / (24 * 60 * 60 * 1000) + 1);
    }
    else if (today.getMonth() + 1 >= 5 || (today.getMonth() + 1 == 4 && today.getDate() > spring.getDate())) {
        remainDay = Math.floor((getYmd(today.getFullYear(), 10, 3, 0) - today)  / (24 * 60 * 60 * 1000) + 1);
    }
    else {
        remainDay = Math.floor((getYmd(today.getFullYear(), 4, 3, 0) - today)  / (24 * 60 * 60 * 1000) + 1);
    }

    document.getElementById('day').innerHTML = remainDay + '日';
}
function getYmd(year, month, week, day) {

    var date = new Date(year + "/" + month + "/1");
    var mfirstDay = date.getDay();
    var day = day - mfirstDay + 1;

    if (day <= 0) {
        day += 7;
    }

    day += 7 * (week - 1);
    
    return (new Date(year + "/" + month + "/" + day));
}