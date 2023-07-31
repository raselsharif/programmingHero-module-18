var bookPrices = [200, 300, 70, 150, 80, 75, 65, 60, 210, 215, 50, 20];

for (var i = 0; i < bookPrices.length; i++) {

    var price = bookPrices[i];
    if (price >= 200) {
        continue;
    }
    console.log(price);
}