// Post Date
const months=['يَنَايِرُ','فِبْرَايِرُ','مَارِسُ','أَبْرِيلُ','مَايُو','يُونْيُو','يُولْيُو','أَغُسْطُسُ','سِبْتَمْبَرُ','أُكْتُوبَرُ','نُوفَمْبَرُ','دِيسَمْبَرُ'],monthMin = ['','','','','','','','','','','',''],days = ['‫الأحد','‫الاثنين','‫الثلاثاء','‫الأربعاء','الخميس','الجمعة‬','السبت‬'],daysMin = ['','','','','','',''],seasons = ['شِتَاء','رَبِيع','صَيْف','خَرِيف'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

// Comments Form
let commentsForm = document.querySelector('#push-comments'),
  userName = document.querySelector('.userName'),
  userComment = document.querySelector('.userComment'),
  sendBtn = document.querySelector('.sendBtn');

sendBtn.addEventListener('click', function (event) {
  if (checkEmpty(userName, userComment)) {
    event.preventDefault();
    alert('شكرا لك! تم إرسال تعليقك الى الاعتدال.');
    commentsForm.style.cssText = 'display: none;';
  }
});

// Custom File
let customFile = document.querySelector('.custom__field'),
  customText = document.querySelector('.custom__text');

customFile.addEventListener('change', function () {
  customText.innerHTML = 'تم تحميل الصورة';
  customText.style.cssText = 'color: green;';
});

// Check Empty
function checkEmpty(elem1, elem2) {
  if (elem1.value != '' && elem2.value != '') {
    return true;
  } else {
    return false;
  }
}