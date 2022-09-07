<template>
    <div>
        <div class="flex justify-between">
            <h1 class="text-3xl">Diskusi (8)</h1>
            <button class="btn btn-primary">Tambah Diskusi</button>
        </div>
        <div class="divider"></div>
        <div class="flex flex-col gap-6 mt-4">
            <div class="flex flex-col gap-3">
                <div class="flex gap-2">
                    <div class="avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <input type="text" placeholder="Judul" class="input input-bordered w-full" />
                </div>
                <textarea class="textarea textarea-bordered"></textarea>
                <button class="btn btn-primary">Kirim</button>
                <div class="divider"></div>
            </div>
            <div class="flex gap-2">
                <div class="flex flex-col items-center gap-2">
                    <svg width="28" height="28" viewBox="0 0 24 24">
                        <g fill="currentColor">
                            <path d="m14.829 14.828l1.414-1.414L12 9.172l-4.243 4.242l1.415 1.415L12 12l2.829 2.828Z" />
                            <path
                                fill-rule="evenodd"
                                d="M1 19a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14Zm4 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
                                clip-rule="evenodd"
                            />
                        </g>
                    </svg>
                    <span class="text-xl">298</span>
                    <svg width="28" height="28" viewBox="0 0 24 24">
                        <g fill="currentColor">
                            <path d="m7.757 10.586l1.415-1.414L12 12l2.828-2.828l1.415 1.414L12 14.828l-4.243-4.242Z" />
                            <path
                                fill-rule="evenodd"
                                d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5Zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                                clip-rule="evenodd"
                            />
                        </g>
                    </svg>
                </div>
                <div>
                    <h3 class="text-xl font-bold">Bagaimana cara melakukan splice pada array</h3>
                    <p class="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto, fugiat exercitationem omnis modi
                        alias ad suscipit consequatur ipsam eveniet.
                    </p>
                    <div class="flex justify-between items-center mt-4">
                        <div class="flex items-center">
                            <button class="btn btn-ghost">Balas</button>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <p class="text-lg font-bold">Falestio Hanif -</p>
                            <p class="text-lg">4 hari yang lalu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>