package learn.pokedex.models;

import java.util.Objects;

public class Rating {

    private int id;
    private int rating;

    public int getId() {
        return id;
    }

    public int getRating() {
        return rating;
    }

    @Override
    public String toString() {
        return "Rating{" +
                "id=" + id +
                ", rating=" + rating +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Rating rating1 = (Rating) o;
        return id == rating1.id && rating == rating1.rating;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, rating);
    }
}
