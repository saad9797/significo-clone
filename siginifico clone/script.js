function homepageanimation(){
    gsap.set(".slidesm",{
        scale:5
    })
    
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:'.home',
            start : "top top",  
            end :"bottom top",
            pin:true,
            scrub:1
        }
    })
    //scrub ziadah scroll kam
    tl.to('.vdodiv',{
        '--clip':"0%",
        ease:"Power2.in",
    } , 'a');
    tl.to('.slidesm',{
        ease:"Power2.in",
        scale:1
    }, 'a');
    
    
    
    
    //animation 2
    tl.to('.lft',{
        xPercent:-10,
        stagger:.03,
        ease:"Power4.in",
    },'b');
    tl.to('.rgt ',{
        xPercent:18,
        stagger:.03,
        ease:"Power4.in",
    },'b');
    
    
}

// gsap.to("slide",{
    
//     xPercent:-100,
//     ease: "Power4.in"
// })


function teampageanimation(){
    document.querySelectorAll(".listelem")
.forEach(function(el){
    el.addEventListener('mousemove',function(dets){
        
        gsap.to(this.querySelector(".picture"),{
            x:gsap.utils.mapRange(0,window.innerWidth,-100,300,dets.clientX),
            //window parent ko refer krta hai 
            //jab 0 pe ho muse to -100 jab end pe ho to 300
            //dets,clientX is mouse ki current value 
            //or utils.maprange is builtin function
            opacity:1,
            duration:0.7
        })
    })
    el.addEventListener('mouseleave',function(dets){
        gsap.to(this.querySelector(".picture"),{
            opacity:0,
            duration:0.7
        })
    })
})
}

// document.querySelectorAll(".para-text").textContent.split("")//thisn is an arr 

function animatetext(){
    var clutter=""
document.querySelector(".para-text").textContent.split("")
.forEach(function(el){
    if(el===" "){clutter+=`<span>&nbsp;</span>`}else{
        clutter += `<span >${el}</span>`
    } 
})
document.querySelector(".para-text").innerHTML=clutter

gsap.set(".para-text span",{
    opacity:0.1,
})

gsap.to(".para-text span",{
    scrollTrigger:{
        trigger:".para-text",
        start:"top 60%",//para element ka top screen ke adhe hisse me aye tab
        end:"bottom 90%",//tab krna hai jab element ka bottom 80% screen pr araha ho
        scrub:3 //scroll ke sath sath ho
    },
    opacity:1,
    ease:"Power4.in",
    stagger:45,
})

var clutter2=""
document.querySelector(".para-text2").textContent.split("")
.forEach(function(el){
    if(el===" "){clutter2+=`<span>&nbsp;</span>`}else{
        clutter2 += `<span >${el}</span>`
    } 
})
document.querySelector(".para-text2").innerHTML=clutter2

gsap.set(".para-text2 span",{
    opacity:0.1,
})


//2 47
gsap.to(".para-text2 span",{
    scrollTrigger:{
        trigger:".para-text2",
        start:"top 60%",//para element ka top screen ke adhe hisse me aye tab
        end:"bottom 90%",//tab krna hai jab element ka bottom 80% screen pr araha ho
        scrub:3 //scroll ke sath sath ho
    },
    opacity:1,
    ease:"Power4.in",
    stagger:45,
})

gsap.to(".slide", {
    scrollTrigger: {
        trigger: ".real",
        start: "top top", 
        end: "bottom bottom", 
        scrub: 1,  // Increase this value to make the animation smoother
    },
    xPercent: -200,
});

gsap.to(".c2", {
    scrollTrigger: {
        trigger: ".capsules",
        start: "top 70%",//jab top page ke 70% pe ajai toh shuru krna hai
        end: "bottom bottom",//jab bottom page ke bottom e aji toh end krdo
        scrub: 1,  // Controls the smoothness of the animation
    },
    y: 0  // Adjust this value for the desired upward movement
});




}
document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:"top 10%", //jab element ka top page ke 50% pr ajai
        end:"top 50%", //jab element ka bottom page ke 50% pr ajain
        onEnter: function(){
            document.body.setAttribute("theme",e.dataset.color);     //color is variable name
        },
        onEnterBack:function(){ 
            document.body.setAttribute("theme",e.dataset.color);
        }
    })
})







homepageanimation()
teampageanimation()
animatetext()
