
// You should implement your task here.




module.exports = function towelSort (matrix) {
  if (matrix == undefined) {
    return []
}

else {


    const res = [];

    matrix.forEach(function (i) {
        if (matrix.indexOf(i) == 1 || matrix.indexOf(i) == 3 || matrix.indexOf(i) == 5) {
            i.reverse();
        }
        res.push(i);
    })

    const res2 = [];

    matrix.forEach(e => {
        const it = []
        e.forEach(function (i) {
            res2.push(i)
        })
    });

    return res2

}

}
