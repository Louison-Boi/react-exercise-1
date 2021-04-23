import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const MeetupItems = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatusHanddler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img className={classes.image} src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHanddler}>
            {itemIsFavorite ? "Remove to Favorite" : "To Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItems;
