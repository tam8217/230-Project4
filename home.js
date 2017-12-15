        //Adding in links to other pages 
        let link = document.createElement("a");
        //Setting the destination
        link.href = "phase1.html";
        //Setting the text
        link.innerHTML = "Phase 1";
        //Adding the element to the button
        document.querySelector("#p1But").appendChild(link);

        let link2 = document.createElement("a");
        link2.href = "phase2.html";
        link2.innerHTML = "Phase 2";
        document.querySelector("#p2But").appendChild(link2);

        let link3 = document.createElement("a");
        link3.href = "phase3.html";
        link3.innerHTML = "Phase 3";
        document.querySelector("#p3But").appendChild(link3);

        let link5 = document.createElement("a");
        link5.href = "notes.html";
        link5.innerHTML = "Notes";
        document.querySelector("#notesBut").appendChild(link5);

        //Adding event listeners to all the titles which open up the text underneath them
        document.querySelector("#p1Title").onclick = function() 
        { 
            $("#p1").show("fade");
        }
        document.querySelector("#p2Title").onclick = function() { $("#p2").show("fade");}
        document.querySelector("#p3Title").onclick = function() { $("#p3").show("fade");}
        document.querySelector("#notesTitle").onclick = function() { $("#notes").show("fade");}