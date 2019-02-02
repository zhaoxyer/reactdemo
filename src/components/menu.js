import React from 'react';
import { withRouter } from 'react-router-dom';
import { menu } from '../config/menu'
class Menu extends React.Component {
  constructor(){
    super();
    this.state = {
      active: 0,
			subactive: ''
    }
  }
  render() {
    const active = this.state.active
    const list = menu.map( (item, index) => {
      if(item.child){
        return (<div key={index} onClick={this.showSubMenu.bind(this, index)} className={(active === index?'active':'')}>{item.name}<ul className={"sub-menu " +(active === index?'show':'')} onClick={this.stopPro.bind(this)}>{item.child.map((item,index) => {
          return <li key={index} onClick={this.onPitch.bind(this, '', item.to)}>{item.name}</li>
        })}</ul></div>)
      }else{
       return  <div key={index} onClick={this.onPitch.bind(this, index, item.to)} className={(active === index?'active':'')}>{item.name}</div>
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
	
	onPitch(index,to){
		if(index!=='')this.showSubMenu(index)
		if(to)this.props.history.push(to)
		
	}
}
export default withRouter(Menu);