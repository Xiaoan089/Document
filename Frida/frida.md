# 1、ADB 和 Frida 相关命令

| adb命令                                 | 命令描述           |
|---------------------------------------|----------------|
| adb devices                           | 列出当前设备         |
| adb connect 127.0.0.1:21503           | 链接设备(注意端口)     |
| adb shell                             | 进入 shell       |
| adb kill-server                       | 关闭服务           |
| adb start-server                      | 启动服务           |
| adb reboot                            | 重启服务           |
| adb forward tcp:27042 tcp:27042       | 端口转发           |
| adb shell dumpsys activity top        | 查看APK包名        |
| frida -ls -devices	                   | 列出所有连接到计算机上的设备 |
| frida-ps -U	                          | 列出正在运行的进程      |
| frida-ps -Uai	                        | 列出安装的程序        |
| frida-ps -Ua	                         | 列出运行中的程序       |
| frida-ps -D '设备ID'	                   | 连接Frida到指定的设备  |
| frida-trace -U -f Name-i '函数名'	       | 跟踪某个函数         |
| frida-trace -U -f Name-m '方法名'	       | 跟踪某个方法         |
| frida -U -l *.js '进程ID'	              | 加载Js脚本         |
| frida -U -l *.js -f com.package.name	 | 加载Js脚本(程序包名)   |
| frida -discover -n Name	              | 发现程序内部函数       |
| frida -discover -p pid	               | 发现程序内部函数       |
| frida -kill -U '进程ID'	                | 结束进程           |


# 2、Frida 工作环境搭建
```shell
直接使用 pip3 命令安装 Frida Frida-tools
// 安装 Frida 
[root@xxx/]$ pip3 install Frida

// 安装 Frida-tools
[root@xxx/]$ pip3 install Frida-tools
```


# 3、Hook脚本
- js hook脚本
```javascript
// 启动脚本命令：frida -U -l *.js -f com.package.name
setImmediate(function() {
    console.log("[*] Starting script");

    Java.perform(function() {
        console.log("hello world start");
        var myClass = Java.use("com.handsgo.hooktest.MainActivity");
        myClass.clickMsg.implementation = function(v) {
            console.log("hello world = " + v);
        }
      
    })
})
```
- python hook脚本
```python
import frida
import sys

jscode = '''
Java.perform(function() {
    console.log("hello world start");
    var myClass = Java.use("com.handsgo.hooktest.MainActivity");
    myClass.clickMsg.implementation = function(v) {
        console.log("hello world = " + v);
    }
});

'''


def on_message(message, data):
    if message["type"] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


def load_js(pathName):
    with open(pathName) as js_code:
        return js_code.read()
    return ''


def get_pid_by_name(device, name):
    # 查看所有进程
    processes = device.enumerate_processes()
    for process in processes:
        if str(name).lower() in str(process.name).lower():
            return process.pid


def run_hook(app_name):
    # get_usb_device获取设备
    device = frida.get_usb_device()

    # 加载需要hook的程序
    pid = get_pid_by_name(device, app_name)
    session = device.attach(pid)

    # 加载js脚本
    js_code = load_js(pathName)
    script = session.create_script(jscode)

    # 打印效果
    script.on('message', on_message)

    # 加载脚本
    script.load()
    sys.stdin.read()
```

## Frida 命令
| frida命令 | 命令全称     | 命令示例 | 命令描述                |
|---------|----------|-----|---------------------|
| -v     | --version | frida -v    | 显示 Frida 版本信息。      |
| -U  | --usb    |  frida -U com.example.myapp  | 使用 USB 连接到设备，而不是通过网络连接 |
| -H  | --host   |  frida -H 192.168.0.100 com.example.myapp | 指定连接的主机地址，用于网络连接    |
| -f  | --file   |  frida -f com.example.myapp  | 启动指定的应用程序或脚本   |
| -l  | --load   |  frida -l myscript.js com.example.myapp |  加载 JavaScript 脚本文件 |
| -D  | --device | frida -D 123456 com.example.myapp   |  指定设备 ID，用于在多个设备上选择目标 |
| -o  | --output | frida -o output.txt com.example.myapp   |  将输出保存到文件                   |
| -n  | --attach | frida -n myprocess   |   附加到指定进程  |
| -R  | --repl | frida -R com.example.myapp |  启动 REPL（交互式解释器） |
| -I  | --no-pause |    | 在启动时不要暂停目标进程 |