# Gatsby Theme: Platinum

Hello! Are you looking for a way to quickly get started with MDX and Gatsby, but don't want much else? Then this theme is for you!

Platinum is the successor to my previous theme, `gatsby-theme-mdx-pages`. It's forked from the fantastic [Catalyst Core](https://github.com/ehowey/gatsby-theme-catalyst-core) theme by ehowey. Compared to Catalyst, Platinum removes many of the more "opinionated" features and implements some of its own.

This theme has three main aims: 

1. Programmatically make pages from MDX files, using frontmatter and directories to define templates.

2. Implement `theme-ui`, a quality styling library that synergizes incredibly with MDX.

3. Provide some optional components that are generally usable enough for most any website.

Everything else is left up to the descendant project, whether directly or through other plugins.

## Quickstart

```sh
gatsby new my-website https://github.com/rogermparent/gatsby-starter-platinum-theme
cd my-website
gatsby develop
```

[Read the Gatsby Quick Start Guide](https://www.gatsbyjs.org/docs/quick-start)

## Demo

[https://gatsby-theme-platinum-demo.netlify.com/](https://gatsby-theme-platinum-demo.netlify.com/)

## Templates

Platinum uses
[gatsby-transformer-mdx-content-pages](https://github.com/rogermparent/gatsby-transformer-mdx-content-pages)
to resolve template components, which needs to be treated differently from
something like shadowing.

First and most importantly, a default template **must** be present in the
template directory of the base gatsby project. This theme doesn't automatically
assign an internal template when not even a default is present.

While providing an automatic default is possible, it leads to a minor cosmetic
bug where that default template's graphql query throws out a warning despite the
theme being used as intended.

Platinum does export a layout with a shadowable header and footer, which is
usable enough for most sites. This layout's header and footer can be overridden
with shadowing, so you can take advantage of the boilerplate-handling features
of the Layout while using any header and footer you'd like. Check out this
theme's starter for an example of how to use the exported layout.

Of course, you can also totally skip the exported layout completely to use your
own.

## Theme Options

### contentDirectory: String

The directory where MDX content pages reside, relative to your site's base directory.  
If set to false, disables this instance of `gatsby-source-filesystem`

Defaults to "content".

### assetsDirectory: String

The directory where static assets reside, relative to your site's base directory.  
If set to false, disables this instance of `gatsby-source-filesystem`

Defaults to "assets".

### contentInstanceName / assetsInstanceName: String

These are used as the `name` setting in the child `gatsby-source-filesystem`
instances.

It's mostly for a quick change in case of collision with pre-existing instances.

Defaults to "content" and "assets", respectively.

### mdx: Object | Boolean = true

This option allows you to manipulate the child instance of `gatsby-plugin-mdx`

- When `false`, the plugin is disabled.
- When `true` or not present, a preconfigured instance is added.
- When an object, it will be merged into the preconfigured instance.

### Plugin Toggles: Boolean = true

#### sourceFilesystem = gatsby-source-filesystem
#### createContentPages = gatsby-plugin-create-content-pages
#### sitemap = gatsby-plugin-sitemap
#### sharp = gatsby-plugin-sharp

These options are here to turn off certain plugins if you're either using your
own configured instances or alternatives to them.

### disablePlugins: Array<String>

While there should be a dedicated setting for any plugins worth disabling, this option is offered if one you need disabled wasn't included.

Any plugins whose name matches a string in this array will be excluded from the theme.  
Disabling a vital plugin without a replacement can break the theme, so be careful!

### transformerMdxContentPagesOptions: Object | Array<Object> | false

The object in this option is passed through as the options for the child
instance of `gatsby-transformer-mdx-content-pages`,
allowing for more granular control of the plugin. You can find the full options
in the plugin's README.

If you provide an array of objects, an instance will be made for each.

If the option is `false`, no instance of the plugin will be added.

## Roadmap

While this theme is currently usable, it has a lot of room for improvement. Here's a non-exhaustive list of known areas:

- Writing unit tests (I'm so sorry! Skipping them is such a bad habit!)
- Less bland initial styles
- Better documentation
