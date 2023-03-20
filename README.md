# steam-renew-helper
Injectable javascript used for the steam redeem page in browser to automatically submit a prefilled code.

# How to use
Depending on your browser the use methods may be different but I will outline the basics with firefox which should be mostly applicable with other browsers

1. Find an extension that lets you inject javascript into a webpage
    - [Simple JavaScript Injector](https://addons.mozilla.org/en-GB/firefox/addon/simple-javascript-injector/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
    - [Code Injector](https://addons.mozilla.org/en-US/firefox/addon/codeinjector/?utm_content=addons-manager-reviews-link&utm_medium=firefox-browser&utm_source=firefox-browser) (I Personally use this one)

2. Copy the contents of the `steam-helper.js` file into the injector, or have it source the file if the extension supports it

3. set the domain to be the steam store `store.steampowered.com`, if possible you can limit it to `store.steampowered.com/redeem`

# Planned Features
- Don't auto close the window if the key fails to redeem.
- If the key already exists on the account save the key to a text file with name as the game name.