# [Jade Snippets for Brackets](https://github.com/georapbox/brackets-jade-snippets)

A collection of [Jade](http://jade-lang.com/) snippets for [Brackets](http://brackets.io/) editor.

## Install

#### Git Clone
1. Under main menu select **Help > Show Extensions Folder**
2. Git clone this repository inside the folder user.

#### Extension Manager
1. Under main menu select **File > Extension Manager...**
2. Search for "Jade snippets"
3. Click "Install"

## How to use
1. **Enable Jade Snippets**<br/>
   Under main menu select **Edit > Enable Jade Snippets** or<br/> open the Preferences File and add **"jade-snippets.enabled": true**.
2. Enter a snippet and hit the **Tab** key.

## Snippets list

### Attributes
itemt => ```itemtype="http://schema.org/*"```

data => ```data-*=""```

aria ```aria-*=""```

### Elements
a => ```a(href="")```

at => ```a(href="", target="_blank")```

img => ```img(src="", width="", height="", alt="")```

script => ```script(type="text/javascript", src="")```

link => ```link(rel="stylesheet", type="text/css", href="")```

### Forms
form => ```form(id="", name="", action="", method="")```

inp => ```input(type="text", placeholder="")```

inpe => ```input(type="email", placeholder="")```

inptel => ```input(type="tel", placeholder="")```

inpd => ```input(type="date", placeholder="")```

inpdt => ```input(type="datetime", placeholder="")```    

inpdtl => ```input(type="datetime-local", placeholder="")```

inpf => ```input(type="file", accept="")```

inpfm => ```input(type="file", accept="", multiple="multiple")```

inph => ```input(type="hidden", value="")```

inpti => ```input(type="time", placeholder="")```

inpdm => ```input(type="month", placeholder="")```

inpw => ```input(type="week", placeholder="")```

inpc => ```input(type="color", value="")```

inpch => ```input(type="checkbox", value="", checked="checked")```

inpn => ```input(type="number", value="", min="", max="", step="")```  

inpp => ```input(type="password", placeholder="")```

inpr => ```input(type="range", value="", min="", max="", step="")```

inpurl => ```input(type="url", placeholder="")```

inps => ```input(type="search", placeholder="")```

textarea => ```textarea(placeholder="")```

button => ```button(type="button") button``` 

reset => ```input(type="reset")```

submit => ```input(type="submit", value="submit")```

### Templates
temp => <pre>doctype html
html
  head(lang="en")
    title Document
	meta(http-equiv="content-type", content="text/html; charset=UTF-8")
	meta(name="description", content="")
	meta(name="keywords", content="")
	link(rel="stylesheet", href="")
  body
    script(src="")</pre>