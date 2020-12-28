import React from 'react'
import {connect} from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import Navbar from 'react-bootstrap/Navbar'
import {Route} from 'react-router-dom'
import {fetchAccountDetail} from '../actions/fetchAccountDetail'
import AccountDetail from '../components/AccountDetail'

class AccountDetailContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchAccountDetail(this.props.match.params.id)
    }

    handleLoading = () => {
        if( (this.props.accountDetail.loading) || (!this.props.accountDetail.accountDetail) || (this.props.accountDetail.accountDetail.length === 0) ) {           
          return (
            <div>
                <Navbar variant="dark" expand="lg">
                    <Spinner animation="border" variant="light" />
                </Navbar>
            </div>
            )
        } else {
          return (
            <div>
                {/* Why does prop have to be doubled? */}
                <AccountDetail accountDetail={this.props.accountDetail.accountDetail}/>
            </div>
          )
        }
    }

    render() {
        return (
            <div>
                {this.handleLoading()}
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        accountDetail: state.accountDetail
    }
}

export default connect(mapStateToProps, {fetchAccountDetail})(AccountDetailContainer)