<template>
  <div class="header-container">
    <div class="header-top" :class="{open: isOpenMenu}">
      <div class="header-wrapper">
        <div class="logo">
          <h1>
            <nuxt-link to="/">
              <img src="../../assets/img/logo.png" alt="">
            </nuxt-link>
          </h1>
        </div>
        <nav class="nav-wrapper">
          <ul>
            <li v-for="(item, index) in navigation" :key="index" v-if="item.show">
              <nuxt-link :to="item.path">{{item.name}}</nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="app-d" v-if="!userInfo">
          <button class="login-register" @click="userProfile">登录 / 注册</button>
        </div>
        <div class="user-info" v-else>
          <span class="iconfont icon-people_fill"></span>
          <span class="nickname">{{userInfo.nickname}}</span>
        </div>
      </div>
    </div>
    <blog-dialog v-model="dialogVisible">
      <login  @close="dialogVisible = false" />
    </blog-dialog>
  </div>
</template>

<script>
  import BlogDialog from '../dialog'
  import Login from '../login'
  import { mapState } from 'vuex'
  export default {
    name: "HeaderTop",
    data() {
      return {
        appNav: [
          {name: '主页', path: '/', show: true},
          {name: '技术栈', path: '/', show: true},
          {name: '音乐馆', path: '/music', show: true},
        ],
        navigation: [
          {name: '首页', path: '/', show: true},
          {name: '话题', path: '/', show: true},
        ],
        searchValue: '',
        dialogVisible: false,
      }
    },
    props: {
      isOpenMenu: {
        type: Boolean,
        default: false
      },
      isFixed: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      })
    },
    components: {
      BlogDialog,
      Login
    },
    created() {
    },
    methods: {
      searchSubmit(e) {

      },
      openMenu() {
        this.$emit('open-menu')
      },
      userProfile() {
        this.dialogVisible = true
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "header-top";
</style>
