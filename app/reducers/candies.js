
const initialState = {}

const LOAD_CANDIES = 'LOAD_CANDIES';
const loadCandies = candies => ({
  type: LOAD_CANDIES,
  candies,
})

export const fetchCandies = () => (
  async (dispatch, _, axios) => {
    try {
      const candies = await axios.get('/api/candies');
      dispatch(loadCandies(candies))
    } catch (err) {
      console.error(err);
    }
  }
)


const candiesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default candiesReducer
