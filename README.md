# My personal website

> This is an attempt at a personal website using just HMTL and CSS.
>
> Me, as of 683bf3e2 (Lasse Haffke 2022-01-04); Thanks, `Git blame`.

Now, it is an over-engineered tech-stack.

It started by using [Sass](https://sass-lang.com/), because css files get pretty huge and css modules wasn't quite there yet.

But compiling Sass by hand …
Well, [Parcel](https://parceljs.org/) comes to the rescue, now my Sass gets compiled and automagically name-wrangeled.

Using Sass and partials is nice,but they lead to duplicate selectors, as they come from different partial files.
Luckily, there is [PostCss](https://postcss.org/) and it integrates nicely with Parcel. My Css now has duplicate selectors automatically merged, selectors alphabetically sorted, and experimental Css vendor-prefixed.

Wanting to build a second page? And re-use some of the shared `<head>` content?
There is another tool for that, [PostHtml](https://posthtml.org/). Now I can use an `<include>` tag to inline an external HTML file. Another plugin allows inlining `<svg>` from an external file.

Good job keeping this a small and easy Web Dev exercise!
