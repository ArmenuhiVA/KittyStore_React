import { useDispatch, useSelector } from "react-redux";
import { fetchBoxes } from "../redux/boxSlices";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";


const Boxes = () => {
    const boxes = useSelector(state => state.boxes.boxes);
    const navigate = useNavigate()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBoxes());
    }, [dispatch])



    return (
        <>
            <Header />
            <button
                className='w-40 min-h-7 bg-[#BD9DEA] m-10 text-white'
                onClick={() => navigate(-1)}
            >Back
            </button>
            <div
                className='grid grid-cols-3 gap-4'

            >
                {boxes ? boxes.map(cat => (
                    <div className="p-4 text-center  " key={cat.url}>
                        <img className="object-cover w-full h-full rounded-lg" src={cat.url} alt="" />
                    </div>
                )) : <h2> Loading...</h2>}
                {console.log(boxes)}
            </div>
        </>
    )
}

export { Boxes }
