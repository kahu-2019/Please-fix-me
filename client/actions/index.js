import request from 'superagent'


export const actionCreatorName = () => {
  return {
    type: 'ACTION_TYPE'
  }
}

//  ** Example of api get requests  **//

// export function fetchPosts (subreddit) {
//   return (dispatch) => {
//     dispatch(requestPosts())
//     return request
//       .get(`/api/v1/reddit/subreddit/${subreddit}`)
//       .then(res => {
//         dispatch(receivePosts(res.body))
//       })
//       .catch(err => {
//         dispatch(showError(err.message))
//       })
//   }
// }