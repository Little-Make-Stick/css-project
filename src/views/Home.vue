<template>
  <div class="home-contain">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-menu router :default-active="$route.path" :collapse="isCollapse">
        <template v-for="(item,i) in navsList" :key="i">
          <el-sub-menu :index="item.key" popper-append-to-body>
            <template #title>
              <el-icon>
                <i :class="item.icon" ></i>
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
              { key: '/3D_text', title: 'Neon Effect 3D TEXT' },
              { key: '/neon_atmosphere', title: 'box-shadow实现霓虹氖灯文字效果' },
              { key: '/long_linear_shadow', title: '线性渐变模拟长阴影' },
              { key: '/3D_shadow', title: '立体投影' },
              { key: '/stripe_shadow_text', title: '线性渐变配合阴影实现条纹立体阴影条纹字' },
              { key: '/3D_text_shadow', title: '立体文字阴影' },
              { key: '/cameo_btn', title: '浮雕风格按钮' },
              { key: '/bg_animate_1', title: 'box-shadow实现背景动画1' },
              { key: '/bg_animate_2', title: 'box-shadow实现背景动画2' },
              { key: '/tiktok_logo', title: '单标签实现抖音LOGO' },
              { key: '/IE_logo', title: 'box-单标签借助 inset shadow 实现IE LOGO' },
            ]
          },
          {
            key: 'MagazineLayout-1',
            icon: "fa fa-paint-brush",
            subNavs: new Array(10).fill(0).map((e,i)=>{
              let index = i.toString().padStart(2,'0');
              return {
                key: '/layout0' + index,
                title: 'Layout0' + index
              }
            })
          },
          {
            key: 'MagazineLayout-2',
            icon: "fa fa-paw",
            subNavs: new Array(10).fill(0).map((e,i)=>{
              let index = (i+10).toString();
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
              {key: '/christmas-tree',title: 'christmas-tree'},
              {key: '/text-gradient',title: 'text-gradient'},
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

  .el-menu-item.is-active{
    color: $theme-color;
    border-left: 4px solid $theme-color;
  }

  .el-menu:not(.el-menu--collapse) {
    text-align: left;
  }

  ul[role="menubar"].el-menu {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 350px;
    min-width: 350px;
  }
  ul[role="menubar"].el-menu.el-menu--collapse{
    width: 64px;
    min-width: 64px;
    overflow-y: hidden;
  }
  /* 滚动条整体部分 */
  ul[role="menubar"].el-menu::-webkit-scrollbar{
    background: azure;
    width: 6px;
  }

  /* 外层轨道 */
  ul[role="menubar"].el-menu::-webkit-scrollbar-track{
    
  }

  /* 内层滚动槽 */
  ul[role="menubar"].el-menu::-webkit-scrollbar-track-piece{
    background: #ececf5;
  }

  /* 滚动的滑块 */
  ul[role="menubar"].el-menu::-webkit-scrollbar-thumb{
    background: $theme-color;
    border-radius: 10px;
  }

  /* 边角 */
  ul[role="menubar"].el-menu::-webkit-scrollbar-corner{

  }
</style>