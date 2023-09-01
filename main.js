var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  var colrChange = document.getElementsByClassName("item");
  for (var i = 0; i < colrChange.length; i++) {
    colrChange[i].style.backgroundColor = "#342a2ae3";
    colrChange[i].style.color = "#ffffff";
  }
});
var code = document.getElementById("code");

/*************************/

function sumation_check(num1, num2) {
  if (num1 == 15 || num2 == 15 || num1 + num2 == 15) 
    return true;
  else 
    return false;
}
var sumation_check_var = document.getElementById("sumation_check");
sumation_check_var.addEventListener("click", function () {
  document.getElementById("code").style.display = "block";
  sumation_check_var.textContent = sumation_check(sumation_check1, sumation_check2);

const codeToType = `
<span class="comment">/*************************one*************************/</span>
<span class="var">function</span> <span class="funcName">sumation_check</span>(<span class="param">num1</span>, <span class="param">num2</span>) {
  <span class="var">if</span> (<span class="param">num1</span> == <span class="value">15</span> || <span class="param">num2</span> == <span class="value">15</span> || <span class="param">num1</span> + <span class="param">num2</span> == <span class="value">15</span>) 
    <span class="var">return</span> <span class="bool">true</span>;
  <span class="var">else</span> 
    <span class="var">return</span> <span class="bool">false</span>;
}
<span class="funcName">sumation_check</span>(<span class="param">${sumation_check1}</span>, <span class="param">${sumation_check2}</span>) = <span class="bool">${sumation_check(sumation_check1, sumation_check2) }</span>
`

  const outputPre = document.getElementById("code");
  let index = 0;

  function writeCodeByCharacter() {
    if (index < codeToType.length) {
      if (codeToType.slice(index, index + 6) === "<span ") {
        let endIndex = codeToType.indexOf("</span>", index);
        outputPre.insertAdjacentHTML(
          "beforeend",
          codeToType.slice(index, endIndex + 7)
        );
        index = endIndex + 7;
      } else {
        outputPre.insertAdjacentText("beforeend", codeToType[index]);
        index++;
      }

      var wa = setTimeout(writeCodeByCharacter, 1);
      wa;
    }
    var close = document.getElementById("close");
    close.addEventListener("click", function () {
      code.style.display = "none";
      code.innerHTML = `<span id="close">&#10005;</span>`;
      document.getElementById("sumation_check").disabled = false;
      clearTimeout(wa);
    });
  }

  writeCodeByCharacter();

  if (outputPre.style.display == "block") {
    document.getElementById("sumation_check").disabled = true;
    console.log("asd");
  }
});
var sumation_check1 = 10;
var sumation_check2 = 5;
//1- console.log(sumation_check(sumation_check1, sumation_check2));
/*************************/

function perfectSquare(num) {
  var b = 0;
  for (var i = 1; i <= num / 2 + 1; i++) {
      if (i * i == num) {
          b = 1;
          return true;
      }
  }
  if (b == 0) {
      return false;
  }
}
var perfectSquare_var = document.getElementById("perfectSquare");
perfectSquare_var.addEventListener("click", function () {
  perfectSquare_var.textContent = perfectSquare(perfectSquare1);

  document.getElementById("code").style.display = "block";
const codeToType = `
<span class="comment">/*************************tow*************************/</span>
<span class="var">function</span> <span class="varName">perfectSquare</span>(<span class="varName">num</span>) {
  <span class="var">var</span> <span class="varName">b</span> = <span class="value">0</span>;
  <span class="var">for</span> (<span class="var">var</span> <span class="varName">i</span> = <span class="value">1</span>; <span class="varName">i</span> <= <span class="varName">num</span> / <span class="value">2</span> + <span class="value">1</span>; <span class="varName">i</span>++) {
    <span class="var">if</span> (<span class="varName">i</span> * <span class="varName">i</span> == <span class="varName">num</span>) {
      <span class="varName">b</span> = <span class="value">1</span>;
      <span class="var">return</span> <span class="bool">true</span>;
    }
  }
  <span class="var">if</span> (<span class="varName">b</span> == <span class="value">0</span>) {
    <span class="var">return</span> <span class="bool">false</span>;
  }
}
<span class="varName">perfectSquare</span>(<span class="value">${perfectSquare1}</span>) = <span class="bool">${perfectSquare(perfectSquare1)}</span>

`

  const outputPre = document.getElementById("code");
  let index = 0;

  function writeCodeByCharacter() {
    if (index < codeToType.length) {
      if (codeToType.slice(index, index + 6) === "<span ") {
        let endIndex = codeToType.indexOf("</span>", index);
        outputPre.insertAdjacentHTML(
          "beforeend",
          codeToType.slice(index, endIndex + 7)
        );
        index = endIndex + 7;
      } else {
        outputPre.insertAdjacentText("beforeend", codeToType[index]);
        index++;
      }

      var wa = setTimeout(writeCodeByCharacter, 1);
      wa;
    }
    var close = document.getElementById("close");
    close.addEventListener("click", function () {
      code.style.display = "none";
      code.innerHTML = `<span id="close">&#10005;</span>`;
      document.getElementById("perfectSquare").disabled = false;
      clearTimeout(wa);
    });
  }

  writeCodeByCharacter();

  if (outputPre.style.display == "block") {
    document.getElementById("perfectSquare").disabled = true;
  }

});

var perfectSquare1 = 36
//2- perfectSquare(perfectSquare1);
/*************************/

function replace_Zero(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != i + 1) {
      console.log(i + 1);
      return i + 1;
    }
  }
}
var replace_Zero_var = document.getElementById("replace_Zero");
replace_Zero_var.addEventListener("click", function () {
  replace_Zero_var.textContent = replace_Zero(replace_Zero1);


  
  document.getElementById("code").style.display = "block";
const codeToType = `
<span class="comment">/*************************three*************************/</span>
<span class="var">function</span> <span class="varName">replace_Zero</span>(<span class="param">arr</span>) {
  <span class="var">for</span> (<span class="var">var</span> <span class="varName">i</span> = <span class="value">0</span>; <span class="varName">i</span> < <span class="prop">arr</span>.<span class="propName">length</span>; <span class="varName">i</span>++) {
    <span class="var">if</span> (<span class="prop">arr</span>[<span class="varName">i</span>] != <span class="varName">i</span> + <span class="value">1</span>) {
      <span class="var">return</span> <span class="varName">i</span> + <span class="value">1</span>;
    }
  }
}
<span class="varName">replace_Zero</span>([<span class="varName">${replace_Zero1}</span>]) = ${replace_Zero(replace_Zero1)}
`

  const outputPre = document.getElementById("code");
  let index = 0;

  function writeCodeByCharacter() {
    if (index < codeToType.length) {
      if (codeToType.slice(index, index + 6) === "<span ") {
        let endIndex = codeToType.indexOf("</span>", index);
        outputPre.insertAdjacentHTML(
          "beforeend",
          codeToType.slice(index, endIndex + 7)
        );
        index = endIndex + 7;
      } else {
        outputPre.insertAdjacentText("beforeend", codeToType[index]);
        index++;
      }

      var wa = setTimeout(writeCodeByCharacter, 1);
      wa;
    }
    var close = document.getElementById("close");
    close.addEventListener("click", function () {
      code.style.display = "none";
      code.innerHTML = `<span id="close">&#10005;</span>`;
      document.getElementById("replace_Zero").disabled = false;
      clearTimeout(wa);
    });
  }

  writeCodeByCharacter();

  if (outputPre.style.display == "block") {
    document.getElementById("replace_Zero").disabled = true;
  }

});
var replace_Zero1 = [1, 2, 0, 4, 5]
//3- replace_Zero( replace_Zero1 );
/*************************/

function lowerUpper(ch) {
  if (ch.charCodeAt(0) > 90) {
    console.log(String.fromCharCode(ch.charCodeAt(0) - 32));
    return String.fromCharCode(ch.charCodeAt(0) - 32);
  } else {
    console.log(String.fromCharCode(ch.charCodeAt(0) + 32));
    return String.fromCharCode(ch.charCodeAt(0) + 32);
  }
}
var lowerUpper_var = document.getElementById("lowerUpper");
lowerUpper_var.addEventListener("click", function () {
  lowerUpper_var.textContent = lowerUpper(lowerUpper1);

    
  document.getElementById("code").style.display = "block";
const codeToType = `
<span class="comment">/*************************four*************************/</span>
<span class="var">function</span> <span class="varName">lowerUpper</span>(<span class="param">ch</span>) {
  <span class="var">if</span> (<span class="prop">ch</span>.<span class="func">charCodeAt</span>(<span class="value">0</span>) > <span class="value">90</span>) {
    <span class="var">return</span> <span class="class">String</span>.<span class="func">fromCharCode</span>(<span class="prop">ch</span>.<span class="func">charCodeAt</span>(<span class="value">0</span>) - <span class="value">32</span>);
  } <span class="var">else</span> {
    <span class="var">return</span> <span class="class">String</span>.<span class="func">fromCharCode</span>(<span class="prop">ch</span>.<span class="func">charCodeAt</span>(<span class="value">0</span>) + <span class="value">32</span>);
  }
}
<span class="varName">lowerUpper</span>(<span class="str">${lowerUpper1}</span>) = <span class="str">${lowerUpper(lowerUpper1)}</span>

`

  const outputPre = document.getElementById("code");
  let index = 0;

  function writeCodeByCharacter() {
    if (index < codeToType.length) {
      if (codeToType.slice(index, index + 6) === "<span ") {
        let endIndex = codeToType.indexOf("</span>", index);
        outputPre.insertAdjacentHTML(
          "beforeend",
          codeToType.slice(index, endIndex + 7)
        );
        index = endIndex + 7;
      } else {
        outputPre.insertAdjacentText("beforeend", codeToType[index]);
        index++;
      }

      var wa = setTimeout(writeCodeByCharacter, 1);
      wa;
    }
    var close = document.getElementById("close");
    close.addEventListener("click", function () {
      code.style.display = "none";
      code.innerHTML = `<span id="close">&#10005;</span>`;
      document.getElementById("lowerUpper").disabled = false;
      clearTimeout(wa);
    });
  }

  writeCodeByCharacter();

  if (outputPre.style.display == "block") {
    document.getElementById("lowerUpper").disabled = true;
  }
});
var lowerUpper1 = "d"
//4- lowerUpper("d");
/*************************/

function calcOdd(num1, num2) {
  var sum = 0;
  for (var i = num1; i < num2; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  return sum;
}

var calcOdd_var = document.getElementById("calcOdd");
calcOdd_var.addEventListener("click", function () {
  calcOdd_var.textContent = calcOdd(calcOdd1, calcOdd2);

  document.getElementById("code").style.display = "block";
  const codeToType = `
  <span class="comment">/*************************five*************************/</span>
  <span class="var">function</span> <span class="varName">calcOdd</span>(<span class="param">num1</span>, <span class="param">num2</span>) {
    <span class="var">var</span> <span class="varName">sum</span> = <span class="value">0</span>;
    <span class="var">for</span> (<span class="var">var</span> <span class="varName">i</span> = <span class="param">num1</span>; <span class="varName">i</span> < <span class="param">num2</span>; <span class="varName">i</span>++) {
      <span class="var">if</span> (<span class="varName">i</span> % <span class="value">2</span> != <span class="value">0</span>) {
        <span class="varName">sum</span> += <span class="varName">i</span>;
      }
    }
    <span class="var">return</span> <span class="varName">sum</span>;
  }
  <span class="varName">calcOdd</span>(<span class="value">${calcOdd1}</span>, <span class="value">${calcOdd2}</span>) = <span class="value">${calcOdd(calcOdd1, calcOdd2)}</span>
  
  `
  
    const outputPre = document.getElementById("code");
    let index = 0;
  
    function writeCodeByCharacter() {
      if (index < codeToType.length) {
        if (codeToType.slice(index, index + 6) === "<span ") {
          let endIndex = codeToType.indexOf("</span>", index);
          outputPre.insertAdjacentHTML(
            "beforeend",
            codeToType.slice(index, endIndex + 7)
          );
          index = endIndex + 7;
        } else {
          outputPre.insertAdjacentText("beforeend", codeToType[index]);
          index++;
        }
  
        var wa = setTimeout(writeCodeByCharacter, 1);
        wa;
      }
      var close = document.getElementById("close");
      close.addEventListener("click", function () {
        code.style.display = "none";
        code.innerHTML = `<span id="close">&#10005;</span>`;
        document.getElementById("calcOdd").disabled = false;
        clearTimeout(wa);
      });
    }
  
    writeCodeByCharacter();
  
    if (outputPre.style.display == "block") {
      document.getElementById("calcOdd").disabled = true;
    }
});
var calcOdd1 = 10
var calcOdd2 = 30
//5- console.log(calcOdd(10, 30));
/*************************/

function luck(num) {
  var flag = 0;
  var num2;
  for (var i = 0; i < num; i++) {
    num2 = prompt(`enter number ${i + 1}:`);
    if (num2 == 4 || num2 == 7) {
      flag = 1;
    }
  }

  if (flag == 0) {
    console.log("It’s not your lucky day");
    return "It’s not your lucky day";
  } else {
    console.log("It’s your lucky day");
    return "It’s your lucky day";
  }
}
var luck_var = document.getElementById("luck");
luck_var.addEventListener("click", function () {
  luck_var.textContent = luck(luck1);

  document.getElementById("code").style.display = "block";
  const codeToType = `
  <span class="comment">/*************************six*************************/</span>
<span class="var">function</span> <span class="varName">luck</span>(<span class="param">num</span>) {
  <span class="var">var</span> <span class="varName">flag</span> = <span class="value">0</span>;
  <span class="var">var</span> <span class="varName">num2</span>;
  <span class="var">for</span> (<span class="var">var</span> <span class="varName">i</span> = <span class="value">0</span>; <span class="varName">i</span> < <span class="param">num</span>; <span class="varName">i</span>++) {
    <span class="varName">num2</span> = <span class="func">prompt</span>('<span class="str">enter number {i + 1}</span>:');
    <span class="var">if</span> (<span class="varName">num2</span> == <span class="value">4</span> || <span class="varName">num2</span> == <span class="value">7</span>) {
      <span class="varName">flag</span> = <span class="value">1</span>;
    }
  }

  <span class="var">if</span> (<span class="varName">flag</span> == <span class="value">0</span>) {
    <span class="var">return</span> <span class="str">"It’s not your lucky day"</span>;
  } <span class="var">else</span> {
    <span class="var">return</span> <span class="str">"It’s your lucky day"</span>;
  }
}
<span class="varName">luck of the</span> <span class="value">${luck1} numbers</span>) = <span class="str">${luck_var.textContent}</span>

  `
  
    const outputPre = document.getElementById("code");
    let index = 0;
  
    function writeCodeByCharacter() {
      if (index < codeToType.length) {
        if (codeToType.slice(index, index + 6) === "<span ") {
          let endIndex = codeToType.indexOf("</span>", index);
          outputPre.insertAdjacentHTML(
            "beforeend",
            codeToType.slice(index, endIndex + 7)
          );
          index = endIndex + 7;
        } else {
          outputPre.insertAdjacentText("beforeend", codeToType[index]);
          index++;
        }
  
        var wa = setTimeout(writeCodeByCharacter, 1);
        wa;
      }
      var close = document.getElementById("close");
      close.addEventListener("click", function () {
        code.style.display = "none";
        code.innerHTML = `<span id="close">&#10005;</span>`;
        document.getElementById("luck").disabled = false;
        clearTimeout(wa);
      });
    }
  
    writeCodeByCharacter();
  
    if (outputPre.style.display == "block") {
      document.getElementById("luck").disabled = true;
    }
});
var luck1 = 3
//6- luck(3);
/*************************/

function divisors(num) {
  var arr = [];
  for (var i = 1; i <= num; i++) {
    var di = num / i;
    if (di % 1 == 0) {
      arr.push(i);
    }
  }
  console.log(arr.toString().replaceAll(",", " "));
  return arr.toString();
}
var divisors_var = document.getElementById("divisors");
divisors_var.addEventListener("click", function () {
  divisors_var.textContent = divisors(divisors1);

  document.getElementById("code").style.display = "block";
  const codeToType = `
  <span class="comment">/*************************seven*************************/</span>
  <span class="var">function</span> <span class="varName">divisors</span>(<span class="param">num</span>) {
    <span class="var">var</span> <span class="varName">arr</span> = [];
    <span class="var">for</span> (<span class="var">var</span> <span class="varName">i</span> = <span class="value">1</span>; <span class="varName">i</span> <span class="var"><=</span> <span class="param">num</span>; <span class="varName">i</span>++) {
      <span class="var">var</span> <span class="varName">di</span> = <span class="param">num</span> / <span class="varName">i</span>;
      <span class="var">if</span> (<span class="varName">di</span> % <span class="value">1</span> == <span class="value">0</span>) {
        <span class="varName">arr</span>.<span class="func">push</span>(<span class="varName">i</span>);
      }
    }
    <span class="var">return</span> <span class="varName">arr</span>.<span class="func">toString</span>();
  }

  <span class="varName">divisors</span>(<span class="value">${divisors1}</span>) = <span class="value">${divisors_var.textContent}</span>
  `
  
    const outputPre = document.getElementById("code");
    let index = 0;
  
    function writeCodeByCharacter() {
      if (index < codeToType.length) {
        if (codeToType.slice(index, index + 6) === "<span ") {
          let endIndex = codeToType.indexOf("</span>", index);
          outputPre.insertAdjacentHTML(
            "beforeend",
            codeToType.slice(index, endIndex + 7)
          );
          index = endIndex + 7;
        } else {
          outputPre.insertAdjacentText("beforeend", codeToType[index]);
          index++;
        }
  
        var wa = setTimeout(writeCodeByCharacter, 1);
        wa;
      }
      var close = document.getElementById("close");
      close.addEventListener("click", function () {
        code.style.display = "none";
        code.innerHTML = `<span id="close">&#10005;</span>`;
        document.getElementById("divisors").disabled = false;
        clearTimeout(wa);
      });
    }
  
    writeCodeByCharacter();
  
    if (outputPre.style.display == "block") {
      document.getElementById("divisors").disabled = true;
    }
});
var divisors1 = 12
//7- divisors( 12 );
/*************************/

function prime(num) {
  var arr = [];
  if (num >= 1) {
    arr.push(1);
  }
  for (var i = 3; i <= num; i++) {
    var arrtest = [];
    for (var k = 2; k <= i; k++) {
      var di = i / k;

      if (Number.isInteger(di)) {
        arrtest.push(i);
      }
    }
    if (arrtest.length == 1) {
      arr.push(arrtest[0]);
    }
  }

  console.log(arr.toString().replaceAll(",", " "));
  return arr.toString();
}
var prime_var = document.getElementById("prime");
prime_var.addEventListener("click", function () {
  prime_var.textContent = prime(prime1);
  
  document.getElementById("code").style.display = "block";
  const codeToType = `
  <span class="comment">/*************************eight*************************/</span>
  <span class="var">function</span> <span class="varName">prime</span>(<span class="param">num</span>) {
    <span class="var">var</span> <span class="varName">arr</span> = [];
    <span class="var">if</span> (<span class="param">num</span> <span class="var"><=</span> <span class="value">1</span>) {
      <span class="varName">arr</span>.<span class="func">push</span>(<span class="value">1</span>);
    }
    <span class="var">for</span> (<span class="var">var</span> <span class="varName">i</span> = <span class="value">3</span>; <span class="varName">i</span> <span class="var"><=</span> <span class="param">num</span>; <span class="varName">i</span>++) {
      <span class="var">var</span> <span class="varName">arrtest</span> = [];
      <span class="var">for</span> (<span class="var">var</span> <span class="varName">k</span> = <span class="value">2</span>; <span class="varName">k</span> <span class="var"><=</span> <span class="varName">i</span>; <span class="varName">k</span>++) {
        <span class="var">var</span> <span class="varName">di</span> = <span class="varName">i</span> / <span class="varName">k</span>;
  
        <span class="var">if</span> (<span class="class">Number</span>.<span class="func">isInteger</span>(<span class="varName">di</span>)) {
          <span class="varName">arrtest</span>.<span class="func">push</span>(<span class="varName">i</span>);
        }
      }
      <span class="var">if</span> (<span class="varName">arrtest</span>.<span class="propName">length</span> == <span class="value">1</span>) {
        <span class="varName">arr</span>.<span class="func">push</span>(<span class="varName">arrtest</span>[<span class="value">0</span>]);
      }
    }
    <span class="var">return</span> <span class="varName">arr</span>.<span class="func">toString</span>();
  }
  <span class="varName">prime</span>(<span class="value">${prime1}</span>) = <span class="value">${prime_var.textContent}</span>
  
  `
  
    const outputPre = document.getElementById("code");
    let index = 0;
  
    function writeCodeByCharacter() {
      if (index < codeToType.length) {
        if (codeToType.slice(index, index + 6) === "<span ") {
          let endIndex = codeToType.indexOf("</span>", index);
          outputPre.insertAdjacentHTML(
            "beforeend",
            codeToType.slice(index, endIndex + 7)
          );
          index = endIndex + 7;
        } else {
          outputPre.insertAdjacentText("beforeend", codeToType[index]);
          index++;
        }
  
        var wa = setTimeout(writeCodeByCharacter, 1);
        wa;
      }
      var close = document.getElementById("close");
      close.addEventListener("click", function () {
        code.style.display = "none";
        code.innerHTML = `<span id="close">&#10005;</span>`;
        document.getElementById("prime").disabled = false;
        clearTimeout(wa);
      });
    }
  
    writeCodeByCharacter();
  
    if (outputPre.style.display == "block") {
      document.getElementById("prime").disabled = true;
    }
});
var prime1 = 15
//8- prime(15)
/*************************/

function oddAndEven(num) {
  var oddNums = 0;
  var evenNums = 0;
  var sumArr = 0;
  var num2;
  var arr = [];

  for (var i = 0; i < num; i++) {
    num2 = prompt(`enter number ${i + 1}:`);
    arr.push(num2);

    while (!num2 || num2 == 0) {
      num2 = prompt(`دخل الرقم متسبهوش فاضى بعد اذنك ${i + 1}:`);
      arr.pop();
      arr.push(num2);
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      evenNums++;
    } else {
      oddNums++;
    }
    sumArr += +arr[i];
  }

  console.log(`the sum of numbers: ${sumArr}`);
  console.log(`the numbers of odds: ${oddNums}`);
  console.log(`the numbers of evens: ${evenNums}`);
  return `the sum of numbers: ${sumArr}, 
  the numbers of odds: ${oddNums} 
  and the numbers of evens: ${evenNums}`;
}
var oddAndEven_var = document.getElementById("oddAndEven");
oddAndEven_var.addEventListener("click", function () {
  oddAndEven_var.textContent = oddAndEven(oddAndEven1);

  document.getElementById("code").style.display = "block";
  const codeToType = `
  <span class="comment">/*************************nine*************************/</span>
  <span class="var">function</span> <span class="varName">oddAndEven</span>(<span class="param">num</span>) {
    <span class="var">var</span> <span class="varName">oddNums</span> = <span class="value">0</span>;
    <span class="var">var</span> <span class="varName">evenNums</span> = <span class="value">0</span>;
    <span class="var">var</span> <span class="varName">sumArr</span> = <span class="value">0</span>;
    <span class="var">var</span> <span class="varName">num2</span>;
    <span class="var">var</span> <span class="varName">arr</span> = [];
  
    <span class="var">for</span> (<span class="var">var</span> <span class="varName">i</span> = <span class="value">0</span>; <span class="varName">i</span> < <span class="param">num</span>; <span class="varName">i</span>++) {
      <span class="varName">num2</span> = <span class="func">prompt</span>(<span class="str">'enter number i + 1:'</span>);
      <span class="varName">arr</span>.<span class="func">push</span>(<span class="str">num2</span>);
  
      <span class="var">while</span> (!<span class="varName">num2</span> || <span class="varName">num2</span> == <span class="value">0</span>) {
        <span class="varName">num2</span> = <span class="func">prompt</span>(<span class="str">'دخل الرقم متسبهوش فاضى بعد اذنك i + 1:'</span>);
        <span class="varName">arr</span>.<span class="func">pop</span>();
        <span class="varName">arr</span>.<span class="func">push</span>(<span class="str">num2</span>);
      }
    }
  
    <span class="var">for</span> (<span class="var">var</span> <span class="varName">i</span> = <span class="value">0</span>; <span class="varName">i</span> < <span class="varName">arr</span>.<span class="propName">length</span>; <span class="varName">i</span>++) {
      <span class="var">if</span> (<span class="varName">arr</span>[<span class="varName">i</span>] % <span class="value">2</span> != <span class="value">0</span>) {
        <span class="varName">evenNums</span><span class="var">++</span>;
      } <span class="var">else</span> {
        <span class="varName">oddNums</span><span class="var">++</span>;
      }
      <span class="varName">sumArr</span> += <span class="varName">+arr</span>[<span class="varName">i</span>];
    }
  
    <span class="var">return</span> <span class="str">'the sum of numbers: <span class="varName">sumArr</span>, 
    <span class="str">the numbers of odds:</span> <span class="varName">oddNums</span>
    <span class="str"> and the numbers of evens:</span> <span class="varName">evenNums</span>';
  }
  <span class="varName">oddAndEven</span>(<span class="value">${oddAndEven1}</span>) : 
  <span class="str">${oddAndEven_var.textContent}</span>
  
  `
  
    const outputPre = document.getElementById("code");
    let index = 0;
  
    function writeCodeByCharacter() {
      if (index < codeToType.length) {
        if (codeToType.slice(index, index + 6) === "<span ") {
          let endIndex = codeToType.indexOf("</span>", index);
          outputPre.insertAdjacentHTML(
            "beforeend",
            codeToType.slice(index, endIndex + 7)
          );
          index = endIndex + 7;
        } else {
          outputPre.insertAdjacentText("beforeend", codeToType[index]);
          index++;
        }
  
        var wa = setTimeout(writeCodeByCharacter, 1);
        wa;
      }
      var close = document.getElementById("close");
      close.addEventListener("click", function () {
        code.style.display = "none";
        code.innerHTML = `<span id="close">&#10005;</span>`;
        document.getElementById("oddAndEven").disabled = false;
        clearTimeout(wa);
      });
    }
  
    writeCodeByCharacter();
  
    if (outputPre.style.display == "block") {
      document.getElementById("oddAndEven").disabled = true;
    }
});
var oddAndEven1 = 2
//9- oddAndEven(2);
/*************************/

function pum(num) {
  var st = "";
  for (var i = 0; i < num * 4; i += 4) {
    console.log(`${i + 1} ${i + 2} ${i + 3} PUM`);
    st += `${i + 1} ${i + 2} ${i + 3} PUM, `;
  }
  return st;
}
var pum_var = document.getElementById("pum");
pum_var.addEventListener("click", function () {
  pum_var.textContent = pum(pum1);

  document.getElementById("code").style.display = "block";
  const codeToType = `
  <span class="comment">/*************************ten*************************/</span>
  <span class="var">function</span> <span class="varName">pum</span>(<span class="param">num</span>) {
    <span class="var">var</span> <span class="varName">st</span> = <span class="str">""</span>;
    <span class="var">for</span> (<span class="var">var</span> <span class="varName">i</span> = <span class="value">0</span>; <span class="varName">i</span> < <span class="param">num</span> * <span class="value">4</span>; <span class="varName">i</span> += <span class="value">4</span>) {
      <span class="varName">st</span> += <span class="str">'i + 1 i + 2 i + 3 PUM, '</span>;
    }
    <span class="var">return</span> <span class="varName">st</span>;
  }
  <span class="varName">pum</span>(<span class="value">${pum1}</span>) : <span class="str">${pum_var.textContent}</span>
  
  
  `
  
    const outputPre = document.getElementById("code");
    let index = 0;
  
    function writeCodeByCharacter() {
      if (index < codeToType.length) {
        if (codeToType.slice(index, index + 6) === "<span ") {
          let endIndex = codeToType.indexOf("</span>", index);
          outputPre.insertAdjacentHTML(
            "beforeend",
            codeToType.slice(index, endIndex + 7)
          );
          index = endIndex + 7;
        } else {
          outputPre.insertAdjacentText("beforeend", codeToType[index]);
          index++;
        }
  
        var wa = setTimeout(writeCodeByCharacter, 1);
        wa;
      }
      var close = document.getElementById("close");
      close.addEventListener("click", function () {
        code.style.display = "none";
        code.innerHTML = `<span id="close">&#10005;</span>`;
        document.getElementById("pum").disabled = false;
        clearTimeout(wa);
      });
    }
  
    writeCodeByCharacter();
  
    if (outputPre.style.display == "block") {
      document.getElementById("pum").disabled = true;
    }
});
var pum1 = 3
//10- pum(3);

function mult(num1, num2) {
  if (num1 * num2 > 0) {
    console.log("positive");
    return "positive";
  } else if (num1 * num2 < 0) {
    console.log("negative");
    return "negative";
  } else if (num1 * num2 == 0) {
    console.log("zero");
    return "zero";
  }
}
var mult_var = document.getElementById("mult");
mult_var.addEventListener("click", function () {
  mult_var.textContent = mult(mult1, mult2);

  document.getElementById("code").style.display = "block";
  const codeToType = `
  <span class="comment">/*************************eleven*************************/</span>
  
  <span class="var">function</span> <span class="varName">mult</span>(<span class="param">num1</span>, <span class="param">num2</span>) {
    <span class="var">if</span> (<span class="varName">num1</span> * <span class="varName">num2</span> > <span class="value">0</span>) {
      <span class="var">return</span> <span class="str">"positive"</span>;
    } <span class="var">else if</span> (<span class="varName">num1</span> * <span class="varName">num2</span> < <span class="value">0</span>) {
      <span class="var">return</span> <span class="str">"negative"</span>;
    } <span class="var">else if</span> (<span class="varName">num1</span> * <span class="varName">num2</span> == <span class="value">0</span>) {
      <span class="var">return</span> <span class="str">"zero"</span>;
    }
  }
  <span class="varName">mult</span>(<span class="value">${mult1}</span>, <span class="value">${mult2}</span>) = <span class="str">${mult_var.textContent}</span>
  `
  
    const outputPre = document.getElementById("code");
    let index = 0;
  
    function writeCodeByCharacter() {
      if (index < codeToType.length) {
        if (codeToType.slice(index, index + 6) === "<span ") {
          let endIndex = codeToType.indexOf("</span>", index);
          outputPre.insertAdjacentHTML(
            "beforeend",
            codeToType.slice(index, endIndex + 7)
          );
          index = endIndex + 7;
        } else {
          outputPre.insertAdjacentText("beforeend", codeToType[index]);
          index++;
        }
  
        var wa = setTimeout(writeCodeByCharacter, 1);
        wa;
      }
      var close = document.getElementById("close");
      close.addEventListener("click", function () {
        code.style.display = "none";
        code.innerHTML = `<span id="close">&#10005;</span>`;
        document.getElementById("mult").disabled = false;
        clearTimeout(wa);
      });
    }
  
    writeCodeByCharacter();
  
    if (outputPre.style.display == "block") {
      document.getElementById("mult").disabled = true;
    }
});
var mult1 = 2;
var mult2 = 0;
//11- mult(2, 0);

function finalGrade(exam_garde, projects_num) {
  var finalGrade = 0;
  if (exam_garde > 90 && exam_garde <= 100 && projects_num > 10) {
    finalGrade = 100;
  } else if (exam_garde > 75 && exam_garde <= 90 && projects_num >= 5) {
    finalGrade = 90;
  } else if (exam_garde > 50 && exam_garde <= 75 && projects_num >= 2) {
    finalGrade = 75;
  } else {
    finalGrade = 0;
  }
  return finalGrade;
}
var finalGrade_var = document.getElementById("finalGrade");
finalGrade_var.addEventListener("click", function () {
  finalGrade_var.textContent = finalGrade(finalGrade1, finalGrade2);

  document.getElementById("code").style.display = "block";
  const codeToType = `
  <span class="comment">/*************************tweleve*************************/</span>
  
  <span class="var">function</span> <span class="varName">finalGrade</span>(<span class="param">exam_grade</span>, <span class="param">projects_num</span>) {
    <span class="var">var</span> <span class="varName">finalGrade</span> = <span class="value">0</span>;
    <span class="var">if</span> (<span class="varName">exam_grade</span> > <span class="value">90</span> && <span class="varName">exam_grade</span> <span class="var"><=</span> <span class="value">100</span> && <span class="varName">projects_num</span> > <span class="value">10</span>) {
      <span class="varName">finalGrade</span> = <span class="value">100</span>;
    } <span class="var">else if</span> (<span class="varName">exam_grade</span> > <span class="value">75</span> && <span class="varName">exam_grade</span> <span class="var"><=</span> <span class="value">90</span> && <span class="varName">projects_num</span> <span class="var">>=</span> <span class="value">5</span>) {
      <span class="varName">finalGrade</span> = <span class="value">90</span>;
    } <span class="var">else if</span> (<span class="varName">exam_grade</span> > <span class="value">50</span> && <span class="varName">exam_grade</span> <span class="var"><=</span> <span class="value">75</span> && <span class="varName">projects_num</span> <span class="var">>=</span> <span class="value">2</span>) {
      <span class="varName">finalGrade</span> = <span class="value">75</span>;
    } <span class="var">else</span> {
      <span class="varName">finalGrade</span> = <span class="value">0</span>;
    }
    <span class="var">return</span> <span class="varName">finalGrade</span>;
  }
  <span class="varName">finalGrade</span>(<span class="value">${finalGrade1}</span>, <span class="value">${finalGrade2}</span>) = <span class="value">${finalGrade_var.textContent}</span>
  
  `
  
    const outputPre = document.getElementById("code");
    let index = 0;
  
    function writeCodeByCharacter() {
      if (index < codeToType.length) {
        if (codeToType.slice(index, index + 6) === "<span ") {
          let endIndex = codeToType.indexOf("</span>", index);
          outputPre.insertAdjacentHTML(
            "beforeend",
            codeToType.slice(index, endIndex + 7)
          );
          index = endIndex + 7;
        } else {
          outputPre.insertAdjacentText("beforeend", codeToType[index]);
          index++;
        }
  
        var wa = setTimeout(writeCodeByCharacter, 1);
        wa;
      }
      var close = document.getElementById("close");
      close.addEventListener("click", function () {
        code.style.display = "none";
        code.innerHTML = `<span id="close">&#10005;</span>`;
        document.getElementById("finalGrade").disabled = false;
        clearTimeout(wa);
      });
    }
  
    writeCodeByCharacter();
  
    if (outputPre.style.display == "block") {
      document.getElementById("finalGrade").disabled = true;
    }
});
var finalGrade1 = 75;
var finalGrade2 = 10;
//12- console.log(finalGrade(75, 10));