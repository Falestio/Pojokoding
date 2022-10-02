<template>
    <div class="flex flex-col gap-8 w-[650px]">
        <div>
            <h2 class="text-2xl font-bold">Komentar (2)</h2>
        </div>

        <div class="bg-base-300 p-3 rounded flex flex-col gap-4">
            <textarea class="textarea w-full" placeholder="Tambah Komentar"></textarea>
            <button class="btn btn-primary self-end">Tambah Komentar</button>
        </div>

        <div class="border-b">
            <div class="flex flex-col gap-3 pb-3">
                <div class="flex justify-between items-center">
                    <div class="flex gap-4 items-center">
                        <div class="avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <p class="text-lg font-bold">Andrey</p>
                    </div>
                    <div class="btn btn-ghost btn-sm btn-circle">
                        <svg width="32" height="32" viewBox="0 0 256 256">
                            <path
                                fill="currentColor"
                                d="M80 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm112-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm-64 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z"
                            />
                        </svg>
                    </div>
                </div>
                <div>
                    <p class="text-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ad culpa ipsam iure praesentium iste nostrum minus
                        fugit voluptas. Ad!
                    </p>
                </div>
                <div class="flex gap-1">
                    <div class="flex items-center gap-1">
                        <div class="btn btn-sm btn-ghost btn-circle">
                            <svg width="26" height="26" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10zm-1-10v4h2v-4h3l-4-4l-4 4h3z"
                                />
                            </svg>
                        </div>
                        <p class="tecxt-lg font-bold">22</p>
                    </div>
                    <div class="divider divider-horizontal"></div>
                </div>
            </div>

            <div class="pl-12 flex flex-col">
                <div class="flex flex-col gap-3 pb-3">
                    <div class="flex justify-between items-center">
                        <div class="flex gap-4 items-center">
                            <div class="avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://placeimg.com/192/182/people" />
                                </div>
                            </div>
                            <p class="text-lg font-bold">Reynor</p>
                        </div>
                        <div class="btn btn-ghost btn-sm btn-circle">
                            <svg width="32" height="32" viewBox="0 0 256 256">
                                <path
                                    fill="currentColor"
                                    d="M80 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm112-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm-64 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p class="text-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ad culpa ipsam iure praesentium iste nostrum minus
                            fugit voluptas. Ad!
                        </p>
                    </div>
                    <div class="flex gap-1">
                        <div class="flex items-center gap-1">
                            <div class="btn btn-sm btn-ghost btn-circle">
                                <svg width="26" height="26" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10zm-1-10v4h2v-4h3l-4-4l-4 4h3z"
                                    />
                                </svg>
                            </div>
                            <p class="tecxt-lg font-bold">22</p>
                        </div>
                        <div class="divider divider-horizontal"></div>
                    </div>
                </div>
                <div class="bg-base-300 p-3 rounded flex flex-col gap-4">
                    <textarea class="textarea w-full" placeholder="Tambah Balasan"></textarea>
                    <button class="btn btn-primary self-end">Tambah Balasan</button>
                </div>
            </div>

        </div>
    </div>
</template>