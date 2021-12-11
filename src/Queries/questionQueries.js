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

  export const getAllQuestionDiscussionsQuery = `query MyQuery {
    allQuestionDiscussions {
      nodes {
        attachment
        body
        createdAt
        id
        position
        tid
        title
        uid
        updatedAt
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
 
  export const createQuestionQuery = `mutation createQuestion( {$tid: Int!, $position: Int!) {
    createQuestion(input: {question: {tid: $tid, position: $position}}
      ) {
        question {
          tid
          position
        }
      } 
  }`

  export const getAllQuestionUserRateQuery = `{
    allQuestionsUserRates {
      nodes {
        uid
        tid
        position
      }
    }
  }`

  export const getAllQuestionRateScoreAndRateAmountQuery = `{
    allQuestions {
      nodes {
        tid
        position
        rateScore
        rateAmount
      }
    }
  }`

  export const updateQuestionRateQuery = `mutation updateQuestionByTidAndPosition($tid:Int!, $position: Int!, $rateAmount: Int!, $rateScore: Int!) {
    updateQuestionByTidAndPosition(input:{tid : $tid , position: $position, questionPatch:{rateAmount: $rateAmount, rateScore: $rateScore}}
    ) {
      question {
        tid
        position
        rateAmount
        rateScore
        }
    }
}`

export const createQuestionUserRateQuery = `mutation createQuestionsUserRate( {$uid: Int!, $tid: Int!, $position: Int!, $personalRate: Int!) {
  createQuestionsUserRate(input: {questionsUserRate: {uid: $uid, tid: $tid, position: $position, personalRate: $personalRate}}
    ) {
      questionsUserRate {
        uid
        tid
        position
        personalRate
      }
    } 
}`

export const updateQuestionUserRateQuery = `mutation updateQuestionsUserRateByTidAndPositionAndUid($uid: Int!, $tid:Int!, $position: Int!, $personalRate: Int!) {
  updateQuestionsUserRateByTidAndPositionAndUid(input:{uid: $uid, tid : $tid , position: $position, questionsUserRatePatch:{personalRate: $personalRate}}
  ) {
    questionsUserRate {
      uid
      tid
      position
      personalRate
      }
  }
}`

