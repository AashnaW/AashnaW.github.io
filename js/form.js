// API URL: https://api.apispreadsheets.com/data/8923/

function SubForm () {
    var name = document.getElementById("full_name").value;
    var song = document.getElementById("song").value;
    var events_mehndi = document.getElementById("mehndi").checked;
    var events_ceremony = document.getElementById("ceremony").checked;
    var food_choice = document.getElementById("food_choice").value;
    var events = "NONE";
    // if (events_mehndi && events_ceremony)
    //     events = BOTH;
    // else if (events_mehndi)
    //     events = mehndi;
    // else if (events_ceremony)
    //     events = ceremony;
    // console.log("events: " + `${events}`)
    // console.log("food_choice")
    fetch("https://api.apispreadsheets.com/data/8923/", {
        method: "POST",
        body: JSON.stringify({"data": {"full_name":`${name}`,"song":`${song}`,"events":`${events}`,"food_choice":`${food_choice}`}}),
            }).then(res => {
        if (res.status === 201){
            // SUCCESS
            alert("woo");
        }
        else{
            alert("boo");
            // ERROR
        }
    })
}

function Regret () {
    alert("We're sorry you cannot make it! You will be missed!")
}

function toggleCheckbox(element)
 {
   element.checked = !element.checked;
 }