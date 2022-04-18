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
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '~/plugins/firebase.js'

export default {
    data() {
        return {
            email: '',
            password: '',
            fullname: '',
        }
    },

    methods: {
        register() {
            createUserWithEmailAndPassword(
                auth,
                this.email,
                this.password
            )
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log(user);
                    alert("Success")
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.log(errorCode, errorMessage)
                })
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