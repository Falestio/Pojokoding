export default defineNuxtRouteMiddleware((to, from) => {
    const user = useCurrentUser()
    if (!user.value) {
        return navigateTo('/masuk')
    }
})