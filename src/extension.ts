import * as vscode from 'vscode';

import createComment from './createComment'

export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('vscode-concise-comment.comment', () => {
		createComment()
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
