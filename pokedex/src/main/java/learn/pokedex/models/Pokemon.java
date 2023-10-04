package learn.pokedex.models;

import java.util.Objects;

public class Pokemon {

    private int id;
    private String japaneseName;

    public Pokemon(int id, String japaneseName) {
        this.id = id;
        this.japaneseName = japaneseName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return japaneseName;
    }

    public void setName(String japaneseName) {
        this.japaneseName = japaneseName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pokemon pokemon = (Pokemon) o;
        return id == pokemon.id && Objects.equals(japaneseName, pokemon.japaneseName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, japaneseName);
    }
}
