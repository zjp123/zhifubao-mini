import {
  getAuthCode,
  getUserInfo,
  // getVoucherList,
  // distributeVoucher,
  // consumeVoucher,
  // getTradeNo,
} from '../api';

Page({
  data: {
    auth: {},
    userId: '',
  },
  async init() {
    try {
      my.showLoading();
      await this.getUserInfo();
      // await this.getVoucherList();
    } catch(e) {
      console.error(e);
      my.alert({
        title: e.message,
      });
    } finally {
      my.hideLoading();
    }
  },
  async getUserInfo() {
    const auth = await getAuthCode('auth_user');
    console.log(auth, 'authauth');
    const { userId } = await getUserInfo(auth.authCode);
    this.setData({
      userId: userId,
      auth: auth,
    });
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
    this.init();
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
});
