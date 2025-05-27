public class Example {
    public int square(int x) {
        return x * x;
    }

    public static void main(String[] args) {
        Example e = new Example();
        int result = e.square(5);
        System.out.println("Result: " + result);
    }
}
