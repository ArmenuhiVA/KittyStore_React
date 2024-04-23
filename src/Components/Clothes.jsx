import { useDispatch, useSelector } from "react-redux";
import { fetchClothes } from "../redux/clothesSlice";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";


const Clothes = () => { 
    const clothes = useSelector(state => state.clothes.clothes);
    const navigate = useNavigate()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchClothes());
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
                {clothes ? clothes.map(cat => (
                    <div className="p-4 text-center  " key={cat.url}>
                        <img className="object-cover w-full h-full rounded-lg" src={cat.url} alt="" />
                    </div>
                )) : <h2> Loading...</h2>}
                {console.log(clothes)}
            </div>
        </>
    )
}

export { Clothes }
