import React, { Component } from "react";
import getGlobalCount from "../../actions/getGlobalCount.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../../style/global.css";

class Global extends Component{

    componentWillMount(){
        this.props.getGlobalCount();
    }

    render(){
        console.log(this.props.updtGlobalCount);
        return(
        <div style={{ display: "inline-flex"}}>
            <div class="card cards-custom" >
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Global</h6>
                    <h5 class="card-title">COVID-19 cases</h5>
                    <h5 class="card-text">{this.props.updtGlobalCount.cases}</h5>
                </div>
            </div>
            <div class="card cards-custom" >
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Global</h6>
                    <h5 class="card-title">Deaths</h5>
                    <h5 class="card-text">{this.props.updtGlobalCount.deaths}</h5>
                </div>
            </div>
            <div class="card cards-custom" >
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">Global</h6>
                <h5 class="card-title">Recovered</h5>
                <h5 class="card-text">{this.props.updtGlobalCount.recovered}</h5>
            </div>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getGlobalCount }, dispatch);
  }
  
const mapStateToProps = ({ updtGlobalCount }) => {
    return { updtGlobalCount };
}

export default connect(mapStateToProps, mapDispatchToProps)(Global);