// This function is a general method used to move image-specific from initial position to final position.
function moveImage(){
    id = setInterval(frame, 5);
    function frame() {
        if(type_of_movement == 0){
            if (initial_top > final_top) {
                clearInterval(id);
                count++;
            } else {
                initial_top+=step_top; 
                initial_left+=step_left;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
            }
        }
        else if(type_of_movement == 1){
            if (initial_top < final_top) {
                clearInterval(id);
                count++;
            } else {
                initial_top+=step_top; 
                initial_left+=step_left;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
                
            }
        }
    } 
}

//To disable and enable the cursor pointers on elements.
function cursorPointers(id1, id2){
    document.getElementById(id1).style.cursor = "default";
    document.getElementById(id2).style.cursor = "pointer";
}

// This is the function called when beaker is clicked. 
// It moves the beaker from the shelf to the table.
function beaker() {
    if(step_no==1){
        // Get image
        elem = document.getElementById("beaker"); 
        //Detect thecurrent position of the flask.
        initial_top = Math.round($('#beaker').position().top);
        initial_left = Math.round($('#beaker').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 305;
        step_top = 1;
        step_left = 0;
        type_of_movement = 0;
        // Move the beaker image to desired position.
        moveImage();
        // Change to next intsruction to be followed.   
        document.getElementById("demo").innerHTML = "దశ-సంఖ్య 3: శంఖాకార ఫ్లాస్క్‌ను క్లిక్ చేసి ప్రయోగాత్మక పట్టికకు తీసుకెళ్లండి";
        $("#solution").prop("disabled", true);
        document.getElementById("solution").style.opacity = "0.4";
        cursorPointers('beaker', 'flask');
        step_no++;
    }
}

// This is the function called when flask is clicked.
// When this function is called for the first time the flask moves from shelf to table.
// When this function is called for the second time the moveFlask() method is called.   
function flask() {
    if ( step_no == 2 && count ==1){
        // Get image
        elem = document.getElementById("flask");
        // Detect the current position of the flask. 
        initial_top = Math.round($('#flask').position().top);
        initial_left = Math.round($('#flask').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 305;
        step_top = 1;
        step_left = 0.5;
        type_of_movement = 0;
        // Move the flask image to desired position.
        moveImage();
        // Change to next intsruction to be followed.
        document.getElementById("demo").innerHTML = "దశ-సంఖ్య 4: శుభ్రమైన, పొడి బీకర్‌లో ద్రావణాన్ని పోయడానికి శంఖాకార ఫ్లాస్క్‌పై క్లిక్ చేయండి";
        step_no ++;
    }
    else if(step_no==3 && count == 2){
        document.getElementById("flask").onclick = moveFlask();
        // Change to next instruction to be followed. 
        document.getElementById("demo").innerHTML = "దశ-సంఖ్య 5: బీకర్ నుండి తగిన పరిమాణంలో ద్రావణాన్ని సేకరించడానికి మైక్రోపిపెట్ పై క్లిక్ చేయండి";
        step_no++;
    }
}

// This method moves the flask upwards and then calls changeFlask() and moveFlaskback() 
function moveFlask() {
    // Get image
    elem = document.getElementById("flask");
    // Detect the current position of the flask. 
    initial_top = Math.round($('#flask').position().top);
    initial_left = Math.round($('#flask').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 250;
    step_top = -0.75;
    step_left = 0.5;
    type_of_movement = 1;
    // Move the flask image to desired location. 
    moveImage();
    // Call changeFlask() at a regular interval of 50 ms.
    id1 = setInterval(changeFlask,50);
    // Call moveFlaskBack() to move it back to the table.
    setTimeout("moveFlaskBack()",1725);
}

// This method provides rotational motion along with the solution pouring effect to the flask and filling effect to the beaker. It consists of a set of 30 images flask[] changed continuously.
function changeFlask(){
    img = document.getElementById("flask");
    img1 = document.getElementById("beaker");
    var flask =[];
    flask[0] = "images/flask1.png";
    flask[1] = "images/flask2.png";
    flask[2] = "images/flask3.png";
    flask[3] = "images/flask4.png";
    flask[4] = "images/flask5.png";
    flask[5] = "images/flask6.png";
    flask[6] = "images/flask7.png";
    flask[7] = "images/flask8.png";
    flask[8] = "images/flask9.png";
    flask[9] = "images/flask10.png";
    flask[10] = "images/flask11.png";
    flask[11] = "images/flask12.png";
    flask[12] = "images/flask13.png";
    flask[13] = "images/flask14.png";
    flask[14] = "images/flask15.png";
    flask[15] = "images/flask16.png";
    flask[16] = "images/flask17.png";
    flask[17] = "images/flask18.png";
    flask[18] = "images/flask19.png";
    flask[19] = "images/flask20.png";
    flask[20] = "images/flask21.png";
    flask[21] = "images/flask22.png";
    flask[22] = "images/flask22.png";
    flask[23] = "images/flask22.png";
    flask[24] = "images/flask22.png";
    flask[25] = "images/flask23.png";
    flask[26] = "images/flask24.png";
    flask[27] = "images/flask25.png";
    flask[28] = "images/flask26.png";
    flask[29] = "images/flask26.png";

    if(y < flask.length){
        img.src = flask[y];
    }

    y++;

    if (y == 3){
        img.style.width = '11%';
    }
    if (y == 16){
        img.style.width = '15%';
        img1.src = "images/beaker0.png";
    }
    if (y == 25){
        img.style.width = '14%';
        img1.src = "images/beaker2.png";
    }
    if(y == 30){
        clearInterval(id1);
    }
}

// This method helps in moving back the empty flask back to the table
function moveFlaskBack() {
    // Get image
    elem = document.getElementById("flask");
    // Detect the current position of the flask.
    initial_top = Math.round($('#flask').position().top);
    initial_left = Math.round($('#flask').position().left);
    //Initialise all the values for the motion of the images.
    final_top = 305;
    step_top = 1;
    step_left = -1;
    type_of_movement = 0;
    // Move it back to the table
    elem.style.width = "8%"
    // Change the image to an empty flask image
    elem.src= "images/empty_flask.png"; 
    moveImage();
    cursorPointers('flask', 'pipette');
}

// This function is called when pipette is clicked.
// When this function is called for the first time pipette is moved from the shelf to the flask on the table.
// When this function is called for the second time fillPipette() method is called.
// When this function is called for the third time movePipette() method is called.
function pipette() {
    if ( step_no == 4 && count == 4){
        // Get image
        elem = document.getElementById("pipette"); 
        // Detect the current position of the flask.
        initial_top = Math.round($('#pipette').position().top);
        initial_left = Math.round($('#pipette').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 280;
        step_top = 1;
        step_left = 0.5;
        type_of_movement = 0;
        // Move it to the table
        moveImage();
        // Change to next instruction to be followed. 
        document.getElementById("demo").innerHTML = "దశ-సంఖ్య 5: బీకర్ నుండి తగిన పరిమాణంలో ద్రావణాన్ని సేకరించడానికి మైక్రోపిపెట్ పై క్లిక్ చేయండి";
        step_no ++;
    }
    else if(step_no==5 && count == 5){
        fillPipette();
        // Change to next instruction to be followed.
        document.getElementById("demo").innerHTML = "దశ-సంఖ్య 6: దానిపై క్లిక్ చేయడం ద్వారా కువెట్టే తీసుకోండి";
        step_no ++;
    }

    else if(step_no==7 && count == 7){
        movePipette();
        // Change to next instruction to be followed.
        document.getElementById("demo").innerHTML = "దశ-సంఖ్య 8: తెరవడానికి స్పెక్ట్రోఫోటోమీటర్ మూతపై క్లిక్ చేయండి";
        step_no++;
    }
}

// This method replaces the beaker image with less amount of solution.
function fillPipette() {
    img = document.getElementById("beaker");
    img.src = "images/beaker1.png";
    setTimeout(function() {
        elem.src = "images/pipette_filled.png";
        img.src = "images/beaker3.png";
        cursorPointers('pipette', 'cuvette');
        count++;
    }, 1000);
}
    
// This method moves the filled pipette to the cuvette and replaces that cuvette image to a filled cuvette image
function movePipette(){
    // Get images
    elem = document.getElementById("pipette");
    // Detect the current position of the flask.
    initial_top = Math.round($('#pipette').position().top);
    initial_left = Math.round($('#pipette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 268;
    step_top = -1;
    step_left = -4.1;
    type_of_movement = 1;
    // Move it to the cuvette
    moveImage();
    setTimeout(function() {
        img = document.getElementById("cuvette");
        // Change the cuvette image to filled cuvette image
        img.src = "images/cuvette_filled.png";
        elem.src = "images/pipette.png";
        
    }, 1000);
    setTimeout(movebackPipette, 1000);
}

//This function is used to move the pipette back to the shelf.
function movebackPipette() {
    elem = document.getElementById("pipette");
    // Detect the current position of the pipette.
    initial_top = Math.round($('#pipette').position().top);
    initial_left = Math.round($('#pipette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 39;
    step_top = -1;
    step_left = -.30;
    type_of_movement = 1;
    // Move it to the shelf
    moveImage();
    cursorPointers('pipette', 'spectrolid_trans_button');
}

// This function is called cuvette is clicked.
//When this method is called for the first time, cuvete will be moved on to the table.
//When this method is called for the second time the cuvette is moved upto the spectrophotometer.
function cuvette(){
    if ( step_no == 6 && count == 6){
        // get the image of the shelf
        elem = document.getElementById("cuvette"); 
        // Move the cuvette from the shelf to the table
        elem.style.width = "2.5%";
        // Detect the current position of the flask.
        initial_top = Math.round($('#cuvette').position().top);
        initial_left = Math.round($('#cuvette').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 340;
        step_top = 1;
        step_left = -0.6;
        type_of_movement = 0;
        // Move it to the table.
        moveImage();
        // Change the next instruction to be followed.
        document.getElementById("demo").innerHTML = "దశ-సంఖ్య 7: కువెట్‌పై క్లిక్ చేయడం ద్వారా మైక్రోపిపెట్ నుండి క్యూవెట్‌లోకి ద్రావణాన్ని పోయండి (వాస్తవ కొలతలలో క్యూట్ దాని వాల్యూమ్‌లో మూడింట రెండు వంతుల వరకు నిండి ఉంటుంది)";
        cursorPointers('cuvette','pipette');
        step_no++;
    }
    else if(step_no == 9){
        // Depending on the cuvette choosen get images accordingly.
        elem = document.getElementById("cuvette"); 
        // Move the cuvette from the table to the socket in the spectrophotmeter.
        // Detect the current position of the flask.
        initial_top = Math.round($('#cuvette').position().top);
        initial_left = Math.round($('#cuvette').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 221;
        step_top = -0.5;
        step_left = -1.75;
        type_of_movement = 1;
        // Move it to a position over the spectrophotometer.
        moveImage();
        // After 1200ms call moveDown() method.
        setTimeout("moveDown()",1500);
        step_no++;
    }
}

// This method is used to move the cuvette downwards into the spectrophotometer.
function moveDown(){
    // Detect the current position of the flask.
    initial_top = Math.round($('#cuvette').position().top);
    initial_left = Math.round($('#cuvette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 250;
    step_top = 1;
    step_left = 0;
    type_of_movement = 0;
    // Move it into the spectrophotometer.
    moveImage();
    // Call extraCuvette() method which moves the reference cuvette into the spectrophotometer.
    setTimeout("extraCuvette()",2000);
}

// This method is used to move the reference cuvette into the spectrophptometer. 
function extraCuvette(){
    // Get the transparent image and replace it with a reference cuvette image and move it down into the spectrophotometer.
    $('#ref_cuvette').attr('src', 'images/cuvette_filled_water.png'); 
    document.getElementById("reference").style.visibility ="visible";
    elem = document.getElementById("ref_cuvette"); 
    // Detect the current position of the flask.
    initial_top = Math.round($('#ref_cuvette').position().top);
    initial_left = Math.round($('#ref_cuvette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 42;
    step_top = 0.5;
    step_left = -1.38;
    type_of_movement = 0;
    // Move it into the spectrophotometer.
    moveImage();
    // After 800ms make the sample cuvette and the referance cuvette hidden and replace the spectrophotometer with an image that has cuvette within them. 
    setTimeout(function(){
        $('#ref_cuvette, #cuvette, #reference').css('visibility', 'hidden');
        cursorPointers('cuvette', 'spectrolid_trans_button');
        count++;
    },2000);

}
