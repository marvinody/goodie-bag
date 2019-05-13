
const initialState = {
  candies: [],
}

const LOAD_CANDIES = 'LOAD_CANDIES';
const loadCandies = candies => ({
  type: LOAD_CANDIES,
  candies,
})

export const fetchCandies = () => (
  async (dispatch, _, { axios }) => {
    try {
      const resp = await axios.get('/api/candies');
      const candies = resp.data;
      dispatch(loadCandies(candies))
    } catch (err) {
      console.error(err);
    }
  }
)


const candiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CANDIES:
      return { ...state, candies: action.candies };
    default:
      return state
  }
}

export default candiesReducer
