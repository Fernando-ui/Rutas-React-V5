import React from "react";
import { getHeroesByPublisher } from "../../selectos/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {
  
  const heroes = getHeroesByPublisher(publisher);
  console.log(heroes,'Tenemos a los heroes');
  
  return (
    <>
      <ul>
        {heroes.map(value => {
          return(
            <li key={value.id}>
              {value.superhero}
            </li>
          )
        })}
      </ul>
      
    </>
  );
};
