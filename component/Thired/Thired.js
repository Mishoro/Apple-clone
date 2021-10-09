import React, { Component } from 'react'
import hero from '../images/logo_hero__trsrpeu6koqy_large.png'
export default class Thired extends Component {
    render() {
        return (
            <div>
            <section className="third-hightlight-wrapper">
            <div className="container-filud">
                <div className="logo-image">
                    <img src={hero} alt=""/>
                </div>
                <div className="descrption-wrapper">
                    save 6% on Apple product with <br></br>
                    new Apple card_all March long.
                </div>
                <div className="links-wrapper ">
                    <ul>
                        <li><a href="#">learn more</a></li>
                        <li><a href="#">buy now</a></li>
                    </ul>
                </div>
                <div className="explanation text">
                    Exclusions and terms apply
                </div>
            </div>
        </section>
        </div>
            
        )
    }
}
