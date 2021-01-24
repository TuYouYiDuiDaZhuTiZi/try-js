/**
 * 正则能力学习
 */
function trim(str) {
  if (!str) {
    return '';
  }
  if (/^([a-zA-Z]:)?(\\[a-zA-Z0-9_\-]+)+\\?/.test(str)) {
    const tmp = str.split('\\');
    str = tmp[tmp.length - 1];
  }
  return str.replace(/\ /g, '')
            .replace(/\,/g, '')
            .replace(/\$/g, '');
}

const source = '小毛驴hhh小毛驴hhh';
const str = source.replace(/小毛驴/, '替换');
const str2 = source.replace(/小毛驴/g, '替换');

// const result = trim('222 ');
// console.log( str + '结束');
// console.log( str2+ '结束');

// 垂直制表符
// console.log('1243\v334545')
console.log('1243334545')