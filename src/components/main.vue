<template>
  <div class="main">
    <el-container class="main-wrap">
        <el-header class="header">
            <h2>展示端界面</h2>
            <div class="user-info">
            <el-dropdown trigger="hover" @command="handleCommand">
                <span class="el-dropdown-link">
                    123
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        </el-header>
        <el-container>
            <el-aside :class="{'onCollapse':isCollapse,'offCollapse':!isCollapse}">
                <el-menu 
                class="el-menu-vertical-demo" 
                @open="handleOpen" 
                @close="handleClose"
                background-color="#484848"
                active-text-color="#009BFF"
                router 
                unique-opened
                :hide-timeout="100"
                :default-active="$route.path"
                :collapse="isCollapse">
                    <el-menu-item index="/main/orderPage">
                        <i class="el-icon-menu"></i>
                        <span slot="title">定制页面</span>
                    </el-menu-item>
                    <el-menu-item index="/main/articleManage">
                        <i class="el-icon-document"></i>
                        <span slot="title">文章管理</span>
                    </el-menu-item>
                </el-menu>
                <div class="toggleMenu" @click="isCollapse=!isCollapse">
                    <div>
                        <i :class="{'el-icon-d-arrow-left':!isCollapse,'el-icon-d-arrow-right':isCollapse}" style="font-size:20px"></i>
                    </div>
                </div>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
        isCollapse: false
    };
  },
  methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleCommand(command) {
          console.log(command)
            this.$confirm('确定退出?', '', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              if (command == 'loginout') {
                this.$router.push('/login');
              }
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消退出'
              });
            })
          }
  }
};
</script>

<style lang="less" scoped>
@nav-color:#484848;
.main {
  height: 100%;
  .main-wrap {
    height: 100%;
    .header {
        background: #000;
        color:white;
    }
    .el-menu-vertical-demo {
        border-right-color: @nav-color;
        background: @nav-color;
        .el-menu-item {
            color:white;
            // border-right-color: @nav-color;
            // &:hover {
            //     background: @nav-color;
            // }
        }
    }
    .toggleMenu {
        width: 100%;
        position: absolute;
        bottom: 0;
        transition:background-color 0.3s;
        color:white;
        &:hover {
            background: rgba(19, 15, 15, 0.678);
        }
        height: 50px;
        > div {
            height: 50px;
            line-height: 50px;
        }
    }
  }
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-dropdown {
    width: 80px;
    transition:background-color 0.2s;
    &:hover {
        background: rgba(70, 69, 69, 0.918);
    }
    span {
        display: inline-block;
        width: 100%;
        height: 100%;
        color:white;
    }
}
.el-header {
    display: flex;
    justify-content: space-between;
}
.onCollapse {
    width:64px !important;
  transition:width .1s ease-in;
  overflow: hidden;
    
}
.offCollapse {
    width:200px !important;
}
.el-aside {
  background-color:@nav-color;
  color: #333;
  text-align: center;
  line-height: 200px;
  position: relative;
//   &:hover {
//       .el-menu-item {
//           background: @nav-color;
//       }
//   }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
