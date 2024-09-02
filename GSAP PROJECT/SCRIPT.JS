
var icons = document.querySelectorAll(".cont1 .cont1-part1 h1 i");
var button = document.querySelectorAll("button");

var tl = gsap.timeline({
    scrollTrigger: {
        start:"top 1",
        toggleActions: "play reverse play reverse" // Added toggleActions
    }
});

icons.forEach(function(icon) {
    icon.addEventListener("mouseenter", function() {
        gsap.to(icon, {
            rotate: 45,
            duration: 0.5
        });
    });

    icon.addEventListener("mouseleave", function() {
        gsap.to(icon, {
            rotate: 0,
            duration: 0.5
        });
    });
});

button.forEach(function(button) {
    button.addEventListener("mouseenter", function() {
        gsap.to(button, {
            backgroundColor: "black",
            color: "white",
            duration: 0.5,
            scale: 1.2,
        });
    });

    button.addEventListener("mouseleave", function() {
        gsap.to(button, {
            backgroundColor: "white",
            color: "black",
            duration: 0.5,
            scale: 1
        });
    });
});


function page1Animation() {
    tl.from("#nav, #nav h4, #nav button", {
        x: -1100,
        duration: 0.7,
        delay: 0.3,
        stagger: 0.1,
        
    });
    tl.from("#middle #left h1", {
        x: -1000,
        duration: 0.3,
    });
    tl.from("#middle #left p", {
        x: -1000,
        duration: 0.3,
    });
    tl.from("#middle #left button", {
        x: -1000,
        duration: 0.3,
    });
    tl.from("#middle #right img", {
        x: 1000,
        opacity: 0,
        duration: 0.3
    }, "-=1");
}
page1Animation();

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#logo img, .upper",
        scroller: "body",
        start: "top 45%",
        toggleActions: "play reverse play reverse" 
    }
});

tl2.from("#logo img", {
    x: -100,
    duration: 0.4,
    delay: 1,
    stagger: 0.1,
    opacity: 0
}, "=-1");

tl2.from(".upper", {
    y: 30,
    duration: 1,
    opacity: 0
});


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#container",
        scroller: "body",
        start: "top 45%",
        end: "top -50%",
        toggleActions: "play reverse play reverse"
    }
});

tl3.from(".cont1.line1.left", {
    x: -200,
    opacity: 0,
    duration: 1
}, "line11");

tl3.from(".cont1.line1.right", {
    x: 200,
    opacity: 0,
    duration: 1
}, "line11");

tl3.from(".cont1.line2.left", {
    x: -200,
    opacity: 0,
    duration: 1
}, "line12");

tl3.from(".cont1.line2.right", {
    x: 200,
    opacity: 0,
    duration: 1
}, "line12");

//thirdlast

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".thirdlast",
        scroller: "body",
        start: "top 45%",
        end: "top -50%",
        toggleActions: "play reverse play reverse" 
    }
});
tl4.from(".thirdlast",{
    x: -200,
    opacity: 0,
    duration: 0.5
})
var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".bottom",
        scroller: "body",
        start: "top 45%",
        end: "top -50%",
        toggleActions: "play reverse play reverse" 
    }
});
tl5.from(".bottom",{
    x: -200,
    opacity: 0,
    duration: 0.5
})
var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#last",
        scroller: "body",
        start: "top 45%",
        end: "top -50%",
        toggleActions: "play reverse play reverse" 
    }
});
tl6.from("#last",{
    x: -200,
    opacity: 0,
    duration: 0.4
})
tl6.from(".l1,.l2,.l3",{
    y: 200,
    opacity: 0,
    duration: 0.5,
    stagger:0.1
})

