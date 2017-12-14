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
            
            //Adusting the placement of the launcher to account for the larger shape
            document.querySelector(".shapeHolder").style.top = "30%";
        }

        //Checking opacity
        if(storedClassList.includes('partial'))
        {
            $(".full").switchClass("full", "partial", 1000);
        }
        }

        //Getting the slider
        let horiSlider = document.querySelector("#horiSlider");
        let vertSlider = document.querySelector("#vertSlider");
        let xPos = 0;
        let yPos = 0;

        horiSlider.oninput = function ()
        {
            let slideAnim = anime({
                targets: ".shape",
                translateX: this.value * 2,
                translateY: yPos
            })
            xPos = this.value * 2;
            slideAnim.play();
        }
        vertSlider.oninput = function ()
        {
            let slideAnim = anime({
                targets: ".shape",
                translateY: this.value * 1.5,
                translateX: xPos
            })
            yPos = this.value * 1.5;
            slideAnim.play();
        }

        let button = document.querySelector("#fire");

        button.onclick = function ()
        {
            let elasticVar  = (xPos + yPos) / 1.5; 
            let launchAnim = anime({
                targets: ".shape",
                translateX: -(xPos * 2),
                translateY: -(yPos *2),
                elasticity: elasticVar
            })
        }