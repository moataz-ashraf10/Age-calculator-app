let button = document.querySelector('svg')
let days = document.querySelector('.days')
let months = document.querySelector('.months')
let years = document.querySelector('.years')
let text1 = document.querySelector('.day')
let text2 = document.querySelector('.month')
let text3 = document.querySelector('.year')
let valid1=document.querySelector('.valid1')
let valid2=document.querySelector('.valid2')
let valid3=document.querySelector('.valid3')
var currentDate = new Date();
button.addEventListener('click',function(){
    if(+years.value<currentDate.getFullYear()&&+months.value<13&&+days.value<32){
        years.style.border='2px solid hsl(259, 100%, 65%)'
        text3.style.color='black'
        valid3.style.visibility='hidden'
        months.style.border='2px solid hsl(259, 100%, 65%)'
        text2.style.color='black'
        valid2.style.visibility='hidden'
        days.style.border='2px solid hsl(259, 100%, 65%)'
        text1.style.color='black'
        valid1.style.visibility='hidden'
        document.querySelector('.result1').innerHTML=currentDate.getFullYear() - +years.value
        document.querySelector('.result2').innerHTML=Math.abs(currentDate.getMonth() - +months.value)
        document.querySelector('.result3').innerHTML=Math.abs(currentDate.getDay() - +days.value)
        document.querySelector('.text1').style.visibility='hidden'
        document.querySelector('.text2').style.visibility='hidden'
        document.querySelector('.text3').style.visibility='hidden'
    }
    if(+months.value==0||+months.value>12||+months.value==''){
        months.style.border='2px solid red'
        text2.style.color='red'
        valid2.style.visibility='visible'
    }
    if(+years.value==0||+years.value>currentDate.getFullYear()||+years.value==''){
        years.style.border='2px solid red'
        text3.style.color='red'
        valid3.style.visibility='visible'
    }
    if(+days.value==0||+days.value>31||+days.value==''){
        days.style.border='2px solid red'
        text1.style.color='red'
        valid1.style.visibility='visible'
    }
    })
