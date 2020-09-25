<template>
  <div class="login">
    <section class="login-box">
      <h3 class="title">
        vue3管理后台
      </h3>
      <section class="flex-row align-center mb20">
        <label for="username">用户名：</label>
        <input v-model="phoneData"
               type="text"
               auto-complete="off"
               placeholder="账号">
      </section>
      <section class="flex-row align-center">
        <label for="password">密码：</label>
        <input
          v-model="passData"
          type="password"
          placeholder="密码"
          @click="handleLogin">
      </section>
      <button class="btn default-btn mtb20"
              @click="startLogin">
        登录
      </button>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  setup () {
    const router = useRouter();
    const store = useStore();
    const phoneData = ref('');
    const passData = ref('');
    const startLogin = async () => {
      if (!phoneData.value) {
        alert('用户名不能为空');
        return;
      }
      if (passData.value.length < 5) {
        alert('密码不少于5位');
        return;
      }
      const data = { userName: phoneData.value, password: passData.value };
      console.log(data);
      await store.dispatch('user/Login', data);
      router.replace('home');
    };
    return {
      phoneData,
      passData,
      startLogin
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url('../assets/images/bg.jpg');
  background-size: cover;
}
.title {
    margin: 0 auto 30px auto;
    text-align: center;
    color: #707070;
}
.mb20{
  margin-bottom: 20px;
}
.login-box{
    border-radius: 6px;
    background: #fff;
    width: 400px;
    padding: 25px 25px 5px 25px;
    label{
      width: 20%;
    }
    input{
      -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        flex: 1;
    }
    button{
  width: 100%;
}
}

</style>
