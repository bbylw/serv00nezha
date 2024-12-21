# PH Style Server Status

这是一个使用 Pornhub 风格设计的服务器状态监控面板展示页面。该项目将 [哪吒监控面板](https://ssss.nyc.mn/) 嵌入到一个自定义设计的界面中。

## 特点

- 🎨 Pornhub 经典黑橙配色方案
- 📱 完全响应式设计，支持各种设备
- 🖼️ 内嵌原版监控面板
- 🔗 快速跳转原站功能
- ⚡ 基于 Cloudflare Workers 部署，访问速度快

## 部署方法

1. 登录到 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 `Workers & Pages` 页面
3. 点击 `Create Application`
4. 选择 `Create Worker`
5. 将 `worker.js` 中的代码复制到编辑器中
6. 点击 `Save and Deploy`
7. 完成部署！

## 技术栈

- Cloudflare Workers
- HTML5
- CSS3

## 原项目来源

本项目使用了 [哪吒监控](https://ssss.nyc.mn/) 的面板数据。哪吒监控是一个开源的服务器监控解决方案。

## 注意事项

- 由于跨域限制，某些情况下iframe可能无法正常显示
- 建议在部署前确认目标网站允许被嵌入框架显示
- 如遇到显示问题，请检查目标站点的 X-Frame-Options 设置

## 许可证

MIT License

## 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个项目！ 