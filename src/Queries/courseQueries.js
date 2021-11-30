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
    allCourses {
      nodes {
        id
        courseDiscussionsByCid {
          nodes {
            attachment
            body
            cid
            createdAt
            id
            title
            uid
            updatedAt
          }
        }
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
  
  