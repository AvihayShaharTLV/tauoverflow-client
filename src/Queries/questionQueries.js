  // Question level queries

  export const getAllQuestionsRateQuery = `{
    allQuestions {
      nodes {
        tid
        qnum
        rateScore
      }
    }
  }`

  export const getAllQuestionsUserRateQuery = `{
    allQuestionsUserRates {
      nodes {
        tid
        qnum
        uid
        personalRate
      }
    }
  }`

  export const getAllQuestionDiscussionsQuery = `{
    allQuestions {
      nodes {
        qnum
        tid
        questionDiscussionsByTidAndQnum {
          nodes {
            attachment
            body
            createdAt
            id
            qnum
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
        qnum
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
 
  export const createQuestionQuery = `mutation createQuestion( {$tid: Int!, $qnum: Int!) {
    createQuestion(input: {question: {tid: $tid, qnum: $qnum}}
      ) {
        question {
          tid
          qnum
        }
      } 
  }`

  export const getAllQuestionUserRateQuery = `{
    allQuestionsUserRates {
      nodes {
        uid
        tid
        qnum
      }
    }
  }`

  export const getAllQuestionRateScoreAndRateAmountQuery = `{
    allQuestions {
      nodes {
        tid
        qnum
        rateScore
        rateAmount
      }
    }
  }`

  export const updateQuestionRateQuery = `mutation updateQuestionByTidAndQnum($tid:Int!, $qnum: Int!, $rateAmount: Int!, $rateScore: Int!) {
    updateQuestionByTidAndQnum(input:{tid : $tid , qnum: $qnum, questionPatch:{rateAmount: $rateAmount, rateScore: $rateScore}}
    ) {
      question {
        tid
        qnum
        rateAmount
        rateScore
        }
    }
}`

export const createQuestionUserRateQuery = `mutation createQuestionsUserRate( {$uid: Int!, $tid: Int!, $position: Int!, $personalRate: Int!) {
  createQuestionsUserRate(input: {questionsUserRate: {uid: $uid, tid: $tid, qnum: $qnum, personalRate: $personalRate}}
    ) {
      questionsUserRate {
        uid
        tid
        qnum
        personalRate
      }
    } 
}`

export const updateQuestionUserRateQuery = `mutation updateQuestionsUserRateByTidAndQnumAndUid($uid: Int!, $tid:Int!, $position: Int!, $personalRate: Int!) {
  updateQuestionsUserRateByTidAndQnumAndUid(input:{uid: $uid, tid : $tid , qnum: $qnum, questionsUserRatePatch:{personalRate: $personalRate}}
  ) {
    questionsUserRate {
      uid
      tid
      qnum
      personalRate
      }
  }
}`

