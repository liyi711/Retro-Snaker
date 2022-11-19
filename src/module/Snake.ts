class Snake {
	head: HTMLElement
	element: HTMLElement
	body: HTMLCollection
	constructor() {
		this.head = document.querySelector('.snake>div')
		this.element = document.querySelector('.snake')
		this.body = this.element.getElementsByTagName('div')
	}
	//获取蛇头坐标
	get X() {
		return this.head.offsetLeft
	}
	get Y() {
		return this.head.offsetTop
	}
	set X(val: number) {
		// 蛇在此轴没有移动,返回
		if (val === this.X) return
		//蛇是否回头 条件：蛇是否已有身体&&蛇头移动后是否和第二节位置相同
		if (this.body[1] && (<HTMLElement>this.body[1]).offsetLeft === val) {
			// 蛇向右回头,让蛇继续向左走
			if (val > this.X) {
				val = this.X - 10
			} else {
				val = this.X + 10
			}
		}
		//蛇是否撞墙,撞墙了抛出异常
		if (val < 0 || val > 290) {
			throw 'GG'
		}
		this.movebody()
		this.head.style.left = val + 'px'
		this.checkEatSelf()
	}
	set Y(val: number) {
		if (val === this.Y) return
		if (this.body[1] && (<HTMLElement>this.body[1]).offsetTop === val) {
			if (val > this.Y) {
				val = this.Y - 10
			} else {
				val = this.Y + 10
			}
		}
		//蛇是否撞墙,撞墙了抛出异常
		if (val < 0 || val > 290) {
			throw 'GG'
		}
		this.movebody()
		this.head.style.top = val + 'px'
		this.checkEatSelf()
	}
	// 蛇成长
	addBody() {
		// let item = document.createElement('div')
		// this.element.appendChild(item)
		this.element.insertAdjacentHTML('beforeend', '<div></div>')
	}
	//  移动身体
	movebody() {
		// 从后往前遍历，将每个元素的位置等于前一个的元素位置
		let len = this.body.length
		for (let i = len - 1; i > 0; i--) {
			let x = (this.body[i - 1] as HTMLElement).offsetLeft
			let y = (this.body[i - 1] as HTMLElement).offsetTop
			;(this.body[i] as HTMLElement).style.left = x + 'px'
			;(this.body[i] as HTMLElement).style.top = y + 'px'
		}
	}
	checkEatSelf() {
		for (let i = 1; i < this.body.length; i++) {
			let a = this.body[i] as HTMLElement
			if (a.offsetLeft === this.X && a.offsetTop === this.Y) {
				throw 'GG'
			}
		}
	}
}
export default Snake
