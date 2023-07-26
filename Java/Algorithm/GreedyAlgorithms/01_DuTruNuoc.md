## Dự trữ nước
- Ở miền trung thường năm nào cũng có những đợt hạn hán nên ông Nam có những thùng dự trự nước. Do mua làm nhiều đợt nên N (1 <= N  <= 10^6) thùng chứa nước của ông Nam có kích thước khác nhau, mỗi thùng có sức chứa Ci (1 <= Ci <= 10^7, 1 <= i <= N).
- Dự đoán rằng năm nay sẽ có đợt hạn hán lớn nên ông Nam muốn đổ đầy nước hết các thùng để dự trữ. Sau khi kiểm tra ông Nam thấy rằng có một số thùng vẫn còn đầy, một số khác thì vơi đi một phần, còn một số thì đã hết. Ông quyết định các thùng nào chưa đầy thì sẽ chở đi để đổ đầy nước. Nhưng do nơi lấy nước rất xa, và mỗi lần chi chở đi được 1 thùng, và mỗi thùng chỉ được chở đi một lần nên ông quyết định sẽ san nước giữa các thùng với nhau để số thùng phải đi là ít nhất
- Vậy Cho dung lượng hiện có của thùng thứ i là Bi (0 <= Bi <= Ci, 1 <= i <= N), hãy giúp ông Nam xác định số lượng thùng ít nhất phải mang đi.

## Input
- Dòng thứ nhất ghi một số tự nhiên N là số dương các thùng nước
- Dòng thứ i trong N dòng tiếp theo mỗi dòng có 2 số nguyên Bi và Ci (0 <= Bi <= Ci) mô tả thông tin thùng thứ i, với Bi là nước còn trong thùng và Ci là sức chứa của thùng, các số cách nhau ít nhất 1 khoảng trắng.

## Output
- Số duy nhất là số lượng ít nhất các thùng nước phải chở đi

| INPUT | OUTPUT |
| ----- | ------ |
| 4     | 1      |
| 0 1   |        |
| 4 5   |        |
| 0 2   |        |
| 1 2   |        |

## Giải thích
- Sau khi san nước giữa các thùng thì ông Nam chỉ cần chở đi thùng số 2 để đổ nước mang về.

## Solution
- Bài này dùng giải thuật tham lam (Greedy Algorithms) để giải quyết. Kể cả bạn nào có không biết về giải thuật tham lam này thì thực ra đôi khi các bạn đang giải quyết vấn đề theo chính tư tưởng của tham lam mà các bạn không biết. Cho bạn nào không biết thì mình có thể nói nhanh như thế này: Tham lam ở đây nghĩa là ta sẽ cố gắng chọn ra cách giải quyết tốt nhất trong tất cả các cách ở hiện tại rồi đi theo cách giải quyết tốt nhất đó nếu lại đứng trước nhiều lựa chọn cách giải quyết khác nhau nữa thì ta lại cố gắng chọn theo cách giải quyết tốt nhất trong số đó tóm lại cứ tốt nhất mà triển vì thế tên gọi nó là tham lam. Quy luật nó là như vậy thôi chứ còn lại không có công thức từng bước cụ thể giải quyết như mấy thuật toán khác. Mà ta có thể giải quyết theo cách bất kỳ miễn cái tư tưởng mà ta giải quyết luôn là chọn theo hướng tốt nhất trong các lựa chọn thì đó chính là tư tưởng của tham lam
- Thì tại sao bài này lại có thể nhìn ra tư tưởng của nó là tham lam? Đọc kỹ đề ta sẽ thấy yêu cầu là hãy cố gắng sang lượng nước hiện tại đang có vào các thùng để những thùng nào chưa đầy thì sẽ được chở đi thì cố gắng làm sao để số lượng thùng phải chở đi là ít nhất. Thì ta sẽ hiểu rằng để số lượng thùng chở đi là ít nhất thì phải cố gắng lấp đầy lượng nước hiện tại vào được nhiều thùng nhất có thể thì số lượng thùng chưa đầy cần chở đi lúc này sẽ là ít nhất. Vậy thì chính từ chỗ cố gắng lấp đầy được càng nhiều thùng nhất có thể thì đây chính là tư tưởng của tham lam dễ dàng để nhìn ra. Thực ra đây cũng là tư tưởng từ thực tế thôi nếu xét theo thực tế thì phải làm như vậy.
- Tóm lại điểm mấu chốt để giải quyết được bài toán này đó là số lượng nước hiện tại đang có trong tất cả các thùng phải cố gắng làm sao lấp đầy nó vào được nhiều thùng nhất có thể. Chỉ cần nhìn ra được điều này là đã giải quyết được 50% bài này rồi còn còn lại 50% là ở cách thức triển khai ra được tư tưởng đã nhìn ra.
- Cách thức để triển khai tư tưởng đã nhìn ra như sau: Thì lúc này ta có một biến tổng và ở quá trình đọc dữ liệu đầu vào với lượng nước hiện tại đang có của mỗi thùng ta sẽ cộng dồn nó vào biến tổng còn thể tích từng thùng thì ta sẽ đưa vào mảng 1 chiều để lưu trữ thể tích. Sau quá trình đọc dữ liệu từ đầu vào là ta đã có được biến tổng là tổng số lượng nước hiện tại đang có trong tất cả các thùng và ta có mảng 1 chiều lưu trữ thể tích của từng thùng. Lúc này ta đi sắp xếp mảng một chiều thể tích của các thùng đó tăng dần rồi thì biến tổng ta sẽ bắt đầu xét từ đầu mảng sau khi đã sắp xếp tức là từ thùng có thể tích bé nhất trở lên (xét từ i = 0 trở lên) với mỗi thùng thứ i xét đến nếu biến tổng đó lớn hơn hoặc bằng thể tích của thùng thứ i thì biến tổng sẽ bị trừ đi một lượng ứng với thể tích của thùng thứ i đó rồi ta lại xét qua thùng thứ i tiếp theo nếu đến một thời điểm nào mà biến tổng không thỏa mãn lớn hơn hoặc bằng thể tích của thùng thứ i đang xét thì ta hiểu là thùng thứ i đó chưa được lấp đầy vậy thì lúc này từ thùng thứ i đó đến cuối cùng chính là số lượng thùng cần phải chở đi và số lượng này có thể tính nhanh ra được chính là N - i với N là tổng số lượng các thùng từ đầu vào đã cho và ta in ra kết quả và kết thúc chương trình vì đã tìm được đáp án. Cần lưu ý phải tính đến tình huống nếu trong quá trình xét vòng lặp đến tận cùng vẫn không xuất ra được kết quả (tình huống này xảy ra khi toàn bộ các thùng hiện tại đều đã được lấp đầy) thì sau cùng ta nhớ phải xuất ra 0 (tức là không có thùng nào được chở đi).
- Lưu ý 
  - 1. Vì số lượng thùng nước tối đa có thể lên đến 10^6 theo như đề bài cho và đề bài chỉ giới hạn thời gian chạy tối đa được phép là 1 giây thì lúc này bước sắp xếp các thùng tăng dần theo thể tích ta phải lựa chọn những thuật toán sắp xếp có độ phức tạp tối ưu O(NlogN) (ví dụ: Quick Sort, Merge Sort, Heap Sort) chứ nếu dùng những cách sắp xếp không tối ưu với độ phức tạp O(N^2) (ví dụ: Selection Sort, Interchange Sort, Bubble Sort ...) thì chắc chắn sẽ bị Time Limit Exceeded (TLE: chạy quá giới hạn thời gian cho phép). Thường thì mình sẽ dùng ngay hàm sort trong thư viện algorithm nó đã được code tối ưu luôn đảm bảo O(NlogN) và gọi ra nhanh gọn để xài.
  - 2. Biến tổng lưu tổng lượng nước đang có hiện tại trong các thùng nhớ phải dùng kiểu dữ liệu long long (64 bit) bởi có tối đa 10^6 thùng, thể tích tối đa mỗi thùng có thể là 10^7. Vậy trường hợp lớn nhất biến tổng có thể phải lưu trữ đến 10^7 * 10^6 = 10^13 (10 nghìn tỷ) vì thế nếu chọn kiểu dữ liệu 32 bit tối đa chỉ lưu được cỡ 2*10^9 (thực ra hơn 2 tỷ xíu) thì không nổi, phải dùng kiểu dữ liệu 64 bit mới lưu nổi nhé
  - 3. Vì số lượng input cần đọc là rất nhiều có thể lên đến 10^6 dòng, mỗi dòng cần đọc 2 thông số nghĩa là tối đa có thể đọc đến 2 triệu lần vì thế ta nên dùng scanf của C để đọc sẽ tốt hơn là dùng cin của C++ vì tốc độ đọc của scanf sẽ nhanh hơn cin. Hoặc nếu bạn nào quen code theo C++ dùng cin thì tham khảo 3 dòng code đầu tiên trong hàm main của mình dưới đây, có nó thì hiểu đơn giản là dùng cin để đọc thì tốc độ vẫn sẽ nhanh như dùng scanf (vì lúc này nó đã được đồng bộ với nhau)
- Đánh giá độ phức tạp thời gian (Time Complexity) của cách làm trên: O(N) của bước đọc dữ liệu từ input + O(NlogN) của bước sắp xếp mảng tăng dần + O(N) của bước duyệt mảng trừ dần biến tổng => tổng quát độ phức tạp là O(NlogN) vì theo quy tắc cộng của BigO sẽ lấy cái lớn nhất. Và với độ phức tạp O(NlogN) này với N lớn nhất có thể là 10^6 thì yên tâm sẽ AC được vì với giới hạn 1 giây thì tối đa số lần lặp được phép ở ngưỡng (3 đến 5)*10^7. Nên với cách tính ở trên nếu tính chi tiết cả thảy sẽ là 10^6 + 10^6 * log(10^6) + 10^6 = 22*10^6 ~ 3*10^7 thì vẫn ở ngưỡng tối đa được phép.
- Đánh giá độ phức tạp không gian (Space Complexity) của cách làm trên: O(N) do ta cần tạo mảng lưu trữ thể tích của N thùng

```c++
#include <bits/stdc++.h>
using namespace std;

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    int n;
    cin >> n;
    int a[n];
    long long sum = 0;
    for (int i = 0; i < n; i++)
    {
        int b;
        cin >> b >> a[i];
        sum += b;
    }
    sort(a, a + n);
    for (int i = 0; i < n; i++)
    {
        if(sum >= a[i]){
            sum -= a[i];
        }
        else{
            cout << n - i;
            return 0;
        }
    }
    cout << 0;
    return 0;
}
```

## Source code
```java
package algrithms;

import java.util.Arrays;
import java.util.Scanner;

public class DuTruNuoc {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int a[] = new int[n];
        long sum = 0;
        for (int i = 0; i < n; i++) {
            int b = scanner.nextInt();
            a[i] = scanner.nextInt();
            sum += b;
        }
        Arrays.sort(a);
        for (int i = 0; i < n; i++) {
            if(sum >= a[i]){
                sum -= a[i];
            }
            else {
                System.out.println(n-i);
                return;
            }
        }
        System.out.println(0);
    }
}
```
