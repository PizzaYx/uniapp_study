"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  _easycom_navbar2();
}
const _easycom_navbar = () => "../../components/navbar/navbar.js";
if (!Math) {
  _easycom_navbar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onLoad(() => {
      console.log(app.globalData);
    });
    common_vendor.ref("动态数据");
    const app = getApp();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          isHome: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/yx/Documents/uniappProject/uniapp_study/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
