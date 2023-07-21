## Biến đổi số
- Tuấn rất thích số là bội của 45. Vì vậy cứ thấy bất kỳ một số nguyên dương N nào Tuấn cũng cố gắng biến đổi số đó bằng cách thay đổi vị trí các chữ số đó để được một bội số của 45.
- Cho trước số nguyên dương N, hãy cho biết có thể biến đổi số đó để hợp với sở thích của Tuấn được không

## Input
- Dòng duy nhất chứa số nguyên dương N. Số chữ số của N không vượt quá 10^4 ký tự.

## Output
- Nếu có thể biến đổi được thì hãy in ra số lớn nhất thỏa mãn bài toán, ngược lại thì in -1

| INPUT     | OUTPUT |
| --------- | ------ |
| 45        | 45     |
| 153       | 315    |
| 555554444 | -1     |

## Hướng giải quyết
- Ta nhìn thấy để một số muốn thoả mãn là bội số của 45 thì phải thoả mãn đồng thời 2 điều sau:
  - 1/ Tổng các chữ số của số đó phải chia hết cho 9 (vì 4 + 5 = 9)
  - 2/ Chữ số cuối cùng của số đó phải hoặc là 0 hoặc là 5
- Phải thoả mãn đồng thời cả 2 điều trên thì số đó mới là số hợp lệ, còn nếu chỉ thoả 1 trong 2 hoặc không thoả cái nào thì đó không phải là số hợp lệ
- Đề yêu cầu đổi chỗ tuỳ ý các chữ số trong số ban đầu sao cho tìm được số thoả mãn lớn nhất.
- Đề cho số ban đầu có độ dài tối đa 10^4. Đọc đến đây là ta hiểu chỉ có thể dùng chuỗi chứ không có kiểu số nguyên có sẵn nào lưu được nổi 10^4 chữ số, số nguyên 64 bit tối đa cũng chỉ lưu được tầm 19, 20 chữ số thôi.
- Vậy đến đây ta có thể nhìn ra hướng giải quyết tối ưu cho bài này là dùng kỹ thuật mảng thống kê: Chỉ cần duyệt qua 1 lần chuỗi rồi sau đó xét lại mảng thống kê là ra được đáp án. Cụ thể như sau:
  - Tạo mảng a có 10 phần tử để index i của mảng từ 0 đến 9 tương ứng với các chữ số từ 0 đến 9. Như thế a[i] chính là số lần xuất hiện của chữ số i trong chuỗi với i từ 0 đến 9. Như thế mảng a ban đầu khởi tạo tất cả là 0 rồi duyệt vòng lặp xét từng ký tự s[i] thì a[s[i] - 48]++. Dành cho bạn nào không biết thì ký tự số muốn chuyển sang số thì phải - 48 nhé vì ký tự ‘0’ có mã ascii là 48, ký tự ‘1’ có mã ascii là 49, ‘2’ là 50 ... nên cứ lấy ký tự (tức là mã ascii của nó) - 48 sẽ ra số nguyên tương ứng của ký tự đó rồi truyền nó làm index của mảng a, giá trị tại đó sẽ được tăng thêm 1 để sau cùng ta thống kê được từng chữ số xuất hiện bao nhiêu lần trong chuỗi. Đồng thời mỗi lần xét ký tự chữ số thì ta cộng giá trị của nó vào biến tổng. Sau khi kết thúc vòng lặp ta kiểm tra nếu biến tổng không chia hết cho 9 hoặc nếu số lần xuất hiện của chữ số 0 và chữ số 5 đều là 0 (tức là đều không xuất hiện) thì ta có thể khẳng định ngay sẽ không thể tìm được số nào thoả mãn. 
  - Còn nếu biến tổng chia hết cho 9 và có sự xuất hiện của chữ số 0 hoặc chữ số 5 thì lúc này ta bắt đầu xét để tìm ra được số thoả mãn lớn nhất. Để số là lớn nhất thì ta sẽ đưa hết tất cả các chữ số lớn nhất về đầu và cứ thế giá trị các chữ số giảm dần. Thì lúc này chỉ đơn giản là duyệt lại mảng đánh dấu a bắt đầu xét từ index 9 về 0 và xét nếu a[i] khác 0 thì in ra đủ a[i] lần chữ số i thì lúc này các chữ số đang được in ra từ lớn về nhỏ nên đảm bảo số tìm được sẽ là lớn nhất. Tuy nhiên cần nhớ chừa lại chữ số cuối cùng phải là 0 hoặc 5. Lúc này ta hiểu nếu chuỗi chỉ tồn tại 1 trong 2 chữ số hoặc 0 hoặc 5 thì không có lựa chọn nào khác nhưng nếu đồng thời có tồn tại cả 2 chữ số 0 và 5 thì lúc này để là số lớn nhất thì chữ số cuối cùng sẽ là 0, ta ưu tiên đưa chữ số 5 lên trước. Vậy nên gọi biến x là biến lưu giá trị chữ số cuối cùng, Nếu chữ số cuối cùng lựa chọn là chữ số i thì phải nhớ a[i]-- để giảm bớt số lần xuất hiện của chữ số i đi 1 đơn vị (vì ta đã lấy nó để đưa ra cuối cùng). Rồi thì cứ thế duyệt vòng lặp xét i từ 9 về 0 với mỗi giá trị i thì lặp in ra đủ a[i] lần chữ số i, rồi sau cùng in ra giá trị biến x lưu chữ số cuối cùng. Như vậy ta đã tạo ra được số thoả mãn lớn nhất cần tìm.
  - Đánh giá độ phức tạp thời gian (Time Complexity) của cách làm trên: O(N) của bước duyệt chuỗi tạo mảng thống kê với N là độ dài chuỗi + O(N) của bước duyệt mảng thống kê xét in ra kết quả vì lúc này số lần xuất hiện cả thảy của tất cả các chữ số cũng chỉ là N lần => độ phức tạp cả thảy là O(2N) thì vẫn xem như O(N)
  - Đánh giá độ phức tạp không gian (Space Complexity) của cách làm trên: O(10) do tạo mảng thống kê có 10 phần tử, thì vẫn xem như độ phức tạp hằng số thôi (O(1))
- Source code cho anh em tham khảo với tư tưởng tối ưu mình trình bày ở trên:
```c++
#include <bits/stdc++.h>
using namespace std;
int main()
{
    string s;
    cin >> s;
    int sum = 0;
    int a[10] = {0};
    for (int i = 0; i < (int)s.length(); ++i)
    {
        int digit = s[i] - '0';
        sum += digit;
        a[digit]++;
    }
    if (sum % 9 != 0 || (a[0] == 0 && a[5] == 0))
    {
        cout << -1;
    }
    else
    {
        int x;
        if (a[0] == 0 && a[5] != 0)
        {
            x = 5;
            a[5]--;
        }
        else
        {
            x = 0;
            a[0]--;
        }
        for (int i = 9; i >= 0; --i)
        {
            if (a[i] != 0)
            {
                for (int j = 1; j <= a[i]; ++j)
                {
                    cout << i;
                }
            }
        }
        cout << x;
    }
    return 0;
}
```


## Source code
```java
public class BienDoiSo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.nextLine();
        int sum = 0;
        int a[] = new int[10];
        for (int i = 0; i < s.length(); i++) {
            int digit = s.charAt(i) - '0';
            sum += digit;
            a[digit]++;
        }
        if (sum % 9 != 0 || (a[0] == 0 && a[5] == 0)) {
            System.out.println(-1);
        } 
        else {
            int x;
            if (a[0] == 0 && a[5] != 0) {
                x = 5;
                a[5]--;
            } 
            else {
                x = 0;
                a[0]--;
            }
            for (int i = 9; i >= 0; --i) {
                if (a[i] != 0) {
                    for (int j = 1; j <= a[i]; ++j) {
                        System.out.print(i);
                    }
                }
            }
            System.out.print(5);
        }
    }
}
```

