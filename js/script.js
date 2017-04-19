$(function () {


    // Get the JSON data from the file and display
    $.getJSON("data/data.json", function (data) {

        console.log(data);

        //Call the display functions
        displayVG("#videogames", data.videogames);
        displayFood("#foods", data.foods);

        //Hide description and images

        $("#videogames p").hide();
        $("#foods p").hide();

        //Click event to toggle details under videogames
        


        $("#videogames h2").on("click", function () {
            

            $(this).next().toggle();
            
            //Add in logic so that everything else hides. 
            $("#videogames h2").not(this).next().hide();
            $("#foods h2").not(this).next().hide();


        });

        //Click event to toggle details under foods
        $("#foods h2").on("click", function () {

            $(this).next().toggle();
            
            //Hide everything else
            $("#videogames h2").not(this).next().hide();
            $("#foods h2").not(this).next().hide();
        });

    });


    //Videogame portion -------------------------------------------

    getVGHtml = function (videogames) {

        //Display the videogames
        html = "";
        html += "<h2>" + videogames.name + "</h2>"
        html += "<p>" + videogames.description + "<br><br>" + "<img src=" + "images/" + videogames.image + " " + "height='300'" + " " + "width='450'" + ">" + "<p>";
        return html;
    }

    displayVG = function (target, videogameArray) {

        html = "";

        $.each(videogameArray, function (index) {

            console.log(videogameArray[index]);
            videogames = videogameArray[index];
            html += getVGHtml(videogames);
        })

        $(target).append(html);
    }

    //Foods portion ------------------------------------------------

    getFoodHtml = function (foods) {
        //Display the foods
        html = "";
        html += "<h2>" + foods.name + "</h2>"
        html += "<p>" + foods.description + "<br><br>" + "<img src=" + "images/" + foods.image + " " + "height='300'" + " " + "width='450'" + ">" + "<p>";


        return html;
    }

    displayFood = function (target, foodArray) {
        html = "";

        $.each(foodArray, function (index) {

            console.log(foodArray[index]);
            foods = foodArray[index];
            html += getFoodHtml(foods);
        })

        $(target).append(html);

    }

});
