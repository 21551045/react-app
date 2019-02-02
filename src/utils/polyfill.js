import Fastclick from 'fastclick'

/**
 *ios11下的uiwebview，textarea轻触无法获取焦点
 */
Fastclick.prototype.focus = function(target) {
	target.focus()
}

document.body.onscroll = e => {
	e.preventDefault()
}

// fixed Object #<HTMLDivElement> has no method 'remove'
if (!('remove' in window.Element.prototype)) {
	window.Element.prototype.remove = function() {
		// BugFixed: Cannot read property 'removeChild' of null
		this &&
      this.parentNode &&
      this.parentNode.removeChild &&
      this.parentNode.removeChild(this)
	}
}

// 如果array的find函数不支持
if (!Array.prototype.find) {
	// eslint-disable-next-line no-extend-native
	Array.prototype.find = function(predicate) {
		if (this == null) {
			throw new TypeError('Array.prototype.find called on null or undefined')
		}
		if (typeof predicate !== 'function') {
			throw new TypeError('predicate must be a function')
		}
		const list = Object(this)
		const length = list.length >>> 0
		const thisArg = arguments[1]
		let value

		for (let i = 0; i < length; i++) {
			value = list[i]
			if (predicate.call(thisArg, value, i, list)) {
				return value
			}
		}
		return undefined
	}
}

// RequestAnimationFrame的兼容腻子(Android 4.3 and below)
/*! @author Paul Irish */
/*! @source https://gist.github.com/paulirish/1579671 */
(function() {
	let rafLastTime = 0
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(cbs) {
			const currTime = Date.now()
			const timeToCall = Math.max(0, 16 - (currTime - rafLastTime))
			const id = window.setTimeout(() => {
				cbs && cbs(currTime + timeToCall)
			}, timeToCall)

			rafLastTime = currTime + timeToCall
			return id
		}
	}

	if (!window.cancelAnimationFrame) {
		/**
     * @param {number} id
     * */
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id)
		}
	}
})()
