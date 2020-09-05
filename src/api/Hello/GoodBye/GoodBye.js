import {prisma} from "../../../../generated/prisma-client";
export default {
    Query:{
        sayGoodbye:async ()=>{
            console.log(await prisma.post());
            return "bye";
        }
    }
};
