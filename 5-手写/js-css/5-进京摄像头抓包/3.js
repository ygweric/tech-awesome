function extractScriptWithLabelsData(html) {
  const regex = /<script[^>]*>([\s\S]*?)<\/script>/g;
  const matches = html.matchAll(regex);
  for (const match of matches) {
      const scriptContent = match[1];
      if (scriptContent.includes('LabelsData')) {
          return scriptContent;
      }
  }
  return null;
}

// 示例 HTML 字符串
const htmlString = `
<!DOCTYPE HTML>
<html>

<!-- 多条广告如下脚本只需引入一次 -->
<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=23fca92106f5111da0cd96f9aaaf3b80&plugin=AMap.MapType"></script>
<script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/c.js" async="async" defer="defer" >
</script>
<script>

// 设置一个图标对象
var icon = {
 // 图标类型，现阶段只支持 image 类型
 type: 'image',
 // 图片 url
 image: '/images/2.png',
 // 图片尺寸
  size: [20, 25],
 
 // 图片相对 position 的锚点，默认为 bottom-center
 anchor: 'bottom-center',
};
var ico = ["",{
 type: 'image',
 image: '/images/1.png',
  size: [20, 25],

 anchor: 'bottom-center',
},{
 type: 'image',
 image: '/images/2.png',
  size: [20, 25],

 anchor: 'bottom-center',
 type: 'image',
 image: '/images/6.png',
  size: [20, 25],

 anchor: 'bottom-center',
}], now = new Date();

var textStyle = {
  fontSize: 12,
  fontWeight: 'normal',
  fillColor: '#22886f',
  strokeColor: '#fff',
  strokeWidth: 2,
  fold: true,
  padding: '2, 5',
};
var LabelsData = [
  {
      name: '海运仓胡同东口东西双向',
      position: [116.43363,39.936703],
      aa:'1',
  time:'2020-03-06',
              edittime:'',
  href:'/content/?139.html',
      icon,
 
  },
];

</script>

<script type="text/javascript">

</script>
<script src='/js/tj.js'></script></body>
  

</html>
`;

const scriptWithLabelsData = extractScriptWithLabelsData(htmlString);
console.log(scriptWithLabelsData);
