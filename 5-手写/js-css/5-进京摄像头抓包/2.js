function extractScriptContent(html) {
    const regex = /<script[^>]*>([\s\S]*?)<\/script>/g;
    const matches = html.match(regex);
    let scriptContent = '';
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      if (match.includes('var LabelsData =')) {
        scriptContent = match
      }
    }
    return scriptContent.trim();
}

// 示例 HTML 字符串
const htmlString = `
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8" />
    <title>进京网-进京证摄像头位置分布地图-2020-2023年最新-外地车牌在北京-外地车牌在北京外地车在北京必备</title>
    <meta name="Keywords" content="2023年进京证摄像头，外地车牌在北京，外地车在北京，无间大哥，拍进京证摄像头，进京365，jinjing365 最新进京证电子眼，进京网，进京证探头，拍摄进京证，外地车，进京证，外地牌照，外地号牌，非京牌机动车，电子眼，违章摄像头，拍进京证，没办进京证">
    <meta name="Description" content="北京拍摄未办进京证的摄像头每日更新，北京探头和电子眼位置多、分布广，2023年最新进京证摄像头分布地图为您呈现摄像头位置，让外地车牌在北京避免违章被扣分罚款。本站内容全部根据网友分享所成，全网最新最快最全面">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <META http-equiv=Content-Type content="text/html; charset=utf-8">
    <META content="MSHTML 6.00.3790.4807" name=GENERATOR>
    <LINK href="/favicon.ico" rel="shortcut icon">
    <!-- <script type="text/javascript" src='https://a.amap.com/jsapi_demos/static/resource/capitals.js'></script> -->

<!-- UI组件库(1.0) -->

<script type="text/javascript" src="/Templates/cn2014/js/addToolbar.js"></script>
    
<style>
 *{ margin:0; padding:0; list-style:none}
#up-map-div{
width:250px;
height:300px;
bottom:0px;  
right:0px;
position:absolute;
z-index:9999;

background-color:#FFFFFF; 
}
	
        html,body,#container{height:100%;width:100%;font-size:14px;font-family:"Chinese Quote",-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}
        .content-window-card{position:relative;box-shadow:none;bottom:0;left:0;width:auto;padding:0;border-radius:5px;overflow:hidden;}
        .info-top{padding:10px 15px;position:relative;background:#fff;border-bottom:1px solid #ebebeb;}
        .closeX{position:absolute;right:10px;top:2px;font-size:22px;cursor:pointer}
        .info-middle{padding:15px 15px;border-radius:0 0 5px 5px;}
        .info-bottom{height:12px;position:relative}
        .sharp{width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:12px solid #fff;position:absolute;left:50%;top:0;transform:translate(-50%,0)}
    .STYLE1 {	color: #FFFFFF;
	font-weight: bold;
	font-size: 18px;
}

</style>
<script type="text/javascript">
      //判断是否手机访问 如果是跳转 
      try {
      var urlhash = window.location.hash;
      if (!urlhash.match("fromapp")) {
      if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
      window.location = "/wap/";
      }
      }
      } catch (err) {}
</script>
</head>

<body style="overflow-y:hidden">

<style type="text/css">
<!--
* {
	box-sizing:border-box;
}
body {
	margin:0;
	padding:0;
	
	font-weight:500;
	font-family:"Microsoft YaHei","宋体","Segoe UI","Lucida Grande",Helvetica,Arial,sans-serif,FreeSans,Arimo;
}
#shenglei {
	width:350px;
	height:55px;
	margin:0 auto;
}
div.search {
	padding:10px 0;
}
form {
	position:relative;
	width:350px;
	margin:0 auto;
}
input,button {
	border:none;
	outline:none;
}
input {
	width:100%;
	height:35px;
	padding-left:13px;
}
button {
	height:35px;
	width:42px;
	cursor:pointer;
	position:absolute;
}
/*搜索框6*/
     
.bar6 input {
	border:2px solid #FFFFFF;
	border-radius:5px;
	background:transparent;
	top:0;
	right:0;
}
.bar6 button {
	background:#FFFFFF;
	border-radius:0 5px 5px 0;
	width:60px;
	top:0;
	right:0;
}
.bar6 button:before {
	content:"搜索";
	font-size:13px;
	color:#FF0000;
}
.STYLE1 {
	color: #FFFFFF;
	font-weight: bold;
	font-size: 16px;
}
-->
</style>

   <div>
 <table width="100%" height="50px" border="0" align="center" cellspacing="0" bgcolor="#ed4040">
  <tr>
    <td width="32" bgcolor="#FFFFFF"><a href="/index.asp"><img src="/Templates/cn2014/images/newlogo.png" border="0" /></a></td>
    <td width="17" height="50" valign="middle">&nbsp;</td>
    <td width="741" valign="middle"><table width="404" border="0">
      <tr>
        <td><div align="left"><span class="STYLE1">北京外地车未办理进京证违章摄像头分布图</span></div></td>
      </tr>
    </table></td>
    <td width="365" valign="middle"> <div id="shenglei">
    <div class="search bar6">
        <form action="/search.asp">
            <input type="text" placeholder="请输入位置关键字" name="keys" >
          <button type="submit"></button>
        </form>
    </div>
</div></td>
    <td width="462" valign="middle"><div align="center">
      <table width="100%" border="0">
        <tr>
         <td><div align="center"><a href="/index.asp" title="进京证地图"><img src="/images/jjtd.png" width="70" height="30" border="0" /></a></div></td>
          <td><div align="center"><a href="/about/?19.html" title="关于本站"><img src="/images/gy.png" width="70" height="30" border="0" /></a></div></td>
        
          <td><div align="center"><a href="/about/?51.html" title="手机浏览"><img src="/images/sjll.png" width="70" height="30" border="0" /></a></div></td>
          <td><div align="center"><a href="/list/?1_1.html"title="进京证摄像头更新日志"><img src="/images/rz.jpg" width="70" height="30" border="0" /></a></div></td>
          <td><div align="center"><a href="/about/?49.html"title="友情赞助"><img src="/images/zz.png" width="70" height="30" border="0" /></a></div></td>
        </tr>
      </table>
    </div>      <div align="center"></div>      <div align="center"></div></td>
    <td width="30" valign="middle">&nbsp;</td>
  </tr>
</table>
 <table width="100%" border="0" align="right" cellspacing="0" bgcolor="#FFFFFF">
   <tr>
     <td width="30"> </td>
     <td><span style="font-size:12px; color: #FF0000; font-weight:bold;" >

              今日尾号限行：<a href="http://jtgl.beijing.gov.cn/jgj/lszt/659722/660341/index.html" target="_blank"title="北京今日尾号限行">点击查看</a>

              <span id="todaynum">              </span>

            </span></td>
     <td width="730" height="15"><div class="_g0txdyk0fxr"></div>
<script type="text/javascript">
    (window.slotbydup = window.slotbydup || []).push({
        id: "u5978003",
        container: "_g0txdyk0fxr",
        async: true
    });
</script></td>
   </tr>
 </table>
<table width="100%" border="0" cellspacing="0">
  <tr>
    <td height="1" bgcolor="#ADADAD"></td>
  </tr>
</table>
</div> 
 



<div id="container"></div>
<div id="up-map-div">
<table width="100%" height="100px" border="0" cellspacing="1" bgcolor="#999999">
  <tr>
    <td colspan="2" bgcolor="#FFFFFF"><div align="center" class="STYLE2">更新时间</div></td>
  </tr>
  <tr>
    <td colspan="2" bgcolor="#FFFFFF"><div align="center">2024-03-22-11：03：45</div></td>
  </tr>
  <tr>
    <td width="25%" valign="middle" bgcolor="#FFFFFF"><div align="center"><img src="/images/1.png" width="20" height="25"></div></td>
    <td width="75%" rowspan="2" valign="middle" bgcolor="#FFFFFF"><div align="center"><span class="STYLE3">区别见上方“关于本站”</span><span class="STYLE3"></span></div></td>
  </tr>
  <tr>
    <td valign="middle" bgcolor="#FFFFFF"><div align="center"><img src="/images/2.png" width="20" height="25"></div></td>
    </tr>
</table>
<table width="100%" border="0" cellspacing="0">
  <tr>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td><div align="center"><img src="/upload/image/20200316/15843679662998792.jpg" width="150" height="150" ></div></td>
  </tr>
  <tr>
    <td><div align="center" class="STYLE2">关注本站公众号，每天都有新发现</div></td>
  </tr>
</table>




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
}, {
   type: 'image',
   image: '/images/3.png',
    size: [30, 46],

   anchor: 'bottom-center',
},{
   type: 'image',
   image: '/images/4.png',
    size: [20, 25],

   anchor: 'bottom-center',
},{
   type: 'image',
   image: '/images/5.png',
    size: [20, 25],

   anchor: 'bottom-center',
}, {
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
        name: '白家楼桥西人行过街灯  东西双向',
        position: [116.535707,39.923519],
        aa:'2',
		time:'2020-03-06',
                edittime:'',
		href:'/content/?141.html',
        icon,
    },
   
    {
        name: '仰山桥南 南北双向（包括主路北向南）',
        position: [116.408451,40.020972],
        aa:'2',
		time:'2020-03-06',
                edittime:'',
		href:'/content/?140.html',
        icon,
    },
   
    {
        name: '海运仓胡同东口东西双向',
        position: [116.43363,39.936703],
        aa:'1',
		time:'2020-03-06',
                edittime:'',
		href:'/content/?139.html',
        icon,
    },
   
    {
        name: '京哈五方桥西/京哈高速4公里 双向 主辅路',
        position: [116.538814,39.869348],
        aa:'2',
		time:'2020-03-06',
                edittime:'',
		href:'/content/?138.html',
        icon,
    },
   
    {
        name: '京藏高速上清桥南天桥 南北双向',
        position: [116.357763,40.017804],
        aa:'2',
		time:'2020-03-06',
                edittime:'',
		href:'/content/?136.html',
        icon,
    },
   
    {
        name: '北苑路康斯丹郡门口 南北双向',
        position: [116.416863,40.015443],
        aa:'2',
		time:'2020-03-06',
                edittime:'',
		href:'/content/?135.html',
        icon,
    },
   
    {
        name: '林萃桥南南北双向',
        position: [116.374476,40.020312],
        aa:'2',
		time:'2020-03-06',
                edittime:'',
		href:'/content/?133.html',
        icon,
    },
    
 
];

</script>

<script type="text/javascript">
    var map = new AMap.Map('container', {
        zoom: 12,
        center: [116.397045,39.909729],
        showIndoorMap: false,
		  viewMode: '2D',
		    
        
        expandZoomRange: true,
      /*   
    //    pitch: 60,
	*/
        
    });

    map.on('complete', function () {

        // 创建 AMap.LabelsLayer 图层
        var layer = new AMap.LabelsLayer({
            zooms: [3, 20],
            zIndex: 100,
            // 关闭标注避让，默认为开启，v1.4.15 新增属性
            animation: false,
            // 关闭标注淡入动画，默认为开启，v1.4.15 新增属性
            collision: false
        });

        // 将图层添加到地图
        map.add(layer);

        var markers = [];
        var positions = LabelsData;


	var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -8)});
        for (var i = 0; i < positions.length; i++) {
            var curData = positions[i];
			var d = curData.time;
      var resultDate=(now.getTime()-new Date(d.replace(/-/g,"/")).getTime())/(1000*3600);
		if(resultDate<24*3)
		curData.icon=ico[3]; 
		else
		curData.icon=ico[curData.aa]; 
		

            var labelMarker = new AMap.LabelMarker(curData);
            // 事件
            labelMarker.on('click', function(e){
                var position = e.data.data && e.data.data.position;
    
                if(position){
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
            }
			});

			   
            labelMarker.content=(
                        "<div class ='area'>"+curData.name+"</div><a href='"+curData.href+"' target='_blank' class='anniu' target='_self'>详细信息</a>");
               //     normalMarker.setPosition(position);
               //     map.add(normalMarker); 
            labelMarker.on('mouseout', function(){
      //          map.remove(normalMarker);
            });

            markers.push(labelMarker);
        }
        
        // 
        layer.add(markers);
        
        // 
        var normalMarker = new AMap.Marker({
            offset: new AMap.Pixel(-75, -40),
        });
        
    });
	

 map.addControl(new AMap.MapType({
            defaultType:0 //0代表默认，1代表卫星
        }));
</script>
<script src='/js/tj.js'></script></body>
    
    
    
 
    


</html>
`;

const scriptContent = extractScriptContent(htmlString);
console.log(scriptContent);
