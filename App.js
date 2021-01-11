import React, { Component } from 'react';

import {Search} from './components/search'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appBI0sFzvUGyzo9d/favorites?api_key=key8Lbu6Hz24Ww9Z6')
    .then((resp) => resp.json())
    .then(data => {
      this.setState({ movies: data.records });
    }).catch(err => {
      // Error :(
    });
  }

  render() {
    return (
      <div className="business-listings">
              {this.state.movies.map(movie => <BusinessCard {...movie.fields} /> )}
      </div>
    );
  }
}



export default App;

const BusinessCard = ({ title, service, marketSegment, serviceArea, imageURL, certificates, tag }) => (
<Search/> 



    <div className="business-card" >
    <div className="{tag}"> </div>
     <div className="logo-holder">
    <img className="logo" src={imageURL[0].url} alt="Business Logo" /> </div>
    <div className="business-data">
      <h5 className="business-title">{title}</h5>
      <p className="business-service"><span class="material-icons">construction</span>{service}</p>
      <p className="business-market-segment"><span class="material-icons">location_city</span>{marketSegment}</p>
     <p className="business-service-area"><span class="material-icons">location_on</span>{serviceArea}</p>
      <div className="business-certificates"><p className="certificates">{certificates}</p></div>

    </div>
  </div>
)

const domContainer = document.querySelector('#react-list');
ReactDOM.render(e(BusinessCard), domContainer);
