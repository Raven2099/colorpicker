class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: null,
      isColorListVisible: false,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isColorListVisible: !prevState.isColorListVisible,
    }));
  };

  handleColorClick = (color) => {
    this.setState({
      selectedColor: color,
      isColorListVisible: false,
    });
  };

  render() {
    const { colors } = this.props;
    const { selectedColor, isColorListVisible } = this.state;

    return (
      <div className="color-picker">
        <button onClick={this.toggleColorList}>Pick a color</button>
        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => this.handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <p>Selected color: {selectedColor}</p>
        )}
      </div>
    );
  }
}

export default ColorPicker;