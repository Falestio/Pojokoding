<template>
    <div data-theme="night">
        <div class="navbar bg-slate-800">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl normal-case">Pojokoding</a>
            </div>
            <div class="flex-none gap-2">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered" />
                </div>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="flex min-h-screen w-full flex-wrap gap-8 p-4">
            <p class="my-8 text-6xl font-bold">Koleksi UI Pojokoding</p>
            <div class="flex flex-wrap gap-4 rounded border-2 p-2">
                <button class="btn">Hello guys</button>
                <button class="btn btn-primary">Hello guys</button>
                <button class="btn btn-secondary">Hello guys</button>
                <button class="btn btn-accent">Hello guys</button>
                <button class="btn btn-primary btn-outline">Hello guys</button>
                <button class="btn btn-secondary btn-outline">Hello guys</button>
                <button class="btn btn-accent btn-outline">Hello guys</button>
                <button class="btn btn-ghost">hello guys</button>
                <button class="btn btn-link">hello guys</button>
            </div>

            <div class="card btn-animation w-96 cursor-cell border-2 shadow-xl">
                <figure class="rounded">
                    <img class="rounded" src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <h2 class="card-title">
                    Shoes!
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                </div>
            </div>

            <div class="card flex w-96 -flex-col gap-4 border-2">
                <div class="card-body">
                    <p class="text-xl font-bold">Publik</p>
                    <h2 class="text-4xl font-bold">Gratiss</h2>
                    <p class="text-lg">
                        Lorem ipsum dolor sit ame dolore ratione! Sequi molestias itaque distinctio similique asperiores aspernatur ipsum
                        soluta esse!
                    </p>
                    <ul class="flex-col flex gap-4 text-lg">
                        <li>
                            <i class="bx bx-check-square"></i>
                            Fitur satu
                        </li>
                        <li>
                            <i class="bx bx-check-square"></i>
                            Fitur yang sangat berguna
                        </li>
                        <li>
                            <i class="bx bx-check-square"></i>
                            Fitur yang cukup berguna
                        </li>
                        <li>
                            <i class="bx bx-check-square"></i>
                            Fitur yang baik
                        </li>
                        <li>
                            <i class="bx bx-check-square"></i>
                            bayar
                        </li>
                    </ul>
                    <button class="btn btn-primary">Beli</button>
                </div>
            </div>

            <div class="card flex w-96 -flex-col gap-4 border-2">
                <div class="card-body">
                    <p class="text-xl font-bold">Javascript</p>
                    <h2 class="text-4xl font-bold">Rp100.000</h2>
                    <p class="text-lg">
                        Lorem ipsum dolor sit ame dolore ratione! Sequi molestias itaque distinctio similique asperiores aspernatur ipsum
                        soluta esse!
                    </p>
                    <ul class="flex-col flex gap-4 text-lg">
                        <li>
                            <i class="bx bx-check-square"></i>
                            Fitur satu
                        </li>
                        <li>
                            <i class="bx bx-check-square"></i>
                            Fitur yang sangat berguna
                        </li>
                        <li>
                            <i class="bx bx-check-square"></i>
                            Fitur yang cukup berguna
                        </li>
                        <li>
                            <i class="bx bx-check-square"></i>
                            Fitur yang baik
                        </li>
                        <li>
                            <i class="bx bx-check-square"></i>
                            bayar
                        </li>
                    </ul>
                    <button class="btn btn-primary">Beli</button>
                </div>
            </div>

            <div class="card w-96 border-2">
                <div class="card-header mb-2 border-b-2 bg-slate-800 p-4">
                    <h2 class="text-xl font-bold">Daftar</h2>
                </div>

                <div class="card-body">
                    <button class="btn btn-primary btn-outline gap-2">Google <i class="bx bxl-google"></i></button>
                    <button class="btn btn-primary btn-outline gap-2">Facebook <i class="bx bxl-facebook-square"></i></button>
                    <button class="btn btn-primary btn-outline gap-2">Email & Password <i class="bx bxs-key"></i></button>
                    <p>
                        Dengan membuat akun di Pojokoding anda setuju dengan
                        <a href="#" class="link">Syarat dan Ketentuan</a> kami
                    </p>
                </div>
            </div>

            <div class="card w-96 border-2">
                <div class="card-header mb-2 border-b-2 bg-slate-800 p-4">
                    <h2 class="text-xl font-bold">Daftar dengan Email dan Password</h2>
                </div>

                <div class="card-body">
                    <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                    <p class="btn btn-link">Lupa password</p>
                    <button class="btn btn-primary">Daftar</button>
                    <p class="link">Sudah punya akun?</p>
                </div>
            </div>

            <div class="card w-96 border-2">
                <div class="card-header mb-2 border-b-2 bg-slate-800 p-4">
                    <h2 class="text-xl font-bold">Login</h2>
                </div>

                <div class="card-body">
                    <button class="btn btn-primary btn-outline gap-2">Google <i class="bx bxl-google"></i></button>
                    <button class="btn btn-primary btn-outline gap-2">Facebook <i class="bx bxl-facebook-square"></i></button>
                    <button class="btn btn-primary btn-outline gap-2">Email & Password <i class="bx bxs-key"></i></button>
                    <p></p>
                </div>
            </div>

            <IdeRequirements></IdeRequirements>
        </div>
    </div>
</template>