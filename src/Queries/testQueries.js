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


export const createTestQuery = `mutation createTest($cid: String!, $year: Int!, $questionsNum: Int!, $semester: String!, $period: String!, $pid: Int!) {
  createTest(
    input: {test: {cid: $cid, year: $year, questionsNum: $questionsNum, semester: $semester, period: $period, pid: $pid}}
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


export const createExamQuery = `mutation createExam( $cid: String!, $downloadLink: String!, $pid: Int!,  $tid: Int!, $language: String!) {
  createExam(input: {exam: {cid: $cid, downloadLink: $downloadLink, pid: $pid, tid: $tid, language: $language}}
    ) {
      exam {
        cid
        downloadLink
        pid
        tid
        language
      }
    } 
}`

export const getAllExamsQuery = `query MyQuery {
  allExams {
    nodes {
      cid
      downloadLink
      language
      id
      pid
      tid
    }
  }
}
`


export const createSolutionQuery = `mutation createSolution($cid: String!, $pid: Int!, $downloadLink: String!, $tid: Int!, $grade: Int!) {
  createSolution(
    input: {solution: {cid: $cid, pid: $pid, downloadLink: $downloadLink, tid: $tid, grade: $grade}}
  ) {
    solution {
      cid
      pid
      downloadLink
      tid
      grade
    }
  }
}`

export const getAllSolutionsQuery = `query MyQuery {
  allSolutions {
    nodes {
      cid
      downloadLink
      grade
      id
      pid
      tid
    }
  }
}
`

export const getAllTestsQuery = `
query MyQuery {
  allTests {
    nodes {
      cid
      id
      period
      pid
      questionsNum
      semester
      year
    }
  }
}

`