/*
<Buffer 00 00 00> It is a binary data
Buffer is a region of memory used to temporarily hold data while it is being moved from one place to another.
A buffer is used when moving data between processes within a computer. Majority of buffers are implemented in software.
Buffers are generally used when there is a difference between the rate at which data is received and the rate at which
it can be processed.
If we remove buffers, then either we will have data loss, or we will have lower bandwidth utilization.
 */

let buffer = Buffer.alloc(1)
console.log(buffer)

buffer = Buffer.from([1, 2, 3])
console.log(buffer)

buffer = Buffer.from("Hello world")
console.log(buffer)
console.log(buffer.toString())

// Alphabet in ASCII
let abc = Buffer.alloc(26)
console.log(abc)
for (let i = 0; i < 26; i++) {
    abc[i] = i + 97 // 97 is the ASCII code for 'a'
}
console.log(abc)
console.log(abc.toString())
