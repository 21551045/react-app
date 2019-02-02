(function(doc, win) {
	const defaultWindowWidth = 750
	const docEl = doc.documentElement
	const resizeEvt =
    'orientationchange' in window ? 'orientationchange' : 'resize'
	const recalc = function() {
		if (!docEl || !docEl.style || !doc || !doc.body || !doc.body.style) {
			return
		}
		let { clientWidth } = docEl
		if (!clientWidth) {
			return
		}
		// 由屏幕宽度得到basefont大小,并将其写入html标签中,文档总的尺寸由rem确定
		if (clientWidth > defaultWindowWidth) {
			clientWidth = defaultWindowWidth
		}
		console.log(clientWidth)
		docEl.style.fontSize = `${100 * (clientWidth / defaultWindowWidth)}px`
		doc.body.style.display = 'block'
		doc.getElementsByTagName('html')[0].removeAttribute('class')
	}

	if (!doc.addEventListener) {
		return
	}
	win.addEventListener(resizeEvt, recalc, false)
	doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)