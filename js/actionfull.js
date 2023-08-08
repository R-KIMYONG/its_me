$(function(){

    if(matchMedia("screen and (min-width:1440px)").matches){
        var video = $("video");
        video.on('play', function() {
            $('.scrollicon, #nav, .parent,.year').fadeOut();
            $(".loading").fadeOut();
        });
        
        video.on('pause', function() {                
            video.fadeOut(function() {
            $('.scrollicon, #nav, .parent,.year,.page,.ball').fadeIn();
            $(".introimg5 h1").delay(500).addClass("on").animate({top:"50%",opacity:"1"},function(){
                $(".title1 .line").addClass("on")
                $(".title1 h3").delay(500).animate({opacity:"1"})
                $(".introimg").fadeOut();
                $(".introimg5").css({background:"none"})
                $(".box1").fadeOut();
                
            })
            });
        });
        /*-----------------네비게이션-----------------*/
        $("#nav li").on("click", function () {
            let target = $(this).children("a").attr("href");
            //alert(target);
            let pos = $(target).offset().top;
            //alert(pos);
            $("html,body").stop().animate({ scrollTop: pos }, 1000);
        });
        /*-----------------네비게이션-----------------*/
    
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
                $("#contact .con4 .my .m2").children("img").removeClass("on")                      
            } else if (scroll >= pos2 && scroll < pos3) {
                $("#nav li").removeClass("on");
                $("#nav li").eq(1).addClass("on");
                $("#about .bg h2").stop().fadeIn();              
                $("#about .profil").stop().animate({left:"10%", opacity:"1"},function(){
                $("#about .profil").stop().delay(1000).addClass("on")                    
                $("#about .profil .introductioninfo").children("p").animate({opacity:"1"}).fadeIn();
                });

                $("#about .content .con1").stop().delay(1000).addClass("on");
                $(".bar1,.bar2,.bar3,.bar4,.bar5,.bar6,.bar7,.bar8,.bar9,.bar10").stop().delay(1200).addClass("on");                
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
                let totalcontent = $(".content .cont").length;
                let aboutme = 0;
                currentaboutme = setInterval(function(){
                aboutme++;                
                if(aboutme == totalcontent){
                    aboutme=0;

                }else{           
                }
                $(".kategorie ul li").stop().removeClass("fon");
                $(".kategorie ul li").stop().eq(aboutme).addClass("fon");
                $(".kategorie ul li").stop().removeClass("on");
                $(".kategorie ul li").stop().eq(aboutme).addClass("on");
            
                // "fon" 클래스를 찾은 경우 실행되는 코드 블록
                $(".content .cont").stop().animate({left: "-100%"});
                $(".content .cont").eq(aboutme).stop().animate({left: "0%"});
                if($(".kategorie ul li").eq(0).hasClass("fon")){                        
                    $(".bar1,.bar2,.bar3,.bar4,.bar5,.bar6,.bar7,.bar8,.bar9,.bar10").addClass("on");
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
                if ($(".kategorie ul li").eq(1).hasClass("fon")) {                       
                    $(".con2 ul").addClass("on");
                    $(".con2 .map").delay(500).animate({ opacity: "0.3" });
                }
                if ($(".kategorie ul li").eq(2).hasClass("fon")) {
                    $(".con3 ul").addClass("on");
                    $(".con3 .cert").addClass("on");
                }
                if ($(".kategorie ul li").eq(3).hasClass("fon")) {
                    $(".word").delay(1500).addClass("on");
                    $(".graph img").delay(1500).animate({ opacity: "1" });
                    $(".hobby").delay(500).addClass("on");
                }                
                // "fon" 클래스를 찾지 못한 경우 실행되는 코드 블록
                if ($(".kategorie ul li").eq(1).hasClass("fon") == false) {
                    $(".con2 ul").removeClass("on");
                    $(".con2 .map").delay(1400).animate({ opacity: "0" });
                }
                if ($(".kategorie ul li").eq(2).hasClass("fon") == false) {
                    $(".con3 ul").delay(1000).removeClass("on");
                    $(".con3 .cert").delay(1000).removeClass("on");
                }
                if ($(".kategorie ul li").eq(3).hasClass("fon") == false) {
                    $(".word").removeClass("on");
                    $(".graph img").animate({ opacity: "0" });
                    $(".hobby").removeClass("on");                    
                }
            },4000)           
            } else if (scroll >= pos3 && scroll < pos4) {
                $("#project .projectname>li").addClass("in");
                $("#project .but").delay(1500).addClass("in");
                $("#project .view").delay(2000).addClass("in");
                $("#project>h2").stop().fadeIn();    
                $("#nav li").removeClass("on");
                $("#nav li").eq(2).addClass("on");              
            } else if (scroll >= pos4 && scroll < pos5) {
                $("#nav li").removeClass("on");
                $("#nav li").eq(3).addClass("on");
                $("#poster>h2").stop().fadeIn();
                $("#poster .poster2>li").stop().addClass("in");    
                         
            } else {
                $("#nav li").removeClass("on");
                $("#nav li").eq(4).addClass("on");
                $("#contact>h2").stop().fadeIn(); 
                $("#contact .ball").stop().fadeIn(); 
                $("#contact .con4 .my .m2").delay(2000).children("img").addClass("on")
                $(".sns").addClass("on")
                
            }    
        });

        $(".kategorie ul li .outline,.kategorie ul li .but,.kategorie ul li,.kategorie ul li .front,.kategorie ul li .down").on("click",function(){
            clearInterval(currentaboutme);
        })
        /*스킬페이지 좌우 슬라이드*/ 

        let b = 0;
        let c = 0;
        let d = 0;
        let e = 0;
        let e1 = 0;
        let cli = 0;
        $(".kategorie li").on("click",function(){        
        aboutme = $(this).index();
        b = $(this).hasClass("fon");
        //alert(a)
        if(cli == 0){
            cli = 1;
        }else{
            cli = 0;
        }
        $(".kategorie li").stop().removeClass("on");
        $(".kategorie li").stop().eq(aboutme).addClass("on");
        if(b == true){
        $(".kategorie li").removeClass("fon")  ;      
        $(".content .cont").eq(aboutme).stop().animate({left:"-100%"});        
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
        $(".kategorie li").eq(aboutme).addClass("fon");
        $(".kategorie .line1").stop().animate({width:"0%"});        
        $(".content .cont").stop().animate({left:"-100%"});
        $(".content .cont").eq(aboutme).stop().animate({left:"0%"});
     
    
        e1=$(".kategorie li").eq(3).hasClass("fon");
        if(e1==true){
            $(".word").delay(1500).addClass("on")
            $(".graph img").delay(1500).animate({opacity:"1"})
            $(".hobby").delay(500).addClass("on")
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
            $(".con2 ul").addClass("on");
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
    })
    
    /*스킬 페이지 툴 사용 숙련도 바*/
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
    /*스킬 페이지 툴 사용 숙련도 바*/



    /*마우스 휠 위 또는 아래로 스크롤 시 페이지 따라가기*/
    let wheel1 = 0;
    $(".scrollbox").on("mousewheel",function(e){
        let wheeldefult=e.originalEvent.wheelDelta;
        wheel1+=wheeldefult
        clearInterval(auto1);
        $('#project .item1').css('transform', 'translateY(' + (wheel1 / 500) + 'px)');
        $('#project .item2').css('transform', 'translateY(' + (-wheel1 / 500) + 'px)');
        autowheel();    
        return false;
    })
    /*마우스 휠 위 또는 아래로 스크롤 시 페이지 따라가기*/


    /*자동 스크롤 chubb 페이지*/
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
    /*자동 스크롤 chubb 페이지*/

    /*자동 스크롤 youjin 페이지*/
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
            clearInterval(auto2);
          }    
        },50)
    }
    /*자동 스크롤 youjin 페이지*/



    /*프로젝트명 클릭 시 해당 페이지로 전환*/
    $(".projectname li").on("click",function(){
        $(".projectname li").stop().removeClass("on")
        $(this).stop().addClass("on");
        let pro =  $(this).index();                  
        $(".device ul").stop().fadeOut();
        $(".device ul").eq(pro).css({display: "flex"}).stop().fadeIn()
        /*if(pro == 0){
            $(".view1").fadeOut();
            $(".view").fadeIn();
        }else{
            $(".view").fadeOut();
            $(".view1").fadeIn();
        }*/
    })

    $(".projectname li:nth-of-type(1)").on("click",function(){
        $(".view1").stop().addClass("out")
        $(".view1").stop().removeClass("in")
        $(".view").stop().addClass("in")
        $(".view").stop().removeClass("out")
    })
    $(".projectname li:nth-of-type(2)").on("click",function(){
        $(".view").stop().addClass("out")
        $(".view").stop().removeClass("in")
        $(".view1").stop().addClass("in")
        $(".view1").stop().removeClass("out")
    })
    /*프로젝트명 클릭 시 해당 페이지로 전환*/




    /*버튼 클릭 시 스타일 적용 밑 view페이지 내용 변경*/
    $(".device .chubb li").on("click",function(){
        $(".device .chubb li").stop().removeClass("on");
        $(this).stop().addClass("on");  
        view=$(this).index(); 
        $(".view>div").stop().fadeOut();
        $(".view>div").eq(view).stop().fadeIn();          
    })

    $(".device .youjin li").on("click",function(){
        $(".device .youjin li").stop().removeClass("on");
        $(this).stop().addClass("on");   
        view1=$(this).index();        
        $(".view1>div").stop().fadeOut();
        $(".view1>div").eq(view1).stop().fadeIn();         
    })
    /*버튼 클릭 시 스타일 적용 밑 view페이지 내용 변경*/

    /*mockup 좌우 전환*/

    let mockup = 0;
    let mocktotal = $(".view .mockup>div").length;
    
    $(".view .mockup .arrow .rightar").on("click",function(){
        mockup++;
        if(mockup == mocktotal){
            mockup=0            
        }else{            
        }
        $(".view .mockup>div").fadeOut();
        $(".view .mockup>div").eq(mockup).fadeIn();
    });    
    $(".view .mockup .arrow .leftar").on("click",function(){
        mockup--;
        if(mockup < 0){
            mockup = mocktotal + mockup            
        }else{            
        }
        $(".view .mockup>div").fadeOut();
        $(".view .mockup>div").eq(mockup).fadeIn();        
    })


    let mockup1 = 0;
    let mocktotal1 = $(".view1 .mockup>div").length;
    
    $(".view1 .mockup .arrow .rightar").on("click",function(){
        mockup1++;
        if(mockup1 == mocktotal1){
            mockup1=0            
        }else{            
        }
        $(".view1 .mockup>div").fadeOut();
        $(".view1 .mockup>div").eq(mockup1).fadeIn();
    });    
    $(".view1 .mockup .arrow .leftar").on("click",function(){
        mockup1--;
        if(mockup1 < 0){
            mockup1 = mocktotal1 + mockup            
        }else{            
        }
        $(".view1 .mockup>div").fadeOut();
        $(".view1 .mockup>div").eq(mockup1).fadeIn();        
    })
    /*mockup 좌우 전환*/

    /* 모달 */
    $("#project .view .mockup>div:nth-of-type(1)").on("click",function(){
        $("#project .modal .ta").stop().fadeOut();
        $("#project .modal .mo").stop().fadeOut();
        $("#project .modal").stop().fadeIn();
        $("#project .modal .pc").stop().fadeIn();
    })

    $("#project .view .mockup>div:nth-of-type(2)").on("click",function(){
        $("#project .modal .pc").stop().fadeOut();
        $("#project .modal .mo").stop().fadeOut();
        $("#project .modal").stop().fadeIn();
        $("#project .modal .ta").stop().fadeIn();
    })
    $("#project .view .mockup>div:nth-of-type(3)").on("click",function(){
        $("#project .modal .pc").stop().fadeOut();
        $("#project .modal .ta").stop().fadeOut();
        $("#project .modal").stop().fadeIn();
        $("#project .modal .mo").stop().fadeIn();
    })

    $(".modal .close h2").on("click",function(){
        $("#project .modal .pc").stop().fadeOut();
        $("#project .modal .ta").stop().fadeOut();
        $("#project .modal .mo").stop().fadeOut();
        $("#project .modal").stop().fadeOut();
    });   

    /* 모달 */

    /* 모달 1*/
    $("#project .view1 .mockup>div:nth-of-type(1)").on("click",function(){
        $("#project .modal1 .ta").stop().fadeOut();
        $("#project .modal1 .mo").stop().fadeOut();
        $("#project .modal1").stop().fadeIn();
        $("#project .modal1 .pc").stop().fadeIn();
    })

    $("#project .view1 .mockup>div:nth-of-type(2)").on("click",function(){
        $("#project .modal1 .pc").stop().fadeOut();
        $("#project .modal1 .mo").stop().fadeOut();
        $("#project .modal1").stop().fadeIn();
        $("#project .modal1 .ta").stop().fadeIn();
    })
    $("#project .view1 .mockup>div:nth-of-type(3)").on("click",function(){
        $("#project .modal1 .pc").stop().fadeOut();
        $("#project .modal1 .ta").stop().fadeOut();
        $("#project .modal1").stop().fadeIn();
        $("#project .modal1 .mo").stop().fadeIn();
    })

    $(".modal1 .close h2").on("click",function(){
        $("#project .modal1 .pc").stop().fadeOut();
        $("#project .modal1 .ta").stop().fadeOut();
        $("#project .modal1 .mo").stop().fadeOut();
        $("#project .modal1").stop().fadeOut();
    });   

    /* 모달1 */

    /*버튼 중 바로가기 클릭 시 이벤트 대상이 a 로 별도 이벤트 실행*/
    $(".device li a").on("click",function(){
        $(".device li").stop().removeClass("on")
        $(".device li a").parent(".device li").stop().addClass("on")
    })
    /*버튼 중 바로가기 클릭 시 이벤트 대상이 a 로 별도 이벤트 실행*/


    /*기획안 페이지 넘기기 기능*/
    let h = 0;
    let totalh = $(".proposal .chubb li").length;    
    $(".proposal .rightar").on("click",function(){
        h++;
        if(h == totalh){
            h=0            
        }else{            
        }
        $(".proposal .chubb li").fadeOut();
        $(".proposal .chubb li").eq(h).fadeIn();
    });    
    $(".proposal .leftar").on("click",function(){
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
    $(".proposal1 .rightar1_2").on("click",function(){
        h1++;
        if(h1 == totalh1){
            h1=0            
        }else{            
        }
        $(".proposal1 .youjin li").fadeOut();
        $(".proposal1 .youjin li").eq(h1).fadeIn();
    })
    
    $(".proposal1 .leftar1_2").on("click",function(){
        h1--;
        if(h1 < 0){
            h1 = totalh1 + h1            
        }else{            
        }
        $(".proposal1 .youjin li").fadeOut();
        $(".proposal1 .youjin li").eq(h1).fadeIn();        
    })
    /*기획안 페이지 넘기기 기능*/

    /*자동 스크롤 youjin 페이지*/

    /*기획안 다운로드*/
    $("#project .view .proposal .chubb").on("click", function () {
        var filePath = "img/chubblife(리뉴얼기획안)_0802.pdf"; 
        var fileName = "chubblife(리뉴얼기획안).pdf"; 

        // 파일 다운로드 링크 생성 및 클릭
        $("<a />")
            .attr("href", filePath)
            .attr("download", fileName)
            .appendTo("body")
            .get(0)
            .click();       
    });

    $("#project .view1 .proposal1 .youjin").on("click", function () {
        var filePath = "img/youjin(리뉴얼기획안)_0802.pdf"; 
        var fileName = "youjin(리뉴얼기획안).pdf"; 

        // 파일 다운로드 링크 생성 및 클릭
        $("<a />")
            .attr("href", filePath)
            .attr("download", fileName)
            .appendTo("body")
            .get(0)
            .click();       
    });


    /*기획안 다운로드*/


        /*웹디자인 & 포스터 타이틀 변경 효과*/ 
        $(".tit1").on("mouseenter",function(){
            $(".t1").stop().animate({opacity:"0"})
            $(".t2").stop().animate({opacity:"1"})
    
        })
        $(".tit1").on("mouseleave",function(){
            $(".t1").stop().animate({opacity:"1"})
            $(".t2").stop().animate({opacity:"0"})
    
        })
        
        let clickedLi = 0; 
        $(".slide_1 li .but").click(function() {
             clickedLi = $(this).closest("li").index();
            var modalposter = $(".poster3>li .poster1_2 li").index();
            $(".postermodal").fadeIn();
            $(".poster3 .poster1_2").animate({"left":-clickedLi*100+"%"})
            $(".poster3 .poster1_1").animate({"left":-clickedLi*100+"%"})
            $(".poster3 .poster1_3").animate({"left":-clickedLi*100+"%"})
        })

        /*포스터 모달 종료버튼*/   
        $(".postermodal .close,.postermodal .close h2").on("click",function(){
            $(".postermodal").fadeOut();
        })
        /*포스터 모달 종료버튼*/   

        /*포스터 우 슬라이드*/ 
        let content = 0;
        let total = 8;
        let slidposter = 0
        $(".postermodal .post1,.postermodal .right").on("click", function() {

            let content = ++clickedLi 
            if(content >= total){ 
                clickedLi = 0;
                slidposter = 0;                
                $(".poster3 .poster1_1").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_1").css({left:"0%"});
                })
                $(".poster3 .poster1_2").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_2").css({left:"0%"});
                })
                
                $(".poster3 .poster1_3").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_3").css({left:"0%"});
                });
                content = 0;
            }else{    
                $(".poster3 .poster1_1").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_1 li").first().appendTo(".poster1_1")
                    //$(".poster3 .poster1_1").css({left:"0%"});
                })
                $(".poster3 .poster1_2").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_2 li").first().appendTo(".poster1_2")
                    //$(".poster3 .poster1_2").css({left:"0%"});
                })
                $(".poster3 .poster1_3").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_3 li").first().appendTo(".poster1_3")
                    //$(".poster3 .poster1_3").css({left:"0%"});
                })            
            }
        });



        /*포스터 좌 슬라이드*/ 
        $(".postermodal  .post2,.postermodal .left").on("click", function() {

            let content = --clickedLi 
            if(content == 0){ 
                clickedLi = 8;
                slidposter = 0;      
                
                $(".poster3 .poster1_1").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_1").css({left:"-1000%"})
                })                

                $(".poster3 .poster1_2").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_2").css({left:"-1000%"});
                })
                
                $(".poster3 .poster1_3").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_3").css({left:"-1000%"});
                });                
            }else{    
                $(".poster3 .poster1_1").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_1 li").first().appendTo(".poster1_1")
                    //$(".poster3 .poster1_1").css({left:"0%"});
                })
                $(".poster3 .poster1_2").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_2 li").first().appendTo(".poster1_2")
                    //$(".poster3 .poster1_2").css({left:"0%"});
                })
                $(".poster3 .poster1_3").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_3 li").first().appendTo(".poster1_3")
                    //$(".poster3 .poster1_3").css({left:"0%"});
                })            
            }
        });   
        /*포스터 좌우 슬라이드*/ 
        posterslide();   
        function posterslide(){
            /*포스터 자동슬라이드*/
        let posterslide = 0;
        let postertotal = $(".poster2>li").length;
        console.log(postertotal)
        autoposterslide=setInterval(function(){
            posterslide++;
            if(posterslide >= postertotal-1){                
                $(".poster2").animate({"left":-posterslide*100+"%"},function(){
                    $(".poster2").css({left:"0%"});
                })  
                posterslide=0;              
            }else{
                $(".poster2").animate({"left":-posterslide*100+"%"});
            }  
            $(".slide .slide_1>li").stop().fadeOut("on");
            $(".slide .slide_1>li").eq(posterslide).stop().fadeIn("on");
        },3000);
        /*포스터 자동슬라이드*/
        }
    };
    if(matchMedia("screen and (max-width:1439px) and (min-width:768px)").matches){
        var video = $("video");
        video.on('play', function() {
            $('.scrollicon, #nav, .parent,.year').fadeOut();
            $(".loading").fadeOut();
        });
        
        video.on('pause', function() {                
            video.fadeOut(function() {
            $('.scrollicon, #nav, .parent,.year,.page,.ball').fadeIn();
            $(".introimg5 h1").delay(500).addClass("on").animate({top:"50%",opacity:"1"},function(){
                $(".title1 .line").addClass("on")
                $(".title1 h3").delay(500).animate({opacity:"1"})
                $(".introimg").fadeOut();
                $(".introimg5").css({background:"none"})
                $(".box1").fadeOut();
                
            })
            });
        });
        /*-----------------네비게이션-----------------*/
        $("#nav li").on("click", function () {
            let target = $(this).children("a").attr("href");
            //alert(target);
            let pos = $(target).offset().top;
            //alert(pos);
            $("html,body").stop().animate({ scrollTop: pos }, 1000);
        });
        /*-----------------네비게이션-----------------*/
    
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
                $("#contact .con4 .my .m2").children("img").removeClass("on")                      
            } else if (scroll >= pos2 && scroll < pos3) {
                $("#nav li").removeClass("on");
                $("#nav li").eq(1).addClass("on");
                $("#about .bg h2").stop().fadeIn();              
                $("#about .profil").stop().animate({left:"50%", opacity:"1"},function(){
                $("#about .profil").stop().delay(1000).addClass("on")                    
                $("#about .profil .introductioninfo").children("p").animate({opacity:"1"}).fadeIn();
                });

                $("#about .content .con1").stop().delay(1000).addClass("on");
                $(".bar1,.bar2,.bar3,.bar4,.bar5,.bar6,.bar7,.bar8,.bar9,.bar10").stop().delay(1200).addClass("on");                
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
                let totalcontent = $(".content .cont").length;
                let aboutme = 0;
                currentaboutme = setInterval(function(){
                aboutme++;                
                if(aboutme == totalcontent){
                    aboutme=0;

                }else{           
                }
                $(".kategorie ul li").stop().removeClass("fon");
                $(".kategorie ul li").stop().eq(aboutme).addClass("fon");
                $(".kategorie ul li").stop().removeClass("on");
                $(".kategorie ul li").stop().eq(aboutme).addClass("on");
            
                // "fon" 클래스를 찾은 경우 실행되는 코드 블록
                $(".content .cont").stop().animate({left: "-100%"});
                $(".content .cont").eq(aboutme).stop().animate({left: "0%"});
                if($(".kategorie ul li").eq(0).hasClass("fon")){                        
                    $(".bar1,.bar2,.bar3,.bar4,.bar5,.bar6,.bar7,.bar8,.bar9,.bar10").addClass("on");
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
                if ($(".kategorie ul li").eq(1).hasClass("fon")) {                       
                    $(".con2 ul").addClass("on");
                    $(".con2 .map").delay(500).animate({ opacity: "0.3" });
                }
                if ($(".kategorie ul li").eq(2).hasClass("fon")) {
                    $(".con3 ul").addClass("on");
                    $(".con3 .cert").addClass("on");
                }
                if ($(".kategorie ul li").eq(3).hasClass("fon")) {
                    $(".word").delay(1500).addClass("on");
                    $(".graph img").delay(1500).animate({ opacity: "1" });
                    $(".hobby").delay(500).addClass("on");
                }                
                // "fon" 클래스를 찾지 못한 경우 실행되는 코드 블록
                if ($(".kategorie ul li").eq(1).hasClass("fon") == false) {
                    $(".con2 ul").removeClass("on");
                    $(".con2 .map").delay(1400).animate({ opacity: "0" });
                }
                if ($(".kategorie ul li").eq(2).hasClass("fon") == false) {
                    $(".con3 ul").delay(1000).removeClass("on");
                    $(".con3 .cert").delay(1000).removeClass("on");
                }
                if ($(".kategorie ul li").eq(3).hasClass("fon") == false) {
                    $(".word").removeClass("on");
                    $(".graph img").animate({ opacity: "0" });
                    $(".hobby").removeClass("on");                    
                }
            },4000) 
                $(".posterintro").stop().removeClass("on")
                $(".posterintro").fadeIn();
                $("#contact .con4 .my .m2").children("img").removeClass("on")
            } else if (scroll >= pos3 && scroll < pos4) {
                $("#project .projectname>li").addClass("in");
                $("#project .but").delay(1500).addClass("in");
                $("#project .view").delay(2000).addClass("in");
                $("#project>h2").stop().fadeIn();    
                $("#nav li").removeClass("on");
                $("#nav li").eq(2).addClass("on");              
            } else if (scroll >= pos4 && scroll < pos5) {
                $("#nav li").removeClass("on");
                $("#nav li").eq(3).addClass("on");
                $("#poster>h2").stop().fadeIn();
                $("#poster .poster2>li").stop().addClass("in");
            } else {
                $("#nav li").removeClass("on");
                $("#nav li").eq(4).addClass("on");
                $("#contact>h2").stop().fadeIn(); 
                $("#contact .ball").stop().fadeIn(); 
                $("#contact .con4 .my .m2").delay(2000).children("img").addClass("on")
                $(".sns").addClass("on")
                
            }    
        });

        $(".kategorie ul li .outline,.kategorie ul li .but,.kategorie ul li,.kategorie ul li .front,.kategorie ul li .down").on("click",function(){
            clearInterval(currentaboutme);
        })
        /*스킬페이지 좌우 슬라이드*/ 

        let b = 0;
        let c = 0;
        let d = 0;
        let e = 0;
        let e1 = 0;
        let cli = 0;
        $(".kategorie li").on("click",function(){        
        aboutme = $(this).index();
        b = $(this).hasClass("fon");
        //alert(a)
        if(cli == 0){
            cli = 1;
        }else{
            cli = 0;
        }
        $(".kategorie li").stop().removeClass("on");
        $(".kategorie li").stop().eq(aboutme).addClass("on");
        if(b == true){
        $(".kategorie li").removeClass("fon")  ;      
        $(".content .cont").eq(aboutme).stop().animate({left:"-100%"});        
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
        $(".kategorie li").eq(aboutme).addClass("fon");
        $(".kategorie .line1").stop().animate({width:"0%"});        
        $(".content .cont").stop().animate({left:"-100%"});
        $(".content .cont").eq(aboutme).stop().animate({left:"0%"});
     
    
        e1=$(".kategorie li").eq(3).hasClass("fon");
        if(e1==true){
            $(".word").delay(1500).addClass("on")
            $(".graph img").delay(1500).animate({opacity:"1"})
            $(".hobby").delay(500).addClass("on")
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
            $(".con2 ul").addClass("on");
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
    })
    
    /*스킬 페이지 툴 사용 숙련도 바*/
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
    /*스킬 페이지 툴 사용 숙련도 바*/



    /*마우스 휠 위 또는 아래로 스크롤 시 페이지 따라가기*/
    let wheel1 = 0;
    $(".scrollbox").on("mousewheel",function(e){
        let wheeldefult=e.originalEvent.wheelDelta;
        wheel1+=wheeldefult
        clearInterval(auto1);
        $('#project .item1').css('transform', 'translateY(' + (wheel1 / 500) + 'px)');
        $('#project .item2').css('transform', 'translateY(' + (-wheel1 / 500) + 'px)');
        autowheel();    
        return false;
    })
    /*마우스 휠 위 또는 아래로 스크롤 시 페이지 따라가기*/


    /*자동 스크롤 chubb 페이지*/
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
    /*자동 스크롤 chubb 페이지*/

    /*자동 스크롤 youjin 페이지*/
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
            clearInterval(auto2);
          }    
        },50)
    }
    /*자동 스크롤 youjin 페이지*/

    /*기획안 다운로드*/
    $("#project .view .proposal .chubb").on("click", function () {
        var filePath = "img/chubblife(리뉴얼기획안)_0802.pdf"; 
        var fileName = "chubblife(리뉴얼기획안).pdf"; 

        // 파일 다운로드 링크 생성 및 클릭
        $("<a />")
            .attr("href", filePath)
            .attr("download", fileName)
            .appendTo("body")
            .get(0)
            .click();       
    });

    $("#project .view1 .proposal1 .youjin").on("click", function () {
        var filePath = "img/youjin(리뉴얼기획안)_0802.pdf"; 
        var fileName = "youjin(리뉴얼기획안).pdf"; 

        // 파일 다운로드 링크 생성 및 클릭
        $("<a />")
            .attr("href", filePath)
            .attr("download", fileName)
            .appendTo("body")
            .get(0)
            .click();       
    });


    /*기획안 다운로드*/


    /*프로젝트명 클릭 시 해당 페이지로 전환*/
    $(".projectname li").on("click",function(){
        $(".projectname li").stop().removeClass("on")
        $(this).stop().addClass("on");
        let pro =  $(this).index();                  
        $(".device ul").stop().fadeOut();
        $(".device ul").eq(pro).css({display: "flex"}).stop().fadeIn()
        /*if(pro == 0){
            $(".view1").fadeOut();
            $(".view").fadeIn();
        }else{
            $(".view").fadeOut();
            $(".view1").fadeIn();
        }*/
    })

    $(".projectname li:nth-of-type(1)").on("click",function(){
        $(".view1").stop().addClass("out")
        $(".view1").stop().removeClass("in")
        $(".view").stop().addClass("in")
        $(".view").stop().removeClass("out")
    })
    $(".projectname li:nth-of-type(2)").on("click",function(){
        $(".view").stop().addClass("out")
        $(".view").stop().removeClass("in")
        $(".view1").stop().addClass("in")
        $(".view1").stop().removeClass("out")
    })
    /*프로젝트명 클릭 시 해당 페이지로 전환*/



    /*버튼 클릭 시 스타일 적용 밑 view페이지 내용 변경*/
    $(".device .chubb li").on("click",function(){
        $(".device .chubb li").stop().removeClass("on");
        $(this).stop().addClass("on");  
        view=$(this).index()
        $(".view>div").stop().fadeOut();
        $(".view>div").eq(view).stop().fadeIn();          
    })

    $(".device .youjin li").on("click",function(){
        $(".device .youjin li").stop().removeClass("on");
        $(this).stop().addClass("on");   
        view1=$(this).index()
        $(".view1>div").stop().fadeOut();
        $(".view1>div").eq(view1).stop().fadeIn();         
    })
    /*버튼 클릭 시 스타일 적용 밑 view페이지 내용 변경*/

    /*mockup 좌우 전환*/

    let mockup = 0;
    let mocktotal = $(".view .mockup>div").length;
    
    $(".view .mockup .arrow .rightar").on("click",function(){
        mockup++;
        if(mockup == mocktotal){
            mockup=0            
        }else{            
        }
        $(".view .mockup>div").fadeOut();
        $(".view .mockup>div").eq(mockup).fadeIn();
    });    
    $(".view .mockup .arrow .leftar").on("click",function(){
        mockup--;
        if(mockup < 0){
            mockup = mocktotal + mockup            
        }else{            
        }
        $(".view .mockup>div").fadeOut();
        $(".view .mockup>div").eq(mockup).fadeIn();        
    })


    let mockup1 = 0;
    let mocktotal1 = $(".view1 .mockup>div").length;
    
    $(".view1 .mockup .arrow .rightar").on("click",function(){
        mockup1++;
        if(mockup1 == mocktotal1){
            mockup1=0            
        }else{            
        }
        $(".view1 .mockup>div").fadeOut();
        $(".view1 .mockup>div").eq(mockup1).fadeIn();
    });    
    $(".view1 .mockup .arrow .leftar").on("click",function(){
        mockup1--;
        if(mockup1 < 0){
            mockup1 = mocktotal1 + mockup            
        }else{            
        }
        $(".view1 .mockup>div").fadeOut();
        $(".view1 .mockup>div").eq(mockup1).fadeIn();        
    })
    /*mockup 좌우 전환*/

    /* 모달 */
    $("#project .view .mockup>div:nth-of-type(1)").on("click",function(){
        $("#project .modal .ta").stop().fadeOut();
        $("#project .modal .mo").stop().fadeOut();
        $("#project .modal").stop().fadeIn();
        $("#project .modal .pc").stop().fadeIn();
    })

    $("#project .view .mockup>div:nth-of-type(2)").on("click",function(){
        $("#project .modal .pc").stop().fadeOut();
        $("#project .modal .mo").stop().fadeOut();
        $("#project .modal").stop().fadeIn();
        $("#project .modal .ta").stop().fadeIn();
    })
    $("#project .view .mockup>div:nth-of-type(3)").on("click",function(){
        $("#project .modal .pc").stop().fadeOut();
        $("#project .modal .ta").stop().fadeOut();
        $("#project .modal").stop().fadeIn();
        $("#project .modal .mo").stop().fadeIn();
    })

    $(".modal .close h2").on("click",function(){
        $("#project .modal .pc").stop().fadeOut();
        $("#project .modal .ta").stop().fadeOut();
        $("#project .modal .mo").stop().fadeOut();
        $("#project .modal").stop().fadeOut();
    });   

    /* 모달 */

    /* 모달 1*/
    $("#project .view1 .mockup>div:nth-of-type(1)").on("click",function(){
    $("#project .modal1 .ta").stop().fadeOut();
    $("#project .modal1 .mo").stop().fadeOut();
    $("#project .modal1").stop().fadeIn();
    $("#project .modal1 .pc").stop().fadeIn();
    })

    $("#project .view1 .mockup>div:nth-of-type(2)").on("click",function(){
        $("#project .modal1 .pc").stop().fadeOut();
        $("#project .modal1 .mo").stop().fadeOut();
        $("#project .modal1").stop().fadeIn();
        $("#project .modal1 .ta").stop().fadeIn();
    })
    $("#project .view1 .mockup>div:nth-of-type(3)").on("click",function(){
        $("#project .modal1 .pc").stop().fadeOut();
        $("#project .modal1 .ta").stop().fadeOut();
        $("#project .modal1").stop().fadeIn();
        $("#project .modal1 .mo").stop().fadeIn();
    })

    $(".modal1 .close h2").on("click",function(){
        $("#project .modal1 .pc").stop().fadeOut();
        $("#project .modal1 .ta").stop().fadeOut();
        $("#project .modal1 .mo").stop().fadeOut();
        $("#project .modal1").stop().fadeOut();
    });   

    /* 모달1 */

    /*버튼 중 바로가기 클릭 시 이벤트 대상이 a 로 별도 이벤트 실행*/
    $(".device li a").on("click",function(){
        $(".device li").stop().removeClass("on")
        $(".device li a").parent(".device li").stop().addClass("on")
    })
    /*버튼 중 바로가기 클릭 시 이벤트 대상이 a 로 별도 이벤트 실행*/


    /*기획안 페이지 넘기기 기능*/
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
    });    
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
    /*기획안 페이지 넘기기 기능*/

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
        
        let clickedLi = 0; 
        $(".slide_1 li .but").click(function() {
             clickedLi = $(this).closest("li").index();
            var modalposter = $(".poster3>li .poster1_2 li").index();
            $(".postermodal").fadeIn();
            $(".poster3 .poster1_2").animate({"left":-clickedLi*100+"%"})
            $(".poster3 .poster1_1").animate({"left":-clickedLi*100+"%"})
            $(".poster3 .poster1_3").animate({"left":-clickedLi*100+"%"})
        })

        /*포스터 모달 종료버튼*/   
        $(".postermodal .close,.postermodal .close h2").on("click",function(){
            $(".postermodal").fadeOut();
        })
        /*포스터 모달 종료버튼*/   

        /*포스터 우 슬라이드*/ 
        let content = 0;
        let total = 10;
        let slidposter = 0
        $(".postermodal .post1,.postermodal .right").on("click", function() {

            let content = ++clickedLi 
            if(content >= total){ 
                clickedLi = 0;
                slidposter = 0;                
                $(".poster3 .poster1_1").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_1").css({left:"0%"});
                })
                $(".poster3 .poster1_2").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_2").css({left:"0%"});
                })
                
                $(".poster3 .poster1_3").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_3").css({left:"0%"});
                });
                content = 0;
            }else{    
                $(".poster3 .poster1_1").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_1 li").first().appendTo(".poster1_1")
                    //$(".poster3 .poster1_1").css({left:"0%"});
                })
                $(".poster3 .poster1_2").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_2 li").first().appendTo(".poster1_2")
                    //$(".poster3 .poster1_2").css({left:"0%"});
                })
                $(".poster3 .poster1_3").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_3 li").first().appendTo(".poster1_3")
                    //$(".poster3 .poster1_3").css({left:"0%"});
                })            
            }
        });

        /*포스터 좌 슬라이드*/ 
        $(".postermodal  .post2,.postermodal .left").on("click", function() {

            let content = --clickedLi 
            if(content == 0){ 
                clickedLi = 10;
                slidposter = 0;      
                
                $(".poster3 .poster1_1").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_1").css({left:"-1000%"})
                })                

                $(".poster3 .poster1_2").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_2").css({left:"-1000%"});
                })
                
                $(".poster3 .poster1_3").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_3").css({left:"-1000%"});
                });                
            }else{    
                $(".poster3 .poster1_1").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_1 li").first().appendTo(".poster1_1")
                    //$(".poster3 .poster1_1").css({left:"0%"});
                })
                $(".poster3 .poster1_2").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_2 li").first().appendTo(".poster1_2")
                    //$(".poster3 .poster1_2").css({left:"0%"});
                })
                $(".poster3 .poster1_3").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_3 li").first().appendTo(".poster1_3")
                    //$(".poster3 .poster1_3").css({left:"0%"});
                })            
            }
        });   
        /*포스터 좌우 슬라이드*/

       
        /*포스터 좌우 슬라이드*/ 
        posterslide();   
        function posterslide(){
            /*포스터 자동슬라이드*/
        let posterslide = 0;
        let postertotal = $(".poster2>li").length;
        console.log(postertotal)
        autoposterslide=setInterval(function(){
            posterslide++;
            if(posterslide >= postertotal-1){                
                $(".poster2").animate({"left":-posterslide*100+"%"},function(){
                    $(".poster2").css({left:"0%"});
                })  
                posterslide=0;              
            }else{
                $(".poster2").animate({"left":-posterslide*100+"%"});
            }  
            $(".slide .slide_1>li").stop().fadeOut("on");
            $(".slide .slide_1>li").eq(posterslide).stop().fadeIn("on");
        },3000);
        /*포스터 자동슬라이드*/
        }

    };
    if(matchMedia("screen and (max-width:767px)").matches){
        var video = $("video");
        video.on('play', function() {
            $('.scrollicon, #nav, .parent,.year').fadeOut();
            $(".loading").fadeOut();
        });
        
        video.on('pause', function() {                
            video.fadeOut(function() {
            $('.scrollicon, #nav, .parent,.year,.page,.ball').fadeIn();
            $(".introimg5 h1").delay(500).addClass("on").animate({top:"50%",opacity:"1"},function(){
                $(".title1 .line").addClass("on")
                $(".title1 h3").delay(500).animate({opacity:"1"})
                $(".introimg").fadeOut();
                $(".introimg5").css({background:"none"})
                $(".box1").fadeOut();
                
            })
            });
        });
        /*-----------------네비게이션-----------------*/
        $("#nav li").on("click", function () {
            let target = $(this).children("a").attr("href");
            //alert(target);
            let pos = $(target).offset().top;
            //alert(pos);
            $("html,body").stop().animate({ scrollTop: pos }, 1000);
        });
        /*-----------------네비게이션-----------------*/
    
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
                $("#contact .con4 .my .m2").children("img").removeClass("on")                      
            } else if (scroll >= pos2 && scroll < pos3) {
                $("#nav li").removeClass("on");
                $("#nav li").eq(1).addClass("on");
                $("#about .bg h2").stop().fadeIn();              
                $("#about .profil").stop().animate({left:"70%", opacity:"1"},function(){
                $("#about .profil").stop().delay(1000).addClass("on")                    
                $("#about .profil .introductioninfo").children("p").animate({opacity:"1"}).fadeIn();
                });

                $("#about .content .con1").stop().delay(1000).addClass("on");
                $(".bar1,.bar2,.bar3,.bar4,.bar5,.bar6,.bar7,.bar8,.bar9,.bar10").stop().delay(1200).addClass("on");                
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
                let totalcontent = $(".content .cont").length;
                let aboutme = 0;
                currentaboutme = setInterval(function(){
                aboutme++;                
                if(aboutme == totalcontent){
                    aboutme=0;

                }else{           
                }
                $(".kategorie ul li").stop().removeClass("fon");
                $(".kategorie ul li").stop().eq(aboutme).addClass("fon");
                $(".kategorie ul li").stop().removeClass("on");
                $(".kategorie ul li").stop().eq(aboutme).addClass("on");
            
                // "fon" 클래스를 찾은 경우 실행되는 코드 블록
                $(".content .cont").stop().animate({left: "-100%"});
                $(".content .cont").eq(aboutme).stop().animate({left: "0%"});
                if($(".kategorie ul li").eq(0).hasClass("fon")){                        
                    $(".bar1,.bar2,.bar3,.bar4,.bar5,.bar6,.bar7,.bar8,.bar9,.bar10").addClass("on");
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
                if ($(".kategorie ul li").eq(1).hasClass("fon")) {                       
                    $(".con2 ul").addClass("on");
                    $(".con2 .map").delay(500).animate({ opacity: "0.3" });
                }
                if ($(".kategorie ul li").eq(2).hasClass("fon")) {
                    $(".con3 ul").addClass("on");
                    $(".con3 .cert").addClass("on");
                }
                if ($(".kategorie ul li").eq(3).hasClass("fon")) {
                    $(".word").delay(1500).addClass("on");
                    $(".graph img").delay(1500).animate({ opacity: "1" });
                    $(".hobby").delay(500).addClass("on");
                }                
                // "fon" 클래스를 찾지 못한 경우 실행되는 코드 블록
                if ($(".kategorie ul li").eq(1).hasClass("fon") == false) {
                    $(".con2 ul").removeClass("on");
                    $(".con2 .map").delay(1400).animate({ opacity: "0" });
                }
                if ($(".kategorie ul li").eq(2).hasClass("fon") == false) {
                    $(".con3 ul").delay(1000).removeClass("on");
                    $(".con3 .cert").delay(1000).removeClass("on");
                }
                if ($(".kategorie ul li").eq(3).hasClass("fon") == false) {
                    $(".word").removeClass("on");
                    $(".graph img").animate({ opacity: "0" });
                    $(".hobby").removeClass("on");                    
                }
            },4000) 
                $(".posterintro").stop().removeClass("on")
                $(".posterintro").fadeIn();
                $("#contact .con4 .my .m2").children("img").removeClass("on")
            } else if (scroll >= pos3 && scroll < pos4) {
                $("#project .projectname>li").addClass("in");
                $("#project .but").delay(1500).addClass("in");
                $("#project .view").delay(2000).addClass("in");
                $("#project>h2").stop().fadeIn();    
                $("#nav li").removeClass("on");
                $("#nav li").eq(2).addClass("on");              
            } else if (scroll >= pos4 && scroll < pos5) {
                $("#nav li").removeClass("on");
                $("#nav li").eq(3).addClass("on");
                $("#poster>h2").stop().fadeIn();
                $("#poster .poster2>li").stop().addClass("in");
            } else {
                $("#nav li").removeClass("on");
                $("#nav li").eq(4).addClass("on");
                $("#contact>h2").stop().fadeIn(); 
                $("#contact .ball").stop().fadeIn(); 
                $("#contact .con4 .my .m2").delay(2000).children("img").addClass("on")
                $(".sns").addClass("on")
                
            }    
        });

        $(".kategorie ul li .outline,.kategorie ul li .but,.kategorie ul li,.kategorie ul li .front,.kategorie ul li .down").on("click",function(){
            clearInterval(currentaboutme);
        })
        /*스킬페이지 좌우 슬라이드*/ 

        let b = 0;
        let c = 0;
        let d = 0;
        let e = 0;
        let e1 = 0;
        let cli = 0;
        $(".kategorie li").on("click",function(){        
        aboutme = $(this).index();
        b = $(this).hasClass("fon");
        //alert(a)
        if(cli == 0){
            cli = 1;
        }else{
            cli = 0;
        }
        $(".kategorie li").stop().removeClass("on");
        $(".kategorie li").stop().eq(aboutme).addClass("on");
        if(b == true){
        $(".kategorie li").removeClass("fon")  ;      
        $(".content .cont").eq(aboutme).stop().animate({left:"-100%"});        
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
        $(".kategorie li").eq(aboutme).addClass("fon");
        $(".kategorie .line1").stop().animate({width:"0%"});        
        $(".content .cont").stop().animate({left:"-100%"});
        $(".content .cont").eq(aboutme).stop().animate({left:"0%"});
     
    
        e1=$(".kategorie li").eq(3).hasClass("fon");
        if(e1==true){
            $(".word").delay(1500).addClass("on")
            $(".graph img").delay(1500).animate({opacity:"1"})
            $(".hobby").delay(500).addClass("on")
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
            $(".con2 ul").addClass("on");
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
    })
    
    /*스킬 페이지 툴 사용 숙련도 바*/
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
    /*스킬 페이지 툴 사용 숙련도 바*/



    /*마우스 휠 위 또는 아래로 스크롤 시 페이지 따라가기*/
    let wheel1 = 0;
    $(".scrollbox").on("mousewheel",function(e){
        let wheeldefult=e.originalEvent.wheelDelta;
        wheel1+=wheeldefult
        clearInterval(auto1);
        $('#project .item1').css('transform', 'translateY(' + (wheel1 / 500) + 'px)');
        $('#project .item2').css('transform', 'translateY(' + (-wheel1 / 500) + 'px)');
        autowheel();    
        return false;
    })
    /*마우스 휠 위 또는 아래로 스크롤 시 페이지 따라가기*/


    /*자동 스크롤 chubb 페이지*/
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
    /*자동 스크롤 chubb 페이지*/

    /*자동 스크롤 youjin 페이지*/
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
            clearInterval(auto2);
          }    
        },50)
    }
    /*자동 스크롤 youjin 페이지*/

    /*기획안 다운로드*/
    $("#project .view .proposal .chubb").on("click", function () {
        var filePath = "img/chubblife(리뉴얼기획안)_0802.pdf"; 
        var fileName = "chubblife(리뉴얼기획안).pdf"; 

        // 파일 다운로드 링크 생성 및 클릭
        $("<a />")
            .attr("href", filePath)
            .attr("download", fileName)
            .appendTo("body")
            .get(0)
            .click();       
    });

    $("#project .view1 .proposal1 .youjin").on("click", function () {
        var filePath = "img/youjin(리뉴얼기획안)_0802.pdf"; 
        var fileName = "youjin(리뉴얼기획안).pdf"; 

        // 파일 다운로드 링크 생성 및 클릭
        $("<a />")
            .attr("href", filePath)
            .attr("download", fileName)
            .appendTo("body")
            .get(0)
            .click();       
    });


    /*기획안 다운로드*/


    /*프로젝트명 클릭 시 해당 페이지로 전환*/
    $(".projectname li").on("click",function(){
        $(".projectname li").stop().removeClass("on")
        $(this).stop().addClass("on");
        let pro =  $(this).index();                  
        $(".device ul").stop().fadeOut();
        $(".device ul").eq(pro).css({display: "flex"}).stop().fadeIn()
        /*if(pro == 0){
            $(".view1").fadeOut();
            $(".view").fadeIn();
        }else{
            $(".view").fadeOut();
            $(".view1").fadeIn();
        }*/
    })

    $(".projectname li:nth-of-type(1)").on("click",function(){
        $(".view1").stop().addClass("out")
        $(".view1").stop().removeClass("in")
        $(".view").stop().addClass("in")
        $(".view").stop().removeClass("out")
    })
    $(".projectname li:nth-of-type(2)").on("click",function(){
        $(".view").stop().addClass("out")
        $(".view").stop().removeClass("in")
        $(".view1").stop().addClass("in")
        $(".view1").stop().removeClass("out")
    })
    /*프로젝트명 클릭 시 해당 페이지로 전환*/



    /*버튼 클릭 시 스타일 적용 밑 view페이지 내용 변경*/
    $(".device .chubb li").on("click",function(){
        $(".device .chubb li").stop().removeClass("on");
        $(this).stop().addClass("on");  
        view=$(this).index()
        $(".view>div").stop().fadeOut();
        $(".view>div").eq(view).stop().fadeIn();          
    })

    $(".device .youjin li").on("click",function(){
        $(".device .youjin li").stop().removeClass("on");
        $(this).stop().addClass("on");   
        view1=$(this).index()
        $(".view1>div").stop().fadeOut();
        $(".view1>div").eq(view1).stop().fadeIn();         
    })
    /*버튼 클릭 시 스타일 적용 밑 view페이지 내용 변경*/

    /*mockup 좌우 전환*/

    let mockup = 0;
    let mocktotal = $(".view .mockup>div").length;
    
    $(".view .mockup .arrow .rightar").on("click",function(){
        mockup++;
        if(mockup == mocktotal){
            mockup=0            
        }else{            
        }
        $(".view .mockup>div").fadeOut();
        $(".view .mockup>div").eq(mockup).fadeIn();
    });    
    $(".view .mockup .arrow .leftar").on("click",function(){
        mockup--;
        if(mockup < 0){
            mockup = mocktotal + mockup            
        }else{            
        }
        $(".view .mockup>div").fadeOut();
        $(".view .mockup>div").eq(mockup).fadeIn();        
    })


    let mockup1 = 0;
    let mocktotal1 = $(".view1 .mockup>div").length;
    
    $(".view1 .mockup .arrow .rightar").on("click",function(){
        mockup1++;
        if(mockup1 == mocktotal1){
            mockup1=0            
        }else{            
        }
        $(".view1 .mockup>div").fadeOut();
        $(".view1 .mockup>div").eq(mockup1).fadeIn();
    });    
    $(".view1 .mockup .arrow .leftar").on("click",function(){
        mockup1--;
        if(mockup1 < 0){
            mockup1 = mocktotal1 + mockup            
        }else{            
        }
        $(".view1 .mockup>div").fadeOut();
        $(".view1 .mockup>div").eq(mockup1).fadeIn();        
    })
    /*mockup 좌우 전환*/

    /* 모달 */
    $("#project .view .mockup>div:nth-of-type(1)").on("click",function(){
        $("#project .modal .ta").stop().fadeOut();
        $("#project .modal .mo").stop().fadeOut();
        $("#project .modal").stop().fadeIn();
        $("#project .modal .pc").stop().fadeIn();
    })

    $("#project .view .mockup>div:nth-of-type(2)").on("click",function(){
        $("#project .modal .pc").stop().fadeOut();
        $("#project .modal .mo").stop().fadeOut();
        $("#project .modal").stop().fadeIn();
        $("#project .modal .ta").stop().fadeIn();
    })
    $("#project .view .mockup>div:nth-of-type(3)").on("click",function(){
        $("#project .modal .pc").stop().fadeOut();
        $("#project .modal .ta").stop().fadeOut();
        $("#project .modal").stop().fadeIn();
        $("#project .modal .mo").stop().fadeIn();
    })

    $(".modal .close h2").on("click",function(){
        $("#project .modal .pc").stop().fadeOut();
        $("#project .modal .ta").stop().fadeOut();
        $("#project .modal .mo").stop().fadeOut();
        $("#project .modal").stop().fadeOut();
    });   

    /* 모달 */

    /* 모달 1*/
    $("#project .view1 .mockup>div:nth-of-type(1)").on("click",function(){
    $("#project .modal1 .ta").stop().fadeOut();
    $("#project .modal1 .mo").stop().fadeOut();
    $("#project .modal1").stop().fadeIn();
    $("#project .modal1 .pc").stop().fadeIn();
    })

    $("#project .view1 .mockup>div:nth-of-type(2)").on("click",function(){
        $("#project .modal1 .pc").stop().fadeOut();
        $("#project .modal1 .mo").stop().fadeOut();
        $("#project .modal1").stop().fadeIn();
        $("#project .modal1 .ta").stop().fadeIn();
    })
    $("#project .view1 .mockup>div:nth-of-type(3)").on("click",function(){
        $("#project .modal1 .pc").stop().fadeOut();
        $("#project .modal1 .ta").stop().fadeOut();
        $("#project .modal1").stop().fadeIn();
        $("#project .modal1 .mo").stop().fadeIn();
    })

    $(".modal1 .close h2").on("click",function(){
        $("#project .modal1 .pc").stop().fadeOut();
        $("#project .modal1 .ta").stop().fadeOut();
        $("#project .modal1 .mo").stop().fadeOut();
        $("#project .modal1").stop().fadeOut();
    });   

    /* 모달1 */

    /*버튼 중 바로가기 클릭 시 이벤트 대상이 a 로 별도 이벤트 실행*/
    $(".device li a").on("click",function(){
        $(".device li").stop().removeClass("on")
        $(".device li a").parent(".device li").stop().addClass("on")
    })
    /*버튼 중 바로가기 클릭 시 이벤트 대상이 a 로 별도 이벤트 실행*/


    /*기획안 페이지 넘기기 기능*/
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
    });    
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
    /*기획안 페이지 넘기기 기능*/

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
        
        let clickedLi = 0; 
        $(".slide_1 li .but").click(function() {
             clickedLi = $(this).closest("li").index();
            var modalposter = $(".poster3>li .poster1_2 li").index();
            $(".postermodal").fadeIn();
            $(".poster3 .poster1_2").animate({"left":-clickedLi*100+"%"})
            $(".poster3 .poster1_1").animate({"left":-clickedLi*100+"%"})
            $(".poster3 .poster1_3").animate({"left":-clickedLi*100+"%"})
        })

        /*포스터 모달 종료버튼*/   
        $(".postermodal .close,.postermodal .close h2").on("click",function(){
            $(".postermodal").fadeOut();
        })
        /*포스터 모달 종료버튼*/   

        /*포스터 우 슬라이드*/ 
        let content = 0;
        let total = 10;
        let slidposter = 0
        $(".postermodal .post1,.postermodal .right").on("click", function() {

            let content = ++clickedLi 
            if(content >= total){ 
                clickedLi = 0;
                slidposter = 0;                
                $(".poster3 .poster1_1").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_1").css({left:"0%"});
                })
                $(".poster3 .poster1_2").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_2").css({left:"0%"});
                })
                
                $(".poster3 .poster1_3").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_3").css({left:"0%"});
                });
                content = 0;
            }else{    
                $(".poster3 .poster1_1").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_1 li").first().appendTo(".poster1_1")
                    //$(".poster3 .poster1_1").css({left:"0%"});
                })
                $(".poster3 .poster1_2").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_2 li").first().appendTo(".poster1_2")
                    //$(".poster3 .poster1_2").css({left:"0%"});
                })
                $(".poster3 .poster1_3").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_3 li").first().appendTo(".poster1_3")
                    //$(".poster3 .poster1_3").css({left:"0%"});
                })            
            }
        });

        /*포스터 좌 슬라이드*/ 
        $(".postermodal  .post2,.postermodal .left").on("click", function() {

            let content = --clickedLi 
            if(content == 0){ 
                clickedLi = 10;
                slidposter = 0;      
                
                $(".poster3 .poster1_1").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_1").css({left:"-1000%"})
                })                

                $(".poster3 .poster1_2").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_2").css({left:"-1000%"});
                })
                
                $(".poster3 .poster1_3").stop().animate({"left":-content*100+"%"},function(){
                    $(".poster3 .poster1_3").css({left:"-1000%"});
                });                
            }else{    
                $(".poster3 .poster1_1").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_1 li").first().appendTo(".poster1_1")
                    //$(".poster3 .poster1_1").css({left:"0%"});
                })
                $(".poster3 .poster1_2").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_2 li").first().appendTo(".poster1_2")
                    //$(".poster3 .poster1_2").css({left:"0%"});
                })
                $(".poster3 .poster1_3").stop().animate({"left":-content*100+"%"},function(){
                    //$(".poster3 .poster1_3 li").first().appendTo(".poster1_3")
                    //$(".poster3 .poster1_3").css({left:"0%"});
                })            
            }
            console.log("이것이 content : " + content)
            console.log("이것이 clickedLi : " + clickedLi)
            console.log("이것이 slid : " + slid)
        });   
        /*포스터 좌우 슬라이드*/      
        posterslide();   
        function posterslide(){
            /*포스터 자동슬라이드*/
        let posterslide = 0;
        let postertotal = $(".poster2>li").length;
        console.log(postertotal)
        autoposterslide=setInterval(function(){
            posterslide++;
            if(posterslide >= postertotal-1){                
                $(".poster2").animate({"left":-posterslide*100+"%"},function(){
                    $(".poster2").css({left:"0%"});
                })  
                posterslide=0;              
            }else{
                $(".poster2").animate({"left":-posterslide*100+"%"});
            }  
            $(".slide .slide_1>li").stop().fadeOut("on");
            $(".slide .slide_1>li").eq(posterslide).stop().fadeIn("on");
        },3000);
        /*포스터 자동슬라이드*/
        }

    };
})