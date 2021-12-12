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
        qnum
        tid
        title
        uid
        updatedAt
      }
    }
  }
  `

export const getAllQuestionDiscussionsCommentsQuery = `query MyQuery {
    allQuestionComments {
      nodes {
        body
        createdAt
        did
        id
        uid
        updatedAt
      }
    }
  }`

export const createQuestionQuery = `mutation createQuestion( $tid: Int!, $qnum: Int!) {
    createQuestion(input: {question: {tid: $tid, qnum: $qnum}}
      ) {
        question {
          tid
          qnum
        }
      } 
  }`

// export const getAllQuestionUserRateQuery = `{
//   allQuestionsUserRates {
//     nodes {
//       uid
//       tid
//       position
//     }
//   }
// }`

// export const getAllQuestionRateScoreAndRateAmountQuery = `{
//   allQuestions {
//     nodes {
//       tid
//       position
//       rateScore
//       rateAmount
//     }
//   }
// }`

//   export const updateQuestionRateQuery = `mutation updateQuestionByTidAndPosition($tid:Int!, $position: Int!, $rateAmount: Int!, $rateScore: Int!) {
//     updateQuestionByTidAndPosition(input:{tid : $tid , position: $position, questionPatch:{rateAmount: $rateAmount, rateScore: $rateScore}}
//     ) {
//       question {
//         tid
//         position
//         rateAmount
//         rateScore
//         }
//     }
// }`

// export const createQuestionUserRateQuery = `mutation createQuestionsUserRate( {$uid: Int!, $tid: Int!, $position: Int!, $personalRate: Int!) {
//   createQuestionsUserRate(input: {questionsUserRate: {uid: $uid, tid: $tid, position: $position, personalRate: $personalRate}}
//     ) {
//       questionsUserRate {
//         uid
//         tid
//         position
//         personalRate
//       }
//     } 
// }`

export const createQuestionDiscussionQuery = `mutation createQuestionDiscussion($uid: String!, $tid: Int!, $title: String!, $body: String!, $attachment: String!, $qnum: Int!) {
  createQuestionDiscussion( input: {questionDiscussion: {uid: $uid, tid: $tid, title: $title, body: $body, attachment: $attachment, qnum: $qnum}}
  ) {
    questionDiscussion {
      attachment
      body
      qnum
      tid
      title
      uid
    }
  }
}
`

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

