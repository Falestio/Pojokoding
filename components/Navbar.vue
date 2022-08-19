
<template>
    <div>
        <div class="navbar h-[7vh] border-b-2 border-gray-100 px-4">
            <div class="flex-1">
                <a class="text-3xl font-bold">Pojokoding</a>
            </div>

            <div class="flex-none">
                <ToggleTheme></ToggleTheme>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <!-- <IcRoundSettings class="text-lg"></IcRoundSettings> -->
                        </div>
                    </label>
                    <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div class="card-body">
                            <span class="font-bold text-lg">8 Items</span>
                            <span class="text-info">Subtotal: $999</span>
                            <div class="card-actions">
                                <button class="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>