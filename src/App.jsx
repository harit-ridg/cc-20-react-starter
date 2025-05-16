import Header from "./assets/components/Header"
import Productlist from "./assets/components/ProductList"
import CartSummary from "./assets/components/CartSummary"

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Productlist />
        <CartSummary />
      </div>
    </div>
  )}
 export default App
 