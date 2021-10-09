import React, { Component } from 'react'
import appletv from "../images/logo__dcojfwkzna2q_large.png";
export default class Fivith extends Component {
    render() {
        return (
            <div>
                <section className="fifth-heghlight-wrapper">
		<div className="container-filud">
			<div className="row">
			<div className="left-macbok-wrapper col-sm-12 col-md-6 col-lg col-xl">
					<div className="product-title">
						Mackbook Air
					</div>
					<div className="descrption-wrapper">power it's in the Air.
				</div>
				<div className="links-wrapper">
					<ul>
						<li><a href="#">leran more</a> </li>
						<li> <a href="#">buy</a></li>
					</ul>
				</div>
			</div>
			<div className="right-side-fitness-wrapper col-sm-12 col-md-6 col-lg col-xl ">
					<div className="right-logo ">
					<div className="image-logo1"><img src={appletv}/></div>
				</div>
				<div className="descrption-wrapper col-sm-12 col-md-6 col-lg col-xl">
					A new fitness experience foe everyone. <br></br>
					powered by Apple Watch
				</div>
				<div className="links-wrapper-new">
					<ul>
						<li><a href="#">learn more <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
						  </svg></span></a></li>
						<li className="another-icon"><a href="#">Try it free <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
						  </svg></span></a></li>
					</ul>
				</div>
			</div>
		</div>
		</div>
	</section>
            </div>
        )
    }
}
