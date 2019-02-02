import React, {
  Component
} from 'react';
import AboutInf from '../components/aboutInf.js'
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[],
      type:''
    }
  }
  componentWillMount(){
    this.setState({
      type:this.props.match.params.type||''
    },()=>{
       this.getData()
    })
  }
  render() {
    return(
      <div className="about">
         <AboutInf list={this.state.list} test={this.test}></AboutInf>
      </div>
    );
  }
  
  getData(){
    let url = `/test.json?type=${this.state.type}`
    if(this.state.type === 2){
      url = `/test1.json?type=${this.state.type}`
    }
    axios.get(url)
    .then(res => {
      if(res.status === 200 && res.data.errorCode === 0){
        this.setState({
          list: res.data.items
        })
      }
    })
  }
  test(){
  }
}

export default App;