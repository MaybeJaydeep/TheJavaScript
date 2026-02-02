//
import java.util.*;

class ChuckAnArray {

    public static <T> List<List<T>> chunk(T[] arr, int size) {
        List<List<T>> result = new ArrayList<>();

        for (int i = 0; i < arr.length; i += size) {
            result.add(Arrays.asList(
                    Arrays.copyOfRange(arr, i, Math.min(arr.length, i + size))
            ));
        }

        return result;
    }

    public static void main(String[] args) {

        Integer[] input = {1, 2, 3, 4, 5};
        int size = 2;

        List<List<Integer>> chunks = chunk(input, size);

        System.out.println("Chunks:");
        System.out.println(chunks);
    }
}
