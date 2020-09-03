import {makeExecutableSchema} from "graphql-tools";
//makeExecutableSchema스키마와 리졸버를 결합하여 실행 가능한 스키마를 만듭니다
import {fileLoader,mergeResolvers,mergeTypes} from "merge-graphql-schemas";

import path from "path";
//fileLoader 함수의 인자로 파일의 경로를 입력해야 해
const allTypes = fileLoader(path.join(__dirname,"/api/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname,"/api/**/*.js"));
//API폴더 밑에는 resolver가 아닌 js파일을 두면 안돼!만약 resolver가 아닌 js파일을 둔다면 문제가 생길거야
//API폴더 밑에는 resolver나 graphql이 아닌 파일을 두면 안됨.

const schema = makeExecutableSchema({
    typeDefs:mergeTypes(allTypes),
    resolvers:mergeResolvers(allResolvers)
});

export default schema;