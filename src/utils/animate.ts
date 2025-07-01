import gsap from "gsap"

export const TextReveal = (el: any, timeLine?: GSAPTimeline) => {
    const tl = timeLine || gsap.timeline()
    // @ts-ignore
    tl.from(el.children, {
        x: 100,
        stagger: 0.4,
        duration: 1.5,
        ease: "circ.inOut",
    })
    tl.to(el, {
        delay: 1,
        y: "-150%",
        duration: 1,
        ease: "circ.inOut",
    })
}

export const LoadingAnimation = (fullScreen: HTMLElement, elem1: HTMLElement) => {

    const child = document.querySelectorAll(".text-reveal.child")
    // const children = document.querySelectorAll(".text-reveal.child span")

    const tl = gsap.timeline()

    TextReveal(child, tl)

    tl.to(
        fullScreen,
        {
            duration: 2,
            height: 0,
            ease: "Expo.easeInOut",
        },
        "same"
    )
        .to(
            elem1,
            {
                height: "100%",
                top: 0,
                ease: "expo.inOut",
                duration: 2,
            },
            "same"
        )
        .to(
            elem1,
            {
                height: "0%",
                top: 0,
                ease: "expo.inOut",
                duration: 0.5,
            },
        )
        .to(
            fullScreen, {
            display: "none"
        }
        )

}