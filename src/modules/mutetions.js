export default {
    increase(state, payload){
        state.count += payload
    },
    multByFive(state){
        state.count *= 5
    }
}