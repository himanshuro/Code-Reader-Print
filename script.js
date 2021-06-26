
    
    function updateOutput(){

        $("iframe").contents().find("html").html("<html><head><style type='text/css'>" 
        + $("#cssPanel").val() + "</style></head><body>" 
        + $("#htmlPanel").val() + "</body></html>");

        document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
        
    }

    $(".toggleButton").hover(function(){
        // Overwrites the other class when hovered
        $(this).addClass("highlightedButton");

    }, function(){

        $(this).removeClass("highlightedButton");

    });

    // Things happening when clicking any toggle button
    $(".toggleButton").click(function(){

        $(this).toggleClass("active");

        var panelId = $(this).attr("id") + "Panel";
        
        $("#"+panelId).toggleClass("hidden");

        var numberOfActivePanels = 4 - $(".hidden").length;
        $(".panel").width(($(window).width()/numberOfActivePanels)- 5);

    })

    $(".panel").height($(window).height() - $("#header").height() - 23);

    $(".panel").width(($(window).width()/2)- 5);

    updateOutput();
    // To change content as soon as typing
    $("textarea").on("change keyup paste", function(){

        updateOutput();

    })