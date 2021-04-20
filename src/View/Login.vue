<template>
    <form @submit="handleLogin">
        <h1 class="form-title">Acessar minha conta</h1>
        <h2 class="form-alert false-alert" v-if="loginError">{{errorMessage}}</h2>
        <div class="form-group">
            <label for="" class=""></label>
            <input type="text" class="txt-input" v-model="txtUser" id="txt-user" placeholder="Usuário" />
        </div>
        <div class="form-group">
            <label for="" class=""></label>
            <input type="password" class="txt-input" v-model="txtPass" id="txt-pass" placeholder="Senha" />
        </div>
        <button class="btn-form">Acessar</button>
        <span class="form-span" @click="openPassRecoveryForm">
            Recuperar senha
        </span>
        <span class="form-span" @click="openSignUpForm">
            Criar minha conta
        </span>
    </form>
</template>

<script>
export default{
    name: 'Login',
    data(){
        return {
            txtUser: '',
            txtPass: '',
            errorMessage: '',
            loginError: false,
        }
    },
    methods: {
        openSignUpForm: function(){
            this.$emit('openSignUpForm')
        },
        openPassRecoveryForm: function(){
            this.$emit('openPassRecoveryForm')
        },

        handleLogin: function(e){
            e.preventDefault();
            if((this.txtUser !== null && this.txtPass !== null)
                &&
                (this.txtUser !== '' && this.txtPass !== '')) {
                    fetch("https://localhost:5001/api/Account/v1/Accounts/Login", {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: this.txtUser,
                            password: this.txtPass,
                        })
                    })
                    .then((res) => {
                        if(res.status !== 200){
                            throw 'Usuário/senha incorretos'
                        }
                        console.log(res)
                        // this.$router.push({ path: 'Dashboard' })
                    })
                    .catch((err) => {
                        this.errorMessage = err
                        this.loginError = true,
                        setTimeout(() => {
                            this.loginError = false
                        }, 3000)
                    })
            } else {
                this.errorMessage = 'Preencha os campos'
                this.loginError = true,
                setTimeout(() => {
                    this.loginError = false
                }, 3000)
            }
        }
    },
    created(){
        document.title = 'Rentering | Login'
    }
}
</script>

<style scoped>
</style>
