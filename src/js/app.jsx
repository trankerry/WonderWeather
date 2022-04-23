import React from 'react';
import CityInfo from './components/cityInfo/cityInfo';
import FavsBar from './components/favoritesBar/favsBar';
import SearchHistory from './components/searchHistory/searchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid d-flex h-100 p-3 mx-auto flex-column'>
        <header className='mb-auto'>
          <div className='inner'>
            <FavsBar />
          </div>
        </header>

        <main role='main' className='inner cover' id='home'>
          <section id='cover' style={ { height: '100vh' } }>
            <div className='middle'>
              <h1 className='cover-heading pt-5 text-white'>Wonder Weather</h1>
              <p className='text-white'>We take the wonder out of weather HAHAH</p>
              <input className='location' placeholder='Enter location' />
              <p className='lead'>
                <a href='#' className='btn btn-lg btn-secondary'>Find weather</a>
              </p>
            </div>
          </section>

          <CityInfo />

          <SearchHistory />
        </main>
      </div>
    );
  }
}
