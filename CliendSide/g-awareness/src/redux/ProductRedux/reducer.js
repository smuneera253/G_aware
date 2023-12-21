// import {
//   GET_ALL_LEADER_REQUEST,
//   GET_ALL_LEADER_SUCCESS,
//   GET_ALL_LEADER_FAILURE,
//   GET_SEARCH_LEADER_REQUEST,
//   GET_SEARCH_LEADER_FAILURE,
//   GET_SEARCH_LEADER_SUCCESS,
//   GET_ALL_BUDGET_REQUEST,
//   GET_ALL_BUDGET_FAILURE,
//   GET_ALL_BUDGET_SUCCESS,
//   GET_SEARCH_BUDGET_REQUEST,
//   GET_SEARCH_BUDGET_FAILURE,
//   GET_SEARCH_BUDGET_SUCCESS,
//   GET_ALL_PLANS_REQUEST,
//   GET_ALL_PLANS_FAILURE,
//   GET_ALL_PLANS_SUCCESS,
//   GET_SEARCH_PLANS_REQUEST,
//   GET_SEARCH_PLANS_FAILURE,
//   GET_SEARCH_PLANS_SUCCESS,
//   GET_ALL_HELP_REQUEST,
//   GET_ALL_HELP_FAILURE,
//   GET_ALL_HELP_SUCCESS,

//   GET_ALL_TOURIST_REQUEST,
//   GET_ALL_TOURIST_FAILURE,
//   GET_ALL_TOURIST_SUCCESS
// } from "./actionType";

// export const initState = {
//   LeaderData: [],
//   budgetData: [],
//   PlansData: [],
//   HelpData: [],
//   TouristData:[],
//   error: "",
//   loading: false,
//   search: "",
// };

// // HELP Reducer

// const touristReducer = (state = initState, action) => {
//   switch (action.type) {
//     case GET_ALL_TOURIST_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: "",
//       };
//     case GET_ALL_TOURIST_SUCCESS:
//       console.log('Reducer Help Data:', action.payload);
//       return {
//         ...state,
//         loading: false,
//         error: "",
//         TouristData: action.payload,
//       };
//     case GET_ALL_TOURIST_FAILURE:
//       console.log('Reducer Help Data:', action.payload);
//       return {
//         ...state,
//         loading: false,
//         error: action.message,
//       };
//     default:
//       return state;
//   }
// };
// //hepl
// const helpReducer = (state = initState, action) => {
//   switch (action.type) {
//     case GET_ALL_HELP_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: "",
//       };
//     case GET_ALL_HELP_SUCCESS:
//       console.log('Reducer Help Data:', action.payload);
//       return {
//         ...state,
//         loading: false,
//         error: "",
//         HelpData: action.payload,
//       };
//     case GET_ALL_HELP_FAILURE:
//       console.log('Reducer Help Data:', action.payload);
//       return {
//         ...state,
//         loading: false,
//         error: action.message,
//       };
//     default:
//       return state;
//   }
// };

// // Plans Reducer
// const plansReducer = (state = initState, action) => {
//   switch (action.type) {
//     case GET_ALL_PLANS_REQUEST:
//     case GET_SEARCH_PLANS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: "",
//       };
//     case GET_ALL_PLANS_SUCCESS:
//     case GET_SEARCH_PLANS_SUCCESS:
//       console.log('Reducer Plans Data:', action.payload);
//       return {
//         ...state,
//         loading: false,
//         error: "",
//         PlansData: action.payload,
//       };
//     case GET_ALL_PLANS_FAILURE:
//     case GET_SEARCH_PLANS_FAILURE:
//       console.log('Reducer Plans Data:', action.payload);
//       return {
//         ...state,
//         loading: false,
//         error: action.message,
//       };
//     default:
//       return state;
//   }
// };

// // Budget Reducer
// const budgetReducer = (state = initState, action) => {
//   switch (action.type) {
//     case GET_ALL_BUDGET_REQUEST:
//     case GET_SEARCH_BUDGET_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: "",
//       };
//     case GET_ALL_BUDGET_SUCCESS:
//     case GET_SEARCH_BUDGET_SUCCESS:
//       console.log('Reducer Budget Data:', action.payload);
//       return {
//         ...state,
//         loading: false,
//         error: "",
//         budgetData: action.payload,
//       };
//     case GET_ALL_BUDGET_FAILURE:
//     case GET_SEARCH_BUDGET_FAILURE:
//       console.log('Reducer Budget Data:', action.payload);
//       return {
//         ...state,
//         loading: false,
//         error: action.message,
//       };
//     default:
//       return state;
//   }
// };

// // Main Reducer
// const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case GET_ALL_LEADER_REQUEST:
//     case GET_SEARCH_LEADER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: "",
//       };
//     case GET_ALL_LEADER_FAILURE:
//     case GET_SEARCH_LEADER_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.message,
//       };
//     case GET_ALL_LEADER_SUCCESS:
//     case GET_SEARCH_LEADER_SUCCESS:
//       return {
//         ...state,
//         error: "",
//         loading: false,
//         LeaderData: action.payload,
//       };
//     case GET_ALL_HELP_REQUEST:
//     case GET_ALL_HELP_FAILURE:
//     case GET_ALL_HELP_SUCCESS:
//       return helpReducer(state, action);
//     default:
//       return budgetReducer(plansReducer(state, action), action);
//   }
// };

// export default reducer;
































import {
  GET_ALL_LEADER_REQUEST,
  GET_ALL_LEADER_SUCCESS,
  GET_ALL_LEADER_FAILURE,
  GET_SEARCH_LEADER_REQUEST,
  GET_SEARCH_LEADER_FAILURE,
  GET_SEARCH_LEADER_SUCCESS,
  GET_ALL_BUDGET_REQUEST,
  GET_ALL_BUDGET_FAILURE,
  GET_ALL_BUDGET_SUCCESS,
  GET_SEARCH_BUDGET_REQUEST,
  GET_SEARCH_BUDGET_FAILURE,
  GET_SEARCH_BUDGET_SUCCESS,
  GET_ALL_PLANS_REQUEST,
  GET_ALL_PLANS_FAILURE,
  GET_ALL_PLANS_SUCCESS,
  GET_SEARCH_PLANS_REQUEST,
  GET_SEARCH_PLANS_FAILURE,
  GET_SEARCH_PLANS_SUCCESS,
  GET_ALL_HELP_REQUEST,
  GET_ALL_HELP_FAILURE,
  GET_ALL_HELP_SUCCESS,

  GET_ALL_TOURIST_REQUEST,
  GET_ALL_TOURIST_FAILURE,
  GET_ALL_TOURIST_SUCCESS
} from "./actionType";

export const initState = {
  LeaderData: [],
  budgetData: [],
  PlansData: [],
  HelpData: [],
  TouristData: [],
  error: "",
  loading: false,
  search: "",
};

// HELP Reducer
const touristReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_TOURIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_ALL_TOURIST_SUCCESS:
      console.log('Reducer Tourist Data:', action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        TouristData: action.payload,
      };
    case GET_ALL_TOURIST_FAILURE:
      console.log('Reducer Tourist Data:', action.payload);
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

// HELP
const helpReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_HELP_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_ALL_HELP_SUCCESS:
      console.log('Reducer Help Data:', action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        HelpData: action.payload,
      };
    case GET_ALL_HELP_FAILURE:
      console.log('Reducer Help Data:', action.payload);
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

// Plans Reducer
const plansReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PLANS_REQUEST:
    case GET_SEARCH_PLANS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_ALL_PLANS_SUCCESS:
    case GET_SEARCH_PLANS_SUCCESS:
      console.log('Reducer Plans Data:', action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        PlansData: action.payload,
      };
    case GET_ALL_PLANS_FAILURE:
    case GET_SEARCH_PLANS_FAILURE:
      console.log('Reducer Plans Data:', action.payload);
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

// Budget Reducer
const budgetReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_BUDGET_REQUEST:
    case GET_SEARCH_BUDGET_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_ALL_BUDGET_SUCCESS:
    case GET_SEARCH_BUDGET_SUCCESS:
      console.log('Reducer Budget Data:', action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        budgetData: action.payload,
      };
    case GET_ALL_BUDGET_FAILURE:
    case GET_SEARCH_BUDGET_FAILURE:
      console.log('Reducer Budget Data:', action.payload);
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

// Main Reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_LEADER_REQUEST:
    case GET_SEARCH_LEADER_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_ALL_LEADER_FAILURE:
    case GET_SEARCH_LEADER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case GET_ALL_LEADER_SUCCESS:
    case GET_SEARCH_LEADER_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        LeaderData: action.payload,
      };
    case GET_ALL_HELP_REQUEST:
    case GET_ALL_HELP_FAILURE:
    case GET_ALL_HELP_SUCCESS:
      return helpReducer(state, action);
    case GET_ALL_TOURIST_REQUEST:
    case GET_ALL_TOURIST_FAILURE:
    case GET_ALL_TOURIST_SUCCESS:
      return touristReducer(state, action);
    default:
      return budgetReducer(plansReducer(state, action), action);
  }
};

export default reducer;
