
// Code thuần
const courseName = 'Javascript';
const description = 'Course name: ' + courseName;

// Output: Course name: Javascript
console.log(description);

// Template String
const courseName1 = 'Javascript';
const description1 = `Course name: ${courseName1}`;

// Output: Course name: Javascript
console.log(description1);

const courseName2 = 'Javascript';
const courseName3 = 'PHP';
const courseName4 = 'Java';
const description2 = `Course name: ${courseName2} ${courseName3} ${courseName4}`;

// Output: Course name: Javascript PHP Java
console.log(description2);

// Note: Khi thêm ký tự đặc biệt như /, ${} trong Template String nội suy 
const description3 = `Them ky tu \\`
console.log(description3)   // output: Them ky tu \

const description4 = `Them ky tu \{}`
console.log(description4)   // output: Them ky tu \{}

// ==> Khi muốn thêm ký tự đặc biệt trong Template String, ta phải thêm 1 ký tự "\" ở đằng trước ký tự đặc biệt.


// Tóm lại: Khi muốn in ra màn hình bằng Console.log()
// Code thuần: Ta nối chuối bằng toàn tử +
// Template String: Ta đổi dấu "" thành `` và muốn in giá trị của biến ta thêm ${Variable}


// Muti-line String

// Example 01: Muti-line String
const lines1 = 'Line 1\nLine 2\nLine 3';

console.log(lines1);    // Output:  Line 1
                        //          Line 2
                        //          Line 3

// Example 02: Muti-line String
const lines2 = 'Line 1\n'
                + 'Line 2\n'
                + 'Line 3\n';

console.log(lines2);    // Output:  Line 1
                        //          Line 2
                        //          Line 3    
                        
// Template String
const lines3 = `Line 1
Line 2
Line 3`;

console.log(lines3);    // Output:  Line 1
                        //          Line 2
                        //          Line 3


