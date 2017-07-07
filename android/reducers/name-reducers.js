const initialState = []

export default (state = initialState,action) =>{
    if(action.type === 'Name'){
      return action.payload
    }
    else{
      return state
    }
}
