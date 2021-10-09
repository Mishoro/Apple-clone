import React, { Component } from 'react'
import ipad from '../images/one.png'
import wow from '../images/@@@tvvvt.png'
import wood from '../images/@@22@@@@.png';
export default class Six extends Component {
    render() {
        return (
            <div>
                <section className="six-heghlight-wrapper">
        <div className="container-filud">
            <div className="row">
            <div className="left-side-one-logo col-sm-12 col-md-6 col-lg col-xl">
                <div className="one"> <img src={ipad} alt=""/></div>
                <div className="descrption-wrapper">
                    bundle up to six Apple services. <br></br>
                    And enjoy more for less.
                </div>
                <div className="links-wrapper-new">
                    <ul>
                        <li><a href="#">learn more <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg></span></a></li>
                        <li ><a href="#">try it free <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                        </svg></span></a></li>
                    </ul>
                </div>
            </div>
            <div className="right-side-one-logo col-sm-12 col-md-6 col-lg col-xl">
                <div className="tvvvv">
                    <img src={ wow }/>
                </div>
                <div className="">
                    <img src={wood}/>
                </div>
                <div className="amanda">
                    with Amanda  Gorman
                </div>
                <div className="links-wrapper">
                    <ul>
                        <li className="last "><a href="#">watch now</a></li>
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
