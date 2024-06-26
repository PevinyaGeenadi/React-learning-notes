import {Component} from "react";
import icon from '../../../images/Organic Shop Logo.png';

export class Footer extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex justify-center w-full fixed bottom-0">
                <p className="pt-1 pr-3 text-[10px] text-[#e6f0e6] hover:text-green-400">Copyright © 2024</p>
                <h1 className="text-1xl text-secondary">Organic Shop</h1>
                <img className="h-5 w-5 top-0 ml-1" src={icon} alt=""/>
            </div>


        );
    }
}
