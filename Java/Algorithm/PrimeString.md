Farmerboy vừa mới học về chuỗi nguyên tố. Một chuỗi gọi là chuỗi nguyên tố khi số các kí tự alphabet khác nhau của mỗi chuỗi là số nguyên tố và số lần xuất hiện của mỗi kí tự alphabet là số nguyên tố. Cho một chuỗi, xác định nó có phải là chuỗi nguyên tố hay không.

#### Input
- Dòng 1 gồm 1 số nguyên tố T là số test. T dòng tiếp theo mỗi dòng là chuỗi S cần xác định. Các ký tự trong chuỗi từ a đến z

#### Output
- In ra T dòng ứng với mỗi test, in ra YES nếu chuỗi là Chuyễi nguyên tố, ngược lại in ra NO

#### Giới hạn
- 1 <= T <= 10
- 1 <= Độ dài chuỗi <= 100000

| INPUT  | OUTPUT |
| ------ | ------ |
| 2      |        |
| ababb  | YES    |
| abcabb | NO     |

#### Giải thích
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

#### Source Code
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