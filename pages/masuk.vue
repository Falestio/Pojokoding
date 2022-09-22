<script setup>
import { signInWithEmailAndPassword } from 'firebase/auth'

// TODO: can we use v-if?
let showOptions = ref(false)
let showEmailAndPassword = ref(true)

const toggleForm = () => {
    showOptions.value = !showOptions.value
    showEmailAndPassword.value = !showEmailAndPassword.value
}

const { $auth } = useNuxtApp() 
const router = useRouter()
const currentUser = useCurrentUser()

let email = ref(null)
let password = ref(null) 

const loginUser = () => {
    signInWithEmailAndPassword($auth, email.value, password.value)
        .then((userCredential) => {
            currentUser.value = userCredential
            console.log("Login Success",userCredential)
            router.push({ path:"/dashboard" })
        })
        .catch((err) => {
            console.log(err);
        })
}

</script>

<template>
    <div class="h-screen">
        <div class="h-full w-full flex flex-col items-center p-16">
            <div class="card w-96 border rounded" :class="{ hidden: showOptions }">
                <div class="card-header mb-2 border-b border-gray-400 bg-slate-800 p-4">
                    <h2 class="text-xl font-bold">Masuk</h2>
                </div>

                <div class="card-body">
                    <button class="btn btn-primary btn-outline gap-2">Google <i class="bx bxl-google"></i></button>
                    <button class="btn btn-primary btn-outline gap-2">Facebook <i class="bx bxl-facebook-square"></i></button>
                    <button @click="toggleForm()" class="btn btn-primary btn-outline gap-2">Email & Password <i class="bx bxs-key"></i></button>
                </div>
            </div>

            <div class="card w-96 border rounded" :class="{ hidden: showEmailAndPassword }">
                <div class="card-header mb-2 border-b border-gray-400 bg-slate-800 p-4 gap-2">
                    <div class="flex justify-center gap-2">
                        <button @click="toggleForm()" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"></path></svg>
                        </button>
                        <h2 class="text-xl font-bold">Masuk dengan email dan password</h2>
                    </div>
                </div>

                <div class="card-body">
                    <div class="flex flex-col gap-6">
                        <input type="text" placeholder="Email" class="input input-lg input-bordered w-full max-w-xs" v-model="email" />
                        <input type="text" placeholder="Password" class="input input-lg input-bordered w-full max-w-xs" v-model="password"/>
                        <div class="flex justify-between">
                            <div class="flex items-center gap-2">
                                <input type="checkbox" class="toggle toggle-sm" />
                                Ingat Saya
                            </div>
                            <NuxtLink class="link">Lupa Password?</NuxtLink>
                        </div>
                        <button class="btn btn-primary" @click="loginUser()">Masuk</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>