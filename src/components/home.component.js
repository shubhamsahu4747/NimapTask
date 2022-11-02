import React, { Component } from "react";
import UserService from "../services/user.service";
import { BsTwitter, BsFillHddNetworkFill, BsLinkedin, BsGithub } from "react-icons/bs";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }
  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }
  render() {

    return (
      <div className="container">
        <div className="row g-0">
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
  </ul>
  <p className="paragraph">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.
While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.
</p>
</div>
        </div>
        <div className="row g-0">
          <div className="col-sm-6 col-md-8">Made with &hearts;	By Shubham Sahu </div>
          <div className="col-6 col-md-4"><h5 className="allignLeft"> <BsFillHddNetworkFill/> {this.state.content}</h5></div>
          <div>
            <h3>
            <a className="fa" href="https://twitter.com/dev1_shubam"><BsTwitter/></a>
            <a className="fa" href="https://www.linkedin.com/in/shubham-kumar-3264941bb"><BsLinkedin/></a>
            <a className="fa" href="https://github.com/shubhamsahu4747"><BsGithub/></a>
            
            </h3>
          </div>
          
        </div>
      </div>
    );
  }
}

