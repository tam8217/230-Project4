
        //Getting attributes from the document
        let radShape = document.querySelectorAll(".shapes");
        let shape = document.querySelector(".shape");
        let radSize = document.querySelectorAll(".sizes");
        let radCol = document.querySelectorAll(".colors");
        let radOpac = document.querySelectorAll(".opacity");

        //Getting a locally stored object if it exists, will be null if none has been created
        const storedClassList = localStorage.getItem("classList");
        
        if(storedClassList)
        {
        //If the classlist was modified from the default values, load them in
        if(storedClassList.includes('circle'))
        {
            //Check the new value
            document.querySelector("#circ").checked = true;

            //Switch the previous value to the new one
            $(".square").switchClass("square", "circle", 1000);
        }

        //Checking color
        if(storedClassList.includes('blue'))
        {
            document.querySelector("#blue").checked = true;
            $(".red").switchClass("red", "blue", 1000);
        }

        //Checking size
        if(storedClassList.includes('large'))
        {
            document.querySelector("#large").checked = true;
            $(".small").switchClass("small", "large", 1000);
        }

        //Checking opacity
        if(storedClassList.includes('partial'))
        {
            document.querySelector("#part").checked = true;
            $(".full").switchClass("full", "partial", 1000);
        }
        }
        //Looping through all the radio buttons and adding listeners for when their value is changed
        for(let i = 0; i < radShape.length; i++)
        {
            radShape[i].onchange = function (e)
            {
                //Checking the current value of the button, changing it to the selected value
                if(shape.classList.contains('square'))
                {
                    //shape.classList.remove('square');
                    $(".shape").switchClass("square", e.target.value, 1000);
                }
                else if(shape.classList.contains('circle'))
                {
                    //shape.classList.remove('circle');
                    $(".shape").switchClass("circle", e.target.value, 1000);
                }
                //shape.classList.add(e.target.value);
                
                //Setting the new classlist to the stored one, so it can be called later
                localStorage.setItem("classList", shape.classList);
            }
        }

        //Adding functionality to the size buttons
        for(let i = 0; i < radSize.length; i++)
        {
            radSize[i].onchange = function (e)
            {
                if(shape.classList.contains('small'))
                {
                    //shape.classList.remove('small');
                    $(".small").switchClass("small", e.target.value, 1000);
                }
                else if(shape.classList.contains('large'))
                {
                    //shape.classList.remove('large');
                    $(".large").switchClass("large", e.target.value, 1000);
                }

                //shape.classList.add(e.target.value);
                
                localStorage.setItem("classList", shape.classList);
            }
        }

        //Adding functionality to the color buttons
        for(let i = 0; i < radCol.length; i++)
        {
            radCol[i].onchange = function (e)
            {
                if(shape.classList.contains('red'))
                {
                    //shape.classList.remove('red');
                    $(".red").switchClass("red", e.target.value, 1000);
                }
                else if(shape.classList.contains('blue'))
                {
                    //shape.classList.remove('blue');
                    $(".blue").switchClass("blue", e.target.value, 1000);
                }

                //shape.classList.add(e.target.value);
                
                localStorage.setItem("classList", shape.classList);
            }
        }

        //Adding functionality to the opacity buttons
        for(let i = 0; i < radOpac.length; i++)
        {
            radOpac[i].onchange = function (e)
            {
                if(shape.classList.contains('full'))
                {
                    //shape.classList.remove('full');
                    $(".full").switchClass("full", e.target.value, 1000);
                }
                else if(shape.classList.contains('partial'))
                {
                    //shape.classList.remove('partial');
                    $(".partial").switchClass("partial", e.target.value, 1000);
                }

                //shape.classList.add(e.target.value);

                localStorage.setItem("classList", shape.classList);
            }
        }

        //Creating a timeline for animations
        var timeline = anime.timeline({
            //Setting the animation to not play by default
            autoplay: false,

            //Adding easing to the animations
            easing: 'easeOutExpo'
        });

        //Adding animations to the timeline
        timeline
        .add({
            targets: ".buttonSelectors .opacSelector",
            translateY: -25
        })
        .add({
            targets: ".buttonSelectors .opacSelector",
            translateY: 200
        })
        .add({
            targets: ".buttonSelectors .opacSelector",
            opacity: 0,
            offset: '-=800'
        })
        .add({
            targets: ".buttonSelectors .colorSelector",
            translateY: -25,
            offset: '-=800'
        })
        .add({
            targets: ".buttonSelectors .colorSelector",
            translateY: 300
        })
        .add({
            targets: ".buttonSelectors .colorSelector",
            opacity: 0,
            offset: '-=800'
        })
        .add({
            targets: ".buttonSelectors .sizeSelector",
            translateY: -25,
            offset: '-=800'
        })
        .add({
            targets: ".buttonSelectors .sizeSelector",
            translateY: 400
        })
        .add({
            targets: ".buttonSelectors .sizeSelector",
            opacity: 0,
            offset: '-=800'
        })
        .add({
            targets: ".buttonSelectors .shapeSelector",
            translateY: -25,
            offset: '-=800'
        })
        .add({
            targets: ".buttonSelectors .shapeSelector",
            translateY: 500
        })
        .add({
            targets: ".buttonSelectors .shapeSelector",
            opacity: 0,
            offset: '-=800'
        })
        .add({
            targets: ".shape",
            translateX: 200,
            translateY: 200,
            scale: 2
        })
        //timeline.play();
        //timeline.reverse();
        var revTimeline = timeline;
        var forMove = true;
        var play = true;
        //document.querySelector(".menuMove").onclick = function () {if(forMove == false){timeline.reverse();} /*timeline.reverse();*/timeline.play(); forMove = !forMove; console.log(forMove);}
        document.querySelector(".revMove").onclick = function () {revTimeline.reverse(); revTimeline.play();}
        document.querySelector(".menuMove").onclick = function () {
            /*if(forMove)
            {
                regPlay();
            }
            else if(forMove == false)
            {
                revPlay();
            }*/
            if(forMove == false)
            {
                timeline.reverse();
            }
            timeline.play();
            forMove = !forMove;
            }

        function regPlay ()
        {
            timeline.play();
            forMove = false;
        }

        function revPlay ()
        {
            timeline.reverse();
            timeline.play();
            forMove = true;
        }


        let menuButtons = document.querySelectorAll(".sideText button");

        for(let i = 0; i < menuButtons.length; i++)
        {
            menuButtons[i].onclick = function (e)
            {

                localStorage.setItem("classList", shape.classList);
            }
        }