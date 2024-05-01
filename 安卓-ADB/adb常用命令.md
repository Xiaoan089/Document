
# 1、ADB

```
// 链接虚拟机 端口号：夜神:62001、网易MUMU:7555、逍遥:21503
[root@xxx/]$ adb connect 127.0.0.1:21503
connected to 127.0.0.1:21503

// 查看当前设备
[root@xxx/]$ adb devices
List of devices attached
127.0.0.1:21503 unauthorized // USB调试同意前
127.0.0.1:21503 device // USB调试同意后

// 进入虚拟机环境命令中
[root@xxx/]$ adb shell
SM-S9010:/ #    // 表示已经进入虚拟机环境命令中

// push PC 端推送数据到设备环境中
// adb push 本地地址文件 目标路径 
[root@xxx/]$ adb push frida-server /data/local/tmp
// frida-server推送到虚拟机环境中 需要执行 所以需要配置权限
SM-S9010:/ # adb shell
SM-S9010:/ # cd /data/local/tmp
SM-S9010:/data/local/tmp # chmod 777  frida-server
SM-S9010:/data/local/tmp # ./frida-server  // 执行文件
// adb push frida-server /data/local/tmp
// adb pull /sdcard/DCIM/Camera/demo.jpg demo.jpg
// 查看 虚拟机 版本编码 并下载指定的 Frida-server 
SM-S9010:/ # getprop ro.product.cpu.abi
arm64-v8a
// android 存储路径
// /sdcard/Documents
```