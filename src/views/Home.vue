<template>
  <div class="home-contain">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <!-- 支持路由，并根据路由动态设置高亮 -->
      <el-menu router :default-active="$route.path" :collapse="isCollapse">
        <template v-for="(item,i) in navsList" :key="i">
          <el-sub-menu :index="item.key" popper-append-to-body>
            <template #title>
              <el-icon>
                <i :class="item.icon"></i>
              </el-icon>
              <span>{{item.key}}</span>
            </template>
            <el-menu-item-group>
              <template v-for="(subItem,j) in item.subNavs" :key="j">
                <el-menu-item :index="subItem.key">{{subItem.title}}</el-menu-item>
              </template>
            </el-menu-item-group>
          </el-sub-menu>
        </template>
        <el-menu-item :index="$route" @click="isCollapse = !isCollapse">
          <el-icon>
            <i class="fa fa-bars"></i>
          </el-icon>
          <span>收起/展开</span>
        </el-menu-item>
      </el-menu>

      <el-container>
        <el-header style="text-align: right; font-size: 12px;background-color: #eef1f6;line-height: 80px;">
          <el-dropdown>
            <el-icon style="margin-right: 15px">
              <setting />
            </el-icon>
            <!-- vue2 ： slot="dropdown" -->
            <!-- vue3 ： v-slot:dropdown  /  #dropdown -->
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </el-header>

        <el-main>
          <router-view></router-view>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140">
            </el-table-column>
            <el-table-column prop="name" label="Name" width="120">
            </el-table-column>
            <el-table-column prop="address" label="Address"> </el-table-column>
          </el-table> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import { defineComponent, ref } from 'vue'
  import { Setting } from '@element-plus/icons-vue'
  export default defineComponent({
    name: 'Home',
    setup() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      }

      const tableData = ref(Array(20).fill(item))

      return {
        tableData,
      }
    },
    components: {
      Setting,
    },
    data() {
      return {
        isCollapse: false,
        navsList: [
          {
            key: 'layout',
            icon: "fa fa-bookmark-o",
            subNavs: [
              { key: '/h_v_center', title: '实现水平垂直居中最便捷的方法' },
              { key: '/double_winds', title: '双飞翼布局' },
              { key: '/grail', title: '圣杯布局' },
              { key: '/flex_grail', title: 'flex实现圣杯布局' },
              { key: '/column_waterfall', title: 'CSS实现瀑布流布局（column）' },
              { key: '/flex_waterfall', title: 'CSS实现瀑布流布局（flex）' },
              { key: '/grid_waterfall', title: 'CSS实现瀑布流布局（grid）' },
              { key: '/muticols_sameheight', title: '6种实现多列等高的方法' },
              { key: '/muti_rowspan_colspan', title: '多方案实现跨行或跨列布局' },
              { key: '/width_grow', title: '多种方案实现单列等宽，其他多列自适应均匀布局' },
            ]
          },
          {
            key: 'shadow',
            icon: "fa fa-puzzle-piece",
            subNavs: [
              { key: '/side_shadow', title: '单侧投影' },
              { key: '/shade', title: 'box-shadow 实现半透明遮罩' },
              { key: '/circle_progress', title: 'Box-shadow实现圆环进度条动画' },
              { key: '/inscribed_angle', title: 'Box-shadow/渐变实现内切角' },
              { key: '/3D_text_shadow', title: '立体文字阴影' },
              { key: '/3D_text', title: 'Neon Effect 3D TEXT' },
              { key: '/3D_shadow', title: '立体投影' },
              { key: '/neon_atmosphere', title: 'box-shadow实现霓虹氖灯文字效果' },
              { key: '/long_linear_shadow', title: '线性渐变模拟长阴影' },
              { key: '/stripe_shadow_text', title: '线性渐变配合阴影实现条纹立体阴影条纹字' },
              { key: '/cameo_btn', title: '浮雕风格按钮' },
              { key: '/bg_animate_1', title: 'box-shadow实现背景动画1' },
              { key: '/bg_animate_2', title: 'box-shadow实现背景动画2' },
              { key: '/tiktok_logo', title: '单标签实现抖音LOGO' },
              { key: '/IE_logo', title: 'box-单标签借助 inset shadow 实现IE LOGO' },
            ]
          },
          {
            key: 'pseudo',
            icon: "fa fa-pie-chart",
            subNavs: [
              { key: '/div_hover', title: ':hover与<div>' },
              // { key: '/a_target', title: ':target与<a>' },
              { key: '/radio_checked', title: ':checked与<radio>' },
              { key: '/side_judge', title: '伪元素实现边界判断' },
              { key: '/bubble', title: '伪元素+border实现气泡对话框' },
              { key: '/tab_checked', title: '使用 checked 伪类实现纯 CSS Tab 切换' },
              { key: '/tab_target', title: '使用 target 伪类实现纯 CSS Tab 切换' },
              { key: '/tab_focus_within', title: '使用 focus-within 伪类实现纯 CSS Tab 切换' },
              { key: '/input_mutual', title: ' input 输入交互' },
              { key: '/JueJin_login_focus_within', title: '掘金登陆特效' },
              { key: '/dot_loading', title: '伪元素实现打点 loading 效果' },
              { key: '/shade_line_loading', title: '伪元素遮罩实现线条 loading 效果' },
              { key: '/border_not', title: '使用:not()伪类控制特殊边框样式' },
              { key: '/indistinct_not', title: '使用:not()伪类实现弹窗背景元素模糊' },
            ]
          },
          {
            key: 'filter',
            icon: "fa fa-filter",
            subNavs: [
              { key: '/ball_shuttle', title: '小球穿梭效果' },
              { key: '/ball_shuttle_loading', title: '小球穿梭放大loading动画' },
              { key: '/special_fusion', title: '特殊融合效果' },
              { key: '/flame', title: '生成火焰效果' },
              { key: '/ghost', title: '实现幽灵动画' },
              { key: '/dynamic_gradient_background', title: '实现渐变背景动画' },
              { key: '/regular_shape_shadow', title: '使用 drop-shadow 配合 clip-path 生成规则阴影' },
              { key: '/color_shadow', title: '实现彩色阴影' },
              { key: '/drip_effect', title: '实现滴水效果' },
              { key: '/mix_effects', title: '实现混搭特效' },
            ]
          },
          {
            key: 'border',
            icon: "fa fa-hourglass-o",
            subNavs: [
              { key: '/line_animate', title: '线条动画' },
              { key: '/wave_animate', title: '实现波浪动画' },
              { key: '/charge_animate', title: '实现充电动画' },
              { key: '/charge_ball_animate', title: '实现充电能量球动画' },
              { key: '/non_regular_charge_ball', title: '不规则充电球' },
              { key: '/non_regular_ball_loading', title: '不规则球Loading' },
              { key: '/dynamic_border', title: '实现图案边框' },
              { key: '/line_drop', title: '模拟绳子下坠' },
              { key: '/border_line_animate', title: '边框线条动画' },
              { key: '/typeing', title: '文字输入效果' },
            ]
          },
          {
            key: 'gradient',
            icon: "fa-square",
            subNavs: [
              { key: '/tv_noise_animate', title: 'TV噪音动画' },
              { key: '/ground_glass', title: '毛玻璃' },
              { key: '/roll_shadow', title: '滚动阴影' },
              { key: '/streamer_text', title: '流光文字' },
              { key: '/conic_line_border', title: 'conic线条border' },

              { key: '/light_shadow_border', title: '光影border' },
              { key: '/circle_progress', title: '圆环进度图' },
              { key: '/cool_light_shadow', title: '炫酷光影' },
              { key: '/arrow_symbol', title: '箭头符号' },
              { key: '/linear_line_border', title: 'linear线条border' },

              { key: '/maze_like_graph', title: '类迷宫图形' },
              { key: '/inscribed_angle', title: '内切角' },
              { key: '/progress_bar_animate', title: '进度条运动' },
              { key: '/scroll_progress_bar', title: '滚动进度条' },
              { key: '/stripe_character', title: '条纹字' },

              { key: '/underline', title: '下划线' },
              { key: '/img_changes', title: '图片变幻' },
              { key: '/words_gradual_appearance', title: '文字的渐现' },
              { key: '/img_transform', title: '图片转场变换' },
              { key: '/bubble_button_click_effect', title: '气泡按钮点击效果' },
              
              { key: '/coupon_wave_shape', title: '优惠券波浪造型' },
              { key: '/stage_light_focus', title: '舞台灯光聚焦' },
              { key: '/wave_border', title: '波浪边框' },
              { key: '/wavy_underline', title: '波浪下划线' },
              { key: '/wave_progress_box', title: '波浪进度框' },

              { key: '/artistic_bg', title: '艺术背景' },
            ]
          },
          {
            key: 'text',
            icon: "fa fa-text-height",
            subNavs: [
              { key: '/text_decoration', title: '使用text-decoration实现波浪效果' },
            ]
          },
          {
            key: 'mix',
            icon: "fa fa-arrows-alt",
            subNavs: [
              { key: '/text_decoration', title: '使用text-decoration实现波浪效果' },
            ]
          },
          {
            key: '3d',
            icon: "fa fa-codepen",
            subNavs: [
              { key: '/text_decoration', title: '使用text-decoration实现波浪效果' },
            ]
          },
          {
            key: 'animate',
            icon: "fa fa-wpexplorer",
            subNavs: [
              { key: '/btn_border_animate', title: '按钮border动画效果' },
              { key: '/curvilinear_motion', title: '曲线运动' },
              { key: '/rect_height_wave', title: '矩形变换高度实现波浪动画' },
              { key: '/control_animate_direct', title: '控制动画方向' },
            ]
          },
          {
            key: 'clip_path',
            icon: "fa fa-crop",
            subNavs: [
              { key: '/charge_effect', title: '充电效果' },
              { key: '/radius_gradient_border', title: '圆角渐变边框' },
              { key: '/border_line_animate_1', title: '边框线条动画' },
              { key: '/border_line_animate_2', title: '边框线条动画2' },
              { key: '/fault_style_animate', title: '图片的故障艺术风格动画' },
              { key: '/word_fracture_effect', title: '文字断裂效果' },
            ]
          },
          {
            key: 'text',
            icon: "fa fa-text-height",
            subNavs: [
              { key: '/text_decoration', title: '使用text-decoration实现波浪效果' },
            ]
          },
          {
            key: 'wheel',
            icon: "fa fa-support",
            subNavs: [
              { key: '/retina_1px', title: 'retina屏下的1px线' },
              { key: '/border_nested_text', title: '边框嵌套文字' },
              { key: '/img_switch_preview', title: '图片切换预览功能' },
              { key: '/dark_char_rain', title: '暗黑字符雨动画' },
              { key: '/chorme_tab', title: 'chrome的Tab分栏' },

              { key: '/huawei_charge_animate', title: '华为充电动画' },
              { key: '/night_room', title: '夜晚居室图' },
              { key: '/pie_chart', title: '360°饼图' },
              { key: '/mouse_follow_1', title: '鼠标跟随1' },
              { key: '/mouse_follow_2', title: '鼠标跟随2' },

              { key: '/mouse_follow_3', title: '鼠标跟随3' },
              { key: '/art_graphics', title: 'box-reflect实现艺术图形' },
              { key: '/light_shadow_btn', title: 'box-reflect实现光影按钮' },
              { key: '/threed_photowall_reflection', title: 'box-reflect实现3D照片墙倒影效果' },
              { key: '/text_split', title: '文字分裂特效' },

              { key: '/text_split_move', title: '文字分裂移动特效' },
              { key: '/text_fault', title: 'CSS文字故障效果' },

            ]
          },
          {
            key: 'doodle',
            icon: "fa fa-object-group",
            subNavs: [
              { key: '/text_decoration', title: '使用text-decoration实现波浪效果' },
            ]
          },
          {
            key: 'svg',
            icon: "fa fa-smile-o",
            subNavs: [
              { key: '/text_decoration', title: '使用text-decoration实现波浪效果' },
            ]
          },
          {
            key: 'MagazineLayout-1',
            icon: "fa fa-paint-brush",
            subNavs: new Array(10).fill(0).map((e, i) => {
              let index = (i + 1).toString().padStart(2, '0');
              return {
                key: '/layout0' + index,
                title: 'Layout0' + index
              }
            })
          },
          {
            key: 'MagazineLayout-2',
            icon: "fa fa-paw",
            subNavs: new Array(10).fill(0).map((e, i) => {
              let index = (i + 11).toString();
              return {
                key: '/layout0' + index,
                title: 'Layout0' + index
              }
            })
          },
          {
            key: 'Shape',
            icon: "fa fa-cube",
            subNavs: [
              { key: '/christmas-tree', title: 'christmas-tree' },
              { key: '/text-gradient', title: 'text-gradient' },
            ]
          },
        ]
      }
    },
    created() {
      this.$nextTick(() => {
        window.onload = () => { this.setCollapse() };
        window.onresize = () => { this.setCollapse() };
      })
    },
    methods: {
      setCollapse() {
        if (document.querySelector('#app').clientWidth <= 1400) {
          this.isCollapse = true;
        } else {
          this.isCollapse = false;
        }
      }
    }
  })
</script>
<style lang="scss" scoped>
  $theme-color: #42b983;

  .el-main {
    padding: 0 !important;
  }

  .el-menu-item.is-active {
    color: $theme-color;
    border-left: 4px solid $theme-color;
  }

  .el-menu:not(.el-menu--collapse) {
    text-align: left;
  }

  ul[role="menubar"].el-menu {
    /* 高度固定，可滚动，不因目录撑开屏幕 */
    overflow-y: scroll;
    /* 宽度固定，不滚动 */
    overflow-x: hidden;
    /* 设置展开菜单的宽度 */
    width: 350px;
    min-width: 350px;
    /* 底部预留一个菜单项的高度给收缩菜单 */
    padding-bottom: 56px;
  }

  ul[role="menubar"].el-menu.el-menu--collapse {
    /* 设置收缩是的菜单宽度 */
    width: 64px;
    min-width: 64px;
    /* 收缩时高度固定，自动显示或隐藏滚动条 */
    overflow-y: auto;
  }

  /* 滚动条整体部分 */
  ul[role="menubar"].el-menu::-webkit-scrollbar {
    background: azure;
    width: 6px;
  }

  /* 外层轨道 */
  ul[role="menubar"].el-menu::-webkit-scrollbar-track {}

  /* 内层滚动槽 */
  ul[role="menubar"].el-menu::-webkit-scrollbar-track-piece {
    background: #ececf5;
  }

  /* 滚动的滑块 */
  ul[role="menubar"].el-menu::-webkit-scrollbar-thumb {
    background: $theme-color;
    border-radius: 10px;
  }

  /* 边角 */
  ul[role="menubar"].el-menu::-webkit-scrollbar-corner {}

  ul.el-menu>.el-menu-item {
    position: fixed;
    bottom: 0;
    background: #fff;
    width: 350px;
  }

  ul.el-menu.el-menu--collapse>.el-menu-item {
    width: 64px;
  }
</style>