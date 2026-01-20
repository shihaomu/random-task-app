# 🚀 发布应用到互联网

让全世界都能使用你的随机任务生成器！

## 方法一：GitHub Pages（推荐 ⭐）

**优点：** 完全免费、稳定、支持自定义域名、部署简单

### 步骤：

1. **创建 GitHub 仓库**
   ```bash
   # 在 GitHub 上创建新仓库后，运行以下命令
   git remote add origin https://github.com/你的用户名/random-task-app.git
   git branch -M main
   git push -u origin main
   ```

2. **启用 GitHub Pages**
   - 打开你的 GitHub 仓库页面
   - 点击 **Settings** (设置)
   - 左侧菜单找到 **Pages**
   - **Source** 选择：Deploy from a branch
   - **Branch** 选择：main → / (root)
   - 点击 **Save**

3. **等待部署**
   - 几分钟后，你的应用会发布在：`https://你的用户名.github.io/random-task-app/`

4. **分享链接**
   - 把这个链接分享给朋友，他们就能直接使用了！

---

## 方法二：Vercel（更简单 🚀）

**优点：** 部署更快、自动 HTTPS、全球 CDN

### 步骤：

1. 访问 [vercel.com](https://vercel.com) 并注册（推荐用 GitHub 登录）

2. 点击 **New Project**

3. 导入你的 Git 仓库

4. 点击 **Deploy**

5. 几秒后你会得到一个链接：`https://random-task-app.vercel.app`

---

## 方法三：Netlify

**优点：** 拖拽部署、免费 SSL、表单处理

### 步骤：

1. 访问 [netlify.com](https://netlify.com) 并注册

2. 直接把 `src` 文件夹拖到 Netlify 网页上

3. 几秒后就能访问！

---

## 方法四：自己构建在线版本

直接访问这些免费托管服务：

- **Tiiny Host**: [tiiny.host](https://tiiny.host) - 上传 HTML 文件
- **GitHub Gist**: 上传代码并分享链接
- **CodePen**: [codepen.io](https://codepen.io) - 在线编辑器，可分享

---

## 💡 推荐

对于这个应用，我最推荐 **GitHub Pages** 或 **Vercel**：

✅ 完全免费
✅ 部署简单
✅ 全球可访问
✅ 支持自定义域名
✅ 自动更新

选择一个你喜欢的平台，几分钟就能让全世界使用你的应用了！🎉
