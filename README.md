<div align="center">
	<a href="https://github.com/Gabe616/VendettaThemesPlus/stargazers">
		<img alt="GitHub stars" src="https://img.shields.io/github/stars/Gabe616/VendettaThemesPlus?style=for-the-badge&color=b4befe&labelColor=1e1e2e&logo=starship&logoColor=fff">
	</a>
	<a href="https://github.com/Gabe616/VendettaThemesPlus/issues">
		<img alt="GitHub issues" src="https://img.shields.io/github/issues/Gabe616/VendettaThemesPlus?style=for-the-badge&color=74c7ec&labelColor=1e1e2e&logo=gitbook&logoColor=fff">
	</a>
	<a href="https://github.com/Gabe616/VendettaThemesPlus/issues">
		<img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/Gabe616/VendettaThemesPlus?style=for-the-badge&color=a6e3a1&labelColor=1e1e2e&logo=saucelabs&logoColor=fff">
	</a>
	<a href="https://discord.gg/n9QQ4XhhJP">
		<img alt="Discord members" src="https://img.shields.io/discord/1015931589865246730?style=for-the-badge&color=eba0ac&labelColor=1e1e2e&logo=discord&logoColor=fff">
	</a>
</div>
<div align="center">
    <h1>🎨 Vendetta Themes+</h1>
</div>

## Table of Contents

- [Vendetta Themes+](#-vendetta-themes)
  - [Table of Contents](#table-of-contents)
  - [Info](#info)
  - [Links](#links)
  - [Examples](#examples)
  - [Structure](#structure)
    - [Custom Icon Colors](#custom-icon-colors)
    - [Unread Badge Color](#unread-badge-color)
    - [Custom Icon Overlays](#custom-icon-overlays)
    - [Mention Line Color](#mention-line-color)
  - [Icon Pack](#icon-pack)
  - [The Color System](#the-color-system)

## Info

Vendetta Themes+ is a plugin that adds more customizability to themes, such as:

- recoloring icons ([completely](#custom-icon-colors), [unread badges](#unread-badge-color), and [seperate layers](#custom-icon-overlays))
- [changing the mention line color](#mention-line-color)

Users must install [this plugin](https://vendetta.nexpid.xyz/monet-theme) in order to use Vendetta Themes+.  
It's recommended to include this message (or something similiar to it) wherever you're promoting your theme:

```
This theme uses Themes+, install it here: <#1134225314923417690>
```

## Links

- [This repository](https://github.com/Gabe616/VendettaThemesPlus)
- [Plugins channel link](#) (doesn't exist yet)
- [Plugin link](https://vendetta.nexpid.xyz/themes-plus)
- [Plugin source code](https://github.com/Gabe616/VendettaPlugins/tree/main/plugins/themes-plus)

## Examples

- MonetTheme — [\[plugin link\]](https://vendetta.nexpid.xyz/monet-theme)
- Maggie's Purple — [\[channel link\]](https://discord.com/channels/1015931589865246730/1137102371172917380) [\[theme link\]](https://raw.githubusercontent.com/maggster165/vendettathemes/main/maggiespurple.json)

## Structure

Using Vendetta Themes+ is as easy as adding this property to your theme.  
The latest structure version of Vendetta Themes+ is `0`  
Structure:

- `plus` — object, contains everything
  - version — number, used for backwards compability

Example:

```json
"plus": {
	"version": 0
}
```

### Custom Icon Colors

Recolors icons. (this changes the color of the icon _completely_!)  
Structure:

- `icons` — object, contains all the icons
  - key — string, codename of an asset (or a [custom icon overlay](#custom-icon-overlays))
  - value — [color](#the-color-system)

Example:

```json
"plus": {
	"version": 0,
	"icons": {
		"ic_new_pins": [
			"#FAA",
			"#AFA",
			"#AAF",
			"#FAF"
		],
		"emoji": [
			"#AFF"
		]
	}
}
```

Would look like:

| Original                                     | Dark                                     | Light                                     | Amoled                                     | Darker                                     |
| -------------------------------------------- | ---------------------------------------- | ----------------------------------------- | ------------------------------------------ | ------------------------------------------ |
| ![](./assets/icons/ic_new_pins/original.png) | ![](./assets/icons/ic_new_pins/dark.png) | ![](./assets/icons/ic_new_pins/light.png) | ![](./assets/icons/ic_new_pins/amoled.png) | ![](./assets/icons/ic_new_pins/darker.png) |
| ![](./assets/icons/emoji/original.png)       | ![](./assets/icons/emoji/dark.png)       | ![](./assets/icons/emoji/original.png)    | ![](./assets/icons/emoji/dark.png)         | ![](./assets/icons/emoji/dark.png)         |

### Unread Badge Color

Changes the color of the unread badge indicator.
Structure:

- `unreadBadgeColor` — [color](#the-color-system)

Example:

```json
"plus": {
	"version": 0,
	"unreadBadgeColor": "#FFA"
}
```

Would look like:

| Original                                      | Recolored                                      |
| --------------------------------------------- | ---------------------------------------------- |
| ![](./assets/unread-badge-color/original.png) | ![](./assets/unread-badge-color/recolored.png) |

### Custom Icon Overlays

Adds extra customizable layers to icons. You can find the full list[**here**](./CUSTOM_ICON_OVERLAYS.md)

Structure:

- `customOverlays` — boolean, whether custom icon overlays are enabled

Example:

```json
"plus": {
	"version": 0,
	"unreadBadgeColor": "#FAF",
	"icons": {
		"ic_radio_square_checked__overlay": "#FFA"
	},
	"customOverlays": true
}
```

Would look like:

| Original                                                          | Recolored                                                          |
| ----------------------------------------------------------------- | ------------------------------------------------------------------ |
| ![](./assets/custom-overlay/ic_new_pins/original.png)             | ![](./assets/custom-overlay/ic_new_pins/recolored.png)             |
| ![](./assets/custom-overlay/ic_radio_square_checked/original.png) | ![](./assets/custom-overlay/ic_radio_square_checked/recolored.png) |

### Mention Line Color

Recolors the line next to a message where you were mentioned

Structure:

- `mentionLineColor` — [color](#the-color-system)

Example:

```json
"plus": {
	"version": 0,
	"mentionLineColor": "#F00"
}
```

Would look like:

| Original                                      | Recolored                                      |
| --------------------------------------------- | ---------------------------------------------- |
| ![](./assets/mention-line-color/original.png) | ![](./assets/mention-line-color/recolored.png) |

### Icon Pack

Changes how icons look. You can find the full list of iconpacks [**here**](./iconpacks/README.md)

Structure:

- `iconPack` — string, the name of the iconpack

Example:

```json
"plus": {
	"version": 0,
	"iconPack": "rosiecord-plumpy"
}
```

Would look like:

| Original Icons                                                                                                                                             | rosiecord-plumpy                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/Wumpus-Central/Discord-Datamining-Android/main/res/drawable-xxhdpi/images_native_main_tabs_messages.png)             | ![](https://raw.githubusercontent.com/acquitelol/rosiecord/master/Packs/Plumpy/images/native/main_tabs/Messages%403x.png)                           |
| ![](https://raw.githubusercontent.com/Wumpus-Central/Discord-Datamining-Android/main/res/drawable-xxhdpi/images_native_icons_ic_stage_channel_24px.png)    | ![](https://raw.githubusercontent.com/acquitelol/rosiecord/master/Packs/Plumpy/modules/stage_channels/native/images/ic_stage_channel_24px%403x.png) |
| ![](https://raw.githubusercontent.com/Wumpus-Central/Discord-Datamining-Android/main/res/drawable-xxhdpi/images_native_icons_ic_notification_settings.png) | ![](https://raw.githubusercontent.com/acquitelol/rosiecord/master/Packs/Plumpy/images/native/icons/ic_notification_settings%403x.png)               |

## The Color System

A color can be:

- An array of strings, representing a hex code for each theme in this order: **dark, light, amoled, darker** (only the first color is required)
- A string, representing a RawColor that applies to all themes (must begin with `RC_`) ([list of all RawColors](https://github.com/Gabe616/VendettaThemeUtil/blob/main/colors/latest/RawColors.json))
- A string, representing a SemanticColor that applies to the current theme (must begin with `SC_`) ([list of all SemanticColors](https://github.com/Gabe616/VendettaThemeUtil/blob/main/colors/latest/SemanticColors.json))
- A string, a hex code for each theme

Example: (assuming an unthemed client with dark mode)

| Color                      | Preview                         |
| -------------------------- | ------------------------------- |
| `["#FAA", "#AFA", "#AAF"]` | ![](./assets/colors/first.svg)  |
| `RC_SPOTIFY`               | ![](./assets/colors/second.svg) |
| `SC_TEXT_LINK`             | ![](./assets/colors/third.svg)  |
| `#FAF`                     | ![](./assets/colors/fourth.svg) |
