import java.util.*;
import java.util.concurrent.*;

class MyTask implements Callable<String> {
    private final int taskId;

    public MyTask(int taskId) {
        this.taskId = taskId;
    }

    @Override
    public String call() throws Exception {
        Thread.sleep(100); // Simulate work
        return "Result from task " + taskId;
    }
}


public class ExecutorCallableDemo {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(5);
        List<Future<String>> futures = new ArrayList<>();

        for (int i = 1; i <= 10; i++) {
            MyTask task = new MyTask(i);
            Future<String> future = executor.submit(task);
            futures.add(future);
        }

        for (Future<String> future : futures) {
            try {
                String result = future.get(); 
                System.out.println(result);
            } catch (InterruptedException | ExecutionException e) {
                e.printStackTrace();
            }
        }

        executor.shutdown();
    }
}
