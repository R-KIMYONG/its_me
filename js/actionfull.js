$(function(){

    $("body").on('mousemove',function(e){
		posX = e.pageX/50;
		posY = e.pageY/50;
		
		$(".year .y2").css({"right":-50+posX,"bottom":-250+posY})
        $(".year .y1").css({"right":-150+posX,"top":-250+posY})
	});
    let intro =0;
    setInterval(function(){
        if(intro==0){
            $(".introimg1").delay(4500).animate({left:"0"},function(){
                $(".introimg4").delay(500).animate({top:"0"},function(){
                    $(".introimg3").delay(500).animate({right:"0"},function(){
                        $(".introimg2").delay(500).animate({top:"0"},function(){
                            $(".introimg5").delay(500).animate({width:"100%"},function(){
                                $(".introimg5 h1").delay(500).fadeIn().addClass("on").animate({top:"50%"},function(){
                                    $(".title1 .line").addClass("on")
                                    $(".title1 h3").delay(1000).animate({opacity:"1"})
                                    $(".introimg").fadeOut();
                                    $(".introimg5").css({background:"none"})
                                    $(".box1").fadeOut();
                                })
                            })                            
                        })
                    })
                })
            })
            intro=1
        }
    })

    let baseline = -200;
    let pos1 = $("#home").offset().top + baseline;
    let pos2 = $("#about").offset().top + baseline;
    let pos3 = $("#project").offset().top + baseline;
    let pos4 = $("#poster").offset().top + baseline;
    let pos5 = $("#contact").offset().top + baseline;

    $(".scrollicon").on("click", function() {
        $("html, body").animate({
          scrollTop: $(window).scrollTop() + $(window).height()
        }, 800); 
      });
    $(".parent").on("click",function(){
        $("html,body").animate({scrollTop:"0"},800)
    })

    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();

        if (scroll >= pos1 && scroll < pos2) {
            $("#nav li").removeClass("on");
            $("#nav li").eq(0).addClass("on");
            $(".posterintro").removeClass("on")
            $(".posterintro").fadeIn();
            $("#contact .con4 .my .m2").children("img").removeClass("on")
            $(".sns").removeClass("on")
        } else if (scroll >= pos2 && scroll < pos3) {
            $("#nav li").removeClass("on");
            $("#nav li").eq(1).addClass("on");
            $("#about .profil").stop().animate({left:"0", opacity:"1"},function(){
                $("#about .profil").delay(1000).addClass("on")
            });
            $(".kategorie ul li").delay(5000).addClass("on");
            $(".posterintro").removeClass("on")
            $(".posterintro").fadeIn();
            $("#contact .con4 .my .m2").children("img").removeClass("on")
            $(".sns").removeClass("on")
        } else if (scroll >= pos3 && scroll < pos4) {
            $("#nav li").removeClass("on");
            $("#nav li").eq(2).addClass("on");
            $(".posterintro").removeClass("on")
            $(".posterintro").fadeIn();
            $("#contact .con4 .my .m2").children("img").removeClass("on")
            $(".sns").removeClass("on")
        } else if (scroll >= pos4 && scroll < pos5) {
            $("#nav li").removeClass("on");
            $("#nav li").eq(3).addClass("on");
            $(".posterintro").addClass("on")
            $("#poster .title2,.slidbut,.slide,.page,.tit1,.post1,.post2,.slide_1,.poster1").delay(1800).fadeIn("slow");
            $(".posterintro").delay(2000).fadeOut();
            $("#contact .con4 .my .m2").children("img").removeClass("on")
            $(".sns").removeClass("on")
            
        } else {
            $("#nav li").removeClass("on");
            $("#nav li").eq(4).addClass("on");
            $(".posterintro").removeClass("on")
            $(".posterintro").fadeIn();
            $("#contact .con4 .my .m2").delay(2000).children("img").addClass("on")
            $(".sns").addClass("on")
        }


    });
    $("#nav li").on("click", function () {
        let target = $(this).children("a").attr("href");
        //alert(target);
        let pos = $(target).offset().top;
        //alert(pos);
        $("html,body").stop().animate({ scrollTop: pos }, 1000);
    });
    /*웹디자인 오브젝트 선명하게 보이기 효과+디자인 컨셉 설명 나오기 효과*/
    $(".slideitem .sl").on("mouseenter",function(){
        let s = $(this).index();
        $(".slideitem .sl").stop().removeClass("op")
        $(".slideitem .sl").eq(s).stop().addClass("op")
        $(".concept").stop().animate({bottom:"0px"})

    })
    $(".slideitem .sl").on("mouseleave",function(){
        $(".slideitem .sl").stop().removeClass("op")
        $(".concept").stop().animate({bottom:"-400px"})
    })
    /*웹디자인 & 포스터 타이틀 변경 효과*/ 
    $(".tit1").on("mouseenter",function(){
        $(".t1").stop().animate({opacity:"0"})
        $(".t2").stop().animate({opacity:"1"})

    })
    $(".tit1").on("mouseleave",function(){
        $(".t1").stop().animate({opacity:"1"})
        $(".t2").stop().animate({opacity:"0"})

    })
    /*포스터 좌우 슬라이드*/ 
    let content = 0;
    $(".slidbut .post1,.slidbut2 .rightslide").on("click", function() {
        $(".slide_1").stop().animate({"margin-left": "-100%"},function(){
            $(".slide_1").css({"margin-left":"0%"});
        })        
        $(".slide_1 li").first().appendTo(".slide_1");

        $(".slide_1 li").stop().children(".content1").removeClass("on")
        $(".slide_1 li").delay(4000).eq(0).stop().children(".content1").addClass("on")

        $(".poster1_1").stop().animate({left:"-100%"},function(){
            $(".poster1_1 li").first().appendTo(".poster1_1")
            $(".poster1_1").css({left:"0%"});
        })
        $(".poster1_2").stop().animate({left:"-100%"},function(){
            $(".poster1_2 li").first().appendTo(".poster1_2")
            $(".poster1_2").css({left:"0%"});
        })
        $(".poster1_3").stop().animate({left:"-100%"},function(){
            $(".poster1_3 li").first().appendTo(".poster1_3")
            $(".poster1_3").css({left:"0%"});
        })
        
    });
      
    $(".slidbut .post2,.slidbut2 .leftslide").on("click", function() {        
        $(".slide_1 li").last().prependTo(".slide_1");
        $(".slide_1").css({"margin-left":"-100%"});
        $(".slide .slide_1").stop().animate({"margin-left": "0%"})
        $(".slide_1 li").stop().children(".content1").removeClass("on")
        $(".slide_1 li").delay(4000).eq(0).stop().children(".content1").addClass("on")


        $(".poster1_1 li").last().prependTo(".poster1_1")
        $(".poster1_1").css({left:"-100%"})
        $(".poster1_1").stop().animate({left:"0%"})


        $(".poster1_2 li").last().prependTo(".poster1_2")
        $(".poster1_2").css({left:"-100%"})
        $(".poster1_2").stop().animate({left:"0%"})


        $(".poster1_3 li").last().prependTo(".poster1_3")
        $(".poster1_3").css({left:"-100%"})
        $(".poster1_3").stop().animate({left:"0%"})    
    });


    /*스킬페이지 좌우 슬라이드*/ 
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let e1 = 0;
    $(".kategorie li").on("click",function(){
    a = $(this).index();
    b = $(this).hasClass("fon");
    //alert(a)
    if(b == true){
    $(".kategorie li").removeClass("fon")  ;      
    $(".content .cont").eq(a).stop().animate({left:"-100%"},function(){
        $(".kategorie .line1").stop().eq(a).animate({width:"0%"});
    })
    e1=$(".kategorie li").eq(3).hasClass("fon");
    if(e1==false){
        $(".word").removeClass("on")
        $(".graph img").animate({opacity:"0"})
        $(".hobby").removeClass("on")
    }
    e=$(".kategorie li").eq(2).hasClass("fon");
    if(e==false){
        $(".con3 ul").delay(1000).removeClass("on")
        $(".con3 .cert").delay(1000).removeClass("on")
    }
    d = $(".kategorie li").eq(1).hasClass("fon");
    if(d==false){
        $(".con2 ul").delay(1000).removeClass("on")        
        $(".con2 .map").animate({opacity:"0"})
    }
    c = $(".kategorie li").eq(0).hasClass("fon");
    if(c==false){
        $(".stat").stop().text(0);
        $(".bar>div").delay(1000).removeClass("on")
    }

    }else{
    $(".kategorie li").removeClass("fon");
    $(".kategorie li").eq(a).addClass("fon");
    $(".kategorie .line1").stop().animate({width:"0%"});
    $(".kategorie .line1").eq(a).stop().animate({width:"100%"},function(){
    $(".content .cont").stop().animate({left:"-100%"});
    $(".content .cont").eq(a).stop().animate({left:"0%"});
    })

    e1=$(".kategorie li").eq(3).hasClass("fon");
    if(e1==true){
        $(".word").delay(2000).addClass("on")
        $(".graph img").delay(3200).animate({opacity:"1"})
        $(".hobby").delay(2000).addClass("on")
    }else{
        $(".word").removeClass("on")
        $(".graph img").animate({opacity:"0"})
        $(".hobby").removeClass("on")
    }
    e=$(".kategorie li").eq(2).hasClass("fon");
    if(e==true){
        $(".con3 ul").addClass("on")
        $(".con3 .cert").addClass("on")
    }else{
        $(".con3 ul").delay(1000).removeClass("on")
        $(".con3 .cert").delay(1000).removeClass("on")
    }
    d = $(".kategorie li").eq(1).hasClass("fon");
    if(d==true){        
        $(".con2 ul").addClass("on")
        $(".con2 .map").delay(500).animate({opacity:"0.3"})
    }else{
        $(".con2 ul").removeClass("on")
        $(".con2 .map").delay(1400).animate({opacity:"0"})
    }
    c = $(".kategorie li").eq(0).hasClass("fon");
    if(c==true){
        skill1();
        $(".bar1").addClass("on")
        skill2();
        $(".bar2").addClass("on")
        skill3();
        $(".bar3").addClass("on") 
        skill4();
        $(".bar4").addClass("on") 
        skill5();
        $(".bar5").addClass("on") 
        skill6();
        $(".bar6").addClass("on") 
        skill7();
        $(".bar7").addClass("on") 
        skill8();
        $(".bar8").addClass("on") 
        skill9();
        $(".bar9").addClass("on") 
        skill10();
        $(".bar10").addClass("on")       
    }else{
        $(".bar1").removeClass("on")
        skill2();
        $(".bar2").removeClass("on")
        skill3();
        $(".bar3").removeClass("on") 
        skill4();
        $(".bar4").removeClass("on") 
        skill5();
        $(".bar5").removeClass("on") 
        skill6();
        $(".bar6").removeClass("on") 
        skill7();
        $(".bar7").removeClass("on") 
        skill8();
        $(".bar8").removeClass("on") 
        skill9();
        $(".bar9").removeClass("on") 
        skill10();
        $(".bar10").removeClass("on")
    }
    }

function skill1(){
    let bar1 = 0; 
    start1 = setInterval(function(){
        bar1++;
        if(bar1<=85){                
        $(".stat").stop().eq(0).text(bar1);
        //$(".bar1").stop().animate({width:"90%"},5000)
        }else{
            clearInterval(start1);                
        }
    },20)
}
function skill2(){
    let bar2 = 0; 
    start2 = setInterval(function(){
        bar2++;
        if(bar2<=80){                
        $(".stat").stop().eq(1).text(bar2);
        //$(".bar1").stop().animate({width:"90%"},5000)
        }else{
            clearInterval(start2);                
        }
    },20)
}
function skill3(){
    let bar3 = 0; 
    start3 = setInterval(function(){
        bar3++;
        if(bar3<=50){                
        $(".stat").stop().eq(2).text(bar3);
        //$(".bar1").stop().animate({width:"90%"},5000)
        }else{
            clearInterval(start3);                
        }
    },20)
}
function skill4(){
    let bar4 = 0; 
    start4 = setInterval(function(){
        bar4++;
        if(bar4<=50){                
        $(".stat").stop().eq(3).text(bar4);
        //$(".bar1").stop().animate({width:"90%"},5000)
        }else{
            clearInterval(start4);                
        }
    },20)
}
function skill5(){
    let bar5 = 0; 
    start5 = setInterval(function(){
        bar5++;
        if(bar5<=70){                
        $(".stat").stop().eq(4).text(bar5);
        //$(".bar1").stop().animate({width:"90%"},5000)
        }else{
            clearInterval(start5);                
        }
    },20)
}
function skill6(){
    let bar6 = 0; 
    start6 = setInterval(function(){
        bar6++;
        if(bar6<=60){                
        $(".stat").stop().eq(5).text(bar6);
        //$(".bar1").stop().animate({width:"90%"},5000)
        }else{
            clearInterval(start6);                
        }
    },20)
}
function skill7(){
    let bar7 = 0; 
    start7 = setInterval(function(){
        bar7++;
        if(bar7<=75){                
        $(".stat").stop().eq(6).text(bar7);
        //$(".bar1").stop().animate({width:"90%"},5000)
        }else{
            clearInterval(start7);                
        }
    },20)
}
function skill8(){
    let bar8 = 0; 
    start8 = setInterval(function(){
        bar8++;
        if(bar8<=75){                
        $(".stat").stop().eq(7).text(bar8);
        //$(".bar1").stop().animate({width:"90%"},5000)
        }else{
            clearInterval(start8);                
        }
    },20)
}
function skill9(){
    let bar9 = 0; 
    start9 = setInterval(function(){
        bar9++;
        if(bar9<=30){                
        $(".stat").stop().eq(8).text(bar9);
        //$(".bar1").stop().animate({width:"90%"},5000)
        }else{
            clearInterval(start9);                
        }
    },20)
}
function skill10(){
    let bar10 = 0; 
    start10 = setInterval(function(){
        bar10++;
        if(bar10<=70){                
        $(".stat").stop().eq(9).text(bar10);
        //$(".bar1").stop().animate({width:"90%"},5000)
        }else{
            clearInterval(start10);                
        }
    },20)
}  
})
/*
var wheel = 0;

$('#project .scrollbox').on('mousewheel', function(e) {
    var b = e.originalEvent.wheelDelta;
    wheel += b;

    // 스크롤 값을 조정하여 스크롤 범위를 제한합니다.
    if(wheel<0){
        wheel=0;
    }
    if(wheel>$("#project .item1").height() | wheel>$("#project .item2")){
        wheel=$("#project .item1").height();
        wheel=$("#project .item2").height();
    }

    $('#project .item1').css('transform', 'translateY(' + (-wheel / 1) + 'px)');
    $('#project .item2').css('transform', 'translateY(' + (wheel / 1) + 'px)');

    return false; // 기본 스크롤 동작을 방지합니다.
});
*/

let wheel1 = 0;
$(".scrollbox").on("mousewheel",function(e){
    let wheeldefult=e.originalEvent.wheelDelta;
    wheel1+=wheeldefult
    clearInterval(auto1);
    $('#project .item1').css('transform', 'translateY(' + (wheel1 / 1) + 'px)');
    $('#project .item2').css('transform', 'translateY(' + (-wheel1 / 1) + 'px)');
    autowheel();    
    return false;
})
autowheel();
function autowheel(){   
    let item1 =$('#project .item1').height();
    let scrollbox=$(".scrollbox").height();   
    endpoint=item1-scrollbox     
    auto1 = setInterval(function(){ 
       if(wheel1<=endpoint){
        wheel1++;
        $('#project .item1').stop().css('transform', 'translateY(' + (-wheel1) + 'px)');
        $('#project .item2').stop().css('transform', 'translateY(' + (wheel1-200) + 'px)');

       }else if (endpoint<=wheel1 && endpoint>0) {              
        endpoint--;
        $('#project .item1').stop().css('transform', 'translateY(' + (-endpoint+300) + 'px)');
        $('#project .item2').stop().css('transform', 'translateY(' + (endpoint-500) + 'px)');
      }else if(endpoint==0){
        wheel1=0;
        endpoint=item1-scrollbox
      } else {
        clearInterval(auto1);
      }

    },10)
}
$(".projectname li h3").on("mouseenter",function(){
    $(this).stop().animate({"font-size":"0.9vw"})  
})
$(".projectname li h3").on("mouseleave",function(){
    $(this).stop().animate({"font-size":"0.8vw"})  
})
let f = 0;
$(".title1").on("click",function(){    
    f = $(".subtitle").hasClass("on");
    if(f==true){
        $(".subtitle").removeClass("on")

    }else{
        $(".subtitle").addClass("on")
    }
})
let g = 0;
$(".title2").on("click",function(){    
    g = $(".subtitle2").hasClass("on");
    if(g==true){
        $(".subtitle2").removeClass("on")

    }else{
        $(".subtitle2").addClass("on")
    }
})

$(".device li").on("click",function(){
    view=$(this).index()
    //console.log(view)
    $(".view>div").stop().fadeOut();
    $(".view>div").eq(view).stop().fadeIn();
})

$(".proposal").on("mouseenter",function(){
    $(".leftbg,.rightbg").fadeIn();
})
$(".proposal").on("mouseleave",function(){
    $(".leftbg,.rightbg").fadeOut();
})
let h = 0;
$(".rightar").on("click",function(){
    if(h==14){
        h=0
        $(".proposal ul li img").attr({src:"img/pdf1.png"})
    }else{
        h+=1
        $(".proposal ul li img").attr({src:"img/pdf"+h+".png"})
    }
})

$(".leftar").on("click",function(){
    if(h==0 || h==1){
        h=14
        $(".proposal ul li img").attr({src:"img/pdf14.png"})
    }else{
        h-=1
        $(".proposal ul li img").attr({src:"img/pdf"+h+".png"})
        console.log(h)
    }
})
})