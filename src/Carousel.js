import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      active: 0,
    };
    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  handleIndexClick(event) {
    this.setState({
      active: +event.target.dataset.index,
    });
  }

  render() {
    const { active, photos } = this.state;
    console.log(active);
    console.log(photos);
    return (
      <div className="carousel">
        <img src={this.props.media[active].large} alt="animal" />
        <div className="carousel-smaller">
          {this.props.media.map((photo, index) => (
            <img
              key={photo.large}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo.large}
              className={index === active ? "active" : ""}
              animal="animal-thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
