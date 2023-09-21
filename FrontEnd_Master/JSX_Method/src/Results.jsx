import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets are found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              name={pet.name}
              bread={pet.bread}
              image={pet.image}
              location={`${location}`}
              key={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
