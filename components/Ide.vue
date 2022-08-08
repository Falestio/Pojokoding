<script setup>
//================================================ CODE EDITOR
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import * as base64 from "base-64";
import * as utf8 from "utf8";

const extensions = [javascript(), oneDark];

//================================================ JUDGE0 ABOUT
const aboutOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "148bd21388msh371e4376375abbep1af45djsn1627d694daa9",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
};

const aboutUri = "https://judge0-ce.p.rapidapi.com/about";

let aboutData = ref(null);

async function postAbout() {
    aboutData.value = await useFetch(aboutUri, aboutOptions);
}

//=============================================== JUDGE0 POST SUBMISSION

let code = ref("");
let compiledOutput = ref("");
let response = ref("");

async function compileCode() {
    membukaOutput();

    const encodedCode = base64.encode(utf8.encode(code.value));

    const baseUrl = "https://judge0-ce.p.rapidapi.com/submissions";

    const options = {
        method: "POST",
        params: { base64_encoded: true },
        headers: {
            "content-type": "application/json",
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "148bd21388msh371e4376375abbep1af45djsn1627d694daa9",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
        body: {
            source_code: encodedCode,
            language_id: 63,
        },
    };

    response.value = await useFetch(baseUrl, options);
    const token = response.value.data.token;

    await useTimeout(2000);

    const output = await useFetch(`${baseUrl}/${token}`, {
        headers: {
            "X-RapidAPI-Key": "148bd21388msh371e4376375abbep1af45djsn1627d694daa9",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
    });

    console.log("THIS IS OUTPUT", output);
    compiledOutput.value = output;
}

//================================================= UI
const isVisible = ref(false);
const bukaSoal = ref(true);
const bukaOutput = ref(false);
const bukaSolusi = ref(false);

function membukaOutput() {
    bukaSoal.value = false;
    bukaOutput.value = true;
    bukaSolusi.value = false;
}

function membukaSoal() {
    bukaSoal.value = true;
    bukaOutput.value = false;
    bukaSolusi.value = false;
}

function membukaSolusi() {
    bukaSoal.value = false;
    bukaOutput.value = false;
    bukaSolusi.value = true;
}

const props = defineProps(['allArticleWithTheSameCategory', 'currentContentPath']);

const soal = await queryContent(props.currentContentPath).findOne()

</script>

<template>  
    <div>
        <navbar class="h-[7vh] border-b-1 border-slate-700"></navbar>

        <div id="ide" class="h-[93vh] grid grid-cols-3">
            <div
                class="h-full w-12 hover:w-60 duration-150 ease-in border-r-2 border-slate-700"
                @mouseover="isVisible = true"
                @mouseleave="isVisible = false"
            >
                <p class="font-bold text-xl mx-auto mt-4" :class="{ hidden: isVisible }">>></p>
                <ul class="flex flex-col p-4 gap-2" :class="{ hidden: !isVisible }">
                    <li
                        v-for="artikel in props.allArticleWithTheSameCategory"
                        :key="artikel.title"
                        class="btn btn-primary rounded btn-ghost justify-start"
                    >
                        <template v-if="!artikel.subcategory">
                            <NuxtLink :to="artikel._path">{{ artikel.title }}</NuxtLink>
                        </template>
                        <template v-else>
                            <span class="font-bold text-xl">{{ artikel.title }}</span>
                        </template>
                    </li>
                </ul>
            </div>

            <div class="soal overflow-y-auto">
                <div class="tabs tabs-boxed sticky top-0 rounded-none px-6 py-2 shadow">
                    <a class="tab" :class="{ 'tab-active': bukaSoal }" @click="membukaSoal()">Soal</a>
                    <a class="tab" :class="{ 'tab-active': bukaOutput }" @click="membukaOutput()">Output</a>
                    <a class="tab" :class="{ 'tab-active': bukaSolusi }" @click="membukaSolusi()">Solusi</a>
                </div>

                <div class="p-6 flex flex-col gap-4" :class="{ hidden: !bukaSoal }">
                    <ContentRenderer :value="soal"/>
                </div>

                <div class="p-6" :class="{ hidden: !bukaOutput }">
                    <div class="w-full min-h-[20vh] bg-slate-800 text-lg">
                        <pre class="font-bold">{{ compiledOutput }}</pre>
                        <pre>{{ response }}</pre>
                    </div>
                </div>

                <div class="p-6" :class="{ hidden: !bukaSolusi }">
                    <ContentRenderer :value="solusi" />
                </div>
            </div>

            <div id="code-editor" class="w-full overflow-auto pd-4 relative">
                <codemirror
                    v-model="code"
                    class="text-lg"
                    :style="{ height: '100%', 'padding-bottom': '58px' }"
                    :autofocus="true"
                    :indent-with-tab="true"
                    :tab-size="2"
                    :extensions="extensions"
                />
                <div class="flex items-center justify-end h-[58px] px-8 absolute bottom-0 w-full shadow-lg">
                    <button class="btn btn-primary btn-sm btn-outline mr-4" @click="postAbout()">Test</button>
                    <button class="btn btn-primary btn-sm" @click="compileCode()">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#ide {
    grid-template-columns: auto 1fr 1fr;
}
</style>