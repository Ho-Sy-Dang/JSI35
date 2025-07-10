// // get elements ... [HTML Collection]
// // them item vao body
// const item = Array(100); // tao mang 100 phan tu rong

// // for i: duyet ca phan tu rong (undefined)
// for (let i = 0; i < item.length; i++) {
//     const item = document.createElement("div");
//     item.innerText = `Item ${i + 1}`;
//     document.body.appendChild(item);
// }

// // forEach: khong duyet phan tu rong
// item.forEach((item, index) =>{
//     console.log(item, index); // khong hien vi phan tu empty
// });

// // lay danh sach cac phan tu tu Doc
// const elements = document.getElementsByClassName("div"); // HTML Collection
// console.log(elements.item[15])

// const elementsQ = document.querySelectorAll("div"); // NodeList
// console.log(elementsQ)

// --------------------------------------------
// input
// tao element input
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter title...";
input.style.width = "300px";
input.style.height = "30px";
// bat su kien cho input
input.addEventListener("click", () =>{
    // arrow function (ES6+) khong co ngu canh (context)
    console.log(this); // tra ve window
});

input.addEventListener("dblclick", function() {
    // function expression: CO THE GHI NHO NOI KHAI BAO HAM
    console.log(this); // tra ve element
    // dat bien luu tru this
    const_this = this;
    function test() {
        console.log(this) // tra ve window
    }
    test(); // goi ham test
});

// thay doi title khi nhap input
input.onkeyup = () => {
    document.title = input.value.trim() || "Untitled";
};

// them vao body
document.body.appendChild(input);
