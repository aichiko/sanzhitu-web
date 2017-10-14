<template>
  <div class="main">
    <div class="header-container clearfix">
      <a class="header-logo" href="home">
        <img :src="logoicon" alt="logo">
      </a>
    </div>
    <div class="main-body">
      <el-form label-position="top" label-width="80px" :rules="rules" :model="loginData">
        <el-form-item label="用户名" class="input-item" prop="username">
          <el-input v-model="loginData.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" class="input-item" prop="password">
          <el-input v-model="loginData.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item class="submit-item">
          <el-button type="primary" @click="submitForm" class="submit-button" :loading="isLoading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {users} from '../../config/users.js'

export default {
  data () {
    return {
      logoicon: '/static/szt_logo.png',
      isLoading: false,
      users: users,
      loginData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不可为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm: function () {
      console.log('sign in to sanztu!!!')
      this.isLoading = true
      var that = this
      var succuss = this.authentication(this.loginData.username, this.loginData.password)
      setTimeout(function () {
        that.isLoading = false
        if (succuss) {
          that.$router.push({path: `/user/${that.loginData.username}`})
        } else {
          that.$alert('用户名或密码不正确！', '提示', {
            confirmButtonText: '确定',
            callback: action => {
            }
          })
        }
      }, 1000)
    },
    authentication: function (username, password) {
      var succuss = false
      for (var key in this.users) {
        var user = users[key]
        if (user.username === username && user.password === password) {
          succuss = true
          return true
        } else {
          succuss = false
        }
      }
      return succuss
    }
  }
}
</script>

<style lang="less">

html,body{
  width: 100%;
  background-color: #f9f9f9;
  min-width: 1200px;
}
.main {
  background-color: #f9f9f9;
  height: 100%;
  box-sizing: border-box;
  .header-container {
    padding-top: 32px;
    padding-bottom: 24px;
    width: 100% !important
  }
}
.main-body {
  width: 340px;
  margin: 0 auto;
  .input-item {
    position: relative;
  }
  .submit-item {
    .submit-button{
      width: 100%;
      margin-left: 0
    }
  }
}

</style>
