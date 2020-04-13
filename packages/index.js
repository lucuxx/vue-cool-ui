import VueCoolButton from './button'

const components = {
  VueCoolButton
}

const install = Vue => {
  //main.js中使用Vue.use() 安装全部组件
  if (install.installed) return //判断是否安装
  install.installed = true //记录安装状态
  Object.keys(components).forEach(key => Vue.component(key, components[key]))
}

export default {
  version: '0.1.1',
  install
}
