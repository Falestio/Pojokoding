<script setup>
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: can we use v-if?
let showOptions = ref(false);
let showEmailAndPassword = ref(true);

const toggleForm = () => {
    showOptions.value = !showOptions.value;
    showEmailAndPassword.value = !showEmailAndPassword.value;
};

const { $auth } = useNuxtApp();
const router = useRouter();
let currentUser = useCurrentUser();

let username = ref(null);
let email = ref(null);
let password = ref(null);

const registerUser = () => {
    console.log($auth);
    createUserWithEmailAndPassword($auth, email.value, password.value)
        .then((userCredential) => {
            currentUser.value = userCredential;
            console.log("Register success", userCredential);
            router.push({ path: "/dashboard" });
        })
        .catch((err) => {
            console.log(err);
        });
};

const provider = new GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/userinfo.email");
provider.addScope("https://www.googleapis.com/auth/userinfo.profile");

const registerUserGoogle = () => {
    signInWithPopup($auth, provider)
        .then((result) => {
            // This token used if we want to fetch aditional data using the Google API
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            currentUser.value = result.user;
            router.push({path:'/dashboard'})
        })
        .catch(() => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
};
</script>

<template>
    <div class="h-screen">
        <div class="h-full w-full flex flex-col items-center p-16">
            <div class="card w-96 border rounded" :class="{ hidden: showOptions }">
                <div class="card-header mb-2 border-b border-gray-400 bg-slate-800 p-4">
                    <h2 class="text-xl font-bold">Daftar akun baru</h2>
                </div>

                <div class="card-body">
                    <button class="btn btn-primary btn-outline gap-2" @click="registerUserGoogle()">Google <i class="bx bxl-google"></i></button>
                    <button class="btn btn-primary btn-outline gap-2">Facebook <i class="bx bxl-facebook-square"></i></button>
                    <button @click="toggleForm()" class="btn btn-primary btn-outline gap-2">
                        Email & Password <i class="bx bxs-key"></i>
                    </button>
                </div>
            </div>

            <div class="card w-96 border rounded" :class="{ hidden: showEmailAndPassword }">
                <div class="card-header mb-2 border-b border-gray-400 bg-slate-800 p-4 gap-2">
                    <div class="flex justify-center gap-2">
                        <button @click="toggleForm()" class="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                class="iconify iconify--mdi"
                                width="32"
                                height="32"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"></path>
                            </svg>
                        </button>
                        <h2 class="text-xl font-bold">Daftar Menggunakan Email dan Password</h2>
                    </div>
                </div>

                <div class="card-body">
                    <div class="flex flex-col gap-6">
                        <input
                            v-model="username"
                            type="text"
                            placeholder="Nama tampilan"
                            class="input input-lg input-bordered w-full max-w-xs"
                        />
                        <input v-model="email" type="text" placeholder="Email" class="input input-lg input-bordered w-full max-w-xs" />
                        <input
                            v-model="password"
                            type="text"
                            placeholder="Password"
                            class="input input-lg input-bordered w-full max-w-xs"
                        />
                        <button class="btn btn-primary" @click="registerUser()">Daftar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>