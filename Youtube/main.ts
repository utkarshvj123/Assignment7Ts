class Youtube{
    videoTitle:string;
    videoName:string;
    singerName:string;
    publishedOn:string;
    publishedBy:string;
    view:string;
    subscribe:string;
    like:string;
    comment:number;
    constructor(video_Title:string,video_Name:string,singer_Name:string,published_On:string,published_By:string,views:string,subscribes:string,likes:string,comments:number){
        this.videoTitle=video_Title;
        this.videoName=video_Name;
        this.singerName=singer_Name;
        this.publishedOn=published_On;
        this.publishedBy=published_By;
        this.view=views;
        this.subscribe=subscribes;
        this.like=likes;
        this.comment=comments;
    } //end of constructor
        getlikes=()=>{
            return this.like;
    }
    getVideoTitle=()=>{
        return this.videoTitle;
    }
    getVideoName=()=>{
        return this.videoName;
    }
    getSingerName=()=>{
        return this.singerName;
    }
    getPublishedOn=()=>{
        return this.publishedOn;
    }
    getPublishedBy=()=>{
        return this.publishedBy;
    }
    getViews=()=>{
        return this.view;
    }
    getSubscribe=()=>{
        return this.subscribe;
    }
    getComments=()=>{
        return this.comment;
    }
}//end of class

class YoutubeVideo extends Youtube{
    constructor(video_Title:string,video_Name:string,singer_Name:string,published_On:string,published_By:string,views:string,subscribes:string,likes:string,comments:number){
        super(video_Title,
            video_Name,
            singer_Name,
            published_On,
            published_By,
            views,
            subscribes,
            likes,
            comments)
    }
    comments=()=>{
        return this.publishedOn;

    }
    getVideoNewTrack =()=>{
        return this.videoTitle;
    }
    setVideoNewTrack(value:string){
        this.videoTitle=value;
    }//setting another video title
}//


//printing components of the class Youtube by creating object
let Songs = new Youtube("Humnava mere","Album","Jubin Nautiyal","22-may-2018","Zee Music","20million","2million","1million",100000)
console.log(Songs.videoTitle)
console.log(Songs.getlikes())
console.log(Songs.getComments())
console.log(Songs.getVideoTitle())
console.log(Songs.getPublishedBy())

//printing Component of Derived class YoutubeVideo By creating Object
let movieList=new YoutubeVideo("Perfect","Perfect Ed Sheran","Ed Sheeran","09-Nov.-2017","VFX","20million","32Million","1million",100000)
console.log("in videotrack before setter....."+movieList.getVideoNewTrack());
console.log(movieList.comments())
movieList.setVideoNewTrack("Let Her Go")//Set New Track By setter method
console.log("New videotrack....."+movieList.getVideoNewTrack());
