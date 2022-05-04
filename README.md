# PerZeption 👀

https://perzeption.github.io

Perzeption aims to make comprehensive eye exams accessible via the internet. Currently, the company has built their exam prototype through MatLab and it is only available in their clinical studies. However, our prototype this semester will bring their primary exam, Find, to the web so that those interested can learn more about the company and its planned offerings. 

Programmed using [Vue 2](https://vuejs.org/)

Based from: [Figma Prototype](https://www.figma.com/proto/LJe2Ing516HcS5neKuVSBU/Homepage-Ideation?node-id=987%3A1126&scaling=min-zoom&page-id=708%3A1390&starting-point-node-id=987%3A1126&show-proto-sidebar=1)


---
## Development Enviornment Setup

Prior to installing dependencies on your device, please ensure you have a package manager. If you are using MacOS, this will be [Homebrew](https://brew.sh/) and if you have a Windows/ PC, then this will be [Chocolately](https://chocolatey.org/). If you already have Homebrew and Yarn installed, please skip to the Project Setup section. 


### MacOS (Installing and Setting up Homebrew)

Please open up the MacOS Terminal in order to follow the step by step process.

In order to install [Homebrew](https://brew.sh/), please run the following script in your Terminal:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Following running the script, please ensure you have Homebrew installed trhough trying the `brew` command in your Terminal.

#### Installing Yarn

In order to install Yarn, you will begin through installing Node on your machine. This can easily be done through `brew install node`. After installing Node, then you will be able to install Yarn throguh `brew install yarn`.

### Windows

Please open up Windows PowerShell in order to follow the step by step process of inatalling [Chocolately](https://chocolatey.org/). Run the following command in Powershell:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Following running the command, you should be able to use the `choco` command to install `yarn`. 

If you run into any problems during these processes, please refer to the package managers websites as mentioned above. 

---
## Project Setup

```
yarn install
```
Installs Vue and all Vue add-ons included within the web application. 

### Compiles and hot-reloads for development
```
yarn serve
```
Locally deploys the application at http://localhost:8080/ (or another URL if you already have something locally deployed).

### Compiles and minifies for production
```
yarn build
```
The `build` will be necessary in order to host the website on a different domain.

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

## Understanding the Code Directory

Within the `src` folder, there are a few folders which will contain the files which make up the PerZeption website. 
- `assets` -- the assets folder will contain any images/ visuals you will need to incorporate into the website.
- `components` -- the components folder contains basic components which are included on multiple parts of the page, such as buttons, navigation, expandables, etc.
- `router` -- the router folder contains the file which contains the sublinks to different pages within the website (e.a. https://perzeption.github.io/about).
- `sections` -- the sections folder contains the different sections within a page (e.a. the home page contains a title section, demo section, product section, etc.).
- `styles` -- the styles folder contaisn style sheets which help the pages look nice, crucial for the aesthetic portion of the website. 

Each single file Vue component will be layed out as
```
<template>
    <!--contains all of the HTML elements -->
</template>

<script>
    <!--contains all of the JavaScript functions -->
</script>

<style>
    <!--contains all of the CSS styling -->
</style>
```

In order to learn more about [Vue](https://vuejs.org/), please refer to the website.