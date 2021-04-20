<template>
    <form @submit="handlePassRecovery">
        <h1 class="form-title">Recuperar senha</h1>
        <h2 class="form-alert done-alert" v-if="done">Verifique seu e-mail</h2>
        <h2 class="form-alert false-alert" v-if="recoveryError">E-mail incorreto :/</h2>
        <div class="form-group">
            <label for="" class=""></label>
            <input type="text" class="txt-input" v-model="txtEmail" id="txt-user" placeholder="Usuário" />
        </div>
        <button class="btn-form">Recuperar</button>
        <span class="form-span" @click="openLoginForm">
            Acessar minha conta
        </span>
    </form>
</template>

<script>
export default{
    name: 'PassRecovery',
    data(){
        return {
            txtEmail: '',
            done: false,
            recoveryError: false,
        }
    },
    methods: {
        openLoginForm: function() {
            this.$emit('openLoginForm')
        },

        handlePassRecovery: function() {
            if(this.txtEmail !== null && this.txtEmail !== '') {
                this.done = true
                setTimeout(() => {
                    this.done = false

                    this.txtEmail = ''

                    this.$emit('openLoginForm')
                }, 3000);
            } else {
                this.recoveryError = true
                setTimeout(() => {
                    this.recoveryError = false
                }, 3000);
            }
        }
    },
    created(){
        document.title = 'Rentering | Recuperar senha'
    }
}
</script>

<style scoped>
</style>
