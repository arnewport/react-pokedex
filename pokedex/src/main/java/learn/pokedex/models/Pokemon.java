package learn.pokedex.models;

import java.util.Objects;

public class Pokemon {

    private int id;
    private String japaneseName;
    private double rating;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getJapaneseName() {
        return japaneseName;
    }

    public void setJapaneseName(String japaneseName) {
        this.japaneseName = japaneseName;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pokemon pokemon = (Pokemon) o;
        return id == pokemon.id && Double.compare(rating, pokemon.rating) == 0 && Objects.equals(japaneseName, pokemon.japaneseName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, japaneseName, rating);
    }
}
