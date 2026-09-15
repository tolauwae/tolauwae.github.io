import {createContentLoader, type ContentData} from "vitepress"

export default createContentLoader("/essays/*.md", {
  transform(data: ContentData[]) {
    return data
      .filter(({url}) => url !== "/essays/")
      .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
  },
})
