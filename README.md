# EventX-dom-event
[![Build Status](https://travis-ci.org/Chomtana/EventX-css-event.svg?branch=master)](https://travis-ci.org/Chomtana/EventX-dom-event)
* Allow programmer to listen for attribute and child node of DOM element event.
* JQuery attribute event.
* JQuery child node of DOM element event.
  
# Table of content
* [Installation](#install)
* [Events](#events)
* [Why we need this ???](#why-we-need-this-library-)
* [Examples](#examples)
  * [stylechange event](https://jsfiddle.net/Chomtana/f9wbnjye/)
  * [stylechange:<...> event](https://jsfiddle.net/Chomtana/hezvk3LL/)
  * [inlinestylechange event](https://jsfiddle.net/Chomtana/gt6mmpdj/)
  * [inlinestylechange:<...> event](https://jsfiddle.net/Chomtana/3m3frtc4/)
* [Features](#features)
  * [On](#on)
  * [Off](#off)
  * [Rename Event (Solve event name conflict)](#rename-event-solve-event-name-conflict)

## Install
### Browser
```html
<script src="https://cdn.rawgit.com/Chomtana/EventX-css-event/f96312db/dist/eventx-css.js"></script>
```

### NPM
```
npm install eventx-css-event
```

## Events
| Name | Description | Example |
| ------------- | ------------- | ------------- |
| `stylechange` | Listen to inline and media screen style change | [Click](https://jsfiddle.net/Chomtana/f9wbnjye/) |
| `stylechange:<...>`  | Listen to inline and media screen style change (Only style <...>) | [Click](https://jsfiddle.net/Chomtana/hezvk3LL/) |
| `inlinestylechange`  | Listen to inline style change | [Click](https://jsfiddle.net/Chomtana/gt6mmpdj/) |
| `inlinestylechange:<...>`  | Listen to inline style change (Only style <...>) | [Click](https://jsfiddle.net/Chomtana/3m3frtc4/) |
| `mediastylechange`  | Listen to media style change | |
| `mediastylechange:<...>`  | Listen to media style change (Only style <...>) | |

## Why we need this library ???
### Problem statement
I want to **alert "Div Added"** when div was added as a child node of #ex.

### Before using this library
```javascript
const target = $("#ex")[0];

var config = { childList: true };

const ob = new MutationObserver(mutationsList => {
    for (var mutation of mutationsList) {
        if (mutation.target == target && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(node=>{
                if (node.nodeName.toUpperCase() == "DIV") {
```
```javascript
                    
```
```javascript
    }
  }
});

var config = { attributes: true, attributeOldValue: true, attributeFilter: ["style"]};
ob.observe(target[0],config);
```
**Note:** Above example require JQuery

[View and play in JSFiddle](https://jsfiddle.net/Chomtana/30d2wctj/)

### After using this library
```javascript
$("#ex").on("inlinestylechange",function(e) {
```
```javascript
  if (e.oldStyleValue && e.newStyleValue) alert("Style "+e.styleName+" changed from "+e.oldStyleValue+" to "+e.newStyleValue);
  else if (!e.oldStyleValue && e.newStyleValue) alert("Style "+e.styleName+" added with value "+e.newStyleValue);
  else if (e.oldStyleValue && !e.newStyleValue) alert("Style "+e.styleName+" removed with old value "+e.oldStyleValue);
```
```javascript
});
```
**Note:** Above example require JQuery

[View and play in JSFiddle](https://jsfiddle.net/Chomtana/gt6mmpdj/)

### Difference
* First and final block obviously shorter.
* Closer to english language.
* Remember easier.

### Without JQuery
```javascript
evx.on(document.getElementById("ex"),"inlinestylechange",function(e) {
```
```javascript
  if (e.oldStyleValue && e.newStyleValue) alert("Style "+e.styleName+" changed from "+e.oldStyleValue+" to "+e.newStyleValue);
  else if (!e.oldStyleValue && e.newStyleValue) alert("Style "+e.styleName+" added with value "+e.newStyleValue);
  else if (e.oldStyleValue && !e.newStyleValue) alert("Style "+e.styleName+" removed with old value "+e.oldStyleValue);
```
```javascript
});
```
Yeah, still simple and easy.

## Examples
* [stylechange event](https://jsfiddle.net/Chomtana/f9wbnjye/)
* [stylechange:<...> event](https://jsfiddle.net/Chomtana/hezvk3LL/)
* [inlinestylechange event](https://jsfiddle.net/Chomtana/gt6mmpdj/)
* [inlinestylechange:<...> event](https://jsfiddle.net/Chomtana/3m3frtc4/)

## Features
**[You can find list of event name here](#events)**
### On
```javascript
$("#ex").on("<event name>",function(e) { console.log(e,this); ... });
```
```javascript
evx.on(<target HTMLElement>,"<event name>",function(e) { console.log(e,this); ... });
```
* View all JQuery coding style at http://api.jquery.com/on/
* e is a Edited MutationRecord object
* this = target element **(Warning: not working if you use arrow function)**
* For more information about **Edited MutationRecord** run console.log(e) in event handler or read [here](#edited-mutationrecord)

### Off
```javascript
$("#ex").off("<event name>");
```
```javascript
evx.off(<target HTMLElement>,"<event name>",[handler (Optional)])
```
* View all JQuery coding style at http://api.jquery.com/off/

### Rename Event (Solve event name conflict)
```javascript
evx.renameEvent("<event name>","<newname>")
```

### Create new event type
[Read at EventX-core](https://github.com/Chomtana/EventX-core#create-new-event)

### Remove event type
[Read at EventX-core](https://github.com/Chomtana/EventX-core)

## Edited MutationRecord
| Property Name | Type | Description |
| ------------- | ---- | ----------- |
| target | HTMLElement | Target element which style has been changed |
| styleName | String | Name of style that has been changed |
| oldStyleValue | String | Value of that style before changed |
| newStyleValue | String | Value of that style after changed |
| changetype | String | "inline" if inline change or "media" if media change |

## License
Released under the [MIT License](https://github.com/Chomtana/EventX-css-event/blob/master/LICENSE)
Copyright © 2018 Chomtana
