var currentDayEl = document.getElementById('currentDay')
var now = moment()
var formatDay = "dddd, MMMM Do";
currentDayEl.innerText = now.format(formatDay);



// text data is stored locally on click of save button
$(".saveBtn").on("click", function(){
    // grabs the text that was entered in the textarea
    var text = $(this)
        .siblings(".description")
        .val();
    
    // grabs the id of the row the task is on
    var location = $(this)
        .siblings(".description")
        .attr("id");
    
    // saves value to local storage
    localStorage.setItem(location, text);
});

// checks to see what class should be added according to what time it is 
function colorCode(){ 
       
    var currentHour = moment().hour()

    $('.row').each( function() {
        // grab the id of the row to color
        var grabId = $(this)
        .children('.description')
        .attr('id')

        // decide which class to add to the row depending on time
        if (currentHour > grabId) {
            $(this)
            .children('.description')
            .addClass('past');
        } else if (currentHour < grabId) {
            $(this)
            .children('.description')
            .addClass('future');
        } else {
            $(this)
            .children('.description')
            .addClass('present')
        }
    
        // set the value of that row from local storage
        $(this)
        .children('.description')
        .val(localStorage.getItem(grabId))
    })
};

// runs the function to assign class names
colorCode();
