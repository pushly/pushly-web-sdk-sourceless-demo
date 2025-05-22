import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
const SDK_KEY = process.env.SDK_KEY || 'REPLACE_WITH_YOUR_SDK_KEY';

app.use(express.static(path.join(__dirname, '../public')));

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pushly Web SDK Demo</title>
</head>
<body>
  <h1>Pushly Web SDK Demo</h1>

  <iframe id="pushly" srcdoc="
  <script>
    if (!window.PushlySDK) {
      const s = document.currentScript || document.getElementsByTagName('script')[0],
          psh = document.createElement('script');

      psh.src = 'https://cdn.p-n.io/pushly-sdk.min.js?sdk_key=${SDK_KEY}';
      s.insertAdjacentElement('afterend', psh);
    }

    window.PushlySDK = window.PushlySDK || [];

    function pushly() {
      window.PushlySDK.push(arguments);
    }

    pushly('load', {
      domainKey: '${SDK_KEY}',
      sw: '/assets/pushly/pushly-sdk-worker.js'
    });
  </script>
  " src="about:blank" sandbox="allow-same-origin allow-scripts" width="1" height="1" frameborder="0" style="display:none" inert=""></iframe>
</body>
</html>
`;

app.get('/', (req, res) => {
  res.send(htmlContent);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Using SDK key: ${SDK_KEY}`);
});
