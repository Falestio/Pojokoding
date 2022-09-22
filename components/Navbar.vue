<script setup>
    import { signOut } from 'firebase/auth'
    const { $auth } = useNuxtApp()

    const handleLogout = () => {
        signOut($auth)
            .then(() => console.log("Logout Success"))
            .catch((err) => console.log(err))
    }
</script>

<template>
    <div>
        <div class="navbar h-[7vh] border-b-2 border-gray-100 px-4">
            <div class="flex-1">
                <NuxtLink to="/" class="text-3xl font-bold">Pojokoding</NuxtLink>

            </div>

            <div class="flex-none flex gap-4">
                <ToggleTheme></ToggleTheme>
                <NuxtLink to="/beli" class="text-xl">Beli</NuxtLink>
                <NuxtLink to="/masuk" class="text-xl">Masuk</NuxtLink>
                <NuxtLink to="/daftar" class="text-xl">Daftar</NuxtLink>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full bg-gray-100">
                            <img
                                src="https://avatars.dicebear.com/api/croodles/tio.svg"
                            />
                        </div>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li @click="handleLogout()"><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>