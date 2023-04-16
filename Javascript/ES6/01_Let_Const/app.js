
// 1. Var | Let, Const: Scope, Hosting

// 2. Const | Var, Let: Assignment

// Scope: Code block (if else, loop, {}, ...)

// Outside block
// Var
{
    var course = 'Javascript basic!';
}

// Output: Javascript basic!
console.log(course);

// Let
{
    let course = 'Javascript basic!';
}

// Output: Course is not defined
console.log(course);

// Const
{
    const course = 'Javascript basic!';
}

// Output: Course is not defined
console.log(course);

// Inside block
// Var
{
    var course = 'Javascript basic!';
    {
        {
            // Output: Javascript basic!
            console.log(course);
        }
    }
}

// Let
{
    let course = 'Javascript basic!';
    {
        {
            // Output: Javascript basic!
            console.log(course);
        }
    }
}

// Const
{
    var course = 'Javascript basic!';
    {
        {
            // Output: Javascript basic!
            console.log(course);
        }
    }
}

// Tóm lại: 
// Var sử dụng được cả bên ngoài và bên trong Code Block {}
// Let, Const chỉ sử dụng được bên trong Code Block {}

// Hosting
// Var
a = 1;
var a;

// Output: 1
console.log(a);

// Let
a = 1;
let a;

// Output: Cannot access 'a' before initialization
console.log(a);

// Const
a = 1;
// const a;

// Output: Missing initializer in const declaration
console.log(a);

// Tóm lại:
// Var có thể gán giá trị biến rồi mới khai báo biến đó.
// Let, Const không thể gán giá trị biến rồi mới khai báo biến đó.

// Assignment
// var
var a = 1;
a = 100;

// Output: 100
console.log(a);

// Let
let a = 1;
a = 100;

// Output: 100
console.log(a);

// Const
const a = 1;
a = 100;

// Output: Assignment to constant variable
console.log(a);

// Tóm lại:
// Var, Let khi đã gán giá trị cho biến rồi sau đó có thể gán lại giá trị khác cho biến đó.
// Const khi đã gán giá trị cho biến rồi sau đó không thể gán lại giá trị khác cho biến đó.

// Code thuần ==> Dùng Var
// Babel ==> Dùng Let, Const
// - Khi định nghĩa biến và không gán lại biến đó ==> Dùng Const
// - Khi cần gán lại giá trị biến ==> Dùng Let