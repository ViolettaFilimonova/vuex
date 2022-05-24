import mutetions from "@/modules/mutetions";

export default {
    state () {
        return {
            count: 1
        }
    },
    mutations: mutetions,
    getters:{
        count(state){
            return state.count
        },
        multByThree(state){
            return state.count * 3
        }
    },
    actions:{
        asyncMultByFive({commit}){
            setTimeout(() => {
                commit('multByFive')
            }, 1000)
        }
    }
}