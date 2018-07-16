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
var Facebook = /** @class */ (function () {
    function Facebook() {
        var _this = this;
        this.getFacebookId = function () {
            return _this.facebookId;
        };
        this.facebookId = "utkarshvj09";
        this.gmail = "utkarshvj09@gmail.com";
        this.mobileNumber = "8871818128";
        this.friendRequest = 30;
        this.totalFriends = 748;
        this.home = "this is your home page";
        this.mutualFriends = 8;
        this.notifications = "no notifications",
            this.profileName = "Utkarsh Vijayvargiya";
        this.profilePassword = "password001",
            this.profilePicture = "image",
            this.quote = "hii",
            this.friendsList = "this is your fried list";
    }
    return Facebook;
}());
var facebookResponse = new Facebook();
console.log("this is your fb id....+" + facebookResponse.getFacebookId());
var FacebookDetail = /** @class */ (function (_super) {
    __extends(FacebookDetail, _super);
    function FacebookDetail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.status = "hiii";
        _this.getFacebookStatus = function () {
            return _this.status;
        };
        return _this;
    }
    FacebookDetail.prototype.superconstructor = function () {
        return this.status = "hii everyone";
    };
    return FacebookDetail;
}(Facebook));
var FacebookDetailDisplay = new FacebookDetail();
console.log(FacebookDetailDisplay.getFacebookStatus());
console.log(FacebookDetailDisplay.superconstructor());
