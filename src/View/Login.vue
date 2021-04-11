<template>
    <form @submit="handleLogin">
        <h1 class="form-title">Acessar minha conta</h1>
        <h2 class="form-alert false-alert" v-if="loginError">Login/senha incorreta</h2>
        <div class="form-group">
            <label for="" class=""></label>
            <input type="email" class="txt-input" v-model="txtEmail" id="txt-email" placeholder="E-mail" />
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
            txtEmail: '',
            txtPass: '',
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
            if((this.txtEmail !== null && this.txtPass !== null)
                &&
                (this.txtEmail !== '' && this.txtPass !== '')) {
                this.$router.push({ path: 'Dashboard' })
            } else {
                this.loginError = true,
                setTimeout(() => {
                    this.loginError = false
                }, 3000)
            }
        }
    }
}
</script>

<style scoped>
</style>
