import './App.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, {useEffect,useState} from 'react'
import {ProductPage} from "./component/ProductPage";
import {OrderPage} from "./component/OrderPage";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import axios from "axios";

function App() {
  const [products,setProducts] = useState([]);
  const [items,setItems] = useState([]);
  const [customer,setCustomer] = useState([]);

  const handleAddClicked = productId => {
    const product = products.find(v => v.id === productId);
    const found = items.find(v => v.id === productId);
    const updatedItems =
        found ? items.map(v => (v.id === productId) ? {...v, count: v.count + 1} : v) : [...items, {
          ...product,
          count: 1
        }]
    setItems(updatedItems);
  }

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/items').then(v => {
      setProducts(v.data);
    });
    axios.get('http://localhost:8080/api/v1/customers/5493b4af-b865-4ce0-a866-c08bc7acc48b').then(v => {
      setCustomer(v.data);
    });
  }, []);

  const handleOrderSubmit = (order) => {
    if (items.length === 0) {
      alert("아이템을 추가해 주세요!");
    } else {
      axios.post('http://localhost:8080/api/v1/orders', {
        buyerId: order.buyerId,
        orderItems: order.orderItems
        })
      .then(function (response){
            console.log(response.data.orderId)
            alert("주문이 정상적으로 접수되었습니다.")
            document.location.href='/orders/' + response.data.orderId
          },
          e => {
            alert("서버 장애");
            console.error(e);
          }
        )
    }
  }

  return (
    <BrowserRouter>
    <div className="App">
      <div className="container-fluid">
        <div className="row justify-content-center m-4">
          <h1 className="text-center">Grids & Circle</h1>
        </div>

        <div className="row">
          <nav className="nav justify-content-end">
            <Link to={"/items"} className="nav-link">전체 상품 목록</Link>
          </nav>

        </div>
          <Routes>
            <Route exact path="/items" element={<ProductPage products = {products} handleAddClicked = {handleAddClicked} items={items} handleOrderSubmit = {handleOrderSubmit} customer={customer} />}>
            </Route>

            <Route exact path="/orders/:orderId" element={<OrderPage/>}>
            </Route>
          </Routes>
      </div>
    </div>
    </BrowserRouter>
);
}

export default App;
