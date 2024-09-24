import Home from "../ingredient/Home/index";
import Login from "../ingredient/Login/index";

import IdeaUser from "../ingredient/IdeaUser";
import IdeaDetails from "../ingredient/IdeaDetails";
import FogetPassword from "../ingredient/FogetPassword";
import UserInfor from "../ingredient/UserInfor";
import RegisterForm from "../ingredient/Register";
import ImageUpload from "../ingredient/uploadImage/ImageUpload";
import PushIdea from "../ingredient/PushIdea/PushIdea";
const publicRoutes = [
    {path: '/', component: Home },
    {path: 'user/login', component: Login},
    {path: 'user/forgotpassword', component: FogetPassword},
    {path: 'user/ideas', component: IdeaUser},
    {path: 'user/ideas/details/*', component: IdeaDetails},
    {path: 'user/infor', component: UserInfor},
    {path: 'user/register', component: RegisterForm},
    {path: 'user/upload', component: ImageUpload},
    {path: 'user/push_idea', component: PushIdea}
];

export { publicRoutes };
