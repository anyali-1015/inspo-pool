# 灵感池

手机端自媒体灵感库，三个模块：

- **灵感池**：小红书 / 抖音 / ins 笔记链接，卡片展示，可加 tag（低粉爆款、POV 系列、拍照灵感……）
- **爆款标题**：随手粘贴有流量的标题，支持多行批量添加、一键复制、tag 筛选
- **从博主主页批量导入标题**：在电脑浏览器里登录小红书 / 抖音，打开博主主页，点「抓标题到灵感池」书签，自动滚动收集约 100 条笔记标题和赞数，复制后粘回爆款标题页，按赞数勾选导入
- **拍照灵感**：从相册存喜欢的照片，加备注和 tag（构图、姿势、光影……），全屏左右滑动翻看
- **参考博主**：平台、主页链接、备注，可按平台和 tag 筛选

单文件 `index.html`，无依赖。直接用浏览器打开，或开启 GitHub Pages 访问。

## 数据存储

- 在 Claude 里作为 Artifact 打开时，数据存在云端，多设备同步。
- 独立打开（本地 / GitHub Pages）时，数据存在当前浏览器的 localStorage，只在这台设备上。照片存在浏览器的 IndexedDB 里（自动压缩到长边 1600px）。右上角「备份」可以导出 / 导入 JSON 文件，照片也一起打包。

在线使用：https://anyali-1015.github.io/inspo-pool/

## iPhone App（自己装，不上架）

用 [Capacitor](https://capacitorjs.com) 把同一个页面包成原生 iOS app，数据存在 app 自己的空间里，不受 Safari 清理影响。

**第一次安装（Mac 上做一次）**

1. 装 Xcode（App Store）和 Node.js（https://nodejs.org 下载 LTS）
2. 终端里运行：
   ```bash
   git clone https://github.com/anyali-1015/inspo-pool.git
   cd inspo-pool
   npm install
   npm run sync
   npm run open
   ```
3. Xcode 打开后：左边点 **App** → **Signing & Capabilities** → Team 选 **Add an Account…** 登录你的 Apple ID，选 *(Personal Team)*。如果提示 Bundle Identifier 被占用，把 `com.anyali.inspopool` 后面随便加几个字母。
4. iPhone 用线连 Mac。iPhone 上打开 **设置 → 隐私与安全性 → 开发者模式**，打开后重启。
5. Xcode 顶部设备选你的 iPhone，点 ▶ 运行。
6. 第一次打开会提示不受信任：iPhone **设置 → 通用 → VPN 与设备管理**，点你的 Apple ID → 信任。

**数据自动备份**：app 每次改动都会把数据和照片存一份到「文件」App → 我的 iPhone → 灵感池，并随 iPhone 的 iCloud 备份。app 内数据万一丢失，打开时会自动从这里恢复。删除 app 会连这份备份一起删，所以过期了重新安装即可，不要删 app。

**免费 Apple ID 每 7 天会过期**：到期后 app 打不开，连上 Mac 在 Xcode 里再点一次 ▶ 就好，数据不会丢。开通 Apple Developer（99 美元/年）后一次安装可用一年。

**改了页面之后更新 app**：`git pull && npm run sync`，再在 Xcode 点 ▶。
