# Tab Performance Tool

This is a Firefox extension.

Tab Performance Tool is my attempt at making a more feature-rich about:performance panel for Firefox. Currently it only lists loaded tabs, and allows you to unload a tab from memory by clicking on the list.

How to find the panel:

1) Verify that you have installed Tab Performance Tool
2) Navigate to "about:debugging"
3) Click "This Firefox"
4) Find where the extension is listed on the page
5) Copy the link pointing to the URL of the manifest file of the extension (it will be ending with "manifest.json")
6) Paste that URL and edit it, removing "manifest.json" and replacing that part with "tabs.html"
7) Navigate to that new URL

Unfortunately when making this I did not realize important parts of Firefox needed to recreate about:performance page, are locked away from extension developers. Until the APIs available to extensions is expanded, this extension will be without most of its intended features.
