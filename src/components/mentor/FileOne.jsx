import React, { Fragment } from "react";
import { loadApi } from "./api";

export default class Nearby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: "",
      pageloaded: false,
    };
  }
  // async componentDidMount() {
  //   const url = "https://api.sidebox.com/plugin/nearbyserviceareareviewcombo?storefronttoken=4cbcb86c-04ae-4949-af96-cd39efb25ab9'";
  //   const response = await fetch(url);
  //   const data =await response.json();
  //   this.setState({ html: data.results[0], loading: false  });
  // }
  componentDidMount() {
    this.loadApi();
  }

  loadApi = () => {
    this.setState({
      loading: true,
    });
    loadApi()
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        this.setState(
          {
            loading: false,
          },
          () => {
            setTimeout(() => {
              this.setState({
                pageloaded: true,
              });
            }, 100);
          }
        );

        console.log("called api");
      });
  };

  render() {
    const { data, loading, pageloaded } = this.state;

    return (
      <Fragment>
        {!loading && (
          <Fragment>
            <div dangerouslySetInnerHTML={{ __html: data }} />
            {pageloaded && (
              <Fragment>
                <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
                
              <script src="https://d2gwjd5chbpgug.cloudfront.net/v3/scripts/heatmap.min.js"></script>
              </Fragment>
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}
