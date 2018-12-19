// pages/tab/tab.js
var request = require('../../utils/api.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		data: '数据未获取'
	},
	sendRequest: function() {
		request({
			url: 'https://www.baidu.com',
			success: function(res) {
				console.log('返回的res:', res);
			},
			error: function(err) {
				console.log(err);
			}
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// 得到一个对象，链接后拼接的参数的对象
		console.log(options);
		// 此处可以带着参数重新发送请求获取页面数据
		// 此处不再多写了
		this.setData({
			data: options.articletypeid
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

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})