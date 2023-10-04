package learn.pokedex.data.mappers;

import learn.pokedex.models.Pokemon;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PokemonMapper implements RowMapper<Pokemon> {

    @Override
    public Pokemon mapRow(ResultSet resultSet, int i) throws SQLException {
        Pokemon pokemon = new Pokemon();
        pokemon.setId(resultSet.getInt("id"));
        pokemon.setJapaneseName(resultSet.getString("japanese_name"));

        return pokemon;
    }
}
