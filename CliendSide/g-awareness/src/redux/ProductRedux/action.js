import {
  GET_ALL_LEADER_REQUEST,
  GET_ALL_LEADER_FAILURE,
  GET_ALL_LEADER_SUCCESS,
  GET_SEARCH_LEADER_FAILURE,
  GET_SEARCH_LEADER_REQUEST,
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
  GET_ALL_TOURIST_SUCCESS,

  


} from "./actionType";

import axios from "axios";

export const getallleaderrequest = () => ({
  type: GET_ALL_LEADER_REQUEST,
});

export const getallleaderfailure = (message) => ({
  type: GET_ALL_LEADER_FAILURE,
  message
});

export const getallleadersuccess = (data) => ({
  type: GET_ALL_LEADER_SUCCESS,
  payload:data
});

export const getAllleader = (url) => (dispatch) => {
  dispatch(getallleaderrequest());
  axios.get(url)
    .then(res => {
      dispatch(getallleadersuccess(res.data))
    })
    .catch(err => {
      dispatch(getallleaderfailure(err.message))
    })
};

// Search API

export const getSearchLeaderRequest = () => ({
  type: GET_SEARCH_LEADER_REQUEST,
});

export const getSearchLeaderFailure = (message) => ({
  type: GET_SEARCH_LEADER_FAILURE,
  message
});

export const getSearchLeaderSuccess = (payload) => ({
  type: GET_SEARCH_LEADER_SUCCESS,
  payload,
});

export const getSearchLeader = (data) => (dispatch) => {
  dispatch(getSearchLeaderRequest());
  axios.get(`http://localhost:8080/leader/search?query=${data}`)
    .then(res => {
      dispatch(getSearchLeaderSuccess(res.data))
    })
    .catch(err => {
      dispatch(getSearchLeaderFailure(err.message))
    })
};

// Budget data

export const getAllBudgetrequest = () => ({
  type: GET_ALL_BUDGET_REQUEST,
 
});


export const getAllBudgetfailure = (message) => ({
  type: GET_ALL_BUDGET_FAILURE,
  message
});

export const getAllBudgetsuccess = (payload) => ({
  type: GET_ALL_BUDGET_SUCCESS,
  payload,
});


export const getAllBudget = (url) => (dispatch) => {
if (!url) {
  dispatch(getAllBudgetfailure('URL is undefined')); 
  return;
}
dispatch(getAllBudgetrequest());

axios.get(url)
  .then(res => {
  
    dispatch(getAllBudgetsuccess(res.data));
  })
  .catch(error => {
    dispatch(getAllBudgetfailure(error.message));
  });
};



// Search API

export const getSearchBudgetRequest = () => ({
  type: GET_SEARCH_BUDGET_REQUEST,
});

export const getSearchBudgetFailure = (message) => ({
  type: GET_SEARCH_BUDGET_FAILURE,
  message
});

export const getSearchBudgetSuccess = (payload) => ({
  type: GET_SEARCH_BUDGET_SUCCESS,
  payload,
});

export const getSearchBudget = (data) => (dispatch) => {
  dispatch(getSearchBudgetRequest());
  axios.get(`http://localhost:8080/budget/search?query=${data}`)
    .then(res => {
      dispatch(getSearchBudgetSuccess(res.data))
    })
    .catch(err => {
      dispatch(getSearchBudgetFailure(err.message))
    })
};

export default getAllBudget;




//govet plans

export const getAllPlansRequest = () => ({
  
  type: GET_ALL_PLANS_REQUEST,
 
});


export const getAllPlanstFailure = (message) => ({
  type: GET_ALL_PLANS_FAILURE,
  message
});

export const getAllPlansSuccess = (payload) => ({
  type: GET_ALL_PLANS_SUCCESS,
  payload,
});







export const getAllPlans = (url) => (dispatch) => {
  // ... (previous code)

  axios.get(url)
    .then(res => {
      // Log the response to check the data structure
      console.log('API Response:', res.data);

      // Dispatch the success action with the data from the response
      dispatch(getAllPlansSuccess(res.data));
    })
    .catch(error => {
      // Log the error for debugging
      console.error('API Error:', error);

      // Handle the error, e.g., dispatch an error action
      dispatch(getAllPlanstFailure(error.message));
    });
};



  //SERACH PLANS




// export const getSearchPlansRequest = () => ({
//   type: GET_SEARCH_PLANS_REQUEST,
// });

// export const getSearchPlansFailure = (message) => ({
//   type: GET_SEARCH_PLANS_FAILURE,
//   message
// });

// export const getSearchPlansSuccess = (payload) => ({
//   type: GET_SEARCH_PLANS_SUCCESS,
//   payload,
// });

// export const getSearchPlans = (data) => (dispatch) => {
//   dispatch(getSearchPlansRequest());
//   axios.get(`http://localhost:8080/budget/search?query=${data}`)
//     .then(res => {
//       dispatch(getSearchPlansSuccess(res.data))
//     })
//     .catch(err => {
//       dispatch(getSearchPlansFailure(err.message))
//     })
// };

// export default getAllPlans;






//help line numbers




export const getAllHelpRequest = () => ({
  
  type: GET_ALL_HELP_REQUEST,
 
});


export const getAllHelpFailure = (message) => ({
  type: GET_ALL_HELP_FAILURE,
  message
});

export const getAllHelpSuccess = (payload) => ({
  type: GET_ALL_HELP_SUCCESS,
  payload,
});







export const getAllHelp = (url) => (dispatch) => {
  // ... (previous code)

  axios.get(url)
    .then(res => {
      // Log the response to check the data structure
      console.log('API Response:', res.data);

      // Dispatch the success action with the data from the response
      dispatch(getAllHelpSuccess(res.data));
    })
    .catch(error => {
      // Log the error for debugging
      console.error('API Error:', error);

      // Handle the error, e.g., dispatch an error action
      dispatch(getAllHelpFailure(error.message));
    });
};

///TOURIST DATA







export const getAllTouristRequest = () => ({
  
  type: GET_ALL_TOURIST_REQUEST,
 
});


export const getAllTouristFailure = (message) => ({
  type: GET_ALL_TOURIST_FAILURE,
  message
});

export const getAllTouristSuccess = (payload) => ({
  type: GET_ALL_TOURIST_SUCCESS,
  payload,
});







export const getAllTourist = (url) => (dispatch) => {
  // ... (previous code)

  axios.get(url)
    .then(res => {
      // Log the response to check the data structure
      console.log('API Response:', res.data);

      // Dispatch the success action with the data from the response
      dispatch(getAllTouristSuccess(res.data));
    })
    .catch(error => {
      // Log the error for debugging
      console.error('API Error:', error);

      // Handle the error, e.g., dispatch an error action
      dispatch(getAllTouristFailure(error.message));
    });
};




