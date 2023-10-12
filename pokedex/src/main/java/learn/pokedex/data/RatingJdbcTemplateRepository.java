package learn.pokedex.data;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class RatingJdbcTemplateRepository implements RatingRepository{

    private final JdbcTemplate jdbcTemplate;

    public RatingJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public double findById(int id) {

        final String sql = """
                select ifnull(round(avg(rating), 2), 0) as rating
                from ratings
                where id = ?;
                """;

        return jdbcTemplate.queryForObject(sql, Double.class, id);
    }

}
