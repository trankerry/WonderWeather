import React from 'react';

export default class SearchHistory extends React.Component {
  render() {
    return (
      <div className='searchHistory col-sm-6'>
        <div className='card'>
          <div className='card-header'>
            <div>Search History</div>
          </div>
          <div className='card-body'>
            <div className='row align-item-center'>
              <div className='col'>
                <p>Tokyo</p>
              </div>
            </div>
            <div className='row align-item-center'>l
                  <div className='col'>
                    <p>Tokyo</p>
                  </div>
            </div>
            <div className='row align-item-center'>
              <div className='col'>
                <p>Tokyo</p>
              </div>
            </div>
            <div className='row align-item-center'>
              <div className='col'>
                <p>Tokyo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

