const addtodo = (data) => {
    return {
        type: "ADDTODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

const DeleteToDo = (id) => {
    return {
        type: "DeleteToDo",
        id:id
    }
}

const RemoveToDO = () => {
    return {
        type: "RemoveToDo"
    }
}

export {addtodo,DeleteToDo,RemoveToDO}