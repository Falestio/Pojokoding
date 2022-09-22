import { onAuthStateChanged } from 'firebase/auth'

const getUserData = () => {
    let user = ref(null)
    const { $auth } = useNuxtApp() 
    onMounted(() => {
        onAuthStateChanged($auth, (currentUser) => {
            if(currentUser) {
                user.value = currentUser
            }
        })
    })

    return user
}

export const useGetUserData = () => {
    return getUserData
}
