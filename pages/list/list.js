// pages/list/list.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		islike: false,
		listlike: {
			0: true,
			1: false,
			2: true,
			3: false
		}
	},
	onLikeTap: function(e) {
		var index = e.currentTarget.dataset.articleindex;
		console.log(index);
		var listlike = this.data.listlike;
		listlike[index] = !this.data.listlike[index];
		this.setData({
			listlike: listlike
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let that = this;
		this.getPageData();
		// wx.showModal({
		// 	title: 'title',
		// 	content: 'content',
		// 	success: function(res) {
		// 		console.log(res);
		// 		if(res.confirm) {
		// 			wx.showToast({
		// 				title: '你成功啦',
		// 			})
		// 		}
		// 		if(res.cancel) {
		// 			wx.showToast({
		// 				title: '真的取消了',
		// 				icon: 'close'
		// 			})
		// 		}
		// 	}
		// });
		// wx.showLoading({
		// 	title: '加载中',
		// })
		// wx.showActionSheet({
		// 	itemList: ['1', '2', '3', '4'],
		// })
		
		
	},
	// 数据获取函数
	getPageData: function() {
		let that = this;
		wx.request({
			url: 'http://localhost/wxdata.json',
			method: 'GET',
			data: {
				userid: 112233,
				name: 'hahaceshi'
			},
			success: function (res) {
				if (res.statusCode == 200) {
					// setData方法可以将改变的值渲染在页面中
					that.setData({
						pageData: res.data
					})
				}
				console.log(res);
			}
		})
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
		// 需要在json文件中设置下拉刷新为true
		console.log('下拉刷新了');
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		// 需要在jso中设置距离底部还有多远的时候触发该函数,一般用于获取更多数据
		console.log('快要结束了触发的方法');
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		// 点击右上角分享的时候触发该方法
	}
})