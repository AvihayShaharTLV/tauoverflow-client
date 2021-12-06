export const getAllCoursesQuery = `{
    allCourses {
      nodes {
        id
        name
      }
    }
  }`


// From here - the updated functions!!! all of the abve - examples !!!!!!!
  
  export const getAllCourseDiscussionsQuery = `{
    faculty(nodeId: "") {
      englishName
      hebrewName
      id
      nodeId
    }
    allCourseDiscussions {
      nodes {
        attachment
        body
        cid
        createdAt
        id
        nodeId
        title
        uid
        updatedAt
      }
    }
  }`

  export const getAllTestByCourseQuery = `{
    allCourses {
      nodes {
        id
        testsByCid {
          nodes {
            cid
            id
            numQuestions
            period
            pid
            semester
            year
          }
        }
      }
    }
  }`

  export const getAllCourseDiscussionCommentsQuery = `{
    allCourseDiscussions {
      nodes {
        id
        courseCommentsByDid {
          nodes {
            attachment
            body
            did
            createdAt
            id
            uid
            updatedAt
          }
        }
      }
    }
  }`

  export const getAllCourseProfessorsQuery = `{
    allCourses {
      nodes {
        id
        courseProfessorsByCid {
          nodes {
            professorByPid {
              id
              name
            }
          }
        }
      }
    }
  }`

 