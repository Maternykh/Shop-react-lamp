import React, { Component } from 'react'
import {RiDeleteBinLine} from 'react-icons/ri'
export class Order extends Component {
  render() {
    return (
      <div className='Order'>
        <div className="cors-item">
            <div className="cors-photoram">
                <img src={this.props.item.image} className="cors-img"/>
                <div>
                    <div className="cors-title">{this.props.item.title}</div>
                    <div className="cors-price">{this.props.item.price} руб</div>
                </div>
            </div>
            <div className="contdel" onClick={() => this.props.onDelete(this.props.item.id)}><RiDeleteBinLine className='del'/></div>
      </div>
      </div>
    )
  }
}

export default Order