import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showColors: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState(prevState => ({
      showColors: !prevState.showColors,
    }));
  }

  handleColorClick = (color) => {
    this.setState({
      selectedColor: color,
      showColors: false,
    });

    document.body.style.backgroundColor = color;
  }

  render() {
    const { colors } = this.props;
    const { showColors, selectedColor } = this.state;

    return (
      <div>
        <button className="center-button" onClick={this.toggleColorList}>Pick a color</button>
        {showColors && (
          <div className='cent'>
            {colors.map((color, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: color,
                  width: '50px',
                  height: '50px',
                  display: 'inline-block',
                  margin: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => this.handleColorClick(color)}
              />
            ))}
          </div>
        )}
        {selectedColor && (
          <div>
            
            <div
              style={{
                backgroundColor: selectedColor,
                width: '50px',
                height: '50px',
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;
