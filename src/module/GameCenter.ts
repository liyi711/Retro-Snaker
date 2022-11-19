import Food from './Food'
import Snake from './Snake'
import ScorePanel from './ScorePanel'
class GameCenter {
	food: Food
	snake: Snake
	scorepanel: ScorePanel
	// 蛇走的方向
	direction: string
	// 是否游戏结束
	isGG = false
	constructor() {
		this.food = new Food()
		this.snake = new Snake()
		this.scorepanel = new ScorePanel()
		this.init()
	}
	//开始游戏
	init() {
		// 键盘输入事件
		// 注意！！this问题：这里直接用this.函数,this会指向调用者document
		// 需要用bind改变this
		document.addEventListener('keydown', this.keydownHandler.bind(this))
		this.run()
	}
	keydownHandler(event: KeyboardEvent) {
		this.direction = event.key
	}
	run() {
		// 获取蛇头的坐标
		let x = this.snake.X
		let y = this.snake.Y

		switch (this.direction) {
			case 'ArrowUp':
				y -= 10
				break
			case 'ArrowDown':
				y += 10
				break
			case 'ArrowLeft':
				x -= 10
				break
			case 'ArrowRight':
				x += 10
				break
		}
		this.checkEat(x, y) && this.update()
		// 捕获如果蛇的抛出异常
		try {
			this.snake.X = x
			this.snake.Y = y
		} catch (e) {
			alert(e)
			this.isGG = true
		}
		this.isGG ||
			setTimeout(() => {
				this.run()
			}, 300 - (this.scorepanel.level - 1) * 30)
	}
	// 吃食检测
	checkEat(x: number, y: number) {
		return this.food.X === x && this.food.Y === y
	}
	update() {
		this.food.change()
		this.snake.addBody()
		this.scorepanel.addscore()
	}
}
export default GameCenter
