## TILE - Chồng gạch
- Nam có n viên gạch được đánh số từ 1 đến n. Các viên gạch có độ cứng lần lượt là a1, a2,..., an. Một viên gạch có độ cứng x nghĩa là Nam có thể chồng lên trên viên gạch đó tối đa x viên gạch khác, nếu chồng nhiều hơn thì viên gạch đó bị vỡ. Hỏi Nam có thể sắp được chồng gạch cao nhất là bao nhiêu?

## Input
- Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 100) - là số viên gạch.
- Dòng tiếp theo gồm n số nguyên a1, a2,..., an (0 ≤ ai ≤ 100) mỗi số cách nhau một khoảng trắng.

## Output
- Là số nguyên xác định chiều cao cao nhất của chồng gạch mà Nam sắp được.

| INPUT | OUTPUT |
| ----- | ------ |
| 3     | 3      |
| 1 2 1 |        |

| INPUT       | OUTPUT |
| ----------- | ------ |
| 6           | 1      |
| 0 0 0 0 0 0 |        |

## Giải thích
- Trong test 1 viên trên cùng có độ cứng 1, viên giữa có độ cứng 1, viên dưới cùng có độ cứng 2 => chiều cao là 3.

## Solution
- Với các hệ thống web chấm bài giới hạn thời gian chạy của bài tối đa chỉ được 1 giây thì các bạn sẽ rất dễ bị rơi vào lỗi Time Limit Exceeded (TLE: Chạy quá giới hạn thời gian cho phép). Thì như mình đã nói rất nhiều lần là với các hệ thống web chấm bài hiện nay nếu không muốn bị TLE thì tối đa số phép toán trên toàn bài của các bạn chỉ nên ở ngưỡng (3 đến 5)*10^7 là ngưỡng an toàn với phần lớn hệ thống chấm bài, hoặc với một số hệ thống chấm server mạnh hơn thì có thể nâng ngưỡng lên 10^8 nhưng cũng hên xui nhé. Và thực ra ta không phải đếm chi tiết từng số phép toán trên toàn bài mà ta dựa theo số lần vòng lặp chạy bởi bên trong vòng lặp là nó xử lý lặp đi lặp lại nhiều phép toán nên cứ canh theo đó, các bạn cứ hiểu là tối đa toàn bài chỉ nên lặp (3 đến 5)*10^7 lần là an toàn hoặc tệ nhất là 10^8 (lúc này thì hên xui nhé) còn vượt ngưỡng này là khả năng TLE rất cao nhe. Lưu ý là ngưỡng mình vừa nói ở trên là với ngôn ngữ C/C++ thôi nhé chứ nếu với những ngôn ngữ khác như Python, C# hay Java nó chạy chậm hơn C/C++ thì ngưỡng đó phải thấp hơn, hoặc người ra đề sẽ chủ động đưa ra giới hạn nếu nộp với C/C++ thì thời gian chạy quy định tối đa 1 giây, các ngôn ngữ khác thì 2 giây. Và ngưỡng mình đưa ra ở trên nếu với đề cho thời gian 2 giây thì các bạn cứ tỷ lệ thuận nhân 2 lên với ngưỡng, 3 giây thì nhân 3, nếu 100 ms tức là 1/10 giây thì các bạn chia 10 cho ngưỡng đó nhé, cứ thế thôi.
- Rồi thì với bài này giới hạn thời gian là 1 giây thì cứ như ở trên mình đã phân tích kỹ rồi hen. Giờ ta sẽ thảo luận cách giải quyết bài này.
- Bài này dùng giải thuật tham lam (Greedy Algorithms) để giải quyết. Kể cả bạn nào có không biết về giải thuật tham lam này thì thực ra đôi khi các bạn đang giải quyết vấn đề theo chính tư tưởng của tham lam mà các bạn không biết. Cho bạn nào không biết thì mình có thể nói nhanh như thế này: Tham lam ở đây nghĩa là ta sẽ cố gắng chọn ra cách giải quyết tốt nhất trong tất cả các cách ở hiện tại rồi đi theo cách giải quyết tốt nhất đó nếu lại đứng trước nhiều lựa chọn cách giải quyết khác nhau nữa thì ta lại cố gắng chọn theo cách giải quyết tốt nhất trong số đó tóm lại cứ tốt nhất mà triển vì thế tên gọi nó là tham lam. Quy luật nó là như vậy thôi chứ còn lại không có công thức từng bước cụ thể giải quyết như mấy thuật toán khác. Mà ta có thể giải quyết theo cách bất kỳ miễn cái tư tưởng mà ta giải quyết luôn là chọn theo hướng tốt nhất trong các lựa chọn thì đó chính là tư tưởng của tham lam
- Thì tại sao bài này lại có thể nhìn ra tư tưởng của nó là tham lam? Thì ngay từ yêu cầu phải tìm ra được chồng gạch cao nhất là bao nhiêu? Tức là với quy định như vậy thì phải cố gắng tìm ra cách xếp sao cho được chồng gạch cao nhất, đọc phát là thấy ngay tư tưởng của tham lam rồi vì lúc nào cũng muốn phải tốt nhất hehe
- Thì thực ra tham lam chỉ là dạng tư tưởng thôi, còn lại để hiện thực được nó thì có thể cần đến những kỹ thuật bổ trợ khác nữa. Mình lấy ví dụ ngay trong chính bài tập này, rõ ràng ta nhìn thấy nếu với viên gạch có giá trị a[i] nghĩa là nó có thể chứa được a[i] viên gạch xếp trên nó. Vậy ta sẽ hiểu ngay viên gạch có sức chịu đựng cao nhất trong đống gạch hiện tại sẽ là viên có giá trị lớn nhất. Rồi viên gạch có sức chịu đựng cao nhì trong đống gạch hiện tại sẽ là viên có giá trị lớn nhì, và cứ thế giảm dần. Vậy chắc chắn để chồng gạch được xếp cao nhất có thể thì ta phải chọn các viên gạch từ cuối chồng trở lên với sức chịu đựng của nó có giá trị từ lớn nhất giảm dần để nó có thể chịu được nhiều nhất các viên gạch được xếp trên nó.
- Vậy nên lúc này ta sẽ đi sắp xếp các giá trị a[i] giảm dần theo độ lớn. Rồi thì a[0] là giá trị lớn nhất lúc này nó là viên gạch đứng cuối chồng và có thể chịu được a[0] viên gạch xếp trên nó. Vấn đề ta có thể tính đến giả sử đống gạch chỉ đang có n = 10 viên gạch, như thế khi chọn được viên gạch cuối chồng rồi thì cao nhất nó chỉ có thể chứa được n-1 viên gạch còn lại ở trên nó tức là chứa được 9 viên còn lại thì lúc này hết gạch rồi. Mà giả sử giá trị a[0] lúc này là 100 thì ta hiểu nó có thể chịu được tối đa đến 100 viên ở trên nó nhưng tình hình đống gạch chỉ còn 9 viên vậy nên lúc này chỉ chọn theo 9 viên thôi. Còn nếu giả sử giá trị a[0] là 5 thì tuy còn 9 viên nhưng nó chỉ có thể chứa được 5 viên thôi vì chứa từ viên thứ 6 trở đi là nó không chịu được mà bể ngay.
- Gọi idx là chỉ số index của viên gạch được xếp ở đầu chồng gạch, tức là viên gạch cuối cùng có thể chọn để đưa vào chồng gạch. Lúc này ta cần tìm ra vị trí index của viên gạch cuối cùng này và đáp án chồng gạch sẽ có độ cao là: idx + 1.
- Thì ta hiểu rằng ban đầu sau khi sắp xếp giá trị các số giảm dần thì a[0] là viên gạch cuối chồng, lúc này chỉ số idx tối đa có thể sẽ là số nhỏ nhất trong 2 số hoặc là n - 1 (tức là chứa hết toàn bộ đống gạch còn lại) hoặc là a[0] (tức là tối đa độ lớn nó có thể chứa do tính từ index 0 nên độ lớn này cũng chính là vị trí index cuối cùng nó có thể chứa được). Thì tuỳ theo cái nào nhỏ nhất thì lấy theo cái đó. Sau bước này ta có được idx là vị trí index của viên gạch tối đa có thể lấy được.
- Tuy nhiên vị trí index này sẽ không thể cố định mà thực tế hoặc nó giữ nguyên hoặc nó có thể bị giảm đi tuỳ thuộc vào các giá trị a[1], a[2] ... xép tiếp theo. Giả sử n = 10, a[0] = 7 nghĩa là từ a[0] nó có thể chứa được đến a[7] (0 + 7 = 7) tuy nhiên khi xét lên a[1] = 4 chẳng hạn thì lúc này từ a[1] nó chỉ có thể chứa được đến a[5] (1 + 4 = 5) chứ nếu giữ nguyên giới hạn chứa được đến a[7] thì viên gạch a[1] sẽ bị vỡ vì vượt quá giới hạn chịu đựng của nó. Rồi giả sử xét lên a[2] lúc này là 1 chẳng hạn thì lúc này từ a[2] chỉ có thể chứa được đến a[3] (2 + 1 = 3) rồi xét tiếp lên a[3] lúc này đã chạm đến ngưỡng idx = 3 nên dừng không xét tiếp được nữa => chồng gạch cao nhất có thể xếp có độ dài 4 (idx + 1 tức 3 + 1 = 4).
- Đến đây các bạn đã thấy rõ tư tưởng cách giải quyết rồi chứ? Khởi tạo idx = min(n-1, a[0]) rồi vòng lặp bắt đầu duyệt tiếp từ i = 1 trở lên với điều kiện lặp là i < idx rồi nếu thoả thì lại đi tính lại giá trị idx = min(idx, i + a[i]); rồi lặp i++ xét qua giá trị a[i] mới đến khi nào i == idx lúc này vòng lặp dừng lại và ta kết luận độ cao lớn nhất của chồng gạch có thể xếp được sẽ là idx + 1.

```c++
#include <bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin >> n;
    int a[n];
    for(int i = 0; i < n; ++i){
        cin >> a[i];
    }

    sort(a, a + n, greater<int>());
    int idx = min(n - 1, a[0]);
    int i = 1;
    while(i < idx){
        idx = min(idx, i + a[i]);
        i++;
    }
    cout << idx + 1;
    return 0;
}
```

- Đánh giá độ phức tạp của cách làm này:
  - Độ phức tạp không gian (Space Complexity): O(N) với N là số lượng phần tử của mảng a (số viên gạch).
  - Độ phức tạp thời gian (Time Complexity): O(N) của bước đọc mảng từ input + O(N * logN) của bước sắp xếp giảm dần dùng hàm sort trong STL + O(N) của bước duyệt mảng tìm vị trí idx. Tổng quát theo quy tắc cộng BigO có thể kết luận theo thằng lớn nhất tức là O(N * logN) với N là số lượng phần tử của mảng a (số viên gạch).
- Vậy ta có thể thấy độ phức tạp thời gian lớn nhất đến từ bước đi sắp xếp mảng giảm dần. Bước này để được tối ưu ta nên dùng hàm sort có sẵn như ở trên. Tuy nhiên vì giới hạn tối đa của N chỉ là 100 theo như đề bài đưa ra, nó quá nhỏ thế nên kể cả các bạn nào đi dùng những thuật toán sắp xếp không tối ưu như Bubble Sort, Interchange Sort, Selection Sort ... với độ phức tạp O(N^2) thì cũng không sợ bị TLE với bài này nhé vì 100^2 cũng chỉ 10^4 thì nó vẫn quá nhỏ so với ngưỡng (3 đến 5)*10^7. Nhưng với mình thì mình thích dùng hàm sort có sẵn vừa tối ưu mà vừa gọn lẹ để gọi ra.

## Source Code