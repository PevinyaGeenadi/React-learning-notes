import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import { About } from "../../pages/About/About";
import { Home } from "../../pages/Home/Home";
import {Contact} from "../../pages/Contact/Contact";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart";
import {ModifyCart} from "../ModifyCart/ModifyCart";

export class MainContent extends Component {
    render() {
        return (
            <div className="md:px12 max-2xl mx-auto " >
                {/* <h1 className="text-tertiary text-center">This is Main content</h1> */}

               <Routes>
                   <Route path="/" Component={Home}></Route>
                   <Route path="/about" Component={About}></Route>
                   <Route path="/contact" Component={Contact}></Route>
                   <Route path="/shopping-cart" element={<ShoppingCart itemsList={
                       ModifyCart.itemsList}></ShoppingCart>}></Route>

               </Routes>

            </div>

        );
    }
}
