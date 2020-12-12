$("[data-toggle='toggle']").click(function(e) {
    var selector = $(this).data("target");
    $(selector).toggleClass('in');

    if(e.target.id=="reverse"){
        $(e.target).toggleClass('out');
    }

    // if($(selector)[0].className == "in"){
    //     console.log($(selector)[0])
    //     $(selector)[0].childNodes[1].style.display="block"
    // }
    // else{
    //     console.log($(selector)[0])
    //     $(selector)[0].childNodes[1].style.display="none"
    // }
});