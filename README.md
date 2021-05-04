# my-shortcut README

## About

VSCode extension that registers commands and executes them in the terminal with shortcut keys.

## Install

### Windows

```
cd C:\Users\xxx\.vscode\extensions
git clone https://github.com/raster0x2a/vscode-my-shortcut.git
```

## Settings

1. Add this line to `C:\Users\xxx\AppData\Roaming\Code\User\keybings.json`.

```js
{
    "key": "[[ Shortcut key you want to register. e.g. ctrl+shift+z ]]",
    "command": "my-shortcut.execInTerminal"
}
```

2. Add this line to `C:\Users\xxx\AppData\Roaming\Code\User\settings.json`. If you want to use the path of the currently open file, write `{{filepath}}` in the command.

```js
    "my-shortcut": "[[ The command you want to execute. e.g. python {{filepath}} ]]"
```
