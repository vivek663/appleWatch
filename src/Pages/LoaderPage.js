import {Component} from 'react'

import ".//LoaderPage.css"

class LoaderPage extends Component{

    render(){
        return(
            <div className="Container">
                <div className={"Logo"}>
                    <img
                        src={"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"}
                        alt={"LogoImg"} className={"appleLogo"}/>
                </div>
                <div className="greetingDesgin">
                    <h1>
                        <span className="greetingText">
                            <span className="peragraph">Apple Watch Studio</span>
                            <span className={"heading"}>Choose a case.</span>
                            <span className={"heading"}>Pick a band.</span>
                            <span className={"heading"}>Create your own style.</span>
                        </span>
                        <button className="btnStart">Get Started</button>
                    </h1>
                </div>
                <div className={"watchImage"}>
                    <img
                        src={"https://previews.dropbox.com/p/thumb/ACdNse28e6LJ-krd17XXfdPFjzk8cxMaIP0tGsHPaIN3gUrq5daZlQSfrhpGfbFcmaFvbSIgZ1XArp9D_Z0QHaGkgbJXztCQX_Uh6mcTuojt96Ew5y68kAq309UwSQcQPzBhRk72Wk89D-ZbmqhhmGsuyb2CJDJ5QW7g_nHWusRLVupTL5W24k2HDJh2fnxTA7ol5jrAYEnqQGFwtd_UfjdjQwF4KZ9bLK-Vq8Otjsa7c7DAfOR9ZLyc6yI6AnEVErhkr9m7JDAL4NyktmGDAWdXrxKPXURQeLLhjZnoVDtyhjP9NIlPknjWmGSlg9Go43HeklH2DkjP4g9zsiFL2ujO/p.png?is_prewarmed=true"} alt={"watchImage"} className={"image"}/>
                </div>
            </div>
        )

    }
}

export default LoaderPage