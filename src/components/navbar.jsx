import React from 'react';

function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand text-light mr-4 col-2" href="#"><span style={{fontFamily:"Roboto, sans-serif",fontWeight:300,fontSize:"37px",letterSpacing:"5px"}}>Ash's</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
               </button>
               
               <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav col-10 mx-auto nav-pills">
                    <li class="nav-item active mx-1">
                       <a class="nav-link" href="Home"><div class="btn btn-outline-light border-dark">Home</div></a>
                    </li>
                    <li class="nav-item active mx-1">
                       <a class="nav-link" href="#"><div class="btn btn-outline-light border-dark">About</div></a>
                    </li>
                    <li class="nav-item active mx-1">
                       <a class="nav-link" href="#"><div class="btn btn-outline-light border-dark"></div></a>
                    </li>
                    <li class="nav-item active mx-1">
                       <a class="nav-link" href="#"><div class="btn btn-outline-light border-dark">My work</div></a>
                    </li>
                    <li class="nav-item active mx-1">
                       <a class="nav-link" href="#"><div class="btn btn-outline-light border-dark">Contact Me</div></a>
                    </li>
                   </ul>
                 </div>
            </nav> 
        </div>
    )
}

export default Navbar;