// Michael Crean //

function puzzle1()
{ var answer = document.getElementById("p1").value;

  if(answer == 100)
  {
   document.getElementById("work1").innerHTML = "Awesome! You're correct!";
   document.getElementById("work1").classList.remove("hidden-message");
   document.getElementById("work1").classList.add("shown-message");
    setCookie("prescore3", 1, 100);
  }

  else if(answer < 100)
  {
   document.getElementById("work1").innerHTML = "Almost! Try Again.";
   document.getElementById("work1").classList.remove("hidden-message");
   document.getElementById("work1").classList.add("shown-message");
  }

  else if(answer > 100)
  {
   document.getElementById("work1").innerHTML = "Close, but not quite.";
   document.getElementById("work1").classList.remove("hidden-message");
   document.getElementById("work1").classList.add("shown-message");
  }
}


function puzzle2()
{ var answer2;
  answer2 = document.getElementById("p2").value;

  if(answer2 == "William $1225")
  {
   document.getElementById("work2").innerHTML = "Great Job! You're correct!";
   document.getElementById("work2").classList.remove("hidden-message");
   document.getElementById("work2").classList.add("shown-message");
   setCookie("prescore2", 1, 100);
  }

  else if(answer2 != "William $1225")
  {
   document.getElementById("work2").innerHTML = "Nope, try again...";
   document.getElementById("work2").classList.remove("hidden-message");
   document.getElementById("work2").classList.add("shown-message");
  }

}


function calculateScore1()
{
 var score1 = Number(getCookie("prescore1"));
 var score2 = Number(getCookie("prescore2"));
 var results =  score1 +  score2
 results = results / 2 * 100;
 document.getElementById("Score").innerHTML = asPercentage(results);
}


function asPercentage(val)
{
  return "%" + val.toFixed(2);
}


function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
