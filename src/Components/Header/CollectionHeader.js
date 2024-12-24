import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import './CollectionHeader.css';

const CollectionHeader = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="HeaderSection">
            <div className="LogoSection">
                <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
                    alt="homeLogo"
                    className="homeLogo"
                />
            </div>
            <button className="CollectionBtn" onClick={togglePopup}>
                Collections <GoChevronDown />
            </button>
            <button className="saveBtn">Save</button>

            {isPopupOpen && (
                <div className={"overlay"} onClick={togglePopup}>
                    <div className={"popup"} onClick={(e) => e.stopPropagation()}>
                        <ul className={"ListContainer"}>
                            <li>Apple Watch Series 10</li>
                            <hr/>
                            <li>Apple Watch Hermès Series 10</li>
                            <hr/>
                            <li>Apple Watch SE</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CollectionHeader;
