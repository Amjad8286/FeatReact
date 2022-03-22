import React,{useState,useEffect}  from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import GetStarted from './home-component/get-started';
import LeadForm from './lead-form/lead-from';
import blogImg from '../images/blog/b-1.jpg';
import ApiPath from '../API/ApiPath'
import AESEncryption from "../CryptoJs/AESEncryption";
import FeatLoader from "./loader";
import axios from "axios";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {useSearchParams } from "react-router-dom";
import '../css/tech-css.css';

const BaseURL = process.env.REACT_APP_API_BASE_URL

const BlogDetails = () =>{
    const [Loader,setLoader]= useState({});
    const [Blogs,setBlogs] = useState({post:[]});

    useEffect(() => {
        const queryString = window.location.search;
        const queryParams = new URLSearchParams(queryString);
        console.log(queryParams.toString().split('-')[0]);
        if (queryParams.toString().split("-")[0].length > 0) {
          fetchBlogs(queryParams.toString().split("-")[0]);
        }
        console.log(Blogs,'blogs');
      },[]);

    const fetchBlogs = (_id) => {
        setLoader({
            ...Loader,
            IsShow : true,
          });
        var blogRequest = {
            Id:_id
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
    if(Blogs && Blogs.post.length> 0){
        return(
            <>
                
                <section className="client-section bg-vector bg-cover" style={{backgroundImage:  'url("'+Blogs.post[0].ImagePath+'")'}}>
                    <div className="container">
                        <div className="row align-center column-reverse">      
                        <div className="col-lg-12">
                            <div className="cl-text">
                                <h1 className="h1 m-0 white-text">{Blogs.post[0].Title}</h1>
                            </div>
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
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li>{Blogs.post[0].Title}</li>
                                </ul> 
                        </div>
                        </div>
                    </div>
                </section>
    
    
                <section className="tech-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="tech-box">
                                <div>
                                    { ReactHtmlParser(Blogs.post[0].Description) }
                                  
                                    {/* <h2 className="bassHead">IoT and Business Automation</h2>
    
                                    <p className="bassTxt">
                                        The Internet of Things (IoT) is a well-connected network of physical devices that communicate with each other using a machine-to-machine (M2M) communication. IoT plays a vital role in businesses today as the information gets traversed between devices with ease, and dependent processes can be automated without any human intervention. So, with IoT, end-to-end functioning of the Invoice process or handling customer accounts in a bank can be visualized without any interference of the manual workforce.
                                    </p>
                                    <p className="bassTxt">
                                        With IoT, the number of people involved in a business is reduced considerably, thereby, improving the accuracy level and reducing the processing time.
                                    </p>
                                    <h2 className="bassHead">Minimize errors   Increase up-time with the IoT</h2>
    
                                    <p className="bassTxt">A customer in any sector would demand an error-free transaction. Such processes are still a major goal in many industries and companies valuate error-free processes as the main priority. Connecting machines and allowing them to interact and control themselves through automation can lead to a reduction in errors to a great extent along with the reduction in dependency of members on completing certain tasks.</p>
    
                                    <p className="bassTxt">Apart from improving the accuracy, one other major benefit of IoT devices is their capability to increase the up-time. But, what does the term “up-time” mean for companies?</p>
    
                                    <p className="bassTxt">Most of the companies have fixed working hours for their employees. Some companies follow shift-wise working hours but compensate the employees by paying more salary. This means that most of the business processes are available only for a few hours per day or require high-level coordination between shift employees. But, with IoT devices, this is not the case. Here, machines are not restricted by time and can automate business processes to run 24/7. Hence, up-time is the amount of time a business is up and running that is considerably more for IoT devices.</p>
    
                                    <p className="bassTxt">Having said that, IoT devices should not be mistaken to replace the human community in the workforce. IoT processes will open up more value-based analytical roles for employees in a company along with programming and maintaining such IoT devices.</p>
    
                                    <p className="bassTxt">Let us give an example to understand the situation better. The traditional business employed engineers to fix faulty machinery and devices. But such processes consume a lot of time and the overall cost of the business would be affected due to the loss of efficiency. Whereas, when the same process is automated using IoT devices, it will notify the engineers where and what the problem is. Hence, an engineer needs to concentrate on repairing the process rather than spend quality time finding the errors. Therefore, problems can easily be identified and fixed to reduce the overall downtime as compared to the traditional method.</p>
    
                                    <h2 className="bassHead">IoT monitoring  and Analytics insights</h2>
                                    <p className="bassTxt">We cannot just account for the improved performance of the business process to define the benefit of the IoT but the analytics and logistics that are provided by such systems beautifies the IoT devices further. Understanding the reason behind a problem and identifying areas of improvement becomes much easier with IoT devices.</p>
    
                                    <p className="bassTxt">We can use Fleet management Industry to illustrate the importance of the IoT model. Each vehicle within the fleet is equipped with a GPS tracker and an M2M SIM card. Hence, the sensors of these devices allow the owner to track and monitor the movement of the vehicle in real-time.</p>
    
                                    <p className="bassTxt">Almost any process can be monitored with the help of IoT as long as the machine is equipped with the right sensors and equipment.</p>
                                    <h2 className="bassHead">Benefits to an organization by IoT for business automation:</h2>
                                    <ol className="item-list">
                                        <li className="mrb-5">
                                            Better connectivity between business processes.
                                        </li>
                                        <li className="mrb-5">
                                            Complete automation of business activities.
                                        </li>
                                        <li className="mrb-5">
                                            Data security and low data loss.
                                        </li>
                                        <li className="mrb-5">
                                            Effective management of data storage and retrieval.
                                        </li>
                                        <li className="mrb-5">
                                            Accuracy of data received and computational precision.
                                        </li>
                                        <li className="mrb-5">
                                            Higher productivity, low costing, and greater revenues.
                                        </li>
                                        <li className="mrb-5">
                                            Enhanced customer services.
                                        </li>
                                    </ol> */}
    
                                    <Link to="/blog" className="btn btn-primary mt-20">Read All Blog</Link>    
    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-box sticky-box">
                                    <div className="f-head">
                                        <h2>Interested in learning what RPA can do for your organization?</h2>
                                        <p>We're here to help.</p>
                                    </div>
                                    <LeadForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
                <FeatLoader isShow={Loader.IsShow}/>
                <GetStarted/>
    
            </>   
        );
    }
    else{
        return(
            <>
                <FeatLoader isShow={Loader.IsShow}/>
                <GetStarted/>
            </>
        );
    }
   
};

export default BlogDetails;