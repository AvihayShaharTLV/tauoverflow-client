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


export const createTestQuery = `mutation createTest( $cid: String!, $year: Int!,$questionsNum: Int!, $semester: String!, $period: String!, $pid: Int!) {
  createTest(input: {test: {cid: $cid, year: $year,questionsNum:$questionsNum, semester: $semester, period: $period, pid: $pid}}
    ) {
      test {
        cid
        year
        questionsNum
        semester
        period
        pid
      }
    } 
}`


export const createExamQuery = `mutation createExam( $cid: String!, $downloadLink: String!, $numQuestions: Int!, $pid: Int!,  $tid: Int!) {
  createExam(input: {exam: {cid: $cid, downloadLink: $downloadLink, numQuestions: $numQuestions, pid: $pid, tid: $tid}}
    ) {
      exam {
        cid
        downloadLink
        numQuestions
        pid
        tid
      }
    } 
}`


export const createSolutionQuery = `mutation createSolution( $cid: String!, $pid: Int!, $downloadLink: String!, $tid: Int!) {
  createSolution(input: {solution: {cid: $cid,  pid: $pid,  downloadLink: $downloadLink, tid: $tid}}
    ) {
      solution {
        cid
        pid
        downloadLink
        tid
      }
    } 
}`

export const getAllTestsQuery = `
query MyQuery {
  allTests {
    nodes {
      cid
      id
      period
      pid
      semester
      year
    }
  }
}
`