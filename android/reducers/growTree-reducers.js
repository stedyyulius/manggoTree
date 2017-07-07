const initialState = [{
  age: 0,
  fruits: 0,
  maxAge: 10
}]

export default (state = initialState,action) =>{
    if(action.type === 'Grow'){
      return action.payload
    }
    else{
      return state
    }
}
