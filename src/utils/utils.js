/**
 * 查询地址栏参数
 * @param name 查询的name
 * @return string
 * */
export function getQueryValue(name) {
	const result = window.location.search.match(
		new RegExp(`[?&]${name}=([^&]+)`, 'i')
	)
	if (result == null || result.length < 1 || result[1] === undefined) {
		return ''
	}
	return decodeURIComponent(result[1])
}

/**
 * 加载scrit
 * @param {String} url -- 链接
 */
export function loadScript(url) {
	return Promise((resolve, reject) => {
		const _head = document.getElementsByTagName('head')[0]
		const _script = document.createElement('script')
		_script.setAttribute('type', 'text/javascript')
		_script.setAttribute('src', url)
		_head.appendChild(_script)
		_script.onload = function() {
			resolve()
		}
		_script.onerror = function(err) {
			reject(err)
		}
	})
}

/**
 * document的ready事件监听
 * @param {Function} [callback] - 回调函数
 * @return {Promise} - 返回promise，completed后自动解绑
 * */
export function docReady(callback) {
	let promise = null // Promise;

	if (!callback) {
		// a callback wasn't provided, so let's return a promise instead
		promise = new Promise(resolve => {
			callback = resolve
		})
	}

	/* istanbul ignore else */
	if (
		document.readyState === 'complete' ||
    document.readyState === 'interactive'
	) {
		callback()
	} else {
		document.addEventListener('DOMContentLoaded', completed, false)
		window.addEventListener('load', completed, false)
	}

	/* istanbul ignore next */
	function completed() {
		document.removeEventListener('DOMContentLoaded', completed, false)
		window.removeEventListener('load', completed, false)
		callback()
	}

	return promise
}

/**
 *
 * @param {String} key  -- key
 * @param {Object} value  -- value
 * @param {Number} minute  -- 过期时间
 */
export function setStorage(key, value, minute) {
	minute && (value.expiration = new Date().getTime() + minute * 60 * 1000)
	window.sessionStorage.setItem(key, JSON.stringify(value))
}

export function setStorageOnly(key, value) {
	window.sessionStorage.setItem(key, JSON.stringify(value))
}

export function getStorage(key) {
	return JSON.parse(window.sessionStorage.getItem(key))
}

/**
 * base64 的图片转化为canvas， 因为canvas可以变成文件流。。。
 * @param {*} image
 */
export function convertImageToCanvas(image) {
	const canvas = document.createElement('canvas')
	canvas.width = image.width
	canvas.height = image.height
	canvas.getContext('2d').drawImage(image, 0, 0)
	return canvas
}

/**
 * 转换为文件刘
 * @param {Object} obj  - canvas 对象
 * @param {String} type  - 转化的格式
 */
export function toImageOctetStream(obj, type) {
	/**
   * 获取mimeType
   * @param  {String} type the old mime-type
   * @return the new mime-type
   */
	const _fixType = function($type) {
		$type = $type.toLowerCase().replace(/jpg/i, 'jpeg')
		const r = $type.match(/png|jpeg|bmp|gif/)[0]
		return `image/${r}`
	}

	return obj.toDataURL(type).replace(_fixType(type), 'image/octet-stream')
}

/**
 * 下载
 * @param {String} fileName
 * @param {String} base64Img  //64码的
 */
export function downloadBase64File(fileName, base64Img) {
	const aLink = document.createElement('a')
	const blob = base64ToBlob(base64Img) // new Blob([content]);

	const evt = document.createEvent('HTMLEvents')
	evt.initEvent('click', true, true) // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
	aLink.download = fileName
	aLink.href = URL.createObjectURL(blob)

	// aLink.dispatchEvent(evt);
	aLink.click()
}
// base64转blob
export function base64ToBlob(code) {
	const parts = code.split(';base64,')
	const contentType = parts[0].split(':')[1]
	const raw = window.atob(parts[1])
	const rawLength = raw.length

	const uInt8Array = new Uint8Array(rawLength)

	for (let i = 0; i < rawLength; ++i) {
		uInt8Array[i] = raw.charCodeAt(i)
	}
	return new Blob([uInt8Array], { type: contentType })
}
/**
 * 设置头部
 * @param {*} title
 */
export function setTitle(title) {
	document.title = title || '商城'
	const iframe = document.createElement('iframe')
	iframe.style.display = 'none'
	iframe.setAttribute('src', '')
	const d = () => {
		setTimeout(() => {
			iframe.removeEventListener('load', d)
			document.body.removeChild(iframe)
		}, 0)
	}
	iframe.addEventListener('load', d)
	document.body.appendChild(iframe)
}

export function isNum(number) {
	return !Number.isNaN(parseInt(number, 10))
}

export default {
	getQueryValue,
	loadScript,
	docReady,
	setStorage,
	setStorageOnly,
	getStorage,
	convertImageToCanvas,
	toImageOctetStream,
	downloadBase64File,
	base64ToBlob,
	setTitle,
	isNum
}
