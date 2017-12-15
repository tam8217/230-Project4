        //Getting a locally stored object if it exists, will be null if none has been created
        const storedClassList = localStorage.getItem("classList");
        
        //If a stored class list exists
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
            
            //Adusting the placement of the launcher to account for the larger shape
            document.querySelector(".shapeHolder").style.top = "30%";
        }

        //Checking opacity
        if(storedClassList.includes('partial'))
        {
            $(".full").switchClass("full", "partial", 1000);
        }
        }

        //Getting the sliders
        let horiSlider = document.querySelector("#horiSlider");
        let vertSlider = document.querySelector("#vertSlider");
        
        //Setting variables to hold the positions of the sliders
        let xPos = 0;
        let yPos = 0;

        //Adding a listener for when the slider is changed
        horiSlider.oninput = function ()
        {
            //Creating the animation of the shape moving with the slider
            let slideAnim = anime({
                targets: ".shape",
                //Setting the x translation to be multiplicative of the slider value
                translateX: this.value * 2,
                //Keeping the yPosition if changed
                translateY: yPos
            })

            //Storing the x position so it can be used in the vertical movement
            xPos = this.value * 2;
            //Playing the animation
            slideAnim.play();
        }
        vertSlider.oninput = function ()
        {
            let slideAnim = anime({
                targets: ".shape",
                //Setting the y translation to be multiplicative of the sliderr value, reduced value so it stays on screen
                translateY: this.value * 1.5,
                //Keeping the x position if changed
                translateX: xPos
            })

            //Storing the y position so it can be used in horizontal movement
            yPos = this.value * 1.5;
            slideAnim.play();
        }

        //Getting a reference to the fire button
        let button = document.querySelector("#fire");

        button.onclick = function ()
        {
            //Getting a number from the positon of the sliders
            let elasticVar  = (xPos + yPos) / 1.5; 

            let launchAnim = anime({
                targets: ".shape",
                //Launching the shape twice as far as it was pulled back
                translateX: -(xPos * 2),
                translateY: -(yPos *2),
                //Adding elasticity to the end of the animation
                elasticity: elasticVar
            })
        }

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
        link2.href = "#";
        link2.innerHTML = "Phase 2";
        link2.style.color = "red";
        document.querySelector("#p2But").appendChild(link2);

        let link3 = document.createElement("a");
        link3.href = "phase3.html";
        link3.innerHTML = "Phase 3";
        document.querySelector("#p3But").appendChild(link3);

        let link4 = document.createElement("a");
        link4.href = "index.html";
        link4.innerHTML = "Home Page";
        document.querySelector("#indexBut").appendChild(link4);

        let link5 = document.createElement("a");
        link5.href = "notes.html";
        link5.innerHTML = "Notes";
        document.querySelector("#notesBut").appendChild(link5);