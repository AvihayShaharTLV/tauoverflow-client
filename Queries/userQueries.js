export const getAllUsersQuery = `{
    allUsers {
      nodes {
        id
        name
        pass
        email
      }
    }
  }`

export const createUserQuery = `mutation createUser( $name: String!,  $email: String!,  $pass: String!) {
    createUser(input:{user : {name: $name, pass: $pass, email:$email}}
    ) {
      user {
        id
        name
      }
    }
  }`

export const updateUserQuery = `mutation updateUser($id:Int!, $name: String!,  $email: String!,  $pass: String!) {
    updateUserById(input:{id : $id , userPatch:{name: $name, pass: $pass, email:$email}}
    ) {
        user {
        id
        name
        pass
        email
        }
    }
}`

// From here - the updated functions!!! all of the abve - examples !!!!!!!


export const getAllUserCoursesQuery = `{
  allUsers {
    nodes {
      email
      id
      password
      userCoursesByUid {
        nodes {
          cid
          uid
          courseByCid {
            id
            name
          }
        }
      }
    }
  }
}`

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

