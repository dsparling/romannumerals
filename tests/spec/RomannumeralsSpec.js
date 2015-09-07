describe("Romannumerals", function() {

  it('should convert Arabic number 1 to Roman number I', function () {
    $('<span class="roman">1</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('I');
    $(".roman").remove();
  });

  it('should convert Arabic number 4 to Roman number IV', function () {
    $('<span class="roman">4</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('IV');
    $(".roman").remove();
  });

  it('should convert Arabic number 5 to Roman number V', function () {
    $('<span class="roman">5</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('V');
    $(".roman").remove();
  });

  it('should convert Arabic number 6 to Roman number VI', function () {
    $('<span class="roman">6</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('VI');
    $(".roman").remove();
  });

  it('should convert Arabic number 9 to Roman number IX', function () {
    $('<span class="roman">9</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('IX');
    $(".roman").remove();
  });

  it('should convert Arabic number 10 to Roman number X', function () {
    $('<span class="roman">10</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('X');
    $(".roman").remove();
  });

  it('should convert Arabic number 11 to Roman number XI', function () {
    $('<span class="roman">11</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('XI');
    $(".roman").remove();
  });

  it('should convert Arabic number 40 to Roman number XL', function () {
    $('<span class="roman">40</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('XL');
    $(".roman").remove();
  });

  it('should convert Arabic number 49 to Roman number XLIX', function () {
    $('<span class="roman">49</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('XLIX');
    $(".roman").remove();
  });

  it('should convert Arabic number 50 to Roman number L', function () {
    $('<span class="roman">50</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('L');
    $(".roman").remove();
  });

  it('should convert Arabic number 51 to Roman number LI', function () {
    $('<span class="roman">51</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('LI');
    $(".roman").remove();
  });

  it('should convert Arabic number 60 to Roman number LX', function () {
    $('<span class="roman">60</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('LX');
    $(".roman").remove();
  });

  it('should convert Arabic number 90 to Roman number XC', function () {
    $('<span class="roman">90</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('XC');
    $(".roman").remove();
  });

  it('should convert Arabic number 99 to Roman number XCIX', function () {
    $('<span class="roman">99</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('XCIX');
    $(".roman").remove();
  });

  it('should convert Arabic number 100 to Roman number C', function () {
    $('<span class="roman">100</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('C');
    $(".roman").remove();
  });

  it('should convert Arabic number 101 to Roman number CI', function () {
    $('<span class="roman">101</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('CI');
    $(".roman").remove();
  });

  it('should convert Arabic number 110 to Roman number CX', function () {
    $('<span class="roman">110</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('CX');
    $(".roman").remove();
  });

  it('should convert Arabic number 200 to Roman number CC', function () {
    $('<span class="roman">200</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('CC');
    $(".roman").remove();
  });

  it('should convert Arabic number 300 to Roman number CCC', function () {
    $('<span class="roman">300</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('CCC');
    $(".roman").remove();
  });

  it('should convert Arabic number 400 to Roman number CD', function () {
    $('<span class="roman">400</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('CD');
    $(".roman").remove();
  });

  it('should convert Arabic number 500 to Roman number D', function () {
    $('<span class="roman">500</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('D');
    $(".roman").remove();
  });

  it('should convert Arabic number 600 to Roman number DC', function () {
    $('<span class="roman">600</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('DC');
    $(".roman").remove();
  });

  it('should convert Arabic number 700 to Roman number DCC', function () {
    $('<span class="roman">700</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('DCC');
    $(".roman").remove();
  });

  it('should convert Arabic number 800 to Roman number DCCC', function () {
    $('<span class="roman">800</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('DCCC');
    $(".roman").remove();
  });

  it('should convert Arabic number 900 to Roman number CM', function () {
    $('<span class="roman">900</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('CM');
    $(".roman").remove();
  });

  it('should convert Arabic number 1000 to Roman number M', function () {
    $('<span class="roman">1000</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('M');
    $(".roman").remove();
  });

  it('should convert Arabic number 2000 to Roman number MM', function () {
    $('<span class="roman">2000</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('MM');
    $(".roman").remove();
  });

  it('should convert Arabic number 3000 to Roman number MMM', function () {
    $('<span class="roman">3000</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('MMM');
    $(".roman").remove();
  });

});

