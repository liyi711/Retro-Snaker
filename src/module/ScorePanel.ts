class ScorePanel {
	scoreElement: HTMLElement
	levelElement: HTMLElement
	score = 0
	level = 1
	maxLevel: number
	Upscroe: number
	constructor(maxlevel: number = 10, upscore: number = 10) {
		this.scoreElement = document.querySelector('.score>span')
		this.levelElement = document.querySelector('.level>span')
		this.maxLevel = maxlevel
		this.Upscroe = upscore
	}
	addscore() {
		//加''转换为字符串
		this.scoreElement.innerHTML = ++this.score + ''
		if (this.score % this.Upscroe === 0) {
			this.levelUp()
		}
	}
	levelUp() {
		// 提示等级
		if (this.level < this.maxLevel) {
			this.levelElement.innerHTML = ++this.level + ''
		}
	}
}
export default ScorePanel
