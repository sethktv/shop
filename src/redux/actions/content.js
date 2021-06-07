import axios from "axios"
// npx json-server --watch db.json --port 3001
export const fetchContent = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false
  })
  axios
    .get(
      `http://localhost:3001/content?${category !== null ? `category=${category}` : ''}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setContent(data))
    })
}

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,

})

export const setContent = (items) => ({
  type: 'SET_CONTENT',
  payload: items,
})
