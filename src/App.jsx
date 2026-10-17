import Header from "./components/Header"
import ProductPage from "./components/ProdutPage"
import ProductsCards from "./components/ProductsCards"
import { Route , Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "./slices/dataSlice"
import { useEffect } from "react"


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const loading = useSelector((state) => state.products.loading)

  return (
    <>
    <div>
        <Header />
        {!loading ? (
          <Routes>
            <Route path="/" element={<ProductsCards />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        ) : (
          <div className="w-80 h-80 border-5 !rounded-full animate-spin border-t-transparent absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2"></div>
        )}
    </div>
    </>
  )
}

export default App
