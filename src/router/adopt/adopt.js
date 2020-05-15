import React from 'react';
import config from '../../config/config';


class Adopt extends React.Component {
  state = {
    people: [],
    pets: [],
    currentPet: {},
    currentHuman: 0,
  }

  renderPets = (currentPet) => {
    return(
      <div className="pet-info">
        <img src={currentPet.imageURL} />
        <p>Name: {currentPet.name}</p>
        <p>Age: {currentPet.age}</p>
        <p>Breed: {currentPet.breed}</p>
        <p>Gender: {currentPet.gender}</p>
        <p>Description: {currentPet.description}</p>
        <p>Story: {currentPet.story}</p>

        
      </div>
    )
  }

//   componentDidMount() {
//     Promise.all([
//       fetch(`${config.API_ENDPOINT}/people`),
//       fetch(`${config.API_ENDPOINT}/pets`)
//     ])
//     .then(([people, pets]) => {
//       if(!people.ok)
//       return people.json().then((e) => promise.reject(e));
//       if(!pets.ok)
//       return pets.json().then((e) => promise.reject(e));

//       return promise.all(people.json(), pets.json())
//       .then(([people, pets]) => {
//         this.setState({people, pets})
//       })
//       .catch((error =>{
//         console.error({error})
//       })
//       )})
    
//   }


    
    
    
    render() {
      // const rendervalues = {people: this.state.people, pets: this.state.pets}  

      // const first pet = this.state.pet.pop();
        return (
               <div>
                   <section>
                       {/* this is the pet queue*/ }
                    </section>

                    <section>
                        {/* this is the human queue */}
                    </section>
                    
                    {/* if number === user's number, then provide an option to adopt */}
               </div>
        )
    }
}

export default Adopt;