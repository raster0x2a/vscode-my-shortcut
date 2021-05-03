// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "my-shortcut" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('my-shortcut.execInTerminal', function () {
		// The code you place here will be executed every time your command is executed

		//vscode.window.showInformationMessage('my-shortcut is running');
        const editor = vscode.window.activeTextEditor;
        const terminal = vscode.window.createTerminal();
        terminal.show();  // move to new terminal

        // get config from setting.json and set command
        const workbenchConfig = vscode.workspace.getConfiguration('my-shortcut');
        const cmd = workbenchConfig.get('command').replace(/{{filepath}}/g, editor.document.uri.fsPath);

        // exec in terminal
        terminal.sendText(cmd);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
