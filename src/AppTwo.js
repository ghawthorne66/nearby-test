import React from 'react';



export default class NearbyNow extends React.Component {
  state = {
    loading: true,
    person: null
    
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data =await response.json();
    this.setState({ person: data.results[0], loading: false  });
  }

  render() {
  return (


  <div>{this.state.loading || !this.state.person ? (
    <div>loading...</div> 
  ) : (

    <>
    <div>{this.state.person.name.first}</div>
    <div>{this.state.person.name.last}</div>
    <img src={this.state.person.picture.large} />
    </>
    )}
  </div>
  );
  }

}




// <script
//             src="https://s3.amazonaws.com/reviewcloud/widget/v1/reviews.min.js"
//             data-key="4cbcb86c-04ae-4949-af96-cd39efb25ab9"
//             data-tech="john@yourdomain.com"
//             data-container="tech-reviews"
//             data-type="full"
//             data-count="10">
//         </script>
