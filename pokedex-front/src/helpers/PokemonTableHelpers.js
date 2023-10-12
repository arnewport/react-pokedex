export const alterPosition = (position, incrementor) => {
    position = position + incrementor;
    position = (position > 142) ? 142 : (position < 1) ? 1 : position;
    return position;
}

export const displayPokemonNumber = (number) => {
    number = (number < 10) ? "#00" + number : (number < 100) ? "#0" + number : "#" + number;
    return number;
}

export const displayCapitalizedName = (name) => {
    name = name.charAt(0).toUpperCase() + name.substring(1, name.length)
    return name;
}

export const displayPokemonTypes = (types) => {
    let type1, type2;
    if (types.length === 2) {
        type1 = types[0].type.name;
        type2 = types[1].type.name;
    } else {
        type1 = types[0].type.name;
    }

    if (!type2) {
        return displayCapitalizedName(type1);
    }
    return (
        <div>
          {displayCapitalizedName(type1)}
          <br />
          <br />
          {displayCapitalizedName(type2)}
        </div>
      );
}