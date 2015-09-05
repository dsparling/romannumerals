describe("Romannumerals", function() {

  it('should convert Arabic numeral 1 to Roman numeral I', function () {
    $('<span class="roman">1</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('I');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 4 to Roman numeral IV', function () {
    $('<span class="roman">4</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('IV');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 5 to Roman numeral V', function () {
    $('<span class="roman">5</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('V');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 6 to Roman numeral VI', function () {
    $('<span class="roman">6</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('VI');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 9 to Roman numeral IX', function () {
    $('<span class="roman">9</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('IX');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 10 to Roman numeral X', function () {
    $('<span class="roman">10</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('X');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 11 to Roman numeral XI', function () {
    $('<span class="roman">11</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('XI');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 40 to Roman numeral XL', function () {
    $('<span class="roman">40</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('XL');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 49 to Roman numeral XLIX', function () {
    $('<span class="roman">49</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('XLIX');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 50 to Roman numeral L', function () {
    $('<span class="roman">50</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('L');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 51 to Roman numeral LI', function () {
    $('<span class="roman">51</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('LI');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 60 to Roman numeral LX', function () {
    $('<span class="roman">60</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('LX');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 90 to Roman numeral XC', function () {
    $('<span class="roman">90</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('XC');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 99 to Roman numeral XCIX', function () {
    $('<span class="roman">99</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('XCIX');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 100 to Roman numeral C', function () {
    $('<span class="roman">100</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('C');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 101 to Roman numeral CI', function () {
    $('<span class="roman">101</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('CI');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 110 to Roman numeral CX', function () {
    $('<span class="roman">110</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('CX');
    $(".roman").remove();
  });

  it('should convert Arabic numeral 1000 to Roman numeral M', function () {
    $('<span class="roman">1000</span>').appendTo('body');
    var span = $(".roman");
    span.romannumerals();
    var convertedRomanNumeral = $("span.roman").text();
    expect(convertedRomanNumeral).toEqual('M');
    $(".roman").remove();
  });

});

