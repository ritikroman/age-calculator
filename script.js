
let userInput = document.getElementById("date");
userInput.max  = new Date().toISOString().split("T")[0];
let res= document.getElementById("result");

function calculateAge(){
    let day;
    let month;
    let year;
    let date=new Date(userInput.value);
    let day1=date.getDate();
    let month1=date.getMonth()+1;
    let year1=date.getFullYear();

    let today= new Date();
    let day2=today.getDate();
    let month2=today.getMonth()+1;
    let year2=today.getFullYear();

    if(day2>=day1)
    day=day2-day1;
    else{
        day=getDaysInMonth(year2,month2) + day2  -day1;
        month2--;
    }
    if(month2>=month1)
    month=month2-month1;
else{
    month2+=12;
    month=month2-month1;
    year--;
}

    year=year2-year1;
    res.innerHTML=`You are <span> ${year}</span> years, <span>${month}</span> month,<span> ${day}</span> days old`;
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
