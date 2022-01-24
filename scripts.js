// Fetch URL

fetch("https://api.hatchways.io/assessment/students")
  .then((response) => response.json())
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
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
  //   function accordian() {
  //     var accItem = document.getElementsByClassName("accordionItem");
  //     var accHD = document.getElementsByClassName("accordionItemHeading");
  //     for (i = 0; i < accHD.length; i++) {
  //       accHD[i].addEventListener("click", toggleItem, false);
  //     }
  //     function toggleItem() {
  //       var itemClass = this.parentNode.className;
  //       for (i = 0; i < accItem.length; i++) {
  //         accItem[i].className = "accordionItem close";
  //       }
  //       if (itemClass == "accordionItem close") {
  //         this.parentNode.className = "accordionItem open";
  //       }
  //     }
  //   }
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
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
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
    h1.className = "name";
    p5.innerHTML = "Test 1: " + data.students[i].grades[0] + "%";
    p6.innerHTML = "Test 2: " + data.students[i].grades[1] + "%";
    p7.innerHTML = "Test 3: " + data.students[i].grades[2] + "%";
    p8.innerHTML = "Test 4: " + data.students[i].grades[3] + "%";
    p9.innerHTML = "Test 5: " + data.students[i].grades[4] + "%";
    p10.innerHTML = "Test 6: " + data.students[i].grades[5] + "%";
    p11.innerHTML = "Test 7: " + data.students[i].grades[6] + "%";
    p12.innerHTML = "Test 8: " + data.students[i].grades[7] + "%";
    pic.src = data.students[i].pic;
    plus.src = "./assets/icons/plus.png";
    plus.className = "plus";
    plus.onclick = (e) => {
      let j = e.target.id.toString();
      let id = "accordian-" + j;
      var elem = document.getElementById(id);
      elem.addEventListener("click", () => (elem.style.display = "none"));
      elem.style.display = "flex";
      elem.style.flexDirection = "column";
    };
    div.className = "card";
    rightDiv.className = "right-div";
    leftDiv.className = "left-div";
    nameicon.className = "name-icon";
    bottomDiv.className = "bottom-div";
    plus.id = i;
    bottomDiv.id = "accordian-" + i;
    //   Append item to div
    mainContainer.appendChild(div);
    div.appendChild(leftDiv);
    div.appendChild(rightDiv);
    mainContainer.appendChild(bottomDiv);
    leftDiv.appendChild(pic);
    rightDiv.appendChild(nameicon);
    nameicon.appendChild(h1);
    nameicon.appendChild(plus);
    rightDiv.appendChild(p1);
    rightDiv.appendChild(p2);
    rightDiv.appendChild(p3);
    rightDiv.appendChild(p4);
    bottomDiv.appendChild(p5);
    bottomDiv.appendChild(p6);
    bottomDiv.appendChild(p7);
    bottomDiv.appendChild(p8);
    bottomDiv.appendChild(p9);
    bottomDiv.appendChild(p10);
    bottomDiv.appendChild(p11);
    bottomDiv.appendChild(p12);
  }
}
