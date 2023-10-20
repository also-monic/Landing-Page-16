function circleFollow() {

    window.addEventListener("mousemove", function (delts) {
        document.querySelector(".minicircle").style.transform = `translate(${delts.clientX}px,${delts.clientY}px)`;
    })
}

circleFollow();

const tl = gsap.timeline();


tl.from(".main nav h3", {
    y: 20,
    opacity: 0,
    stagger: 0.4,
})

tl.from(".main nav .right h4", {
    y: -20,
    opacity: 0,
})

tl.from(".main .hero .top .left h1  ", {
    y: "50%",
    opacity: 0,
}, "a")

tl.from(".main .hero .top .left h2  ", {
    y: "50%",
    opacity: 0,
    delay: 0.3
}, "a")

tl.from(".main .hero .top .left h4  ", {
    y: -20,
    opacity: 0,
    delay: 0.6
}, "a")

tl.from(".main .hero .right h2", {
    y: -20,
    opacity: 0,
}, "b")

tl.from(".main .hero .right h3", {
    y: -20,
    opacity: 0,
    delay: 0.2
}, "b")

tl.from(".main .hero .bottom", {
    opacity: 0,
})

function showmore() {
    document.querySelector(".main nav .right h4").style.display = "none";
    document.querySelector(".main nav .right .all").style.display = "flex";

    gsap.from(".main nav .right .all h4", {
        y: -20,
        opacity: 0,
        stagger: 0.1,
    })
}

function imageFollow() {

    document.querySelector(".page2 .b1").addEventListener("mouseover", function (delts) {
        console.log(delts.clientX, delts.clientY)
        const tl2 = gsap.timeline();

        tl2.to(".page2 .b1 img", {
            display: "block",
            transform : `translate(${delts.clientX}px,${delts.clientY}px)`,
        })

    })


    document.querySelector(".page2 .b2").addEventListener("mouseover", function (delts) {
        console.log(delts.clientX, delts.clientY)
        const tl2 = gsap.timeline();

        tl2.to(".page2 .b2 img", {
            display: "block",
            transform : `translate(${delts.clientX}px,${delts.clientY}px)`

        })

    })


    document.querySelector(".page2 .b3").addEventListener("mouseover", function (delts) {
        console.log(delts.clientX, delts.clientY)
        const tl2 = gsap.timeline();

        tl2.to(".page2 .b3 img", {
            display: "block",
            transform : `translate(${delts.clientX}px,${delts.clientY}px)`
        })

    })

    document.querySelector(".page2 .b1").addEventListener("onmouseleave" , function() {
        // document.querySelector(".page2 .b1 img").style.display = "none";
        console.log("done")
    })
}

imageFollow();



function exactTime() {
    const d = new Date();

    let u = true;
    let x = d.getHours();

    if (x > 12) {
        x -= 12;
        u = false;
    }

    if (u === true) u = "AM"
    else u = "PM"

    let y = d.getMinutes();

    let z = d.toString().split(" ")[5].split("+")[0];

    let final = `${x}:${y} ${u} ${z}`;
    console.log(final)

    document.querySelector(".time").innerText = final;

}

exactTime();