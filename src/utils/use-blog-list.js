import { graphql, useStaticQuery } from 'gatsby';

export const useBlogPostList = () => {
  const getPages = graphql`
    {
      # Home page slug is empty
      # Omit the home page since it's not a blog post
      allMdx(filter: { slug: { ne: "" } }) {
        nodes {
          slug
          exports {
            metadata {
              title
              date
            }
          }
        }
      }
    }
  `;
  return useStaticQuery(getPages)
    .allMdx.nodes.map(node => ({
      title: node.exports?.metadata?.title || 'No title',
      date: new Date(node.exports?.metadata?.date),
      slug: node.slug,
    }))
    .sort((a, b) => a.date - b.date);
};
