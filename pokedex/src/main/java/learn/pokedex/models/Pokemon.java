package learn.pokedex.models;

import java.util.Objects;

public class Pokemon {
    /*
    public Pokemon() {
    }
     */

    private int id;
    private String japaneseName;

    /*
    public Pokemon(int id, String japaneseName) {
        this.id = id;
        this.japaneseName = japaneseName;
    }
     */

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
