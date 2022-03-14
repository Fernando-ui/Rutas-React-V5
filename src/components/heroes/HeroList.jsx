import React from "react";
import { getHeroesByPublisher } from "../../selectos/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  
  const heroes = getHeroesByPublisher(publisher);
  
  return (
    <>
      <div className='card-columns'>
        {heroes.map(value => {
          return(

            // * Estaremos mandando todos los elementos de cada uno de los elementos
            <HeroCard key={value.id} {...value}/>
          )
        })}
        
        
      </div>
      
    </>
  );
};
