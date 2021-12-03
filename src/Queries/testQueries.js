  // Test level queries

  export const getAllTestDiscussionsQuery = `{
    allTests {
      nodes {
        id
        cid
        testDiscussionsByTid {
          nodes {
            attachment
            body
            cid
            createdAt
            id
            tid
            title
            uid
            updatedAt
          }
        }
      }
    }
  }`

  export const getAllTestDiscussionsCommentsQuery = `{
    allTestDiscussions {
      nodes {
        id
        tid
        testCommentsByDid {
          nodes {
            attachment
            body
            createdAt
            did
            id
            uid
            updatedAt
          }
        }
      }
    }
  }`
 