# Graphql benefit 
# (REST API를 두고 Graphql을 쓰는 대표적인 이유 두가지)
1. Overfetching
필요한 데이터보다 더 많은 데이터를 fetch하는 것을 말합니다.
GraphQL을 사용하면 API에 GraphQL 쿼리를 보내고 필요한 것만정확히 얻을 수 있습니다.
GraphQL 쿼리는 항상 예측 가능한 결과를 반환합니다. 

2. Underfetching
필요한 데이터보다 적은 데이터를 fetch하는 것을 말합니다.
일반적인 REST API는 여러 URL에서 로딩해야 하지만 GraphQL API는 앱에 필요한 모든 데이터를 단일 request로 가져옵니다. GraphQL을 사용하는 앱은 느린 모바일 네트워크 연결에서도 빠를 수 있습니다.
모든 GraphQL 서버(Apollo Server 포함)는 스키마를 사용하여 클라이언트가 쿼리할 수 있는 데이터 구조를 정의합니다.


## Query 
 * REST API로 치면 GET 요청
## Mutations
 * REST API로 치면 POST,PUT,DELETE 등 GET을 제외한 데이터를 변환(수정,삭제,추가 등)하면 Mutation 사용
 * GraphQL에 대한 대부분은 데이터 fetching이지만, 서버 측 데이터를 수정할 수 있는 방법이 필요합니다. 서버 측 데이터를 수정하는 모든 작업은 mutation을 통해 보내야 한다는 규칙을 설정하는 것이 유용합니다.
## Resolver 
 * Resolver 함수에는 parent(root or source), args, context, info 의 네 가지 인수가 순서대로 전달됩니다.

## Lists and Non-Null

* 예를들어 String 타입을 사용하고 느낌표 !를 추가하여 Non-Null로 표시합니다.
* Non-Null로 표시하게 되면 서버가 항상 이 필드에 대해 null이 아닌 값을 반환할 것으로 예상합니다. 그래서 null 값을 얻게 되면 클라이언트에게 문제가 있음을 알립니다.

# Apollo Client
## useQuery
* useQuery 훅을 사용하여 React에서 GraphQL 데이터를 가져오고 그 결과를 UI에 연결할 수 있습니다. useQuery 훅은 Apollo 애플리케이션에서 쿼리를 실행하기 위한 기본 API입니다. 컴포넌트가 렌더링될 때 useQuery는 UI를 렌더링하는 데 사용할 수 있는 loading, error, data 속성이 포함된 Apollo Client의 객체를 반환합니다.
 ex) const { loading, error, data } = useQuery(GET_DOGS);
* https://www.apollographql.com/docs/react/data/queries#executing-a-query

* useQuery API
* https://www.apollographql.com/docs/react/data/queries/#usequery-api

## 요약
- 아폴로 서버를 실행하기 위해서는 반드시 최소 1개의 Query가 필요합니다.
- type Query는 가장 기본적인 타입입니다.
- Query에 넣는 필드들은 request할 수 있는 것들이 됩니다.
- !를 쓰지 않으면 해당 필드는 nullable field가 됩니다. (null값을 가질 수 있는 필드)



# Graphql extension
## Vscode highlightings
* https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql
## json to Graphql type
 * https://transform.tools/json-to-graphql
## Apollo Client Devtools
 * Apollo 클라이언트용 GraphQL 디버깅 툴
 * https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm
## Apollo Client Devtools (Document)
 * https://www.apollographql.com/docs/react/development-testing/developer-tooling/#apollo-client-devtools
