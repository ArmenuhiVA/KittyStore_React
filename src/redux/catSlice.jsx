import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCats = createAsyncThunk(
    'cats/fetchCats',
    async function (_, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_C8GhOct3ujJ7W3V3p5UBbZ11iTis87KTFM77nZDkZ79VV6yVlbZaK49M0ktszIqL&limit=9`)
            if (!response.ok) {
                throw new Error('Server Error')
            }

            const data = await response.json()

            dispatch(setCats(data))
            // dispatch(appendCats(data))
            // console.log(data)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const catsSlice = createSlice({
    name: 'cats',
    initialState: {
        cats: [],
    },
    reducers: {
        setCats(state, action) {
            state.cats = action.payload
            //    console.log(state.films)
        },
        appendCats: (state, action) => {
            state.cats = [...state.cats, ... action.payload]
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchFilms.fulfilled, (state, action) => {
    //             state.films = action.payload;
    //         })
    //         .addCase(fetchFilms.rejected, (state, action) => {
    //             // Handle error state if needed
    //         });
    // }
})

export const { setCats, appendCats } = catsSlice.actions
export default catsSlice.reducer