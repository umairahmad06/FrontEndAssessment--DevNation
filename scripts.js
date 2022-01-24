// Fetch URL

fetch("https://api.hatchways.io/assessment/students")
    .then((response) => response.json())
    .then(function(data) {
        appendData(data);
    })
    .catch(function(err) {
        console.log("error: " + err);
    });

// Append Data

function appendData(data) {
    function search() {
        let filter = document.getElementById("Search").value;
        filter = filter.toLowerCase();
        console.log(filter);
        let x = document.getElementsByClassName("card");
        for (i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(filter)) {
                x[i].style.display = "none";
            } else {
                x[i].style.display = "flex";
            }
        }
    }



    var input = document.createElement("input");
    input.type = "search";
    input.placeholder = "Search by name";
    input.id = "Search";
    input.onkeyup = () => search();

    var mainContainer = document.getElementById("myData");

    mainContainer.append(input);
    for (var i = 0; i < 25; i++) {
        var div = document.createElement("div");
        var rightDiv = document.createElement("div");
        var leftDiv = document.createElement("div");
        var bottomDiv = document.createElement("div");

        var nameicon = document.createElement("div");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        var h1 = document.createElement("h1");
        var pic = document.createElement("img");
        var plus = document.createElement("img");

        var length = data.students[i].grades.length;

        var sum = 0;

        for (var j = 0; j < length; j++) {
            var grade = parseInt(data.students[i].grades[j]);
            sum = sum + grade;
        }

        var average = sum / length;

        h1.innerHTML = data.students[i].firstName + " " + data.students[i].lastName;
        p1.innerHTML = "Email: " + data.students[i].email;
        p2.innerHTML = "Company: " + data.students[i].company;
        p3.innerHTML = "Skill: " + data.students[i].skill;
        p4.innerHTML = "Average: " + average + "%";
        bottomDiv.innerHTML = data.students[i].grades
        h1.className = "name";



        pic.src = data.students[i].pic;
        plus.src = './assets/icons/plus.png'
        plus.className = 'plus'
        plus.onclick = () => {
            let id = i.toString()
            console.log(id)
            var elem = document.getElementById(id)

            elem.style.display = 'flex'
        }
        mainContainer.appendChild(div);
        div.className = "card";
        rightDiv.className = "right-div";
        leftDiv.className = "left-div";
        nameicon.className = 'name-icon'
        bottomDiv.className = 'bottom-div'
        bottomDiv.id = i

        div.appendChild(leftDiv);
        div.appendChild(rightDiv);
        mainContainer.appendChild(bottomDiv);

        leftDiv.appendChild(pic);
        rightDiv.appendChild(nameicon);
        nameicon.appendChild(h1)
        nameicon.appendChild(plus)
        rightDiv.appendChild(p1);
        rightDiv.appendChild(p2);
        rightDiv.appendChild(p3);
        rightDiv.appendChild(p4);
    }
}