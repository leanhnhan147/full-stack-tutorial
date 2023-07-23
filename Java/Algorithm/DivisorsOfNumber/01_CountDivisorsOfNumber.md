# Count Divisions of Number

## Solution
- Với các hệ thống web chấm bài giới hạn thời gian chạy của bài tối đa chỉ được 1 giây thì các bạn sẽ rất dễ bị rơi vào lỗi Time Limit Exceeded (TLE: Chạy quá giới hạn thời gian cho phép). Thì như mình đã nói rất nhiều lần là với các hệ thống web chấm bài hiện nay nếu không muốn bị TLE thì tối đa số phép toán trên toàn bài của các bạn chỉ nên ở ngưỡng (3 đến 5)*10^7 là ngưỡng an toàn với phần lớn hệ thống chấm bài, hoặc với một số hệ thống chấm server mạnh hơn thì có thể nâng ngưỡng lên 10^8 nhưng cũng hên xui nhé. Và thực ra ta không phải đếm chi tiết từng số phép toán trên toàn bài mà ta dựa theo số lần vòng lặp chạy bởi bên trong vòng lặp là nó xử lý lặp đi lặp lại nhiều phép toán nên cứ canh theo đó, các bạn cứ hiểu là tối đa toàn bài chỉ nên lặp (3 đến 5)*10^7 lần là an toàn hoặc tệ nhất là 10^8 (lúc này thì hên xui nhé) còn vượt ngưỡng này là khả năng TLE rất cao nhe. Lưu ý là ngưỡng mình vừa nói ở trên là với ngôn ngữ C/C++ thôi nhé chứ nếu với những ngôn ngữ khác như Python, C# hay Java nó chạy chậm hơn C/C++ thì ngưỡng đó phải thấp hơn, hoặc người ra đề sẽ chủ động đưa ra giới hạn nếu nộp với C/C++ thì thời gian chạy quy định tối đa 1 giây, các ngôn ngữ khác thì 2 giây. Và ngưỡng mình đưa ra ở trên nếu với đề cho thời gian 2 giây thì các bạn cứ tỷ lệ thuận nhân 2 lên với ngưỡng, 3 giây thì nhân 3, nếu 100 ms tức là 1/10 giây thì các bạn chia 10 cho ngưỡng đó nhé, cứ thế thôi. 
- Ước số của 1 số N là gì? Là những số mà số N đó chia hết thì được gọi là ước số. Ví dụ số 6 có 4 ước số là 1, 2, 3, 6 vì những số này thì 6 đều chia hết. 

### Cách thứ 1 
- Vậy rõ ràng nhận thấy cách đơn giản nhất chính là duyệt vòng lặp xét lần lượt từng số từ 1 đến N, đặt biến đếm nếu N chia hết cho số nào thì tăng biến đếm lên và vòng lặp chạy xong thì ta có biến đếm chính là số lượng ước số của N. Cách làm này có độ phức tạp là O(N) vì vòng lặp chạy đủ N lần từ 1 đến N.
```c++
// O(N)
int Solve1(int n){
    int cnt = 0;
    for(int i = 1; i <= n; ++i){
        if(n % i == 0){
            cnt++;
        }
    }
    return cnt;
}
```
- Thì cách làm này sẽ AC nếu đề bài cho giới hạn thời gian chạy 1 giây và độ lớn N tối đa 10^8 trở xuống (hên xui), chắc ăn nhất là từ (3 đến 5)*10^7 trở xuống nhé. Còn nếu lớn hơn 10^8 thì xác định là sẽ bị TLE. Lý do như mình đã phân tích ở phần đầu tiên.
- Vậy nên nếu bài cho giới hạn N nhỏ trong ngưỡng phù hợp thì nếu là mình thì mình cũng code theo cách ở trên vì nó là cách đơn giản dễ nhất để code ra được, không phải nặng đầu suy nghĩ tối ưu làm chi.
- Tuy nhiên nếu đề cho N lớn hơn ngưỡng phù hợp ví dụ N có thể lên đến 10^9 hay 10^10 hay hơn nữa thì không ổn với cách ở trên rồi, lúc đó ta sẽ có những cách tối ưu hơn.

### Cách thứ 2
- Ta nhận thấy một số nguyên N bất kỳ sẽ không thể chia hết cho bất kỳ giá trị nào trong đoạn từ N/2 + 1 đến N - 1. Vậy nên vòng lặp ta chỉ cần xét đến N/2 là được tức là chạy N/2 lần và xét riêng trường hợp N. Như thế thì cách này sẽ chạy nhanh gấp đôi cách thứ 1 trước đó. 
```c++
// O(N/2)
int Solve2(int n){
    int cnt = 1;
    int sz = n/2;
    for(int i = 1; i <= sz; ++i){
        if(n % i == 0){
            cnt++;
        }
    }
    return cnt;
}
```
- Thì tuy về mặt thực tế nó sẽ chạy nhanh gấp đôi cách làm thứ 1, nhưng xét về mặt lý thuyết độ phức tạp thì O(N/2) vẫn xem như là O(N). Vậy nên nếu với N > 10^8 trở lên thì cách làm này vẫn sẽ bị TLE. Lúc này ta qua cách thứ 3 sẽ giải quyết được vấn đề.

### Cách thứ 3 
- Một tính chất thú vị là nếu N chia hết cho số nào (ví dụ số a) thì sẽ đồng thời tồn tại số b có giá trị N/a và lúc này N cũng sẽ chia hết cho b. Đây là quy luật thôi bạn thử suy nghĩ đi. 
- Ví dụ:
   - 100 chia hết cho 1, thì đồng thời 100 chia hết cho 100/1 = 100 => có 2 ước số là {1, 100}
   - 100 chia hết cho 2, thì đồng thời 100 chia hết cho 100/2 = 50 => có 2 + 2 = 4 ước số (có thêm cặp ước số {2, 50})
   - 100 chia hết cho 4, thì đồng thời 100 chia hết cho 100/4 = 25 => có 4 + 2 = 6 ước số (có thêm cặp ước số {4, 25})
   - 100 chia hết cho 5, thì đồng thời 100 chia hết cho 100/5 = 20 => có 6 + 2 = 8 ước số (có thêm cặp ước số {5, 20})
   - 100 chia hết cho 10, thì đồng thời 100 chia hết cho 100/10 = 10 => lưu ý lúc này 2 số 10 bị trùng nhau nên chỉ tính 1 thôi => có 8 + 1 = 9 ước số (có thêm 1 ước số {10})
- Đến đây có thể dừng, vì nếu xét tiếp thì 100 chia hết cho 20, thì 100/20 = 5, lúc này cặp ước số {20, 5} ta đã xét trước đó rồi (lúc xét 100 chia hết cho 5).
- Vậy nên ta chỉ xét giá trị a từ 1 đến căn bậc 2 của N, tức là a <= sqrt(N) thì sẽ tồn tại giá trị b >= sqrt(N) mà N sẽ cùng chia hết cho cả a và b. Trường hợp cuối cùng là nếu a == sqrt(N) thì b cũng == sqrt(N) lúc này ta chỉ tính là 1 ước số thôi vì nó trùng nhau, đây là trường hợp đặc biệt khi N là số chính phương (là số mà khai căn bậc 2 ra được số nguyên hay có thể hiểu là số mà có tồn tại số nguyên sao cho bình phương lên ra được số ban đầu ví dụ các số: 4, 9, 16, 25, 36, 49, 64, 81, 100 ...)
- Vậy nếu theo cách làm này thì ta chỉ cần chạy vòng lặp duyệt hết sqrt(N) (căn bậc 2 của N) là đếm được hết các ước số của số N. Nó tối ưu hơn hẳn cách 1 và cách 2. Vì sao thử nhẩm xem? Giả sử nếu N = 1 tỷ thì cách 1 chạy hết 1 tỷ lần, cách 2 chạy hết 500 triệu lần còn cách 3 thì chỉ chạy hết 33000 (33 nghìn lần). Vậy nên ví dụ ngay với N = 1 tỷ thì cách 1 và 2 sẽ bị TLE vì vượt ngưỡng nhưng cách 3 sẽ vẫn Accepted (AC) thành công vì chưa vượt ngưỡng (còn xa lắm mới đến ngưỡng ahihi).
```c++
// O(sqrt(N))
int Solve3(int n){
    int i;
    int cnt = 0;
    for(i = 1; i * i <= n; ++i){
        if(n % i == 0){
            cnt += 2;
        }
    }
    if((i - 1) * (i - 1) == n){
        cnt--;
    }
    return cnt;
}
```
- Trong code ở trên chỗ điều kiện vòng lặp mình ghi là i * i <= n thì nó cũng tương tự i <= sqrt(n) nhé các bạn. Tuy nhiên nên để i * i <= n sẽ tốt hơn vì nó tránh bị sai số do hàm sqrt là hàm xử lý trả về kết quả dạng số thực. Ví dụ giả sử sqrt(100) sẽ là 10 đúng không? Nhưng nếu giả sử có sai số nó chỉ ra 9.99999999 rồi thì so sánh ép kiểu chỉ so sánh phần nguyên thì như thế nó sẽ chỉ chạy đến 9 thôi như thế là có sai sót rồi. Tất nhiên ở trên là ví dụ của mình cho anh em hiểu thôi chứ 100 thì sqrt tính chắc không sai đâu, nhưng ví dụ nếu là 10^18 thì có thể sai đấy ai biết được, số càng lớn là càng dễ sai vì thế nếu ta có thể chủ động phòng tránh bằng việc so sánh nhân 2 số nguyên với nhau (tức là bình phương) rồi so sánh với N vẫn còn thoả <= N thì tiếp tục tăng lên đến khi nào nó bình phương mà > N nghĩa là nó đã vượt qua ngưỡng sqrt(N) và phép nhân 2 số nguyên, so sánh số nguyên thì không sợ bị sai số gì nhé.
- Và trong code trên bên trong điều kiện vòng lặp chỉ cần thấy giá trị nào thoả chia hết thì ta cộng lên 2 vào kết quả vì đó là 1 cặp. Tuy nhiên cần kiểm tra lại trường hợp đặc biệt nếu N là số chính phương thì sẽ bị tính 2 lần ước của nó là sqrt(N) vì thế sau cùng ta phải có điều kiện kiểm tra nếu tình huống đó xảy ra thì ta phải giảm bớt đáp án đi 1.
- Với cách làm ở trên độ phức tạp O(sqrt(N)) thì với N <= 10^16 ta sẽ không sợ bị chạy quá giới hạn thời gian. Vì 10^16 căn bậc 2 cũng chỉ ra 10^8. Nhưng nếu vượt ngưỡng 10^16 ví dụ N = 10^17 hay 10^18 chẳng hạn thì lúc này cách này vẫn sẽ bị chạy quá giới hạn thời gian, lúc đó ta phải nhờ đến cách thứ 4 tiếp theo đây, đây là cách rất thú vị nhờ tính chất toán học mang lại.

### Cách 4
- Các bạn có bao giờ làm bài toán phân tích số N thành tích các thừa số nguyên tố chưa? Nếu bạn nào có chưa biết thì mình nói nhanh là với số nguyên bất kỳ >= 2 (bởi 2 là số nguyên tố nhỏ nhất) thì đều có thể biểu diễn nó dưới dạng tích của các số nguyên tố. Cách để phân tích một số thành tích các thừa số nguyên tố thì chỉ là liên tục chia số đó cho số nguyên tố nhỏ nhất mà nó có thể chia hết được và cứ chia đến khi nào không chia được nữa thì xét qua số nguyên tố nhỏ nhất tiếp theo mà nó có thể chia hết được và cứ thế chia đến khi nào số nguyên ban đầu về 1 thì dừng. Bạn nào vẫn chưa rõ thì có thể theo từ khoá mình nói Google search tìm hiểu thêm nhé.
- Ví dụ với N = 100 thì:
  - 100 / 2 = 50
  - 50 / 2 = 25
  - 25 / 5 = 5
  - 5 / 5 = 1
- Vậy 100 = 2 * 2 * 5 * 5 hay có thể viết gọn là 2^2 * 5^2 (^ là mũ nhé chứ không phải phép toán xor)
- Và có 1 tính chất khá thú vị đó là nếu số N phân tích ra được thành tích của các số nguyên tố có dạng x^a * y^b * z^c * ... với x, y, z là các số nguyên tố còn a, b, c là các mũ luỹ thừa thì số N sẽ có số lượng các ước số phân biệt = (a + 1) * (b + 1) * (c + 1) * ... tức là các mũ lũy thừa + 1 và nhân tích chúng lại với nhau
- Như ví dụ ở trên 100 = 2^2 * 5^2 vậy 100 sẽ có (2 + 1) * (2 + 1) = 3 * 3 = 9 ước số. 
```c++
// O(sqrt(N))
int Solve4(int n){
      int res = 1;
      for(int i = 2; i * i <= n; ++i){
            int cnt = 0;
            while(n % i == 0){
                  cnt++;
                  n /= i;
            }
            if(cnt != 0){
                  res *= (cnt + 1);
            }
      }
      if(n != 1){
             res *= 2;
      }
      return res;
}
```
- Với cách làm này thì xét về lý thuyết độ phức tạp thì nó vẫn là O(sqrt(N)) bởi độ phức tạp căn cứ theo trường hợp xấu nhất thì nếu N là số nguyên tố, nếu là vậy thì nó sẽ chẳng chia hết cho số nào khác ngoài 1 và chính nó, và như thế vòng lặp while sẽ chẳng lặp lần nào và giá trị N vẫn được giữ nguyên không bị giảm đi, như thế thì vòng lặp for sẽ lặp đủ sqrt(N) lần, vậy nên thuật toán này độ phức tạp của nó được đánh giá trên lý thuyết là O(sqrt(N)) tức là cũng ngang độ phức tạp với thuật toán số 3. Tuy nhiên thực tế thì thuật toán này sẽ tốt hơn thuật toán số 3 bởi nếu khi N không phải là số nguyên tố thì số lần nó lặp chắc chắn nhỏ hơn sqrt(N) lần trong khi đó ở thuật toán số 3 thì dù N là số nguyên tố hay không thì luôn lặp đủ sqrt(N) lần. Để rõ hơn chúng ta thử quay lại ví dụ khi N = 10^9 (1 tỷ) nhé thì phân tích ra sẽ được 2^9 * 5^9 vậy 1 tỷ sẽ có (9 + 1) * (9 + 1) = 10 * 10 = 100 ước số phân biệt. Vậy với N = 1 tỷ tính tương đối thì vòng lặp for chạy hết 5 lần và vòng lặp while lặp hết 18 lần. Cả thảy chỉ 23 lần lặp xét là ra được kết quả trong khi đó với thuật toán số 3 cần phải chạy hết 33 nghìn lần. Đến đây các bạn đã thấy rõ sự tối ưu của thuật toán số 4 này chưa? 
- Thậm chí tuỳ theo vấn đề của bài toán, ở đây chỉ là ta đếm số ước số của 1 số N tức là chỉ cần phân tích mỗi duy nhất số N thành tích các thừa số nguyên tố. Giả sử bài toán cần đếm số ước số của nhiều số N khác nhau thì lúc này cần phân tích nhiều số N khác nhau thành tích các thừa số nguyên tố, lúc này ta có thể tạo mảng lưu trữ các giá trị số nguyên tố nhỏ nhất mà N chia hết thì việc phân tích số N thành thừa số nguyên tố chỉ có độ phức tạp O(logN) nó còn nhanh hơn rất nhiều so với O(sqrt(N)) dù cho N rơi vào trường hợp xấu nhất khi N là số nguyên tố.