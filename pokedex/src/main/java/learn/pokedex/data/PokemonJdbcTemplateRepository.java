package learn.pokedex.data;

import learn.pokedex.models.Pokemon;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class PokemonJdbcTemplateRepository implements PokemonRepository  {

    private final JdbcTemplate jdbcTemplate;

    public PokemonJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Pokemon> findAll() {
        final String sql = "select id, japanese_name"
                + "from pokemon;";
        return jdbcTemplate.query(sql, new PokemonMapper());
    }

    @Override
    public Pokemon findById(int pokemonId) {

        final String sql = "select id, japanese_name"
                + "from pokemon "
                + "where pokemon_id = ?;";

        Pokemon pokemon = jdbcTemplate.query(sql, new PokemonMapper(), pokemonId).stream()
                .findFirst().orElse(null);

        return pokemon;
    }

}
