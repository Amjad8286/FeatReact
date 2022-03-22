import {React,Component} from "react";

const ApiPath={
    GetData : {
        Flag : "GetData",
        Category : "Admin"
    },
    SendMail : {
        Flag : "SendEmail",
        Category : "Lead"
    },
    SendEmailFiboChatbot : {
        FLag : "SendEmailFiboChatbot",
        Category : "Lead"
    },
    SendEmailPigeon : {
        Flag : "SendEmailPigeon",
        Category : "Lead"
    },
    Pricing : {
        Flag : "Pricing",
        Category : "Lead"
    },
    AddPigeonPDD : {
        Flag : "AddPigeonPDD",
        Category : "Lead"
    },
    BlogPostDetails : {
        Flag:"V1/BlogPostDetails",
        Category : "Admin"
    },
    SaveLeadForm : {
        Flag : "SaveLeadForm",
        Category : "Admin"
    }

}

export default ApiPath;