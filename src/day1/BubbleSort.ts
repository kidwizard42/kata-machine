export default function bubble_sort(arr: number[]): void {
    // my version
    // note: in languages you get an error when you access past the element my solution will cause an exception.
    // let last = arr.length;

    // while (last > 1) {
    //     for (let i = 0; i < last; i++) {
    //         if (arr[i] > arr[i + 1]) {
    //             const tempi = arr[i];
    //             arr[i] = arr[i + 1];
    //             arr[i + 1] = tempi;
    //         }
    //     }

    //     last--;
    // }

    // TEACHER VERSION.
    // line 23 you subtract 1 bc you don't want exception in other languages(C# java C etc).
    // you subtract i bc each iteration you only need to check one less
    // since bubble sort brings largest num to top.
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tempi = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempi;
            }
        }
    }
}
