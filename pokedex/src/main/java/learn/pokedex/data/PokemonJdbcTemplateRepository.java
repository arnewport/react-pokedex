package learn.pokedex.data;

import learn.pokedex.data.mappers.PokemonMapper;
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
    public Pokemon findById(int id) {

        final String sql = """
                select ifnull(round(avg(r.rating), 2), 0) as averaged_rating,
                p.id,
                p.japanese_name
                from pokemon p
                left join ratings r on p.id = r.id
                where p.id = ?;
                """;

        return jdbcTemplate.query(sql, new PokemonMapper(), id).stream()
                .findFirst().orElse(null);
    }

    @Override
    public int addRating(int id, int rating) {

        final String sql = """
                insert into ratings (id, rating)
                values (?, ?);
                """;

        return jdbcTemplate.update(sql, id, rating);
    }
}
