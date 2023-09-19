function isPlainObject(value) {
  // Start coding here
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  } else if (typeof value === "object" && (Array.isArray(value) || value === null)) {
    return false;    
  //} else if (Array.isArray(value)) {
  //  return false;
  //} else if (value === null) {
  //  return false;
  } else {
    return "This is not an object";
  }
}

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);

// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false


//รับ Parameter 1 ตัว ซึ่งมี Value เป็น Data Type อะไรก็ได้ (เช่น String, Number, Object, Null, Undefined, Etc)
//โดย Function นี้เอาไว้ตรวจสอบ Data Type ของ Parameter ที่ส่งเข้ามาว่า Data Type เป็น Object จริงๆ ไม่ใช่ Null หรือ Array หรืออื่น ๆ
//ผลลัพธ์ที่ Return ออกมาจาก Function จะมี Value เป็น Boolean
//ถ้าผลลัพธ์มี Data Type เป็น Object ผลลัพธ์จะเป็น true
//ถ้าผลลัพธ์มี Data Type เป็น Array ผลลัพธ์จะเป็น false
//ถ้าผลลัพธ์มี Data Type เป็น Null ผลลัพธ์จะเป็น false
//กรณีที่ผลลัพธ์ไม่เป็นทั้ง Object, Array หรือ Null ให้ Return ข้อความว่า “This is not an object”
