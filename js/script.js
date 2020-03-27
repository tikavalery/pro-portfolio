
$(document).ready(function(){
    console.log("YES")
    $('#slides').superslides({
        animation:"fade",
        play:4000,
        inherit_height_from: '#hero',   
        pagination:false
    })

 var typed = new Typed(".typed",{
     strings:["Software Engineer","Full Stack Developer","Front-End Emphasis","REACT Developer"],
     typeSpeed:70,
     loop:true,
     startDelay:1000,
     showCursor:false,
     inherit_height_from:".overlay"
 })  
 $('.owl-carousel').owlCarousel({
    loop:true,
    item:4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        } 
    }
}) 


var skillsTopOffset = $(".skillsSection").offset().top;
$(window).scroll(function(){
    if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
        $('.chart').easyPieChart({
            easing:"easeInOut",
            barColor:"#3F681c",
            trackColor:false,
            scaleColor:false,
            lineWidth:4,
            size:152,
            onStep:function (from,to,percent){
                $(this.el).find(".percent").text(Math.round(percent));
            }
        });  
    }
});
// Animating the skills section.
 



    

   



// Animating technical stats section
// var skillsStatTopOffset = $("#skillsStat").offset().top;
// console.log(skillsStatTopOffset);
// console.log(window.pageYOffset)
// if(window.pageYOffset > skillsStatTopOffset - $(window).height() + 200){
//     console.log("yes")
//     anime({
//         targets: '#skillsStat',
//         translateX: 1350,
//         duration: 7000,
    
//      })
//        }
/// Fancy box library 
$("[data-fancybox]").fancybox();

$(".items").isotope({
    filter:"*",
    animationOption: {
        duration:1500,
        easing:"linear",
        queue:false
    }

})
$("#filter a").click(function(){
  var yes =  $("#filter .current").removeClass("current");
  console.log(yes)
    $(this).addClass("current");
    var selector = $(this).attr("data-filter");
    
    $(".items").isotope({
        filter: selector,
        animationOption: {
            duration:1500,
            easing:"linear",
            queue:false
        }
    });
    return false;
});
$("#navigation div a").click(function(e){
    e.preventDefault();
    var targetElement = $(this).attr("href");
    console.log("yess")
    console.log(targetElement)
    var targetPosition = $(targetElement).offset().top;
    console.log(targetPosition)
    $("html,body").animate({scrollTop:targetPosition - 90}, "slow")
})
})

