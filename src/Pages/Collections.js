import {Component} from "react";
import CollectionHeader from "../Components/Header/CollectionHeader";
import Body from "../Components/Body/Body";
import Footer from "../Components/Footer/Footer";

class Collections extends Component {

    render() {
        return (
            <div>
                <CollectionHeader />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default Collections;