## Open devtools in you discord app, with CTRL + SHIFT + i (if not work, follow this step below)
```
1. Navigate to the Discord settings folder:
  - Windows: Open the Run dialog (Win+R), type %APPDATA%\Discord\, and press Enter.
  - macOS: Navigate to ~/Library/Application Support/discord/.
  - Linux: Navigate to ~/.config/discord/ or ~/.discord/.
2. Open the settings.json file in a text editor like Notepad++ or TextEdit.
3. Locate the closing } brace at the end of the file. Before this brace, add the following line, ensuring it is properly formatted with a comma if needed:
"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true
4. Save the file and restart Discord. The DevTools shortcut (Ctrl+Shift+I or Cmd+Option+I) should now work.
```

## Then copy this code and paste in discord app console (if cannot paste, type `allow pasting`, then paste again)
```js
const url = 'https://raw.githubusercontent.com/exphert/Scripts/refs/heads/main/discord-quest-completer.js';

fetch(url)
    .then(response => {
        // Check for an HTTP error status (e.g., 404, 500)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Get the response body as plain text
        return response.text();
    })
    .then(scriptText => {
        console.log('--- Script content fetched: ---');
        console.log(scriptText.substring(0, 500) + '...'); // Log first 500 characters
        console.log('--- Executing script... ---');
        
        // **Execute the fetched JavaScript content**
        // 🚨 DANGER: Only execute trusted code!
        eval(scriptText); 
        
        console.log('--- Script execution complete. ---');
    })
    .catch(error => {
        console.error('Error fetching or executing script:', error);
    });
```
