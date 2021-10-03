const colors = [
    "#b9f6ca",
    "#ccff90",
    "#ffff8d",
    "#e1f5fe",
    "#ffebee",
    "#fce4ec",
    "#a8edea",
    "#c5cae9",
    "#e2f1f8",
    "#ffd0b0",
    "#ffffbf",
    "#bbdefb",
    "#e6ffff",
    "#c8e6c9",
    "#ffffce",
    "#ffffe4",
    "#efdcd5",
    "#ffffee"
  ];

const body = document.body

const randomColor = Math.floor(Math.random() * colors.length)
const randomColor2 = Math.floor(Math.random() * colors.length)
const randomColor3 = Math.floor(Math.random() * colors.length)

const bgColor = colors[randomColor]
const bgColor2 = colors[randomColor2]
const bgColor3 = colors[randomColor3]

body.style.background =  `linear-gradient(141deg, ${bgColor} 0%, ${bgColor2} 51%, ${bgColor3} 71%)`;