var questions = [
    {
        "question": " 1.Which HTML tag is used to create a hyperlink",
        "option1": "link",
        "option2": "a",
        "option3": "url",
        "option4": "href",
        "selectAnswer": ""
    },
    {
        "question": "2.Which company developed a java script?",
        "option1": "google",
        "option2": "microsoft",
        "option3": "netscape",
        "option4": "apple",
        "selectAnswer": ""
    },
    {
        "question": "3.Which of the following is the correct syntax to print something in C?",
        "option1": "echo(hello)",
        "option2": "print(hello)",
        "option3": "console.log(hello)",
        "option4": "printf(hello)",
        "selectAnswer": ""
    },
    {
        "question": "4.Which CSS property is used to change the text color of an element?",
        "option1": "font-style",
        "option2": "text-color",
        "option3": "color",
        "option4": "background-color",
        "selectAnswer": ""
    },
    {
        "question": "5.Which of the following is used to output text in Python?",
        "option1": "echo(hello)",
        "option2": "print(hello)",
        "option3": "console.log(hello)",
        "option4": "printf(hello)",
        "selectAnswer": ""
    },

]
function store() {
    if (document.getElementById("ans").checked == true) {
        questions[a]["selectAnswer"] = document.getElementById("answer1").textContent;
        // alert(questions[a]["selectAnswer"]);
        console.log(questions[a]["selectAnswer"]);
    } else if (document.getElementById("ans2").checked == true) {
        questions[a]["selectAnswer"] = document.getElementById("answer2").textContent;
        // alert(questions[a]["selectAnswer"])
        console.log(questions[a]["selectAnswer"]);
    } else if (document.getElementById("ans3").checked == true) {
        questions[a]["selectAnswer"] = document.getElementById("answer3").textContent;
        // alert(questions[a]["selectAnswer"])
        console.log(questions[a]["selectAnswer"]);
    } else if (document.getElementById("ans4").checked == true) {
        questions[a]["selectAnswer"] = document.getElementById("answer4").textContent;
        // alert(questions[a]["selectAnswer"])
        console.log(questions[a]["selectAnswer"]);
    } else {
        // alert("not select");
        //     if (document.getElementById("ans").checked == false && document.getElementById("ans2").checked == false && document.getElementById("ans3").checked == false && document.getElementById("ans4").checked == false) {
        //         var msg = document.getElementById("error");
        //         msg.innerHTML = "select your answer";
        //         msg.style = "color:red";
        //     }
        // }
        // if (document.getElementById("ans").checked == true || document.getElementById("ans2").checked == true || document.getElementById("ans3").checked == true || document.getElementById("ans4").checked == true) {
        //     var msg = document.getElementById("error");
        //     msg.style = "display:none";
        // }
    }
}
var a, b;
var a = 0;
document.getElementById("quest").innerText = questions[a]["question"];
document.getElementById("answer1").innerText = questions[a]["option1"];
document.getElementById("answer2").innerText = questions[a]["option2"];
document.getElementById("answer3").innerText = questions[a]["option3"];
document.getElementById("answer4").innerText = questions[a]["option4"];
var user = localStorage.getItem('real');
document.getElementById("local").innerHTML = user;
// alert(user);
// if (document.getElementById("ans").checked == false && document.getElementById("ans2").checked == false && document.getElementById("ans3").checked == false && document.getElementById("ans4").checked == false) {
//     var msg = document.getElementById("error");
//     msg.innerHTML = "select your answer";
//     msg.style = "color:red";
// }
// store();
// var a = 1;

function answer() {

    if (a <= 4) {
        if (document.getElementById("ans").checked == false && document.getElementById("ans2").checked == false && document.getElementById("ans3").checked == false && document.getElementById("ans4").checked == false) {
            var msg = document.getElementById("error");
            msg.innerHTML = "select your answer";
            msg.style = "color:red";
        } else {
            if (document.getElementById("ans").checked == true || document.getElementById("ans2").checked == true || document.getElementById("ans3").checked == true || document.getElementById("ans4").checked == true) {
                var msg = document.getElementById("error");
                msg.style = "display:none";
            }
            store();

            // hide and show..........

            //      if(1<4){
            //  var proviousbutton = document.getElementById("proviousbutton")
            // proviousbutton.style="display:block";

            // }
            // if(a==4){
            //     var nextbutton = document.getElementById("hide")
            //     nextbutton.style = "display:none";

            // }


            a++;
            document.getElementById("quest").innerHTML = questions[a]["question"];
            document.getElementById("answer1").innerText = questions[a]["option1"];
            document.getElementById("answer2").innerText = questions[a]["option2"];
            document.getElementById("answer3").innerText = questions[a]["option3"];
            document.getElementById("answer4").innerText = questions[a]["option4"];
            document.getElementById("ans").checked = false;
            document.getElementById("ans2").checked = false;
            document.getElementById("ans3").checked = false;
            document.getElementById("ans4").checked = false;
            if (document.getElementById("answer1").textContent == questions[a]["selectAnswer"]) {
                document.getElementById("ans").checked = true;
            } else if (document.getElementById("answer2").textContent == questions[a]["selectAnswer"]) {
                document.getElementById("ans2").checked = true;
            } else if (document.getElementById("answer3").textContent == questions[a]["selectAnswer"]) {
                document.getElementById("ans3").checked = true;
            } else if (document.getElementById("answer4").textContent == questions[a]["selectAnswer"]) {
                document.getElementById("ans4").checked = true;
            }
            b = a;
        }
        if (a == 4) {
            var hide = document.getElementById("hide");
            hide.style = "display:none";
            var submitbutton = document.getElementById("show");
            submitbutton.style = "display:block";
        }

    }
    // if(a == 4){
    //     var hide = document.getElementById("show");
    //     hide.style = "display:none";
    // }


}
function sub() {
    // store();

    // b--;
    if (0 < b) {
        // b--;
        document.getElementById("ans").checked = false;
        document.getElementById("ans2").checked = false;
        document.getElementById("ans3").checked = false;
        document.getElementById("ans4").checked = false;
        b--;
        document.getElementById("quest").innerHTML = questions[b]["question"];
        document.getElementById("answer1").innerText = questions[b]["option1"];
        document.getElementById("answer2").innerText = questions[b]["option2"];
        document.getElementById("answer3").innerText = questions[b]["option3"];
        document.getElementById("answer4").innerText = questions[b]["option4"];
        if (document.getElementById("answer1").textContent == questions[b]["selectAnswer"]) {
            document.getElementById("ans").checked = true;
        } else if (document.getElementById("answer2").textContent == questions[b]["selectAnswer"]) {
            document.getElementById("ans2").checked = true;
        } else if (document.getElementById("answer3").textContent == questions[b]["selectAnswer"]) {
            document.getElementById("ans3").checked = true;
        } else if (document.getElementById("answer4").textContent == questions[b]["selectAnswer"]) {
            document.getElementById("ans4").checked = true;
        }
        a = b;
        if (a != 4) {
            var hide = document.getElementById("hide");
            hide.style = "display:block";
            var submitbutton = document.getElementById("show");
            submitbutton.style = "display:none";
        }
    }

    // hide and show..........

    //  if(b > 0){
    //     var proviousbutton = document.getElementById("proviousbutton")
    //     proviousbutton.style="display:block";

    // }
    // if(a==4){
    //     var nextbutton = document.getElementById("hide")
    //     nextbutton.style = "display:none";

    // }
    // if (a == 4) {
    //     var submitbutton = document.getElementById("show");
    //     submitbutton.style = "display:block";
    // }

}
function submit() {
    if (a == 4) {
        if (document.getElementById("ans").checked == false && document.getElementById("ans2").checked == false && document.getElementById("ans3").checked == false && document.getElementById("ans4").checked == false) {
            var msg = document.getElementById("error");
            msg.innerHTML = "select your answer";
            msg.style = "color:red";
        } else {
            if (document.getElementById("ans").checked == true || document.getElementById("ans2").checked == true || document.getElementById("ans3").checked == true || document.getElementById("ans4").checked == true) {
                var msg = document.getElementById("error");
                msg.style = "display:none";
                window.location.href = "result.html";
                localStorage.setItem('answer', questions[0]["selectAnswer"]);
                localStorage.setItem('answer2', questions[1]["selectAnswer"]);
                localStorage.setItem('answer3', questions[2]["selectAnswer"]);
                localStorage.setItem('answer4', questions[3]["selectAnswer"]);
                localStorage.setItem('answer5', questions[4]["selectAnswer"]);
            }
        }

    }

}




