package ajax;

/**
 * Composer
 * 
 * @author rayonne
 */
public class Composer {
    private String id;
    private String fisrtName;
    private String lastName;
    private String category;

    public Composer(String id, String fisrtName, String lastName, String category) {
        this.id = id;
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.category = category;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFisrtName() {
        return this.fisrtName;
    }

    public void setFisrtName(String fisrtName) {
        this.fisrtName = fisrtName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCategory() {
        return this.category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

}