export default function (state = {}, action) {
    switch (action.type) {
        case "GET_FLIGHTS":
        console.log(action.data)
            return action.data
    }
}