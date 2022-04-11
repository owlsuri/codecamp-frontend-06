import FunctionalComponentChildPage from "../21-01-functional-component-child";

export default function FunctionalComponentParentPage(){


    return(
        // <FunctionalComponentChildPage count={123}/>
        <>{FunctionalComponentChildPage({ count : 123 })}</>
    )
}