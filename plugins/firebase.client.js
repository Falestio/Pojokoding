import { defineNuxtPlugin } from "#app";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
    const user = useCurrentUser();

    const firebaseConfig = {
        apiKey: "AIzaSyALVOYa30AZ_KlKmMkwxaAlENG4oZufeLQ",
        authDomain: "pojokoding-95d99.firebaseapp.com",
        projectId: "pojokoding-95d99",
        storageBucket: "pojokoding-95d99.appspot.com",
        messagingSenderId: "474852501220",
        appId: "1:474852501220:web:88f730c4a37bdb0f242ef1",
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    nuxtApp.provide("firebaseApp", app);
    nuxtApp.provide("db", db);
    nuxtApp.provide("auth", auth);

    addRouteMiddleware("protected", (to, from) => {
        if (!user) {
            return navigateTo("/masuk");
        }
    });
});
