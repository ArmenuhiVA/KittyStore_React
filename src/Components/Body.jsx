import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "../redux/catSlice";
import { useEffect } from "react";
// import { Link } from "react-router-dom";


const Body = () => {
    const cats = useSelector(state => state.cats.cats);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCats());
    }, [dispatch])


    
    return (
        <>
            <div
                className='grid grid-cols-3 gap-4'

            >
                {cats ? cats.map(cat => (
                    <div className="p-4 text-center  " key={cat.url}>
                        <img className="object-cover w-full h-full rounded-lg" src={cat.url} alt="" />
                    </div>
                )) : <h2> Loading...</h2>}
                {console.log(cats)}
            </div>
        </>
    )
}

export { Body }
