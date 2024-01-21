import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts} from "./blogReducers";
import { useEffect,useState } from "react";
import React from "react";
import Blogs from "./blogs";
import timeAgo from "./timeAgo";
import filterByCategory from "./sorting";
import LoadingSpinnerComponent from 'react-spinners-components';

  // Example usage:
  
  

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
    const [filter , setFilter] = useState('all')
      
    function selectCategary(value) {
        if(value !== 'all'){
          const filtervalue = filterByCategory(posts, value)
            
           
          return filtervalue
        }else {
         const filtervalue = [...posts]
         return filtervalue
        }
        
    }
   
    const filterData  = (selectCategary(filter))
   
   
    const getDynamicURL = () => {
        // Your logic to determine the URL dynamically
        return 'http://192.168.1.5:3000/api/blog'; // Update this with your dynamic URL
    };
    
   const clickEffect = (e) => {
    setFilter(e.target.value)
   }  
  
  
    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts(getDynamicURL()))
        }else if (postStatus === 'succeeded') {
            // Sort the posts based on their date property
           
          }
    }, [postStatus, dispatch])
 

    let content;
    if (postStatus === 'loading') {
        content = <div className='md:p-96 p-32 pt-32 '>
        <LoadingSpinnerComponent type={ 'Spinner' } color={ '#BA1168' } size={ '50px' } />
       </div>;
    } else if (postStatus === 'succeeded') {
        //lex  
        content = 
        <div>
            
           

           
            <div className="  w-10/12 md:pl-64 pl-12 text-secondery font-primaryFont text-start font-bold items-center md:text-l lg:text-xl text-sm pt-10 md:pt-28 ">
                <h3>{filter === 'all'? null : filter}</h3>
             </div>
        <div className=" pt-10 md:pt-28 flex  justify-center pb-16">

             
            <div className=" w-9/12 gap-y-10 md:gap-y-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filterData.sort((a, b) => new Date(b.date) - new Date(a.date)).map((post, index ) => (
            <div className=" transition ease-in-out delay-150 bg-blue-500 md:hover:-translate-y-1 md:hover:scale-110 md:hover:bg-indigo-500 duration-300"  key={post.id}>
            <Blogs 
              img = {post.src}
              title = {post.title + index  }
              contents = {post.contents}
              time = {timeAgo(post.date)}
              id = {post.id}
             
            />
        </div>))}
        </div>
        </div>
        </div>


    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            <div className=" text-secondery font-primaryFont text-center font-bold items-center md:text-xl lg:text-3xl text-2xl pt-28 md:pt-28 ">
                <h1>Blogs</h1>
            </div>
            <div className="flex justify-end w-10/12 pt-12 ">
            <select 
            className="h-8 md:h-10 text-sm md:text:xl text-textColor text-center rounded-xl bg-boxShadow box-shadow-xl" 
            name="catagery" 
            id="feilds"
            value={filter}
            onChange={clickEffect}
             >

             <option  value="CyberSecurity">cyberSecurity</option>
             <option value="blockchain" >blockchain</option>
             <option value="Programming" >programming</option>
             <option value="all" selected >all</option>
             </select>
            </div>
            {content}
        </section>
    )
}
export default PostsList