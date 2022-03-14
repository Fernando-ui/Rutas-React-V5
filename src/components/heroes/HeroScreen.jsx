import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroesById } from "../../selectos/getHeroById";

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const hero = getHeroesById(heroeId);
  if (!hero) {
    return <Redirect to="/" />;
  }
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  return (
    <>
      <h1> {superhero}</h1>
    </>
  );
};
