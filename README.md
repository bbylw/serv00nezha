# PH Style Server Status

这是一个使用 Pornhub 风格设计的服务器状态监控面板展示页面。该项目将 [哪吒监控面板](https://ssss.nyc.mn/) 嵌入到一个自定义设计的界面中，专门用于监控 serv00 服务器的运行状态和资源使用情况。

## 监控内容

通过集成哪吒监控面板，本项目实时监控 serv00 服务器的以下数据指标：

- 💻 服务器在线状态和运行时间
- 🔄 CPU 使用率和负载情况
- 💾 内存使用情况和占用率
- 💿 磁盘使用量和剩余空间
- 🌐 网络带宽使用情况
- 🌡️ 服务器温度监控（如果支持）

所有数据都通过哪吒监控后端从 serv00 服务器实时采集并更新，确保监控信息的及时性和准确性。通过这个面板，你可以随时了解 serv00 服务器的健康状态和性能表现。

## 特点

- 🎨 Pornhub 经典黑橙配色方案
- 📱 完全响应式设计，支持各种设备
- 🖼️ 内嵌原版监控面板
- 🔗 快速跳转原站功能
- ⚡ 基于 Cloudflare Workers 部署，访问速度快
- 📊 实时数据更新，监控无延迟

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

欢迎提交 Issues 和 Pull Requests 来改进这个项目
