class MessageThread1 extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Thread 1: Hello from MessageThread1!");
        }
    }
}

class MessageThread2 extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Thread 2: Hello from MessageThread2!");
        }
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        MessageThread1 t1 = new MessageThread1();
        MessageThread2 t2 = new MessageThread2();

        t1.start(); // Start first thread
        t2.start(); // Start second thread
    }
}
