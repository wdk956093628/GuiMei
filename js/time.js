// JavaScript Document
 window.onload=function(){
	  var today_obj = document.getElementById("welcome_time");
      var year, month, date, hour, minute, second;
      function clock(){
        var today = new Date();
        year = today.getFullYear();
        month = today.getMonth() + 1;
        date = today.getDate();
        hour = today.getHours();
        minute = today.getMinutes();
        second = today.getSeconds();
        month = month > 10 ? month : ("0" + month);
        date = date > 10 ? date : ("0" + date);
        hour = hour > 10 ? hour : ("0" + hour);
        minute = minute > 10 ? minute : ("0" + minute);
        second = second > 10 ? second : ("0" + second);
        today_obj.innerHTML = year + "/" + month + "/" + date + " " + hour + ":" + minute + ":" + second;
      }
      //使用定时器
      setInterval(function(){
		    clock();
		    },1000);//调用方法,定时时间单位毫秒
    }