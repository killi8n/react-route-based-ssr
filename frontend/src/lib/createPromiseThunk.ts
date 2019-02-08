/**
 * first written by velopert
 * I re-wrote original function to arrow function with Types
 * creates thunk from promiseCreator
 * @param {string} actionType
 * @param {() => Promise<*>} promiseCreator
 */

export default (actionType: string, promiseCreator: (...apiParams: any) => Promise<any>) => (...params: any) => {
  return async (dispatch: any) => {
    dispatch({ type: `${actionType}_PENDING` });
    try {
      const response = await promiseCreator(...params);
      dispatch({
        type: `${actionType}_SUCCESS`,
        payload: response
      });
      return response;
    } catch (e) {
      dispatch({
        type: `${actionType}_ERROR`,
        payload: e
      });
    }
  };
};

// export default function createPromiseThunk(actionType: string, promiseCreator: Promise<any>) {
//     return (...params: any) => {
//       return async (dispatch: any) => {
//         // promise begins
//         dispatch({ type: `${actionType}_PENDING` });
//         try {
//           const response = await promiseCreator(...params);
//           dispatch({
//             type: `${actionType}_SUCCESS`,
//             payload: response
//           });
//           return response;
//         } catch (e) {
//           dispatch({
//             type: `${actionType}_ERROR`,
//             payload: e
//           });
//           throw e;
//         }
//       };
//     };
//   }
