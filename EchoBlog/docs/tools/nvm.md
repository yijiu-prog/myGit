### 1.下载

nvm 地址: https://github.com/coreybutler/nvm-windows/releases

### 2.常用命令

nvm arch [32|64]： 显示 node 是运行在 32 位还是 64 位模式。指定 32 或 64 来覆盖默认体系结构。
nvm install [arch]：nvm install 16.17.0 64  
可以是 node.js 版本或最新稳定版本 latest。（可选[arch]）指定安装 32 位或 64 位版本（默认为系统 arch）。设置[arch]为 all 以安装 32 和 64 位版本。在命令后面添加–insecure，可以绕过远端下载服务器的 SSL 验证。
nvm list ：列出已经安装的 node.js 版本。这个命令可以简写为 nvm ls
nvm list available: 可选的 available，显示可下载版本的部分列表。
nvm on： 启用 node.js 版本管理。
nvm off： 禁用 node.js 版本管理(不卸载任何东西)
nvm proxy [url]： 设置用于下载的代理。留[url]空白，以查看当前的代理。设置[url]为 none 删除代理。
nvm node_mirror [url]：设置 node 镜像，默认为https://nodejs.org/dist/.。可以设置为淘宝的镜像https://npm.taobao.org/mirrors/node/
nvm npm_mirror [url]：设置 npm 镜像，默认为https://github.com/npm/npm/archive/。可以设置为淘宝的镜像https://npm.taobao.org/mirrors/npm/
nvm uninstall ： 卸载指定版本的 nodejs。
nvm use [version] [arch]： 切换到使用指定的 nodejs 版本。可以指定 32/64 位[arch]。
nvm use ：将继续使用所选版本，但根据提供的值切换到 32/64 位模式
nvm root [path]： 设置 nvm 存储 node.js 不同版本的目录 ,如果未设置，将使用当前目录。
nvm version： 显示当前运行的 nvm 版本，可以简写为 nvm v

### 3. 管理员权限运行

1.使用系统管理员运行 nvm use version 命令 来切换 node 版本 ,不然会出错,切换不成功

### 4.下载 cnpm

npm install -g cnpm --registry=http://registry.npm.taobao.org
