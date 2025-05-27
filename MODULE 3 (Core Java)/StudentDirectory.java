import java.util.HashMap;
import java.util.Scanner;

public class StudentDirectory {
    public static void main(String[] args) {
        HashMap<Integer, String> studentMap = new HashMap<>();
        Scanner scanner = new Scanner(System.in);
        char choice;

        do {
            System.out.print("Enter student ID (integer): ");
            int id = scanner.nextInt();
            scanner.nextLine(); 

            System.out.print("Enter student name: ");
            String name = scanner.nextLine();

            studentMap.put(id, name);

            System.out.print("Do you want to add another student? (y/n): ");
            choice = scanner.nextLine().toLowerCase().charAt(0);
        } while (choice == 'y');

        System.out.print("\nEnter a student ID to retrieve the name: ");
        int searchId = scanner.nextInt();

        if (studentMap.containsKey(searchId)) {
            System.out.println("Student Name: " + studentMap.get(searchId));
        } else {
            System.out.println("Student ID not found.");
        }

        scanner.close();
    }
}
