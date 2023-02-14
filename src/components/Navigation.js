import Image from 'next/image';
import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <nav className="navbar nav_bar navbar-expand-lg navbar-light pl-0 pr-0">
                    <a className="navbar-brand" href="#"> 
                        <Image className='mr-2' width={20} height={37.9} src="/images/group_copy_222.png" alt=""/>
                        Practice<span>Kea</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse navbar_list" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-3">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Blog</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="./contact-us.html">Contact</a>
                            </li>
                        </ul>
                        <div className="nav_btn">
                            <a href="#">Want to Partner?</a>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>
    );
}

export default Navigation;
