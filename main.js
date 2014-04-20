/*
 * The MIT License (MIT)
 * Copyright (c) 2014 George Raptis. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window, Mustache */

define(function (require, exports, module) {
    'use strict';

    var AppInit = brackets.getModule('utils/AppInit'),
        EditorManager = brackets.getModule('editor/EditorManager'),
        PreferencesManager = brackets.getModule('preferences/PreferencesManager'),
        Menus = brackets.getModule('command/Menus'),
        CommandManager = brackets.getModule('command/CommandManager'),
        KeyEvent = brackets.getModule('utils/KeyEvent'),
        
        snippets = require('snippet'),
        enabled = false,
        prefs = PreferencesManager.getExtensionPrefs('jade-snippets'),
    
        COMMAND_NAME = 'Enable Jade Snippets',
        COMMAND_ID = 'georapbox.toggleJadeSnippets',
        
        handleToggleSnippets = function () {
            enabled = !enabled;
            prefs.set('enabled', enabled);
            prefs.save();
            CommandManager.get(COMMAND_ID).setChecked(enabled);
        },
        
        applyPreferences = function () {
            enabled = prefs.get('enabled');
            CommandManager.get(COMMAND_ID).setChecked(enabled);
        },
        
        parseLine = function (line, cursorPosition) {
            var words;
            line = line.substring(0, cursorPosition);
            words = line.split(/\W/);
            return words[words.length - 1];
        },
    
        keyEventHandler = function ($event, editor, event) {
            enabled = prefs.get('enabled');
            
            var cursorPosition, line, snippetKey, start;
            
            if (enabled) {
                if ((event.type === 'keydown') && (event.keyCode === KeyEvent.DOM_VK_TAB)) {
                    cursorPosition = editor.getCursorPos();
                    line = editor.document.getLine(cursorPosition.line);
                    snippetKey = parseLine(line, cursorPosition.ch);

                    if (snippets[snippetKey]) {
                        start = {
                            line: cursorPosition.line,
                            ch: cursorPosition.ch - snippetKey.length
                        };

                        editor.document.replaceRange(snippets[snippetKey], start, cursorPosition);
                        event.preventDefault();
                    }
                }
            }
        },
    
        activeEditorChangeHandler = function ($event, focusedEditor, lostEditor) {
            enabled = prefs.get('enabled');
            if (lostEditor) { $(lostEditor).off('keyEvent', keyEventHandler); }
            if (focusedEditor) { $(focusedEditor).on('keyEvent', keyEventHandler); }
        };
    
    AppInit.appReady(function () {
        enabled = prefs.get('enabled');
        
        // Register toggle command and add it to Edit menu
        CommandManager.register(COMMAND_NAME, COMMAND_ID, handleToggleSnippets);
        Menus.getMenu(Menus.AppMenuBar.EDIT_MENU).addMenuItem(COMMAND_ID);
        
        var currentEditor = EditorManager.getCurrentFullEditor();
        $(currentEditor).on('keyEvent', keyEventHandler);
        $(EditorManager).on('activeEditorChange', activeEditorChangeHandler);
        
        prefs.on('change', applyPreferences);
        applyPreferences();
    });
});