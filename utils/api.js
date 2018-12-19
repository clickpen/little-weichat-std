// obj = {
// 	url: '',
// 	success: function(res) {
// 		console.log(res);
// 	}
// }

function request(config) {
	if(!config.success) {
		config.success = function() {};
	}
	if (!config.error) {
		config.error = function () {};
	}
	wx.request({
		url: config.url,
		success: function(res) {
			if(res.data.code == 0) {
				config.success(res.data.data);
			} else {
				config.error(res.data);
				showError();
			}
		},
		fail: function(err) {
			config.error(err);
			showError();
		}
	})
}
function showError() {
	wx.showToast({
		title: '网络被妖精抓走了，再试一次吧！',
		icon: 'none'
	});
}
module.exports = request;