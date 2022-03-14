import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { getImage } from "../../helpers/getImage";
import { getHeroesById } from "../../selectos/getHeroById";

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();
  const hero = getHeroesById(heroeId);
  if (!hero) {
    return <Redirect to="/" />;
  }
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  console.log(history);

  const handleReturn = () => {
    history.goBack();
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-5">
          <img src={getImage(id)} alt={superhero} className="img-thumbnail" />

          <div className="col-8">
            <h3>{superhero}</h3>
            <span>
              {" "}
              <b>Alter Ego:</b>
              {alter_ego}
            </span>
            <span>
              {" "}
              <b>Publisher:</b>
              {publisher}
            </span>
            <span>
              {" "}
              <b>Personajes:</b>
              {characters}
            </span>
          </div>
          <button className="btn btn-info" onClick={() => handleReturn()}>
            Return
          </button>
        </div>
      </div>
    </>
  );
};
