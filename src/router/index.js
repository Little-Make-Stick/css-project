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
      {
        path: '/tv_noise_animate',
        meta: { title: 'TV噪音动画', },
        component: () => import('../views/Gradient/tv_noise_animate.vue')
      },
      {
        path: '/ground_glass',
        meta: { title: '毛玻璃', },
        component: () => import('../views/Gradient/ground_glass.vue')
      },
      {
        path: '/roll_shadow',
        meta: { title: '滚动阴影', },
        component: () => import('../views/Gradient/roll_shadow.vue')
      },
      {
        path: '/streamer_text',
        meta: { title: '流光文字', },
        component: () => import('../views/Gradient/streamer_text.vue')
      },
      {
        path: '/conic_line_border',
        meta: { title: 'conic线条border', },
        component: () => import('../views/Gradient/conic_line_border.vue')
      },
      {
        path: '/light_shadow_border',
        meta: { title: '光影border', },
        component: () => import('../views/Gradient/light_shadow_border.vue')
      },
      {
        path: '/circle_progress',
        meta: { title: '圆环进度图', },
        component: () => import('../views/Gradient/circle_progress.vue')
      },
      {
        path: '/cool_light_shadow',
        meta: { title: '炫酷光影', },
        component: () => import('../views/Gradient/cool_light_shadow.vue')
      },
      {
        path: '/arrow_symbol',
        meta: { title: '箭头符号', },
        component: () => import('../views/Gradient/arrow_symbol.vue')
      },
      {
        path: '/linear_line_border',
        meta: { title: 'linear线条border', },
        component: () => import('../views/Gradient/linear_line_border.vue')
      },
      {
        path: '/maze_like_graph',
        meta: { title: '类迷宫图形', },
        component: () => import('../views/Gradient/maze_like_graph.vue')
      },
      {
        path: '/inscribed_angle',
        meta: { title: '内切角', },
        component: () => import('../views/Gradient/inscribed_angle.vue')
      },
      {
        path: '/progress_bar_animate',
        meta: { title: '进度条运动', },
        component: () => import('../views/Gradient/progress_bar_animate.vue')
      },
      {
        path: '/scroll_progress_bar',
        meta: { title: '滚动进度条', },
        component: () => import('../views/Gradient/scroll_progress_bar.vue')
      },
      {
        path: '/stripe_character',
        meta: { title: '条纹字', },
        component: () => import('../views/Gradient/stripe_character.vue')
      },
      {
        path: '/underline',
        meta: { title: '下划线', },
        component: () => import('../views/Gradient/underline.vue')
      },
      {
        path: '/img_changes',
        meta: { title: '图片变幻', },
        component: () => import('../views/Gradient/img_changes.vue')
      },
      {
        path: '/words_gradual_appearance',
        meta: { title: '文字的渐现', },
        component: () => import('../views/Gradient/words_gradual_appearance.vue')
      },
      {
        path: '/img_transform',
        meta: { title: '图片转场变换', },
        component: () => import('../views/Gradient/img_transform.vue')
      },
      {
        path: '/bubble_button_click_effect',
        meta: { title: '气泡按钮点击效果', },
        component: () => import('../views/Gradient/bubble_button_click_effect.vue')
      },
      {
        path: '/coupon_wave_shape',
        meta: { title: '优惠券波浪造型', },
        component: () => import('../views/Gradient/coupon_wave_shape.vue')
      },
      {
        path: '/stage_light_focus',
        meta: { title: '舞台灯光聚焦', },
        component: () => import('../views/Gradient/stage_light_focus.vue')
      },
      {
        path: '/wave_border',
        meta: { title: '波浪边框', },
        component: () => import('../views/Gradient/wave_border.vue')
      },
      {
        path: '/wavy_underline',
        meta: { title: '波浪下划线', },
        component: () => import('../views/Gradient/wavy_underline.vue')
      },
      {
        path: '/wave_progress_box',
        meta: { title: '波浪进度框', },
        component: () => import('../views/Gradient/wave_progress_box.vue')
      },
      {
        path: '/artistic_bg',
        meta: { title: '艺术背景', },
        component: () => import('../views/Gradient/artistic_bg.vue')
      },
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
      {
        path: '/retina_1px',
        meta: { title: 'retina屏下的1px线', },
        component: () => import('../views/Wheel/retina_1px.vue')
      },
      {
        path: '/border_nested_text',
        meta: { title: '边框嵌套文字', },
        component: () => import('../views/Wheel/border_nested_text.vue')
      },
      {
        path: '/img_switch_preview',
        meta: { title: '图片切换预览功能', },
        component: () => import('../views/Wheel/img_switch_preview.vue')
      },
      {
        path: '/dark_char_rain',
        meta: { title: '暗黑字符雨动画', },
        component: () => import('../views/Wheel/dark_char_rain.vue')
      },
      {
        path: '/chorme_tab',
        meta: { title: 'chrome的Tab分栏', },
        component: () => import('../views/Wheel/chorme_tab.vue')
      },
      {
        path: '/huawei_charge_animate',
        meta: { title: '华为充电动画', },
        component: () => import('../views/Wheel/huawei_charge_animate.vue')
      },
      {
        path: '/night_room',
        meta: { title: '夜晚居室图', },
        component: () => import('../views/Wheel/night_room.vue')
      },
      {
        path: '/pie_chart',
        meta: { title: '360°饼图', },
        component: () => import('../views/Wheel/pie_chart.vue')
      },
      {
        path: '/mouse_follow_1',
        meta: { title: '鼠标跟随1', },
        component: () => import('../views/Wheel/mouse_follow_1.vue')
      },
      {
        path: '/mouse_follow_2',
        meta: { title: '鼠标跟随2', },
        component: () => import('../views/Wheel/mouse_follow_2.vue')
      },
      {
        path: '/mouse_follow_3',
        meta: { title: '鼠标跟随3', },
        component: () => import('../views/Wheel/mouse_follow_3.vue')
      },
      {
        path: '/art_graphics',
        meta: { title: 'box-reflect实现艺术图形', },
        component: () => import('../views/Wheel/art_graphics.vue')
      },
      {
        path: '/light_shadow_btn',
        meta: { title: 'box-reflect实现光影按钮', },
        component: () => import('../views/Wheel/light_shadow_btn.vue')
      },
      {
        path: '/threed_photowall_reflection',
        meta: { title: 'box-reflect实现3D照片墙倒影效果', },
        component: () => import('../views/Wheel/threed_photowall_reflection.vue')
      },
      {
        path: '/text_split',
        meta: { title: '文字分裂特效', },
        component: () => import('../views/Wheel/text_split.vue')
      },
      {
        path: '/text_split_move',
        meta: { title: '文字分裂移动特效', },
        component: () => import('../views/Wheel/text_split_move.vue')
      },
      {
        path: '/text_fault',
        meta: { title: 'CSS文字故障效果', },
        component: () => import('../views/Wheel/text_fault.vue')
      },
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
  {
    path: '/tv_noise_animate_res',
    component: () => import('../views/Gradient/tv_noise_animate_res.vue')
  },
  {
    path: '/ground_glass_res',
    component: () => import('../views/Gradient/ground_glass_res.vue')
  },
  {
    path: '/roll_shadow_res',
    component: () => import('../views/Gradient/roll_shadow_res.vue')
  },
  {
    path: '/streamer_text_res',
    component: () => import('../views/Gradient/streamer_text_res.vue')
  },
  {
    path: '/conic_line_border_res',
    component: () => import('../views/Gradient/conic_line_border_res.vue')
  },
  {
    path: '/light_shadow_border_res',
    component: () => import('../views/Gradient/light_shadow_border_res.vue')
  },
  {
    path: '/circle_progress_res',
    component: () => import('../views/Gradient/circle_progress_res.vue')
  },
  {
    path: '/cool_light_shadow_res',
    component: () => import('../views/Gradient/cool_light_shadow_res.vue')
  },
  {
    path: '/arrow_symbol_res',
    component: () => import('../views/Gradient/arrow_symbol_res.vue')
  },
  {
    path: '/linear_line_border_res',
    component: () => import('../views/Gradient/linear_line_border_res.vue')
  },
  {
    path: '/maze_like_graph_res',
    component: () => import('../views/Gradient/maze_like_graph_res.vue')
  },
  {
    path: '/inscribed_angle_res',
    component: () => import('../views/Gradient/inscribed_angle_res.vue')
  },
  {
    path: '/progress_bar_animate_res',
    component: () => import('../views/Gradient/progress_bar_animate_res.vue')
  },
  {
    path: '/scroll_progress_bar_res',
    component: () => import('../views/Gradient/scroll_progress_bar_res.vue')
  },
  {
    path: '/stripe_character_res',
    component: () => import('../views/Gradient/stripe_character_res.vue')
  },
  {
    path: '/underline_res',
    component: () => import('../views/Gradient/underline_res.vue')
  },
  {
    path: '/img_changes_res',
    component: () => import('../views/Gradient/img_changes_res.vue')
  },
  {
    path: '/words_gradual_appearance_res',
    component: () => import('../views/Gradient/words_gradual_appearance_res.vue')
  },
  {
    path: '/img_transform_res',
    component: () => import('../views/Gradient/img_transform_res.vue')
  },
  {
    path: '/bubble_button_click_effect_res',
    component: () => import('../views/Gradient/bubble_button_click_effect_res.vue')
  },
  {
    path: '/coupon_wave_shape_res',
    component: () => import('../views/Gradient/coupon_wave_shape_res.vue')
  },
  {
    path: '/stage_light_focus_res',
    component: () => import('../views/Gradient/stage_light_focus_res.vue')
  },
  {
    path: '/wave_border_res',
    component: () => import('../views/Gradient/wave_border_res.vue')
  },
  {
    path: '/wavy_underline_res',
    component: () => import('../views/Gradient/wavy_underline_res.vue')
  },
  {
    path: '/wave_progress_box_res',
    component: () => import('../views/Gradient/wave_progress_box_res.vue')
  },
  {
    path: '/artistic_bg_res',
    component: () => import('../views/Gradient/artistic_bg_res.vue')
  },
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
  {
    path: '/retina_1px_res',
    component: () => import('../views/Wheel/retina_1px_res.vue')
  },
  {
    path: '/border_nested_text_res',
    component: () => import('../views/Wheel/border_nested_text_res.vue')
  },
  {
    path: '/img_switch_preview_res',
    component: () => import('../views/Wheel/img_switch_preview_res.vue')
  },
  {
    path: '/dark_char_rain_res',
    component: () => import('../views/Wheel/dark_char_rain_res.vue')
  },
  {
    path: '/chorme_tab_res',
    component: () => import('../views/Wheel/chorme_tab_res.vue')
  },
  {
    path: '/huawei_charge_animate_res',
    component: () => import('../views/Wheel/huawei_charge_animate_res.vue')
  },
  {
    path: '/night_room_res',
    component: () => import('../views/Wheel/night_room_res.vue')
  },
  {
    path: '/pie_chart_res',
    component: () => import('../views/Wheel/pie_chart_res.vue')
  },
  {
    path: '/mouse_follow_1_res',
    component: () => import('../views/Wheel/mouse_follow_1_res.vue')
  },
  {
    path: '/mouse_follow_2_res',
    component: () => import('../views/Wheel/mouse_follow_2_res.vue')
  },
  {
    path: '/mouse_follow_3_res',
    component: () => import('../views/Wheel/mouse_follow_3_res.vue')
  },
  {
    path: '/art_graphics_res',
    component: () => import('../views/Wheel/art_graphics_res.vue')
  },
  {
    path: '/light_shadow_btn_res',
    component: () => import('../views/Wheel/light_shadow_btn_res.vue')
  },
  {
    path: '/threed_photowall_reflection_res',
    component: () => import('../views/Wheel/threed_photowall_reflection_res.vue')
  },
  {
    path: '/text_split_res',
    component: () => import('../views/Wheel/text_split_res.vue')
  },
  {
    path: '/text_split_move_res',
    component: () => import('../views/Wheel/text_split_move_res.vue')
  },
  {
    path: '/text_fault_res',
    component: () => import('../views/Wheel/text_fault_res.vue')
  },
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
