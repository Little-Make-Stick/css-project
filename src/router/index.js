import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/h_v_center',
        meta:{ title: '实现水平垂直居中最便捷的方法', },
        component: () => import('../views/Layout/h_v_center.vue')
      },
      {
        path: '/double_winds',
        meta:{ title: '双飞翼布局', },
        component: () => import('../views/Layout/double_winds.vue')
      },
      {
        path: '/grail',
        meta:{ title: '圣杯布局', },
        component: () => import('../views/Layout/grail.vue')
      },
      {
        path: '/flex_grail',
        meta:{ title: 'flex实现圣杯布局', },
        component: () => import('../views/Layout/flex_grail.vue')
      },
      {
        path: '/column_waterfall',
        meta:{ title: 'CSS实现瀑布流布局（column）', },
        component: () => import('../views/Layout/column_waterfall.vue')
      },
      {
        path: '/flex_waterfall',
        meta:{ title: 'CSS实现瀑布流布局（flex）', },
        component: () => import('../views/Layout/flex_waterfall.vue')
      },
      {
        path: '/grid_waterfall',
        meta:{ title: 'CSS实现瀑布流布局（grid）', },
        component: () => import('../views/Layout/grid_waterfall.vue')
      },
      {
        path: '/muticols_sameheight',
        meta:{ title: '6种实现多列等高的方法', },
        component: () => import('../views/Layout/muticols_sameheight.vue')
      },
      {
        path: '/muti_rowspan_colspan',
        meta:{ title: '多方案实现跨行或跨列布局', },
        component: () => import('../views/Layout/muti_rowspan_colspan.vue')
      },
      {
        path: '/width_grow',
        meta:{ title: '多种方案实现单列等宽，其他多列自适应均匀布局', },
        component: () => import('../views/Layout/width_grow.vue')
      },
      // Shadow
      {
        path: '/side_shadow',
        meta:{ title: '单侧投影', },
        component: () => import('../views/Shadow/side_shadow.vue')
      },
      {
        path: '/shade',
        meta:{ title: 'box-shadow 实现半透明遮罩', },
        component: () => import('../views/Shadow/shade.vue')
      },
      {
        path: '/circle_progress',
        meta:{ title: 'Box-shadow实现圆环进度条动画', },
        component: () => import('../views/Shadow/circle_progress.vue')
      },
      {
        path: '/inscribed_angle_res',
        meta:{ title: 'Box-shadow/渐变实现内切角', },
        component: () => import('../views/Shadow/inscribed_angle_res.vue')
      },
      {
        path: '/3D_text',
        meta:{ title: 'Neon Effect 3D TEXT', },
        component: () => import('../views/Shadow/3D_text.vue')
      },
      // Magazine Layout
      {
        path: '/layout001',
        component: () => import('../views/MagazineLayout/Layout001.vue')
      },
      {
        path: '/layout002',
        component: () => import('../views/MagazineLayout/Layout002.vue')
      },
      {
        path: '/layout003',
        component: () => import('../views/MagazineLayout/Layout003.vue')
      },
      {
        path: '/layout004',
        component: () => import('../views/MagazineLayout/Layout004.vue')
      },
      {
        path: '/layout005',
        component: () => import('../views/MagazineLayout/Layout005.vue')
      },
      {
        path: '/layout006',
        component: () => import('../views/MagazineLayout/Layout006.vue')
      },
      {
        path: '/layout007',
        component: () => import('../views/MagazineLayout/Layout007.vue')
      },
      {
        path: '/layout008',
        component: () => import('../views/MagazineLayout/Layout008.vue')
      },
      {
        path: '/layout009',
        component: () => import('../views/MagazineLayout/Layout009.vue')
      },
      {
        path: '/layout010',
        component: () => import('../views/MagazineLayout/Layout010.vue')
      },
      {
        path: '/layout011',
        component: () => import('../views/MagazineLayout/Layout011.vue')
      },
      {
        path: '/layout012',
        component: () => import('../views/MagazineLayout/Layout012.vue')
      },
      {
        path: '/layout013',
        component: () => import('../views/MagazineLayout/Layout013.vue')
      },
      {
        path: '/layout014',
        component: () => import('../views/MagazineLayout/Layout014.vue')
      },
      {
        path: '/layout015',
        component: () => import('../views/MagazineLayout/Layout015.vue')
      },
      {
        path: '/layout016',
        component: () => import('../views/MagazineLayout/Layout016.vue')
      },
      {
        path: '/layout017',
        component: () => import('../views/MagazineLayout/Layout017.vue')
      },
      {
        path: '/layout018',
        component: () => import('../views/MagazineLayout/Layout018.vue')
      },
      {
        path: '/layout019',
        component: () => import('../views/MagazineLayout/Layout019.vue')
      },
      {
        path: '/layout020',
        component: () => import('../views/MagazineLayout/Layout020.vue')
      },
      // Shape
      {
        path: '/christmas-tree',
        component: () => import('../views/Shape/ChristmasTree.vue')
      },
      {
        path: '/text-gradient',
        component: () => import('../views/Shape/TextGradient.vue')
      },
      
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // Layout
  {
    path: '/h_v_center_res',
    component: () => import('../views/Layout/h_v_center_res.vue')
  },
  {
    path: '/double_winds_res',
    component: () => import('../views/Layout/double_winds_res.vue')
  },
  {
    path: '/grail_res',
    component: () => import('../views/Layout/grail_res.vue')
  },
  {
    path: '/flex_grail_res',
    component: () => import('../views/Layout/flex_grail_res.vue')
  },
  {
    path: '/column_waterfall_res',
    component: () => import('../views/Layout/column_waterfall_res.vue')
  },
  {
    path: '/flex_waterfall_res',
    component: () => import('../views/Layout/flex_waterfall_res.vue')
  },
  {
    path: '/grid_waterfall_res',
    component: () => import('../views/Layout/grid_waterfall_res.vue')
  },
  {
    path: '/muticols_sameheight_res',
    component: () => import('../views/Layout/muticols_sameheight_res.vue')
  },
  {
    path: '/muti_rowspan_colspan_res',
    component: () => import('../views/Layout/muti_rowspan_colspan_res.vue')
  },
  {
    path: '/width_grow_res',
    component: () => import('../views/Layout/width_grow_res.vue')
  },
  // Shadow
  {
    path: '/side_shadow_res',
    component: () => import('../views/Shadow/side_shadow_res.vue')
  },
  {
    path: '/shade_res',
    component: () => import('../views/Shadow/shade_res.vue')
  },
  {
    path: '/circle_progress_res',
    component: () => import('../views/Shadow/circle_progress_res.vue')
  },
  {
    path: '/inscribed_angle_res',
    component: () => import('../views/Shadow/inscribed_angle_res.vue')
  },
  {
    path: '/3D_text_res',
    component: () => import('../views/Shadow/3D_text_res.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router