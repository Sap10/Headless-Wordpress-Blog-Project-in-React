import React from 'react';
import Posts from './Posts';

const Page = props =>{ 

const id = props.match.params.id;
//console.log(props.match.params.id);
return(
    <React.Fragment>
    <Posts pageId={id}/>
    </React.Fragment>
    );
}
export default Page;