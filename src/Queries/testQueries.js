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
 
  export const getTestNumQuestionsQuery = `{
    allTests {
      nodes {
        id
        numQuestions
      }
    }
  }`

  export const updateTestNumQuestionsQuery = `mutation updateTestById($id:Int!, $numQuestions: Int!) {
    updateTestById(input:{id : $id , testPatch:{numQuestions: $numQuestions}}
    ) {
        test {
        id
        numQuestions
        }
    }
}`

 
export const createTestQuery = `mutation createTest( {$cid: Int!, $year: Int!, $semester: String!, $period: String!, $pid: Int!, $numQuestions: Int!) {
  createTest(input: {test: {cid: $cid, year: $year, semester: $semester, period: $period, pid: $pid, numQuestions: $numQuestions}}
    ) {
      test {
        cid
        year
        semester
        period
        pid
        numQuestions
      }
    } 
}`

