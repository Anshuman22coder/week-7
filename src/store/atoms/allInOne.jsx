import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";


export const profile = atom({
    key:"profile",
    default:{
        img:"https://source.unsplash.com/random/200x200?sig=1",
        name:"Rita Correia",
        age:32,
        location: "london",
        followers:80000,
        Likes:803000,
        photos:1400
    }
})



export const backgroundChanger = atom({
    key:"backgroundChanger",
    default:""
})



export const paraGenerator = atom({
    key:"paraGenerator",
    default:0
})


export const gitHubInfo = atomFamily({
    key:"gitHubInfo",
    default: selectorFamily({
        key: 'githubInfoSelector',
        get: username => async() => {
          const res = await axios.get(`https://api.github.com/users/${username}`);
          console.log(res.data);
          return res.data
        },
      }),

})


const otp = ["","","",""]

export const login = atom({
    key:"login",
    default:otp
})

export const phoneNumber = atom({
    key:"phoneNumber",
    default:0,
})


export const otpError= atom(
    {
        key:"otpError",
        default: ''
    }
)



export const birthDayWishesAtom = atom(
    {
        key: "birthDayWishes",
        default: '',
    }
)

export const birthDaySelector = selector({
    key:"birthDaySelector",
    get: ({get})=>{
        return get(birthDayWishesAtom);
        
    }
})


