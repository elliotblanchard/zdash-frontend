import React from 'react'
import {Route, Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header class="blog-header py-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                    <div class="col-4 pt-1">
                        <span class="text-muted">Subscribe</span>
                    </div>
                    <div class="col-4 text-center">
                        <span class="blog-header-logo text-dark">Large</span>
                    </div>
                    <div class="col-4 d-flex justify-content-end align-items-center">
                        <span class="btn btn-sm btn-outline-secondary">Sign up</span>
                    </div>
                </div>
            </header>            
            <div class="nav-scroller py-1 mb-2">
                 <nav class="nav d-flex justify-content-between">
                    <Link class="p-2 text-muted" to={`/`}>Transactions</Link>             
                    <Link class="p-2 text-muted" to={`/accounts`}>Accounts</Link>
                    <Link class="p-2 text-muted" to={`/network`}>Network</Link>  
                </nav>
            </div>                          
        </div>
    )
 }

 export default Navbar