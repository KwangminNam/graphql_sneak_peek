# graphql_sneak_peek

# Graphql highlightings extension
  * https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql
## json to Graphql type
 * https://transform.tools/json-to-graphql

# Graphql benefit
1. Overfetching
필요한 데이터보다 더 많은 데이터를 fetch하는 것을 말합니다.
GraphQL을 사용하면 API에 GraphQL 쿼리를 보내고 필요한 것만정확히 얻을 수 있습니다.
GraphQL 쿼리는 항상 예측 가능한 결과를 반환합니다. 

2. Underfetching
필요한 데이터보다 적은 데이터를 fetch하는 것을 말합니다.
일반적인 REST API는 여러 URL에서 로딩해야 하지만 GraphQL API는 앱에 필요한 모든 데이터를 단일 request로 가져옵니다. GraphQL을 사용하는 앱은 느린 모바일 네트워크 연결에서도 빠를 수 있습니다.

모든 GraphQL 서버(Apollo Server 포함)는 스키마를 사용하여 클라이언트가 쿼리할 수 있는 데이터 구조를 정의합니다.

Mutations

GraphQL에 대한 대부분은 데이터 fetching이지만, 서버 측 데이터를 수정할 수 있는 방법이 필요합니다. 서버 측 데이터를 수정하는 모든 작업은 mutation을 통해 보내야 한다는 규칙을 설정하는 것이 유용합니다.

Lists and Non-Null

아래 Character에 name에 String 타입을 사용하고 느낌표 !를 추가하여 Non-Null로 표시합니다.
Non-Null로 표시하게 되면 서버가 항상 이 필드에 대해 null이 아닌 값을 반환할 것으로 예상합니다. 그래서 null 값을 얻게 되면 클라이언트에게 문제가 있음을 알립니다.


## 요약
- 아폴로 서버를 실행하기 위해서는 반드시 최소 1개의 Query가 필요합니다.
- type Query는 가장 기본적인 타입입니다.
- Query에 넣는 필드들은 request할 수 있는 것들이 됩니다.
- !를 쓰지 않으면 해당 필드는 nullable field가 됩니다. (null값을 가질 수 있는 필드)

Resolver 함수에는 parent(root or source), args, context, info 의 네 가지 인수가 순서대로 전달됩니다.