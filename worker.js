export default {
  async fetch(request, env) {
    return new Response(HTML, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};

const HTML = `
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Status</title>
    <style>
        :root {
            --ph-orange: #ff9000;
            --ph-black: #000000;
            --ph-dark-gray: #1b1b1b;
            --ph-light-gray: #282828;
        }
        
        body {
            margin: 0;
            padding: 0;
            background-color: var(--ph-black);
            color: white;
            font-family: Arial, sans-serif;
        }
        
        .header {
            background-color: var(--ph-dark-gray);
            padding: 20px;
            text-align: center;
        }
        
        .logo {
            font-size: 2.5em;
            font-weight: bold;
            color: white;
            text-decoration: none;
        }
        
        .ph-button {
            display: inline-block;
            background-color: var(--ph-orange);
            color: var(--ph-black);
            padding: 10px 20px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: bold;
            margin: 20px 0;
            transition: background-color 0.3s;
        }
        
        .ph-button:hover {
            background-color: #ffa31a;
        }
        
        .content {
            max-width: 1200px;
            margin: 20px auto;
            padding: 0 20px;
        }
        
        .iframe-container {
            background-color: var(--ph-light-gray);
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }
        
        iframe {
            width: 100%;
            height: 800px;
            border: none;
            background-color: white;
        }
    </style>
</head>
<body>
    <div class="header">
        <span class="logo">Server<span style="color: var(--ph-orange)">Status</span></span>
        <div>
            <a href="https://ssss.nyc.mn/" target="_blank" class="ph-button">访问原站</a>
        </div>
    </div>
    
    <div class="content">
        <div class="iframe-container">
            <iframe src="https://ssss.nyc.mn/" title="Server Status"></iframe>
        </div>
    </div>
</body>
</html>
`; 