var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Youtube = /** @class */ (function () {
    function Youtube(video_Title, video_Name, singer_Name, published_On, published_By, views, subscribes, likes, comments) {
        var _this = this;
        this.getlikes = function () {
            return _this.like;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getVideoName = function () {
            return _this.videoName;
        };
        this.getSingerName = function () {
            return _this.singerName;
        };
        this.getPublishedOn = function () {
            return _this.publishedOn;
        };
        this.getPublishedBy = function () {
            return _this.publishedBy;
        };
        this.getViews = function () {
            return _this.view;
        };
        this.getSubscribe = function () {
            return _this.subscribe;
        };
        this.getComments = function () {
            return _this.comment;
        };
        this.videoTitle = video_Title;
        this.videoName = video_Name;
        this.singerName = singer_Name;
        this.publishedOn = published_On;
        this.publishedBy = published_By;
        this.view = views;
        this.subscribe = subscribes;
        this.like = likes;
        this.comment = comments;
    } //end of constructor
    return Youtube;
}()); //end of class
var YoutubeVideo = /** @class */ (function (_super) {
    __extends(YoutubeVideo, _super);
    function YoutubeVideo(video_Title, video_Name, singer_Name, published_On, published_By, views, subscribes, likes, comments) {
        var _this = _super.call(this, video_Title, video_Name, singer_Name, published_On, published_By, views, subscribes, likes, comments) || this;
        _this.comments = function () {
            return _this.publishedOn;
        };
        _this.getVideoNewTrack = function () {
            return _this.videoTitle;
        };
        return _this;
    }
    YoutubeVideo.prototype.setVideoNewTrack = function (value) {
        this.videoTitle = value;
    }; //setting another video title
    return YoutubeVideo;
}(Youtube)); //
//printing components of the class Youtube by creating object
var Songs = new Youtube("Humnava mere", "Album", "Jubin Nautiyal", "22-may-2018", "Zee Music", "20million", "2million", "1million", 100000);
console.log(Songs.videoTitle);
console.log(Songs.getlikes());
console.log(Songs.getComments());
console.log(Songs.getVideoTitle());
console.log(Songs.getPublishedBy());
//printing Component of Derived class YoutubeVideo By creating Object
var movieList = new YoutubeVideo("Perfect", "Perfect Ed Sheran", "Ed Sheeran", "09-Nov.-2017", "VFX", "20million", "32Million", "1million", 100000);
console.log("in videotrack before setter....." + movieList.getVideoNewTrack());
console.log(movieList.comments());
movieList.setVideoNewTrack("Let Her Go"); //Set New Track By setter method
console.log("New videotrack....." + movieList.getVideoNewTrack());
