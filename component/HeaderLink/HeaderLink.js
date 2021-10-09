import React, { Component } from 'react'

export default class HeaderLink extends Component {
    render() {
        return (
            <div>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href= {this.props.LinkUrl}>
                        {this.props.LinkName}
                    </a>
                </li>
            </div>
        )
    }
}
