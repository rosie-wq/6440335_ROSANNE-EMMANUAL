//target class
public class Sample {
    public void greet(String name) {
        System.out.println("Hello, " + name);
    }

    private void secret() {
        System.out.println("This is a private method!");
    }
}

//reflection program
import java.lang.reflect.*;

public class ReflectDemo {
    public static void main(String[] args) {
        try {
            // Load the class dynamically
            Class<?> clazz = Class.forName("Sample");

            // Create an instance
            Object obj = clazz.getDeclaredConstructor().newInstance();

            // Get all declared methods
            Method[] methods = clazz.getDeclaredMethods();

            System.out.println("Methods in Sample class:");
            for (Method method : methods) {
                System.out.print("Method: " + method.getName() + ", Parameters: ");
                Class<?>[] params = method.getParameterTypes();
                for (Class<?> param : params) {
                    System.out.print(param.getName() + " ");
                }
                System.out.println();
            }

            // Invoke the public method 'greet'
            Method greetMethod = clazz.getMethod("greet", String.class);
            greetMethod.invoke(obj, "Reflection User");

            // Optional: invoke the private method
            Method secretMethod = clazz.getDeclaredMethod("secret");
            secretMethod.setAccessible(true); // allow access to private method
            secretMethod.invoke(obj);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
