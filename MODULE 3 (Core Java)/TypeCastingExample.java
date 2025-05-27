public class TypeCastingExample {
    public static void main(String[] args) {
        double myDouble = 9.78;

        int myIntFromDouble = (int) myDouble;

        System.out.println("Original double value: " + myDouble);
        System.out.println("Double cast to int: " + myIntFromDouble);

        int myInt = 42;

        double myDoubleFromInt = myInt;

        System.out.println("Original int value: " + myInt);
        System.out.println("Int cast to double: " + myDoubleFromInt);
    }
}
