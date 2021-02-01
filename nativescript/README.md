# NativeScript

This is for tutorials related to NativeScript, a javascript framework for
building native android and ios apps.

[Main NativeScript Website](https://nativescript.org/)

This specifically focuses on the NativeScript-Vue tutorial found here:

[https://nsvue-workshop.netlify.app/docs/1.html


## Requirements

Install the project requirements (assumes nvm/npm is installed; npm version
6.14.11):

```bash
npm install
```

Then install the following apps onto your phone:

* NativeScript Playground
* NativeScript Player


## Quickstart

To run the project:

```bash
npx ns preview --path vue/tutorial
```

Then scan the QR code using the NativeScript Playground app on the phone.


## Starting Other Projects

You can create a new project using:

```bash
npx ns create
```

If you would like to use a template, you can find a variety of templates in the
[template market](https://plugins.nativescript.rocks/templates). Here is an
example using the file drawer template:

```bash
ns create drawer-example --template @nativescript/template-drawer-navigation-vue
```

There are also a wide variety of plugins that can be installed from the
[NativeScript marketplace](https://market.nativescript.org/).
