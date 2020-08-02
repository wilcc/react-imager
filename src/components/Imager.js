import React, { Component } from 'react';

class Imager extends Component {
  state = {
    images: [
      'images/1.jpg',
      'images/2.jpg',
      'images/3.jpg',
      'images/4.jpg',
      'images/5.jpg',
      'images/6.jpg',
      'images/7.jpg',
      'images/8.jpg',
      'images/9.jpg',
      'images/10.jpg',
      'images/11.jpg',
      'images/12.jpg',
    ],
    mainImage: 'images/1.jpg',
  };
  handleRandom = () => {
    let num = Math.ceil(Math.random() * Math.floor(12));
    this.setState({
      mainImage: `images/${num}.jpg`,
    });
  };
  handleLeft = () => {
    const img = this.state.mainImage;
    let num = img.slice(img.indexOf('/') + 1, img.indexOf('.')) - 1;
    let newNum = num === 0 ? 12 : num;
    this.setState({
      mainImage: `images/${newNum}.jpg`,
    });
  };
  handleRight = () => {
    const img = this.state.mainImage;
    let num = Number(img.slice(img.indexOf('/') + 1, img.indexOf('.'))) + 1;
    let newNum = num === 13 ? 1 : num;
    this.setState({
      mainImage: `images/${newNum}.jpg`,
    });
  };
  handleImage =(src) => {
    this.setState({
        mainImage: src
    })
  }
  render() {
    return (
      <div>
        <div className="ui header huge" style={{ textAlign: 'center' }}>
          Imager
        </div>
        <div
          className="ui segment"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'row',
          }}
        >
          <img
            src={this.state.mainImage}
            alt=""
            className="ui fluid large image"
          />
        </div>
        <div className="ui container">
          <div style={{ float: 'left' }}>
            <button onClick={this.handleRandom} className="ui button primary">
              Random
            </button>
          </div>
          <div style={{ float: 'right' }}>
            <button onClick={this.handleLeft} className="ui button primary">
              {' '}
              <i className="angle left icon"></i>
            </button>
            <button onClick={this.handleRight} className="ui button primary">
              <i className="angle right icon"></i>
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div
          className="ui medium images"
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto',
            gridTemplateRows: 'auto',
            justifyContent: 'center',
            columnGap:'5%',
            rowGap:'5%'
          }}
        >
          {this.state.images.map((image, idx) => {
            return (
              <div key={idx} className="ui image">
                <img
                onClick={()=>{this.handleImage(image)}}
                  src={image}
                  alt="..."
                  style={{ width: '300px', height: '300px' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Imager;
