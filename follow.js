        //Getting a locally stored object if it exists, will be null if none has been created
        const storedClassList = localStorage.getItem("classList");
        
        //If a stored list exists
        if(storedClassList)
        {
        //If the classlist was modified from the default values, load them in
        if(storedClassList.includes('circle'))
        {
            //Switch the previous value to the new one
            $(".square").switchClass("square", "circle", 1000);
        }

        //Checking color
        if(storedClassList.includes('blue'))
        {
            $(".red").switchClass("red", "blue", 1000);
        }

        //Checking size
        if(storedClassList.includes('large'))
        {
            $(".small").switchClass("small", "large", 1000);
        }

        //Checking opacity
        if(storedClassList.includes('partial'))
        {
            $(".full").switchClass("full", "partial", 1000);
        }
        }
        
        //Getting the path the shape will follow
        let path = anime.path("polyline");

        //Getting the SVG
        let shapeFollow = document.querySelector("polyline");

        //Getting random points for the SVG
        let initialVal = Math.random() * 20;
        initialVal = Math.floor(initialVal);

        let secondVal = Math.random() * 40;
        secondVal = Math.floor(secondVal);

        let thirdVal = Math.random() * 60;
        thirdVal = Math.floor(thirdVal);

        let fourthVal = Math.random() * 40;
        fourthVal = Math.floor(fourthVal);

        let fifthVal = Math.random() * 70;
        fifthVal = Math.floor(fifthVal);

        let sixthVal = Math.random() * 80;
        sixthVal = Math.floor(sixthVal);

        let seventhVal = Math.random() * 100;
        seventhVal = Math.floor(seventhVal);

        let eigthVal = Math.random() * 100;
        eigthVal = Math.floor(eigthVal);

        let ninthVal = Math.random() * 100;
        ninthVal = Math.floor(ninthVal);

        let tenthVal = Math.random() * 100;
        tenthVal = Math.floor(tenthVal);


        //Initialzing the SVG to random points
        document.querySelector("polyline").setAttribute("points", "" + initialVal + "," + initialVal + " " + secondVal + ", " + thirdVal + " " + fourthVal + ", " + fifthVal + " " + sixthVal + ", " + seventhVal + " " + eigthVal + ", " + ninthVal + " " + tenthVal + ", " +initialVal);
        
        //Creating the animation 
        let followAnim = anime({
            targets: ".shape",
            //Following x and y of the SVG
            translateX: path('x'),
            translateY: path('y'),
            //Rotating to the SVG
            rotate: path('angle'),
            //Going the same speed throughout
            easing: 'linear',
            duration: 3000,
            //Going the other way once the end has been reached
            direction: "alternate",
            //Looping the animation continuously
            loop: true
        })

        //Getting the button for changing shape
        let shapeChange = document.querySelector(".shapeChange");

        //Adding an event listener to the button
        shapeChange.onclick = function ()
        {
            //Getting random points for the SVG
            let initialVal = Math.random() * 20;
            //Flooring the value to get a whole number
            initialVal = Math.floor(initialVal);

            let secondVal = Math.random() * 40;
            secondVal = Math.floor(secondVal);

            let thirdVal = Math.random() * 60;
            thirdVal = Math.floor(thirdVal);

            let fourthVal = Math.random() * 40;
            fourthVal = Math.floor(fourthVal);

            let fifthVal = Math.random() * 70;
            fifthVal = Math.floor(fifthVal);

            let sixthVal = Math.random() * 80;
            sixthVal = Math.floor(sixthVal);

            let seventhVal = Math.random() * 100;
            seventhVal = Math.floor(seventhVal);

            let eigthVal = Math.random() * 100;
            eigthVal = Math.floor(eigthVal);

            let ninthVal = Math.random() * 100;
            ninthVal = Math.floor(ninthVal);

            let tenthVal = Math.random() * 100;
            tenthVal = Math.floor(tenthVal);

            //Getting the current points for the SVG
            let curPoints = shapeFollow.getAttribute("points");

            //Creating a new set of points from the random values
            let newPoints = "" + initialVal + "," + initialVal + " " + secondVal + ", " + thirdVal + " " + fourthVal + ", " + fifthVal + " " + sixthVal + ", " + seventhVal + " " + eigthVal + ", " + ninthVal + " " + tenthVal + ", " +initialVal;


            //Morphing the current shape in to a new one
            var morphing = anime({
                //Setting the target
                targets: 'polyline',

                //Setting the points to be changed
                points: [
                    { value: curPoints},
                    { value: newPoints}
                ],
                //Adding easing 
                easing: 'easeOutQuad',

                //Setting the duration of the animation
                duration: 1000
            });
        }

        //Drawing out the SVG upon starting the page
        let lineDrawing = anime({
            targets: "polygon",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500
        })

        //Adding in links to other pages
        //Creating the 'a' element
        let link = document.createElement("a");

        //Editing the destination
        link.href = "phase1.html";
        //Adding in text
        link.innerHTML = "Phase 1";

        //Adding the element to the button
        document.querySelector("#p1But").appendChild(link);

        let link2 = document.createElement("a");
        link2.href = "phase2.html";
        link2.innerHTML = "Phase 2";
        document.querySelector("#p2But").appendChild(link2);

        let link3 = document.createElement("a");
        link3.href = "#";
        link3.innerHTML = "Phase 3";
        link3.style.color = "red";
        document.querySelector("#p3But").appendChild(link3);

        let link4 = document.createElement("a");
        link4.href = "index.html";
        link4.innerHTML = "Home Page";
        document.querySelector("#indexBut").appendChild(link4);

        let link5 = document.createElement("a");
        link5.href = "notes.html";
        link5.innerHTML = "Notes";
        document.querySelector("#notesBut").appendChild(link5);