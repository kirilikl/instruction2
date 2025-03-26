let IS_CLICKED = false
let COLOR = "rgb(83, 15, 255)";
let field = document.querySelector(".field")

for (let i = 0; i < 450; i += 1) {
	let cell = document.createElement("div")
	cell.classList.add("cell")
	cell.setAttribute("id", `${i}`)
	field.appendChild(cell)
}

document.addEventListener("mousedown", function () {
	IS_CLICKED = true
})

document.addEventListener("mouseup", function () {
	IS_CLICKED = false
})


let cells = document.querySelectorAll(".cell")
cells.forEach((cell) => {
	cell.addEventListener("mouseover", function () {
		if (IS_CLICKED) {
			anime({
				targets: cell,
				background: COLOR,
				duration: 200,
				easing: "linear",
			})
		}
	})
})

document.querySelector('.erase').addEventListener("click", function () {
	cells.forEach((cell)=>{
        anime({
				targets: cell,
				background: "rgb(62, 62, 62)",
				duration: 200,
				easing: "linear",
		})
    })
})
