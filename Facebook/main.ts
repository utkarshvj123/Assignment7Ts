class Facebook{
    profileName:string;
    profilePassword:string;
    quote:string;
    mobileNumber:string;
    profilePicture:string;
    friendsList:string;
    mutualFriends:number;
    notifications:string;
    friendRequest:number;
    home:string;
    gmail:string;
    facebookId:string;
    totalFriends:number;
    constructor(){
        this.facebookId="utkarshvj09";
        this.gmail="utkarshvj09@gmail.com";
        this.mobileNumber="8871818128";
        this.friendRequest=30;
        this.totalFriends=748;
        this.home="this is your home page"
        this.mutualFriends=8;
        this.notifications="no notifications",
        this.profileName="Utkarsh Vijayvargiya"
        this.profilePassword="password001",
        this.profilePicture="image",
        this.quote="hii",
        this.friendsList="this is your friend list"

    }
    getFacebookId=()=>{
        return this.facebookId;
    }
    getGmail=()=>{
        return this.gmail;
    }
    getMobile=()=>{
        return this.mobileNumber;
    }
    getFriendRequest=()=>{
        return this.friendRequest;
    }
    getTotalFriends=()=>{
        return this.totalFriends;
    }
    getHome=()=>{
        return this.home;
    }
    getMutualFriends=()=>{
        return this.mutualFriends;
    }
    getNotifications=()=>{
        return this.notifications;
    }

}
let facebookResponse=new Facebook();
console.log("this is your fb id....+"+facebookResponse.getFacebookId())


class FacebookDetail extends Facebook{
    status: string = "hiii";
   superconstructor(){
  return  this.status="hii everyone";
    }
    getFacebookStatus=()=>{
        return this.status;
    }
}
let FacebookDetailDisplay=new FacebookDetail();
console.log(FacebookDetailDisplay.getFacebookStatus())
console.log(FacebookDetailDisplay.superconstructor())