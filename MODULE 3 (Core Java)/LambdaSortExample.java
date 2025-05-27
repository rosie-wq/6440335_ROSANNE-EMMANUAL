import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaSortExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Zara");
        names.add("Amit");
        names.add("Priya");
        names.add("Rohan");
        names.add("Meera");
        Collections.sort(names, (a, b) -> a.compareTo(b));
        System.out.println("Sorted list of names:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}
