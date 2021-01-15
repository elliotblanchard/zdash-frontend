import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import roundedBox from '../nivostyles/roundedBox.js'
import cols from '../nivostyles/cols.js'
import breakpoints from '../nivostyles/breakpoints.js'
import { Responsive, WidthProvider } from 'react-grid-layout'

// Handles the responsive nature of the grid
const ResponsiveGridLayout = WidthProvider(Responsive)

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

 const AccountDetail = (accountDetail) => {
  const firstDateObject = new Date(accountDetail.accountDetail.firstSeen * 1000)
  const firstLongDate = `${firstDateObject.toLocaleString("en-US", {timeZone: "Europe/London"}, {month: "numeric"})}`
  const firstShortDate = firstLongDate.split(",")[0]

  const lastDateObject = new Date(accountDetail.accountDetail.lastSeen * 1000)
  const lastLongDate = `${lastDateObject.toLocaleString("en-US", {timeZone: "Europe/London"}, {month: "numeric"})}`
  const lastShortDate = lastLongDate.split(",")[0]  

  const recvTransShort = truncateArray(accountDetail.accountDetail.recvTrans)
  const sentTransShort = truncateArray(accountDetail.accountDetail.sentTrans)
  
  return (
        <div>
            <Navbar variant="dark" expand="lg">    
                <Navbar.Brand href="/">                  
                    Address: {accountDetail.accountDetail.address} 
                </Navbar.Brand>                      
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
                  <h1>{numberWithCommas(parseFloat(accountDetail.accountDetail.balance).toFixed(4))}</h1>
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
                  <h1>{numberWithCommas(parseFloat(accountDetail.accountDetail.minedCount).toFixed(4))}</h1>
                </div>                
                <div style={roundedBox}
                  className="grid-cell"
                  key="5"
                  data-grid={{ x: 0, y: 1, w: 1, h: 1 }}
                >
                  <p>Total recieved</p>
                  <h1>{numberWithCommas(parseFloat(accountDetail.accountDetail.totalRecv).toFixed(4))}</h1>
                </div>  
                <div style={roundedBox}
                  className="grid-cell"
                  key="6"
                  data-grid={{ x: 1, y: 1, w: 1, h: 1 }}
                >
                  <p>Recieved count</p>
                  <h1>{numberWithCommas(parseFloat(accountDetail.accountDetail.recvCount).toFixed(4))}</h1>
                </div>                  
                <div style={roundedBox}
                  className="grid-cell"
                  key="7"
                  data-grid={{ x: 2, y: 1, w: 1, h: 1 }}
                >
                  <p>Total sent</p>
                  <h1>{numberWithCommas(parseFloat(accountDetail.accountDetail.totalSent).toFixed(4))}</h1>
                </div>     
                <div style={roundedBox}
                  className="grid-cell"
                  key="8"
                  data-grid={{ x: 3, y: 1, w: 1, h: 1 }}
                >
                  <p>Sent count</p>
                  <h1>{numberWithCommas(parseFloat(accountDetail.accountDetail.sentCount).toFixed(4))}</h1>
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

 export default AccountDetail 