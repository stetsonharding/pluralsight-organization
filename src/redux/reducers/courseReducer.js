// export default function courseReducer(state = [], action) {
//     switch (action.type) {
//         case "CREATE_COURSE":
//             return [...state, action.course]
//         default:
//             return state;
//     }
// }


  export default function courseReducer(state = [], action) {
    switch (action.type) {
      case 'CREATE_COURSE':
        return {
          ...state,
          courses: [...state.courses, action.course]
        };
      default:
        return state;
    }
  };