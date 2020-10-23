import React, { Component } from 'react';

import '../static/styles/Storage.css';

class Storage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storage: 815,
    };
  }

  updateStorage = (e) => {
    this.setState(() => ({
      storage: e.target.value,
    }));
  };

  render() {
    return (
      <div className='storage'>
        <p className='storage--text'>
          You've used <span className='ammount'>{this.state.storage} GB</span>{' '}
          of your storage
        </p>

        <div className='storage__progress'>
          <input
            type='range'
            min='0'
            max='1000'
            value={this.state.storage}
            name='storage-ammount'
            id='storage-ammount'
            className='storage--range'
            onInput={this.updateStorage}
          />

          <div
            className='storage--progress'
            style={{ width: `calc(${this.state.storage * 0.1}% - 0.4rem)` }}
          ></div>
        </div>

        <div className='storage__capacity'>
          <p className='storage__capacity--start'>0 GB</p>

          <p className='storage__capacity--end'>1000 GB</p>
        </div>

        <div
          className='storage__indicator'
          style={
            this.state.storage === '1000'
              ? { backgroundColor: '#FFD2D2' }
              : { backgroundColor: '#ffffff' }
          }
        >
          <div
            className='storage__indicator--corner'
            style={
              this.state.storage === '1000'
                ? { backgroundColor: '#FFD2D2' }
                : { backgroundColor: '#ffffff' }
            }
          ></div>
          <p
            className='storage__indicator--text'
            style={
              this.state.storage === '1000'
                ? { color: '#D8000C' }
                : { color: '#000000' }
            }
          >
            <span
              className='ammount'
              style={
                this.state.storage === '1000'
                  ? { color: '#D8000C' }
                  : { color: '#000000' }
              }
            >
              {1000 - this.state.storage}
            </span>{' '}
            GB LEFT
          </p>
        </div>
      </div>
    );
  }
}

export default Storage;
