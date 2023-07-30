var number = [50,20,30,40,55,66,88,99,50]

for (var i = 0; i < number.length; i++) {
    var numbers =number[i];
    if (numbers > 50) {
        break;
    }
    console.log(numbers);
}