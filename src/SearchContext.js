import React from "react";

/*
createContext() ==> React would create two components for you
a provider component and a consumer component
1/ The provider is going to make everything available undernesth it
2/ Consumer component is gonna be read from the provider 

Like the provider is the enter and the consumer is the exit 
*/

/**
 * React.createContext is used to initialise the context and it's passed the initial value;
 * it returns an object with a Provider and a Consumer
 * Providers and consumers come in pairs, that is, for each provider,
 * there is a corresponding consumer
 */
const SearchContext = React.createContext({
  location: "Seattle, WA",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
