var tl = new TimelineLite();

tl.from(".line span",{
    duration:2.5,
    y:250,
    ease:"power4.out",
    delay:1,
    skewY:6,
    stagger: {
       amount: 1
    }
})