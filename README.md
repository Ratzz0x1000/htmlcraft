# htmlcraft
Display custom recipes on your minecraft webpage!

##
### Installation 
To install simply copy `htmlcraft.css, sections.js and htmlcraft.js` into your desired folder and include them in your `<head>` in exactly the same order.

Then enable the autoloader in body as follows: 

`<body onload="bodyOnLoad();">`

Style it as you wish in htmlcraft.css, and you're ready to go!

You can always change the sprite sheet in `htmlcraft.js` in the config section and edit `sections.js` to add new files.

### Using htmlcraft

The file `htmlcraft.js` creates three new html tags:
* recipe
* ingredients
* result

Which you can use as following:

```xml
	<recipe type="3x3">
		<ingredients>
			snow	snow	snow
			snow	ice		snow
			snow	snow	snow
		</ingredients>
		<result>
			packed-ice
		</result>
	</recipe>
```

and that's about it

### Example html file

```xhtml
<!-- nothing fancy, just an example -->
<html>
	<head>
		<link rel="stylesheet" href="htmlcraft.css">
		<script src="sections.js"></script>
		<script src="htmlcraft.js"></script>
	</head>
	<body onload="bodyOnLoad();">
	<recipe type="3x3">
		<ingredients>
			snow	snow	snow
			snow	ice		snow
			snow	snow	snow
		</ingredients>
		<result>
			packed-ice
		</result>
	</recipe>
	</body>
<html>
```

### Limitations

Currently, only 3x3 recipes are accepted <strike>(that's what the server i'm working on required, and I'm lazy)</strike>; however, without much effort you can add, 2x2, furnace, enchanting table, and anvil recipes.

### License

These files are licensed under the Creative Commons <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Attribution-NonCommercial-ShareAlike 3.0 Unported license</a>

* The file `sections.js` is a lua to js adaptation of http://minecraft.gamepedia.com/Module:InvSprite/IDs
* The file `InvSprite.png` is linked externally from http://hydra-media.cursecdn.com/minecraft.gamepedia.com/4/44/InvSprite.png