import { useStaticQuery, graphql } from 'gatsby';

export const useFileDownloads = slug => {
  const queryResult = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/downloads/" } }) {
        nodes {
          id
          name
          extension
          relativeDirectory
          publicURL
        }
      }
    }
  `);

  const downloadDirectory = `${slug}/downloads`;
  const allDownloads = queryResult.allFile.nodes || [];

  return allDownloads.reduce((accumulator, siteDownload) => {
    const isPageAttachment =
      siteDownload.relativeDirectory === downloadDirectory;

    if (isPageAttachment) {
      accumulator.push(siteDownload);
    }

    return accumulator;
  }, []);
};
