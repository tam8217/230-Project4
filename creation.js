
        //Getting attributes from the document
        let radShape = document.querySelectorAll(".shapes");
        let shape = document.querySelector(".shape");
        let radSize = document.querySelectorAll(".sizes");
        let radCol = document.querySelectorAll(".colors");
        let radOpac = document.querySelectorAll(".opacity");

        //Getting a locally stored object if it exists, will be null if none has been created
        const storedClassList = localStorage.getItem("classList");
        
        //If a stored list exists
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
                    $(".shape").switchClass("square", e.target.value, 1000);
                }
                else if(shape.classList.contains('circle'))
                {
                    $(".shape").switchClass("circle", e.target.value, 1000);
                }
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
                    $(".small").switchClass("small", e.target.value, 1000);
                }
                else if(shape.classList.contains('large'))
                {
                    $(".large").switchClass("large", e.target.value, 1000);
                }
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
                    $(".red").switchClass("red", e.target.value, 1000);
                }
                else if(shape.classList.contains('blue'))
                {
                    $(".blue").switchClass("blue", e.target.value, 1000);
                }
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
            //Translating the item up
            translateY: -20
        })
        .add({
            targets: ".buttonSelectors .opacSelector",
            //Translating the item down
            translateY: 200
        })
        .add({
            targets: ".buttonSelectors .opacSelector",
            //Making the item invisible
            opacity: 0,
            //Adding an offset so this animtion occurs while the other is finishing
            offset: '-=800'
        })
        .add({
            targets: ".buttonSelectors .colorSelector",
            translateY: -20,
            //Starting to translate this item while the other is fading
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
            translateY: -20,
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
            translateY: -20,
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
            targets: ".controlButtons",
            translateX: -100,

        })
        .add({
            targets: ".shape",
            translateX: -200,
            translateY: 200,
            scale: 1.5
        })

        //Running the animation as the page loads
        timeline.reverse();
        timeline.play();

        //Adding a listener that plays the animation every time the button is pressed
        document.querySelector(".revMove").onclick = function () {timeline.reverse(); timeline.play();}
        
        //Making it so that changing pages will always save the current class list
        let menuButtons = document.querySelectorAll(".sideText button");

        //Adding in links to other pages 
        let link = document.createElement("a");
        //Setting the destination
        link.href = "#";
        //Setting the text 
        link.innerHTML = "Phase 1";
        //Setting the color of this element becuase it acts strangely with this page
        link.style.color = "red";
        //Setting the item to be a child
        document.querySelector("#p1But").appendChild(link);

        let link2 = document.createElement("a");
        link2.href = "phase2.html";
        link2.innerHTML = "Phase 2";
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

        //Adding listners to every menu button to save the list when the page is changed
        for(let i = 0; i < menuButtons.length; i++)
        {
            menuButtons[i].onclick = function (e)
            {
                localStorage.setItem("classList", shape.classList);
            }
        }