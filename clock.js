//const clock = document.querySelector("h2#clock");

function diffDay() {

    const masTime = new Date("2023-05-20");
    const todayTime = new Date();
    const gap = masTime - todayTime;
   

    //clock.innerText = '${dDay}d';

    const day = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById("clock").innerText = "D-DAY까지 " + day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남았습니다.";
    //document.getElementById("count").innerHTML = "D-DAY까지 " + day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남았습니다.";

}

setInterval(diffDay,1000);