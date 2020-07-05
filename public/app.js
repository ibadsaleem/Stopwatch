var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;
hrh = document.getElementById("hr");
minh = document.getElementById("min");
sech = document.getElementById("sec");
msech = document.getElementById("msec");
var interval;

function timer()
{
    msec++;
    msech.innerHTML = msec;
    if (msec >= 100)
    {
        sec++;
        sech.innerHTML = sec;
        msec = 0;
    }
    
    else if (sec >= 60)
    {
        min++;
        minh.innerHTML = min;
        sec = 0;
    }
    else if (min >= 60)
    {
        hr++;
        hrh.innerHTML = hr;
        min = 0;
    }
    
}




function Start()
{
    interval = setInterval(timer, 10);
    document.getElementById("btn").disabled = true;

}
function Stop()
{
    clearInterval(interval);    
    document.getElementById("btn").disabled = false;

}

function Reset()
{
    document.getElementById("btn").disabled = false;

    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;
    msech.innerHTML = msec;
    sech.innerHTML = sec;
    minh.innerHTML = min;
    hrh.innerHTML = hr;
    Stop();
}

