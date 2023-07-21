## Prime String
- Farmerboy vừa mới học về chuỗi nguyên tố. Một chuỗi gọi là chuỗi nguyên tố khi số các kí tự alphabet khác nhau của mỗi chuỗi là số nguyên tố và số lần xuất hiện của mỗi kí tự alphabet là số nguyên tố. Cho một chuỗi, xác định nó có phải là chuỗi nguyên tố hay không.

## Input
- Dòng 1 gồm 1 số nguyên tố T là số test. T dòng tiếp theo mỗi dòng là chuỗi S cần xác định. Các ký tự trong chuỗi từ a đến z

## Output
- In ra T dòng ứng với mỗi test, in ra YES nếu chuỗi là Chuyễi nguyên tố, ngược lại in ra NO

## Giới hạn
- 1 <= T <= 10
- 1 <= Độ dài chuỗi <= 100000

| INPUT  | OUTPUT |
| ------ | ------ |
| 2      |        |
| ababb  | YES    |
| abcabb | NO     |

## Giải thích
- Test 1: 
  - Có 2 ký tự khác nhau xuất hiện: a, b
  - Ký tự a xuất hiện 2 lần
  - Ký tự b xuất hiện 3 lần
> OUTPUT: YES
- Test 2:
  - Có 3 ký tự khác nhau xuất hiện: a, b, c
  - Ký tự a xuất hiện 2 lần
  - Ký tự b xuất hiện 2 lần
  - Ký tự c xuất hiện 1 lần (Không phải số nguyên tố)
> OUTPUT: NO

## Hướng giải quyết
- Bài này sử dụng kỹ thuật mảng đánh dấu sẽ rất khoẻ. Nếu bạn nào không biết thì sẽ phải đi xử lý vấn đề phức tạp trong việc thống kê số lần xuất hiện của từng ký tự phân biệt cũng như thống kê có bao nhiêu ký tự phân biệt. Bạn nào không biết mà đi làm 2 vòng lặp lồng nhau xét tất cả các cặp để đếm thì độ phức tạp sẽ là O(N^2) với N là độ dài chuỗi hoặc có bạn sẽ đi sắp xếp chuỗi tăng dần để gom nhóm những ký tự giống nhau nằm cạnh nhau thì lúc này chỉ duyệt một lần qua chuỗi là thống kê được với độ phức tạp O(N) tuy nhiên trước đó thì phải làm bước sắp xếp và ở bước này kể cả dùng những thuật toán sắp xếp tối ưu thì độ phức tạp cũng là O(NlogN). 
- Trong khi đó giải pháp tốt nhất là dùng kỹ thuật mảng đánh dấu thì độ phức tạp chỉ là O(N), cụ thể ta tạo mảng số nguyên 26 phần tử (tương ứng với 26 chữ cái từ a đến z) và khởi tạo tất cả ban đầu có giá trị là 0. a[0] hiểu là số lần xuất hiện của ký tự a, a[1] hiểu là số lần xuất hiện của ký tự b, cứ thế a[2], a[3], a[4] ... là số lần xuất hiện của ký tự c, d, e ... Như thế chỉ duyệt chuỗi với mỗi ký tự s[i] thì a[s[i] - ‘a’]++ (ví dụ s[i] = ‘a’ thì s[i] - ‘a’ = 0, ví dụ s[i] = ‘b’ thì s[i] - ‘a’ = 1, được như thế vì bản chất ký tự trong C/C++ nó có các mã ascii là các số nguyên biểu diễn, ký tự a có mã là 97, b là 98, c là 99 cứ thế ... nên khi để s[i] - ‘a’ ví dụ khi s[i] = ‘a’ thì lúc này nó hiểu 97 - 97 = 0, tương tự nếu s[i] = ‘b’ thì s[i] - ‘a’ nó hiểu là 98 - 97 = 1. Có thể để a[s[i] - ‘a’]++ hoặc để thẳng a[s[i] - 97]++ cũng được).
- Nếu theo hướng làm mảng đánh dấu như trên thì ta chỉ cần duyệt qua chuỗi một lần là sẽ thống kê ra được số lần xuất hiện của từng ký tự phân biệt trong chuỗi. Ban đầu khởi tạo cờ hiệu check = true giả định nó là hợp lệ rồi đi kiểm tra xem có tình huống nào vi phạm thì cập nhật lại cờ hiệu check = false. Ta duyệt xét qua 26 phần tử của mảng a, với những giá trị a[i] khác 0 tức là có xuất hiện thì đi kiểm tra tính nguyên tố của a[i], nếu thoả thì tăng biến đếm lên 1 đơn vị (vì bài này còn yêu cầu sau cùng kiểm tra tính nguyên tố của số lượng ký tự phân biệt nên ta phải đặt biến đếm để đếm xem có bao nhiêu ký tự phân biệt trong chuỗi), nếu không thoả thì đánh dấu lại cờ hiệu check = false và dừng vòng lặp không cần xét tiếp. Sau quá trình lặp nhớ đi xét tính nguyên tố của biến đếm và cập nhật lại cờ hiệu. Sau cùng kiểm tra cờ hiệu nếu vẫn là true thì in ra YES, nếu là false thì in ra NO. Bước kiểm tra 1 số có là số nguyên tố hay không thì nên dùng cách tối ưu duyệt đến căn bậc 2 của số đó thôi, như thế độ phức tạp của bước này sẽ là O(sqrt(x)) với x là số cần kiểm tra.
- Vậy nếu làm theo đúng tư tưởng ở trên thì tổng quát độ phức tạp sẽ là O(T * (N + 27 * sqrt(N))) với T là số bộ test, N là độ dài chuỗi. 27 là bởi vì duyệt qua mảng a 26 phần tử rồi xét thêm biến đếm sau cùng nên cả thảy là 27
- Thử với trường hợp xấu nhất khi T = 10, N = 10^5 thì sẽ là 10 * (10^5 + 27 * sqrt(10^5)) = 10 * (10^5 + 27 * 317) => cỡ 10^6 thì với giới hạn 1 giây đề cho thì vẫn sẽ ổn nhé (vì giới hạn 1 giây ngưỡng tối đa an toàn là (3 đến 5)*10^7)
- Chuyên mục dự đoán trước kết quả:
  - Nếu vẫn cách dùng mảng đánh dấu như trên nhưng bạn nào dùng thuật kiểm tra số nguyên tố tệ nhất với độ phức tạp O(N) thì vẫn AC được bài này, vì lúc này sẽ là O(T * (N + 27N)) thì vẫn cỡ 3*10^7 nhưng lúc này cũng tiệm cận giới hạn rồi nên cũng hên xui nha.
  - Nếu bạn nào không dùng tư tưởng mảng đánh dấu mà đi sắp xếp với thuật tối ưu O(NlogN) thì lúc này nếu dùng thuật kiểm tra số nguyên tố tối ưu thì vẫn có thể AC, nếu dùng thuật kiểm tra số nguyên tố không tối ưu thì hên xui mà chắc xui nhiều hơn hên nha.
  - Còn nếu bạn nào dùng 2 vòng lặp lồng nhau xét qua tất cả các cặp để đếm hoặc dùng thuật toán sắp xếp tệ nhất với độ phức tạp O(N^2) thì chắc chắn sẽ bị TLE ngay với giới hạn mà đề đã công bố.
- Source code tham khảo với tư tưởng tối ưu mình trình bày ở trên (dùng mảng đánh dấu + thuật toán kiểm tra số nguyên tố tối ưu)
```c++
#include <bits/stdc++.h>
using namespace std;
bool isPrime(int x)
{
    for (int i = 2; i * i <= x; ++i)
    {
        if (x % i == 0)
        {
            return false;
        }
    }
    return x >= 2;
}
int main()
{
    int t;
    cin >> t;
    int a[26] = {0};
    string s;
    while (t--)
    {
        cin >> s;
        for (int i = 0; i < (int)s.length(); ++i)
        {
            a[s[i] - 'a']++;
        }
        bool check = true;
        int cnt = 0;
        for (int i = 0; i < 26; ++i)
        {
            if (a[i])
            {
                cnt++;
                if (!isPrime(a[i]))
                {
                    check = false;
                    break;
                }
            }
        }
        if (!isPrime(cnt))
        {
            check = false;
        }
        if (check)
        {
            cout << "YES\n";
        }
        else
        {
            cout << "NO\n";
        }
    }
    return 0;
}
```

## Source Code
``` java
public class PrimeString {

     public static boolean isPrime(int x){
        for(int i = 2; i * i <= x; ++i){
            if(x % i == 0){
                return false;
            }
        }
        return x >= 2;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = Integer.parseInt(scanner.nextLine());

        // tạo mảng số nguyên 26 phần tử (tương ứng với 26 chữ cái từ a đến z)
        // a[0] là số lần xuất hiện của ký tự a
        // a[1] là số lần xuất hiện của ký tự b
        // cứ thế a[2], a[3], a[4] ... là số lần xuất hiện của ký tự c, d, e
        int a[] = new int[26];
        String s;
        while(t > 0){
            s = scanner.nextLine();
            for(int i = 0; i < s.length(); i++){
                // s.charAt(i) = ‘a’ thì s.charAt(i) - ‘a’ được hiểu là 97 - 97 = 0
                // tương tự nếu s.charAt(i) = ‘b’ thì s.charAt(i) - ‘a’ được hiểu là 98 - 97 = 1
                // có thể để a[s.charAt(i) - 'a']++ hoặc để thẳng a[s.charAt(i) - 97]++ đều được
                a[s.charAt(i) - 'a']++;
            }
            Boolean check = true;
            int cnt = 0;
            for(int i = 0; i < 26; ++i){
                if(a[i] > 0){
                    cnt++;
                    if(!isPrime(a[i])){
                        check = false;
                        a[i] = 0;
                        break;
                    }
                    a[i] = 0;
                }
            }

            if(!isPrime(cnt)){
                check = false;
            }
            if(check){
                System.out.println("YES");
            }
            else{
                System.out.println("NO");
            }
            t--;
        }
    }
}

```