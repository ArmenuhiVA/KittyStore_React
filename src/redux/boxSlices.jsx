import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchBoxes = createAsyncThunk(
    'boxes/fetchBoxes',
    async function (_, { rejectWithValue, dispatch }) {
        try {
            const response = await 
            fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_C8GhOct3ujJ7W3V3p5UBbZ11iTis87KTFM77nZDkZ79VV6yVlbZaK49M0ktszIqL&limit=9&category_ids=5`)
            if (!response.ok) {
                throw new Error('Server Error')
            }

            const data = await response.json()

            dispatch(setBoxes(data))
            // dispatch(appendboxes(data))
            // console.log(data)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const boxesSlice = createSlice({
    name: 'boxes',
    initialState: {
        boxes: [],
    },
    reducers: {
        setBoxes(state, action) {
            state.boxes = action.payload
            //    console.log(state.films)
        },
        appendBoxes: (state, action) => {
            state.boxes = [...state.boxes, ... action.payload]
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

export const { setBoxes, appendBoxes } = boxesSlice.actions
export default boxesSlice.reducer