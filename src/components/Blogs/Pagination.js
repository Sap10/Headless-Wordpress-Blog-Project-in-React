import React from 'react';
import {createPaginationArray} from '../../utils/functions';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Pagination = props => {

    const {currentPage,totalPage} = props;

    const isThereNextPage = currentPage < totalPage;
    const isTherePreviousPage = currentPage > 1; 
    const paginationArray = createPaginationArray(currentPage,totalPage);

    const getPageLink = (pageNo) => {
        return `/page/${pageNo}`;
    }
  
    return(
        <React.Fragment>
        <div>
        {isTherePreviousPage && 
            <NavLink 
            to={getPageLink(currentPage-1)} 
            onClick={()=>props.setCurrentPage(currentPage-1)}>Previous</NavLink>}
        {paginationArray && 
            paginationArray.map((item,index)=>{
                if('...' !== item && currentPage !== item){
                    return(
                        <React.Fragment key={`${item}-${index}`}>
                        <NavLink to={getPageLink(item)} onClick={()=>props.setCurrentPage(item)}>{item}</NavLink>
                        </React.Fragment>
                    )
                }else{
                    return(
                        <span key={`${item}-${index}`}>{item}</span>
                    )
                }
            })
        }
        {isThereNextPage && 
            <NavLink 
            to={getPageLink(currentPage+1)} 
            onClick={()=>props.setCurrentPage(currentPage+1)}>Next</NavLink>}
            
        </div>
        </React.Fragment>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage:(currentpage)=>dispatch(actions.setCurrentPage(currentpage))
    }
}

export default connect(null,mapDispatchToProps)(Pagination);