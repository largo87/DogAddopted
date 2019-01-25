import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});
class Results extends React.Component {
  constructor(props) {
    super(props);
    //Define the initiale state
    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    /* const promise = petfinder.breed.list({ animal: "bird" });
    promise.then(console.log, console.error);*/
    petfinder.pet
      .find({
        output: "full",
        location: "Seattle, WA"
      })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          //Give an object of thing that update
          //the first pets is the pets on   the initial state
          // the second pets is updated from the api
          pets: pets
        });
      });
  }
  render() {
    setTimeout(() => {
      this.setState({ name: "Welcome to my web site" });
    }, 2000);

    return (
      <div className="search">
        <h1>{this.state.name}</h1>
        <h2>{this.state.id}</h2>
        {/** Transform a pets data to a pet component, this why we use map()*/}
        {this.state.pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
        {/* <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre> */}
      </div>
    );
  }
}

export default Results;
