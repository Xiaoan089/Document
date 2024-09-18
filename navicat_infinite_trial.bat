chcp 65001
@echo off
setlocal enabledelayedexpansion

@REM regedit

echo 删除 HKEY_CURRENT_USER\Software\PremiumSoft\NavicatPremium 下的 Registration[version and language]
for /f "tokens=*" %%i in ('reg query "HKEY_CURRENT_USER\Software\PremiumSoft\NavicatPremium" /s ^| findstr /R "Registration[0-9A-Za-z]*"') do (
    reg delete "%%i" /f
)
echo 已删除

echo 删除 HKEY_CURRENT_USER\SOFTWARE\Classes\CLSID 下包含 Info 的节点
for /f "tokens=*" %%i in ('reg query "HKEY_CURRENT_USER\SOFTWARE\Classes\CLSID" /s ^| findstr /R "Info"') do (
    set "line=%%i"
    if "!line:~0,41!"=="HKEY_CURRENT_USER\SOFTWARE\Classes\CLSID\" (
        echo 已删除：!line!
        reg delete "!line!" /f
    )
)
echo 已删除

echo 删除 HKEY_CURRENT_USER\SOFTWARE\Classes\CLSID 下包含 Info 的节点
for /f "tokens=*" %%i in ('reg query "HKEY_CURRENT_USER\SOFTWARE\Classes\CLSID" /s ^| findstr /R "Info"') do (
    set "line=%%i"
    if "!line:~0,41!"=="HKEY_CURRENT_USER\SOFTWARE\Classes\CLSID\" (
        echo 已删除：!line!
        reg delete "!line!" /f
    )
)
echo 已删除

echo 删除 HKEY_CURRENT_USER\SOFTWARE\Classes\CLSID 下只包含 DefaultIcon 和 ShellFolder 的节点
for /f "tokens=*" %%i in ('reg query "HKEY_CURRENT_USER\SOFTWARE\Classes\CLSID"') do (
    set "key=%%i"
    set "hasDefaultIcon="
    set "hasShellFolder="
    set "subkeyCount=0"
    
    for /f "tokens=*" %%j in ('reg query "%%i"') do (
        set /a subkeyCount+=1
        if "%%~nxj"=="DefaultIcon" (
            set "hasDefaultIcon=1"
        )
        if "%%~nxj"=="ShellFolder" (
            set "hasShellFolder=1"
        )
    )
    
    if !subkeyCount! equ 2 (
        if defined hasDefaultIcon (
            if defined hasShellFolder (
                reg delete "%%i" /f
                echo 已删除：%%i
            )
        )
    )
)

echo Done!
pause