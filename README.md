#### 开发环境
xxxx

#### 测试环境
xxxx

#### 生产环境
xxxx

#### 文件资源目录 
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ hooks               # 常用 Hooks
│  ├─ layout              # 框架布局
│  ├─ router              # 路由管理
│  ├─ redux               # redux store
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 工具库
│  ├─ pages               # 项目所有页面
│  ├─ App.tsx             # 入口页面
│  ├─ index.tsx           # 入口文件
│  └─ setupProxy.js       # proxy代理
├─ .gitignore             # git
├─ .craco.config.js       # 脚手架配置
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
└─ tsconfig.json          # typescript 全局配置


### 使用sass预处理器
npm install node-sass -save