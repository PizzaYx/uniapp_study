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
    const app = getApp();
    const slides = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      app.globalData.utils.getUserInfo();
      app.globalData.utils.request({
        url: "/app/init",
        success: (res) => {
          console.log(res.data);
          const { id } = res.data.area;
          app.globalData.utils.request({
            url: "/Index/index",
            data: {
              aid: id
            },
            success: ({ data }) => {
              console.log(data);
              slides.value = data.slides;
            }
          });
        }
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          isHome: true
        }),
        b: slides.value && slides.value.length > 0
      }, slides.value && slides.value.length > 0 ? {
        c: common_vendor.f(slides.value, (item, index, i0) => {
          return {
            a: item.pic_image_url,
            b: index,
            c: index
          };
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/yx/Documents/uniappProject/uniapp_study/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
