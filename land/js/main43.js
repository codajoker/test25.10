  //  function sleep(ms) {
  //   ms += new Date().getTime();
  //   while (new Date() < ms){

  //   }
  // }



$(document).ready(function () {
  $('#rootwizard').bootstrapWizard({});
});


$(document).mouseup(function (e) {
  var container = $(".policy");
  if (container.has(e.target).length === 0) {
    container.fadeOut("slow");
    $('body').css('overflow-y', 'auto');
  }
});

$(".popup-close").click(function () {
  $(".popup-ver").fadeOut("slow");
  $("#errorLead").css('display', 'none');

});

$(".footer__policy-link").click(function () {
  $(".policy").fadeIn("slow");
  $('body').css('overflow-y', 'hidden');

});
$(".policy-close, .close-link-policy").click(function (event) {

  $(".policy").fadeOut("slow");
  $('body').css('overflow-y', 'auto');

});



// [...document.getElementsByClassName("tasks-field-wrap")].forEach(elem=>{
//   // console.log(elem)
//   elem.addEventListener("click", 
//     (e)=>{ 
//       // console.log("elem", e)
//       document.querySelector(".active-item")? document.querySelector(".active-item").classList.remove("active-item"): null;
//       e.target.classList.add("active-item")
//       sleep(750);
//     }
//     )})

// $('.tasks-field-wrap').click(function (e) {

//   $('.active .tasks-field-wrap').removeClass("active-item");

//   $(this).addClass("active-item");


//   sleep(750);

// });

// $('.tasks-field-wrap').on('touchenter click', function(event) {


//   $('.active .tasks-field-wrap').removeClass("active-item");

//   $(this).addClass("active-item");


// });



$( "#q1" ).click(function() {
  $("#q1").fadeIn("slow").addClass( "active-item" );
  // $("#tab2").fadeIn("slow").addClass( "active" );
  // $("#tab1").removeClass( "active");
  setTimeout(function() {
    $("#q2").removeClass( "active-item" );
    $("#q3").removeClass( "active-item" );
    $("#q4").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "block");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "15%");
        $(".progress").css("border-top-left-radius", "20px");
        // $(".progress").css("display", "block");
    $("#stage").val("2");
    }, 500);
  // $("#tab2").fadeIn("slow").css("display", "block");

});

$( "#q2" ).click(function() {
  $("#q2").fadeIn("slow").addClass( "active-item" );
  // $("#tab2").addClass( "active" );
  // $("#tab1").removeClass( "active" );
  setTimeout(function() {
    $("#q1").removeClass( "active-item" );
    $("#q3").removeClass( "active-item" );
    $("#q4").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "block");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "15%");
        $(".progress").css("border-top-left-radius", "20px");
        // $(".progress").fadeIn("slow").css("display", "block");
    $("#stage").val("2");
    }, 500);
});

$( "#q3" ).click(function() {
  $("#q3").fadeIn("slow").addClass( "active-item" );
  // $("#tab2").addClass( "active" );
  // $("#tab1").removeClass( "active" );
  setTimeout(function() {
    $("#q1").removeClass( "active-item" );
    $("#q2").removeClass( "active-item" );
    $("#q4").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").fadeIn("slow").css("display", "block");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "15%");
        $(".progress").css("border-top-left-radius", "20px");
        // $(".progress").fadeIn("slow").css("display", "block");
    $("#stage").val("2");
    }, 500);
});

$( "#q4" ).click(function() {
  $("#q4").fadeIn("slow").addClass( "active-item" );
  // $("#tab2").addClass( "active" );
  // $("#tab1").removeClass( "active" );
  setTimeout(function() {
    $("#q1").removeClass( "active-item" );
    $("#q2").removeClass( "active-item" );
    $("#q3").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").fadeIn("slow").css("display", "block");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "15%");
        $(".progress").css("border-top-left-radius", "20px");
        // $(".progress").fadeIn("slow").css("display", "block");
    $("#stage").val("2");
    }, 500);
});

$( "#q5" ).click(function() {
  $("#q5").fadeIn("slow").addClass( "active-item" );
  $("#tab3").addClass( "active" );
  $("#tab2").removeClass( "active" );
  setTimeout(function() {
    $("#q6").removeClass( "active-item" );
    $("#q7").removeClass( "active-item" );
    $("#q8").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").fadeIn("slow").css("display", "block");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "25%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("3");
    }, 500);
});

$( "#q6" ).click(function() {
  $("#q6").fadeIn("slow").addClass( "active-item" );
  $("#tab3").addClass( "active" );
  $("#tab2").removeClass( "active" );
  setTimeout(function() {
    $("#q7").removeClass( "active-item" );
    $("#q5").removeClass( "active-item" );
    $("#q8").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").fadeIn("slow").css("display", "block");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "25%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("3");
    }, 500);
});

$( "#q7" ).click(function() {
  $("#q7").fadeIn("slow").addClass( "active-item" );
  $("#tab3").addClass( "active" );
  $("#tab2").removeClass( "active" );
  setTimeout(function() {
    $("#q5").removeClass( "active-item" );
    $("#q6").removeClass( "active-item" );
    $("#q8").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").fadeIn("slow").css("display", "block");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "25%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("3");
    }, 500);
});

$( "#q8" ).click(function() {
  $("#q8").fadeIn("slow").addClass( "active-item" );
  $("#tab3").addClass( "active" );
  $("#tab2").removeClass( "active" );
  setTimeout(function() {
    $("#q6").removeClass( "active-item" );
    $("#q7").removeClass( "active-item" );
    $("#q5").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").fadeIn("slow").css("display", "block");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "25%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("3");
    }, 500);
});

$( "#q9" ).click(function() {
  $("#q9").fadeIn("slow").addClass( "active-item" );
  $("#tab4").addClass( "active" );
  $("#tab3").removeClass( "active" );
  setTimeout(function() {
    $("#q10").removeClass( "active-item" );
    $("#q11").removeClass( "active-item" );
    $("#q12").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").fadeIn("slow").css("display", "block");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "35%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("4");
    }, 500);
});

$( "#q10" ).click(function() {
  $("#q10").fadeIn("slow").addClass( "active-item" );
  $("#tab4").addClass( "active" );
  $("#tab3").removeClass( "active" );
  setTimeout(function() {
    $("#q9").removeClass( "active-item" );
    $("#q11").removeClass( "active-item" );
    $("#q12").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").fadeIn("slow").css("display", "block");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "35%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("4");
    }, 500);
});

$( "#q11" ).click(function() {
  $("#q11").fadeIn("slow").addClass( "active-item" );
  $("#tab4").addClass( "active" );
  $("#tab3").removeClass( "active" );
  setTimeout(function() {
    $("#q9").removeClass( "active-item" );
    $("#q10").removeClass( "active-item" );
    $("#q12").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").fadeIn("slow").css("display", "block");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "35%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("4");
    }, 500);
});

$( "#q12" ).click(function() {
  $("#q12").fadeIn("slow").addClass( "active-item" );
  $("#tab4").addClass( "active" );
  $("#tab3").removeClass( "active" );
  setTimeout(function() {
    $("#q9").removeClass( "active-item" );
    $("#q11").removeClass( "active-item" );
    $("#q10").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").fadeIn("slow").css("display", "block");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "35%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("4");
    }, 500);
});

$( "#q13" ).click(function() {
  $("#q13").fadeIn("slow").addClass( "active-item" );
  $("#tab5").addClass( "active" );
  $("#tab4").removeClass( "active" );
  setTimeout(function() {
    $("#q14").removeClass( "active-item" );
    $("#q15").removeClass( "active-item" );
    $("#q16").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").fadeIn("slow").css("display", "block");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "45%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("5");
    }, 500);
});

$( "#q14" ).click(function() {
  $("#q14").fadeIn("slow").addClass( "active-item" );
  $("#tab5").addClass( "active" );
  $("#tab4").removeClass( "active" );
  setTimeout(function() {
    $("#q13").removeClass( "active-item" );
    $("#q15").removeClass( "active-item" );
    $("#q16").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").fadeIn("slow").css("display", "block");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "45%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("5");
    }, 500);
});

$( "#q15" ).click(function() {
  $("#q15").fadeIn("slow").addClass( "active-item" );
  $("#tab5").addClass( "active" );
  $("#tab4").removeClass( "active" );
  setTimeout(function() {
    $("#q13").removeClass( "active-item" );
    $("#q14").removeClass( "active-item" );
    $("#q16").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").fadeIn("slow").css("display", "block");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "45%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("5");
    }, 500);
});

$( "#q16" ).click(function() {
  $("#q16").fadeIn("slow").addClass( "active-item" );
  $("#tab5").addClass( "active" );
  $("#tab4").removeClass( "active" );
  setTimeout(function() {
    $("#q13").removeClass( "active-item" );
    $("#q15").removeClass( "active-item" );
    $("#q14").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").fadeIn("slow").css("display", "block");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "45%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("5");
    }, 500);
});

$( "#q17" ).click(function() {
  $("#q17").fadeIn("slow").addClass( "active-item" );
  $("#tab6").addClass( "active" );
  $("#tab5").removeClass( "active" );
  setTimeout(function() {
    $("#q18").removeClass( "active-item" );
    $("#q19").removeClass( "active-item" );
    $("#q20").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").fadeIn("slow").css("display", "block");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "55%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("6");
    }, 500);
});

$( "#q18" ).click(function() {
  $("#q18").fadeIn("slow").addClass( "active-item" );
  $("#tab6").addClass( "active" );
  $("#tab5").removeClass( "active" );
  setTimeout(function() {
    $("#q17").removeClass( "active-item" );
    $("#q19").removeClass( "active-item" );
    $("#q20").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").fadeIn("slow").css("display", "block");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "55%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("6");
    }, 500);
});

$( "#q19" ).click(function() {
  $("#q19").fadeIn("slow").addClass( "active-item" );
  $("#tab6").addClass( "active" );
  $("#tab5").removeClass( "active" );
  setTimeout(function() {
    $("#q17").removeClass( "active-item" );
    $("#q18").removeClass( "active-item" );
    $("#q20").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").fadeIn("slow").css("display", "block");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "55%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("6");
    }, 500);
});

$( "#q20" ).click(function() {
  $("#q20").fadeIn("slow").addClass( "active-item" );
  $("#tab6").addClass( "active" );
  $("#tab5").removeClass( "active" );
  setTimeout(function() {
    $("#q18").removeClass( "active-item" );
    $("#q19").removeClass( "active-item" );
    $("#q27").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").fadeIn("slow").css("display", "block");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "55%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("6");
    }, 500);
});

$( "#q21" ).click(function() {
  $("#q21").fadeIn("slow").addClass( "active-item" );
  $("#tab7").addClass( "active" );
  $("#tab6").removeClass( "active" );
  setTimeout(function() {
    $("#q22").removeClass( "active-item" );
    $("#q23").removeClass( "active-item" );
    $("#q24").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").fadeIn("slow").css("display", "block");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "65%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("7");
    }, 500);
});

$( "#q22" ).click(function() {
  $("#q22").fadeIn("slow").addClass( "active-item" );
  $("#tab7").addClass( "active" );
  $("#tab6").removeClass( "active" );
  setTimeout(function() {
    $("#q21").removeClass( "active-item" );
    $("#q23").removeClass( "active-item" );
    $("#q24").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").fadeIn("slow").css("display", "block");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "65%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("7");
    }, 500);
});

$( "#q23" ).click(function() {
  $("#q23").fadeIn("slow").addClass( "active-item" );
  $("#tab7").addClass( "active" );
  $("#tab6").removeClass( "active" );
  setTimeout(function() {
    $("#q22").removeClass( "active-item" );
    $("#q21").removeClass( "active-item" );
    $("#q24").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").fadeIn("slow").css("display", "block");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "65%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("7");
    }, 500);
});

$( "#q24" ).click(function() {
  $("#q24").fadeIn("slow").addClass( "active-item" );
  $("#tab7").addClass( "active" );
  $("#tab6").removeClass( "active" );
  setTimeout(function() {
    $("#q22").removeClass( "active-item" );
    $("#q23").removeClass( "active-item" );
    $("#q21").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").fadeIn("slow").css("display", "block");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "65%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("7");
    }, 500);
});

$( "#q25" ).click(function() {
  $("#q25").fadeIn("slow").addClass( "active-item" );
  $("#tab8").addClass( "active" );
  $("#tab7").removeClass( "active" );
  setTimeout(function() {
    $("#q26").removeClass( "active-item" );
    $("#q27").removeClass( "active-item" );
    $("#q28").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").fadeIn("slow").css("display", "block");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "75%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("8");
    }, 500);
});

$( "#q26" ).click(function() {
  $("#q26").fadeIn("slow").addClass( "active-item" );
  $("#tab8").addClass( "active" );
  $("#tab7").removeClass( "active" );
  setTimeout(function() {
    $("#q25").removeClass( "active-item" );
    $("#q27").removeClass( "active-item" );
    $("#q28").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").fadeIn("slow").css("display", "block");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "75%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("8");
    }, 500);
});

$( "#q27" ).click(function() {
  $("#q27").fadeIn("slow").addClass( "active-item" );
  $("#tab8").addClass( "active" );
  $("#tab7").removeClass( "active" );
  setTimeout(function() {
    $("#q26").removeClass( "active-item" );
    $("#q25").removeClass( "active-item" );
    $("#q28").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").fadeIn("slow").css("display", "block");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "75%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("8");
    }, 500);
});

$( "#q28" ).click(function() {
  $("#q28").fadeIn("slow").addClass( "active-item" );
  $("#tab8").addClass( "active" );
  $("#tab7").removeClass( "active" );
  setTimeout(function() {
    $("#q26").removeClass( "active-item" );
    $("#q27").removeClass( "active-item" );
    $("#q25").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").fadeIn("slow").css("display", "block");
    $("#tab9").css("display", "none");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "75%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("8");
    }, 500);
});

$( "#q29" ).click(function() {
  $("#q29").fadeIn("slow").addClass( "active-item" );
  $("#tab9").addClass( "active" );
  $("#tab8").removeClass( "active" );
  setTimeout(function() {
    $("#q30").removeClass( "active-item" );
    $("#q31").removeClass( "active-item" );
    $("#q32").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").fadeIn("slow").css("display", "block");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "85%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("9");
    }, 500);
});

$( "#q30" ).click(function() {
  $("#q30").fadeIn("slow").addClass( "active-item" );
  $("#tab9").addClass( "active" );
  $("#tab8").removeClass( "active" );
  setTimeout(function() {
    $("#q29").removeClass( "active-item" );
    $("#q31").removeClass( "active-item" );
    $("#q32").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").fadeIn("slow").css("display", "block");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "85%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("9");
    }, 500);
});

$( "#q31" ).click(function() {
  $("#q31").fadeIn("slow").addClass( "active-item" );
  $("#tab9").addClass( "active" );
  $("#tab8").removeClass( "active" );
  setTimeout(function() {
    $("#q29").removeClass( "active-item" );
    $("#q30").removeClass( "active-item" );
    $("#q32").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").fadeIn("slow").css("display", "block");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "85%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("9");
    }, 500);
});

$( "#q32" ).click(function() {
  $("#q32").fadeIn("slow").addClass( "active-item" );
  $("#tab9").addClass( "active" );
  $("#tab8").removeClass( "active" );
  setTimeout(function() {
    $("#q29").removeClass( "active-item" );
    $("#q31").removeClass( "active-item" );
    $("#q30").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").fadeIn("slow").css("display", "block");
    $("#tab10").css("display", "none");
        $(".progress").css("width", "85%");
        // $(".progress").css("border-top-left-radius", "20px");
    $("#stage").val("9");
    }, 500);
});

$( "#q33" ).click(function() {
  $("#q33").fadeIn("slow").addClass( "active-item" );
  setTimeout(function() {
    $("#q34").removeClass( "active-item" );
    // $("#q31").removeClass( "active-item" );
    // $("#q30").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").fadeIn("slow").css("display", "block");
        $(".progress").css("width", "100%");
        // $(".progress").css("display", "none");
        $(".progress").css("border-top-right-radius", "20px");
    $("#stage").val("10");
    }, 500);
});

$( "#q34" ).click(function() {
  $("#q34").fadeIn("slow").addClass( "active-item" );
  setTimeout(function() {
    $("#q33").removeClass( "active-item" );
    // $("#q31").removeClass( "active-item" );
    // $("#q30").removeClass( "active-item" );
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
    $("#tab4").css("display", "none");
    $("#tab5").css("display", "none");
    $("#tab6").css("display", "none");
    $("#tab7").css("display", "none");
    $("#tab8").css("display", "none");
    $("#tab9").css("display", "none");
    $("#tab10").fadeIn("slow").css("display", "block");
        $(".progress").css("width", "100%");
        // $(".progress").css("display", "none");
        $(".progress").css("border-top-right-radius", "20px");
    $("#stage").val("10");
    }, 500);
});



$( ".pager-link" ).click(function() {
  val = $("#stage").val();
  
    if(val == 2){

      $("#tab1").css("display", "block");
      $("#tab2").css("display", "none");
      $("#tab3").css("display", "none");
      $("#tab4").css("display", "none");
      $("#tab5").css("display", "none");
      $("#tab6").css("display", "none");
      $("#tab7").css("display", "none");
      $("#tab8").css("display", "none");
      $("#tab9").css("display", "none");
      $("#tab10").css("display", "none");
        $(".progress").css("width", "0px");
      $("#stage").val("1");
  }else if(val == 3){
      $("#tab1").css("display", "none");
      $("#tab2").css("display", "block");
      $("#tab3").css("display", "none");
      $("#tab4").css("display", "none");
      $("#tab5").css("display", "none");
      $("#tab6").css("display", "none");
      $("#tab7").css("display", "none");
      $("#tab8").css("display", "none");
      $("#tab9").css("display", "none");
      $("#tab10").css("display", "none");
        $(".progress").css("width", "10%");

      $("#stage").val("2");
  }else if(val == 4){
      $("#tab1").css("display", "none");
      $("#tab2").css("display", "none");
      $("#tab3").css("display", "block");
      $("#tab4").css("display", "none");
      $("#tab5").css("display", "none");
      $("#tab6").css("display", "none");
      $("#tab7").css("display", "none");
      $("#tab8").css("display", "none");
      $("#tab9").css("display", "none");
      $("#tab10").css("display", "none");
        $(".progress").fadeIn("slow").css("width", "20%");
      $("#stage").val("3");
  }else if(val == 5){
      $("#tab1").css("display", "none");
      $("#tab2").css("display", "none");
      $("#tab3").css("display", "none");
      $("#tab4").css("display", "block");
      $("#tab5").css("display", "none");
      $("#tab6").css("display", "none");
      $("#tab7").css("display", "none");
      $("#tab8").css("display", "none");
      $("#tab9").css("display", "none");
      $("#tab10").css("display", "none");
        $(".progress").fadeIn("slow").css("width", "30%");
      $("#stage").val("4");
  }else if(val == 6){
      $("#tab1").css("display", "none");
      $("#tab2").css("display", "none");
      $("#tab3").css("display", "none");
      $("#tab4").css("display", "none");
      $("#tab5").css("display", "block");
      $("#tab6").css("display", "none");
      $("#tab7").css("display", "none");
      $("#tab8").css("display", "none");
      $("#tab9").css("display", "none");
      $("#tab10").css("display", "none");
        $(".progress").fadeIn("slow").css("width", "40%");
      $("#stage").val("5");
  }else if(val == 7){
      $("#tab1").css("display", "none");
      $("#tab2").css("display", "none");
      $("#tab3").css("display", "none");
      $("#tab4").css("display", "none");
      $("#tab5").css("display", "none");
      $("#tab6").css("display", "block");
      $("#tab7").css("display", "none");
      $("#tab8").css("display", "none");
      $("#tab9").css("display", "none");
      $("#tab10").css("display", "none");
        $(".progress").fadeIn("slow").css("width", "50%");
      $("#stage").val("6");
  }else if(val == 8){
      $("#tab1").css("display", "none");
      $("#tab2").css("display", "none");
      $("#tab3").css("display", "none");
      $("#tab4").css("display", "none");
      $("#tab5").css("display", "none");
      $("#tab6").css("display", "none");
      $("#tab7").css("display", "block");
      $("#tab8").css("display", "none");
      $("#tab9").css("display", "none");
      $("#tab10").css("display", "none");
        $(".progress").fadeIn("slow").css("width", "60%");
      $("#stage").val("7");
  }else if(val == 9){
      $("#tab1").css("display", "none");
      $("#tab2").css("display", "none");
      $("#tab3").css("display", "none");
      $("#tab4").css("display", "none");
      $("#tab5").css("display", "none");
      $("#tab6").css("display", "none");
      $("#tab7").css("display", "none");
      $("#tab8").css("display", "block");
      $("#tab9").css("display", "none");
      $("#tab10").css("display", "none");
        $(".progress").fadeIn("slow").css("width", "70%");
      $("#stage").val("8");
  }else if(val == 7){
      $("#tab1").css("display", "none");
      $("#tab2").css("display", "none");
      $("#tab3").css("display", "none");
      $("#tab4").css("display", "none");
      $("#tab5").css("display", "none");
      $("#tab6").css("display", "none");
      $("#tab7").css("display", "none");
      $("#tab8").css("display", "none");
      $("#tab9").css("display", "block");
      $("#tab10").css("display", "none");
        $(".progress").fadeIn("slow").css("width", "80%");
      $("#stage").val("9");
  }else if(val == 7){
      $("#tab1").css("display", "none");
      $("#tab2").css("display", "none");
      $("#tab3").css("display", "none");
      $("#tab4").css("display", "none");
      $("#tab5").css("display", "none");
      $("#tab6").css("display", "none");
      $("#tab7").css("display", "none");
      $("#tab8").css("display", "none");
      $("#tab9").css("display", "none");
      $("#tab10").css("display", "block");
        $(".progress").fadeIn("slow").css("width", "90%");
      $("#stage").val("10");
  }
    


});


