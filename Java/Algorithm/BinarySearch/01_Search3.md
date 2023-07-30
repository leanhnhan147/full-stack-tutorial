## Search3 - Tìm kiếm nhị phân 3
- Cho hai dãy số nguyên a1, a2, ..., an và b1, b2, ...,bm. Với mỗi chỉ số i (1 <= i <= m) hãy tìm sự xuất hiện của bi trong dãy a1, a2, ..., an. (1 <= n, m <= 10^5)

## Input
- Dòng đầu ghi hai số nguyên dương n và m
- Dòng thứ 2 ghi n số nguyên a1, a2, ..., an
- Dòng thứ 3 ghi m số nguyên b1, b2, ..., bm
- Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách

## Output
- Một dòng duy nhất chứa m số nguyên, trong đó số thứ i (1 <= i <= m) là chỉ số j nhỏ nhất mà ai = bj (nếu tồn tại) và là 0 nếu ngược lại. Hai số liên tiếp được ghi cách nhau một dấu cách

| INPUT         | OUTPUT    |
| ------------- | --------- |
| 7 5           | 7 6 0 2 0 |
| 6 4 7 2 4 1 3 |           |
| 3 1 5 4 8     |           |

## Solution
- Với các hệ thống web chấm bài giới hạn thời gian chạy của bài tối đa chỉ được 1 giây thì các bạn sẽ rất dễ bị rơi vào lỗi Time Limit Exceeded (TLE: Chạy quá giới hạn thời gian cho phép). Thì như mình đã nói rất nhiều lần là với các hệ thống web chấm bài hiện nay nếu không muốn bị TLE thì tối đa số phép toán trên toàn bài của các bạn chỉ nên ở ngưỡng (3 đến 5)*10^7 là ngưỡng an toàn với phần lớn hệ thống chấm bài, hoặc với một số hệ thống chấm server mạnh hơn thì có thể nâng ngưỡng lên 10^8 nhưng cũng hên xui nhé. Và thực ra ta không phải đếm chi tiết từng số phép toán trên toàn bài mà ta dựa theo số lần vòng lặp chạy bởi bên trong vòng lặp là nó xử lý lặp đi lặp lại nhiều phép toán nên cứ canh theo đó, các bạn cứ hiểu là tối đa toàn bài chỉ nên lặp (3 đến 5)*10^7 lần là an toàn hoặc tệ nhất là 10^8 (lúc này thì hên xui nhé) còn vượt ngưỡng này là khả năng TLE rất cao nhe. Lưu ý là ngưỡng mình vừa nói ở trên là với ngôn ngữ C/C++ thôi nhé chứ nếu với những ngôn ngữ khác như Python, C# hay Java nó chạy chậm hơn C/C++ thì ngưỡng đó phải thấp hơn, hoặc người ra đề sẽ chủ động đưa ra giới hạn nếu nộp với C/C++ thì thời gian chạy quy định tối đa 1 giây, các ngôn ngữ khác thì 2 giây. Và ngưỡng mình đưa ra ở trên nếu với đề cho thời gian 2 giây thì các bạn cứ tỷ lệ thuận nhân 2 lên với ngưỡng, 3 giây thì nhân 3, nếu 100 ms tức là 1/10 giây thì các bạn chia 10 cho ngưỡng đó nhé, cứ thế thôi.
- Rồi thì với bài này giới hạn thời gian là 1 giây thì cứ như ở trên mình đã phân tích kỹ rồi hen. Giờ ta sẽ thảo luận cách giải quyết bài này.
- Cách giải quyết đơn giản nhất dễ dàng nhìn ra đó là theo tư tưởng vét cạn duyệt tuần tự từng giá trị b[i] so sánh lần lượt với các giá trị a[j] từ trái qua, ngay tại vị trí a[j] nào mà bằng với b[i] thì ngay lập tức kết luận in ra vị trí j đó rồi xét qua giá trị b[i] tiếp theo. Còn nếu xét đến tận cùng mà vẫn không thấy giá trị a[j] nào thoả mãn bằng với b[i] thì in ra 0. Quy trình ở trên cứ thế xét hết tất cả các giá trị b[i].

```c++
#include <bits/stdc++.h>
using namespace std;

int main(){
    int n, m;
    cin >> n >> m;
    int a[n];
    for(int i = 0; i < n; ++i){
        cin >> a[i];
    }
    while(m--){
        int x;
        cin >> x;
        int idx = 0;
        for(int i = 0; i < n; ++i){
            if(a[i] == x){
                idx = i + 1;
                break;
            }
        }
        cout << idx << " ";
    }
    return 0;
}
```

- Nhận xét: Ta chỉ cần tạo mỗi mảng a là được, không cần thiết phải tạo mảng b chi cho phí bộ nhớ, bởi lần lượt từng phần tử của mảng b sẽ đi tìm kiếm trong mảng a rồi in ra kết quả luôn và rồi hết nhiệm vụ và sau đó xét qua phần tử tiếp theo của mảng b, vì thế nên ta không cần lưu trữ các giá trị mảng b làm gì, ta tạo biến x đọc dữ liệu vào rồi có dữ liệu ta đi tìm kiếm in kết quả luôn rồi lại đọc dữ liệu mới vào và cứ thế.
- Đánh giá độ phức tạp của cách làm này: 
  - Độ phức tạp không gian (Space Complexity): O(N) với N là số lượng phần tử của mảng a.
  - Độ phức tạp thời gian (Time Complexity): O(N) của bước đọc dữ liệu mảng a + O(M * N) của bước đọc dữ liệu mảng b và đi xử lý in kết quả. Tổng quát thì theo quy tắc cộng BigO sẽ lấy đại diện thằng lớn nhất nên ta có thể kết luận độ phức tạp là O(M * N) với M là số lượng phần tử của mảng b, N là số lượng phần tử của mảng a.
- Vậy với độ phức tạp này thì trường hợp xấu nhất là khi N, M đạt giới hạn tối đa theo như đề bài đưa ra là 10^5 phần tử, và toàn bộ các phần tử của mảng b đều không xuất hiện trong mảng a, nghĩa là nó luôn phải xét hết toàn bộ các giá trị của mảng a. Như thế thì lúc này số lần lặp cả thảy sẽ là 10^5 + 10^5 * 10^5 tức là 10^5 + 10^10 = 10 tỷ 100 ngàn lần lặp. Thế này thì đã vượt quá xa ngưỡng (3 đến 5)*10^7 tức là 30 triệu đến 50 triệu lần lặp hay cao lắm là 10^8 tức là 100 triệu lần lặp. Như thế thì cách này chắc chắn sẽ bị TLE. Tuy nhiên hãy vẫn nên cài đặt nó để sau này ta lấy nó làm công cụ kiểm tra tính chính xác cho cách làm tối ưu. Bạn nào có chưa biết cách lấy nó làm công cụ kiểm tra tính chính xác thì có thể xem qua bài viết này của mình nha: https://www.facebook.com/100003824621962/posts/2303526743118124/?d=n
- Giờ ta sẽ nói về cách làm tốt hơn cho bài này, thì thực ra ngay từ chính tên đề bài đã nói rõ ra cách làm của bài này rồi còn gì đó là ta phải đi tìm kiếm nhị phân để đẩy nhanh quá trình tìm kiếm lên chứ như cách làm ở trên là tìm kiếm tuần tự thì sẽ bị TLE. Vậy nên nếu bạn nào còn chưa biết tìm kiếm nhị phân là gì thì các bạn trước tiên phải tìm đọc tài liệu để hiểu về nó thì mới giải quyết được bài này nhé. Còn bạn nào đã biết về nó rồi thì có thể tiếp tục xem tiếp mình sẽ phân tích hướng dẫn các bạn giải quyết bài này.
- Vấn đề trở ngại đầu tiên của cách làm này ở chỗ đề yêu cầu tìm ra vị trí j đầu tiên với tình trạng mảng ban đầu sao cho a[j] bằng b[i] trong khi đó ta đều hiểu muốn đi tìm kiếm nhị phân thì bắt buộc tình trạng danh sách phải có trật tự tăng dần hay giảm dần, nghĩa là ta phải đi sắp xếp danh sách mà nếu đi sắp xếp thì nghĩa là các vị trí index sau khi sắp xếp đã bị thay đổi khác đi so với trước khi sắp xếp, mà đề thì lại muốn in ra kết quả vị trí tìm thấy chiếu theo tình trạng dãy trước khi sắp xếp. Vậy nên chỗ này ta hiểu rằng với mỗi giá trị a[j] ban đầu của dãy ta phải lưu kèm theo nó vị trí index j hiện tại để sau khi sắp xếp xong đi tìm kiếm nhị phân gặp đúng phần tử a[j] đó thì kết quả xuất ra sẽ xuất ra giá trị j ban đầu mà nó đã lưu trữ chứ không phải vị trí j hiện tại sau khi đã sắp xếp.
- Vấn đề trở ngại tiếp theo là các phần tử trong mảng a có thể có các phần tử bị trùng nhau, và như thế nếu ta đi tìm kiếm nhị phân lúc này giả sử trong trường hợp tìm ra giá trị a[j] bằng với b[i] thì cũng không đảm bảo rằng giá trị a[j] đó đang mang theo vị trí index j ban đầu lưu trữ đảm bảo nhỏ nhất (vị trí đầu tiên xuất hiện nên là nhỏ nhất). Vậy nên chỗ này ta cần có bước tiền xử lý sau quá trình sắp xếp xong trước khi đi tìm kiếm nhị phân ta có thể xử lý loại bỏ đi các phần tử a[j] bị trùng chỉ để lại duy nhất 1 phần tử phân biệt và vị trí index j mà phần tử đó lưu trữ chính là vị trí nhỏ nhất. Để làm điều này khá đơn giản vì sau quá trình sắp xếp thì những phần tử trùng nhau đã được xếp nằm sát cạnh nhau như thế ta chỉ cần duyệt vòng lặp qua 1 lần là xét được hết những thằng nào trùng. Tuy nhiên các bạn lưu ý sẽ rất dở nếu bạn nào đi cài đặt xoá nhé. Kinh nghiệm là nếu đề bài hướng chúng ta đến việc thêm hay xoá phần tử trên mảng thì chúng ta hãy nhìn xem liệu có cách nào khác để giải quyết được vấn đề nhưng không cần phải đụng tới thêm hay xoá trên mảng không? Tại sao lại như vậy? Bởi các bạn học thì sẽ biết thao tác thêm hay xoá trên mảng trong trường hợp xấu nhất sẽ dẫn đến độ phức tạp O(N) với N là số lượng phần tử của mảng, lúc này toàn bộ các phần tử từ sau vị trí cần thêm hay xoá sẽ phải đồng loạt nhích lên hay xuống, sẽ tạo ra rất nhiều thao tác dịch chuyển. Vậy nên nếu tránh được thì sẽ tốt. Vấn đề phải nhìn ra được bản chất của nó để tránh được. Thì ví dụ qua bài này mình sẽ cho các bạn thấy rõ. Bản chất ở đây ta chỉ cần lọc ra các phần tử phân biệt thôi chứ không nhất thiết phải xoá đi những phần tử trùng. Vậy nên các bạn tưởng tượng ta có thể tạo thêm 1 mảng c chẳng hạn để chứa những phần tử a[j] phân biệt được lấy ra từ mảng a hiện tại. Nghĩa là ta cứ xét phần tử a[j] hiện tại mà trùng với phần tử cuối cùng của mảng c thì coi như phần tử a[j] đó bị trùng và ta sẽ không lấy, còn phần tử a[j] nào khác với phần tử cuối cùng của mảng c hiện tại thì ta sẽ đưa a[j] đó vào cuối cùng của mảng c. Như thế thì sau cùng ta có mảng c chứa các phần tử a[j] phân biệt, nó chỉ cần duyệt 1 vòng lặp qua mảng a và lấy những phần tử phân biệt bỏ qua mảng c, độ phức tạp của bước này sẽ là O(N) với N là số lượng phần tử của mảng a, chứ nếu bạn nào mà đi cài đặt xoá phần tử trùng trong mảng a lúc này độ phức tạp sẽ là O(N^2) nhé. Ta chấp nhận tốn thêm bộ nhớ cho mảng c nhưng lúc này về mặt thời gian xử lý nó sẽ tối ưu hơn rất nhiều. Thậm chí ta không cần tốn thêm bộ nhớ cho mảng c luôn, có thể xem chính mảng a hiện tại như là mảng c bằng cách tạo thêm một biến index k duyệt từ đầu mảng a tức k = 0 còn j bắt đầu duyệt từ phần tử tiếp theo tức j = 1, rồi thì tư tưởng vẫn như trên so sánh phần tử a[j] với a[k] nếu khác nhau thì gán a[j] vào a[k + 1] rồi lại k++, j++ còn nếu trùng nhau thì giữ nguyên k, tăng j++ thôi và cứ thế xét tiếp. Đây bản chất là kỹ thuật 2 con trỏ (two pointer). Các bạn thử suy ngẫm xem nhé. Rồi thì ta nhớ xử lý nếu với những giá trị a[j] nào trùng nhau thì duyệt qua hết tìm giá trị index nhỏ nhất ban đầu mà chúng lưu trữ, sau đó gán nó vào index lưu trữ của a[k] nhé để đảm bảo giá trị phân biệt đó luôn giữ theo vị trí index ban đầu nhỏ nhất.
- Lưu ý nữa là ở bước sắp xếp ta phải dùng những thuật toán sắp xếp tối ưu có độ phức tạp O(N * logN) chứ nếu đi cài những thuật không tối ưu với độ phức tạp O(N^2) thì vẫn sẽ bị TLE nhé. Đơn giản nhất ta dùng hàm sort có sẵn trong thư viện STL sẽ đảm bảo tối ưu và gọn lẹ để gọi ra.
- Rồi thì nếu ta đã xử lý được 2 vấn đề ở trên xong thì lúc này với mỗi giá trị b[i] chỉ việc đi tìm kiếm nhị phân trên mảng a để tìm thấy thì in ra vị trí index mà nó đang lưu trữ. Nếu không tìm thấy thì in ra 0. Lúc này đây thì quá đơn giản rồi.

```c++
#include <bits/stdc++.h>
using namespace std;

struct Data{
    int value;
    int index;
};

/* Hàm bổ trợ cho hàm sort để biết 2 thành phần trong mảng so sánh với nhau dựa theo thuộc tính value và đang đi sắp xếp tăng dần */
bool cmp(const Data &a, const Data &b){
    return a.value < b.value;
}

int main(){
    int n, m;
    cin >> n >> m;
    Data a[n];
    for(int i = 0; i < n; ++i){
        cin >> a[i].value;
        a[i].index = i + 1;
    }

    /* Sắp xếp mảng tăng dần theo thuộc tính value nhờ vào hàm sort có sẵn trong STL có độ phức tạp tối ưu O(N * logN) */
    sort(a, a + n, cmp);

    /* Quá trình xử lý lọc ra các phần tử phân biệt đưa vào chính mảng a hiện tại mà không cần mảng phụ nhờ kỹ thuật 2 con trỏ (two pointer) */
    int cnt = 1;
    for(int i = 1; i < n; ++i){
        if(a[i].value != a[cnt - 1].value){
            cnt++;
            a[cnt - 1] = a[i];
        }
        else{
            if(a[i].index < a[cnt - 1].index){
                a[cnt - 1].index = a[i].index;
            }
        }
    }

    /* Phải nhớ cập nhật lại số lượng phần tử phân biệt */
    n = cnt;

    /* Quá trình tìm kiếm nhị phân */
    while(m--){
        int x;
        cin >> x;
        int idx = 0;
        int left = 0, right = n - 1;
        while(left <= right){
            int mid = (left + right) / 2;
            if(a[mid].value < x){
                left = mid + 1;
            }
            else if(a[mid].value > x){
                right = mid - 1;
            }
            else{
                idx = a[mid].index;
                break;
            }
        }   
        cout << idx << " ";
    }
    return 0;
}
```

- Ở quá trình đi tìm kiếm nhị phân ta tự cài đặt ở trên, bản chất trong STL cũng có hàm binary_search hỗ trợ tìm kiếm nhị phân tuy nhiên hàm này chỉ cho ta biết là có tìm thấy hay không còn ở đây ta muốn là nếu tìm thấy sẽ trả về vị trí index tìm thấy để từ đó ta gọi đến phần tử đó mà lấy ra giá trị index nó đang lưu trữ, vậy nên ta không áp dụng hàm đó được. Tuy nhiên nếu muốn lấy được vị trí index thì ta có 2 hàm lower_bound, upper_bound sẽ làm được điều này, các bạn có thể Google search tìm hiểu thêm về 2 hàm này nhé. Ví dụ mình làm mẫu nếu áp dụng hàm upper_bound thì sẽ thế này:

```c++
#include <bits/stdc++.h>
using namespace std;

struct Data{
    int value;
    int index;
};

/* Hàm bổ trợ cho hàm sort để biết 2 thành phần trong mảng so sánh với nhau dựa theo thuộc tính value và đang đi sắp xếp tăng dần */
bool cmp(const Data &a, const Data &b){
    return a.value < b.value;
}

int main(){
    int n, m;
    cin >> n >> m;
    Data a[n];
    for(int i = 0; i < n; ++i){
        cin >> a[i].value;
        a[i].index = i + 1;
    }

    /* Sắp xếp mảng tăng dần theo thuộc tính value nhờ vào hàm sort có sẵn trong STL có độ phức tạp tối ưu O(N * logN) */
    sort(a, a + n, cmp);

    /* Quá trình xử lý lọc ra các phần tử phân biệt đưa vào chính mảng a hiện tại mà không cần mảng phụ nhờ kỹ thuật 2 con trỏ (two pointer) */
    int cnt = 1;
    for(int i = 1; i < n; ++i){
        if(a[i].value != a[cnt - 1].value){
        cnt++;
        a[cnt - 1] = a[i];
        }
        else{
            if(a[i].index < a[cnt - 1].index){
                a[cnt - 1].index = a[i].index;
            }
        }
    }

    /* Phải nhớ cập nhật lại số lượng phần tử phân biệt */
    n = cnt;

    /* Quá trình tìm kiếm nhị phân áp dụng hàm upper_bound */
    while(m--){
        Data x;
        cin >> x.value;
        int upper = upper_bound(a, a + n, x, cmp) - a;
        if(a[upper - 1].value != x.value){
            cout << "0 ";
        }
        else{
            cout << a[upper - 1].index << " ";
        }
    }
    return 0;
}
```

- Về mặt độ phức tạp thì tự cài đặt hàm tìm kiếm nhị phân hay dùng upper_bound cũng đều như nhau. Tuy nhiên rõ ràng nếu các bạn nào biết dùng upper_bound thì code sẽ ngắn gọn hơn nhiều từ đó đẩy nhanh thời gian hoàn thành bài, nếu đang trong cuộc thi có tính thời gian thì đây là lợi thế.
- Đánh giá độ phức tạp của cách làm này:
  - Độ phức tạp không gian (Space Complexity): O(N) với N là số lượng phần tử của mảng a.
  - Độ phức tạp thời gian (Time Complexity): O(N) của bước đọc dữ liệu mảng a từ input + O(N * logN) của bước sắp xếp mảng a + O(N) của bước lọc ra các phần tử phân biệt + O(M * log(N)) của bước tìm kiếm nhị phân. Tổng quát thì theo quy tắc cộng BigO sẽ lấy theo cái lớn nhất => O(max(N, M) * logN) với M là số lượng phần tử của mảng b, N là số lượng phần tử của mảng a.
- Vậy với độ phức tạp này thì trường hợp xấu nhất là khi N, M đạt giới hạn tối đa theo như đề bài đưa ra là 10^5 phần tử. Như thế thì lúc này số lần lặp cả thảy sẽ là 10^5 + 10^5 * log(10^5) + 10^5 + 10^5 * log(10^5). Mà log(10^5) với log ở đây nói chính xác là logarit cơ số 2 thì logarit cơ số 2 của 10^5 ước chừng sẽ là 17. Vậy tổng quát sẽ là 36*10^5 tức là 3 triệu 600 ngàn lần lặp. Với số lần lặp thế này thì yên tâm sẽ không bị TLE. Và đến đây các bạn đã thấy cái hay của giải thuật rồi chứ? Từ cách làm trước đó trong trường hợp xấu nhất phải lặp hết 10 tỷ 100 ngàn lần lặp thì cách làm này đã rút xuống chỉ còn 3 triệu 600 ngàn lần lặp.
- Thì vẫn còn một cách làm nữa với độ phức tạp cỡ tương tự như cách 2 ở trên nhưng code sẽ rất gọn, đó là dùng cấu trúc map trong STL nếu bạn nào biết thì ứng dụng vào sẽ rất gọn. Bạn nào chưa biết về nó thì có thể Google search tìm hiểu nhé chứ mình sẽ không thể giải thích hết từ đầu được vì dài lắm, mình chỉ mặc định các bạn đã biết rồi và chỉ nói cách xử lý trên nó thôi.
- Thì cấu trúc map bản chất nó cũng là cặp <key, value> nên bản thân nó đã là giải pháp để giải quyết vấn đề key chính là giá trị a[j] còn value chính là vị trí index j ban đầu của nó. Và nó là cấu trúc cây đỏ đen nên bạn nào học sẽ biết là nó không lưu trữ trùng giá trị vì thế mặc định ban đầu value tại key tương ứng mang giá trị 0 thì ta xét nếu truyền key đó vào map mà giá trị value tại đó là 0 nghĩa là key đó chưa được đưa vào thì ta sẽ đưa key đó vào và cập nhật value lại còn nếu value tại đó khác 0 nghĩa là key đó đã có trước đó nên ta không đưa vào. Sau cùng thì map lưu trữ các giá trị phân biệt (các key) và value của từng key chính là vị trí index của nó trong dãy ban đầu. Và khi tìm kiếm trên cấu trúc map thì độ phức tạp của nó là log(N) vì bản thân dữ liệu khi đưa vào nó là đã được sắp xếp và cân bằng cây nên các bước tìm kiếm sẽ rất khoẻ. Nói chung là dùng map thì độ phức tạp vẫn y như cách 2 nhưng bản thân trong cấu trúc của nó đã làm luôn cho ta bước sắp xếp và lọc trùng mà ta không phải mất công tự cài đặt, sẽ làm cho code được gọn hơn nhiều.

```c++
#include <bits/stdc++.h>
using namespace std;

int main(){
    int n, m;
    cin >> n >> m;
    map<int, int> a;
    int x;
    for(int i = 1; i <= n; ++i){
        cin >> x;
        if(a[x] == 0){
            a[x] = i;
        }
    }
    while(m--){
        cin >> x;
        cout << a[x] << " ";
    }
    return 0;
}
```

- Thực ra độ phức tạp của cách dùng map này có thể sẽ cao hơn cách 2 ở trên một chút vì nó phải tốn thêm chi phí cân bằng cây nữa nhưng nói chung vẫn sẽ không bị TLE khi nộp bài nhé. Nên nếu đang trong cuộc thi có tính thời gian thì là mình thì mình sẽ dùng cách map này để nhanh gọn code ra xong bài ahihi