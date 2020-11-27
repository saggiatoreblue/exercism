public class Twofer {
    public String twofer(String name) {
        name = (name == null) ? "you" : (name == "") ? "" : name;
        return "One for "+name+", one for me.";
    }
}
