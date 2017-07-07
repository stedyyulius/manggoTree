const getName = (name) =>{
  return{
    type:"Name",
    payload: name
  }
}

const grow = (prevTree) =>{
  const newTree ={
    age: prevTree.age + 1,
    fruits: prevTree.fruits + Math.floor(Math.random()* 5),
    maxAge: 10
  }
  return{
    type:"Grow",
    payload:newTree
  }
}

export{
  getName,grow
}
