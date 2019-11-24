const initialState = {
    projects : [
        {
            id : 1,
            title : 'Project One',
            description : 'About Project Summary'
        },
        {
            id : 2,
            title : 'Project Two',
            description : 'About Project Summary'
        },
        {
            id : 3,
            title : 'Project Three',
            description : 'About Project Summary'
        }
    ]
}

const projectReducer = (state = initialState, action) => {
    return state;
}

export default projectReducer;
