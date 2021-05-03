# my-shortcut README

## Settings

1. Add this line to `~\AppData\Roaming\Code\User\keybings.json`.

```js
{
    "key": "[[ Shortcut key you want to register. e.g. ctrl+shift+a ]]",
    "command": "my-shortcut.execInTerminal"
}
```

2. Add this line to `~\AppData\Roaming\Code\User\settings.json`. If you want to use the path of the currently open file, write `{{filepath}}` in the command.

```js
    "my-shortcut": "[[ The command you want to execute. e.g. python {{filepath}} ]]"
```
