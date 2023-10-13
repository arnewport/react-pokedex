package learn.pokedex.data;

import learn.pokedex.data.mappers.AppUserMapper;
import learn.pokedex.models.AppUser;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class AppUserJdbcTemplateRepository implements AppUserRepository {

    private final JdbcTemplate jdbcTemplate;

    public AppUserJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    @Transactional
    public AppUser findByUsername(String username) {

        String sql = """
                select 
                     u.app_user_id,
                     u.username,
                     u.password_hash,
                     u.enabled
                from app_user u
                where u.username = ?;
                """;
        return jdbcTemplate.query(sql, new AppUserMapper(getAuthorities(username)), username).stream()
                .findFirst().orElse(null);
    }

    @Override
    public AppUser add(AppUser appUser) {
        return null;
    }

    private List<String> getAuthorities(String username) {
        final String sql = """
                select 
                    r.name
                from app_role r
                inner join app_user_role ur on ur.app_role_id = r.app_role_id
                inner join app_user u on u.app_user_id = ur.app_user_id
                where u.username = ?;
                """;
        return jdbcTemplate.query(sql, (rs, i) -> rs.getString("name"), username);
    }
}
