import React,{useState,useEffect} from "react";
import '../css/blog.css'
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import GetStarted from './home-component/get-started'
import blogImg from '../images/blog/b-1.jpg'
import axios from "axios";
import ApiPath from '../API/ApiPath'
import AESEncryption from "../CryptoJs/AESEncryption";
import FeatLoader from "./loader";
import BlogDetails from "./blog-details";


const siteKey = process.env.REACT_APP_GOOGLE_SITEKEY;
const BaseURL = process.env.REACT_APP_API_BASE_URL

const FeatBlog = () =>{

    const [Loader,setLoader]= useState({});
    const [Blogs,setBlogs] = useState({post:[]});

    useEffect(() => {
        fetchBlogs();
        console.log(Blogs,'blogs');
      },[]);

    const fetchBlogs = () => {
        setLoader({
            ...Loader,
            IsShow : true,
          });
        var blogRequest = {
            Id:0
          };
          const { Flag, Category } = ApiPath.BlogPostDetails;
      
          axios
            .post(BaseURL + "/" + Category + "/" + Flag, blogRequest)
            .then((res) => {
              setLoader({
                ...Loader,
                IsShow : false,
              });
              var data = AESEncryption.decrypt(res.data);
              if (data.Status) {
                // console.log(data, "response");
                setBlogs({
                 ...Blogs,
                 post: data.Response
                });
                console.log(Blogs,'blogs 1');
              } else {
                // console.log(data, "response");
              }
            })
            .catch((error) => {
              setLoader({
                ...Loader,
                IsShow : false,
              });
              console.log(error, "error ");
            });
    }
    return(
        <>
            <section className="client-section bg-vector">
                <div className="container">
                    <div className="row align-center column-reverse">      
                    <div className="col-lg-12 text-center">
                        <div className="cl-text">
                        <div>
                        <h2 className="h1 m-0">Read Blog</h2>                       
                        </div>
                        </div>
                        {/* <div className="gt-button">                           
                            <Link to="/contact" className="btn btn-dark">Get Started</Link>
                        </div> */}
                    </div>
                    
                    </div>
                </div>
            </section>
            <section className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">                       
                        <ul className="breadcrumb">
                            <li><Link to="/home">Home</Link></li>                            
                            <li>Blog</li>
                        </ul>                           
                    </div>
                    </div>
                </div>
            </section>
            
            <section className="tech-part-section">
                <div className="container">
                    <div className="row">                                   
                        <div className="col-lg-4 pd-10">
                            <div className="bldg-left">
                                <div className="cardcss">
                                    <div className="bldg-search-sec">
                                        <h2>Recent Post</h2>
                                        {Blogs && Blogs.post.map(posts => (
                                            <div className="posts-list">
                                                <div className="pst-img">
                                                    {/* <Link to={"/blog-details?name=salman"}><img src={posts.ImagePath} /></Link> */}
                                                    <Link to={'/blog-details?'+ posts.Id +'-' +posts.Title.replace(/\s+/g, '-')}></Link>
                                                </div>
                                                <div className="pstsDtls ml-auto">
                                                    <div className="ddcss">{posts.CreatedDateFormatted}</div>
                                                    {/* <Link  className="bldgttl" to={"/blog-details?name=salman"}><img src={posts.ImagePath} />{posts.Title}</Link> */}
                                                    <Link to={'/blog-details?'+ posts.Id +'-' +posts.Title.replace(/\s+/g, '-')}>{posts.Title}</Link>    
                                                    {/* <Link className="bldgttl" to="/blog-details">
                                                    {posts.Title}
                                                    </Link> */}
                                                </div>
                                            </div>
                                        ))}
                                            
                                            {/* <div className="posts-list">
                                                <div className="pst-img">
                                                    <Link to="/blog-details"><img src={blogImg} /></Link>
                                                </div>
                                                <div className="pstsDtls ml-auto">
                                                    <div className="ddcss">27/Apr/2021  11:57: AM</div>
                                                    <Link className="bldgttl" to="/blog-details">
                                                        5 Reasons to invest in Chatbots and RPA automation in a growing pandemic
                                                    </Link>
                                                </div>
                                            </div> */}
                                                
                                    </div>
                                </div>
                            </div>
                        </div>   
                        <div className="col-lg-8">
                            <div className="row m-0">
                                
                                {Blogs && Blogs.post.map(posts => (
                                    <div className="col-lg-6 pd-10">
                                    <Link className="postCard"  to={'/blog-details?'+ posts.Id +'-' + posts.Title.replace(/\s+/g, '-')}>
                                        <div className="bldg-img">
                                            <img className="img-fluid" src={posts.ImagePath} align="post" />
                                        </div>
                                        <div className="pst-dtls">                                            
                                            <div className="pst-ttl">{posts.Title}</div>
                                            <div className="pst-dt"><span>{posts.CreatedDateFormatted}</span><span className="dot"></span></div>
                                        </div>
                                    </Link>
                                    </div>
                                ))}
                                {/* <div className="col-lg-6 pd-10">
                                    <Link className="postCard" to="/blog-details">
                                        <div className="bldg-img">
                                            <img className="img-fluid" src={blogImg} align="post" />
                                        </div>
                                        <div className="pst-dtls">                                            
                                            <div className="pst-ttl"> 5 Reasons to invest in Chatbots and RPA automation in a growing pandemic</div>
                                            <div className="pst-dt"><span>27/Apr/2021  11:57: AM</span><span className="dot"></span></div>
                                        </div>
                                    </Link>
                                </div> */}
                            </div>
                        </div>                      
                    </div>
                </div>
                </section>
            <FeatLoader isShow={Loader.IsShow}/>           
            <GetStarted/>
            
        </>   
    );
};

export default FeatBlog;