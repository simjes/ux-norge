import { graphql } from "gatsby";

export const query = graphql`
  fragment ArticleImage on SanityArticleImage {
    image {
      ...ImageWithPreview
    }
    alt
  }

  fragment ArticleThumbnail on SanityArticle {
    _id
    title
    mainImage {
      ...ArticleImage
    }
    description
    category {
      name
    }
    slug {
      current
    }
  }

  fragment CourseThumbnail on SanityCourse {
    title
    slug {
      current
    }
    description
    location
    date
    startTime
    endTime
    price
    courseHolder {
      name
    }
  }

  fragment AdThumbnail on SanityAd {
    _id
    _createdAt
    title
    slug {
      current
    }
    description
    location {
      name
    }
    remote
    link
    jobType
    startDate
    deadline
    packageType {
      duration
    }
    advertiser {
      name
      logo {
        ...Image
      }
    }
  }
  fragment Page on SanityPage {
    title
    text
    emptyState: _rawEmptyState
    cta {
      text
      url
    }
  }
`;
