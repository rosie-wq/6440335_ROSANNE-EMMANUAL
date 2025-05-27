public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;
        System.out.println("Result of 10 + 5 * 2 = " + result1);

        int result2 = (10 + 5) * 2;
        System.out.println("Result of (10 + 5) * 2 = " + result2);


        int result3 = 100 / 5 + 3 * 4 - 6;
        System.out.println("Result of 100 / 5 + 3 * 4 - 6 = " + result3);
        int result4 = 100 / (5 + 5);
        System.out.println("Result of 100 / (5 + 5) = " + result4);
    }
}
