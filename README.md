# Gatsby Theme: Platinum

## Quickstart

```sh
gatsby new my-website https://github.com/rogermparent/gatsby-starter-platinum-theme
cd my-website
gatsby develop
```

[Read the Gatsby Quick Start Guide](https://www.gatsbyjs.org/docs/quick-start)

## Demo

[https://gatsby-theme-platinum-demo.netlify.com/](https://gatsby-theme-platinum-demo.netlify.com/**

## Templates

Platinum uses its own method of resolving template components, and as such needs to be treated differently from something like shadowing.

First and most importantly, a default template **must** be present in the base gatsby project. This theme doesn't automatically assign an internal template when not even a default is present.  
While providing an automatic default is possible, it leads to a minor cosmetic bug where that default template's graphql query throws out a warning despite the theme being used as intended.

Platinum does export a layout with a shadowable header and footer, which is usable enough for most sites. This layout's header and footer can be overridden with shadowing, so you can take advantage of the boilerplate-handling features of the Layout while using any header and footer you'd like. Check out this theme's starter for an example of how to use the exported layout.

Of course, you can also totally skip the exported layout completely to use your own.

## Theme Options

### contentPath

The directory where MDX content pages reside, relative to your site's base directory.  
Defaults to "content".

### assetPath

The directory where static assets reside, relative to your site's base directory.  
Defaults to "assets".

### indexName

MDX pages with the same filename as this will have their resulting path set to their parent directory.  
Defaults to 'index**.

### templateDir

The directory where templates are stored, relative to your site's base directory.  
Defaults to 'src/templates'

### defaultTemplate

The filename of the default template to fall back on when no other is specified, relative to `templateDir`.  
Defaults to 'default', meaning with the default `templateDir` the default template is `src/templates/default.js`.

### directoryTemplates

An object whose keys correspond to a directory relative to `contentDir`, and values correspond to template names.

MDX files that have a relative directory matching one of these keys, but without a template specified in frontmatter, will use the corresponding value as their default template.

For example, a `directoryTemplates` object of `{ posts: 'post' }` will, with default settings, make MDX files located in `content/posts` use the component at `src/templates/post.js` as a template.

Defaults to an empty object.

### mdx

If set to false, skips adding the instance of `gatsby-plugin-mdx` to your base project.  
Use this if you want to use a different set of options for the plugin, or another theme adds it.

### getTemplate and makePagePath

This function determines the template and resulting path for each MDX file's page, respectively.  
Both functions' signatures are `({node, getNode, options})`, using the object spread syntax for arguments.

`node` is the MDX node, `getNode` is a dependency injection of Gatsby's function of the same name so this function can access nodes related to the MDX node, like the File it comes from.  
`options` is the whole options object provided to this theme. The default functions use this to access `directoryTemplates` and `indexName`, but the whole thing is provided so other implementations can use their own configuration schemas.
