import {defineStore} from 'pinia'

const state = () => ({
    currentTheme: 'night'
}) 

const getters = {

}

const actions = {
    changeTheme(theme: any){
        console.log(theme.value)
        if(theme.value) this.currentTheme = 'winter'
        if(!theme.value) this.currentTheme = 'night'
        console.log(this.currentTheme)
    }
}

export const useThemeStore = defineStore('themeStore', {
    state,
    getters,
    actions
})