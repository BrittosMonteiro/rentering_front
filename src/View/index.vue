<template>
    <div class="container">
        <Login @openSignUpForm="signUpForm" @openPassRecoveryForm="passRecoveryForm" v-if="login"/>
        <SignUp @openLoginForm="loginForm" v-if="signup"/>
        <PassRecovery @openLoginForm="loginForm" v-if="passRecovery"/>
    </div>
</template>

<script>
import Login from '@/View/Login'
import SignUp from '@/View/SignUp'
import PassRecovery from '@/View/PassRecovery'

export default{
    name: 'index',
    components: {
        Login,
        SignUp,
        PassRecovery
    },
    data(){
        return{
            enableOption: true,
            login: false,
            signup: false,
            passRecovery: false,
        }
    },
    methods:{
        loginForm: function() {
            this.enableOption = false
            this.login = true
            this.signup = false
            this.passRecovery = false
        },
        signUpForm: function() {
            this.enableOption = false
            this.login = false
            this.signup = true
            this.passRecovery = false
        },
        passRecoveryForm: function() {
            this.enableOption = false
            this.login = false
            this.signup = false
            this.passRecovery = true
        },
    },
    created(){
        this.login = true
    }
}
</script>

<style>
.container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #f7ecdf;
}
form{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    padding: 15px 15px;
    border-radius: 2px;
    box-shadow: 0 0 0.5em #050b2b;
    background-color: #356d65;
}
.form-title{
    color: #eee;
    font-size: 22px;
    margin: 0 0 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form-alert{
    display: flex;
    font-size: 16px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    border-radius: 2px;
}
.false-alert{
    background-color: #ff8181;
    color: #ff1f1f;
}
.done-alert{
    background-color: #63ff63;
    color: #00b100;
}
.form-group{
    display: flex;
    width: 100%;
    margin: 5px 0;
}
.txt-input{
    padding: 10px;
    width: 100%;
    border-radius: 2px;
    font-size: 14px;
    background-color: #f1cbb5;
    font-weight: 600;
    color: #303030;
    transition: all 0.4s;
}
.txt-input::placeholder{
    color: #555;
}
.form-span{
    color: #eee;
    font-size: 14px;
    margin: 10px 0 0 0;
    display: flex;
    cursor: pointer;
}
.btn-form{
    padding: 5px;
    border-radius: 2px;
    background-color: var(--orange);
    color: #eee;
    margin: 5px 0 0 0;
    font-size: 16px;
    font-weight: 600;
}
</style>