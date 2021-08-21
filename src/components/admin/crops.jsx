import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";

//import Footer from "./footer/footer";

const URL = "http://localhost:5000";

class CropList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cropNames: [],
      offset: 0,
      perPage: 5,
      currentPage: 0,
    };
    this.getCrops = this.getCrops.bind(this);
  }

  componentDidMount() {
    this.getCrops();
  }
  getCrops = (e) => {
    axios.get(URL + "/crops").then((result) => {
      if (result) {
        let crops = result.data.response;

        const slice = crops.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );

        this.setState({
          //cropNames: crops,
          pageCount: Math.ceil(crops.length / this.state.perPage),
          cropNames: slice,
        });
      }
    });
  };

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.getCrops();
      }
    );
  };

  render() {
    const crop = this.state.cropNames;
    let match = this.props.match;
    return (
      <>
        <div className="searchBar d-flex justify-content-end">
          <form className="form-inline">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <h4 className="heading d-flex justify-content-cente">All crops</h4>

        <div className="table-responsive-sm">
          <table className="table">
            <thead>
              <th> Names</th>
              <th>Types</th>
              <th></th>
            </thead>
            {crop.map((crop, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td className="table-row">{crop.name}</td>
                    <td className="table-row">{crop.type}</td>
                    <td>
                      <Link to={`${match.url}/${crop.name}`} className="links">
                        Production Details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </>
    );
  }
}

export default withRouter(CropList);
