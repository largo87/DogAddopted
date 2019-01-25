import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router/lib/history";
import Carousel from "./Carousel";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        const pet = data.petfinder.pet;
        let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }
        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed: breed,
          loading: false
        });
      })
      .catch(() => {
        navigate("/");
      });
  }
  render() {
    const {
      name,
      description,
      animal,
      breed,
      location,
      media,
      loading
    } = this.state;
    if (loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="details">
        <div>
          <Carousel media={media} />
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>

          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
