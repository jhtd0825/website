// docs/.vuepress/plugins/custom-plugins/index.js
const { resolve } = require('path');

// 导出 VuePress 插件对象
module.exports = (options, ctx) => {
  return {
    // 插件名称（必须和 config.js 中声明的 name 一致）
    name: 'custom-plugins',

    // 关键：注册全局 UI 组件（对应 globalUIComponents 配置）
    // 告诉 VuePress：插件的组件在 components 目录下
    components: resolve(__dirname, 'components'),

    // 可选：插件的其他生命周期钩子（比如编译前、页面渲染后等，按需添加）
    // 例如：页面加载前执行一些逻辑
    async ready() {
      console.log('custom-plugins 插件已生效！'); // 启动后终端会打印，用于验证
    }
  };
};
