## 一、安装和使用 Mitmproxy 通常包括以下步骤：

### 1 安装 Mitmproxy

1. **使用 pip 安装：**

   使用 Python 包管理器 pip 安装 Mitmproxy。在终端或命令行中执行以下命令：

   ```bash
   pip install mitmproxy
   ```

   这会安装 Mitmproxy 及其相关组件。

2. **验证安装：**

   安装完成后，可以验证 Mitmproxy 是否成功安装。在终端或命令行中执行：

   ```bash
   mitmproxy --version
   ```

   如果一切正常，将显示 Mitmproxy 的版本信息。

### 2 使用 Mitmproxy

1. **启动 Mitmproxy：**

   在终端或命令行中执行以下命令来启动 Mitmproxy：

   ```bash
   mitmproxy
   ```

   这将启动 Mitmproxy 并开始监听默认端口（通常是 8080）。

2. **配置设备代理：**

   在你的设备或应用程序中配置代理，使其流量经过 Mitmproxy。这通常包括设置设备的 Wi-Fi 代理设置，将代理设置为运行 Mitmproxy 的计算机的 IP 地址和端口。

3. **访问 Mitmproxy Web 界面（可选）：**

   如果你使用 Mitmproxy 的图形用户界面（`mitmweb`），可以在浏览器中打开 Mitmweb 界面。在终端中启动 Mitmweb：

   ```bash
   // 可以添加端口: mitmproxy -p 8090
   mitmweb
   ```

   Mitmweb 默认在 `http://127.0.0.1:8081/` 上运行。在浏览器中访问该地址，你将看到 Mitmweb 的图形用户界面。

4. **开始拦截流量：**

   Mitmproxy 已经在监听流量，你可以在 Mitmproxy 终端界面或 Mitmweb 界面中看到拦截的请求和响应。可以使用键盘快捷键来进行各种操作，如查看请求和响应的详细信息、修改请求、保存流量等。

5. **HTTPS 流量解密（可选）：**

   如果要查看 HTTPS 流量的内容，需要在设备上安装 Mitmproxy 的自签名证书。Mitmproxy 会在第一次拦截 HTTPS 流量时生成证书，你可以在 Mitmproxy 的终端或 Mitmweb 界面中找到相应的提示和证书文件。

这就是基本的 Mitmproxy 安装和使用流程。请注意，Mitmproxy 还提供了许多高级功能，如脚本支持、流量导入和导出、WebSocket 支持等。

## 二、Mitmproxy 特点和用途

Mitmproxy（Man-in-the-Middle Proxy）是一款用于拦截、修改和观察网络通信的开源代理工具。它允许你在客户端和服务器之间拦截和查看通信流量，并且具有许多强大的特性，适用于网络安全、调试和测试等场景。

1. **中间人代理：** Mitmproxy 通过在客户端和服务器之间充当中间人，拦截并查看通信流量。这使得用户能够分析和修改数据，用于调试和测试网络应用。

2. **HTTPS 支持：** Mitmproxy 能够处理 HTTPS 流量，它通过生成自签名的证书，将其提供给客户端，实现对加密通信的解密和查看。

3. **命令行和图形界面：** Mitmproxy 提供了命令行界面（mitmproxy）和图形界面（mitmweb），使得用户可以根据自己的偏好选择使用。图形界面通过 Web 界面提供了更直观的操作和监控。

4. **脚本和扩展：** Mitmproxy 具有强大的脚本和扩展能力，用户可以使用 Python 编写脚本来自定义和扩展其功能。这使得用户能够自动化一些任务，进行更高级的分析和修改。

5. **WebSocket 支持：** Mitmproxy 支持 WebSocket 协议，使用户能够拦截和检查 WebSocket 通信。

6. **HTTP/2 支持：** Mitmproxy 可以处理 HTTP/2 流量，提供对现代 Web 应用的支持。

7. **保存和回放：** Mitmproxy 允许用户保存拦截的通信流量，并在以后进行回放。这对于测试和复现问题非常有用。

8. **适用于移动开发：** Mitmproxy 对于移动应用的开发和测试非常有帮助，可以用于查看移动应用与服务器之间的通信、检查 API 请求等。

 mitmproxy 详细信息 [官方文档](https://mitmproxy.org/)

## 三、mitmdump的基本用法和特点
`mitmdump` 是 Mitmproxy 工具套件中的一部分，是其命令行版本，用于在终端中执行 Mitmproxy 的功能。Mitmproxy 是一个中间人代理工具，而 `mitmdump` 提供了在命令行中进行流量拦截、修改和观察的能力。

1. **启动 mitmdump：** 要启动 `mitmdump`，可以在终端中运行以下命令：

   ```
   mitmdump
   ```

   这将启动 Mitmproxy 并在命令行中显示拦截的流量信息。

2. **脚本和扩展：** `mitmdump` 具有强大的脚本和扩展功能，使用者可以通过 Python 编写脚本来自定义和扩展其功能。这允许用户执行自动化的任务、修改请求和响应、以及进行高级的流量分析。

3. **保存和回放：** 与 Mitmproxy 一样，`mitmdump` 允许用户保存拦截的通信流量，并在以后进行回放。这对于测试和复现问题非常有用。

4. **命令行选项：** `mitmdump` 支持许多命令行选项，可以用来设置代理端口、指定日志级别、导入脚本等。你可以通过 `mitmdump --help` 查看可用选项的详细列表。

5. **输出格式：** `mitmdump` 以文本格式输出拦截的流量信息，并将请求和响应的详细内容显示在终端中。对于更直观的操作和监控，你还可以考虑使用 Mitmproxy 的图形界面（mitmweb）。

在实际使用中，你可以通过组合 `mitmdump` 的命令行选项和脚本来满足特定的需求，如拦截特定域名的请求、修改请求头、记录流量等。
   ```
   mitmdump -s myscript.py
   ```

其中 `myscript.py` 是你编写的 Python 脚本，用于自定义 Mitmproxy 的行为。

## 四、mitmweb的主要特点和用法

`mitmweb` 是 Mitmproxy 工具套件中的一个组件，是 Mitmproxy 的图形用户界面（GUI）版本。与 `mitmdump` 命令行工具相比，`mitmweb` 提供了更直观、交互性更强的界面，使用户能够更方便地拦截、查看和修改网络流量。

1. **启动 mitmweb：** 若要启动 `mitmweb`，可以在终端中运行以下命令：

   ```
   mitmweb
   ```

   运行后，你将在终端中看到一个 URL 地址（通常是 `http://127.0.0.1:8081/`），在浏览器中打开这个地址即可访问 `mitmweb` 的图形界面。

2. **图形界面：** `mitmweb` 提供了一个直观的 Web 界面，用户可以通过浏览器访问。这个界面显示了拦截的流量信息，包括请求、响应、请求历史、事件日志等。

3. **HTTPS 支持：** `mitmweb` 能够处理 HTTPS 流量，并通过自签名的证书来实现对加密通信的解密和查看。

4. **实时监控：** 在 `mitmweb` 中，你可以实时监控拦截的流量，查看请求和响应的详细信息，以及修改请求和响应。

5. **WebSocket 支持：** 与 `mitmdump` 一样，`mitmweb` 也支持 WebSocket 协议，可以用于拦截和检查 WebSocket 通信。

6. **保存和导入：** `mitmweb` 允许用户保存拦截的通信流量，并在以后进行导入和回放。这对于测试和复现问题非常有用。

7. **脚本和扩展：** 与 `mitmdump` 一样，`mitmweb` 也支持脚本和扩展，用户可以通过 Python 脚本来自定义和扩展其功能。

8. **界面自定义：** `mitmweb` 允许用户根据需要自定义界面的显示，包括过滤和排序拦截的流量、设置请求和响应的高亮显示等。

在使用 `mitmweb` 时，你可以通过浏览器中提供的图形界面来方便地监控和管理网络流量。与 `mitmdump` 相比，`mitmweb` 更适合那些更喜欢图形界面的用户，以及需要实时交互和可视化的场景。

## 五、mitmproxy证书
Mitmproxy 会生成自签名的证书，用于处理HTTPS流量。当你启动Mitmproxy时，它会生成一个根证书（CA证书），并在首次拦截HTTPS流量时将其提供给客户端。这个根证书允许Mitmproxy创建和签署临时的服务器证书，从而实现对HTTPS通信的中间人代理。

以下是使用Mitmproxy时证书的一些关键点：

1. **CA证书位置：** Mitmproxy 生成的CA证书一般位于用户的`~/.mitmproxy`目录下。你可以在这个目录中找到一个名为`mitmproxy-ca-cert.pem`的文件，这就是Mitmproxy的根证书。

2. **导入CA证书：** 为了使Mitmproxy正常工作，你需要将生成的根证书导入到设备或应用程序中。可以通过访问Mitmproxy的Web界面（mitmweb）或从`~/.mitmproxy`目录中复制证书文件，然后在设备上导入。

3. **iOS导入证书：** 如果你在iOS设备上使用Mitmproxy，可以通过以下步骤导入证书：
   
   - 在Mitmproxy主机的Web界面中，导航到`http://mitm.it`。
   - 点击相应设备的操作系统图标。
   - 它将提供一个配置文件（`.mobileconfig`），下载并安装此配置文件即可导入证书。

4. **Android导入证书：** 如果你在Android设备上使用Mitmproxy，可以通过以下步骤导入证书：

   - 在Mitmproxy主机的Web界面中，导航到`http://mitm.it`。
   - 点击Android图标，下载并安装证书。

5. **其他设备导入证书：** 对于其他设备，可以将`mitmproxy-ca-cert.pem`文件导入到设备中并信任该证书。具体的导入方法因设备而异。

请注意，由于Mitmproxy使用自签名证书，可能会引发安全性警告。在生产环境中，你应该小心使用Mitmproxy，并确保只在受信任的环境中使用它，以避免中间人攻击。在开发和测试环境中，Mitmproxy是一个强大的工具，可以帮助你分析和调试HTTPS通信。


