import React, { Component } from 'react'
import search from '../images/images/icons/search-icon.png';

import cart from '../images/images/icons/cart.png';  
import logo from '../images/images/icons/logo.png';
// import $ from "../js/jquery-3-4-1"
export default class Header extends Component {
    render() {
		// $(document).ready(function(){
		// 	if ($(window).width()<767){
		// 		$(".footer-links-wrapper").addClass("shoplist-mobile");
		
		// 	}
		// 	if ($(window).width()>768){
		// 		$(".footer-links-wrapper").removeClass("shoplist-mobile");
				
		// 	}
		// 	$(window).on("resize",function(){
		// 		if ($(window).width()<767){
		// 			$(".footer-links-wrapper").addClass("shoplist-mobile");
		// 	}
		// 	if ($(window).width()>768){
		// 		$(".footer-links-wrapper").removeClass("shoplist-mobile");
		// 		$("ul").show();
		// 	}
			
		// });
		// 	$(document).on("click",".shoplist-mobile h3",function(){
		// 		$(this).next("ul").slideToggle()
		// 	});
		// 	$(document).on("click",".shoplist-mobile h3",function(){
		// 		$(this).parent().toggleClass("plus cross")
		// 	});
		
		// });
		
		// console.log($(".footer-links-wrapper"));
		
		
		
        return (
            <div>
                <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
					☰
				</button>
				<a className="navbar-brand mx-auto" href="#"><img src={logo}/></a>
	
				<div className="navbar-collapse collapse">
					<ul className="navbar-nav nav-justified w-100 nav-fill">
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iphone</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a>
						</li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
						<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search}/></a></li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart}/></a></li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
	
            </div>
        )
    }
}
