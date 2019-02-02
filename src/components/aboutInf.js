import React from 'react';

class AboutInf extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    const list = this.props.list;
    const listView = list.map((item, index)=> {
      return <img src={item.profilephoto} alt="图片" key={index} onClick={this.test.bind(this)}/>
    })
    return (
        <div>
          {listView}
        </div>
    );
  }
  
  test(){
    this.props.test && this.props.test()
  }
}

export default AboutInf;
