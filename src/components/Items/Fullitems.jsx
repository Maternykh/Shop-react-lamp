import React, { Component } from 'react'
export class Fullitems extends Component {
  render() {
    return (
        <div className="full-item">
        <div className="full-photoram">
          <img src={this.props.item.image} className="full-img"/>
          <div className='contdesc'>
            <div className="full-title">{this.props.item.title}</div>
            <div className="full-price">{this.props.item.price} руб</div>
            <div className="full-desc">{this.props.item.desc}</div>
            <div className="full-full" onClick={() => this.props.onShowItem(this.props.item)}>подробнее</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Fullitems