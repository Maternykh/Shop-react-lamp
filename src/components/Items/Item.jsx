import React, { Component } from 'react'
import {RiShoppingBasketLine} from 'react-icons/ri'
export class Item extends Component {
  render() {
    return (
        <div className="item">
        <div className="photoram">
          <img src={this.props.item.image} className="img"/>
          <div>
            <div className="title">{this.props.item.title}</div>
            <div className="price">{this.props.item.price} руб</div>
          </div>
        </div>
        <div className="contorder">
            <div className="order">
                <RiShoppingBasketLine className='imgorder' onClick={() => this.props.onAdd(this.props.item)}/>
            </div>
            <div className="full" onClick={() => this.props.onShowItem(this.props.item)}>подробнее</div>
        </div>
       
      </div>
    )
  }
}

export default Item