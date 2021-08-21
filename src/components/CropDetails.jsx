import React, { Component } from "react";
import axios from "axios";


// const URL = "http://localhost:5000";
const URL = "https://smartfarmgig.herokuapp.com/";
class CropDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
      step1: {},
      step2: {},
      step3: {},
      step4: {},
      step5: {},
      step6: {},
      step7: {},
    };
    this.getCrop = this.getCrop.bind(this);
  }

  componentDidMount() {
    
    this.getCrop();
  }

  getCrop = () => {
    const data = {
      productName: this.props.match.params.slug,
    };

    axios.post(URL + "/product", data).then((result) => {
      console.log(result)
      if (result) {
        let crop = result.data.response;
        this.setState({
          productName: crop.productName,
          step1: crop.step1,
          step2: crop.step2,
          step3: crop.step3,
          step4: crop.step4,
          step5: crop.step5,
          step6: crop.step6,
          step7: crop.step7,
        });
      }
    });
  };

  render() {
  
    const { step1, step2, step3, step4, step5, step6, step7, productName } =
      this.state;

    return (
      <div className="card mx-auto ">
        <div className="heading d-flex justify-content-center ">
          <h2>how to grow {productName}</h2>
        </div>
        <div className="card-body overflow-auto">
          <div>
            <h4 className="">{step1.title}</h4>
            <p>{step1.details}</p>
          </div>
          <div>
            <h4 className="">{step2.title}</h4>
            <p>{step2.details}</p>
          </div>
          <div>
            <h4 className="">{step3.title}</h4>
            <p>{step3.details}</p>
          </div>
          <div>
            <h4 className="">{step4.title}</h4>
            <p>{step4.details}</p>
          </div>
          <div>
            <h4 className="">{step5.title}</h4>
            <p>{step5.details}</p>
          </div>
          <div>
            <h4 className="">{step6.title}</h4>
            <p>{step6.details}</p>
          </div>
          <div>
            <h4 className="">{step7.title}</h4>
            <p>{step7.details}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CropDetails;
