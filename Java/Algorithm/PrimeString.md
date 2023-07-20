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