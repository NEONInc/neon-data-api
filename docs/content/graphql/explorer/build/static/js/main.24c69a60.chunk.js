(this["webpackJsonpdocs-app-graphiql"]=this["webpackJsonpdocs-app-graphiql"]||[]).push([[0],{238:function(n,i,t){},240:function(n,i,t){"use strict";t.r(i);var e=t(69),o=t.n(e),c=(t(2),t(159)),r=t(156),d=t.n(r),E={getApiProtocol:function(){var n="".concat(window.location.protocol),i=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NEON_VERSION:"v0.0.1-SNAPSHOT",REACT_APP_NEON_ENV:"DEV",REACT_APP_NEON_SERVICE_API_TOKEN_HEADER:"X-API-Token",REACT_APP_NEON_SERVICE_API_TOKEN:"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJhdWQiOiJodHRwczovL2xvY2FsLWRhdGEubmVvbnNjaWVuY2Uub3JnL2FwaS92MC8iLCJzdWIiOiJsb2NhbC1yZWFjdC1hcHBzIiwic2NvcGUiOiJuZW9uOnNlcnZpY2UiLCJpc3MiOiJodHRwczovL2xvY2FsLWRhdGEubmVvbnNjaWVuY2Uub3JnLyIsImlhdCI6MTU5Nzg4NTE0N30.DtPgljmxh8WAtsGHMdxqiXzru4c5ZSg_z1Tbn6AfA9q3hnKDKfgOnCzXZ1FnDVuXlRTK9yIxEChcJF5XVWwD6w"}).REACT_APP_NEON_API_HOST_PROTOCOL;return"string"===typeof i&&i.length>0&&(n=String(i)),n},getApiHostName:function(){var n="".concat(window.location.host),i=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NEON_VERSION:"v0.0.1-SNAPSHOT",REACT_APP_NEON_ENV:"DEV",REACT_APP_NEON_SERVICE_API_TOKEN_HEADER:"X-API-Token",REACT_APP_NEON_SERVICE_API_TOKEN:"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJhdWQiOiJodHRwczovL2xvY2FsLWRhdGEubmVvbnNjaWVuY2Uub3JnL2FwaS92MC8iLCJzdWIiOiJsb2NhbC1yZWFjdC1hcHBzIiwic2NvcGUiOiJuZW9uOnNlcnZpY2UiLCJpc3MiOiJodHRwczovL2xvY2FsLWRhdGEubmVvbnNjaWVuY2Uub3JnLyIsImlhdCI6MTU5Nzg4NTE0N30.DtPgljmxh8WAtsGHMdxqiXzru4c5ZSg_z1Tbn6AfA9q3hnKDKfgOnCzXZ1FnDVuXlRTK9yIxEChcJF5XVWwD6w"}).REACT_APP_NEON_API_HOST;return"string"===typeof i&&i.length>0&&(n=String(i)),n},getApiHost:function(){return"".concat(E.getApiProtocol(),"//").concat(E.getApiHostName())}},a=E,u=t(157),_=function(n){var i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};return d()("".concat(a.getApiHost(),"/graphql"),i).then((function(n){return n.json()}))},s=function(){return Object(u.jsx)(c.a,{defaultVariableEditorOpen:!0,fetcher:_,defaultQuery:"\n# Type queries into this side of the screen,\n# and you will see intelligent typeaheads aware\n# of the current GraphQL type schema,\n# live syntax, and validation errors highlighted\n# within the text.\n\n# Here's a query for retrieving a single data product\n# as specified by the query variables window below.\nquery Product($productCode: String!) {\n  product (productCode: $productCode) {\n    productCode\n    productName\n    productDescription\n    productScienceTeam\n    productHasExpanded\n    productBasicDescription\n    productExpandedDescription\n    productPublicationFormatType\n    keywords\n    themes\n    siteCodes {\n      siteCode\n      availableMonths\n    }\n  }\n}\n",variables:'\n{\n  "productCode": "DP1.00001.001"\n}\n'})};t(238),t(239);o.a.render(s(),document.getElementById("root"))}},[[240,1,2]]]);
//# sourceMappingURL=main.24c69a60.chunk.js.map