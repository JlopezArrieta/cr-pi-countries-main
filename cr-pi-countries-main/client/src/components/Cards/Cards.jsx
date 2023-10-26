import style from "./Cards.module.css";
import Card from "../Card/Card";

function Cards({ countries }) {
  return (
    <div className={style.cardList}>
      {
        countries?.map((country) => {
          return (
            <Card
              key={country?.id}
              id={country?.id}
              name={country?.name}
              flagsImage={country?.flagsImage}
              continents={country?.continents}
              // population={country?.population}
            />
          );
        }
        )}

    </div>
  );
}

export default Cards;