import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <img class="img-responsive" src="img/profile.png" alt=""></img>
                            <div class="intro-text">
                                <span class="name">Start Bootstrap</span>
                                <hr class="star-light">
                                    <span class="skills">Web Developer - Graphic Artist - User Experience Designer</span>
                                </hr>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
