import React, { Component } from 'react'
import series from '../images/wwwwwwch.png';
export default class Forth extends Component {
    render() {
        return (
            <div>
                <section className="fourth-heghlight-wrapper">
		<div className="container-filud">
			<div className="row">
				<div className="left-container col-sm-12 col-md-6 col-lg col-xl">
				<div>
					<div className="product-title">
						ipad Air
					</div>
					<div className="descrption-wrapper"> powerful.colorful.wonderful</div>
					<div className="links-wrapper ">
						<ul>
							<li><a href="#">leran more</a></li>
							<li><a href="#">buy</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="right-container col-sm-12 col-md-6 col-lg col-xl ">
				<div>
					<div className="wright-watch-logo ">
						<img src={series} alt=""/>
					</div>
					<div className="descrption-wrapper">
						The future is on your wrist
					</div>
					<div className="links-wrapper">
						<ul>
							<li><a href="#">learn more</a></li>
							<li><a href="#">buy</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</div>
	</section>
            </div>
        )
    }
}
