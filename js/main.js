function Bold(){
var Text=document.getElementById("textArea")
if (Text.style.fontWeight=="bold"){
    Text.style.fontWeight="normal";
}
else {Text.style.fontWeight="bold"};
}

function Italic(){
    var Text=document.getElementById("textArea")
    if (Text.style.fontStyle=="italic"){
        Text.style.fontStyle="normal";
    }
    else {Text.style.fontStyle="italic"};
    }

    function Underline(){
        var Text=document.getElementById("textArea")
        if (Text.style.textDecoration=="underline"){
            Text.style.textDecoration="none";
        }
        else {Text.style.textDecoration="underline"};
        }



function changeSize(){
    document.getElementById('textArea').style.fontSize=document.getElementById('selectSize').value
}

function changeFont(){
    document.getElementById('textArea').style.fontFamily=document.getElementById('selectFont').value
}

$(".course1").mouseenter(function(){
    $(this).find(".btn").show();
    $(this).css("opacity","0.5");
})
$(".course1").mouseleave(function(){
    $(this).find(".btn").hide();
    $(this).css("opacity","1");
})

$(".course2").mouseenter(function(){
    $(this).find(".btn").show();
    $(this).css("opacity","0.5");
})

$(".course2").mouseleave(function(){
    $(this).find(".btn").hide();
    $(this).css("opacity","1");
})

$(".course3").mouseenter(function(){
    $(this).find(".btn").show();
    $(this).css("opacity","0.5");
})

$(".course3").mouseleave(function(){
    $(this).find(".btn").hide();
    $(this).css("opacity","1");
})

$(".course4").mouseenter(function(){
    $(this).find(".btn").show();
    $(this).css("opacity","0.5");
})

$(".course4").mouseleave(function(){
    $(this).find(".btn").hide();
    $(this).css("opacity","1");
})

$(".course5").mouseenter(function(){
    $(this).find(".btn").show();
    $(this).css("opacity","0.5");
})

$(".course5").mouseleave(function(){
    $(this).find(".btn").hide();
    $(this).css("opacity","1");
})

$(".course6").mouseenter(function(){
    $(this).find(".btn").show();
    $(this).css("opacity","0.5");
})

$(".course6").mouseleave(function(){
    $(this).find(".btn").hide();
    $(this).css("opacity","1");
})

$(".course7").mouseenter(function(){
    $(this).find(".btn").show();
    $(this).css("opacity","0.5");
})

$(".course7").mouseleave(function(){
    $(this).find(".btn").hide();
    $(this).css("opacity","1");
})

$(".course8").mouseenter(function(){
    $(this).find(".btn").show();
    $(this).css("opacity","0.5");
})

$(".course8").mouseleave(function(){
    $(this).find(".btn").hide();
    $(this).css("opacity","1");
})

$(".course9").mouseenter(function(){
    $(this).find(".btn").show();
    $(this).css("opacity","0.5");
})

$(".course9").mouseleave(function(){
    $(this).find(".btn").hide();
    $(this).css("opacity","1");
})
