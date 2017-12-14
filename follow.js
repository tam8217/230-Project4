        //Getting a locally stored object if it exists, will be null if none has been created
        const storedClassList = localStorage.getItem("classList");
        
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

        let ranVal = Math.random()
        let path = anime.path("polygon");
        //console.log(ranVal);

        let shapeFollow = document.querySelector("polygon");

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

        //console.log(initialVal + " " + secondVal + " " + thirdVal);
        //console.log(document.querySelector("polygon"));
        //Initialzing the SVG to random points
        document.querySelector("polygon").setAttribute("points", "" + initialVal + "," + initialVal + " " + secondVal + ", " + thirdVal + " " + fourthVal + ", " + fifthVal + " " + sixthVal + ", " + initialVal);// = "" + initialVal + "," + initialVal + " " + secondVal + ", " + thirdVal + " " + secondVal + ", " + initialVal;
        
        //Creating the animation 
        let followAnim = anime({
            targets: ".shape",
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 3000,
            direction: "alternate",
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

            //Getting the current points for the SVG
            let curPoints = shapeFollow.getAttribute("points");
            //console.log(shapeFollow.getAttribute("points"));
            //Creating a new set of points from the random values
            let newPoints = "" + initialVal + "," + initialVal + " " + secondVal + ", " + thirdVal + " " + fourthVal + ", " + fifthVal + " " + sixthVal + ", "  + initialVal;
            //document.querySelector("polygon").setAttribute("points", "" + initialVal + "," + initialVal + " " + secondVal + ", " + thirdVal + " " + secondVal + ", " + initialVal);// = "" + initialVal + "," + initialVal + " " + secondVal + ", " + thirdVal + " " + secondVal + ", " + initialVal;
            //followAnim.restart;

            //Morphing the current shape in to a new one
            var morphing = anime({
                targets: 'polygon',
                points: [
                    { value:curPoints},
                    { value: newPoints}
                ],
                easing: 'easeOutQuad',
                duration: 1000
            });
            
            //lineDrawing.restart;
        }

        //Drawing out the SVG upon starting the page
        let lineDrawing = anime({
            targets: "polygon",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500
        })