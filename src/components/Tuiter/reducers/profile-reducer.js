import profile_data from "../data/profile_data.json"

const profileReducer = ( state = profile_data, action ) => {
    switch ( action.type ) {
        case "update-profile":
            return action.local_profile_data;
        default:
            return state;
    }
}

export default profileReducer;