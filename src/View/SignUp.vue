<template>
    <form @submit="handleSignUp">
        <h1 class="form-title">Criar minha conta</h1>
        <h2 class="form-alert done-alert" v-if="done">Cadastro concluído!</h2>
        <h2 class="form-alert false-alert" v-if="signUpError">Problema ao cadastrar :/</h2>
        <div class="form-group">
            <label for="" class=""></label>
            <input type="text" class="txt-input" v-model="txtName" id="txt-name" placeholder="Nome" />
        </div>
        <div class="form-group">
            <label for="" class=""></label>
            <input type="text" class="txt-input" v-model="txtSname" id="txt-sname" placeholder="Sobrenome" />
        </div>
        <div class="form-group">
            <label for="" class=""></label>
            <input type="text" class="txt-input" v-model="txtEmail" id="txt-email" placeholder="E-mail" />
        </div>
        <div class="form-group">
            <label for="" class=""></label>
            <input type="text" class="txt-input" v-model="txtUser" id="txt-user" placeholder="Usuário" />
        </div>
        <div class="form-group">
            <label for="" class=""></label>
            <input type="password" class="txt-input" v-model="txtPass" id="txt-pass" placeholder="Senha" />
        </div>
        <button class="btn-form">Cadastrar</button>
        <span class="form-span" @click="openLoginForm">
            Já possuo minha conta
        </span>
    </form>
</template>

<script>
export default{
    name: 'SignUp',
    data() {
        return {
            txtName: '',
            txtSname: '',
            txtEmail: '',
            txtUser: '',
            txtPass: '',
            done: false,
            signUpError: false,
        }
    },
    methods: {
        openLoginForm: function(){
            this.$emit('openLoginForm')
        },

        handleSignUp: function() {
            if((this.txtName !== null
                && this.txtSname !== null
                && this.txtEmail !== null
                && this.txtUser !== null
                && this.txtPass !== null)
                
                &&
                
                (this.txtName !== ''
                && this.txtSname !== ''
                && this.txtEmail !== ''
                && this.txtUser !== ''
                && this.txtPass !== '')) {
                    fetch("https://localhost:5001/api/Account/v1/Accounts/Create", {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            firstName: this.txtName,
                            lastName: this.txtSname,
                            email: this.txtEmail,
                            username: this.txtUser,
                            password: this.txtPass,
                            confirmPassword: this.txtPass
                        })
                    })
                    .then((res) => {
                        if(res.status == 200){
                            this.done = true
                            setTimeout(() => {
                                this.done = false

                                this.txtName = ''
                                this.txtSname = ''
                                this.txtEmail = ''
                                this.txtUser = ''
                                this.txtPass = ''

                                this.$emit('openLoginForm')

                            }, 3000);
                        }
                    })
                } else {
                    this.signUpError = true
                    setTimeout(() => {
                        this.signUpError = false
                    }, 5000);
                }
        }
    },
    created(){
        
    }
}
</script>

<style scoped>
</style>
