$(function(){

    if(matchMedia("screen and (min-width:1440px)").matches){
        $("body").on('mousemove',function(e){
            posX = e.pageX/500;
            posY = e.pageY/500;
            
            $(".year .y2").css({"right":-15+posX+"%","bottom":-20+posY+"%"})
            $(".year .y1").css({"right":-25+posX+"%","top":-28+posY+"%"})
        });


            var video = $("video");
            video.on('play', function() {
              $('.scrollicon, #nav, .parent,.year').fadeOut();
              $(".loading").fadeOut();
            });
          
            video.on('pause', function() {                
              video.fadeOut(function() {
                $('.scrollicon, #nav, .parent,.year').fadeIn();
                $(".introimg5 h1").delay(500).addClass("on").animate({top:"50%",opacity:"1"},function(){
                    $(".title1 .line").addClass("on")
                    $(".title1 h3").delay(1000).animate({opacity:"1"})
                    $(".introimg").fadeOut();
                    $(".introimg5").css({background:"none"})
                    $(".box1").fadeOut();
                    
                })
              });
            });

    
        let baseline = -200;
        let pos1 = $("#home").offset().top + baseline;
        let pos2 = $("#about").offset().top+ baseline;
        let pos3 = $("#project").offset().top+ baseline;
        let pos4 = $("#poster").offset().top+ baseline;
        let pos5 = $("#contact").offset().top+ baseline;
    
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
                $("#about .profil").removeClass("on")
                $("#about .profil .introductioninfo").children("p").fadeOut();                
            } else if (scroll >= pos2 && scroll < pos3) {
                $("#nav li").removeClass("on");
                $("#nav li").eq(1).addClass("on");                
                $("#about .profil").stop().animate({left:"0px", opacity:"1"},function(){
                    $("#about .profil").delay(1000).addClass("on")                    
                    $("#about .profil .introductioninfo").children("p").animate({opacity:"1"}).fadeIn();
                });                   
                $(".kategorie ul li").delay(3000).addClass("on");
                let flash1 = 0;
                    autoflash = setInterval(function(){
                        $(".click ul").stop().removeClass("on");
                        $(".click ul").eq(flash1).stop().delay(5000).addClass("on");
                        flash1++;
                        if (flash1 === $(".click ul").length) {
                          flash1 = 0;
                        }
                    },1000)
                
                $(".kategorie ul li").on("click",function(){
                    clearInterval(autoflash);
                })

                var totalClasses = $(".kategorie ul li").length;            
                var $element = $('.kategorie ul li');
                var index = 0;
            
                setInterval(function() {
                  $element.removeClass("beat0,beat1,beat2,beat3");
                  $element.eq(index).addClass('.kategorie ul li beat' + index);
                  index++;
                  if(index==totalClasses){
                    index=0;
                  }
                }, 1000);


                $(".posterintro").removeClass("on")
                $(".posterintro").fadeIn();
                $("#contact .con4 .my .m2").children("img").removeClass("on")
                $(".sns").removeClass("on")
            } else if (scroll >= pos3 && scroll < pos4) {
                $("#nav li").removeClass("on");
                $("#nav li").eq(2).addClass("on");
                $(".posterintro").removeClass("on")
                $(".posterintro").stop().fadeIn();
                $("#contact .con4 .my .m2").children("img").removeClass("on")
                $(".sns").removeClass("on")
                $("#about .profil").removeClass("on")
                $("#about .profil .introductioninfo").children("p").animate({opacity:"0"})
            } else if (scroll >= pos4 && scroll < pos5) {
                $("#nav li").removeClass("on");
                $("#nav li").eq(3).addClass("on");
                $(".posterintro").addClass("on")
                $("#poster .title2,.slidbut,.slide,.page,.tit1,.post1,.post2,.slide_1,.poster1").delay(1800).fadeIn("slow");                
                $(".posterintro").stop().delay(2000).fadeOut();
                $("#contact .con4 .my .m2").children("img").removeClass("on")
                $(".sns").removeClass("on")
                $("#about .profil").removeClass("on")
                $("#about .profil .introductioninfo").children("p").animate({opacity:"0"})
            } else {
                $("#nav li").removeClass("on");
                $("#nav li").eq(4).addClass("on");
                $(".posterintro").removeClass("on")
                $(".posterintro").fadeIn();
                $("#contact .con4 .my .m2").delay(2000).children("img").addClass("on")
                $(".sns").addClass("on")
                $("#about .profil").removeClass("on")
                $("#about .profil .introductioninfo").children("p").animate({opacity:"0"})
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
        let total = $(".slide_1 li").length;
        $(".slidbut .post1,.slidbut2 .rightslide").on("click", function() {
            /*$(".slide_1").stop().animate({"margin-left": "-100%"},function(){
                $(".slide_1").css({"margin-left":"0%"});
            })        
            $(".slide_1 li").first().appendTo(".slide_1");
    
            $(".slide_1 li").stop().children(".content1").removeClass("on")
            $(".slide_1 li").delay(4000).eq(0).stop().children(".content1").addClass("on")*/
            content++;
            if(content >= total-1){ 
                content=0;
            }else{
                
            }
            $(".slide_1 li").stop().children(".content1").fadeOut().removeClass("on");
            $(".slide_1 li").stop().eq(content).children(".content1").fadeIn().addClass("on");


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
        $(".device li").on("click",function(){
            let nav = $(".device li").index(this);
            $(".device li").stop().css({"border-radius":"0px 100px 0px 0px"})
            $(".device li").eq(nav).stop().animate({"border-radius":"0px"})
        })
        $(".device1 li").on("click",function(){
            let nav1 = $(".device1 li").index(this);
            $(".device1 li").stop().css({"border-radius":"0px 100px 0px 0px"})
            $(".device1 li").eq(nav1).stop().animate({"border-radius":"0px"})
        })

        /*---------------------클릭 유도---------------------*/
          let autoblink = 0;
        setInterval(function(){
            if(autoblink == 0){
                $(".project2 .click ul").removeClass("on")
                $(".project1 .click ul").addClass("on")
                autoblink =1;
            }else{
                $(".project1 .click ul").removeClass("on")
                $(".project2 .click ul").addClass("on")
                autoblink = 0;
            }
        },1000)
        /*---------------------클릭 유도---------------------*/
        $(".slidbut .post2,.slidbut2 .leftslide").on("click", function() {
            content--;
            if(content < 0){ 
                content=total+content
                
            }else{
                
            }
            $(".slide_1 li").stop().children(".content1").fadeOut().removeClass("on");
            $(".slide_1 li").stop().eq(content).children(".content1").fadeIn().addClass("on");
    
    
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

            $(".bar1,.bar2,.bar3,.bar4,.bar5,.bar6,.bar7,.bar8,.bar9,.bar10").addClass("on")
            skill1();
            skill2();
            skill3();
            skill4();
            skill5();
            skill6();
            skill7();
            skill8();
            skill9();
            skill10();
        }else{
            $(".bar1,.bar2,.bar3,.bar4,.bar5,.bar6,.bar7,.bar8,.bar9,.bar10").removeClass("on")
            skill1();
            skill2();
            skill3();
            skill4();
            skill5();
            skill6();
            skill7();
            skill8();
            skill9();
            skill10();
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
        $('#project .item1').css('transform', 'translateY(' + (wheel1 / 100) + 'px)');
        $('#project .item2').css('transform', 'translateY(' + (-wheel1 / 100) + 'px)');
        autowheel();    
        return false;
    })


    autowheel();
    function autowheel(){   
        let item1 =$('#project .item1').height();
        let item2 =$("#project .item2").height();
        let scrollbox=$(".scrollbox").height();   
        endpoint1=item1-scrollbox
        endpoint2=item2-scrollbox        
        auto1 = setInterval(function(){ 
           if(wheel1<=endpoint1){
            wheel1++;
            
            $('#project .item1').stop().css('transform', 'translateY(' + (-wheel1) + 'px)');
            $('#project .item2').stop().css('transform', 'translateY(' + (wheel1) + 'px)');
    
           }else if (endpoint1<=wheel1 && endpoint1>0) {              
            endpoint1--;
            $('#project .item1').stop().css('transform', 'translateY(' + (-endpoint1) + 'px)');
            endpoint2--;
            $('#project .item2').stop().css('transform', 'translateY(' + (endpoint2) + 'px)');
          }else if(endpoint1==0){
            wheel1=0;
            endpoint1=item1-scrollbox
            endpoint2=item2-scrollbox
          } else {
            //clearInterval(auto1);
          }
    
        },50)
    }

    let wheel2 = 0;
    $(".scrollbox1_1").on("mousewheel",function(e){
        let wheeldefult1=e.originalEvent.wheelDelta;
        wheel2+=wheeldefult1
        clearInterval(auto2);
        $('#project .item1_1').css('transform', 'translateY(' - (wheel2 / 50) + 'px)');
        autowheel1();    
        return false;
    })

    autowheel1();
    function autowheel1(){   
        let item3 =$('#project .item1_1').height();
        let scrollbox1=$("#project .scrollbox1_1").height();   
        endpoint3 = item3 - scrollbox1          
        auto2 = setInterval(function(){ 
           if(wheel2 <= endpoint3){
            wheel2++;
            $('#project .item1_1').stop().css('transform', 'translateY(' + (-wheel2) + 'px)');
    
           }else if (endpoint3<=wheel2 && endpoint3>0) {              
            endpoint3--;
            $('#project .item1_1').stop().css('transform', 'translateY(' + (-endpoint3) + 'px)');
          }else if(endpoint3==0){
            wheel2=0;
            endpoint3=item3-scrollbox1            
          } else {
            //clearInterval(auto2);
          }
    
        },50)
    }

    let f = 0;
    $(".title1").on("click",function(){    
        f = $(".subtitle").hasClass("on");
        if(f==true){
            $(".subtitle").removeClass("on")    
        }else{
            $(".subtitle3").removeClass("on")
            $(".subtitle2").removeClass("on")
            $(".subtitle").addClass("on")
        }
    })
    let g = 0;
    $(".title2").on("click",function(){    
        g = $(".subtitle2").hasClass("on");
        if(g==true){
            $(".subtitle2").removeClass("on")
    
        }else{
            $(".subtitle3").removeClass("on")
            $(".subtitle").removeClass("on") 
            $(".subtitle2").addClass("on")
        }
    })
    let i = 0;
    $(".title3").on("click",function(){    
        i = $(".subtitle3").hasClass("on");
        if(i==true){
            $(".subtitle3").removeClass("on")
    
        }else{
            $(".subtitle").removeClass("on") 
            $(".subtitle2").removeClass("on")
            $(".subtitle3").addClass("on")
        }
    })
    
    $(".device li").on("click",function(){
        view=$(this).index()
        //console.log(view)
        $(".view>div").stop().fadeOut();
        $(".view>div").eq(view).stop().fadeIn();
    })
    


    $(".device1 li").on("click",function(){
        view1=$(this).index()
        //console.log(view)
        $(".view1>div").stop().fadeOut();
        $(".view1>div").eq(view1).stop().fadeIn();
    })


    /*$(".proposal").on("mouseenter",function(){
        $(".leftbg,.rightbg").fadeIn();
    })
    $(".proposal").on("mouseleave",function(){
        $(".leftbg,.rightbg").fadeOut();
    })

    
    $(".proposal1").on("mouseenter",function(){
        $(".leftbg1,.rightbg1").fadeIn();
    })
    $(".proposal1").on("mouseleave",function(){
        $(".leftbg1,.rightbg1").fadeOut();
    })*/

    


    


    let h = 0;
    let totalh = $(".proposal .chubb li").length;
    
    $(".rightar,.rightbg1").on("click",function(){
        h++;
        if(h == totalh){
            h=0            
        }else{            
        }
        $(".proposal .chubb li").fadeOut();
        $(".proposal .chubb li").eq(h).fadeIn();
    })
    
    $(".leftar,.leftbg1").on("click",function(){
        h--;
        if(h < 0){
            h = totalh + h
            
        }else{
            
        }
        $(".proposal .chubb li").fadeOut();
        $(".proposal .chubb li").eq(h).fadeIn();
        console.log(h)
    })


    let h1 = 0;
    let totalh1 = $(".proposal1 .youjin li").length;
    
    $(".rightar1_2,.rightbg1_1").on("click",function(){
        h1++;
        if(h1 == totalh1){
            h1=0            
        }else{            
        }
        $(".proposal1 .youjin li").fadeOut();
        $(".proposal1 .youjin li").eq(h1).fadeIn();
    })
    
    $(".leftar1_2,.leftbg1_1").on("click",function(){
        h1--;
        if(h1 < 0){
            h1 = totalh1 + h1
            
        }else{
            
        }
        $(".proposal1 .youjin li").fadeOut();
        $(".proposal1 .youjin li").eq(h1).fadeIn();        
    })


    $(".project1").on("click",function(){
        clearInterval(auto2);        
        $(".view1").fadeOut();
        $(".device1").css({visibility:"hidden"})
        $(".device").css({visibility:"visible"})
        $(".view").fadeIn();
        autowheel();
    })

    $(".project2").on("click",function(){
        clearInterval(auto1);
        
        $(".view").fadeOut();
        $(".view1").fadeIn();
        $(".device").css({visibility:"hidden"})
        $(".device1").css({visibility:"visible"})
        autowheel1();
    })

    }

    if(matchMedia("screen and (max-width:1439px) and (min-width:768px)").matches){
        $("body").on('mousemove',function(e){
            posX = e.pageX/500;
            posY = e.pageY/500;
            
            $(".year .y2").css({"right":-8+posX+"%","bottom":-15+posY+"%"})
            $(".year .y1").css({"right":-12+posX+"%","top":-20+posY+"%"})
        });


            var video = $("video");
            video.on('play', function() {
              $('.scrollicon, #nav, .parent, .year,.page').fadeOut();
              $(".loading").fadeOut();
            });
          
            video.on('pause', function() {
              video.fadeOut(function() {
                $('.scrollicon, #nav, .parent,.year,.page').fadeIn();
                $(".introimg5 h1").delay(500).addClass("on").animate({top:"50%",opacity:"1"},"easeOutBack",function(){
                    $(".title1 .line").addClass("on")
                    $(".title1 h3").delay(1000).animate({opacity:"1"})                    
                    $(".introimg5").css({background:"none"})                    
                })
              });
            });
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
                $("#about .profil").removeClass("on")
                $("#about .profil .introductioninfo").children("p").fadeOut();
            } else if (scroll >= pos2 && scroll < pos3) {
                $("#nav li").removeClass("on");
                $("#nav li").eq(1).addClass("on");
                $("#about .profil").stop().animate({left:"0px", opacity:"1"},function(){
                    $("#about .profil").delay(1000).addClass("on")                    
                    $("#about .profil .introductioninfo").children("p").animate({opacity:"1"}).fadeIn();
                });   
                $(".kategorie ul li").delay(3000).addClass("on");
                let flash1 = 0;
                    autoflash = setInterval(function(){
                        $(".click ul").stop().removeClass("on");
                        $(".click ul").eq(flash1).stop().delay(5000).addClass("on");
                        flash1++;
                        if (flash1 === $(".click ul").length) {
                          flash1 = 0;
                        }
                    },1000)
                
                $(".kategorie ul li").on("click",function(){
                    clearInterval(autoflash);
                })

                var totalClasses = $(".kategorie ul li").length;            
                var $element = $('.kategorie ul li');
                var index = 0;
            
                setInterval(function() {
                  $element.removeClass("beat0,beat1,beat2,beat3");
                  $element.eq(index).addClass('.kategorie ul li beat' + index);
                  index++;
                  if(index==totalClasses){
                    index=0;
                  }
                }, 1000);
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
 /*미리보기 네모 모서리 효과*/
        $(".device li").on("click",function(){
            $(".device li").stop().removeClass("on")
            $(this).stop().addClass("on")
        })

        $(".device1 li").on("click",function(){
            $(".device1 li").stop().removeClass("on")
            $(this).stop().addClass("on")
        })

/*미리보기 네모 모서리 효과*/
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

        /*---------------------클릭 유도---------------------*/
        let autoblink = 0;
        setInterval(function(){
            if(autoblink == 0){
                $(".project2 .click ul").removeClass("on")
                $(".project1 .click ul").addClass("on")
                autoblink =1;
            }else{
                $(".project1 .click ul").removeClass("on")
                $(".project2 .click ul").addClass("on")
                autoblink = 0;
            }
        },1000)
        /*---------------------클릭 유도---------------------*/
        /*포스터 좌우 슬라이드*/ 
        let content = 0;
        let total = $(".slide_1 li").length;
        console.log(total)
        $(".slidbut .post1,.slidbut2 .rightslide").on("click", function() {
            /*$(".slide_1").stop().animate({"margin-left": "-100%"},function(){
                $(".slide_1").css({"margin-left":"0%"});
            })        
            $(".slide_1 li").first().appendTo(".slide_1");
    
            $(".slide_1 li").stop().children(".content1").removeClass("on")
            $(".slide_1 li").delay(4000).eq(0).stop().children(".content1").addClass("on")*/
            content++;
            if(content >= total-1){
                content = 0;
            }else{                
            }
            $(".slide_1 li").stop().children(".content1").fadeOut();
            $(".slide_1 li").stop().eq(content).children(".content1").fadeIn();
            $(".slide_1 li").stop().children(".content1").removeClass("on");
            $(".slide_1 li").stop().eq(content).children(".content1").addClass("on");
            
    
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
            /*$(".slide_1 li").last().prependTo(".slide_1");
            $(".slide_1").css({"margin-left":"-100%"});
            $(".slide .slide_1").stop().animate({"margin-left": "0%"})
            $(".slide_1 li").stop().children(".content1").removeClass("on")
            $(".slide_1 li").delay(4000).eq(0).stop().children(".content1").addClass("on")*/
            content--;
            if(content < 0){ 
                content=total+content
                
            }else{
                
            }
            $(".slide_1 li").stop().children(".content1").fadeOut();
            $(".slide_1 li").stop().eq(total).children(".content1").fadeIn();
            $(".slide_1 li").stop().children(".content1").removeClass("on");
            $(".slide_1 li").stop().eq(total).children(".content1").addClass("on");
    
    
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
        c = $(".kategorie>ul>li").children("h3").width();
        console.log(c)
        //alert(a)
        if(b == true){
        $(".kategorie li").removeClass("fon")  ;      
        $(".content .cont").eq(a).stop().animate({left:"-100%"},function(){
            $(".kategorie .lin1").stop().eq(a).animate({width:"0%",height:"0%"});
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
        $(".kategorie .lin1").stop().animate({width:"0%",height:"0px"});
        $(".kategorie .lin1").eq(a).stop().animate({width:"35px",height:"20px"},function(){
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
            $(".bar1,.bar2,.bar3,.bar4,.bar5,.bar6,.bar7,.bar8,.bar9,.bar10").addClass("on")
            skill1();
            skill2();
            skill3();
            skill4();
            skill5();
            skill6();
            skill7();
            skill8();
            skill9();
            skill10();    
        }else{
            $(".bar1,.bar2,.bar3,.bar4,.bar5,.bar6,.bar7,.bar8,.bar9,.bar10").removeClass("on")
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
        $('#project .item1').css('transform', 'translateY(' + (wheel1 / 50) + 'px)');
        $('#project .item2').css('transform', 'translateY(' + (-wheel1 / 50) + 'px)');
        autowheel();    
        return false;
    })
    autowheel();
    function autowheel(){   
        let item1 =$('#project .item1').height();
        let item2 =$("#project .item2").height();
        let scrollbox=$(".scrollbox").height();   
        endpoint1=item1-scrollbox
        endpoint2=item2-scrollbox     
        auto1 = setInterval(function(){ 
           if(wheel1<=endpoint1){
            wheel1++;
            $('#project .item1').stop().css('transform', 'translateY(' + (-wheel1) + 'px)');
            $('#project .item2').stop().css('transform', 'translateY(' + (wheel1) + 'px)');
    
           }else if (endpoint1<=wheel1 && endpoint1>0) {              
            endpoint1--;
            $('#project .item1').stop().css('transform', 'translateY(' + (-endpoint1) + 'px)');
            endpoint2--;
            $('#project .item2').stop().css('transform', 'translateY(' + (endpoint2) + 'px)');
          }else if(endpoint1==0){
            wheel1=0;
            endpoint1=item1-scrollbox
            endpoint2=item2-scrollbox
          } else {
            clearInterval(auto1);
          }
    
        },50)
    }

    let wheel2 = 0;
    $(".scrollbox1_1").on("mousewheel",function(e){
        let wheeldefult1=e.originalEvent.wheelDelta;
        wheel2+=wheeldefult1
        clearInterval(auto2);
        $('#project .item1_1').css('transform', 'translateY(' - (wheel2 / 50) + 'px)');
        autowheel1();    
        return false;
    })

    autowheel1();
    function autowheel1(){   
        let item3 =$('#project .item1_1').height();
        let scrollbox1=$("#project .scrollbox1_1").height();   
        endpoint3 = item3 - scrollbox1          
        auto2 = setInterval(function(){ 
           if(wheel2 <= endpoint3){
            wheel2++;
            $('#project .item1_1').stop().css('transform', 'translateY(' + (-wheel2) + 'px)');
    
           }else if (endpoint3<=wheel2 && endpoint3>0) {              
            endpoint3--;
            $('#project .item1_1').stop().css('transform', 'translateY(' + (-endpoint3) + 'px)');
          }else if(endpoint3==0){
            wheel2=0;
            endpoint3=item3-scrollbox1            
          } else {
            //clearInterval(auto2);
          }
    
        },50)
    }


    
    /*let f = 0;
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
    })*/
    
    /*$(".projectname>li").on("click",function(){
        if($(this).children(".con1").is(":hidden")){
            $(".projectname>li").children(".con1").slideUp();
            $(this).children(".con1").slideDown();
        }else{
            $(this).children(".con1").slideUp();
        }
    })*/
    
    $(".device li").on("click",function(){
        view=$(this).index()
        //console.log(view)
        $(".view>div").stop().fadeOut();
        $(".view>div").eq(view).stop().fadeIn();
    })
    
    /*$(".proposal").on("mouseenter",function(){
        $(".leftbg,.rightbg").fadeIn();
    })
    $(".proposal").on("mouseleave",function(){
        $(".leftbg,.rightbg").fadeOut();
    })*/

    $(".device1 li").on("click",function(){
        view1=$(this).index()
        //console.log(view)
        $(".view1>div").stop().fadeOut();
        $(".view1>div").eq(view1).stop().fadeIn();
    })


    /*$(".proposal").on("mouseenter",function(){
        $(".leftbg,.rightbg").fadeIn();
    })
    $(".proposal").on("mouseleave",function(){
        $(".leftbg,.rightbg").fadeOut();
    })

    
    $(".proposal1").on("mouseenter",function(){
        $(".leftbg1,.rightbg1").fadeIn();
    })
    $(".proposal1").on("mouseleave",function(){
        $(".leftbg1,.rightbg1").fadeOut();
    })*/



    let h = 0;
    let totalh = $(".proposal .chubb li").length;
    
    $(".rightar,.rightbg1").on("click",function(){
        h++;
        if(h == totalh){
            h=0            
        }else{            
        }
        $(".proposal .chubb li").fadeOut();
        $(".proposal .chubb li").eq(h).fadeIn();
    })
    
    $(".leftar,.leftbg1").on("click",function(){
        h--;
        if(h < 0){
            h = totalh + h            
        }else{            
        }
        $(".proposal .chubb li").fadeOut();
        $(".proposal .chubb li").eq(h).fadeIn();       
    })


    let h1 = 0;
    let totalh1 = $(".proposal1 .youjin li").length;
    
    $(".rightar1_2,.rightbg1_1").on("click",function(){
        h1++;
        if(h1 == totalh1){
            h1=0            
        }else{            
        }
        $(".proposal1 .youjin li").fadeOut();
        $(".proposal1 .youjin li").eq(h1).fadeIn();
    })
    
    $(".leftar1_2,.leftbg1_1").on("click",function(){
        h1--;
        if(h1 < 0){
            h1 = totalh1 + h1
            
        }else{
            
        }
        $(".proposal1 .youjin li").fadeOut();
        $(".proposal1 .youjin li").eq(h1).fadeIn();        
    })


    $(".project1").on("click",function(){
        clearInterval(auto2);        
        $(".view1").fadeOut();
        $(".device1").css({visibility:"hidden"})
        $(".device").css({visibility:"visible"})
        $(".view").fadeIn();
        autowheel();
    })

    $(".project2").on("click",function(){
        clearInterval(auto1);
        
        $(".view").fadeOut();
        $(".view1").fadeIn();
        $(".device").css({visibility:"hidden"})
        $(".device1").css({visibility:"visible"})
        autowheel1();
    })



    }
    if(matchMedia("screen and (max-width:768px)").matches){
        $("body").on('mousemove',function(e){
            posX = e.pageX/500;
            posY = e.pageY/500;
            
            $(".year .y2").css({"right":-8+posX+"%","bottom":-15+posY+"%"})
            $(".year .y1").css({"right":-12+posX+"%","top":-20+posY+"%"})
        });


            var video = $("video");
            video.on('play', function() {
              $('.scrollicon, #nav, .parent, .year,.page').fadeOut();
              $(".loading").fadeOut();
            });
          
            video.on('pause', function() {
              video.fadeOut(function() {
                $('.scrollicon, #nav, .parent,.year,.page').fadeIn();
                $(".introimg5 h1").delay(500).addClass("on").animate({top:"50%",opacity:"1"},"easeOutBack",function(){
                    $(".title1 .line").addClass("on")
                    $(".title1 h3").delay(1000).animate({opacity:"1"})                    
                    $(".introimg5").css({background:"none"})                    
                })
              });
            });
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
                $("#about .profil").removeClass("on")
                $("#about .profil .introductioninfo").children("p").fadeOut();
            } else if (scroll >= pos2 && scroll < pos3) {
                $("#nav li").removeClass("on");
                $("#nav li").eq(1).addClass("on");
                $("#about .profil").stop().animate({left:"0px", opacity:"1"},function(){
                    $("#about .profil").delay(1000).addClass("on")                    
                    $("#about .profil .introductioninfo").children("p").animate({opacity:"1"}).fadeIn();
                });   
                $(".kategorie ul li").delay(3000).addClass("on");
                let flash1 = 0;
                    autoflash = setInterval(function(){
                        $(".click ul").removeClass("on");
                        $(".click ul").eq(flash1).stop().delay(5000).addClass("on");
                        flash1++;
                        if (flash1 === $(".click ul").length) {
                          flash1 = 0;
                        }
                    },1000)
                
                $(".kategorie ul li").on("click",function(){
                    clearInterval(autoflash);
                })

                var totalClasses = $(".kategorie ul li").length;            
                var $element = $('.kategorie ul li');
                var index = 0;
            
                setInterval(function() {
                  $element.removeClass("beat0,beat1,beat2,beat3");
                  $element.eq(index).addClass('.kategorie ul li beat' + index);
                  index++;
                  if(index==totalClasses){
                    index=0;
                  }
                }, 1000);
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
        /*미리보기 네모 모서리 효과*/
         $(".device li").on("click",function(){
            $(".device li").stop().removeClass("on")
            $(this).stop().addClass("on")
        })

        $(".device1 li").on("click",function(){
            $(".device1 li").stop().removeClass("on")
            $(this).stop().addClass("on")
        })

        /*미리보기 네모 모서리 효과*/

        /*---------------------클릭 유도---------------------*/
        let autoblink = 0;
        setInterval(function(){
            if(autoblink == 0){
                $(".project2 .click ul").removeClass("on")
                $(".project1 .click ul").addClass("on")
                autoblink =1;
            }else{
                $(".project1 .click ul").removeClass("on")
                $(".project2 .click ul").addClass("on")
                autoblink = 0;
            }
        },1000)
        /*---------------------클릭 유도---------------------*/
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
        let total = $(".slide_1 li").length;
        console.log(total)
        $(".slidbut .post1,.slidbut2 .rightslide").on("click", function() {
            /*$(".slide_1").stop().animate({"margin-left": "-100%"},function(){
                $(".slide_1").css({"margin-left":"0%"});
            })        
            $(".slide_1 li").first().appendTo(".slide_1");
    
            $(".slide_1 li").stop().children(".content1").removeClass("on")
            $(".slide_1 li").delay(4000).eq(0).stop().children(".content1").addClass("on")*/
            content++;
            if(content >= total-1){
                content = 0;
            }else{                
            }
            $(".slide_1 li").stop().children(".content1").fadeOut();
            $(".slide_1 li").stop().eq(content).children(".content1").fadeIn();
            $(".slide_1 li").stop().children(".content1").removeClass("on");
            $(".slide_1 li").stop().eq(content).children(".content1").addClass("on");
            
    
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
            /*$(".slide_1 li").last().prependTo(".slide_1");
            $(".slide_1").css({"margin-left":"-100%"});
            $(".slide .slide_1").stop().animate({"margin-left": "0%"})
            $(".slide_1 li").stop().children(".content1").removeClass("on")
            $(".slide_1 li").delay(4000).eq(0).stop().children(".content1").addClass("on")*/
            content--;
            if(content < 0){ 
                content=total+content
                
            }else{
                
            }
            $(".slide_1 li").stop().children(".content1").fadeOut();
            $(".slide_1 li").stop().eq(total).children(".content1").fadeIn();
            $(".slide_1 li").stop().children(".content1").removeClass("on");
            $(".slide_1 li").stop().eq(total).children(".content1").addClass("on");
    
    
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
        c = $(".kategorie>ul>li").children("h3").width();
        console.log(c)
        //alert(a)
        if(b == true){
        $(".kategorie li").removeClass("fon")  ;      
        $(".content .cont").eq(a).stop().animate({left:"-100%"},function(){
            $(".kategorie .lin1").stop().eq(a).animate({width:"0%",height:"0%"});
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
        $(".kategorie .lin1").stop().animate({width:"0%",height:"0px"});
        $(".kategorie .lin1").eq(a).stop().animate({width:"35px",height:"20px"},function(){
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
            
            $(".bar2").removeClass("on")
            
            $(".bar3").removeClass("on") 
            
            $(".bar4").removeClass("on") 
            
            $(".bar5").removeClass("on") 
            
            $(".bar6").removeClass("on") 
            
            $(".bar7").removeClass("on") 
            
            $(".bar8").removeClass("on") 
            
            $(".bar9").removeClass("on") 
           
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
        $('#project .item1').css('transform', 'translateY(' + (wheel1 / 50) + 'px)');
        $('#project .item2').css('transform', 'translateY(' + (-wheel1 / 50) + 'px)');
        autowheel();    
        return false;
    })
    autowheel();
    function autowheel(){   
        let item1 =$('#project .item1').height();
        let item2 =$("#project .item2").height();
        let scrollbox=$(".scrollbox").height();   
        endpoint1=item1-scrollbox
        endpoint2=item2-scrollbox     
        auto1 = setInterval(function(){ 
           if(wheel1<=endpoint1){
            wheel1++;
            $('#project .item1').stop().css('transform', 'translateY(' + (-wheel1) + 'px)');
            $('#project .item2').stop().css('transform', 'translateY(' + (wheel1) + 'px)');
    
           }else if (endpoint1<=wheel1 && endpoint1>0) {              
            endpoint1--;
            $('#project .item1').stop().css('transform', 'translateY(' + (-endpoint1) + 'px)');
            endpoint2--;
            $('#project .item2').stop().css('transform', 'translateY(' + (endpoint2) + 'px)');
          }else if(endpoint1==0){
            wheel1=0;
            endpoint1=item1-scrollbox
            endpoint2=item2-scrollbox
          } else {
            clearInterval(auto1);
          }
    
        },50)
    }

    let wheel2 = 0;
    $(".scrollbox1_1").on("mousewheel",function(e){
        let wheeldefult1=e.originalEvent.wheelDelta;
        wheel2+=wheeldefult1
        clearInterval(auto2);
        $('#project .item1_1').css('transform', 'translateY(' - (wheel2 / 50) + 'px)');
        autowheel1();    
        return false;
    })

    autowheel1();
    function autowheel1(){   
        let item3 =$('#project .item1_1').height();
        let scrollbox1=$("#project .scrollbox1_1").height();   
        endpoint3 = item3 - scrollbox1          
        auto2 = setInterval(function(){ 
           if(wheel2 <= endpoint3){
            wheel2++;
            $('#project .item1_1').stop().css('transform', 'translateY(' + (-wheel2) + 'px)');
    
           }else if (endpoint3<=wheel2 && endpoint3>0) {              
            endpoint3--;
            $('#project .item1_1').stop().css('transform', 'translateY(' + (-endpoint3) + 'px)');
          }else if(endpoint3==0){
            wheel2=0;
            endpoint3=item3-scrollbox1            
          } else {
            //clearInterval(auto2);
          }
    
        },50)
    }
    /*let f = 0;
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
    })*/
    
    /*$(".projectname>li").on("click",function(){
        if($(this).children(".con1").is(":hidden")){
            $(".projectname>li").children(".con1").slideUp();
            $(this).children(".con1").slideDown();
        }else{
            $(this).children(".con1").slideUp();
        }
    })*/
    
    $(".device li").on("click",function(){
        view=$(this).index()
        //console.log(view)
        $(".view>div").stop().fadeOut();
        $(".view>div").eq(view).stop().fadeIn();
    })
    
    /*$(".proposal").on("mouseenter",function(){
        $(".leftbg,.rightbg").fadeIn();
    })
    $(".proposal").on("mouseleave",function(){
        $(".leftbg,.rightbg").fadeOut();
    })*/
*
    $(".device1 li").on("click",function(){
        view1=$(this).index()
        //console.log(view)
        $(".view1>div").stop().fadeOut();
        $(".view1>div").eq(view1).stop().fadeIn();
    })

    let h = 0;
    let totalh = $(".proposal .chubb li").length;
    
    $(".rightar,.rightbg1").on("click",function(){
        h++;
        if(h == totalh){
            h=0            
        }else{            
        }
        $(".proposal .chubb li").fadeOut();
        $(".proposal .chubb li").eq(h).fadeIn();
    })
    
    $(".leftar,.leftbg1").on("click",function(){
        h--;
        if(h < 0){
            h = totalh + h            
        }else{            
        }
        $(".proposal .chubb li").fadeOut();
        $(".proposal .chubb li").eq(h).fadeIn();       
    })


    let h1 = 0;
    let totalh1 = $(".proposal1 .youjin li").length;
    
    $(".rightar1_2,.rightbg1_1").on("click",function(){
        h1++;
        if(h1 == totalh1){
            h1=0            
        }else{            
        }
        $(".proposal1 .youjin li").fadeOut();
        $(".proposal1 .youjin li").eq(h1).fadeIn();
    })
    
    $(".leftar1_2,.leftbg1_1").on("click",function(){
        h1--;
        if(h1 < 0){
            h1 = totalh1 + h1
            
        }else{
            
        }
        $(".proposal1 .youjin li").fadeOut();
        $(".proposal1 .youjin li").eq(h1).fadeIn();        
    })


    $(".project1").on("click",function(){
        clearInterval(auto2);        
        $(".view1").fadeOut();
        $(".device1").css({visibility:"hidden"})
        $(".device").css({visibility:"visible"})
        $(".view").fadeIn();
        autowheel();
    })

    $(".project2").on("click",function(){
        clearInterval(auto1);
        
        $(".view").fadeOut();
        $(".view1").fadeIn();
        $(".device").css({visibility:"hidden"})
        $(".device1").css({visibility:"visible"})
        autowheel1();
    })

    }
})