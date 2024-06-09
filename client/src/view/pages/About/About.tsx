import {Component} from "react";

export class About extends Component {
    render() {
        return (
            <>

                <div className="flex">
                    <div className="h-auto pt-5 pl-10 pr-10 mx-auto">
                        <h2 className="pb-3 text-3xl text-green-400 underline decoration-2">About Us</h2>
                        <p className="pb-3 text-[17px]"> It's a food retailer that specializes in organic, natural and eco-friendly products.
                            The products available at an organic grocery store are often free of pesticides, preservatives,
                            and artificial flavors. These stores may also offer locally sourced and sustainably grown
                            products.
                            Organic foods often have more beneficial nutrients, such as antioxidants, than their conventionally-grown
                            counterparts and people with allergies to foods, chemicals, or preservatives may find their
                            symptoms lessen or go away when they eat only organic foods.
                            Organic produce contains fewer pesticides.
                            <br/>
                            <br/>
                            Mission:
                            Our mission is to make organic living accessible to all, fostering a harmonious relationship between
                            people and the environment. We are committed to offering a diverse range of high-quality, ethically sourced,
                            and sustainable products that promote health, wellness, and a greener lifestyle.

                        </p>
                    </div>

                </div>
            </>
        );
    }
}