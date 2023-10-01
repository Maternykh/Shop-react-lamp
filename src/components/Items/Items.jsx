import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
   
  render() {
    return (
        <div className="items">
        <div className="air" id="air">ы</div>
        {this.props.items.map(el => (
            <Item key={el.id} item={el} onAdd={this.props.onAdd} onShowItem={this.props.onShowItem}/>
        ))}
      </div>
    )
  }
}

export default Items