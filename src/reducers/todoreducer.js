const initialstate = {
    list: []
}

// it is something like this as follow
//  const {data,setdata} = new usestate([]);

const todoreducer = (state = initialstate, action) => {
    switch (action.type) {
        case "ADDTODO":
            const { id, data } = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        case "DeleteToDo":

            const New_list = state.list.filter((ele) => ele.id !== action.id)

            return {
                ...state,
                list: New_list
            }

        case "RemoveToDo":return {
                ...state,
                list  : []
            }

        default: return state;
    }


}

export default todoreducer;