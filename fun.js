function submit() {
    //verify EVERYTHING to make sure it can be submitted, and isn't horrible

    
    //send off the request to post the information in php
    var xmlhttpreq = new XMLHttpRequest();
    xmlhttpreq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("").innerHTML =
            console.log(this.responseText);
        }
    };

    xmlhttpreq.open("GET","/cgi-bin/test", true);
    xmlhttp.send();

    //hide the form and replace it with the flavor text
    document.getElementById('signupform').style.display = 'none';
    document.getElementById('signupthanks').style.display = 'block';
}

var apps = {
    applimit : 4,
    appsofar : 1,
    
    limit : function () {
        if (apps.appsofar >= apps.applimit) {
            return true;
        }
        else { apps.appsofar++; }
        return false;
    }
}

function addApplicantRow() {

    if (apps.limit()) {
        alert("Please limit 4 children per guardian!");
        return
    }
    
    //add a row in the details to add a new kid
    var child_list = document.getElementById("child_list");
    //add html rows
    var addedHTML = `
              <tr class="w3-border-0 w3-white" id="child${apps.appsofar}" name="child${apps.appsofar}">
                <td>
                  <input class="w3-input" type="text" placeholder="Child Name" required name="name">
                </td>
                <td>
                  <select class="w3-half w3-select" style="width:45%" required name="age">
                    <option selected disabled value="">Age</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select class="w3-half w3-select w3-margin-left" style="width:45%" required name="ssize">
                    <option selected disabled value="">Shirt Size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </td>
                <td>
                  <button class="w3-button w3-light-grey" onclick="addApplicantRow()">+</button>
                </td>
                <td>
                  <button class="w3-button w3-light-grey" onclick="removeApplicantRow()">-</button>
                </td>
              </tr>
`;
    child_list.innerHTML += addedHTML;
}

function removeApplicantRow() {
    var node = document.getElementById("child" + (apps.appsofar));
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    apps.appsofar--;
}


function changeFonts() {

    document.onkeydown = checkKey;

    function checkKey(e) {
        e = e || window.event;
        var fonts = ["sans-serif",
                     "Impact",
                     "Fantasque Sans Mono",
                     "Arial",
                     "Helvetica", /* toolbar    */
                     "Times New Roman",
                     "Times",
                     "Courier New",
                     "Courier",
                     "Verdana", /* this is a good one */
                     "Georgia",
                     "Palatino",
                     "Garamond",
                     "Bookman",
                     "Comic Sans MS",
                     "Trebuchet MS", /* nice one */
                     "Arial Black"]; /* main header */
        if (!this.hasOwnProperty("next")) { this.next = 0; }
        if (e.keyCode == '39') {
            var nxt = this.next;
            document.body.style.fontFamily = fonts[nxt];
            Array.from(document.getElementsByClassName("w3-jumbo")).forEach(function(element) {
                element.style.fontFamily = fonts[nxt];
            });
            this.next += 1;
            this.next %= fonts.length;
        }
    }
}
