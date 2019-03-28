let a = function (param1, ...param2) {
    // console.log(param1);
    // console.log(param2);

    let numbers = [1,2,3,4,5];

    [firstSet, ...middleSet] = [1,2,3,4,5,6];

    console.log(firstSet);
    console.log(middleSet);


}


a(1,2,3,4);
