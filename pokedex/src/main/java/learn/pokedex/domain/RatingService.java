package learn.pokedex.domain;

import learn.pokedex.data.RatingRepository;
import org.springframework.stereotype.Service;

@Service
public class RatingService {

    private final RatingRepository repository;

    public RatingService(RatingRepository repository) {
        this.repository = repository;
    }

    public double findById(int id) {
        return repository.findById(id);
    }
}
