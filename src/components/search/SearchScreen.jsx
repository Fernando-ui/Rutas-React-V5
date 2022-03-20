import { useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../../selectos/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    search: q,
  });

  const { search } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  };

  const heroesFiltered = useMemo(() => getHeroesByName(search), [q]);

  return (
    <>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row container">
        <div className="col-5">
          <h2>Search Form</h2>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="Find your hero"
              className="form-control"
              value={search}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn btn-primary"
              onSubmit={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results:</h4>
          <hr />
          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {
            q !== "" && heroesFiltered.length === 0 && 
            (
              <div className="alert alert-danger">No Existe el Heroe: {q}</div>
            )
          }
          {heroesFiltered.map((value) => {
            return <HeroCard key={value.id} {...value} />;
          })}
        </div>
      </div>
    </>
  );
};
