import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Control from '@/components/control/Control'
import Light from '@/components/control/children/Light'
import Fan from '@/components/control/children/Fan'
import Monitor from '@/components/monitor/Monitor'
import Temperature from '@/components/monitor/children/Temperature'
import Humidity from '@/components/monitor/children/Humidity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/control',//控制模块
      component: Control,
      children: [{
        path: 'light', //射灯
        component: Light,
      }, {
        path: 'fan', //风扇
        component: Fan
      }]
    },
    {
      path: '/monitor',//监测模块
      component: Monitor,
      children: [{
        path: 'temperature', //温度
        component: Temperature,
      }, {
        path: 'humidity', //湿度
        component: Humidity
      }]
    }
  ]
})
