import React from 'react';

export default class CityInfo extends React.Component {
  render() {
    return (
      <div className='city col-sm-6' id='info'>
        <div className='card'>
          <div className='card-header'>
            <div>City Information</div>
          </div>
          <div className='card-body'>
            <div className='row currCity'>
              <div className='row align-item-center'>
                <div className='col'>
                  <p>Tokyo</p>
                  <p>coordinates</p>
                </div>
              </div>
            </div>
            <div className='row firstRow'>
              <div className='row align-item-center'>
                <div className='col'>
                  <p>Temperature (F)</p>
                  <p>6</p>
                </div>
                <div className='col'>
                  <p>Pressure</p>
                  <p>6</p>
                </div>
                <div className='col'>
                  <p>Humidity</p>
                  <p>6</p>
                </div>
              </div>
            </div>
            <div className='row secondRow'>
              <div className='row align-item-center'>
                <div className='col'>
                  <p>Lowest Temp (F)</p>
                  <p>6</p>
                </div>
                <div className='col'>
                  <p>Highest Temp (F)</p>
                  <p>6</p>
                </div>
                <div className='col'>
                  <p>Wind Speed</p>
                  <p>6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
