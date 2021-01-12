function duplicateCount(text){
    var str = text.toLowerCase().split('').sort().join('');
    console.log(str);
    var word = '123-4560';
    // 正则判断字符串是否符合规则
    console.log(word.match(/\d+/g));//加g进行全局匹配
    var arr = str.match(/(-)\1+/g);
    console.log(/\d/.test(word));
    // console.log(arr);
    console.log(str.match(/([a-z])\1+/g))
    // [a-z]//[]表示取值范围
    // console.log(str);
    // if(arr === null)
    // {
    //     return arr.length;
    // }
}

duplicateCount('aaasdfgfsafdsffghrer');