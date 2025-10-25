// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".image-section-6",
//     start: "top 90%",
//     toggleActions: "restart none none none"
//   }
// });

// // 🔹 1ª oscilación (rápida)
// tl.fromTo(".image-section-6",
//   { rotation: 0 },
//   {
//     rotation: 15,
//     duration: 0.5,
//     ease: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
//     transformOrigin: "top center"
//   }
// )
// .to(".image-section-6", {
//   rotation: -15,
//   duration: 0.5,
//   ease: "cubic-bezier(0.445, 0.05, 0.55, 0.95)"
// });

// // 🔹 2ª oscilación (intermedia)
// tl.to(".image-section-6", {
//   rotation: 15,
//   duration: 0.6,
//   ease: "cubic-bezier(0.445, 0.05, 0.55, 0.95)"
// })
// .to(".image-section-6", {
//   rotation: -15,
//   duration: 0.6,
//   ease: "cubic-bezier(0.445, 0.05, 0.55, 0.95)"
// });

// // 🔹 Regresa a posición natural (0°)
// tl.to(".image-section-6", {
//   rotation: 0,
//   duration: 0.8,
//   ease: "power2.out"
// });


gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".image-section-6",
    start: "top 90%",
    toggleActions: "restart restart restart restart"
  }
});

// 🔹 Primera oscilación — más rápida y fuerte
tl.fromTo(".image-section-6",
  { rotation: 0, transformOrigin: "top center" },
  { rotation: 18, duration: 0.35, ease: "power2.out" }
)
.to(".image-section-6", { rotation: -12, duration: 0.45, ease: "power1.inOut" })

// 🔹 Segunda oscilación — más lenta y suave
.to(".image-section-6", { rotation: 8, duration: 0.55, ease: "power1.out" })
.to(".image-section-6", { rotation: -5, duration: 0.6, ease: "power1.inOut" })

// 🔹 Regresa de forma natural
.to(".image-section-6", { rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" });



const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".image-section-8",
    start: "top 90%",
    toggleActions: "restart restart restart restart",
  }
});

// 🔹 Primera oscilación — más rápida y fuerte
t2.fromTo(".image-section-8",
  { rotation: 0, transformOrigin: "top center" },
  { rotation: 18, duration: 0.35, ease: "power2.out" }
)
.to(".image-section-8", { rotation: -12, duration: 0.45, ease: "power1.inOut" })

// 🔹 Segunda oscilación — más lenta y suave
.to(".image-section-8", { rotation: 8, duration: 0.55, ease: "power1.out" })
.to(".image-section-8", { rotation: -5, duration: 0.6, ease: "power1.inOut" })

// 🔹 Regresa de forma natural
.to(".image-section-8", { rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" });


// circle-section-4

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".circle-section-4",
    start: "top 90%",
    toggleActions: "restart restart restart restart",
  }
});

// 🔹 Primera oscilación — más rápida y fuerte
t3.fromTo(".circle-section-4",
  { rotation: 0, transformOrigin: "top center" },
  { rotation: 18, duration: 0.35, ease: "power2.out" }
)
.to(".circle-section-4", { rotation: -12, duration: 0.45, ease: "power1.inOut" })

// 🔹 Segunda oscilación — más lenta y suave
.to(".circle-section-4", { rotation: 8, duration: 0.55, ease: "power1.out" })
.to(".circle-section-4", { rotation: -5, duration: 0.6, ease: "power1.inOut" })

// 🔹 Regresa de forma natural
.to(".circle-section-4", { rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" });



// image-section-4

const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".image-section-4",
    start: "top 90%",
    toggleActions: "restart restart restart restart",
  }
});

// 🔹 Primera oscilación — más rápida y fuerte
t4.fromTo(".image-section-4",
  { rotation: 0, transformOrigin: "top center" },
  { rotation: 18, duration: 0.35, ease: "power2.out" }
)
.to(".image-section-4", { rotation: -12, duration: 0.45, ease: "power1.inOut" })

// 🔹 Segunda oscilación — más lenta y suave
.to(".image-section-4", { rotation: 8, duration: 0.55, ease: "power1.out" })
.to(".image-section-4", { rotation: -5, duration: 0.6, ease: "power1.inOut" })

// 🔹 Regresa de forma natural
.to(".image-section-4", { rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" });





const t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".image-section-3",
    start: "top 90%",
    toggleActions: "restart restart restart restart"
  }
});

// 🔹 Simula entrada bounceIn: escala + opacidad + rebote
t5.fromTo(".image-section-3",
  { scale: 0.3, opacity: 0, transformOrigin: "center center" },
  { scale: 1.1, opacity: 1, duration: 0.4, ease: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
)
.to(".image-section-3",
  { scale: 0.9, duration: 0.25, ease: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
)
.to(".image-section-3",
  { scale: 1.03, duration: 0.2, ease: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
)
.to(".image-section-3",
  { scale: 1, duration: 0.4, ease: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
);



const t6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-section",
    start: "top 90%",
    toggleActions: "restart restart restart restart"
  }
});

t6.fromTo(".header-section",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    ease: "ease-in"
  }
);



const t7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".title-color",
    start: "top 90%",
    toggleActions: "restart restart restart restart"
  }
});

t7.fromTo(".title-color",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 2,
    ease: "ease-in"
  }
);

const t8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".paragraph-section",
    start: "top 90%",
    toggleActions: "restart restart restart restart"
  }
});

t8.fromTo(".paragraph-section",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    ease: "ease-in"
  }
);



const t9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-section-5",
    start: "top 90%",
    toggleActions: "restart restart restart restart"
  }
});

t9.fromTo(".header-section-5",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    ease: "ease-in"
  }
);


const t10 = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-section-7",
    start: "top 90%",
    toggleActions: "restart restart restart restart"
  }
});

t10.fromTo(".header-section-7",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    ease: "ease-in"
  }
);


const t11 = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-section-8",
    start: "top 90%",
    toggleActions: "restart restart restart restart"
  }
});

t11.fromTo(".header-section-8",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    ease: "ease-in"
  }
);

const t12 = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-section-9",
    start: "top 90%",
    toggleActions: "restart restart restart restart"
  }
});

t12.fromTo(".header-section-9",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    ease: "ease-in"
  }
);


const t13 = gsap.timeline({
  scrollTrigger: {
    trigger: ".img-header", // cambia esto a tu clase real
    start: "top 90%",
    toggleActions: "restart restart restart restart"
  }
});

// 🔹 Simulación de "bounce"
t13.fromTo(".img-header",
  { y: 0 },
  { y: -40, duration: 0.4, ease: "cubic-bezier(0.445, 0.05, 0.55, 0.95)" }
)
.to(".img-header",
  { y: 0, duration: 0.3, ease: "cubic-bezier(0.445, 0.05, 0.55, 0.95)" }
)
.to(".img-header",
  { y: -25, duration: 0.2, ease: "cubic-bezier(0.445, 0.05, 0.55, 0.95)" }
)
.to(".img-header",
  { y: 0, duration: 0.2, ease: "cubic-bezier(0.445, 0.05, 0.55, 0.95)" }
);





const t14 = gsap.timeline({
  scrollTrigger: {
    trigger: ".image-section-gallery-4",
    start: "top 90%",
    toggleActions: "restart restart restart restart"
  }
});

// 🔹 Simula entrada bounceIn: escala + opacidad + rebote
t14.fromTo(".image-section-gallery-4",
  { scale: 0.3, opacity: 0, transformOrigin: "center center" },
  { scale: 1.1, opacity: 1, duration: 0.4, ease: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
)
.to(".image-section-gallery-4",
  { scale: 0.9, duration: 0.25, ease: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
)
.to(".image-section-gallery-4",
  { scale: 1.03, duration: 0.2, ease: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
)
.to(".image-section-gallery-4",
  { scale: 1, duration: 0.4, ease: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
);