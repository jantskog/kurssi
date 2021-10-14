/*Seuraavat lauseet ovat tosia:
Lause A on ”Pekka on vakosamettihousuinen mies”.
Lause B on ”Rauni ei ole vihainen”.
Lause C on ”Harri on yhdeksän”.
Lause D on ”Sataa”.
&& = JA
|| = TAI
!=EI

Ovatko seuraavat väittämät tosia?
a) (!D || !C && !B)  (e)
b) (D && !B || !A) (e)
c) (!D || A) (t)
d) (B && !A) (e)
e) (D && !B || !A) || (!D || A) (t)
f) (!(!C && !B) && (!D || B)) (t) */

var A = true
var B = true
var C = true
var D = true

if (!D || !C && !B) {
    console.log("a) T")
} else {
    console.log("a) F")
}
if (D && !B || !A) {
    console.log("b) T")
} else {
    console.log("b) F")
}
if (!D || A) {
    console.log("c) T")
} else {
    console.log("c) F")
}
if (B && !A)  {
    console.log("d) T")
} else {
    console.log("d) F")
}
if ((D && !B || !A) || (!D || A)) {
    console.log("e) T")
} else {
    console.log("e) F")
}
if (!(!C && !B) && (!D || B)) {
    console.log("f) T")
} else {
    console.log("f) F")
}
