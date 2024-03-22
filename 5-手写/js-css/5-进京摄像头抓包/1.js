function extractScriptContent(html) {
    const regex = /<script[^>]*>([\s\S]*?)<\/script>/g;
    const match = html.match(regex);
    let scriptContent = match[0];
    // for (const match of matches) {
    //     scriptContent += match[1] + '\n';
    // }
    return scriptContent.trim();
}

// 示例 HTML 字符串
const htmlString = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      var textStyle = {
        fontSize: 12,
        fontWeight: "normal",
        fillColor: "#22886f",
        strokeColor: "#fff",
        strokeWidth: 2,
        fold: true,
        padding: "2, 5",
      };

      var LabelsData = [
        {
          name: "通州区 通武线与李军路交口东 东向西​",
          position: [116.859074, 39.711511],
          aa: "2",
          time: "2024-03-22",
          edittime: "",
          href: "/content/?4755.html",
          icon: 'icon',
        },

        {
          name: "海淀区 金沟河桥东龙门 方向待确认​",
          position: [116.276129, 39.917636],
          aa: "2",
          time: "2024-03-21",
          edittime: "",
          href: "/content/?4754.html",
          icon: 'icon',
        }
      ];
    </script>
    <script>
      var textStyledddddd = {
        fontSize: 12,
        fontWeight: "normal",
        fillColor: "#22886f",
        strokeColor: "#fff",
        strokeWidth: 2,
        fold: true,
        padding: "2, 5",
      };

    </script>
  </body>
</html>
`;

const scriptContent = extractScriptContent(htmlString);
console.log(scriptContent);
