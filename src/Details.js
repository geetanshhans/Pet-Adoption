import React from "react";
import Pet from "./Pet";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showModal: false,
    };
  }

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        url: animal.url,
        animal: animal.type,
        location: `${animal.contact.address.city},${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    });
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);
  render() {
    if (this.state.loading) {
      return <h1>Loading......</h1>;
    }
    const {
      name,
      animal,
      breed,
      location,
      description,
      media,
      showModal,
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} -${location}`}</h2>
        <button onClick={this.toggleModal}>Adopt {name}</button>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <h1>Would you like to adopt {name}?</h1>
            <div className="buttons">
              <button onClick={this.adopt}>Yes</button>
              <button onClick={this.toggleModal}>No, I am a monster</button>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default function DetailswithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
