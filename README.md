# webring

webring code if you wanna make your own webrings!

- [webring](#webring)
  - [hows this better than onionring?](#hows-this-better-than-onionring)
  - [hows this worse than onionring?](#hows-this-worse-than-onionring)
- [ok i wanna make one](#ok-i-wanna-make-one)
  - [step 1](#step-1)
  - [`sites.js`](#sitesjs)
  - [`fakeredirect.js`](#fakeredirectjs)
  - [`redirect.html`](#redirecthtml)
  - [`nosite.html`](#nositehtml)
  - [`index.html`](#indexhtml)
  - [widget](#widget)
  - [license](#license)

skip to the [make ring section](#ok-i-wanna-make-one) if you dont wanna read about the differences with onionring

## hows this better than onionring?

[onionring](https://garlic.garden/onionring/) is nice. i joined some webrings made with onionring. its nice but one thing i hate is i have to include a `js` script on *my* page, and hotlinking it nontheless. (i *could* download it but then i dont know when to update it if new sites joined.)

so i wrote a ring system myself that only requires ring members to include a widget with links. the only scripts are run on the webring index site. that ways, i dont have to wait eons for the script to load.

also i took a site name as the identifier instead of a url, which makes things easier for people who deployed their site to multiple places (like me, whyd i do that though? idk), or if people changed their url later (like buying a domain / domain expired). they dont have to resubmit their info as long as the site name stays the same.

## hows this worse than onionring?

it requires an index site. its unavoidable. for onionring, as long as the file is hosted *somewhere*, it would work, and you dont *need* an index site. here you *need* one.

it also makes people go through an extra step between clicking on a "next" link and actually getting to the next site.

you have to be extra careful to not have 2 sites of the same name. i know its rare but what if?

it also requires members to type their site name in the widget url instead of copy/pasting everything. it *should* be easy but theres still a chance of messing up.

# ok i wanna make one

cool, send me a link when youre done

## step 1

first download the zip file [here](https://github.com/Tofutush/webring/releases). im probably using this thang wrong but w/e i am happy

extract the zip.

you should see 3 `html` files and 2 `js` files.

## [`sites.js`](/src/sites.js)

this is where you log site info. dont change the `siteList` name; its used later.

each site *needs* a `name` and a `url`. you can add other info like author and all that, which you can use in the `index.html` file.

each site is enclosed by a set of big brackets (`{}`), with a comma after the closing bracket. inside the big brackets, theres the key `name` followed by a colon, and then a string with the site name inside. put another comma after the string, and the `url` field follows the same pattern. copy/pasting the bracket contents would be easy; and i think a remotely good code editor should throw a tantrum if you made a mistake too.

## [`fakeredirect.js`](/src/fakeredirect.js)

ideally you shouldnt be touching anything in here, but say, when the script didnt find a site in the list and it takes people to `nosite.html` on line 13, and you dont want that, you can change the url to somewhere else.

```js
if (index === undefined) {
    window.location.assign(`THE URL YOU WANT`);
    return;
}
```

## [`redirect.html`](/src/redirect.html)

you shouldnt be touching stuff here either. you dont even want to put content here, except maybe change the `<title>`. this is supposed to be a flash as people get taken to the prev/next/rand site on the ring.

## [`nosite.html`](/src/nosite.html)

this is the default page people get taken to when they click a prev/next/random link but the site name on the link isnt found in `siteList` (in `sites.js`). contains some example content. you *should* be changing this page to match the theme and layout of your site.

the `<script>` extracts the wrong site's name from the url provided in `fakeredirect.js`, so you can tell users which site it was that had an incorrect name. this is completely optional though; you can remove it if you want.

## [`index.html`](/src/index.html)

this file is completely optional and is just here as an example.

the index, showing a list of all the sites. you *should* be changing this page to match the theme and layout of your site. this is also where the additional site info, if you added them, can be displayed. it would take a bit of coding to get it to work, though, since all `html` are programmatically generated.

## widget

the most essential thing users should be putting on their site are these 3 links (replace `https://webring.com/redirect.html` with the actual url of your redirect file page):

```
https://webring.com/redirect.html?mode=prev&site=SITENAME
https://webring.com/redirect.html?mode=rand&site=SITENAME
https://webring.com/redirect.html?mode=next&site=SITENAME
```

you can add whatever you want on top of that. for example, this is my site widget for the oc webring:

```html
<div id="oc-webring-widget">
    <div id="oc-webring-title">
        <a href="https://tofutush.github.io/oc-webring">OC Webring</a>
    </div>
    <div id="oc-webring-controls">
        <a href="https://tofutush.github.io/oc-webring/redirect?mode=prev&site=The Iron Ragdoll（铁打洋娃娃）">Previous</a>
        <a href="https://tofutush.github.io/oc-webring/redirect?mode=rand&site=The Iron Ragdoll（铁打洋娃娃）">Random</a>
        <a href="https://tofutush.github.io/oc-webring/redirect?mode=next&site=The Iron Ragdoll（铁打洋娃娃）">Next</a>
    </div>
</div>
```

see how the spaces and chinese characters are just all there, 1 for 1? yeah thats what members should be doing, pasting the site name 1 for 1.

ok i lied, my oc-webring widget does not look like that bc i put the prev, rand, and next buttons on separate files. i changed that. but its just an example, you get it right.

## license

i actually knew nothing about licenses before today. the webring system is released under GNU GPL V3, which basically means you can do whatever you want with it as long as you release your thang under the same license and give me credit and tell me what you changed, if you screwed up i wont fix stuff for you, and if you committed a crime with this code somehow you cant blame me. you can also make money from your version of the code, but if you really did that i would be really sad.
