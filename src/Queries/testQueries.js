// Test level queries

export const getAllTestDiscussionsQuery = `query MyQuery {
    allTestDiscussions {
      nodes {
        attachment
        body
        cid
        createdAt
        id
        nodeId
        tid
        title
        uid
        updatedAt
      }
    }
  }
  `

export const getAllTestDiscussionsCommentsQuery = `
  query MyQuery {
    allTestComments {
      nodes {
        attachment
        body
        cid
        createdAt
        did
        id
        tid
        uid
        updatedAt
      }
    }
  }
  `

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


export const createTestQuery = `mutation createTest( $cid: String!, $year: Int!, $semester: String!, $period: String!, $pid: Int!, $numQuestions: Int!, $downloadLink: String!) {
  createTest(input: {test: {cid: $cid, year: $year, semester: $semester, period: $period, pid: $pid, numQuestions: $numQuestions, downloadLink: $downloadLink}}
    ) {
      test {
        cid
        year
        semester
        period
        pid
        numQuestions
        downloadLink
      }
    } 
}`

