import React from 'react';

import Storage from './components/Storage';

import logo from './static/images/logo.svg';

function App() {
  return (
    <div className='App'>
      <div className='options'>
        <div className='options__logo'>
          <img src={logo} alt='Fylo logo' />
        </div>

        <div className='options__controls'>
          <div className='options__controls--file'>
            <svg xmlns='http://www.w3.org/2000/svg' width={20} height={24}>
              <path
                fill='#697ED4'
                d='M12.028 0H2.436A2.387 2.387 0 00.049 2.398L.037 21.583a2.387 2.387 0 002.387 2.398h14.4a2.397 2.397 0 002.398-2.398V7.194L12.028 0zM10.83 8.393V1.8l6.595 6.594h-6.595z'
              />
            </svg>
          </div>

          <div className='options__controls--folder'>
            <svg xmlns='http://www.w3.org/2000/svg' width={24} height={20}>
              <path
                fill='#697ED4'
                d='M21.6 2.4H12L9.6 0H2.4A2.39 2.39 0 00.012 2.4L0 16.8a2.4 2.4 0 002.4 2.4h19.2a2.4 2.4 0 002.4-2.4v-12a2.4 2.4 0 00-2.4-2.4z'
              />
            </svg>
          </div>

          <div className='options__controls--upload'>
            <svg xmlns='http://www.w3.org/2000/svg' width={24} height={16}>
              <path
                fill='#697ED4'
                d='M19.4 6c-.7-3.4-3.7-6-7.4-6-2.9 0-5.4 1.6-6.6 4C2.3 4.4 0 6.9 0 10c0 3.3 2.7 6 6 6h13c2.8 0 5-2.2 5-5 0-2.6-2.1-4.8-4.6-5zM14 9v4h-4V9H7l5-5 5 5h-3z'
              />
            </svg>
          </div>
        </div>
      </div>

      <Storage />
    </div>
  );
}

export default App;
