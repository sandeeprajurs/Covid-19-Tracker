import React, { Component } from "react";
import Popup from "reactjs-popup";
import "../../style/popUp.css";

class PopUpComponent extends Component {

    render() {
        return (
                <div id="myModal" class="modal" style={{ display: "block" }}>
                    <div class="modal-content">
                    <div class="close" onClick={this.props.closeModel}>&times;</div>
                    <h5>{this.props.data.country}</h5>
                    <div style={{ display: "inline-flex", width: "50%", margin:"auto" }}>
                        <div style={{ marginRight: "8%" }}>
                            <p>Total Cases: {this.props.data.cases}</p>
                            <p>Total Deaths: {this.props.data.deaths} </p>
                            <p>Recovered: {this.props.data.recovered} </p>
                        </div>
                        <div>
                            <p>Total Cases: {this.props.data.cases}</p>
                            <p>Total Deaths: {this.props.data.deaths} </p>
                            <p>Recovered: {this.props.data.recovered} </p>
                        </div>
                    </div>
    
                         {/* <span className="left-space">Todays Cases: {this.props.data.todayCases}</span></p>
                        <span className="left-space">Todays Deaths: {this.props.data.deaths}</span></p>
                        <span className="left-space">Critical: {this.props.data.critical}</span></p> */}
                    </div>
                </div>
            // <div>
            // 
            // <p>Total Cases : <span> 10000 </span> Total Death's : <span> 10000 </span></p>
            // <p>Total Cases : <span> 10000 </span> Total Death's : <span> 10000 </span></p>
            // <p>Total Cases : <span> 10000 </span> Total Death's : <span> 10000 </span></p>
            // </div>
        )
    }
}

export default PopUpComponent;