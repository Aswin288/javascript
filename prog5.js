


num1=10000
num2=10000
num3=10000
if (num1>num2 && num1>num3) {
    console.log(`${num1} is the greatest`);
}
else if (num2>num3 && num2>num1) {
    console.log(`${num2} is the greatest`);
}
else if (num3>num1 && num3>num2) {
    console.log(`${num3} is the greatest`);
}
else if (num1===num2 && num1>num3) {
    console.log(`${num3} is the greatest`);
}
else {
    console.log(`all are equal`);
}