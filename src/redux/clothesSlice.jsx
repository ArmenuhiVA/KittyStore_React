import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchClothes = createAsyncThunk(
    'clothes/fetchClothes',
    async function (_, { rejectWithValue, dispatch }) {
        try {
            const response = await 
            fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_C8GhOct3ujJ7W3V3p5UBbZ11iTis87KTFM77nZDkZ79VV6yVlbZaK49M0ktszIqL&limit=9&category_ids=15`)
            if (!response.ok) {
                throw new Error('Server Error')
            }

            const data = await response.json()

            dispatch(setClothes(data))
            // dispatch(appendclothes(data))
            console.log(data)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const clothesSlice = createSlice({
    name: 'clothes',
    initialState: {
        clothes: [],
    },
    reducers: {
        setClothes(state, action) {
            state.clothes = action.payload
            //    console.log(state.films)
        },
        appendClothes: (state, action) => {
            state.clothes = [...state.clothes, ... action.payload]
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

export const { setClothes, appendClothes } = clothesSlice.actions
export default clothesSlice.reducer