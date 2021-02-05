import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import roundedBox from '../nivostyles/roundedBox.js'
import cols from '../nivostyles/cols.js'
import breakpoints from '../nivostyles/breakpoints.js'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/fetchUsers'
import Spinner from 'react-bootstrap/Spinner'

function numberWithCommas(x) {
  return (x + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
    return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
  });
}

function truncateArray(arr) {
  if (arr) {
    if (arr.length > 6) {
      arr.length = 6
    }
    return arr
  } else {
    return []
  }
}

function loadingSpinner(loading,accountDetail) {
	if (loading.loading === true) {
		return (<Spinner animation="border" variant="light" />)
	} else {
		return (`Address: ${accountDetail.address}`)
	}
}
class AccountDetail extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
    }
  }  
  
  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchUsers(this.state.name, this.props.accountDetail.address)
  }

  render() {
    // Handles the responsive nature of the grid
    const ResponsiveGridLayout = WidthProvider(Responsive)

    const firstDateObject = new Date(this.props.accountDetail.firstSeen * 1000)
    const firstLongDate = `${firstDateObject.toLocaleString("en-US", {timeZone: "Europe/London"}, {month: "numeric"})}`
    const firstShortDate = firstLongDate.split(",")[0]
  
    const lastDateObject = new Date(this.props.accountDetail.lastSeen * 1000)
    const lastLongDate = `${lastDateObject.toLocaleString("en-US", {timeZone: "Europe/London"}, {month: "numeric"})}`
    const lastShortDate = lastLongDate.split(",")[0]  
  
    const recvTransShort = truncateArray(this.props.accountDetail.recvTrans)
    const sentTransShort = truncateArray(this.props.accountDetail.sentTrans)
    

    return (
        <div>
            <Navbar variant="dark" expand="lg">    
                <Navbar.Brand href="/">                  
                  {loadingSpinner(this.props.loading,this.props.accountDetail)} 
                </Navbar.Brand> 
                <Navbar.Collapse className="justify-content-end">
                <Form inline onSubmit={ event => this.handleSubmit(event) } >
                  <FormControl type="text" placeholder="Set name" className="mr-sm-2" onChange={this.handleChange} value={this.state.name} />
                  <Button variant="primary" type="submit">Set</Button>
                </Form>                   
              </Navbar.Collapse>                                      
            </Navbar>           
            <ResponsiveGridLayout
            breakpoints={breakpoints}
            cols={cols}
            >             
                <div style={roundedBox}
                  className="grid-cell"
                  key="1"
                  data-grid={{ x: 0, y: 0, w: 1, h: 1 }}
                >
                  
                  <p>Balance</p>
                  <h1>{numberWithCommas(parseFloat(this.props.accountDetail.balance).toFixed(4))}</h1>
                </div>  
                <div style={roundedBox}
                  className="grid-cell"
                  key="2"
                  data-grid={{ x: 1, y: 0, w: 1, h: 1 }}
                >
                  <p>First seen</p>
                  <h1>{firstShortDate}</h1>
                </div>     
                <div style={roundedBox}
                  className="grid-cell"
                  key="3"
                  data-grid={{ x: 2, y: 0, w: 1, h: 1 }}
                >
                  <p>Last seen</p>
                  <h1>{lastShortDate}</h1>
                </div>    
                <div style={roundedBox}
                  className="grid-cell"
                  key="4"
                  data-grid={{ x: 3, y: 0, w: 1, h: 1 }}
                >
                  <p>Mined count</p>
                  <h1>{numberWithCommas(parseFloat(this.props.accountDetail.minedCount).toFixed(4))}</h1>
                </div>                
                <div style={roundedBox}
                  className="grid-cell"
                  key="5"
                  data-grid={{ x: 0, y: 1, w: 1, h: 1 }}
                >
                  <p>Total recieved</p>
                  <h1>{numberWithCommas(parseFloat(this.props.accountDetail.totalRecv).toFixed(4))}</h1>
                </div>  
                <div style={roundedBox}
                  className="grid-cell"
                  key="6"
                  data-grid={{ x: 1, y: 1, w: 1, h: 1 }}
                >
                  <p>Recieved count</p>
                  <h1>{numberWithCommas(parseFloat(this.props.accountDetail.recvCount).toFixed(4))}</h1>
                </div>                  
                <div style={roundedBox}
                  className="grid-cell"
                  key="7"
                  data-grid={{ x: 2, y: 1, w: 1, h: 1 }}
                >
                  <p>Total sent</p>
                  <h1>{numberWithCommas(parseFloat(this.props.accountDetail.totalSent).toFixed(4))}</h1>
                </div>     
                <div style={roundedBox}
                  className="grid-cell"
                  key="8"
                  data-grid={{ x: 3, y: 1, w: 1, h: 1 }}
                >
                  <p>Sent count</p>
                  <h1>{numberWithCommas(parseFloat(this.props.accountDetail.sentCount).toFixed(4))}</h1>
                </div>     
                <div style={roundedBox}
                  className="grid-cell"
                  key="9"
                  data-grid={{ x: 0, y: 2, w: 4, h: 2 }}
                >
                  <p>Recent transactions recieved</p>
                  { recvTransShort.map((trans, index) => (
                            
                            <h4>{trans.hash}</h4>
                      ))
                    }                  
                </div>                   
                <div style={roundedBox}
                  className="grid-cell"
                  key="10"
                  data-grid={{ x: 0, y: 4, w: 4, h: 2 }}
                >
                  <p>Recent transactions sent</p>
                  { sentTransShort.map((trans, index) => (
                            
                            <h4>{trans.hash}</h4>
                      ))
                    }                  
                </div>                                                                                                
            </ResponsiveGridLayout>                         
        </div>
      )
    }
 }

 export default connect(null,{fetchUsers})(AccountDetail)