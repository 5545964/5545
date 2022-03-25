function log(ev, that) {
	return new Promise((resolve, reject) => {
		const query = uni.createSelectorQuery().in(that);
		query.select(ev).boundingClientRect(data => {
			console.log(data);
			if (data == null) {
				resolve(400);
			} else {
				resolve(data.height);
			}
		}).exec();
	})
}
export default log
