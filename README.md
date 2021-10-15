# Fork Corner [![openbase](https://badges.openbase.io/js/rating/fork-corner.svg)](https://openbase.io/js/fork-corner?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge) [![huntr](https://cdn.huntr.dev/huntr_security_badge_mono.svg)](https://huntr.dev)


[![created by](https://img.shields.io/badge/created%20by-Waren%20Gonzaga-blue.svg?longCache=true&style=flat-square)](https://github.com/warengonzaga) [![discord](https://img.shields.io/discord/659684980137656340?color=%235865F2&label=discord&logo=discord&logoColor=white&style=flat-square)](https://wrngnz.ga/discord) [![release](https://img.shields.io/github/release/warengonzaga/fork-corner.svg?style=flat-square)](https://github.com/warengonzaga/fork-corner/releases) [![star](https://img.shields.io/github/stars/warengonzaga/fork-corner.svg?style=flat-square)](https://github.com/warengonzaga/fork-corner/stargazers) ![Size](https://img.shields.io/github/repo-size/warengonzaga/fork-corner?color=green&style=flat-square) ![NPM](https://img.shields.io/npm/dm/fork-corner?color=red&style=flat-square) ![jsdelivr](https://img.shields.io/jsdelivr/npm/hm/fork-corner?color=orange&style=flat-square) [![license](https://img.shields.io/github/license/warengonzaga/fork-corner.svg?style=flat-square)](https://github.com/warengonzaga/fork-corner/blob/main/license)

![Banner](./.github/img/fork-corner-github-banner.jpg)

A modern and global open source fork corner label for your project's landing page.

## What is Fork Corner

A modern approach to the old style of adding "Fork Me" ribbon or label in an open source project's landing page.

## 😎 Demo

Visit **[fork-corner.warengonzaga.com](https://fork-corner.warengonzaga.com)** for the demo.
Watch the video demo via **[Waren Gonzaga's YouTube Channel](https://www.youtube.com/watch?v=XYUxx-BvSYM)**.

> Fork corner generator page coming soon...

## 📖 Documentation

The complete documentation can be found here:

[![docs](https://img.shields.io/badge/Docs-docs.warengonzaga.com/fork--corner-blue.svg?longCache=true&style=for-the-badge)](https://docs.warengonzaga.com/fork-corner)

## ⚡ Features

<!-- markdownlint-disable MD033 MD014 -->

<details>
    <summary>Modern Design</summary><br/>

> _The Fork Corner design inspired by [Tholman's GitHub Corners](https://github.com/tholman/github-corners), I made my own version by adding more control to it using CSS and JS. Instead of using SVG I use icons from [Devicons](https://devicons.dev)._

</details>

<details>
    <summary>Responsive</summary><br/>

> _Fork Corner is responsive to any screen sizes. Focus on your landing page while fork corner do the rest of responsive design._

</details>

<details>
    <summary>Customizable</summary><br/>

> _It uses class to quickly customize your Fork Corner. It allows you to change themes, animations, and which want you want to position your Fork Corner. You can edit the source file if you want more advance customization._

</details>

<details>
    <summary>Lightweight</summary><br/>

> _Fork Corner is very lightweight and optimized so don't worry about the performance of your landing page._

</details>

<details>
    <summary>CSS3 Animations</summary><br/>

> _Fork Corner author is a core contributor to the popular [animate.css](https://animate.style). You can customize your Fork Corner animations by using utility classes just like using [animate.css](https://animate.style) utility classes._

</details>

<!-- markdownlint-enable MD033 -->

---

## 📦 Installation

Install with [npm](https://www.npmjs.com/package/fork-corner):

<!-- markdownlint-disable MD014 -->

```bash
$ npm i fork-corner --save
```

<!-- markdownlint-enable MD014 -->

or add it directly to your webpage using a CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-corner/dist/fork-corner.min.css">
<script src="https://cdn.jsdelivr.net/npm/fork-corner/dist/fork-corner.min.js" defer></script>
```

## 🕹️ Usage

After installing Fork Corner simply add this one line of code to the ``<body>`` of your webpage:

```html
<a href="https://github.com/user/repo" target="_blank" id="fork-corner" class="fork-corner fc-pos-tr fc-animate fc-theme-git"></a>
```

Fork Corner uses _``fork-corner``_ as ID to identify which element should be use in creating the fork corner. The class _``fork-corner``_ is use to identify which element to be controlled by the class. We have few important classes to quickly customize the fork corner's look and feel.

### Position Class

Class to position the Fork Corner on your webpage. By default, the position is _``top right``_.

| Class | Position |
|-------|----------|
| ``fc-pos-tr`` | Top, Right |
| ``fc-pos-tl`` | Top, Left |
| ``fc-pos-tr-sticky`` | Top, Right, Sticky |
| ``fc-pos-tl-sticky`` | Top, Left, Sticky |
| ``fc-pos-br`` | Bottom, Right _(sticky by default)_ |
| ``fc-pos-bl`` | Bottom, Left _(sticky by default)_ |

### Animation Class

Class to animate the Fork Corner on your webpage. By default, when you hover your mouse to the icon it will rotate.

| Class | Animation |
|-------|-----------|
| ``fc-animate`` | Icon rotation on cursor hover |
| ``fc-animate-slideup`` | Icon slide up on cursor hover |
| ``fc-animate-slidedown`` | Icon slide down on cursor hover |
| ``fc-animate-grow`` | Icon grow on cursor hover |
| ``fc-animate-shrink`` | Icon shrink on cursor hover |
| ``fc-animate-fade`` | Icon fade out on cursor hover |

> More animation will come, have animation in mind? Contribute today!

### Theme Class

Class to select pre-defined theme or style you want to use. By default, it will show the official **Git** logo.

| Class | Theme/Brand |
|-------|-----------|
| ``fc-theme-animate`` | Git Logo |
| ``fc-theme-github`` | GitHub Logo |
| ``fc-theme-gitlab`` | Gitlab Logo |
| ``fc-theme-bitbucket`` | Bitbucket Logo |

> More theme and brand will come, have one in mind? Contribute today!

### Size Class

Class to select pre-defined corner size. By default, it is set as 200px. To set the default size just don't add the size class.

| Class | Corner Size |
|-------|-----------|
| ``fc-size-small`` | 150px corner size |
| ``fc-size-medium`` | 250px corner size |
| ``fc-size-large`` | 300px corner size |

> If you're looking for specific size please edit the source file and build it.

## 🎯 Contributing

Contributions are welcome, create a pull request to this repo and I will review your code. Please consider to submit your pull request to the ```dev``` branch. Thank you!

Read the project's [contributing guide](./contributing.md) for more info.

## 💬 Discussions

For any questions, suggestions, ideas, or simply you want to share your experience in using this project, feel free to share and discuss it to the [community](https://github.com/warengonzaga/fork-corner/discussions)!

## 🐛 Issues

If you're facing a problem in using Fork Corner please let me know by [creating an issue here](https://github.com/warengonzaga/fork-corner/issues/new). I'm here to help you!

## 🍀 Sponsors and Supporters

[![BuyMeaCoffee](https://wrngnz.ga/badge-buymeacoffee)](https://buymeacoff.ee/warengonzaga) [![Vercel](https://wrngnz.ga/badge-vercel)](https://vercel.com) [![CircleCI](https://wrngnz.ga/badge-circleci)](https://vercel.com) [![GitBook](https://wrngnz.ga/badge-gitbook)](https://gitbook.io) [![Digital Ocean](https://wrngnz.ga/badge-digitalocean)](https://digitalocean.com) [![Deepware](https://wrngnz.ga/badge-deepware)](https://deepware.ai/) [![NOWPayments](https://wrngnz.ga/badge-nowpayments)](https://nowpayments.io) [![StackHawk](https://img.shields.io/badge/Stackhawk-%2300CBC6.svg?&style=for-the-badge&logoColor=white)](https://stackhawk.com)

> Love what I do? **[Send me some coffees](https://buymeacoff.ee/wareneutron)**!
>
> Your coffee donation and support will help me to continue working on open-source projects like this.

## 🌏 Community

Join to my growing tech community and get the latest updates!

[![community](https://discordapp.com/api/guilds/659684980137656340/widget.png?style=banner2)](https://wrngnz.ga/discord) [![community](https://discordapp.com/api/guilds/694612151444439081/widget.png?style=banner2)](https://wareneutron.com/discord)

## 📋 Code of Conduct

Read the project's [code of conduct](./code_of_conduct.md).

## 📃 License

Fork Corner is licensed under [The MIT License](https://opensource.org/licenses/MIT).

## 📝 Author

Fork Corner is created by **[Waren Gonzaga](https://github.com/warengonzaga)**, with the help of awesome [contributors](https://github.com/warengonzaga/fork-corner/graphs/contributors).

---

💻 Made with 💖 and ☕ by **Waren Gonzaga** with **YHWH** 🙏 | Citizen of Heaven

[personal website]: https://warengonzaga.com
[business website]: https://wgcompanyhq.com
[biolink]: https://bio.link/warengonzaga
[facebook]: https://facebook.com/warengonzagaofficial
[twitter]: https://twitter.com/warengonzaga
[instagram]: https://instagram.com/warengonzagaofficial
[youtube]: https://youtube.com/warengonzaga
