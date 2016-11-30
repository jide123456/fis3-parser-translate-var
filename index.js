module.exports = (content, file, options) => {
	let 
		maps = options.maps,
		ctn = content

	Object.keys(maps).forEach((e, i) => {
		if (!(e instanceof RegExp)) {
			var reg = new RegExp(e, 'g')
		}

		ctn = ctn.replace(reg, maps[e])
	})

	return ctn
}