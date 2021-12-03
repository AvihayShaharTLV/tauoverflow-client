// Comment level queries

export const createCourseCommentQuery = `mutation createCourseComment( {$uid: Int!, $did:Int!, $body: String!, $attachment: String!) {
    createCourseComment(input: {courseComment: {uid: $uid, did: $did, body: $body, attachment: $attachment}}
      ) {
        courseComment {
            uid
            did
            body
            attachment
        }
      } 
  }`

  export const updateCourseCommentQuery = `mutation updateCourseCommentById( {$id: Int!, $body: String!, $attachment: String!) {
    updateCourseCommentById(input: {id: $id, courseCommentPatch: {body: $body, attachment: $attachment}}
      ) {
        courseCommentPatch {
            id
            body
            attachment
        }
      } 
  }`

  export const createTestCommentQuery = `mutation createTestComment( {$uid: Int!, $did:Int!, $body: String!, $attachment: String!) {
    createTestComment(input: {testComment: {uid: $uid, did: $did, body: $body, attachment: $attachment}}
      ) {
        testComment {
            uid
            did
            body
            attachment
        }
      } 
  }`

  export const updateTestCommentQuery = `mutation updateTestCommentById( {$id: Int!, $body: String!, $attachment: String!) {
    updateTestCommentById(input: {id: $id, testCommentPatch: {body: $body, attachment: $attachment}}
      ) {
        testCommentPatch {
            id
            body
            attachment
        }
      } 
  }`

  export const createQuestionCommentQuery = `mutation createQuestionComment( {$uid: Int!, $did:Int!, $body: String!, $attachment: String!) {
    createQuestionComment(input: {questionComment: {uid: $uid, did: $did, body: $body, attachment: $attachment}}
      ) {
        questionComment {
            uid
            did
            body
            attachment
        }
      } 
  }`

  export const updateQuestionCommentQuery = `mutation updateQuestionCommentById( {$id: Int!, $body: String!, $attachment: String!) {
    updateQuestionCommentById(input: {id: $id, questionCommentPatch: {body: $body, attachment: $attachment}}
      ) {
        questionCommentPatch {
            id
            body
            attachment
        }
      } 
  }`