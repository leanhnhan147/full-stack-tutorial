## Taxi
- Để chúc mừng sinh nhật bạn Nhuận ngày 29/2, các bạn học sinh lớp 11A dự định tổ chức dã ngoại đến biển Nha Trang và lớp sẽ đi bằng taxi.
- Các bạn trong lớp được chia thành n nhóm, mỗi nhóm thứ i gồm si bạn (1 ≤ si ≤ 4) và mỗi chiếc taxi chở tối đa 4 hành khách.
- Vậy lớp 11A cần thuê ít nhất bao nhiêu chiếc taxi để chở các nhóm đi, với điều kiện là các bạn trong nhóm phải ngồi chung taxi (một taxi có thể chở một nhóm trở lên).

## Input
- Dòng đầu chứa số nguyên n (1 ≤ n ≤ 105): số lượng các nhóm học sinh
- Dòng số 2 chứa dãy số nguyên s1, s2, ..., sn (1 ≤ si ≤ 4). Các số nguyên cách nhau bởi dấu cách với si là số trẻ em trong nhóm thứ i.

## Output
- In 1 số nguyên duy nhất: số lượng tối thiểu taxi cần thiết để chở tất cả trẻ em đến nơi.

| INPUT     | OUTPUT |
| --------- | ------ |
| 5         | 4      |
| 1 2 4 3 3 |        |

| INPUT           | OUTPUT |
| --------------- | ------ |
| 8               | 5      |
| 2 3 4 4 2 1 3 1 |        |

## Giải thích
- Trong test đầu tiên, các bạn học sinh có thể sắp xếp như sau:
  - Nhóm thứ 3 gồm 4 học sinh
  - Nhóm thứ 4 gồm 3 học sinh
  - Nhóm thứ 5 gồm 3 học sinh
  - Nhóm thứ nhất và nhóm thứ 2 gồm 3 học sinh (1 và 2 học sinh)
- Vậy dữ liệu ra là 4

## Solution
- Với các hệ thống web chấm bài giới hạn thời gian chạy của bài tối đa chỉ được 1 giây thì các bạn sẽ rất dễ bị rơi vào lỗi Time Limit Exceeded (TLE: Chạy quá giới hạn thời gian cho phép). Thì như mình đã nói rất nhiều lần là với các hệ thống web chấm bài hiện nay nếu không muốn bị TLE thì tối đa số phép toán trên toàn bài của các bạn chỉ nên ở ngưỡng (3 đến 5)*10^7 là ngưỡng an toàn với phần lớn hệ thống chấm bài, hoặc với một số hệ thống chấm server mạnh hơn thì có thể nâng ngưỡng lên 10^8 nhưng cũng hên xui nhé. Và thực ra ta không phải đếm chi tiết từng số phép toán trên toàn bài mà ta dựa theo số lần vòng lặp chạy bởi bên trong vòng lặp là nó xử lý lặp đi lặp lại nhiều phép toán nên cứ canh theo đó, các bạn cứ hiểu là tối đa toàn bài chỉ nên lặp (3 đến 5)*10^7 lần là an toàn hoặc tệ nhất là 10^8 (lúc này thì hên xui nhé) còn vượt ngưỡng này là khả năng TLE rất cao nhe. Lưu ý là ngưỡng mình vừa nói ở trên là với ngôn ngữ C/C++ thôi nhé chứ nếu với những ngôn ngữ khác như Python, C# hay Java nó chạy chậm hơn C/C++ thì ngưỡng đó phải thấp hơn, hoặc người ra đề sẽ chủ động đưa ra giới hạn nếu nộp với C/C++ thì thời gian chạy quy định tối đa 1 giây, các ngôn ngữ khác thì 2 giây. Và ngưỡng mình đưa ra ở trên nếu với đề cho thời gian 2 giây thì các bạn cứ tỷ lệ thuận nhân 2 lên với ngưỡng, 3 giây thì nhân 3, nếu 100 ms tức là 1/10 giây thì các bạn chia 10 cho ngưỡng đó nhé, cứ thế thôi.
- Rồi thì với bài này giới hạn thời gian là 1 giây thì cứ như ở trên mình đã phân tích kỹ rồi hen. Giờ ta sẽ thảo luận cách giải quyết bài này.
- Bài này dùng giải thuật tham lam (Greedy Algorithms) để giải quyết. Kể cả bạn nào có không biết về giải thuật tham lam này thì thực ra đôi khi các bạn đang giải quyết vấn đề theo chính tư tưởng của tham lam mà các bạn không biết. Cho bạn nào không biết thì mình có thể nói nhanh như thế này: Tham lam ở đây nghĩa là ta sẽ cố gắng chọn ra cách giải quyết tốt nhất trong tất cả các cách ở hiện tại rồi đi theo cách giải quyết tốt nhất đó nếu lại đứng trước nhiều lựa chọn cách giải quyết khác nhau nữa thì ta lại cố gắng chọn theo cách giải quyết tốt nhất trong số đó tóm lại cứ tốt nhất mà triển vì thế tên gọi nó là tham lam. Quy luật nó là như vậy thôi chứ còn lại không có công thức từng bước cụ thể giải quyết như mấy thuật toán khác. Mà ta có thể giải quyết theo cách bất kỳ miễn cái tư tưởng mà ta giải quyết luôn là chọn theo hướng tốt nhất trong các lựa chọn thì đó chính là tư tưởng của tham lam
- Thì tại sao bài này lại có thể nhìn ra tư tưởng của nó là tham lam? Đọc kỹ đề ta sẽ thấy yêu cầu là hãy làm sao để chở được hết các nhóm học sinh đi sao cho cùng 1 nhóm là phải cùng ngồi chung trên 1 xe chứ không tách lẻ nhóm ra, nhưng hãy chọn phương án sao cho phải thuê ít xe nhất (để tiết kiệm tiền nhất đấy hehe). Thì rõ ràng là tham lam chứ còn gì nữa, muốn thế này, muốn thế kia nhưng muốn phải trả ít tiền nhất (thuê ít xe nhất). Nghĩa là phải tìm ra được phương án tối ưu nhét được càng nhiều học sinh thoả điều kiện lên 1 xe đến khi nào không nhét được nữa thì mới thôi (1 xe chứa tối đa 4 học sinh).
- Đầu tiên ta cần phân loại ra có 4 nhóm học sinh là nhóm 1 người, nhóm 2 người, nhóm 3 người, nhóm 4 người. Cần thống kê xem mỗi nhóm trong 4 nhóm ở trên sẽ có số lượng là bao nhiêu ? Như ví dụ 1 của đề bài thì nhóm 1 người có số lượng 1, nhóm 2 người có số lượng 1, nhóm 3 người có số lượng 2, nhóm 4 người có số lượng 1. Còn như ví dụ 2 của đề bài thì mỗi nhóm đều có số lượng là 2 hết. Thì bước này rất dễ dàng nếu ta sử dụng mảng đánh dấu, tạo mảng a có 5 phần tử để index mảng từ 0 đến 4, ta bỏ qua không dùng đến index 0 chỉ dùng các index từ 1 đến 4 và hiểu rằng a[i] chính là số lượng của nhóm có i người. Vậy nên ngay từ đầu ta khởi tạo mảng đánh dấu a toàn bộ phần tử đều là 0, rồi với mỗi giá trị x đọc vào từ input ta sẽ hiểu là a[x]++ nghĩa là nhóm x đó sẽ được tăng số lượng thêm 1. Sau cùng ta chỉ cần xét mảng a là biết được cả thảy mỗi nhóm có số lượng bao nhiêu.
- Rồi ta sẽ hiểu rằng chắc chắn với nhóm 4 người thì 1 nhóm 4 người đó là vừa đủ kín chỗ trên 1 xe taxi rồi. Vì 1 xe taxi tối đa có thể chứa 4 học sinh mà. Vậy nên với nhóm 4 người có số lượng bao nhiêu thì cần bấy nhiêu xe taxi. Vậy nên gọi res là biến lưu đáp án của bài thì trước tiên res = a[4].
Giờ xét qua nhóm 3 người, thì 1 nhóm 3 người là cùng phải lên chung 1 xe cho đúng với quy luật của đề bài nên chắc chắn không có chuyện xé lẻ nhóm qua các xe khác nhau. Vậy nên cũng chắc chắn rằng có bao nhiêu nhóm 3 người thì cần có thêm bấy nhiêu xe taxi nữa để chở hết. Nên chỗ này res += a[3].
- Tuy nhiên ta thấy rằng lúc này đây với các xe taxi chở nhóm 3 người thì mỗi xe đang trống 1 chỗ. Hiện tại còn lại nhóm 2 người và nhóm 1 người ta chưa xét, nhưng nhóm 2 người thì chắc chắn là không xé lẻ 1 người ra được rồi nên 1 chỗ trống trên mỗi xe này chắc chắn chỉ dành cho các nhóm 1 người. Lúc này đây ta hiểu rằng a[1] -= a[3] nghĩa là có bao nhiêu nhóm 3 người thì sẽ trừ số lượng bấy nhiêu vào nhóm 1 người. Nếu sau việc trừ này mà số lượng nhóm 1 người (a[1]) mà <= 0 thì nghĩa là toàn bộ nhóm 1 người đều đã xét vào hết xe của các nhóm 3. Còn nếu a[1] > 0 nghĩa là vẫn còn lại các nhóm 1 người chưa lên xe. Lúc này ta sẽ để đó xét đến sau, giờ tiếp tục xét tiếp.
- Tiếp tục xét qua nhóm 2 người, thì ta thấy rằng chỉ cần có 2 nhóm 2 người là có thể lấp đủ 4 chỗ trên 1 xe (vì 2 * 2 = 4), vậy nên nghĩa là số lượng xe taxi cần thêm sẽ là res += a[2] / 2. Nếu giả sử a[2] có số chẵn thì coi như toàn bộ số lượng nhóm 2 người sẽ đều đưa hết lên các xe. Nhưng nếu giả sử a[2] là số lẻ thì giờ đây còn lại 1 nhóm 2 người chưa lên được xe, lúc này đây sẽ xét riêng nhóm 2 người này lên 1 xe mới, lúc này đây xe này lại dư 2 chỗ nên có thể đưa thêm 2 người từ nhóm 1 người qua, nghĩa là a[1] -= 2 và res++.
- Giờ đây chỉ còn lại mỗi nhóm 1 người là ta chưa xét, nếu giả sử số lượng nhóm 1 người (a[1]) hiện tại mà <= 0 thì coi như không cần xét nữa vì đã đưa hết lên các xe rồi. Nhưng nếu a[1] mà > 0 thì ta sẽ xét đưa hết các nhóm 1 người này lên các xe, thì lúc này đây đơn giản là cứ 4 người thì lên 1 xe, số xe lúc này cần thêm sẽ là res += a[1] / 4. Tuy nhiên cần phải tính đến tình huống sẽ còn những nhóm không nhét lên đủ 4 người trên 1 xe thì nhóm đó sẽ đi riêng 1 xe, ví dụ nếu a[1] là 10 chẳng hạn thì 10/4 = 2 tức là đưa thêm 2 xe đến để chở 8 bạn đi, thì lúc này còn lại 2 bạn sẽ phải được đi riêng 1 xe, vì thế ta nhớ xét nếu a[1] % 4 mà khác 0 thì phải thêm 1 xe nữa tức là phải res++.
- Rồi thì ở trên toàn bộ là quy trình xét xử lý, rất đơn giản nhưng ta phải chú ý ràng buộc kỹ điều kiện tránh bỏ sót, cũng như các bạn chú ý ở việc khi ta tính ra số lượng người còn lại ở mỗi nhóm bằng công thức chia lấy dư % thì công thức này không áp dụng được với số <= 0 nhé, chỉ xét được với số > 0 thôi nên ràng buộc thêm điều kiện tránh chương trình bị văng lỗi nha.
- Cũng nói thêm nếu bạn nào không dùng tư tưởng mảng đánh dấu ngay từ bước đọc dữ liệu đầu vào để thống kê nhanh số lượng của mỗi nhóm mà các bạn lưu trữ theo dạng mảng 1 chiều thì việc xử lý sẽ phải phức tạp lên, quan trọng phải nhìn ra được chỗ này nhé.

```c++
int main(){
    int n;
    cin >> n;
    int a[5] = {0};
    while(n--){
        int x;
        cin >> x;
        a[x]++;
    }
    int res = a[4] + a[3];
    a[1] -= a[3];
    if(a[2] != 0){
        res += a[2] / 2;
        a[2] %= 2;
        if(a[2] != 0){
            a[1] -= 2;
            res++;
        }
    }
    if(a[1] >= 4){
        res += a[1] / 4;
        a[1] %= 4;
    }
    if(a[1] > 0){
        res++;
    }
    cout << res;
    return 0;
}
```

## Source code
```java
package algrithms.greedyAlgorithms;

import java.util.Scanner;

public class Taxi {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int a[] = new int[n];
        while(n > 0){
            int x = scanner.nextInt();;
            a[x]++;
            n--;
        }
        int res = a[4] + a[3];
        a[1] -= a[3];
        if(a[2] != 0){
            res += a[2] / 2;
            a[2] %= 2;
            if(a[2] != 0){
                a[1] -= 2;
                res++;
            }
        }
        if(a[1] >= 4){
            res += a[1] / 4;
            a[1] %= 4;
        }
        if(a[1] > 0){
            res++;
        }
        System.out.println(res);
    }
}

```