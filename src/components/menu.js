import React from 'react';
import { Link } from 'react-router-dom';
import { menu } from '../config/menu'
class Menu extends React.Component {
  constructor(){
    super();
    this.state = {
      active: ''
    }
  }
  render() {
    const active = this.state.active
    const list = menu.map( (item, index) => {
      if(item.child){
        return (<div key={index} onClick={this.showSubMenu.bind(this, index)}>{item.name}<ul className={"sub-menu " +(active === index?'active':'')} onClick={this.stopPro.bind(this)}>{item.child.map((item,index) => {
          return <div key={index}><Link to={item.to}>{item.name}</Link></div>
        })}</ul></div>)
      }else{
       return  <div key={index}><Link to={item.to}>{item.name}</Link></div>
      } 
    });
    return(
      <div className="nav">
        {list}
      </div>
    );
  }
  showSubMenu(active){
    if(active === this.state.active){
      this.setState({
        active: ''
      })
      return
    }
    this.setState({
      active: active
    })
  }
  
  stopPro(e){
    e.stopPropagation()
  }
}
export default Menu;