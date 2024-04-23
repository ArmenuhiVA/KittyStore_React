import { useDispatch, useSelector } from "react-redux";
import { appendCats, fetchCats } from "../redux/catSlice";




const Button = () => {
  const cats = useSelector(state => state.cats.cats);

  const dispatch = useDispatch();

  // console.log(cats)



  const handleClick = () => {
    dispatch(fetchCats())
      .then(() => {
        dispatch(appendCats(cats));
      });
  };

  return (
    <>
      <button className="w-40 min-h-7 bg-[#BD9DEA] m-10 text-white float-right"
        onClick={handleClick}>
        <p>Load More...</p>
      </button>
    </>
  )
}

export { Button }
