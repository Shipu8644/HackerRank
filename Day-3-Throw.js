a = 0;
function isPositive(a) {

    if (a > 0) {
        return 'YES';
    }
    throw (a == 0 ? 'Zero Error' : 'Negative Error');//HackerRank e thorow er por error hbe.

}

try {
    const res = isPositive(0);
    console.log(res);
}
catch (e) {
    console.error(e);
}


