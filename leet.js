var addTwoNumbers = function (l1, l2) {

    const reversedl1 = l1.reverse();
    const reversedl2 = l2.reverse();
    const joinedl1 = Number(reversedl1.join(""))
    const joinedl2 = Number(reversedl2.join(""))
    const total = joinedl1 + joinedl2
    const final = total.reverse();
    return final;
    

};

addTwoNumbers([1,5,3], [9,4,6])