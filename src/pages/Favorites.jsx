import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p> Vous n'avez pas de favoris</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <div className="Favorites">
      <h1>My Favorites</h1>
      {content}
    </div>
  );
};

export default Favorites;
