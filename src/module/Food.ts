class Food {
	element: HTMLElement
	flag = '0'
	constructor() {
		this.element = document.querySelector('.food')
		this.init()
	}
	init() {
		setInterval(() => {
			this.element.style.opacity = this.flag

			if (this.flag === '0') this.flag = '1'
			else this.flag = '0'
		}, 400)
	}
	get X() {
		return this.element.offsetLeft
	}
	get Y() {
		return this.element.offsetTop
	}
	change() {
		let X = Math.round(Math.random() * 29) * 10 + 'px'
		let Y = Math.round(Math.random() * 29) * 10 + 'px'
		this.element.style.left = X
		this.element.style.top = Y
	}
}
export default Food
