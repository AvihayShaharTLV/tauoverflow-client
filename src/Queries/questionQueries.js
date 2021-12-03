  // Question level queries

  export const getAllQuestionsRateQuery = `{
    allQuestions {
      nodes {
        tid
        position
        rateScore
      }
    }
  }`

  export const getAllQuestionsUserRateQuery = `{
    allQuestionsUserRates {
      nodes {
        tid
        position
        uid
        personalRate
      }
    }
  }`

  export const getAllQuestionDiscussionsQuery = `{
    allQuestions {
      nodes {
        position
        tid
        questionDiscussionsByTidAndPosition {
          nodes {
            attachment
            body
            createdAt
            id
            position
            tid
            title
            updatedAt
            uid
          }
        }
      }
    }
  }`

  export const getAllQuestionDiscussionsCommentsQuery = `{
    allQuestionDiscussions {
      nodes {
        id
        tid
        position
        questionCommentsByDid {
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
 
  