<template>
    <div class="register">
        <h1 class="register-title">Daftar Akun</h1>
        <div class="register-form">
            <input type="text" placeholder="Nama lengkap" v-model="fullname" />
            <input type="email" placeholder="Email here" v-model="email" />
            <input
                type="password"
                placeholder="password here"
                v-bind="password"
            />
            <button @click="register()">Daftar</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            fullname: '',
        }
    },

    methods: {
        async register() {
            try {
                console.log(this.email, this.password)
                await this.$fire.auth.createUserWithEmailAndPassword(
                    this.email,
                    this.password
                )
                alert('Success adding account')
            } catch (e) {
                alert(e)
                console.log(e)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.register {
    max-width: 450px;
    margin: 0 auto;
    .register-title {
        @include heading-text-md;
        margin-bottom: 1.5rem;
        text-align: center;
    }
    .register-form {
        display: flex;
        flex-direction: column;
        gap: 1.3rem;
        input {
            @include form;
            @include body-text-md;
        }
        button {
            @include button;
            @include button-full;
            @include button-md;
            @include body-text-md;
            color: black;
        }
    }
}
</style>
</style>