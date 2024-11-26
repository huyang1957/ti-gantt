import exp from "constants";

export function isSameOrAfter(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    return d1 >= d2;
}

export function isSameOrBefore(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    return d1 <= d2;
}

export function dateAdd(date, days, type) {
    if (days == undefined || days == '') {
        days = 1;
    }
    let date_new = new Date(date);
    date_new.setDate(date_new.getDate() + days);
    let month = date_new.getMonth() + 1; //月份从0开始所以需要+1
    var day = date_new.getDate();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    return date_new.getFullYear() + '-' + month + '-' + day;
}

export function diffDays(date1, date2) {   
    var date1=new Date(date1);
    var date2=new Date(date2);
    var days=(date2.getTime()-date1.getTime())/(1000*60*60*24);/*不用考虑闰年否*/
    return days
}

export function startOfMonth(dateString) {
    const date = dateString ? new Date(dateString) : new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}-${month.toString().padStart(2, '0')}-01`;
  }
  
export function endOfMonth(dateString) {
    const date = dateString ? new Date(dateString) : new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const lastDay = new Date(year, month, 0);
    return `${year}-${month.toString().padStart(2, '0')}-${lastDay.getDate()}`;
  }

export function today() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

export function getYear(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
}

export function formatDate(date, fmt) {
    if (typeof date == 'string') {
      date = new Date(date);
    }
    var o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds(), //毫秒
    }
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    for (var k in o)
      if (new RegExp('(' + k + ')').test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
        )
    return fmt
  }
  
  export function getWeekDay(dateString) {
    const date = new Date(dateString);
    return date.getDay();
  }

  export function duration(start, end) {
    return diffDays(start, end) + 1;
  }