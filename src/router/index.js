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
    children: [
      {
        path: '/h_v_center',
        meta: { title: '实现水平垂直居中最便捷的方法', },
        component: () => import('../views/Layout/h_v_center.vue')
      },
      {
        path: '/double_winds',
        meta: { title: '双飞翼布局', },
        component: () => import('../views/Layout/double_winds.vue')
      },
      {
        path: '/grail',
        meta: { title: '圣杯布局', },
        component: () => import('../views/Layout/grail.vue')
      },
      {
        path: '/flex_grail',
        meta: { title: 'flex实现圣杯布局', },
        component: () => import('../views/Layout/flex_grail.vue')
      },
      {
        path: '/column_waterfall',
        meta: { title: 'CSS实现瀑布流布局（column）', },
        component: () => import('../views/Layout/column_waterfall.vue')
      },
      {
        path: '/flex_waterfall',
        meta: { title: 'CSS实现瀑布流布局（flex）', },
        component: () => import('../views/Layout/flex_waterfall.vue')
      },
      {
        path: '/grid_waterfall',
        meta: { title: 'CSS实现瀑布流布局（grid）', },
        component: () => import('../views/Layout/grid_waterfall.vue')
      },
      {
        path: '/muticols_sameheight',
        meta: { title: '6种实现多列等高的方法', },
        component: () => import('../views/Layout/muticols_sameheight.vue')
      },
      {
        path: '/muti_rowspan_colspan',
        meta: { title: '多方案实现跨行或跨列布局', },
        component: () => import('../views/Layout/muti_rowspan_colspan.vue')
      },
      {
        path: '/width_grow',
        meta: { title: '多种方案实现单列等宽，其他多列自适应均匀布局', },
        component: () => import('../views/Layout/width_grow.vue')
      },
      // Shadow
      {
        path: '/side_shadow',
        meta: { title: '单侧投影', },
        component: () => import('../views/Shadow/side_shadow.vue')
      },
      {
        path: '/shade',
        meta: { title: 'box-shadow 实现半透明遮罩', },
        component: () => import('../views/Shadow/shade.vue')
      },
      {
        path: '/circle_progress',
        meta: { title: 'Box-shadow实现圆环进度条动画', },
        component: () => import('../views/Shadow/circle_progress.vue')
      },
      {
        path: '/inscribed_angle',
        meta: { title: 'Box-shadow/渐变实现内切角', },
        component: () => import('../views/Shadow/inscribed_angle.vue')
      },
      {
        path: '/3D_text',
        meta: { title: 'Neon Effect 3D TEXT', },
        component: () => import('../views/Shadow/3D_text.vue')
      },
      {
        path: '/neon_atmosphere',
        meta: { title: 'box-shadow实现霓虹氖灯文字效果', },
        component: () => import('../views/Shadow/neon_atmosphere.vue')
      },
      {
        path: '/long_linear_shadow',
        meta: { title: '线性渐变模拟长阴影', },
        component: () => import('../views/Shadow/long_linear_shadow.vue')
      },
      {
        path: '/3D_shadow',
        meta: { title: '立体投影', },
        component: () => import('../views/Shadow/3D_shadow.vue')
      },
      {
        path: '/stripe_shadow_text',
        meta: { title: '线性渐变配合阴影实现条纹立体阴影条纹字', },
        component: () => import('../views/Shadow/stripe_shadow_text.vue')
      },
      {
        path: '/3D_text_shadow',
        meta: { title: '立体文字阴影', },
        component: () => import('../views/Shadow/3D_text_shadow.vue')
      },
      {
        path: '/cameo_btn',
        meta: { title: '浮雕风格按钮', },
        component: () => import('../views/Shadow/cameo_btn.vue')
      },
      {
        path: '/bg_animate_1',
        meta: { title: 'box-shadow实现背景动画1', },
        component: () => import('../views/Shadow/bg_animate_1.vue')
      },
      {
        path: '/bg_animate_2',
        meta: { title: 'box-shadow实现背景动画2', },
        component: () => import('../views/Shadow/bg_animate_2.vue')
      },
      {
        path: '/tiktok_logo',
        meta: { title: '单标签实现抖音LOGO', },
        component: () => import('../views/Shadow/tiktok_logo.vue')
      },
      {
        path: '/IE_logo',
        meta: { title: 'box-单标签借助 inset shadow 实现IE LOGO', },
        component: () => import('../views/Shadow/IE_logo.vue')
      },
      // Pseudo
      {
        path: '/div_hover',
        meta: { title: ':hover与<div>', },
        component: () => import('../views/Pseudo/div_hover.vue')
      },
      {
        path: '/radio_checked',
        meta: { title: ':checked与<radio>', },
        component: () => import('../views/Pseudo/radio_checked.vue')
      },
      {
        path: '/side_judge',
        meta: { title: '伪元素实现边界判断', },
        component: () => import('../views/Pseudo/side_judge.vue')
      },
      {
        path: '/bubble',
        meta: { title: '伪元素+border实现气泡对话框', },
        component: () => import('../views/Pseudo/bubble.vue')
      },
      {
        path: '/tab_checked',
        meta: { title: '使用 checked 伪类实现纯 CSS Tab 切换', },
        component: () => import('../views/Pseudo/tab_checked.vue')
      },
      {
        path: '/tab_target',
        meta: { title: '使用 target 伪类实现纯 CSS Tab 切换', },
        component: () => import('../views/Pseudo/tab_target.vue')
      },
      {
        path: '/tab_focus_within',
        meta: { title: '使用 focus-within 伪类实现纯 CSS Tab 切换', },
        component: () => import('../views/Pseudo/tab_focus_within.vue')
      },
      {
        path: '/input_mutual',
        meta: { title: 'input 输入交互', },
        component: () => import('../views/Pseudo/input_mutual.vue')
      },
      {
        path: '/JueJin_login_focus_within',
        meta: { title: '掘金登陆特效', },
        component: () => import('../views/Pseudo/JueJin_login_focus_within.vue')
      },
      {
        path: '/dot_loading',
        meta: { title: '伪元素实现打点 loading 效果', },
        component: () => import('../views/Pseudo/dot_loading.vue')
      },
      {
        path: '/shade_line_loading',
        meta: { title: '伪元素遮罩实现线条 loading 效果', },
        component: () => import('../views/Pseudo/shade_line_loading.vue')
      },
      {
        path: '/border_not',
        meta: { title: '使用:not()伪类控制特殊边框样式', },
        component: () => import('../views/Pseudo/border_not.vue')
      },
      {
        path: '/indistinct_not',
        meta: { title: '使用:not()伪类实现弹窗背景元素模糊', },
        component: () => import('../views/Pseudo/indistinct_not.vue')
      },
      // Filter
      {
        path: '/ball_shuttle',
        meta: { title: '小球穿梭效果', },
        component: () => import('../views/Filter/ball_shuttle.vue')
      },
      {
        path: '/ball_shuttle_loading',
        meta: { title: '小球穿梭放大loading动画', },
        component: () => import('../views/Filter/ball_shuttle_loading.vue')
      },
      {
        path: '/special_fusion',
        meta: { title: '特殊融合效果', },
        component: () => import('../views/Filter/special_fusion.vue')
      },
      {
        path: '/flame',
        meta: { title: '生成火焰效果', },
        component: () => import('../views/Filter/flame.vue')
      },
      {
        path: '/ghost',
        meta: { title: '实现幽灵动画', },
        component: () => import('../views/Filter/ghost.vue')
      },
      {
        path: '/dynamic_gradient_background',
        meta: { title: '实现渐变背景动画', },
        component: () => import('../views/Filter/dynamic_gradient_background.vue')
      },
      {
        path: '/regular_shape_shadow',
        meta: { title: '使用 drop-shadow 配合 clip-path 生成规则阴影', },
        component: () => import('../views/Filter/regular_shape_shadow.vue')
      },
      {
        path: '/color_shadow',
        meta: { title: '实现彩色阴影', },
        component: () => import('../views/Filter/color_shadow.vue')
      },
      {
        path: '/drip_effect',
        meta: { title: '实现滴水效果', },
        component: () => import('../views/Filter/drip_effect.vue')
      },
      {
        path: '/mix_effects',
        meta: { title: '实现混搭特效', },
        component: () => import('../views/Filter/mix_effects.vue')
      },
      // Border
      {
        path: '/wave_animate',
        meta: { title: '实现波浪动画', },
        component: () => import('../views/Border/wave_animate.vue')
      },
      {
        path: '/charge_animate',
        meta: { title: '实现充电动画', },
        component: () => import('../views/Border/charge_animate.vue')
      },
      {
        path: '/charge_ball_animate',
        meta: { title: '实现充电能量球动画', },
        component: () => import('../views/Border/charge_ball_animate.vue')
      },
      {
        path: '/dynamic_border',
        meta: { title: '实现动态边框', },
        component: () => import('../views/Border/dynamic_border.vue')
      },
      {
        path: '/line_animate',
        meta: { title: '线条动画', },
        component: () => import('../views/Border/line_animate.vue')
      },
      {
        path: '/line_drop',
        meta: { title: '模拟绳子下坠', },
        component: () => import('../views/Border/line_drop.vue')
      },
      {
        path: '/non_regular_charge_ball',
        meta: { title: '不规则充电球', },
        component: () => import('../views/Border/non_regular_charge_ball.vue')
      },
      {
        path: '/non_regular_ball_loading',
        meta: { title: '不规则球Loading', },
        component: () => import('../views/Border/non_regular_ball_loading.vue')
      },
      {
        path: '/border_line_animate',
        meta: { title: '边框线条动画', },
        component: () => import('../views/Border/border_line_animate.vue')
      },
      {
        path: '/typeing',
        meta: { title: '文字输入效果', },
        component: () => import('../views/Border/typeing.vue')
      },
      // Gradient
      // Mix
      // 3D
      // Animate
      {
        path: '/btn_border_animate',
        meta: { title: '按钮border动画效果', },
        component: () => import('../views/Animate/btn_border_animate.vue')
      },
      {
        path: '/curvilinear_motion',
        meta: { title: '曲线运动', },
        component: () => import('../views/Animate/curvilinear_motion.vue')
      },
      {
        path: '/rect_height_wave',
        meta: { title: '矩形变换高度实现波浪动画', },
        component: () => import('../views/Animate/rect_height_wave.vue')
      },
      {
        path: '/control_animate_direct',
        meta: { title: '控制动画方向', },
        component: () => import('../views/Animate/control_animate_direct.vue')
      },
      // Clip_path
      {
        path: '/charge_effect',
        meta: { title: '充电效果', },
        component: () => import('../views/Clip_path/charge_effect.vue')
      },
      {
        path: '/radius_gradient_border',
        meta: { title: '圆角渐变边框', },
        component: () => import('../views/Clip_path/radius_gradient_border.vue')
      },
      {
        path: '/border_line_animate_1',
        meta: { title: '边框线条动画', },
        component: () => import('../views/Clip_path/border_line_animate.vue')
      },
      {
        path: '/border_line_animate_2',
        meta: { title: '边框线条动画2', },
        component: () => import('../views/Clip_path/border_line_animate_2.vue')
      },
      {
        path: '/fault_style_animate',
        meta: { title: '图片的故障艺术风格动画', },
        component: () => import('../views/Clip_path/fault_style_animate.vue')
      },
      {
        path: '/word_fracture_effect',
        meta: { title: '文字断裂效果', },
        component: () => import('../views/Clip_path/word_fracture_effect.vue')
      },
      // text
      {
        path: '/text_decoration',
        meta: { title: '使用text-decoration实现波浪效果', },
        component: () => import('../views/Txt/text_decoration.vue')
      },
      // Wheel
      // Doodle
      // Svg
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
  {
    path: '/neon_atmosphere_res',
    component: () => import('../views/Shadow/neon_atmosphere_res.vue')
  },
  {
    path: '/long_linear_shadow_res',
    component: () => import('../views/Shadow/long_linear_shadow_res.vue')
  },
  {
    path: '/3D_shadow_res',
    component: () => import('../views/Shadow/3D_shadow_res.vue')
  },
  {
    path: '/stripe_shadow_text_res',
    component: () => import('../views/Shadow/stripe_shadow_text_res.vue')
  },
  {
    path: '/3D_text_shadow_res',
    component: () => import('../views/Shadow/3D_text_shadow_res.vue')
  },
  {
    path: '/cameo_btn_res',
    component: () => import('../views/Shadow/cameo_btn_res.vue')
  },
  {
    path: '/bg_animate_1_res',
    component: () => import('../views/Shadow/bg_animate_1_res.vue')
  },
  {
    path: '/bg_animate_2_res',
    component: () => import('../views/Shadow/bg_animate_2_res.vue')
  },
  {
    path: '/tiktok_logo_res',
    component: () => import('../views/Shadow/tiktok_logo_res.vue')
  },
  {
    path: '/IE_logo_res',
    component: () => import('../views/Shadow/IE_logo_res.vue')
  },
  // Pseudo
  {
    path: '/div_hover_res',
    component: () => import('../views/Pseudo/div_hover_res.vue')
  },
  {
    path: '/radio_checked_res',
    component: () => import('../views/Pseudo/radio_checked_res.vue')
  },
  {
    path: '/side_judge_res',
    component: () => import('../views/Pseudo/side_judge_res.vue')
  },
  {
    path: '/bubble_res',
    component: () => import('../views/Pseudo/bubble_res.vue')
  },
  {
    path: '/tab_checked_res',
    component: () => import('../views/Pseudo/tab_checked_res.vue')
  },
  {
    path: '/tab_target_res',
    component: () => import('../views/Pseudo/tab_target_res.vue')
  },
  {
    path: '/tab_focus_within_res',
    component: () => import('../views/Pseudo/tab_focus_within_res.vue')
  },
  {
    path: '/input_mutual_res',
    component: () => import('../views/Pseudo/input_mutual_res.vue')
  },
  {
    path: '/JueJin_login_focus_within_res',
    component: () => import('../views/Pseudo/JueJin_login_focus_within_res.vue')
  },
  {
    path: '/dot_loading_res',
    component: () => import('../views/Pseudo/dot_loading_res.vue')
  },
  {
    path: '/shade_line_loading_res',
    component: () => import('../views/Pseudo/shade_line_loading_res.vue')
  },
  {
    path: '/border_not_res',
    component: () => import('../views/Pseudo/border_not_res.vue')
  },
  {
    path: '/indistinct_not_res',
    component: () => import('../views/Pseudo/indistinct_not_res.vue')
  },
  // Filter
  {
    path: '/ball_shuttle_res',
    component: () => import('../views/Filter/ball_shuttle_res.vue')
  },
  {
    path: '/ball_shuttle_loading_res',
    component: () => import('../views/Filter/ball_shuttle_loading_res.vue')
  },
  {
    path: '/special_fusion_res',
    component: () => import('../views/Filter/special_fusion_res.vue')
  },
  {
    path: '/flame_res',
    component: () => import('../views/Filter/flame_res.vue')
  },
  {
    path: '/ghost_res',
    component: () => import('../views/Filter/ghost_res.vue')
  },
  {
    path: '/dynamic_gradient_background_res',
    component: () => import('../views/Filter/dynamic_gradient_background_res.vue')
  },
  {
    path: '/regular_shape_shadow_res',
    component: () => import('../views/Filter/regular_shape_shadow_res.vue')
  },
  {
    path: '/color_shadow_res',
    component: () => import('../views/Filter/color_shadow_res.vue')
  },
  {
    path: '/drip_effect_res',
    component: () => import('../views/Filter/drip_effect_res.vue')
  },
  {
    path: '/mix_effects_res',
    component: () => import('../views/Filter/mix_effects_res.vue')
  },
  // Border
  {
    path: '/wave_animate_res',
    component: () => import('../views/Border/wave_animate_res.vue')
  },
  {
    path: '/charge_animate_res',
    component: () => import('../views/Border/charge_animate_res.vue')
  },
  {
    path: '/charge_ball_animate_res',
    component: () => import('../views/Border/charge_ball_animate_res.vue')
  },
  {
    path: '/dynamic_border_res',
    component: () => import('../views/Border/dynamic_border_res.vue')
  },
  {
    path: '/line_animate_res',
    component: () => import('../views/Border/line_animate_res.vue')
  },
  {
    path: '/line_drop_res',
    component: () => import('../views/Border/line_drop_res.vue')
  },
  {
    path: '/non_regular_ball_loading_res',
    component: () => import('../views/Border/non_regular_ball_loading_res.vue')
  },
  {
    path: '/non_regular_charge_ball_res',
    component: () => import('../views/Border/non_regular_charge_ball_res.vue')
  },
  {
    path: '/border_line_animate_res',
    component: () => import('../views/Border/border_line_animate_res.vue')
  },
  {
    path: '/typeing_res',
    component: () => import('../views/Border/typeing_res.vue')
  },
  // Gradient
  // Mix
  // 3D
  // Animate
  {
    path: '/btn_border_animate_res',
    component: () => import('../views/Animate/btn_border_animate_res.vue')
  },
  {
    path: '/curvilinear_motion_res',
    component: () => import('../views/Animate/curvilinear_motion_res.vue')
  },
  {
    path: '/rect_height_wave_res',
    component: () => import('../views/Animate/rect_height_wave_res.vue')
  },
  {
    path: '/control_animate_direct_res',
    component: () => import('../views/Animate/control_animate_direct_res.vue')
  },
  // Clip_path
  {
    path: '/charge_effect_res',
    component: () => import('../views/Clip_path/charge_effect_res.vue')
  },
  {
    path: '/radius_gradient_border_res',
    component: () => import('../views/Clip_path/radius_gradient_border_res.vue')
  },
  {
    path: '/border_line_animate_1_res',
    component: () => import('../views/Clip_path/border_line_animate_res.vue')
  },
  {
    path: '/border_line_animate_2_res',
    component: () => import('../views/Clip_path/border_line_animate_2_res.vue')
  },
  {
    path: '/fault_style_animate_res',
    component: () => import('../views/Clip_path/fault_style_animate_res.vue')
  },
  {
    path: '/word_fracture_effect_res',
    component: () => import('../views/Clip_path/word_fracture_effect_res.vue')
  },
  // text
  {
    path: '/text_decoration_res',
    component: () => import('../views/Txt/text_decoration_res.vue')
  },
  // Wheel
  // Doodle
  // Svg

]

// {
//   path: '/layout008',
//   component: () => import('../views/MagazineLayout/Layout008.vue')
// },
// for (let i = 1; i <= 20; i++) {
//   let fileName = '/layout0' + i.toString().padStart(2, '0');
//   console.log(routes[1].children)
//   routes[1].children.push({
//     path: fileName,
//     component: () => import('../views/MagazineLayout' + fileName),
//   })
// }


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
