<template>
    <div class="EditPassword">
        <h1>修改密码</h1>
        <div class="edit-container">
            <div class="form-group">
                <i class="icon tel-icon"></i>
                <input type="number" placeholder="输入手机号" v-model="phone">
            </div>
            <div class="form-group">
                <i class="icon verify-icon"></i>
                <input type="text" placeholder="输入验证码" v-model="verifyCode">
                <button class="verifyCode" :disabled="disabled" @click="getVerifyCode()">{{verifyText}}</button>
            </div>
            <div class="form-group">
                <i class="icon password-icon"></i>
                <input type="password" placeholder="输入密码" v-model="password" >
            </div>
            <div class="form-group">
                <i class="icon password-icon"></i>
                <input type="password" placeholder="再次输入密码" v-model="password2" >
            </div>

            <div class="btn" @click="confirmClick()">确定</div>

            <div class="jump-link">
                <router-link to="/Login">登录</router-link>
                <router-link to="/Register">注册账号</router-link>
            </div>
            
        </div>
       
    </div>
</template>

<script>
export default {
    name:'EditPassword',
    data(){
        return{
            phone:'',//手机号
            verifyCode:'',//验证码
            disabled:false,
            verifyText:'获取验证码',
            password:'',//密码
            password2:'',//重复密码
        }
    },
    methods:{
        /**
         * 获取验证码
         */
        getVerifyCode(){
            if(this.validatePhone()){
                // 发送网络请求
                this.countDown();
            }
        },
       
        /**
         * 校验手机号
         */
        validatePhone(){
            if(!this.phone){
                this.$toast('手机号码不能为空')
                return false;
            }else if(!/^1[345678]\d{9}$/.test(this.phone)){
                this.$toast('请填写正确的手机号码')
                return false;
            }else{
                return true;
            }
        },

        /**
         * 倒计时效果
         */
        countDown(){
            var count = 60;
            var timer = setInterval( () => {
                if(count == 0){
                    clearInterval(timer);
                    this.verifyText = "重新获取";
                    this.disabled = false;
                }
                else if(count < 10){
                    count = "0" + count;
                    this.verifyText =  count + "秒后重试";
                    this.disabled = true;
                    count -- ;
                }
                else{
                    //倒计时
                    this.verifyText = count + "秒后重试";
                    this.disabled = true;
                    count -- ;
                }
            },1000);
        },

        /**
         * 校验注册
         */
        confirmClick(){
            if(this.phone == ''){
                this.$toast('手机号码不能为空')
                return false
            }else if(!/^1[345678]\d{9}$/.test(this.phone)){
                this.$toast('请填写正确的手机号码')
                return false
            }else if(this.verifyCode == ''){
                this.$toast('验证码不能为空')
                return false
            }else if(this.password == ''){
                this.$toast('密码不能为空')
                return false
            }else if(!/^[a-z0-9_-]{6,18}$/.test(this.password)){
                this.$toast('密码长度为6-18位')
                return false
            }else if(this.password != this.password2){
                this.$toast('两次密码不一致')
                return false
            }else{
                // 请求数据
                this.$toast('校验成功，请求接口数据再次验证')
            }

        }

    }

}
</script>

<style lang="stylus" scoped>
.EditPassword
    width 100%
    min-height 100vh
    background-color #ffffff
    h1
        height 208px
        line-height 208px
        text-align center
        font-weight normal
        font-size 36px
    .edit-container
        padding 0 24px
        box-sizing border-box
        .form-group
            width 100%
            height 90px
            border-bottom 1px solid #f56817
            display flex
            align-items center
            .icon
                width 56px
                height 100%
                display inline-block
                margin-right 20px
            .tel-icon
                background url(/static/images/login/tel-icon.png) no-repeat center center
                background-size 20px 30px
            .password-icon
                background url(/static/images/login/password-icon.png) no-repeat center center
                background-size 24px 28px
            .verify-icon
                background url(/static/images/login/verifyCode-icon.png) no-repeat center center
                background-size 14px 30px
            input 
                height 50px
                flex 1
                font-size 26px
            .verifyCode
                height 90px
                line-height 90px
                font-size 30px
                color #f4550b  
                padding 0 24px
                box-sizing border-box 
                background none
                border none
        .btn
            width 100%
            height 88px
            text-align center
            line-height 88px
            border-radius 40px
            font-size 36px
            color #ffffff
            background linear-gradient(to right, #f9a775,#fb946a)
            margin-top 88px
        .jump-link
            width 100%
            font-size 28px
            margin-top 20px
            padding 0 38px
            box-sizing border-box
            display flex
            justify-content space-between
            a
                color #fa9f71
        

</style>
