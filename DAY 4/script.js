var main=document.querySelector("#main")
var cursor=document.querySelector("#cursor")
var image=document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    gsap.to(image,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out"
    })
})
image.addEventListener("mouseenter",function(){
    gsap.to(image,{
        scale:1.4,
    })
})