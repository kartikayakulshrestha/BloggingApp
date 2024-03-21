const min=0
const max=100
const settinglikes=(min=min,max=max,action)=>{
    return {
        min:action.min,
        max:action.max
    }
}
export default settinglikes